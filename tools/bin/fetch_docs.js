// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

'use strict';

const fs = require('fs');
const fse = require('fs-extra');
const https = require('https');
const path = require('path');
const child_process = require('child_process');
const yaml = require('js-yaml');
const minimist = require('minimist');

const util = require('./util');

// constants
const DEFAULT_REPO_PATH = 'README.md';
const DEFAULT_VERSION_NAME = 'dev';
const DEFAULT_LANGUAGE_NAME = 'en';

const THIS_FILE = path.basename(__filename);
const WARNING_COMMENT = '<!-- WARNING: This file is generated. See ' + THIS_FILE + '. -->\n\n';

const argOptions = [
    { name: 'config', type: 'string', require: true, describe: '.yml file listing fetched files' },
    { name: 'docsRoot', type: 'string', require: true, describe: 'docs root directory' },
    { name: 'version', type: 'string', default: DEFAULT_VERSION_NAME, describe: 'version in which to save the downloaded files' },
    { name: 'language', type: 'string', default: DEFAULT_LANGUAGE_NAME, describe: 'language in which to save the downloaded files' },
    { name: 'dump', type: 'boolean', describe: 'only print the downloaded files' }
];
const formatedArgOptions = util.formatMinimistOptions(argOptions);
const argv = minimist(process.argv.slice(2), formatedArgOptions);

// helpers
function isPluginName (packageName) {
    return packageName.match(/cordova-plugin-.*/);
}

function getRepoFileURI (repoName, commit, filePath) {
    return 'https://raw.githubusercontent.com/' + repoName + '/' + commit + '/' + filePath;
}

function getRepoEditURI (repoName, commit, filePath) {
    return 'https://github.com/' + repoName + '/blob/' + commit + '/' + filePath;
}

function getLatestRelease (packageName) {
    const latestRelease = child_process.execSync('npm info ' + packageName + ' dist-tags.latest');
    return latestRelease.toString().trim();
}

function packageNameFromRepoName (repoName) {
    return repoName.split('/')[1];
}

function getFetchedFileConfig (entry) {
    // get entry components
    const srcConfig = entry.src;
    const destConfig = entry.dest;

    // validate entry
    if (!srcConfig) {
        console.error("entry '" + entry.toString() + "' missing 'src'");
        return;
    }

    if (!srcConfig.repoName) {
        console.error("entry '" + entry.toString() + "' missing 'repoName' in 'src'");
        return;
    }

    if (!srcConfig.repoName) {
        console.error("entry '" + entry.toString() + "' missing 'repoName' in 'src'");
        return;
    }

    if (!destConfig) {
        console.error("entry '" + entry.toString() + "' missing 'dest'");
        return;
    }

    if (!destConfig.path) {
        console.error("entry '" + entry.toString() + "' missing 'path' in 'dest'");
        return;
    }

    // complete src config
    if (!srcConfig.packageName) {
        srcConfig.packageName = packageNameFromRepoName(srcConfig.repoName);
    }

    if (!srcConfig.path) {
        srcConfig.path = DEFAULT_REPO_PATH;
    }

    if (!srcConfig.commit) {
        srcConfig.commit = getLatestRelease(srcConfig.packageName);
    }

    // make front matter
    const frontMatter = {
        edit_link: getRepoEditURI(srcConfig.repoName, srcConfig.commit, srcConfig.path),
        title: srcConfig.packageName
    };

    // set special front matter values for plugins
    if (isPluginName(srcConfig.packageName)) {
        frontMatter.plugin_name = srcConfig.packageName;
        frontMatter.plugin_version = srcConfig.commit;
    }

    // set returned values
    const fetchedFileConfig = {
        frontMatter,
        downloadURI: getRepoFileURI(srcConfig.repoName, srcConfig.commit, srcConfig.path),
        savePath: destConfig.path
    };

    return fetchedFileConfig;
}

function getFrontMatter (text) {
    const frontMatterString = util.getFrontMatterString(text);
    if (frontMatterString !== null) {
        return yaml.load(frontMatterString);
    }
    return {};
}

function setFrontMatter (text, frontMatter, options) {
    const frontMatterString = yaml.dump(frontMatter, options);
    return util.setFrontMatterString(text, frontMatterString);
}

function dumpEntries (downloadPrefix, entries) {
    entries.forEach(function (entry) {
        // validate entry's dest config
        if (!entry.dest) {
            console.error("entry '" + entry.toString() + "' missing 'dest'");
            return;
        }

        if (!entry.dest.path) {
            console.error("entry '" + entry.toString() + "' missing 'path' in 'dest'");
            return;
        }

        // print the save path for the entry
        if (entry.dest && entry.dest.path) {
            const filePath = path.join(downloadPrefix, entry.dest.path);
            console.log(filePath);

        // error out on invalid entries
        } else {
            console.error('Invalid dest: ' + entry);
            process.exit(1);
        }
    });
}

function downloadEntries (downloadPrefix, entries) {
    entries.forEach(function (entry) {
        // verify and process entry
        const fetchedFileConfig = getFetchedFileConfig(entry);
        if (!fetchedFileConfig) {
            process.exit(1);
        }

        // get info for fetching
        const fetchURI = fetchedFileConfig.downloadURI;
        const outFilePath = path.join(downloadPrefix, fetchedFileConfig.savePath);
        const outFileDir = path.dirname(outFilePath);

        // create directory for the file if it doesn't exist
        if (!fs.existsSync(outFileDir)) {
            fse.mkdirsSync(outFileDir);
        }

        console.log(fetchURI + ' -> ' + outFilePath);

        // open the file for writing
        const outFile = fs.createWriteStream(outFilePath);

        // open an HTTP request for the file
        https.get(fetchURI, function (response) {
            if (response.statusCode !== 200) {
                console.error('Failed to download ' + fetchURI + ': got ' + response.statusCode);
                process.exit(1);
            }

            // read in the response
            let fileContents = '';
            response.setEncoding('utf8');
            response.on('data', function (data) {
                fileContents += data;
            });

            // process the response when it finishes
            response.on('end', function () {
                // merge new front matter and file's own front matter (if it had any)
                //
                // NOTE:
                //      fileFrontMatter's properties should override those of newFrontMatter
                const newFrontMatter = fetchedFileConfig.frontMatter;
                const fileFrontMatter = getFrontMatter(fileContents);
                const mergedFrontMatter = util.mergeObjects(newFrontMatter, fileFrontMatter);

                // add a warning and set the merged file matter in the file
                let contentsOnly = util.stripFrontMatter(fileContents);
                contentsOnly = WARNING_COMMENT + contentsOnly;

                const augmentedContents = setFrontMatter(contentsOnly, mergedFrontMatter);

                // write out the file
                outFile.end(augmentedContents);
            }).on('error', function (e) {
                console.error(e);
            });
        }); // http request
    }); // entries
}

// main
function main () {
    const configFile = argv.config;
    const docsRoot = argv.docsRoot;
    const targetVersion = argv.version;
    const targetLanguage = argv.language;
    const printOnly = argv.dump;
    const downloadPrefix = path.join(docsRoot, targetLanguage, targetVersion);

    // validate args
    if (!fs.existsSync(configFile)) {
        console.error("Config file doesn't exist.");
        process.exit();
    }

    if (!fs.existsSync(docsRoot)) {
        console.error("Docs root doesn't exist.");
        process.exit();
    }

    // get config
    const fetchConfig = fs.readFileSync(configFile);
    const configEntries = yaml.load(fetchConfig);

    // just dump entries if --dump was passed
    if (printOnly === true) {
        dumpEntries(downloadPrefix, configEntries);

    // otherwise, fetch them
    } else {
        downloadEntries(downloadPrefix, configEntries);
    }
}

util.displayOptionHelpIfNeeded(argv, argOptions);

main();

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

"use strict";

var fs            = require("fs");
var fse           = require("fs-extra");
var https         = require("https");
var path          = require("path");
var child_process = require("child_process");
var yaml          = require("js-yaml");

var util = require("./util");

// constants
var DEFAULT_REPO_PATH = "README.md";

function generateFrontMatter(fetchedFile) {

    var frontMatter = {
        edit_link: fetchedFile.editLink,
        permalink: fetchedFile.permalink,
    };

    // set special values for plugins
    if (isPluginName(fetchedFile.packageName)) {
        frontMatter.plugin_name    = fetchedFile.packageName;
        frontMatter.plugin_version = fetchedFile.version;
    }

    return frontMatter;
}

function isPluginName(packageName) {
    return packageName.match(/cordova-plugin-.*/);
}

function getRepoFileURI(repoName, commit, filePath) {
    return "https://raw.githubusercontent.com/" + repoName + "/" + commit + "/" + filePath;
}

function getRepoEditURI(repoName, commit, filePath) {
    return "https://github.com/" + repoName + "/blob/" + commit + "/"+ filePath
}

function getLatestRelease(packageName) {
    var latestRelease = child_process.execSync("npm info " + packageName + " dist-tags.latest");
    return latestRelease.toString().trim();
}

function packageNameFromRepoName(repoName) {
    var repoSplit      = repoName.split('/');
    var repoOwner      = repoSplit[0];
    var actualRepoName = repoSplit[1];
    return actualRepoName;
}

function getFetchedFileConfig(entry) {

    // get entry components
    var srcConfig  = entry.src;
    var destConfig = entry.dest;

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

    if (!destConfig.permalink) {
        console.error("entry '" + entry.toString() + "' missing 'permalink' in 'dest'");
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

    // set returned values
    var fetchedFileConfig = {
        packageName: srcConfig.packageName,
        version:     srcConfig.commit,
        editLink:    getRepoEditURI(srcConfig.repoName, srcConfig.commit, srcConfig.path),
        permalink:   destConfig.permalink,
        downloadURI: getRepoFileURI(srcConfig.repoName, srcConfig.commit, srcConfig.path),
    };

    return fetchedFileConfig;
}

function getFrontMatter(text) {
    var frontMatterString = util.getFrontMatterString(text);
    if (frontMatterString !== null) {
        return yaml.load(frontMatterString);
    }
    return {};
}

function setFrontMatter(text, frontMatter) {
    var frontMatterString = yaml.dump(frontMatter);
    return util.setFrontMatterString(text, frontMatterString);
}

// main
function main () {

    var configFile = process.argv[2];
    var fetchRoot  = process.argv[3];

    // validate args
    if (!configFile) {
        console.error("Please specify config file.");
        process.exit(1);
    }

    if (!fetchRoot) {
        console.error("Please specify fetch root.");
        process.exit(1);
    }

    if (!fs.existsSync(configFile)) {
        console.error("Config file doesn't exist.");
        process.exit();
    }

    // ensure that the root for all fetched files exists
    if (!fs.existsSync(fetchRoot)) {
        fse.mkdirsSync(fetchRoot);
    }

    // get config
    var fetchConfig   = fs.readFileSync(configFile);
    var configEntries = yaml.load(fetchConfig);

    // fetch all files
    configEntries.forEach(function (entry) {

        // verify and process entry
        var fetchedFileConfig = getFetchedFileConfig(entry);
        if (!fetchedFileConfig) {
            return;
        }

        // get info for fetching
        var fetchURI    = fetchedFileConfig.downloadURI;
        var outFileName = fetchedFileConfig.packageName + ".md";
        var outFilePath = path.join(fetchRoot, outFileName);

        console.log(fetchURI + " -> " + outFilePath);

        // open the file for writing
        var outFile = fs.createWriteStream(outFilePath);

        // open an HTTP request for the file
        var request = https.get(fetchURI, function (response) {

            // read in the response
            var fileContents = '';
            response.setEncoding('utf8');
            response.on('data', function (data) {
                fileContents += data;
            });

            // process the response when it finishes
            response.on('end', function () {

                // merge new front matter and file's
                // own front matter (if it had any)
                var newFrontMatter    = generateFrontMatter(fetchedFileConfig);
                var fileFrontMatter   = getFrontMatter(fileContents);
                var mergedFrontMatter = util.mergeObjects(newFrontMatter, fileFrontMatter);

                // set merged file matter in the file
                var augmentedContents = setFrontMatter(fileContents, mergedFrontMatter);

                // write out the file
                outFile.end(augmentedContents);

            }).on('error', function(e) {
                console.error(e);
            });
        });
    }); // entries
}

main();

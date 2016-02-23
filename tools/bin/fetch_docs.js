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

// constants
var DEFAULT_REPO_PATH = "README.md";

function generateFrontMatter(fetchedFile) {

    var frontMatterConfig = {};

    frontMatterConfig.edit_link = fetchedFile.editLink;
    frontMatterConfig.permalink = fetchedFile.permalink;

    // set special values for plugins
    if (isPluginName(fetchedFile.packageName)) {
        frontMatterConfig.plugin_name    = fetchedFile.packageName;
        frontMatterConfig.plugin_version = fetchedFile.version;
    }
    return frontMatterConfig;
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

function getFetchedFile(entry) {

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
    var fetchedFile = {
        packageName: srcConfig.packageName,
        version:     srcConfig.commit,
        editLink:    getRepoEditURI(srcConfig.repoName, srcConfig.commit, srcConfig.path),
        permalink:   destConfig.permalink,

        downloadURI:   getRepoFileURI(srcConfig.repoName, srcConfig.commit, srcConfig.path),
        localFileName: srcConfig.packageName + ".md",
    };

    return fetchedFile;
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
        var fetchedFile = getFetchedFile(entry);
        if (!fetchedFile) {
            return;
        }

        // get info for fetching
        var fetchURI    = fetchedFile.downloadURI;
        var frontMatter = generateFrontMatter(fetchedFile);
        var outFilePath = path.join(fetchRoot, fetchedFile.localFileName);
        var outDirPath  = path.dirname(outFilePath);

        // ensure that the output directory exists
        if (!fs.existsSync(outDirPath)) {
            fs.mkdirSync(outDirPath);
        }

        console.log(fetchURI + " -> " + outFilePath);

        // open the file for writing
        var outFile = fs.createWriteStream(outFilePath);
        // open an HTTP request for the file
        var request = https.get(fetchURI, function (response) {
            var res = '';
            response.setEncoding('utf8');
            response.on('data', function(data) {
                res += data;
            });

            response.on('end', function() {
                var mergedFile = mergeFrontMatter(res, frontMatter);
                outFile.end(mergedFile);
            }).on('error', function(e) {
                console.error(e);
            });
        }); 
    }); // entries
}

main();

// If front matter exists in the source, merge it!
function mergeFrontMatter(originalFile, frontMatter) {
    var lines = originalFile.split(/\r?\n/);
    var mergedFile = originalFile;
    var endLine;
    if (lines[0] && lines[0] === "---") {
        for (var i = 1; i < lines.length; i++) {
            if(lines[i] && lines[i] === "---") {
                endLine = i;
                break;
            }
        }
    }
    if (endLine) {
        var fm = '';
        for (var j = 1; j <= endLine - 1; j++) {
            fm += lines[j] + '\n';
        }
        var fmFile = yaml.load(fm);
        Object.keys(fmFile).forEach(function(key) {
            frontMatter[key] = fmFile[key];
        });
        mergedFile = '';
        for (var j = endLine + 1; j < lines.length; j++) {
            mergedFile += lines[j] + '\n';
        }
    }
    mergedFile = "---\n" + yaml.dump(frontMatter) + "---\n\n" + mergedFile;
    return mergedFile; 
}

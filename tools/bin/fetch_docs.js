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

function generateFrontMatter (useDirectSrcURI, filePath, name, version) {
    var obj                 = {};

    if(useDirectSrcURI) {
        var p               = /https:\/\/raw.githubusercontent.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/(.+)/;
        var filePathSplit   = filePath.match(p);
        name                = filePathSplit[1] + "/" + filePathSplit[2];
        version             = filePathSplit[3];
        filePath            = filePathSplit.slice(4).join("/");
    }

    obj.edit_link           = getRepoURIForFrontMatter(name, version, filePath);
    obj.plugin_name         = name;
    obj.plugin_version      = version;

    var frontMatter         = "---\n" + yaml.dump(obj) + "\n---\n\n";
    return frontMatter;
}

function getRepoFileURI (name, version, filePath) {
    return "https://raw.githubusercontent.com/" + name + "/" + version + "/" + filePath;
}

function getRepoURIForFrontMatter (name, version, filePath) {
    return "https://github.com/" + name + "/blob/" + version + "/"+ filePath
}

function getLatestRelease (packageName) {
    var latestRelease = child_process.execSync("npm info " + packageName + " dist-tags.latest");
    return latestRelease.toString().trim();
}

function getPackageName (fileConfigSrc) {
    return fileConfigSrc.packageName || fileConfigSrc.repoName.split('/')[1];
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
    var config       = fs.readFileSync(configFile);
    var fetchedFiles = yaml.load(config);

    // fetch all entries
    fetchedFiles.forEach(function (fetchedFile) {

        if (!fetchedFile.dest) {
            fetchedFile.dest = getPackageName(fetchedFile) + "/index.md";
        }

        var outFilePath = path.join(fetchRoot, fetchedFile.dest);
        var outDirPath  = path.dirname(outFilePath);

        var fileURI, frontMatter;

        if (typeof(fetchedFile.src) === "string") {
            fileURI     = fetchedFile.src;
            frontMatter = generateFrontMatter(true, fileURI);
        } else {
            var packageName = getPackageName(fetchedFile.src);
            var filePath    = fetchedFile.src.path || DEFAULT_REPO_PATH;

            if (!fetchedFile.src.commit) {
                fetchedFile.src.commit = getLatestRelease(packageName);
            }

            fileURI     = getRepoFileURI(fetchedFile.src.repoName, fetchedFile.src.commit, filePath);
            frontMatter = generateFrontMatter(false, filePath, fetchedFile.src.repoName, fetchedFile.src.commit);
        }

        // ensure that the output directory exists
        if (!fs.existsSync(outDirPath)) {
            fs.mkdirSync(outDirPath);
        }

        console.log(fileURI + " -> " + outFilePath);

        var outFile = fs.createWriteStream(outFilePath);
        outFile.write(frontMatter, function () {

            // open an HTTP request for the file
            var request = https.get(fileURI, function (response) {
                // write the response to the file
                response.pipe(outFile);
            });
        });
    }); // entries
}

main();

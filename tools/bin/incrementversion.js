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

var fs     = require("fs");
var fse    = require("fs-extra");
var path   = require("path");
var argv   = require("optimist").argv;
var semver = require("semver");
var ncp    = require("ncp");

var util = require("./util");

// constants
var VERSION_FILE_NAME = "VERSION";
var DEV_VERSION_NAME  = "edge";
var ENCODING          = "utf8";

// helpers
function isValidVersion(version) {
    if (version == DEV_VERSION_NAME) {
        return false;
    }
    if (!semver.valid(version)) {
        return false;
    }
    return true;
}

function main () {

    // get args
    var docsRoot   = argv._[0];
    var tocRoot    = argv._[1];
    var newVersion = argv._[2];
    var language   = argv._[3];

    // validate args
    if (!docsRoot || !newVersion) {
        console.log("usage: docsRoot tocRoot newVersion [language]");
        return 1;
    }

    // get current version
    var oldVersion = fs.readFileSync(VERSION_FILE_NAME, ENCODING).trim();

    // sanity warning if old version is invalid
    if (!isValidVersion(oldVersion)) {
        console.warn("the current version in " + VERSION_FILE_NAME + " is not valid according to semver!");
    }

    // validate new version
    if (!isValidVersion(newVersion)) {
        console.error(newVersion + " is not a valid version");
        return 1;
    }

    // only create greater versions
    if (!semver.gt(newVersion, oldVersion)) {
        console.error(newVersion + " is not greater than " + oldVersion);
        return 1;
    }

    if (language) {
        console.log(oldVersion + " -> " + newVersion + " ONLY for " + language);
    } else {
        console.log(oldVersion + " -> " + newVersion + " for ALL languages");
    }

    // update the version file
    // NOTE:
    //      no newline is written at the end of the file
    fs.writeFileSync(VERSION_FILE_NAME, newVersion, ENCODING);

    // get languages to process
    if (language) {
        var languageNames = [language];
    } else {
        var languageNames = util.listdirsSync(docsRoot);
    }

    // go through all the languages
    languageNames.forEach(function (languageName) {

        // get the path to the dev version
        var devVersionPath = path.join(docsRoot, languageName, DEV_VERSION_NAME);
        var newVersionPath = path.join(docsRoot, languageName, newVersion);

        // get ToC file paths
        var devTocfile     = util.manualTocfileName(languageName, DEV_VERSION_NAME);
        var newTocfile     = util.manualTocfileName(languageName, newVersion);
        var devTocfilePath = path.join(tocRoot, devTocfile);
        var newTocfilePath = path.join(tocRoot, newTocfile);

        // check if it exists
        if (!fs.existsSync(devVersionPath)) {
            console.error("skipping language " + languageName + " because its " + DEV_VERSION_NAME + " version can't be found");
            return;
        }

        // sanity check: new version shouldn't exist yet
        if (fs.existsSync(newVersionPath)) {
            console.error(newVersionPath + " already exists!");
            return;
        }

        // copy the dev version to the new version path
        ncp.ncp(devVersionPath, newVersionPath, {stopOnErr: true}, function (error) {
            if (error) {
                return console.error(error);
            }
            console.log(newVersionPath + " created");
        });

        // if there is a manual ToC file for the dev version, create one for the new version
        if (fs.existsSync(devTocfilePath)) {
            var devToc = fs.readFileSync(devTocfilePath, ENCODING);
            var newToc = devToc.replace("/" + DEV_VERSION_NAME + "/", newVersion)
            fs.writeFile(newTocfilePath, newToc, ENCODING, function (error) {
                if (error) {
                    return console.error(error);
                }
                console.log(newTocfilePath + " created");
            });
        }
    });
}

main();

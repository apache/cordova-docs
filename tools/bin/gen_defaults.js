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

var fs   = require("fs");
var path = require("path");
var yaml = require("js-yaml");

var util = require("./util");

// constants
var USAGE = "Usage: gen_defaults.js [docsRoot] [latestVersion]"

var DEV_VERSION_NAME = "dev";

// constants for sitemap.xml
// reference:
//      http://www.sitemaps.org/protocol.html#xmlTagDefinitions
var LATEST_CHANGE_FREQUENCY = "monthly";
var LATEST_PAGE_PRIORITY    = 0.8;

var DEFAULT_CHANGE_FREQUENCY = "monthly";
var DEFAULT_PAGE_PRIORITY    = LATEST_PAGE_PRIORITY / 2;

var DEV_CHANGE_FREQUENCY = "daily";
var DEV_PAGE_PRIORITY    = LATEST_PAGE_PRIORITY / 4;

function main () {

    var rootDir           = process.argv[2];
    var latestVersionName = process.argv[3];

    var config = {"defaults": []};

    if (!rootDir) {
        console.error(USAGE);
        console.error("Please specify the docs root directory from which to generate defaults.");
        process.exit(1);
    }

    if (!latestVersionName) {
        console.error(USAGE);
        console.error("Please specify the latest version of the docs.");
        process.exit(1);
    }

    // set defaults for each language
    util.listdirsSync(rootDir).forEach(function (langName) {

        var langPath = path.join(rootDir, langName);
        var languageDefaults = {
            scope: {
                path: "docs/" + langName
            },
            values: {
                language: langName,
                layout:   "docs-" + langName
            }
        };

        config.defaults.push(languageDefaults);

        // set defaults for each version
        util.listdirsSync(langPath).forEach(function (versionName) {

            var manualToc    = util.manualTocfileName(langName, versionName);
            var generatedToc = util.generatedTocfileName(langName, versionName);

            var changeFrequency = DEFAULT_CHANGE_FREQUENCY;
            var pagePriority    = DEFAULT_PAGE_PRIORITY;

            // adjust priority and frequency based on version
            if (versionName === latestVersionName) {
                changeFrequency = LATEST_CHANGE_FREQUENCY;
                pagePriority    = LATEST_PAGE_PRIORITY;
            } else if (versionName == DEV_VERSION_NAME) {
                changeFrequency = DEV_CHANGE_FREQUENCY;
                pagePriority    = DEV_PAGE_PRIORITY;
            }

            var versionDefaults = {
                scope: {
                    path: "docs/" + langName + "/" + versionName
                },
                values: {
                    version:          versionName,
                    manual_toc:       manualToc.replace(".yml", ""),
                    generated_toc:    generatedToc.replace(".yml", ""),
                    change_frequency: changeFrequency,
                    priority:         pagePriority,
                }
            };

            config.defaults.push(versionDefaults);
        });
    });

    console.log(yaml.dump(config));
}

main();

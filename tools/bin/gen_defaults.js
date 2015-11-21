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
var DEV_VERSION_NAME = "dev";

// page change frequency for sitemap.xml
// reference:
//      http://www.sitemaps.org/protocol.html#xmlTagDefinitions
var DEV_CHANGE_FREQUENCY     = "daily";
var DEV_PAGE_PRIORITY        = 0.8;
var DEFAULT_CHANGE_FREQUENCY = "monthly";
var DEFAULT_PAGE_PRIORITY    = DEV_PAGE_PRIORITY / 2;

function main () {

    var rootDir = process.argv[2];
    var config  = {"defaults": []};

    if (!rootDir) {
        console.error("Please specify a directory from which to generate.");
        process.exit(1);
    }

    // go through directory that contains all languages
    util.listdirsSync(rootDir).forEach(function (langName) {

        var langPath = path.join(rootDir, langName);

        // define language scope
        config.defaults.push({
            scope: {
                path: "docs/" + langName
            },
            values: {
                language: langName,
                layout:   "docs-" + langName
            }
        });

        util.listdirsSync(langPath).forEach(function (versionName) {

            var manual    = util.manualTocfileName(langName, versionName);
            var generated = util.generatedTocfileName(langName, versionName);

            var versionDefaults = {
                scope: {
                    path: "docs/" + langName + "/" + versionName
                },
                values: {
                    version:       versionName,
                    manual_toc:    manual.replace(".yml", ""),
                    generated_toc: generated.replace(".yml", "")
                }
            };

            if (versionName === DEV_VERSION_NAME) {
                versionDefaults.values.change_frequency = DEV_CHANGE_FREQUENCY;
                versionDefaults.values.priority         = DEV_PAGE_PRIORITY;
            } else {
                versionDefaults.values.change_frequency = DEFAULT_CHANGE_FREQUENCY;
                versionDefaults.values.priority         = DEFAULT_PAGE_PRIORITY
            }

            // define version scope
            config.defaults.push(versionDefaults);
        });
    });

    console.log(yaml.dump(config));
}

main();

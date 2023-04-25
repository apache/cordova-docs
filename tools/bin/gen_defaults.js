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

const path = require('path');
const yaml = require('js-yaml');

const util = require('./util');

// constants
const USAGE = 'Usage: gen_defaults.js [docsRoot] [latestVersion]';
const DEV_VERSION_NAME = 'dev';

// constants for sitemap.xml
// reference:
//      http://www.sitemaps.org/protocol.html#xmlTagDefinitions
const LATEST_CHANGE_FREQUENCY = 'monthly';
const LATEST_PAGE_PRIORITY = 0.8;

const DEFAULT_CHANGE_FREQUENCY = 'monthly';
const DEFAULT_PAGE_PRIORITY = LATEST_PAGE_PRIORITY / 2;

const DEV_CHANGE_FREQUENCY = 'daily';
const DEV_PAGE_PRIORITY = LATEST_PAGE_PRIORITY / 4;

function main () {
    const rootDir = process.argv[2];
    const latestVersionName = process.argv[3];

    if (!rootDir) {
        console.error(USAGE);
        console.error('Please specify the docs root directory from which to generate defaults.');
        process.exit(1);
    }

    if (!latestVersionName) {
        console.error(USAGE);
        console.error('Please specify the latest version of the docs.');
        process.exit(1);
    }

    // create defaults config
    const config = { defaults: [] };

    // set defaults for each language
    util.listdirsSync(rootDir).forEach(function (langName) {
        const langPath = path.join(rootDir, langName);
        const languageDefaults = {
            scope: {
                path: 'docs/' + langName
            },
            values: {
                language: langName,
                layout: 'docs-' + langName
            }
        };

        config.defaults.push(languageDefaults);

        // set defaults for each version
        util.listdirsSync(langPath).forEach(function (versionName) {
            const tocfile = util.genTocfileName(langName, versionName);

            let changeFrequency = DEFAULT_CHANGE_FREQUENCY;
            let pagePriority = DEFAULT_PAGE_PRIORITY;

            // adjust priority and frequency based on version
            if (versionName === latestVersionName) {
                changeFrequency = LATEST_CHANGE_FREQUENCY;
                pagePriority = LATEST_PAGE_PRIORITY;
            } else if (versionName === DEV_VERSION_NAME) {
                changeFrequency = DEV_CHANGE_FREQUENCY;
                pagePriority = DEV_PAGE_PRIORITY;
            }

            let current = false;
            if (versionName === latestVersionName || versionName === DEV_VERSION_NAME) {
                current = true;
            }

            const versionDefaults = {
                scope: {
                    path: 'docs/' + langName + '/' + versionName
                },
                values: {
                    version: versionName,
                    tocfile: tocfile.replace('.yml', ''),
                    change_frequency: changeFrequency,
                    priority: pagePriority,
                    current
                }
            };

            config.defaults.push(versionDefaults);
        });
    });

    console.log(util.generatedBy(__filename));
    console.log(yaml.dump(config, { indent: 4 }));
}

main();

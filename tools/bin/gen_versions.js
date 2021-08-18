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

var path = require('path');
var yaml = require('js-yaml');
const semver = require('semver');
var util = require('./util');

// constants
var LANGUAGE_MAP = {
    de: 'Deutsch',
    en: 'English',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    ja: '日本語',
    ko: '한국어',
    pl: 'Polski',
    ru: 'Русский',
    sl: 'Slovene',
    'zh-cn': '简体中文',
    'zh-tw': '繁體中文'
};

function main () {
    var scriptName = process.argv[1];
    var rootDir = process.argv[2];
    var config = {};

    if (!rootDir) {
        console.error('Please specify a directory from which to generate.');
        process.exit(1);
    }

    // go through directory that contains all languages
    util.listdirsSync(rootDir).forEach(function (langId) {
        var langPath = path.join(rootDir, langId);
        var versionNames = util.listdirsSync(langPath);

        // Remove dev version for semver sort. We'll add it back later.
        versionNames.splice(versionNames.indexOf('dev'), 1);

        // semver doesn't like a value of 10.x, so we'll coerce the values into proper 10.0.0,
        // and store a map to easily convert map our sorted away back to our desired text.
        const coercionMap = {};
        versionNames = versionNames.map((v) => {
            const coerced = semver.coerce(v).toString();
            coercionMap[coerced] = v;
            return coerced;
        });

        versionNames = semver.sort(versionNames);

        // Now we can restore our desired labelling
        versionNames = versionNames.map((v) => coercionMap[v]);

        // Finally, don't forget to restore our dev version
        versionNames.push('dev');

        // get language ID
        var langName = LANGUAGE_MAP[langId];
        if (!langName) {
            console.error("Language identifier '" + langId + "' doesn't have an associated name. Please fix that by changing " + scriptName + '.');
            process.exit(1);
        }

        // set the language name and the versions it has
        config[langId] = {
            name: langName,
            versions: versionNames
        };
    });

    console.log(util.generatedBy(__filename));
    const schema = yaml.DEFAULT_SAFE_SCHEMA;
    console.log(yaml.dump(config, { indent: 4, schema }));
}

main();

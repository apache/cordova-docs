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
var LANGUAGE_MAP = {
    "de": "Deutsch",
    "en": "English",
    "es": "Español",
    "fr": "Français",
    "it": "Italiano",
    "ja": "日本語",
    "ko": "한국어",
    "pl": "Polski",
    "ru": "Русский",
    "sl": "Slovene",
    "zh": "汉语",
};

function main () {

    var rootDir = process.argv[2];
    var config = {};

    if (!rootDir) {
        console.error("Please specify a directory from which to generate.");
        process.exit(1);
    }

    // go through directory that contains all languages
    util.listdirsSync(rootDir).forEach(function (langId) {

        var langPath     = path.join(rootDir, langId);
        var versionNames = util.listdirsSync(langPath);

        config[langId] = {
            'name':     LANGUAGE_MAP[langId],
            'versions': versionNames
        };
    });

    console.log(yaml.dump(config));
}

main();

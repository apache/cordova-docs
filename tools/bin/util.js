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

module.exports = function () {

    var fs   = require("fs");
    var path = require("path");

    return {

        stripFrontMatter: function(text) {

            var marker = "---";

            var firstMarker = text.indexOf(marker);
            if (firstMarker === (-1)) {
                return text;
            }

            var secondMarker = text.indexOf(marker, firstMarker + marker.length);
            var start        = secondMarker + marker.length;

            return text.slice(start);
        },

        listdirsSync: function (root) {
            return fs.readdirSync(root).filter(function(fileName) {
                return fs.statSync(path.join(root, fileName)).isDirectory();
            });
        },

        tocfileName: function(language, version, suffix) {
            var versionSlug = version.replace(/\./g, "-");
            if (suffix) {
                suffix = "-" + suffix;
            } else {
                suffix = "";
            }
            return language + "-" + versionSlug + suffix + ".yml";
        },

        manualTocfileName: function(language, version) {
            return module.exports.tocfileName(language, version, "manual");
        },

        generatedTocfileName: function(language, version) {
            return module.exports.tocfileName(language, version, "generated");
        },
    }
}();

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

    function stripFrontMatter(text) {

        // get and replace front matter if it's there
        // NOTE:
        //      String.replace() replaces only the first occurrence
        //      of a string, which is what we want
        var rawFrontMatterString = getRawFrontMatterString(text);
        if (rawFrontMatterString !== null) {
            return text.replace(rawFrontMatterString, "");
        }

        return text;
    }

    function getFrontMatterString(text) {
        var rawFrontMatterString = getRawFrontMatterString(text);
        if (rawFrontMatterString !== null) {

            // strip out front matter markers
            var frontMatterString = rawFrontMatterString.replace(/^---\s*$/gm, "")
            return frontMatterString;
        }

        return null;
    }

    function setFrontMatterString(text, frontMatterString) {
        var textOnly = stripFrontMatter(text);
        var newText  = "---\n" + frontMatterString + "---\n\n" + textOnly;
        return newText;
    }

    function getRawFrontMatterString(text) {
        // NOTE:
        //      [\s\S]  matches all characters
        //      *?      non-greedy *-match
        var match = text.match(/^(---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n)[\s\S]*$/);
        if (match === null) {
            return null;
        }
        return match[1];
    }

    function listdirsSync(root) {
        return fs.readdirSync(root).filter(function(fileName) {
            return fs.statSync(path.join(root, fileName)).isDirectory();
        });
    }

    function tocfileName(language, version, suffix) {
        var versionSlug = version.replace(/\./g, "-");
        if (suffix) {
            suffix = "-" + suffix;
        } else {
            suffix = "";
        }
        return language + "-" + versionSlug + suffix + ".yml";
    }

    function manualTocfileName(language, version) {
        return tocfileName(language, version, "manual");
    }

    function generatedTocfileName(language, version) {
        return tocfileName(language, version, "generated");
    }

    function mergeObjects(a, b) {
        var c = {};
        Object.keys(a).forEach(function (key) {
            c[key] = a[key];
        });
        Object.keys(b).forEach(function (key) {
            c[key] = b[key];
        });
        return c;
    }

    return {
        stripFrontMatter:        stripFrontMatter,
        getFrontMatterString:    getFrontMatterString,
        setFrontMatterString:    setFrontMatterString,
        getRawFrontMatterString: getRawFrontMatterString,
        listdirsSync:            listdirsSync,
        tocfileName:             tocfileName,
        manualTocfileName:       manualTocfileName,
        generatedTocfileName:    generatedTocfileName,
        mergeObjects:            mergeObjects,
    }
}();

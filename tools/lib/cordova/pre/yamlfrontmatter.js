/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/
/*jslint node: true */
var fs = require("fs-extra"),
    path = require("path"),
    yaml = require("js-yaml");

var YamlFrontMatter = (function () {
    'use strict';

    /**
    * Creates a new instance of FileMerger
    * @param options Options for the generation process.
    */
    function YamlFrontMatter(options) {
        this.options = options || { verbose: 0 };
        this.stage = "Starting YAML stripping";
    }

    YamlFrontMatter.prototype.run = function (file) {
        if (this.options.verbose > 1) {
            console.log("String YAML from file " + file);
        }

        var content = fs.readFileSync(file, "utf8"),
            yamlRegexStripper = /^(---\s*\n[\s\S]*?\n?)^(---\s*$\n?)/m,
            match = yamlRegexStripper.exec(content),
            yamlData;
        if (match === null) {
            return {};
        }

        try {
            yamlData = yaml.safeLoad(match[1]);
        } catch (yamle) {
            console.error("File: " + file);
            if (this.options.verbose > 1) {
                console.error("YAML Exception during processing following content:\n" + content);
            }

            throw yamle;
        }

        content = content.substr(match[0].length);
        fs.writeFileSync(file, content);
        return yamlData;
    };

    return YamlFrontMatter;
}());
module.exports = YamlFrontMatter;

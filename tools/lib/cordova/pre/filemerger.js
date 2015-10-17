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
    FileHelpers = require("../../file_helpers");

var FileMerger = (function () {
    'use strict';

    var config = null;

    /**
    * Creates a new instance of FileMerger
    * @param options Options for the generation process.
    */
    function FileMerger(options) {
        this.options = options || { verbose: 0 };
        this.stage = "Merge files";

        config = null;
    }

    FileMerger.prototype.run = function (file) {
        if (this.options.verbose > 1) {
            console.log("Merge file " + file);
        }

        if (file.match(/\/guide\//)) {
            return null;
        }

        if (!fs.existsSync(file)) {
            return null;
        }

        this.filename  = path.basename(file);
        this.directory = path.dirname(file);

        var filesToAppend,
            cfg = this.config(),
            i,
            filepath;
        if (!cfg.hasOwnProperty(this.filename)) {
            return null;
        }

        filesToAppend = cfg[this.filename];
        for (i = 0; i < filesToAppend.length; i += 1) {
            filepath = filesToAppend[i];

            // skip the file that we're merging into because it's listed in config.json
            if (path.basename(filepath) === this.filename) {
                if (this.options.verbose > 0) {
                    console.log("Skipping " + filesToAppend[i] + " from " + this.filename + " section since it has same base name as file to merge");
                }
            } else {
                filepath = path.join(FileHelpers.getTmpDirectory(), 'docs', filepath);
                fs.appendFileSync(file, "\n\n---\n");
                if (!fs.existsSync(filepath)) {
                    console.log("File " + filepath + " is missing and thus don't merged with " + file);
                } else {
                    fs.appendFileSync(file, fs.readFileSync(filepath, "utf-8").trim());
                    fs.removeSync(filepath);
                }
            }
        }
    };

    FileMerger.prototype.config = function () {
        if (config !== null) {
            return config;
        }

        var directory = this.directory,
            file,
            configJSON;
        while (config === null) {
            file = path.join(directory, 'config.json');
            if (fs.existsSync(file)) {
                configJSON = fs.readFileSync(file);
                config = JSON.parse(configJSON).merge;
            } else {
                directory = fs.dirname(directory);
            }
        }

        return config;
    };

    return FileMerger;
}());
module.exports = FileMerger;

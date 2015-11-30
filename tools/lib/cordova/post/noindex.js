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
var fs = require("fs-extra");
var path = require("path");
var cheerio = require('cheerio'),
    FileHelpers = require("../../file_helpers");

/**
* Preprocessor which adds meta tag robot=noindex, to all not latest versions of the docs.
*/
var NoIndex = (function () {
    'use strict';
    var latestVersion = null;

    function getLatestIndex() {
        // skip if we have the latest version
        if (latestVersion !== null) {
            return latestVersion;
        }

        // collect all english versions because they are the most up-to-date
        var docs_path = FileHelpers.getDefaultInputDirectory(),
            versions  = [],
            lang_dir = path.join(docs_path, 'en'),
            version_dirs,
            last;

        version_dirs = fs.readdirSync(lang_dir);
        version_dirs.forEach(function (version) {
            var configFile = path.join(lang_dir, version, "config.json"),
                configData = JSON.parse(fs.readFileSync(configFile));
            versions.push(version);
        });

        // sort the version list because Dir does not guarantee an order
        versions.sort().reverse();

        // we want the latest stable release
        // if dev is the most recent, remove it
        last = versions.shift();
        if (last === 'dev') {
            last = versions.shift();
        }

        // return the latest version
        latestVersion = last;
        return last;
    }

    function createNoIndexMeta() {
        var element = cheerio("<meta></meta>");
        element.attr('name', 'robots');
        element.attr('label', 'noindex');
        return element;
    }

    /**
    * Creates a new instance of FileMerger
    * @param options Options for the generation process.
    */
    function NoIndex(options) {
        latestVersion = getLatestIndex();
        this.options = options || { verbose: 0 };
        this.stage = "Insert noindex";
    }

    NoIndex.prototype.run = function (file, $) {
        if (!file.match(/\.html$/)) {
            return null;
        }

        var version = this.options.version,
            language = this.options.lang,
            meta_tags;
        if (latestVersion === version && language === 'en') {
            if (this.options.verbose > 1) {
                console.log("File belongs to language " + language + " and version " + version + " which is assumed to be latest");
            }

            return;
        }

        meta_tags = $('head meta');
        meta_tags.append(createNoIndexMeta());
    };

    return NoIndex;
}());
module.exports = NoIndex;

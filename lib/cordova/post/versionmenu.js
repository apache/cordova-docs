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
var cheerio = require('cheerio');

/**
* Preprocessor which updates top stripe with header or the page.
*/
var VersionMenu = (function () {
    'use strict';
    var languages = [],
        versions = [];

    
    /**
    * Creates a new instance of FileMerger
    * @param options Options for the generation process.
    */
    function VersionMenu(options) {
        this.options = options;
        this.stage = "Populate version menu";
        this.buildVersionsData();
    }
    
    VersionMenu.prototype.run = function (file) {
        if (this.options.verbose > 1) {
            console.info("Building version menu for file " + file);
        }
        
        var $ = cheerio.load(fs.readFileSync(file)),
            element;
        
        element = $('#header small select');
        this.generateMenu().forEach(function (optionGroup) {
            element.append(optionGroup);
        });
        fs.writeFileSync(file, $.html());
    };
    
    VersionMenu.prototype.buildVersionsData = function () {
        var docs_path = path.resolve(path.join(module.filename, '..', '..', '..', '..', 'docs')),
            lang_dirs;
        
        lang_dirs = fs.readdirSync(docs_path);
        lang_dirs.forEach(function (lang) {
            versions[lang] = [];
            var lang_dir = path.join(docs_path, lang),
                version_dirs;
            version_dirs = fs.readdirSync(lang_dir);
            version_dirs.forEach(function (version) {
                var configFile = path.join(lang_dir, version, "config.json"),
                    configData = JSON.parse(fs.readFileSync(configFile));
                versions[lang].push(version);
                languages[lang] = configData.language;
            });
        });
    };
    
    VersionMenu.prototype.generateMenu = function () {
        var result = [],
            langGroup,
            versionData,
            versionOption,
            lang,
            versionIndex,
            version;
        
        for (lang in languages) {
            if (languages.hasOwnProperty(lang)) {
                langGroup = cheerio("<optgroup></optgroup>");
                langGroup.attr('value', lang);
                langGroup.attr('label', languages[lang]);

                versionData = versions[lang].map(function(item) {return item}).reverse();
                for (versionIndex = 0; versionIndex < versionData.length; versionIndex++) {
                    version = versionData[versionIndex];
                    versionOption = cheerio("<option></option>");
                    if (this.options.version === version && this.options.lang === lang) {
                        versionOption.attr('selected', 'selected');
                    }

                    versionOption.attr('value', version);
                    versionOption.text(version);
                    langGroup.append(versionOption);
                }

                result.push(langGroup);
            }
        }
        
        return result;
    };
    
    return VersionMenu;
}());
module.exports = VersionMenu;
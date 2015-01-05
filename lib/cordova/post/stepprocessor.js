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
var AddTitle = require("./addtitle"),
    TableOfContents = require("./tableofcontents"),
    VersionMenu = require("./versionmenu"),
    NavigationMenu = require("./navigationmenu"),
    Prettify = require("./prettify"),
    NoIndex = require("./noindex");

/**
* Preprocessor which updates top stripe with header or the page.
*/
var StepProcessor = (function () {
    'use strict';

    /**
    * Creates a new instance of StepProcessor
    * @param options Options for the generation process.
    */
    function StepProcessor(options) {
        this.options = options || { verbose: 0, timing: -1 };
        this.stage = "Step 1";
    }

    StepProcessor.prototype.run = function (file) {
        var self = this,
            $,
            steps;
        if (path.extname(file) !== ".html") {
            return;
        }

        $ = cheerio.load(fs.readFileSync(file));
        steps = [AddTitle,  TableOfContents, VersionMenu, NavigationMenu, Prettify, NoIndex];
        steps.forEach(function (StepConstructor) {
            var stepObject = new StepConstructor(self.options);
            stepObject.run(file, $);
        });
        // Do actual work here
        fs.writeFileSync(file, $.html());
    };

    return StepProcessor;
}());
module.exports = StepProcessor;

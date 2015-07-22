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
var UpdateKeywordIndex = (function () {
    'use strict';
    var header_title  = 'Keyword Index',
        content_title = 'Keyword Index';

    /**
    * Creates a new instance of FileMerger
    * @param options Options for the generation process.
    */
    function UpdateKeywordIndex(options) {
        this.options = options || { verbose: 0 };
        this.stage = "Update keywork index";
        this.header_title = header_title;
        this.content_title = content_title;
    }

    UpdateKeywordIndex.prototype.run = function (file) {
        if (path.basename(file) !== "_index.html") {
            return false;
        }

        if (this.options.verbose > 1) {
            console.info("Update keyword index");
        }

        var $ = cheerio.load(fs.readFileSync(file)),
            element,
            content;
        element = $('#subheader > h1');
        if (element.length !== 0) {
            element = $(element[0]);
            element.text(header_title);
        }

        element = $('#content > h1');
        if (element.length !== 0) {
            element = $(element[0]);
            element.text(content_title);
        }

        element = $('#content > hr');
        if (element.length !== 0) {
            element = $(element[0]);
            element.remove();
        }

        content = $.html();
        content = content.replace(/"index\.md\.html/g, '"index.html');
        fs.writeFileSync(file, content);
    };

    return UpdateKeywordIndex;
}());
module.exports = UpdateKeywordIndex;

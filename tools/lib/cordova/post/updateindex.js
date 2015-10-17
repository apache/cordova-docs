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
var UpdateIndex = (function () {
    'use strict';
    var header_title  = 'Home';

    /**
    * Creates a new instance of FileMerger
    * @param options Options for the generation process.
    */
    function UpdateIndex(options) {
        this.options = options || { verbose: 0 };
        this.stage = "Update index";
        this.header_title = header_title;
    }

    UpdateIndex.prototype.run = function (file) {
        if (path.basename(file) !== "index.md.html") {
            return false;
        }

        if (this.options.verbose > 1) {
            console.info("Update index");
        }

        var $ = cheerio.load(fs.readFileSync(file)),
            title_target;
        title_target = $('#subheader > h1');
        if (title_target.length !== 0) {
            title_target = $(title_target[0]);
            title_target.text(header_title);
        }

        fs.writeFileSync(file, $.html());
        fs.renameSync(file, path.join(path.dirname(file), "index.html"));
        return true;
    };

    return UpdateIndex;
}());
module.exports = UpdateIndex;

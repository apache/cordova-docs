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
var TableOfContents = (function () {
    'use strict';

    /**
    * Creates a new instance of TableOfContents
    * @param options Options for the generation process.
    */
    function TableOfContents(options) {
        this.options = options || { verbose: 0 };
        this.stage = "Building TOC";
    }

    TableOfContents.prototype.run = function (file, doc) {
        var filenamePart = path.basename(file),
            option_set = [],
            current_h1 = "",
            indentation = "\xa0\xa0\xa0\xa0\xa0\xa0",
            select,
            subheader;
        if (filenamePart === "_index.html" || filenamePart === "index.html" || filenamePart === "index.md.html") {
            return;
        }

        if (path.extname(file) !== ".html") {
            return;
        }

        doc("#content h1, #content h2").each(function (index, elementDom) {
            var element = cheerio(elementDom),
                child = element.children().first(),
                option,
                s,
                anchorName,
                anchor;
            if (elementDom.name === 'h1') {
                current_h1 = element.text();
                option = cheerio("<option></option");
                anchorName =  child.attr('name');
                if (anchorName !== null && anchorName !== undefined) {
                    anchorName = encodeURIComponent(anchorName);
                    option.attr('value', anchorName.replace(/\s/g, '%20'));
                }

                option.text(element.text());
                option_set.push(option);
            } else {
                // Remove all leading and trailing non-word characters
                // Replace all inner non-word characters with an underscore
                // Replace all spaces since encodeURIComponent not produce correct URI
                s = element.text()
                    .replace(/^\W+|\W+$/g, '')
                    .replace(/\W+/g, '_').toLowerCase();
                option = cheerio("<option></option>");
                anchorName = current_h1 + "_" + s;
                anchorName = encodeURIComponent(anchorName);
                anchorName = anchorName.replace(/%2520/g, '%20');
                option.attr('value', anchorName);
                option.text(indentation + "- " + element.text());
                option_set.push(option);

                anchor = cheerio("<a></a>");
                anchor.attr('name', anchorName);
                anchor.text(element.text());
                element.text('');
                element.append(anchor);
            }
        });

        // Return if one or less elements found (useless selection box)
        if (option_set.length <= 1) {
            return null;
        }

        // Add select menu to the subheader
        select = cheerio("<select></select>");
        option_set.forEach(function (optionGroup) {
            select.append(optionGroup);
        });
        subheader = doc("#subheader > small").first();
        if (subheader.length === 0) {
            return null;
        }

        subheader.append(select);
        return option_set;
    };

    return TableOfContents;
}());
module.exports = TableOfContents;

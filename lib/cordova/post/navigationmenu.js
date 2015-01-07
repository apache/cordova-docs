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
* Preprocessor which updates top stripe with header or the page.
*/
var NavigationMenu = (function () {
    'use strict';

    /**
    * Creates a new instance of FileMerger
    * @param options Options for the generation process.
    */
    function NavigationMenu(options) {
        this.options = options || { verbose: 0 };
        this.stage = "Building navigation menu";
        this.sections = [];

        var filename = path.join(FileHelpers.getTmpDirectory(), 'jodoc', 'index.md.html'),
            $,
            h1_set,
            ul_set,
            count,
            i,
            links,
            appendLink;
        if (!fs.existsSync(filename)) {
            throw new Error("index.md.html was not generated in " + FileHelpers.getTmpDirectory() + "/jodoc");
        }
        $ = cheerio.load(fs.readFileSync(filename));
        h1_set   = $('#home > h1');
        ul_set   = $('#home > ul');
        count    = h1_set.length;

        function getAppender(links) {
            function appendLink(index, element) {
                links.push(element);
            }

            return appendLink;
        }
        
        for (i = 0; i < count; i += 1) {
            links = [];
            appendLink = getAppender(links);

            $('li > h2 > a', ul_set[i]).each(appendLink);

            this.sections.push({
                'title': $(h1_set[i]).text(),
                'links': links
            });
        }
    }

    NavigationMenu.prototype.run = function (file, $) {
        var i,
            section;
        if (path.extname(file) !== ".html") {
            return;
        }

        if (this.options.verbose > 1) {
            console.log("Appending file to nav menu " + file);
        }

        for (i = 0; i < this.sections.length; i += 1) {
            section = this.sections[i];
            this.insertTitle(section.title, $);
            this.insertLinks(section.links, $);
        }
    };

    NavigationMenu.prototype.insertTitle = function (title, $) {
        var element = cheerio("<h1></h1>");
        element.text(title);
        $('#sidebar').first().append(element).append("\n");
    };

    NavigationMenu.prototype.insertLinks = function (links, $) {
        var ul = cheerio("<ul></ul>"),
            li,
            i,
            link;

        ul.append("\n");
        for (i = 0; i < links.length; i += 1) {
            link = links[i];
            li = cheerio("<li></li>");
            li.append(link);
            ul.append(li).append("\n");
        }

        $('#sidebar').first().append(ul).append("\n");
    };

    return NavigationMenu;
}());
module.exports = NavigationMenu;

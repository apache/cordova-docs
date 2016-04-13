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

var fs       = require("fs");
var path     = require("path");
var yaml     = require("js-yaml");
var walk     = require("walk");
var glob     = require("glob");
var Q        = require("q");
var optimist = require("optimist");

var util = require("./util");

// constants
var LATEST_ALIAS_URI = "/latest/";

// helpers
function pathToURI(filePath, rootPath) {
    return filePath
        .replace(new RegExp("^" + rootPath), "")
        .replace(new RegExp("\\.md$"), ".html");
}

function pagesFromRedirects(redirects, languages) {
    var pages = {};

    // add docs redirects
    if (typeof redirects.docs !== "undefined") {
        for (var redirectSource in redirects.docs) {

            // add an entry for the redirect's source, once for each language
            for (var i = 0; i < languages.length; i++) {
                var language = languages[i];
                var pagePath = "/docs/" + language + "/" + redirectSource;

                pages[pagePath] = true;
            }
        }
    }

    return pages;
}

function isInLatestDocs(uri, latestVersion) {
    return uri.indexOf("/" + latestVersion + "/") !== (-1);
}

// main
function main () {

    // get args
    var argv = optimist
        .usage("Usage: $0 [options]")
        .demand("languages").describe("languages", "comma-separated list of docs languages")
        .demand("latestVersion").describe("latestVersion", "the current latest docs version")
        .demand("siteRoot").describe("siteRoot", "the source ToC for the given directory")
        .string("redirectsFile").describe("redirectsFile", "file containing redirects for the website").default("redirectsFile", null)
        .argv;

    var siteRootPath      = argv.siteRoot;
    var redirectsFilePath = argv.redirectsFile;
    var latestVersion     = argv.latestVersion;
    var languages         = argv.languages.split(",");

    // pages to return
    var pages = {};

    // add pages for redirects if a redirects file was passed
    if (redirectsFilePath !== null) {

        var redirectsString = fs.readFileSync(redirectsFilePath);
        var redirects       = yaml.load(redirectsString);
        var redirectsPages  = pagesFromRedirects(redirects, languages);

        pages = redirectsPages;
    }

    // add entries for all Markdown files in the site root
    var allMarkdownFiles = path.join(siteRootPath, "**/*.md");
    glob(allMarkdownFiles, function (error, filePaths) {
        for (var i = 0; i < filePaths.length; i++) {
            var filePath = filePaths[i];
            var fileURI  = pathToURI(filePath, siteRootPath);

            // add the page
            pages[fileURI] = true;

            // also add /latest/ version for pages in latest docs
            if (isInLatestDocs(fileURI, latestVersion)) {
                var latestURI = fileURI.replace("/" + latestVersion + "/", LATEST_ALIAS_URI);

                pages[latestURI] = true;
            }
        }

        // print output
        console.log(util.generatedBy(__filename));
        console.log(yaml.dump(pages));
    });
}

if (require.main === module) {
    main();
}

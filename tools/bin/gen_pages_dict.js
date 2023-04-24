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

'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const optimist = require('optimist');

const util = require('./util');

// constants
const LATEST_ALIAS_URI = '/latest/';

// helpers
function pathToURI (filePath, rootPath) {
    return filePath
        .replace(new RegExp('^' + rootPath), '')
        .replace(/\\.md$/, '.html');
}

function pagesFromRedirects (redirects, languages) {
    const pages = {};

    // add docs redirects
    if (typeof redirects.docs !== 'undefined') {
        for (const redirectSource in redirects.docs) {
            // add an entry for the redirect's source, once for each language
            for (let i = 0; i < languages.length; i++) {
                const language = languages[i];
                const pagePath = '/docs/' + language + '/' + redirectSource;

                pages[pagePath] = true;
            }
        }
    }

    return pages;
}

function isInLatestDocs (uri, latestVersion) {
    return uri.indexOf('/' + latestVersion + '/') !== (-1);
}

// main
function main () {
    // get args
    const argv = optimist
        .usage('Usage: $0 [options]')
        .demand('languages').describe('languages', 'comma-separated list of docs languages')
        .demand('latestVersion').describe('latestVersion', 'the current latest docs version')
        .demand('siteRoot').describe('siteRoot', 'the source ToC for the given directory')
        .string('redirectsFile').describe('redirectsFile', 'file containing redirects for the website').default('redirectsFile', null)
        .argv;

    const siteRootPath = argv.siteRoot;
    const redirectsFilePath = argv.redirectsFile;
    const latestVersion = argv.latestVersion;
    const languages = argv.languages.split(',');

    // pages to return
    let pages = {};

    // add pages for redirects if a redirects file was passed
    if (redirectsFilePath !== null) {
        const redirectsString = fs.readFileSync(redirectsFilePath);
        const redirects = yaml.load(redirectsString);
        const redirectsPages = pagesFromRedirects(redirects, languages);

        pages = redirectsPages;
    }

    // add entries for all Markdown files in the site root
    const allMarkdownFiles = path.join(siteRootPath, '**/*.md');
    glob(allMarkdownFiles, function (error, filePaths) {
        if (error) throw error;

        for (let i = 0; i < filePaths.length; i++) {
            const filePath = filePaths[i];
            const fileURI = pathToURI(filePath, siteRootPath);

            // add the page
            pages[fileURI] = true;

            // also add /latest/ version for pages in latest docs
            if (isInLatestDocs(fileURI, latestVersion)) {
                const latestURI = fileURI.replace('/' + latestVersion + '/', LATEST_ALIAS_URI);

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

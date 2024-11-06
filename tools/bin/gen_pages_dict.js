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
const minimist = require('minimist');

const util = require('./util');

const argOptions = [
    { name: 'languages', type: 'string', require: true, describe: 'comma-separated list of docs languages ' },
    { name: 'latestVersion', type: 'string', require: true, describe: 'the current latest docs version' },
    { name: 'siteRoot', type: 'string', require: true, describe: 'the source ToC for the given directory' },
    { name: 'redirectsFile', type: 'string', default: null, describe: 'file containing redirects for the website' }
];
const formatedArgOptions = util.formatMinimistOptions(argOptions);
const argv = minimist(process.argv.slice(2), formatedArgOptions);

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
    util.displayOptionHelpIfNeeded(argv, argOptions);
    main();
}

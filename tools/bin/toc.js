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

var fs   = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var walk = require("walk");
var Q    = require("q");
var argv = require("optimist").argv;

var util = require("./util");

function isUnderline(line) {
    return /-+|=+|\*+/.test(line);
}

function getPageTitle(pagePath) {
    return path.basename(pagePath).replace('.md', '');
}

function generate(sourceDir, prefix) {

    var deferred = Q.defer();
    var toc      = [];

    var walker = walk.walk(sourceDir);

    walker.on("file", function (root, fileStats, next) {
        var dirPrefix = root.replace(sourceDir, '');
        var filePath  = path.join(dirPrefix, fileStats.name);
        var entry     = {
            name: getPageTitle(filePath),
            url:  path.join(prefix, filePath)
        };
        toc.push(entry);
        next();
    });

    walker.on("errors", function (root, nodeStatsArray, next) {
        console.error("ERROR while processing " + root);
        next();
    });

    walker.on("end", function () {
        deferred.resolve(toc);
    });

    return deferred.promise;
}

function main () {

    var docsRoot = argv._[0];
    var dataRoot = argv._[1];

    // validate args
    if ((!docsRoot) || (!dataRoot)) {
        var scriptName = path.basename(process.argv[1]);
        console.log("usage: " + scriptName + " docsRoot dataRoot");
        console.log(scriptName + ": error: too few arguments");
        return 1;
    }

    var tocRoot = path.join(dataRoot, 'toc');

    // go through all the languages
    util.listdirsSync(docsRoot).forEach(function (languageName) {

        var languagePath = path.join(docsRoot, languageName);

        // go through all the versions
        util.listdirsSync(languagePath).forEach(function (versionName) {

            var versionPath = path.join(languagePath, versionName);
            var prefix      = "/docs/" + languageName + "/" + versionName;
            var outputName  = util.generatedTocfileName(languageName, versionName);
            var outputPath  = path.join(tocRoot, outputName);

            // generate file
            generate(versionPath, prefix).then(function (toc) {
                var tocText = yaml.dump(toc);
                console.log(outputPath);
                fs.writeFileSync(outputPath, tocText, 'utf-8');
            });
        });
    });
}

main();

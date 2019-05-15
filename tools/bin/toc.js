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

var fs = require('fs');
var path = require('path');

var argv = require('optimist').argv;

var augment = require('./augment_toc');
var util = require('./util');

function main () {

    var docsRoot = argv._[0];
    var tocRoot = argv._[1];

    // validate args
    if ((!docsRoot) || (!tocRoot)) {
        var scriptName = path.basename(process.argv[1]);
        console.log('usage: ' + scriptName + ' docsRoot tocRoot');
        console.log(scriptName + ': error: too few arguments');
        return 1;
    }

    // go through all the languages
    util.listdirsSync(docsRoot).forEach(function (languageName) {
        var languagePath = path.join(docsRoot, languageName);

        // go through all the versions
        util.listdirsSync(languagePath).forEach(function (versionName) {
            var versionPath = path.join(languagePath, versionName);

            var srcTocName = util.srcTocfileName(languageName, versionName);
            var destTocName = util.genTocfileName(languageName, versionName);

            var srcTocPath = path.join(tocRoot, srcTocName);
            var destTocPath = path.join(tocRoot, destTocName);

            // read the input
            fs.readFile(srcTocPath, function (error, data) {
                if (error) throw error;

                // augment the ToC
                var originalTocString = data.toString();
                var augmentedTocString = augment.augmentString(originalTocString, versionPath);
                var warningComment = util.generatedBy(__filename);
                var output = warningComment + '\n' + augmentedTocString;

                // write the output
                fs.writeFile(destTocPath, output, function (error, data) {
                    if (error) throw error;
                    console.log(srcTocPath + ' -> ' + destTocPath);
                });
            });
        });
    });
}

main();

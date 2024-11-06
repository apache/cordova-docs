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
const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));

const augment = require('./augment_toc');
const util = require('./util');

function main () {
    const docsRoot = argv._[0];
    const tocRoot = argv._[1];

    // validate args
    if ((!docsRoot) || (!tocRoot)) {
        const scriptName = path.basename(process.argv[1]);
        console.log('usage: ' + scriptName + ' docsRoot tocRoot');
        console.log(scriptName + ': error: too few arguments');
        return 1;
    }

    // go through all the languages
    util.listdirsSync(docsRoot).forEach(function (languageName) {
        const languagePath = path.join(docsRoot, languageName);

        // go through all the versions
        util.listdirsSync(languagePath).forEach(function (versionName) {
            const versionPath = path.join(languagePath, versionName);

            const srcTocName = util.srcTocfileName(languageName, versionName);
            const destTocName = util.genTocfileName(languageName, versionName);

            const srcTocPath = path.join(tocRoot, srcTocName);
            const destTocPath = path.join(tocRoot, destTocName);

            // read the input
            fs.readFile(srcTocPath, function (error, data) {
                if (error) throw error;

                // augment the ToC
                const originalTocString = data.toString();
                const augmentedTocString = augment.augmentString(originalTocString, versionPath);
                const warningComment = util.generatedBy(__filename);
                const output = warningComment + '\n' + augmentedTocString;

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

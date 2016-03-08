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

function getNextVersion(previousVersion) {

    // get previous version number
    // NOTE:
    //      only versions of the form N.x are accepted
    var previousVersionMatch = previousVersion.match(/^(\d+)\.x$/);
    if (!previousVersionMatch) {
        throw "invalid version";
    }

    // get next major version
    var previousMajor = previousVersionMatch[1];
    var nextMajor     = parseInt(previousMajor) + 1;

    // create next version
    var nextVersion = nextMajor + ".x";

    return nextVersion;
}

function main() {

    // get arg
    var previousVersion = process.argv[2];
    if (!previousVersion) {
        console.error("no version specified");
        process.exit(1);
    }

    // try to get the next version
    var nextVersion = null;
    try {
        nextVersion = getNextVersion(previousVersion);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }

    console.log(nextVersion);
}

module.exports = {
    getNextVersion: getNextVersion
};

if (require.main === module) {
    main();
}

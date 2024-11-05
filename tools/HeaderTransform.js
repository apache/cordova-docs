/**
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

const path = require('node:path');
const { Transform } = require('node:stream');
const { styleText } = require('node:util');

const VinylFile = require('vinyl');

class HeaderTransform extends Transform {
    constructor (headerText) {
        super({ objectMode: true });
        this.headerText = headerText;
        this.isFirstChunk = true;
    }

    _transform (chunk, encoding, callback) {
        /*
         * Header text should only be prepended to the first chunk.
         * All other chunks will be pushed with no transformation.
         */
        if (!this.isFirstChunk) {
            this.push(chunk);
            callback();
            return;
        }

        if (Buffer.isBuffer(chunk)) {
            this.push(this.headerText + chunk);
        } else if (chunk && chunk.isBuffer && chunk.contents) {
            // This use case is triggered when `gulp.src` is used.
            const vinlyPath = path.basename(chunk.path);
            const vinylContents = Buffer.concat([
                Buffer.from(this.headerText),
                chunk.contents
            ]);
            this.push(new VinylFile({ contents: vinylContents, path: vinlyPath }));
        } else {
            throw Error(styleText(['red'], 'Unknown "chunk" type.'));
        }

        this.isFirstChunk = false;
        callback();
    }
}

module.exports = HeaderTransform;

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

const { Transform } = require('node:stream');
const { styleText } = require('node:util');

const VinylFile = require('vinyl');

class HeaderTransform extends Transform {
    constructor (headerText) {
        super({ objectMode: true });
        this.headerText = headerText;
        this.isFirstChunk = true;
        this.currentFile = undefined;
    }

    _transform (chunk, encoding, callback) {
        /*
         * Since `gulp.src` can glob multiple source files, when piping the results into a stream transform,
         * it may be necessary to track the current file path (`currentFile`) and compare it to `chunk.path`
         * to determine whether a chunk belongs to the current file or a new file.
         * For each new file, we reset the `isFirstChunk` flag to ensure that the header is applied
         * correctly at the start of each file.
         */
        if (VinylFile.isVinyl(chunk) && (!this.currentFile || this.currentFile !== chunk.path)) {
            this.currentFile = chunk.path;
            this.isFirstChunk = true;
        }
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
        } else if (VinylFile.isVinyl(chunk)) {
            chunk.contents = Buffer.concat([
                Buffer.from(this.headerText),
                chunk.contents
            ]);
            this.push(chunk);
        } else {
            throw Error(styleText(['red'], 'Unknown "chunk" type.'));
        }

        this.isFirstChunk = false;
        callback();
    }
}

module.exports = HeaderTransform;

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
/*global describe, it, beforeEach, afterEach, after, before */
(function () {
    'use strict';
    var assert = require("assert"),
        path = require('path'),
        fs = require('fs'),
        cheerio = require('cheerio'),
        UpdateIndex = require("../../lib/cordova/post/updateindex"),
        SpecHelpers = require("../spec_helpers");

    describe('UpdateIndex', function () {
        var sut,
            files;
        
        beforeEach(function (done) {
            var tmp_directory = SpecHelpers.create_tmp_directory_assets(module.filename);
            sut = new UpdateIndex();
            files = {
                'input': path.join(tmp_directory, 'index.md.html'),
                'output': path.join(tmp_directory, 'index.html')
            };
            done();
        });
        
        afterEach(function (done) {
            SpecHelpers.remove_tmp_directory();
            done();
        });

        it('should skip all files but index.md.html', function () {
            assert.strictEqual(false, sut.run('index.md'));
            assert.strictEqual(false, sut.run('index.html'));
            assert.strictEqual(false, sut.run('_index.md.html'));
        });

        it('should rename the title', function () {
            var testing_file = files.normal,
                dom,
                initial_title,
                new_title;
            dom = cheerio.load(fs.readFileSync(files.input));
            initial_title = dom('#subheader > h1').first().html();
            assert.notStrictEqual(sut.header_title, initial_title);
            sut.run(files.input);
            dom = cheerio.load(fs.readFileSync(files.output));
            new_title = dom('#subheader > h1').first().html();
            assert.strictEqual(sut.header_title, new_title);
        });

        it('should rename the file', function () {
            assert.strictEqual(true, fs.existsSync(files.input));
            assert.strictEqual(false, fs.existsSync(files.output));
            var result = sut.run(files.input);
            assert.strictEqual(false, fs.existsSync(files.input));
            assert.strictEqual(true, fs.existsSync(files.output));
        });
    });
}());
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
        UpdateKeywordIndex = require("../../lib/cordova/post/updatekeywordindex"),
        SpecHelpers = require("../spec_helpers");

    describe('UpdateKeywordIndex', function () {
        var sut,
            file;
        
        beforeEach(function (done) {
            var tmp_directory = SpecHelpers.create_tmp_directory_assets(module.filename);
            sut = new UpdateKeywordIndex();
            file = path.join(tmp_directory, '_index.html');
            done();
        });
        
        afterEach(function (done) {
            SpecHelpers.remove_tmp_directory();
            done();
        });

        it('should skip all files but _index.html', function () {
            assert.strictEqual(false, sut.run('index.md'));
            assert.strictEqual(false, sut.run('index.html'));
            assert.strictEqual(false, sut.run('index.htm'));
            assert.strictEqual(false, sut.run('_index.htm'));
            assert.strictEqual(false, sut.run('index.md.html'));
        });

        it('should rename the title', function () {
            var dom,
                initial_title,
                new_title;
            dom = cheerio.load(fs.readFileSync(file));
            initial_title = dom('#subheader > h1').first().html();
            assert.notStrictEqual(sut.header_title, initial_title);
            sut.run(file);
            dom = cheerio.load(fs.readFileSync(file));
            new_title = dom('#subheader > h1').first().html();
            assert.strictEqual(sut.header_title, new_title);
        });

        it('should rename the h1', function () {
            var dom,
                initial_title,
                new_title;
            dom = cheerio.load(fs.readFileSync(file));
            initial_title = dom('#content > h1').first().html();
            assert.notStrictEqual(sut.content_title, initial_title);
            sut.run(file);
            dom = cheerio.load(fs.readFileSync(file));
            new_title = dom('#content > h1').first().html();
            assert.strictEqual(sut.content_title, new_title);
        });

        it('should remove the <hr/>', function () {
            var dom;
            dom = cheerio.load(fs.readFileSync(file));
            assert.notStrictEqual(0, dom('#content > hr').length);
            sut.run(file);
            dom = cheerio.load(fs.readFileSync(file));
            assert.strictEqual(0, dom('#content > hr').length);
        });

        it('should update references from index.md.html to index.html', function () {
            var fileToSearch = "index.md.html";
            assert.notStrictEqual(-1, fs.readFileSync(file).toString().indexOf(fileToSearch));
            sut.run(file);
            assert.strictEqual(-1, fs.readFileSync(file).toString().indexOf(fileToSearch));
        });
    });
}());
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
        AddTitle = require("../../lib/cordova/post/addtitle"),
        SpecHelpers = require("../spec_helpers");

    describe('AddTitle', function () {
        var sut,
            files;
        
        before(function (done) {
            var tmp_directory = SpecHelpers.create_tmp_directory_assets(module.filename);
            sut = new AddTitle();
            files = {
                'normal': path.join(tmp_directory, 'example.html'),
                'no_source': path.join(tmp_directory, 'example_no_source.html'),
                'no_target': path.join(tmp_directory, 'example_no_target.html')
            };
            done();
        });
        
        after(function (done) {
            SpecHelpers.remove_tmp_directory();
            done();
        });

        it('should set the title', function () {
            var testing_file = files.normal,
                dom = cheerio.load(fs.readFileSync(testing_file)),
                result = sut.run(testing_file, dom);
            assert.strictEqual('Accelerometer', result);
            assert.strictEqual('Accelerometer', dom('#subheader > h1').first().html());
        });

        it('should skip files with no source title', function () {
            var dom = cheerio.load(fs.readFileSync(files.no_source)),
                result = sut.run(files.no_source, dom);
            assert.strictEqual(null, result);
        });

        it('should skip files with no target title', function () {
            var dom = cheerio.load(fs.readFileSync(files.no_target)),
                result = sut.run(files.no_target, dom);
            assert.strictEqual(null, result);
        });
    });
}());
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
/* jslint node: true */
/* global describe, it, beforeEach, afterEach, after, before */ // eslint-disable-line no-unused-vars
(function () {
    'use strict';
    var assert = require('assert');
    var path = require('path');
    var fs = require('fs');
    var cheerio = require('cheerio');
    var Prettify = require('../../lib/cordova/post/prettify');
    var SpecHelpers = require('../spec_helpers');

    describe('Prettify', function () {
        var sut;
        var files;

        beforeEach(function (done) {
            var tmp_directory = SpecHelpers.create_tmp_directory_assets(module.filename);
            sut = new Prettify();
            files = {
                'normal': path.join(tmp_directory, 'example.html')
            };
            done();
        });

        afterEach(function (done) {
            SpecHelpers.remove_tmp_directory();
            done();
        });

        it('should find some code blocks', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal));
            var code_tags = sut.run(files.normal, dom);
            assert.ok(code_tags.length > 0);
        });

        it('should add the prettyprint class to each code block', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal));
            sut.run(files.normal, dom);
            assert.ok(dom('#content pre.prettyprint').length > 0);
        });
    });
}());

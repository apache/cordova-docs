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
    var TableOfContents = require('../../lib/cordova/post/tableofcontents');
    var SpecHelpers = require('../spec_helpers');

    describe('TableOfContents', function () {
        var sut;
        var files;

        beforeEach(function (done) {
            var tmp_directory = SpecHelpers.create_tmp_directory_assets(module.filename);
            sut = new TableOfContents();
            files = {
                'normal': path.join(tmp_directory, 'example.html'),
                'no_source': path.join(tmp_directory, 'example_no_source.html'),
                'no_target': path.join(tmp_directory, 'example_no_target.html')
            };
            done();
        });

        afterEach(function (done) {
            SpecHelpers.remove_tmp_directory();
            done();
        });

        it('should find the table of content values', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal));
            var result = sut.run(files.normal, dom);
            assert.strictEqual(32, result.length);
        });

        it('should find all <h1> elements', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal));
            var result = sut.run(files.normal, dom);
            var headers = [];

            result.forEach(function (header, index) {
                var match = header.toString().match(/-/);
                if (match === null) {
                    headers.push(header);
                }
            });
            assert.strictEqual(8, headers.length);
        });

        it('should find all <h2> elements', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal));
            var result = sut.run(files.normal, dom);
            var headers = [];

            result.forEach(function (header, index) {
                var match = header.toString().match(/-/);
                if (match !== null) {
                    // if nil != (header =~ /-/) and (header =~ /-/) > 0 }
                    headers.push(header);
                }
            });
            assert.strictEqual(24, headers.length);
        });

        it('should ignore whitespace in the target name', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal));
            var result = sut.run(files.normal, dom);
            var doc = dom;

            // result = result.reverse();
            // console.log(result[0]);
            assert.ok(doc('#content > h1, #content > h2').length > 0, 'Should found H1 and H2');
            doc('#content > h1, #content > h2').each(function (index, element) {
                var child = cheerio(element).children().first();
                var resultElement = result.shift();
                var resultElementHtml = resultElement.toString();
                var valueMatch = resultElementHtml.match(/value=\"([^\"]*)\"/); // eslint-disable-line no-useless-escape
                assert.ok(valueMatch !== null, "Could not find value in the resulting HTML '" + resultElementHtml + "' which should match to '" + child.attr('name') + "'");
                assert.strictEqual(valueMatch[1], child.attr('name'));
            });
        });

        it('should create a HTML select element', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal));
            var result = sut.run(files.normal, dom); // eslint-disable-line no-unused-vars

            assert.ok(dom('#subheader > small > select').length > 0);
        });

        it('should skip files with no source title', function () {
            var dom = cheerio.load(fs.readFileSync(files.no_source));
            var result = sut.run(files.no_source, dom);
            assert.strictEqual(null, result);
        });

        it('should skip files with no target title', function () {
            var dom = cheerio.load(fs.readFileSync(files.no_target));
            var result = sut.run(files.no_target, dom);
            assert.ok(result === null, 'Find something when should not');
        });
    });
}());

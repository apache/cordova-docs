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
        esrever = require('esrever'),
        cheerio = require('cheerio'),
        TableOfContents = require("../../lib/cordova/post/tableofcontents"),
        SpecHelpers = require("../spec_helpers");

    describe('TableOfContents', function () {
        var sut,
            files;
        
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
            var dom = cheerio.load(fs.readFileSync(files.normal)),
                result = sut.run(files.normal, dom);
            assert.strictEqual(32, result.length);
        });

        it('should find all <h1> elements', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal)),
                result = sut.run(files.normal, dom),
                headers = [];
            
            result.forEach(function (header, index) {
                var match = header.toString().match(/-/);
                if (match === null) {
                    headers.push(header);
                }
            });
            assert.strictEqual(8, headers.length);
        });

        it('should find all <h2> elements', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal)),
                result = sut.run(files.normal, dom),
                headers = [];
            
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
            var dom = cheerio.load(fs.readFileSync(files.normal)),
                result = sut.run(files.normal, dom),
                names = [],
                doc = dom;
            
            //result = result.reverse();
            //console.log(result[0]);
            assert.ok(doc("#content > h1, #content > h2").length > 0, "Should found H1 and H2");
            doc("#content > h1, #content > h2").each(function (index, element) {
                var child = cheerio(element).children().first(),
                    resultElement = result.shift(),
                    resultElementHtml = resultElement.toString(),
                    valueMatch = resultElementHtml.match(/value=\"([^\"]*)\"/);
                assert.ok(valueMatch !== null, "Could not find value in the resulting HTML '" + resultElementHtml + "' which should match to '" + child.attr('name') + "'");
                assert.strictEqual(valueMatch[1], child.attr('name'));
            });
        });

        it('should create a HTML select element', function () {
            var dom = cheerio.load(fs.readFileSync(files.normal)),
                result = sut.run(files.normal, dom);
            
            assert.ok(dom('#subheader > small > select').length > 0);
        });

        it('should skip files with no source title', function () {
            var dom = cheerio.load(fs.readFileSync(files.no_source)),
                result = sut.run(files.no_source, dom);
            assert.strictEqual(null, result);
        });

        it('should skip files with no target title', function () {
            var dom = cheerio.load(fs.readFileSync(files.no_target)),
                result = sut.run(files.no_target, dom);
            assert.ok(null === result, "Find something when should not");
        });
    });
}());
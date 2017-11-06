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
    var YamlFrontMatter = require('../../lib/cordova/pre/yamlfrontmatter');
    var SpecHelpers = require('../spec_helpers');

    describe('YamlFrontMatter', function () {
        var sut,
            files;

        beforeEach(function (done) {
            var tmp_directory = SpecHelpers.create_tmp_directory_assets(module.filename);
            sut = new YamlFrontMatter();
            files = {
                'yaml': path.join(tmp_directory, 'has_yaml.md'),
                'no_yaml': path.join(tmp_directory, 'no_yaml.md')
            };
            done();
        });

        afterEach(function (done) {
            SpecHelpers.remove_tmp_directory();
            done();
        });

        it('should skip files with no YAML Front Matter', function () {
            var expected_data = fs.readFileSync(files.no_yaml, 'utf8');
            var data;
            var actual_data;
            data = sut.run(files.no_yaml);
            assert.deepEqual({}, data);
            actual_data = fs.readFileSync(files.no_yaml, 'utf8');
            assert.strictEqual(expected_data, actual_data);
        });

        it('should parse files with YAML Front Matter', function () {
            var data = sut.run(files.yaml);
            assert.deepEqual({
                'platforms': 'Android, BlackBerry, iOS',
                'type': 'Function'
            }, data);
        });
    });
}());

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
/*jslint node: true*/
/*global describe, it, beforeEach */
(function () {
    'use strict';
    var assert = require("assert"),
        path = require('path'),
        fs = require('fs'),
        FileHelpers = require("../lib/file_helpers");

    describe('FileHelpers', function () {
        it('should have a default input directory that exists', function () {
            assert.equal(true, fs.existsSync(FileHelpers.getDefaultInputDirectory()));
        });
    });
}());
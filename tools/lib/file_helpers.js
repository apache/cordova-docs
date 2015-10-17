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
var fs = require("fs-extra");
var path = require("path");

var FileHelpers = (function () {
    'use strict';

    var FileHelpers = {};

    /**
    * Gets default directory for source files.
    */
    FileHelpers.getDefaultInputDirectory = function () {
        return path.join(FileHelpers.getRootDirectory(), "docs");
    };

    /**
    * Gets default directory for final output.
    * @remarks Right now used non default folder, to not mix with Ruby implementation.
    */
    FileHelpers.getDefaultOutputDirectory = function () {
        return path.join(FileHelpers.getRootDirectory(), "public");
    };

    /**
    * Gets temporary directory, where files will be processed.
    */
    FileHelpers.getTmpDirectory = function () {
        return path.join(FileHelpers.getRootDirectory(), "tmp");
    };

    /**
    * Gets absolute path for the Cordova Docs root directory
    */
    FileHelpers.getRootDirectory = function () {
        return path.resolve(path.join(path.dirname(module.filename), ".."));
    };

    return FileHelpers;
}());
module.exports = FileHelpers;

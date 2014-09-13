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
var FileHelpers = require("../lib/file_helpers");

var SpecHelpers = (function () {
    'use strict';
    
    /**
    * Creates a new instance of SpecHelpers
    * @param options Options for the generation process.
    */
    function SpecHelpers() {
    }
    
    SpecHelpers.create_tmp_directory_assets = function (reference_filename) {
        var directories;
        if (reference_filename === null || reference_filename === undefined) {
            directories = {
                source: SpecHelpers.docs_directory(),
                destination: SpecHelpers.tmp_docs_directory()
            };
        } else {
            directories = SpecHelpers.find_test_directories(reference_filename);
        }

        if (directories !== null) {
            fs.copySync(directories.source, directories.destination);
        }

        return directories.destination;
    };
    
    SpecHelpers.find_test_directories = function (filename) {
        var extension = path.extname(filename),
            source_directory = filename.replace(extension, ''),
            destination_directory = path.join(SpecHelpers.tmp_directory(), path.basename(source_directory));
    
        if (!fs.existsSync(source_directory)) {
            console.warn("The directory " + source_directory + " not present");
            return null;
        }
        
        return {
            source: source_directory,
            destination: destination_directory
        };
    };
    
    SpecHelpers.tmp_public_directory = function () {
        return path.join(SpecHelpers.tmp_directory(), 'public');
    };
    
    SpecHelpers.docs_directory = function () {
        return FileHelpers.getDefaultInputDirectory();
    };
    
    SpecHelpers.tmp_docs_directory = function () {
        return path.join(SpecHelpers.tmp_directory(), 'docs');
    };
    
    /**
    * Gets temporary directory for running specs.
    */
    SpecHelpers.tmp_directory = function () {
        return path.resolve(path.join(SpecHelpers.root_directory(), '..', 'tmp_spec'));
    };
    
    /**
    * Root directory for the project.
    */
    SpecHelpers.root_directory = function () {
        return path.resolve(path.dirname(module.filename));
    };
    
    SpecHelpers.remove_tmp_directory = function () {
        fs.removeSync(SpecHelpers.tmp_directory());
    };
    
    return SpecHelpers;
}());
module.exports = SpecHelpers;
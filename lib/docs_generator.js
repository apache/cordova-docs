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
var JoDoc = require("./cordova/jodoc");

var DocsGenerator = (function () {
    'use strict';
    
    function processEachFile(source_path, callback) {
        var directoryEntries = fs.readdirSync(source_path);
        directoryEntries.forEach(function (dirEntry) {
            var fullPath = path.join(source_path, dirEntry);
            var stat = fs.lstatSync(fullPath);
            if (stat.isFile()) {
                callback(fullPath);
                return;
            }
            
            if (stat.isDirectory()) {
                processEachFile(fullPath, callback);
                return;
            }
        });
    }

    /**
    * Creates a new instance of DocsGenerator
    * @param inputDirectory Directory which contains files which has to be processed. 
    * @param outputDirectory Directory to which store generated files. 
    */
    function DocsGenerator(inputDirectory, outputDirectory) {
        this.input_directory = inputDirectory || this.getDefaultInputDirectory();
        this.output_directory = outputDirectory || this.getDefaultOutputDirectory();
        this.working_directory = path.join(this.getTmpDirectory(), 'docs');
    }
    
    /**
    * Gets default directory for source files.
    */
    DocsGenerator.prototype.getDefaultInputDirectory = function () {
        return path.join(this.getRootDirectory(), "docs");
    };
    
    /**
    * Gets default directory for final output.
    * @remarks Right now used non default folder, to not mix with Ruby implementation.
    */
    DocsGenerator.prototype.getDefaultOutputDirectory = function () {
        return path.join(this.getRootDirectory(), "public/test");
    };
    
    /**
    * Gets temporary directory, where files will be processed.
    */
    DocsGenerator.prototype.getTmpDirectory = function () {
        return path.join(this.getRootDirectory(), "tmp");
    };
    
    /**
    * Gets absolute path for the Cordova Docs root directory
    */
    DocsGenerator.prototype.getRootDirectory = function () {
        return path.resolve(path.join(path.dirname(module.filename), ".."));
    };
    
    /* Cordova Build-Time Steps
    * - For each version of the documentation
    *   - Create a work space for the docs processing
    *   - Pre-file processing
    *   - Run joDoc
    *   - Pre-file processing
    *   - Release and cleanup
    */
    DocsGenerator.prototype.run = function (language, version) {
        var self = this;
        console.log("Generating docs for lang " + language + " and version " + version);
        console.log("Clearing output directory");
        fs.removeSync(this.output_directory);
        
        var ignore_list = ['.', '..', '.DS_Store'];

        fs.readdirSync(this.input_directory).forEach(function (language_dir) {
            if (ignore_list.indexOf(language_dir) !== -1) {
                return;
            }
            
            if (language && language_dir !== language) {
                return;
            }
            
            var language_path = path.join(self.input_directory, language_dir);
                
            fs.readdirSync(language_path).forEach(function (version_dir) {
                if (ignore_list.indexOf(version_dir) !== -1) {
                    return;
                }

                if (version && version_dir !== version) {
                    return;
                }
                
                var output_path = path.join(self.output_directory, language_dir, version_dir),
                    input_path = path.join(self.input_directory, language_dir, version_dir),
                    options = {
                        lang: language_dir,
                        version: version_dir
                    };
                
                console.log(" => Generating the Cordova Documentation for " + version_dir + "-" + language_dir + "...");
                self.process(input_path, output_path, options);
            });
        });
    };
            
    DocsGenerator.prototype.process = function (input_path, output_path, options) {
        fs.copySync(input_path, this.working_directory);
        
        var preprocessPath,
            processPath,
            generated_path;
        preprocessPath = this.before_jodoc(this.working_directory, options);
        processPath = this.jodocify(preprocessPath, options);
        generated_path = this.after_jodoc(processPath, options);
        
        fs.ensureDirSync(path.dirname(output_path));
        fs.renameSync(generated_path, output_path);
        
        fs.removeSync(this.getTmpDirectory());
    };
    
    DocsGenerator.prototype.run_process_sequence = function (sequence_name, source_path, options) {
        var currentModuleDir = path.dirname(module.filename),
            directoryEntries,
            sequenceProcessors;
        directoryEntries = fs.readdirSync(path.join(currentModuleDir, "cordova", sequence_name));
        sequenceProcessors = require("./cordova/" + sequence_name + "/index");
        sequenceProcessors.forEach(function (processor) {
            var process_module = new processor(options);
            processEachFile(source_path, function (filename) {
                process_module.run(filename);
            });
        });
        
        return source_path;
    };
    
    DocsGenerator.prototype.before_jodoc = function (source_path, options) {
        this.run_process_sequence("pre", source_path, options);
        
        return source_path;
    };
    
    DocsGenerator.prototype.jodocify = function (source_path, options) {
        var output_directory = path.join(this.getTmpDirectory(), 'jodoc');
        
        new JoDoc(source_path, output_directory, options).run();
        fs.ensureDirSync(output_directory);
        
        return output_directory;
    };
    
    DocsGenerator.prototype.after_jodoc = function (source_path, options) {
        this.run_process_sequence("post", source_path, options);
        return source_path;
    };
    
    return DocsGenerator;
}());
module.exports = DocsGenerator;
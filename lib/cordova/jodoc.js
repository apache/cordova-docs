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
/*global which, exec */
var fs = require("fs-extra");
var path = require("path");
require('shelljs/global');

var JoDoc = (function () {
    'use strict';
    
    var JO_DOC_CLI = "jodoc",
        TEMPLATE_PATH = path.resolve(path.join(path.dirname(module.filename), '..', '..', 'template', 'docs'));
        
    /**
    * Creates a new instance of JoDoc
    * @param inputDirectory Directory which contains files which has to be processed. 
    * @param outputDirectory Directory to which store generated files. 
    * @param options Options for the generation process.
    */
    function JoDoc(inputDirectory, outputDirectory, options) {
        this.input_directory = inputDirectory;
        this.output_directory = outputDirectory;
        this.options = options;
        
        this.template_directories = [ path.join(TEMPLATE_PATH, "default") ];
        if (options.lang) {
            this.template_directories.push(path.join(TEMPLATE_PATH, options.lang));
        }
        
        this.check_dependencies();
    }
    
    JoDoc.prototype.check_dependencies = function () {
        if (!which('jodoc')) {
            console.error('The jodoc script is not in your path');
            process.exit(1);
        }
        
        [this.input_directory, this.template_directories[0]].forEach(function (dir) {
            if (!fs.existsSync(dir)) {
                console.error("The directory " + dir + " has to be present");
                process.exit(1);
            }
            
            var stat = fs.lstatSync(dir);
            if (!stat.isDirectory()) {
                console.error("The path " + dir + " is not directory.");
                process.exit(1);
            }
        });
    };
    
    JoDoc.prototype.run = function () {
        var self = this,
            currentDirectory = process.cwd(),
            nullDevice = "/dev/null",
            templateFile = path.join(this.output_directory, "index.html"),
            commandLine,
            child,
            executableName,
            useLocalJoDoc = true;
        // Copy HTML template assets
        this.template_directories.forEach(function (templateDir) {
            if (!fs.existsSync(templateDir)) {
                return;
            }
            
            var stat = fs.lstatSync(templateDir);
            if (!stat.isDirectory()) {
                return;
            }
            
            fs.copySync(templateDir, self.output_directory);
        });
        

        process.chdir(this.input_directory);
        
        executableName = JO_DOC_CLI;
        if (useLocalJoDoc) {
            executableName = path.join(module.filename, "../../../node_modules/.bin/jodoc");
        }
        
        commandLine = executableName + " --output \"" + this.output_directory + "\" --title \"Cordova API Documentation\" --template \"" + templateFile + "\" ./";
        commandLine = commandLine + " > " + nullDevice + " 2> " + nullDevice;
        if (this.options.verbose > 1) {
            console.info("Running jodoc from " + this.input_directory + " directory");
            console.info(commandLine);
        }
        
        child = exec(commandLine);
        if (child.code !== 0) {
            console.error("Error during execution of jodoc. Error code is: " + child.code);
            process.exit(child.code);
        }
        
        process.chdir(currentDirectory);
    };
    
    return JoDoc;
}());
module.exports = JoDoc;
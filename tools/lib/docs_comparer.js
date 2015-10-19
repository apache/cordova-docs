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
var FileHelpers = require("./file_helpers");
var cheerio = require('cheerio');
var jsdiff = require('diff');
require('colors');

var DocsComparer = (function () {
    'use strict';

    function processEachFile(source_path, fileCallback, directoryCallback) {
        var directoryEntries = fs.readdirSync(source_path);
        directoryEntries.forEach(function (dirEntry) {
            var fullPath = path.join(source_path, dirEntry),
                stat;
            if (!fs.existsSync(fullPath)) {
                return;
            }

            stat = fs.lstatSync(fullPath);
            if (stat.isFile()) {
                fileCallback(fullPath);
                return;
            }

            if (stat.isDirectory()) {
                if (directoryCallback(fullPath)) {
                    processEachFile(fullPath, fileCallback, directoryCallback);
                }

                return;
            }
        });
    }

    /**
    * Creates a new instance of DocsComparer
    * @param inputDirectory Directory which contains files which has to be processed.
    * @param outputDirectory Directory to which store generated files.
    */
    function DocsComparer(originalDirectory, outputDirectory) {
        this.original_directory = originalDirectory || path.join(FileHelpers.getRootDirectory(), "public");
        this.output_directory = outputDirectory || path.join(FileHelpers.getRootDirectory(), "public/test");
    }

    /**
    * Compares two sets of documentation
    * @param language Language which has to be compared.
    * @param version Version which files has to be compared.
    * @param verbose_mode Verbosity level.
    */
    DocsComparer.prototype.compare = function (language, version, verbose_mode) {
        var self = this,
            ignore_list = ['.', '..', '.DS_Store', 'test'];

        verbose_mode = verbose_mode || 0;
        if (verbose_mode > 0) {
            console.log("Comparing docs for lang " + language + " and version " + version);
            console.log("Clearing output directory");
        }

        fs.readdirSync(this.original_directory).forEach(function (language_dir) {
            if (ignore_list.indexOf(language_dir) !== -1) {
                return;
            }

            if (language && language_dir !== language) {
                return;
            }

            var language_path = path.join(self.original_directory, language_dir);

            fs.readdirSync(language_path).forEach(function (version_dir) {
                if (ignore_list.indexOf(version_dir) !== -1) {
                    return;
                }

                if (version && version_dir !== version) {
                    return;
                }

                var output_path = path.join(self.output_directory, language_dir, version_dir),
                    input_path = path.join(self.original_directory, language_dir, version_dir),
                    options = {
                        lang: language_dir,
                        version: version_dir,
                        verbose: verbose_mode
                    };

                console.log(" => Comparing the Cordova Documentation for " + version_dir + "-" + language_dir + "...");
                self.process(input_path, output_path, options);
            });
        });
    };
    DocsComparer.prototype.process = function (original_directory, output_path, options) {
        var self = this,
            compareFiles;
        console.log("Processing " + original_directory + " and " + output_path);
        compareFiles = function (fileName) {
            var relativePath = path.relative(original_directory, fileName),
                targetFile,
                originalFileStat,
                targetFileStat,
                originalFileSize,
                targetFileSize;
            targetFile = path.join(output_path, relativePath);
            if (!fs.existsSync(targetFile)) {
                console.error("Path " + relativePath + " is missing in the new docs");
                return;
            }

            if (/\.html$/.test(relativePath)) {
                // Compare HTML content.
                self.compareHtml(fileName, targetFile, relativePath, options);
            } else {
                originalFileStat = fs.statSync(fileName);
                targetFileStat = fs.statSync(targetFile);
                originalFileSize = originalFileStat.size;
                targetFileSize = targetFileStat.size;
                self.compareFileSize(fileName, targetFile, relativePath, options);
            }
        };
        processEachFile(original_directory, compareFiles, function (directoryName) {
            var relativePath = path.relative(original_directory, directoryName),
                targetFile;
            targetFile = path.join(output_path, relativePath);
            if (!fs.existsSync(targetFile)) {
                console.error("Dir " + relativePath + "/ is missing in the new docs");
                return;
            }

            // console.log(relativePath + "\\");
            return true;
        });
    };

    DocsComparer.prototype.compareHtml = function (sourceFile, targetFile, relativePath, options) {
        if (options.verbose > 0) {
            console.log("Compare " + relativePath);
        }

        if (relativePath === "_index.html") {
            if (options.lang === "zh" || options.lang === "ja" || options.lang === "ko" || options.lang === "ru") {
                console.log("File " + relativePath + " is skipped for the Asian languages and Russian, since this is results in out of memory exception");
                return;
            }
        }

        var cheerioOptions = {
                normalizeWhitespace: true,
                xmlMode: true
            },
            sourceDom = cheerio.load(fs.readFileSync(sourceFile), cheerioOptions),
            targetDom = cheerio.load(fs.readFileSync(targetFile), cheerioOptions);

        // This is identical subsets
        this.compareDomSubset(sourceDom, targetDom, "head", relativePath, options);
        this.compareDomSubset(sourceDom, targetDom, "#sidebar", relativePath, options);
        this.compareDomSubset(sourceDom, targetDom, "#header", relativePath, options);
        this.compareDomSubset(sourceDom, targetDom, "#content", relativePath, options);

        // Almost identical subsets
        this.compareDomSubset(sourceDom, targetDom, "#subheader", relativePath, options);
    };

    DocsComparer.prototype.compareDomSubset = function (sourceDom, targetDom, subset, relativePath, options) {
        var sourceHtml = sourceDom(subset).html(),
            targetHtml = targetDom(subset).html(),
            diff,
            changed = false;

        diff = jsdiff.diffChars(sourceHtml, targetHtml);
        diff.forEach(function (part) {
            changed = part.added || part.removed;
        });
        if (changed) {
            console.error("Subset of DOM '" + subset + "' for path " + relativePath + " is different.");
            if (options.verbose > 0) {
                diff.forEach(function (part) {
                    // green for additions, red for deletions
                    // grey for common parts
                    var color = part.added ? 'green' : (part.removed ? 'red' : 'grey');
                    process.stderr.write(part.value[color]);
                });

                console.log();
            }
        }
    };

    DocsComparer.prototype.compareDom = function (sourceDom, targetDom, relativePath, options) {
        var sourceHtml = sourceDom.html(),
            targetHtml = targetDom.html(),
            diff,
            changed = false;

        diff = jsdiff.diffChars(sourceHtml, targetHtml);
        diff.forEach(function (part) {
            changed = part.added || part.removed;
        });
        if (changed) {
            console.error("DOM for path " + relativePath + " is different.");
            if (options.verbose > 0) {
                diff.forEach(function (part) {
                    // green for additions, red for deletions
                    // grey for common parts
                    var color = part.added ? 'green' : (part.removed ? 'red' : 'grey');
                    process.stderr.write(part.value[color]);
                });

                console.log();
            }
        }
    };

    DocsComparer.prototype.compareFileSize = function (sourceFile, targetFile, relativePath) {
        var originalFileStat = fs.statSync(sourceFile),
            targetFileStat = fs.statSync(targetFile),
            originalFileSize = originalFileStat.size,
            targetFileSize = targetFileStat.size;

        if (originalFileSize !== targetFileSize) {
            console.error("Path " + relativePath + " is different. Old size: " + originalFileSize + ". New size: " + targetFileSize);
        }

        return originalFileSize !== targetFileSize;
    };

    return DocsComparer;
}());
module.exports = DocsComparer;

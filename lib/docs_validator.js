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
/*global setImmediate*/
var fs = require("fs-extra");
var path = require("path");
var JoDoc = require("./cordova/jodoc");
var FileHelpers = require("./file_helpers");
var cheerio = require('cheerio');
var jsdiff = require('diff'),
    yaml = require("js-yaml"),
    dir = require("node-dir");
require('colors');

var DocsValidator = (function () {
    'use strict';

    function processEachFileSync(source_path, fileCallback, directoryCallback) {
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
                    processEachFileSync(fullPath, fileCallback, directoryCallback);
                }

                return;
            }
        });
    }

    function processEachFile(source_path, fileCallback, directoryCallback, errorCallback) {
        fs.readdirSync(source_path, function (err, directoryEntries) {
            if (err) {
                errorCallback(err);
                return;
            }

            directoryEntries.forEach(function (dirEntry) {
                var fullPath = path.join(source_path, dirEntry);
                fs.exists(fullPath, function (exists) {
                    if (!exists) {
                        return;
                    }

                    fs.lstat(fullPath, function (err, stat) {
                        if (err) {
                            errorCallback(err);
                            return;
                        }

                        if (stat.isFile()) {
                            fileCallback(fullPath);
                            return;
                        }

                        if (stat.isDirectory()) {
                            if (directoryCallback(fullPath)) {
                                processEachFile(fullPath, fileCallback, directoryCallback, errorCallback);
                            }

                            return;
                        }
                    });
                });
            });
        });
    }

    /**
    * Creates a new instance of DocsValidator
    * @param inputDirectory Directory which contains files which has to be processed.
    */
    function DocsValidator(originalDirectory) {
        this.original_directory = originalDirectory || path.join(FileHelpers.getRootDirectory(), "docs");
    }

    /**
    * Validates the specific version of documentation
    * @param language Language which has to be validated.
    * @param version Version which files has to be validated.
    * @param verbose_mode Verbosity level.
    */
    DocsValidator.prototype.validate = function (language, version, verbose_mode) {
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

                var input_path = path.join(self.original_directory, language_dir, version_dir),
                    options = {
                        lang: language_dir,
                        version: version_dir,
                        verbose: verbose_mode
                    };

                console.log(" => Validating the Cordova Documentation for " + version_dir + "-" + language_dir + "...");
                self.process(input_path, options);
            });
        });
    };

    /**
    * Validates the specific version of documentation
    * @param outputDirectory Directory where documentation is stored.
    * @param language Language which has to be validated.
    * @param version Version which files has to be validated.
    * @param verbose_mode Verbosity level.
    */
    DocsValidator.prototype.validateTranslation = function (docsDirectory, language, version, verbose_mode) {
        var self = this,
            outputDirectory = path.resolve(docsDirectory || FileHelpers.getDefaultOutputDirectory()),
            ignore_list = ['.', '..', '.DS_Store', 'test'];
        
        verbose_mode = verbose_mode || 0;
        if (verbose_mode > 0) {
            console.log("Comparing docs for lang " + language + " and version " + version);
            console.log("Clearing output directory");
        }

        fs.readdirSync(outputDirectory).forEach(function (language_dir) {
            if (ignore_list.indexOf(language_dir) !== -1) {
                return;
            }

            if (language && language_dir !== language) {
                return;
            }

            var language_path = path.join(outputDirectory, language_dir);

            fs.readdirSync(language_path).forEach(function (version_dir) {
                if (ignore_list.indexOf(version_dir) !== -1) {
                    return;
                }

                if (version && version_dir !== version) {
                    return;
                }

                var input_path = path.join(outputDirectory, language_dir, version_dir),
                    source_path = path.join(outputDirectory, "en", version_dir),
                    options = {
                        lang: language_dir,
                        version: version_dir,
                        verbose: verbose_mode
                    };

                console.log(" => Validating translation for version " + version_dir + " on language " + language_dir + "...");
                self.doValidateTranslation(source_path, input_path, options);
            });
        });
    };
    DocsValidator.prototype.doValidateTranslation = function (original_directory, comparing_directory, options) {
        var self = this,
            compareFiles,
            completed;
        console.log("Comparing " + original_directory);
        console.log("with " + comparing_directory);
        completed = false;
        dir.readFiles(original_directory,
            { match: /\.html/ },
            function (err, content, filename, next) {
                if (err) {
                    throw err;
                }

                var relativePath = path.relative(original_directory, filename),
                    alternativeFile = path.join(comparing_directory, relativePath),
                    $ = cheerio.load(alternativeFile);
                fs.readFile(alternativeFile, function (err, data) {
                    if (err) {
                        throw err;
                    }

                    var target = cheerio.load(data),
                        source = cheerio.load(content);
            
                    self.validateLinksStructure(relativePath, source, target, options);
                    next();
                });
            },
            function (err, files) {
                if (err) {
                    throw err;
                }

                completed = true;
            });
        function waitCompletition() {
            if (!completed) {
                setImmediate(waitCompletition);
            }
        }

        setImmediate(waitCompletition);
    };
    DocsValidator.prototype.process = function (original_directory, options) {
        var self = this,
            compareFiles,
            completed;
        console.log("Processing " + original_directory);
        compareFiles = function (fileName) {
            self.validateYaml(fileName, options);
        };
        completed = false;
        dir.readFiles(original_directory,
            { match: /\.md$/ },
            function (err, content, filename, next) {
                if (err) {
                    throw err;
                }

                self.validateYaml(filename, content, options);
                next();
            },
            function (err, files) {
                if (err) {
                    throw err;
                }

                completed = true;
            });
        function waitCompletition() {
            if (!completed) {
                setImmediate(waitCompletition);
            }
        }

        setImmediate(waitCompletition);
    };

    DocsValidator.prototype.validateLinksStructure = function (relativePath, source, target, options) {
        // Skip _index.html since it will have links in the different
        // order, not as in the original docs, since each word 
        // will be translated to different languages.
        if (relativePath === "_index.html") {
            return;
        }
        
        var sourceLinks = source("#content a"),
            targetLinks = target("#content a"),
            sourceLinksList = "",
            targetLinksList = "",
            changes,
            changed = false;
        sourceLinks.each(function (i, a) {
            var link = a.attribs.href || "";
            link = link.split('#')[0];
            if (link) {
                sourceLinksList += link + "\n";
            }
        });
        targetLinks.each(function (i, a) {
            var link = a.attribs.href || "";
            link = link.split('#')[0];
            if (link) {
                targetLinksList += link + "\n";
            }
        });
        changes = jsdiff.diffLines(sourceLinksList, targetLinksList);
        changes.forEach(function (part) {
            changed = part.added || part.removed;
        });
        if (changed) {
            console.error("Path " + relativePath + " is different.");
            if (options.verbose > 0) {
                changes.forEach(function (part) {
                    // green for additions, red for deletions
                    // grey for common parts
                    var color = part.added ? 'green' : (part.removed ? 'red' : 'grey');
                    process.stderr.write(part.value[color]);
                });

                console.log();
            }
        }
    };
    
    DocsValidator.prototype.validateYaml = function (sourceFile, content, options) {
        if (options.verbose > 0) {
            console.log("Validate " + sourceFile);
        }

        var yamlRegexStripper = /^(---\s*\n[\s\S]*?\n?)^(---\s*$\n?)/m,
            match = yamlRegexStripper.exec(content);

        if (!match) {
            console.log("File " + sourceFile + " miss the YAML license header");
            return 1;
        } else {
            if (match[1].indexOf("license:") === -1) {
                console.log("File " + sourceFile + " has invalid YAML license header");
                return 2;
            }
        }

        return 0;
    };

    /**
    * Validates the specific version of documentation
    * @param outputDirectory Directory where documentation is stored.
    * @param language Language which has to be validated.
    * @param version Version which files has to be validated.
    * @param verbose_mode Verbosity level.
    */
    DocsValidator.prototype.fixYamlHeader = function (docsDirectory, language, version, verbose_mode) {
        var self = this,
            outputDirectory = path.resolve(docsDirectory || FileHelpers.getDefaultInputDirectory()),
            ignore_list = ['.', '..', '.DS_Store', 'test'];

        verbose_mode = verbose_mode || 0;
        if (verbose_mode > 0) {
            console.log("Fixing YAML headers for lang " + language + " and version " + version);
            console.log("Clearing output directory");
        }

        fs.readdirSync(outputDirectory).forEach(function (language_dir) {
            if (ignore_list.indexOf(language_dir) !== -1) {
                return;
            }

            if (language && language_dir !== language) {
                return;
            }

            var language_path = path.join(outputDirectory, language_dir);

            fs.readdirSync(language_path).forEach(function (version_dir) {
                if (ignore_list.indexOf(version_dir) !== -1) {
                    return;
                }

                if (version && version_dir !== version) {
                    return;
                }

                var input_path = path.join(outputDirectory, language_dir, version_dir),
                    options = {
                        lang: language_dir,
                        version: version_dir,
                        verbose: verbose_mode
                    };

                console.log(" => Fix YAML header for version " + version_dir + " on language " + language_dir + "...");
                self.doFixYamlHeader(input_path, options);
            });
        });
    };
    DocsValidator.prototype.doFixYamlHeader = function (lang_directory, options) {
        var self = this,
            compareFiles,
            completed;
        console.log("Fixing " + lang_directory);
        completed = false;
        dir.readFiles(lang_directory,
            { match: /\.md/ },
            function (err, content, filename, next) {
                if (err) {
                    throw err;
                }

                var relativePath = path.relative(lang_directory, filename);
                fs.readFile(filename, 'utf8', function (err, data) {
                    if (err) {
                        throw err;
                    }

                    var target = data,
                        validationResult = self.validateYaml(filename, content, options),
                        yamlReplaceRegex1,
                        yamlReplaceRegex2,
                        eol = require('os').type() === 'win32' ? "\r\n" : "\n",
                        prefix = "         ",
                        correctLicense = '---' + eol +
                            "license: Licensed to the Apache Software Foundation (ASF) under one" + eol +
                            prefix + "or more contributor license agreements.  See the NOTICE file" + eol +
                            prefix + "distributed with this work for additional information" + eol +
                            prefix + "regarding copyright ownership.  The ASF licenses this file" + eol +
                            prefix + "to you under the Apache License, Version 2.0 (the" + eol +
                            prefix + "\"License\"); you may not use this file except in compliance" + eol +
                            prefix + "with the License.  You may obtain a copy of the License at" + eol +
                            eol +
                            prefix + "  http://www.apache.org/licenses/LICENSE-2.0" + eol +
                            eol +
                            prefix + "Unless required by applicable law or agreed to in writing," + eol +
                            prefix + "software distributed under the License is distributed on an" + eol +
                            prefix + "\"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY" + eol +
                            prefix + "KIND, either express or implied.  See the License for the" + eol +
                            prefix + "specific language governing permissions and limitations" + eol +
                            prefix + "under the License." + eol +
                            '---' + eol + eol;

                    if (validationResult !== 0) {
                        yamlReplaceRegex1 = /^(\* \* \*\s*\n[\s\S]*?\n?)^(\#\# (under the License\.|unter der Lizenz\.|aux termes de la licence\.|con la licenza\.|ライセンス。|라이센스\.|根據許可證。)\s*$\n?)/m;
                        if (yamlReplaceRegex1.exec(content)) {
                            content = correctLicense + content.replace(yamlReplaceRegex1, '');
                        } else {
                            yamlReplaceRegex2 = /^(\* \* \*\s*\n[\s\S]*?\n?)^(\* \* \*\s*\s*$\n?)/m;
                            if (yamlReplaceRegex2.exec(content)) {
                                content = correctLicense + content.replace(yamlReplaceRegex2, '');
                            }
                        }

                        fs.writeFile(filename, content, 'utf8', function (err, data) {
                            if (err) {
                                throw err;
                            }

                            next();
                        });
                    } else {
                        next();
                    }
                });
            },
            function (err, files) {
                if (err) {
                    throw err;
                }

                completed = true;
            });
        function waitCompletition() {
            if (!completed) {
                setImmediate(waitCompletition);
            }
        }

        setImmediate(waitCompletition);
    };

    return DocsValidator;
}());
module.exports = DocsValidator;

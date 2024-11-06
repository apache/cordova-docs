// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

'use strict';

const { styleText } = require('node:util');

module.exports = (function () {
    const fs = require('fs');
    const path = require('path');

    function stripFrontMatter (text) {
        // get and replace front matter if it's there
        // NOTE:
        //      String.replace() replaces only the first occurrence
        //      of a string, which is what we want
        const rawFrontMatterString = getRawFrontMatterString(text);
        if (rawFrontMatterString !== null) {
            return text.replace(rawFrontMatterString, '');
        }

        return text;
    }

    function getFrontMatterString (text) {
        const rawFrontMatterString = getRawFrontMatterString(text);
        if (rawFrontMatterString !== null) {
            // strip out front matter markers
            const frontMatterString = rawFrontMatterString.replace(/^---\s*$/gm, '');
            return frontMatterString;
        }

        return null;
    }

    function setFrontMatterString (text, frontMatterString) {
        const textOnly = stripFrontMatter(text);
        const newText = '---\n' + frontMatterString + '---\n\n' + textOnly;
        return newText;
    }

    function getRawFrontMatterString (text) {
        // NOTE:
        //      [\s\S]  matches all characters
        //      *?      non-greedy *-match
        const match = text.match(/^(---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n)[\s\S]*$/);
        if (match === null) {
            return null;
        }
        return match[1];
    }

    function listdirsSync (root) {
        return fs.readdirSync(root).filter(function (fileName) {
            return fs.statSync(path.join(root, fileName)).isDirectory();
        });
    }

    function tocfileName (language, version, suffix) {
        const versionSlug = version.replace(/\./g, '-');
        if (suffix) {
            suffix = '-' + suffix;
        } else {
            suffix = '';
        }
        return language + '_' + versionSlug + suffix + '.yml';
    }

    function srcTocfileName (language, version) {
        return tocfileName(language, version, 'src');
    }

    function genTocfileName (language, version) {
        return tocfileName(language, version, 'gen');
    }

    function mergeObjects (a, b) {
        const c = {};

        // NOTE: b's properties override a's properties
        Object.keys(a).forEach(function (key) {
            c[key] = a[key];
        });
        Object.keys(b).forEach(function (key) {
            c[key] = b[key];
        });
        return c;
    }

    function generatedBy (scriptName) {
        return '# WARNING: This file is generated by ' + path.basename(scriptName);
    }

    function logger (msg) {
        const date = new Date();
        const ts = date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        console.log(`[${styleText(['magenta'], ts)}] ${msg}`);
    }

    function formatMinimistOptions (options) {
        const formattedOptions = { string: [], boolean: [], default: {}, require: [], alias: {} };
        options.forEach(function (i) {
            formattedOptions[i.type].push(i.name);

            if (Object.prototype.hasOwnProperty.call(i, 'default')) {
                formattedOptions.default[i.name] = i.default;
            }

            if (Object.prototype.hasOwnProperty.call(i, 'require')) {
                formattedOptions.require.push(i.name);
            }

            if (Object.prototype.hasOwnProperty.call(i, 'alias')) {
                formattedOptions.alias[i.name] = i.alias;
            }
        });
        return formattedOptions;
    }

    function displayOptionHelpIfNeeded (argv, rawOptions) {
        rawOptions = rawOptions.sort((a, b) => a.name.localeCompare(b.name));
        const options = formatMinimistOptions(rawOptions);
        const missingArgs = findMissingRequiredMinimistOptions(argv, options);

        const nameColumnWidth = Math.max(...rawOptions.map(i => `--${i.name}`.length), 8);
        const descriptionColumnWidth = Math.max(...rawOptions.map(i => i.describe.length), 20);

        const printoutCommandList = rawOptions.map(i => {
            const required = i.require ? '[required]' : '';
            let defaultVal = '';

            if (Object.prototype.hasOwnProperty.call(i, 'default') && i.default !== undefined) {
                switch (i.default) {
                case null:
                    defaultVal = '[default: null]';
                    break;
                case false:
                    defaultVal = '[default: false]';
                    break;
                case true:
                    defaultVal = '[default: true]';
                    break;
                default:
                    defaultVal = `[default: ${i.default}]`;
                }
            }
            const name = `--${i.name}`.padEnd(nameColumnWidth);
            const describe = i.describe.padEnd(descriptionColumnWidth);
            return `${name}  ${describe}  ${required}${defaultVal}`.trim();
        });

        if (missingArgs.length > 0) {
            console.log(`\nOptions:\n  ${printoutCommandList.join('\n  ')}\n\nMissing required arguments: ${missingArgs.join(', ')}`);
            process.exit(1);
        }
    }

    const findMissingRequiredMinimistOptions = (argv, options) => options.require
        .map(a => !argv[a] ? a : null)
        .filter(item => item !== null);

    return {
        stripFrontMatter,
        getFrontMatterString,
        setFrontMatterString,
        getRawFrontMatterString,
        listdirsSync,
        tocfileName,
        srcTocfileName,
        genTocfileName,
        mergeObjects,
        generatedBy,
        logger,

        // args support
        formatMinimistOptions,
        findMissingRequiredMinimistOptions,
        displayOptionHelpIfNeeded
    };
})();

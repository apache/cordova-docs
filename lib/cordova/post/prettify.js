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
var path = require("path");

/**
* Preprocessor which updates top stripe with header or the page.
*/
var Prettify = (function () {
    'use strict';

    /**
    * Creates a new instance of FileMerger
    * @param options Options for the generation process.
    */
    function Prettify(options) {
        this.options = options || { verbose: 0 };
        this.stage = "Prettify";
    }

    Prettify.prototype.run = function (file, $) {
        if (path.extname(file) !== ".html") {
            return;
        }

        if (this.options.verbose > 1) {
            console.log("Prettify file " + file);
        }

        var element;
        element = $('#content pre');
        element.attr('class', 'prettyprint');
        return element;
    };

    return Prettify;
}());
module.exports = Prettify;

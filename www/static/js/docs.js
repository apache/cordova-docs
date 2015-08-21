// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

$(document).ready(function () {

    function getAnchorName(i, heading, prefix) {
        var name = prefix;
        if (heading.id) {
            name += heading.id;
        } else if (heading.name) {
            name += heading.name;
        } else {
            name += i;
        }
        return name;
    }

    // Table of Contents
    $('#page-toc').toc({
        'selectors':         'h1,h2,h3,h4,h5,h6', // elements to use as headings
        'container':         '#page-toc-source', // element to find all selectors in
        'prefix':            'link-', // prefix for anchor tags and class names
        'onHighlight':       function(el) {}, // called when a new section is highlighted
        'highlightOnScroll': true, // add class to heading that is currently in focus
        'highlightOffset':   100, // offset to trigger the next headline
        'anchorName':        function(i, heading, prefix) { // custom function for anchor name
            return getAnchorName(i, heading, prefix);
        },
        'headerText': function(i, heading, $heading) { // custom function building the header-item text
            return $heading.text();
        },
        'itemClass': function(i, heading, $heading, prefix) { // custom function for item class

            // add a special class to the anchor for this toc entry
            var anchorName = getAnchorName(i, heading, prefix);
            $('#' + anchorName).addClass('fragment-anchor');

            // don't assign any special classes to the toc entry itself
            return '';
        }
    });
});

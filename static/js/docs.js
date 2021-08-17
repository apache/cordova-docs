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

// Platforms we have logos for and their formatted titles. Used for
// converting "mark" elements to logos
var platforms = {
    'android': 'Android',
    'ios': 'iOS',
    'windows': 'Windows',
    'ubuntu': 'Ubuntu',
    'blackberry': 'Blackberry',
    'fireos': 'FireOS',
    'firefoxos': 'FirefoxOS',
    'webos': 'webOS',
    'osx': 'OS X',
    'browser': 'Browser',
    'electron': 'Electron'
};

$(document).ready(function () {

    var HEADER_OFFSET  = 50; // in pixels
    var TOC_TOP_OFFSET = HEADER_OFFSET + 40;

    // if this page's ToC entry can be found, scroll the ToC to it
    var thisPageEntry = $(".site-toc-container .this-page");
    if (thisPageEntry.length > 0) {
        $(".site-toc-container").scrollTop(thisPageEntry.first().position().top - TOC_TOP_OFFSET);
    }

    function slugifyLikeGitHub(originalText) {

        var text = originalText;

        // convert to lowercase
        text = text.toLowerCase();

        // replace spaces with dashes
        text = text.replace(/ /g, '-');

        // remove unaccepted characters
        // NOTE:
        //      a better regex would have been /[^\d\s\w-_]/ug, but the 'u' flag
        //      (Unicode) is not supported in some browsers, and we support
        //      many languages that use Unicode characters
        text = text.replace(/[\[\]\(\)\;\:\=\+\?\!\.\,\{\}\\\/\>\<]/g, '');

        // trim remaining whitespace
        text = text.trim();

        return text;
    }

    function getIdForHeading(heading) {
        if (heading.id) {
            return heading.id;
        } else if (heading.name) {
            return heading.name;
        } else {
            return slugifyLikeGitHub(heading.innerText);
        }
    }

    function permalinkTo(id) {
        var anchor       = document.createElement("a");
        anchor.className = "header-link";
        anchor.href      = "#" + id;
        anchor.innerHTML = "<i class=\"glyphicon glyphicon-link\"></i>";
        return anchor;
    }

    function anchorFor(id) {
        var anchor       = document.createElement("a");
        anchor.className = "fragment-anchor";
        anchor.id        = id;
        return anchor;
    }

    // go through all headings in the content and add some links
    $('#page-toc-source h1, #page-toc-source h2, #page-toc-source h3, #page-toc-source h4, #page-toc-source h5, #page-toc-source h6')
    .each(function (i, heading) {

        headingId = getIdForHeading(heading);

        // add an anchor for linking to the heading
        // NOTE:
        //      we could have set the ID on the heading itself but we didn't
        //      because the <a> has some extra CSS that floats it above the
        //      heading and makes it easier to see when linked
        $(heading).before(anchorFor(headingId))

        // add a permalink to all but the first heading
        if (i > 0) {
            $(heading).append(permalinkTo(headingId));
        }
    });

    // Table of Contents
    $('#page-toc').toc({
        'selectors':         'h1,h2', // elements to use as headings
        'container':         '#page-toc-source', // element to find all selectors in
        'prefix':            '', // prefix for anchor tags and class names
        'onHighlight':       function(el) {}, // called when a new section is highlighted
        'highlightOnScroll': true, // add class to heading that is currently in focus
        'highlightOffset':   100, // offset to trigger the next headline
        'anchorName':        function(i, heading, prefix) { // custom function for anchor name
            return getIdForHeading(heading);
        },
        'headerText': function(i, heading, $heading) { // custom function building the header-item text
            return $heading.text();
        },
        'itemClass': function(i, heading, $heading, prefix) { // custom function for item class

            // don't assign any special classes to the toc entry itself
            return '';
        }
    });

    $('mark').each(function(index, element) {
        var platform = element.innerText.toLowerCase();
        platform = platform.replace(/ /g, '');
        if (platforms[platform]) {
            $(element).addClass('logo');
            $(element).addClass(platform);
            $(element).attr('title', platforms[platform]);
            element.innerText = '';
        }
    });
});

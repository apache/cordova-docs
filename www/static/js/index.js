---
---
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

function submitJiraSearchForm() {
    var queryTemplate1 = '(summary ~ "%1" OR description ~ "%1" OR comment ~ "%1") AND ';
    var queryTemplate2 = 'project = CB AND resolution = Unresolved %2ORDER BY created';
    var componentKeywords = [
        /\b(ios|iphone|ipad|ipod)\b/ig, 'iOS',
        /\b(android)\b/ig, 'Android',
        /\b(blackberry|rim|bb.?|bb10|webworks)\b/ig, 'BlackBerry',
        /\b(webos)\b/ig, 'webOS',
        /\b(wp7|windows phone)\b/ig, 'WP7',
        /\b(wp8|windows phone)\b/ig, 'WP8'
        ];
    var query = document.getElementById('jira-search-box').value;
    // Check for some platform keywords:
    var components = [];
    for (var i = 0; i < componentKeywords.length; i += 2) {
        if (query.match(componentKeywords[i])) {
            query = query.replace(componentKeywords[i], '');
            components.push(componentKeywords[i + 1]);
        }
    }
    var componentsQuery = '';
    if (components.length) {
        // Add in components that apply to all platforms.
        components.push('Docs', 'mobile-spec', 'CordovaJS');
        componentsQuery = 'AND component in (' + components.join(', ') + ') ';
    }
    // Remove quotes since we are adding them in.
    query = query.replace(/"/g, '');
    var tokens = query.split(/\s+/);
    query = '';
    for (var i = 0; i < tokens.length; ++i) {
        if (tokens[i]) {
            query += queryTemplate1.replace(/%1/g, tokens[i]);
        }
    }
    query += queryTemplate2.replace('%2', componentsQuery)
    window.open('https://issues.apache.org/jira/secure/IssueNavigator.jspa?mode=show&reset=true&navType=simple&jqlQuery=' + encodeURIComponent(query), '_newtab' + new Date);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

var lastVisit = getCookie("visitTime");
function checkNotification() {
    var dates = [];
    if (lastVisit != "") {
        {% for post in site.posts %}
            dates.push('{{ post.date | date_to_rfc822 }}');
        {% endfor %}
    }
    var new_blog_count = 0;
    for(var i = 0; i < dates.length ; i++) {
        var blog_time = new Date(dates[i]).getTime();
        if(blog_time > lastVisit) {
            new_blog_count++;
        }
        else {
            break;
        }
    }
    return new_blog_count;
}

$(document).ready(function () {

    // code for blog badge
    $('.adorner').each(function(i) {
        var blog_time = new Date($(this).attr('blogTime')).getTime();
        if(lastVisit != "" && blog_time > lastVisit) {
            this.style.backgroundColor = "#3992ab";
        }
    });
    var new_blog_count = checkNotification();
    if (new_blog_count) {
        document.getElementById("new_blog_count").innerHTML = new_blog_count;
    }

    // code for copy text
    var addCopyText = function(elementId, copyText) {
        new ZeroClipboard(document.getElementById(elementId))
            .on("copy", function(event) {
                event.clipboardData.setData("text/plain", copyText);
            });
    }
    addCopyText("copy-npm-install", "npm install -g cordova");
    addCopyText("copy-cordova-create", "cordova create MyApp");
    addCopyText("copy-cordova-platform-add", "cd MyApp\ncordova platform add browser");
    addCopyText("copy-cordova-run", "cordova run browser");

    // Smooth scroll to anchor links
    $("a[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        console.log('Scrolled to where you asked');
        e.preventDefault();

        // store hash
        var hash = this.hash;
        var LINK_OFFSET = 20; // in pt

        // animate
        $('html, body').animate(
            {scrollTop: $(hash).offset().top - LINK_OFFSET},
            300,
            function () {
                // when done, add hash to url (default click behaviour)
                window.location.hash = hash;
            }
        );
    });
});

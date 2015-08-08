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

$(document).ready(function () {
});

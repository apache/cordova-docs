//
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
//

//
// Google Analytics
//
if (window.location.protocol !== "file:") {
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-64283057-1', 'auto');
ga('send', 'pageview');
} else {
    function ga() {
        console.log(arguments);
    }
}

//
// Syntax Highlighting
//
(function() {
    window.addEventListener('load', function() {
        prettyPrint();
    }, false);
})();

function changeLanguageOrVersion(language, version, missingVersion) {
    var currentFile = (window.location.href.match(/\/[^\/]*$/) || ['/index.html'])[0];

    // Uncomment to also jump to the same page. However, the server should handle missing page
    // window.location.href = '../../' + language + '/' + version + currentFile;
    var sameFile = '../../' + language + '/' + version + currentFile;
    ga('send', 'event', 'navigation', 'lang-ver-change', { 'page': currentFile, lang: language, version: version });
    var testForSameVersion = true;
    if (testForSameVersion && window.location.protocol !== "file:") {
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.open('GET', sameFile, false);
        xmlhttp.send(null);
        console.log(xmlhttp);
        if(xmlhttp.status == 200) {
            window.location.href = sameFile;
        } else {
            ga('send', 'event', 'navigation', 'lang-ver-fallback', { 'page': currentFile, lang: language, version: version });
            window.location.href = '../../' + language + '/' + version + '/index.html';
        }
    } else {
        window.location.href = sameFile;
    }
}

function setupLanguageSelect() {
    var languageElement = document.getElementById('language');
    languageElement.value = settings.lang;
    languageElement.addEventListener('change', function(e) {
        var language    = languageElement.value;
        var languageVersions = versions[language];
        var hasVersionInLanguage = languageVersions.filter(function (versionString) {
            versionString === settings.version;
        }).length > 0;
        if (hasVersionInLanguage) {
            var version = settings.version;
            var missingVersion = false;
        } else {
            var version = "edge";
            var missingVersion = true;
        }

        changeLanguageOrVersion(language, version, missingVersion);
    }, false);
}

function setupVersionSelect() {
    var versionElement = document.getElementById('version');
    var languageVersions = versions[settings.lang] || [];
    languageVersions.reverse().forEach(function (version) {
        var optionElement = document.createElement("option");
        optionElement.value = version;
        optionElement.innerHTML = version;
        versionElement.appendChild(optionElement);
    });
    versionElement.value = settings.version;
    versionElement.addEventListener('change', function(e) {
        var languageElement = document.getElementById('language');
        var language = languageElement.value;
        var version = versionElement.value;

        changeLanguageOrVersion(language, version, false);
    }, false);
}

//
// API <select>
//
(function() {
    window.addEventListener('load', function() {
        var $select = document.getElementById('subheader').getElementsByTagName('select')[0];
        if (!$select) return;
        
        $select.addEventListener('change', function(e) {
            document.location = '#' + this.options[this.selectedIndex].value;
        }, false);
    }, false);
})();

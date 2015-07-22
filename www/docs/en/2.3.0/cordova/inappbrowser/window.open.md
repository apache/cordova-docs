---
license: >
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

title: window.open
---

window.open
===========

Opens a URL in a new [InAppBrowser](inappbrowser.html) instance, the current browser instance, or the system browser.

    var ref = window.open(url, target, options);
    
- __ref:__ reference to the [InAppBrowser](inappbrowser.html) window (`[InAppBrowser](inappbrowser.html)`)
- __url:__ the URL to load (`String`). Call encodeURI() on this if you have Unicode characters in your URL.
- __target:__ the target to load the URL in (`String`) (Optional, Default: "_self")

        _self - opens in the Cordova WebView if url is in the white-list, else it opens in the InAppBrowser 
        _blank - always open in the InAppBrowser 
        _system - always open in the system web browser 
    
    
- __options:__ options for the [InAppBrowser](inappbrowser.html) (`String`) (Optional, Default: "location=yes")
    
    The options string must not contain any blank space, each feature name and value must be separated by a comma. Only the value below is supported:

            location - set to 'yes' or 'no' to turn the location bar on or off for the InAppBrowser
            
Supported Platforms
-------------------

- Android
- iOS

Quick [Example](../storage/storage.opendatabase.html)
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }

        </script>
      </head>
      <body>
      </body>
    </html>


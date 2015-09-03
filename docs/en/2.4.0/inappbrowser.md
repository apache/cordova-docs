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
---


InAppBrowser
============

> The InAppBrowser is a web-browser that is shown in your app when you use the `window.open` call.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    
Description
-----------

The object returned from a call to `window.open`.

Methods
----------

- addEventListener
- removeEventListener
- close

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="InAppBrowser" value="org.apache.cordova.InAppBrowser" />

### iOS

#### config.xml

    <plugin name="InAppBrowser" value="CDVInAppBrowser" />


### Windows Phone 7 + 8

#### config.xml

    <plugin name="InAppBrowser" />



addEventListener
================

> Adds a listener for an event from the InAppBrowser.

    ref.addEventListener(eventname, callback);

- __ref:__ reference to the InAppBrowser window (`InAppBrowser`)
- __eventname:__ the event to listen for (`String`)

        loadstart - event fired when the InAppBrowser starts to load a URL 
        loadstop - event fired when the InAppBrowser finished loading a URL
        exit - event fired when the InAppBrowser window is closed 

- __callback:__ the function that is called when the event is fired. 
The function is passed an `InAppBrowserEvent` object.

Supported Platforms
-------------------

- Android
- iOS
- Windows Phone 7 + 8

Quick Example
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.4.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function() { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function() { alert('stop: ' + event.url); });
             ref.addEventListener('exit', function() { alert(event.type); });
        }

        </script>
      </head>
      <body>
      </body>
    </html>

removeEventListener
===================

> Removes a listener for an event from the InAppBrowser.

    ref.removeEventListener(eventname, callback);

- __ref:__ reference to the InAppBrowser window (`InAppBrowser`)
- __eventname:__ the event to stop listening for (`String`)

        loadstart - event fired when the InAppBrowser starts to load a URL 
        loadstop - event fired when the InAppBrowser finished loading a URL
        exit - event fired when the InAppBrowser window is closed 

- __callback:__ the function that was to be called when the event is fired. 
The function is passed an `InAppBrowserEvent` object.

Supported Platforms
-------------------

- Android
- iOS
- Windows Phone 7 + 8

Quick Example
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.4.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
        
        // Global InAppBrowser reference
        var iabRef = null;
        
        function iabLoadStart(event) {
            alert(event.type + ' - ' + event.url);
        }

        function iabLoadStop(event) {
            alert(event.type + ' - ' + event.url);
        }
   
        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('exit', iabClose);
        }

        // Cordova is ready
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.addEventListener('exit', iabClose);
        }

        </script>
      </head>
      <body>
      </body>
    </html>

close
=====

> Closes the InAppBrowser window.

    ref.close();

- __ref:__ reference to the InAppBrowser window (`InAppBrowser`)

Supported Platforms
-------------------

- Android
- iOS
- Windows Phone 7 + 8

Quick Example
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.4.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }

        </script>
      </head>
      <body>
      </body>
    </html>

InAppBrowserEvent
=================

The object that is passed to the callback function from an addEventListener call on an InAppBrowser object.

Properties
----------

- __type:__ the eventname (`String`) - one of loadstart, loadstop, or exit
- __url:__ the URL that was loaded (`String`)



window.open
===========

Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.

    var ref = window.open(url, target, options);
    
- __ref:__ reference to the InAppBrowser window (`InAppBrowser`)
- __url:__ the URL to load (`String`). Call encodeURI() on this if you have Unicode characters in your URL.
- __target:__ the target to load the URL in (`String`) (Optional, Default: "_self")

        _self - opens in the Cordova WebView if url is in the white-list, else it opens in the InAppBrowser 
        _blank - always open in the InAppBrowser 
        _system - always open in the system web browser 
    
    
- __options:__ options for the InAppBrowser (`String`) (Optional, Default: "location=yes")
    
    The options string must not contain any blank space, each feature name and value must be separated by a comma. Feature names are case insensitive. Only the value below is supported on all platforms:

    - __location__ - set to 'yes' or 'no' to turn the location bar on or off for the InAppBrowser

    iOS only
    --------
    - __enableViewportScale__ -  set to 'yes' or 'no' to prevent viewport scaling through a meta tag (defaults to 'no')
    - __mediaPlaybackRequiresUserAction__ - set to 'yes' or 'no' to not allow autoplayed HTML5 video (defaults to 'no')
    - __allowInlineMediaPlayback__ - set to 'yes' or 'no' to allow inline HTML5 media playback, also, the video element in the HTML document must also include the webkit-playsinline attribute (defaults to 'no')
    - __keyboardDisplayRequiresUserAction__ - set to 'yes' or 'no' to open the keyboard when form elements get focus via the JavaScript focus() call (defaults to 'yes')
    - __suppressesIncrementalRendering__ - set to 'yes' or 'no' to wait until all new view content has been received before it is rendered (defaults to 'no')
    - __presentationstyle__ -  set to 'pagesheet', 'formsheet' or 'fullscreen' to set the [presentation style](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle) (defaults to 'fullscreen')
    - __transitionstyle__ - set to 'fliphorizontal', 'crossdissolve' or 'coververtical' to set the [transition style](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle) (defaults to 'coververtical')
            
Supported Platforms
-------------------

- Android
- iOS
- BlackBerry 10
- Windows Phone 7 + 8

Quick Example
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.4.0.js"></script>
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



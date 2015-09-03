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

> The `InAppBrowser` is a web browser that displays in the app when calling `window.open`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');

Description
-----------

The object returned from a call to `window.open`.

Methods
----------

- addEventListener
- removeEventListener
- close
- show
- executeScript
- insertCSS

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        $ cordova plugin rm org.apache.cordova.core.inappbrowser

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android (in `app/res/xml/config.xml`)

        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.InAppBrowser" />
        </feature>

* iOS (in `config.xml`)

        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>

* Windows Phone 7 and 8 (in `config.xml`)

        <feature name="InAppBrowser" />

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.

addEventListener
================

> Adds a listener for an event from the `InAppBrowser`.

    ref.addEventListener(eventname, callback);

- __ref__: reference to the `InAppBrowser` window _(InAppBrowser)_

- __eventname__: the event to listen for _(String)_

  - __loadstart__: event fires when the `InAppBrowser` starts to load a URL.
  - __loadstop__: event fires when the `InAppBrowser` finishes loading a URL.
  - __loaderror__: event fires when the `InAppBrowser` encounters an error when loading a URL.
  - __exit__: event fires when the `InAppBrowser` window is closed.

- __callback__: the function that executes when the event fires. The function is passed an `InAppBrowserEvent` object as a parameter.

Supported Platforms
-------------------

- Android
- BlackBerry
- iOS
- Windows Phone 7 and 8

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

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        }

        </script>
      </head>
      <body>
      </body>
    </html>

removeEventListener
===================

> Removes a listener for an event from the `InAppBrowser`.

    ref.removeEventListener(eventname, callback);

- __ref__: reference to the `InAppBrowser` window. _(InAppBrowser)_

- __eventname__: the event to stop listening for. _(String)_

  - __loadstart__: event fires when the `InAppBrowser` starts to load a URL.
  - __loadstop__: event fires when the `InAppBrowser` finishes loading a URL.
  - __loaderror__: event fires when the `InAppBrowser` encounters an error loading a URL.
  - __exit__: event fires when the `InAppBrowser` window is closed.

- __callback__: the function to execute when the event fires.
The function is passed an `InAppBrowserEvent` object.

Supported Platforms
-------------------

- Android
- BlackBerry
- iOS
- Windows Phone 7 and 8

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

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
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

        function iabLoadError(event) {
            alert(event.type + ' - ' + event.message);
        }

        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.removeEventListener('exit', iabClose);
        }

        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }

        </script>
      </head>
      <body>
      </body>
    </html>

close
=====

> Closes the `InAppBrowser` window.

    ref.close();

- __ref__: reference to the `InAppBrowser` window _(InAppBrowser)_

Supported Platforms
-------------------

- Android
- BlackBerry
- iOS
- Windows Phone 7 and 8

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

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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

show
=====

> Displays an InAppBrowser window that was opened hidden. Calling this has no effect if the InAppBrowser was already visible.

    ref.show();

- __ref:__ reference to the InAppBrowser window (`InAppBrowser`)

Supported Platforms
-------------------

- Android
- BlackBerry
- iOS

Quick Example
-------------

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    ref.show();

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.show Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
             ref.addEventListener('loadstop', function(event) {
                 alert('background window loaded'); 
             });
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

executeScript
=============

> Injects JavaScript code into the `InAppBrowser` window

    ref.executeScript(details, callback);

- __ref__: reference to the `InAppBrowser` window. _(InAppBrowser)_

- __injectDetails__: details of the script to run, specifying either a `file` or `code` key. _(Object)_
  - __file__: URL of the script to inject.
  - __code__: Text of the script to inject.

- __callback__: the function that executes after the JavaScript code is injected.
    - If the injected script is of type `code`, the callback executes
      with a single parameter, which is the return value of the
      script, wrapped in an `Array`. For multi-line scripts, this is
      the return value of the last statement, or the last expression
      evaluated.

Supported Platforms
-------------------

- Android
- BlackBerry
- iOS

Quick Example
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeSript({file: "myscript.js"});
    });

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Global InAppBrowser reference
        var iabRef = null;

        // Inject our custom JavaScript into the InAppBrowser window
        //
        function replaceHeaderImage() {
            iabRef.executeScript({
                code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
            }, function() {
                alert("Image Element Successfully Hijacked");
            }
        }

        function iabClose(event) {
             iabRef.removeEventListener('loadstop', replaceHeaderImage);
             iabRef.removeEventListener('exit', iabClose);
        }

        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', replaceHeaderImage);
             iabRef.addEventListener('exit', iabClose);
        }

        </script>
      </head>
      <body>
      </body>
    </html>

insertCSS
=========

> Injects CSS into the `InAppBrowser` window.

    ref.insertCSS(details, callback);

- __ref__: reference to the `InAppBrowser` window _(InAppBrowser)_

- __injectDetails__: details of the script to run, specifying either a `file` or `code` key. _(Object)_
  - __file__: URL of the stylesheet to inject.
  - __code__: Text of the stylesheet to inject.

- __callback__: the function that executes after the CSS is injected.

Supported Platforms
-------------------

- Android
- BlackBerry
- iOS

Quick Example
-------------

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Global InAppBrowser reference
        var iabRef = null;

        // Inject our custom CSS into the InAppBrowser window
        //
        function changeBackgroundColor() {
            iabRef.insertCSS({
                code: "body { background: #ffff00"
            }, function() {
                alert("Styles Altered");
            }
        }

        function iabClose(event) {
             iabRef.removeEventListener('loadstop', changeBackgroundColor);
             iabRef.removeEventListener('exit', iabClose);
        }

        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', changeBackgroundColor);
             iabRef.addEventListener('exit', iabClose);
        }

        </script>
      </head>
      <body>
      </body>
    </html>

InAppBrowserEvent
=================

The object that is passed to the callback function from an
`addEventListener` call on an `InAppBrowser` object.

Properties
----------

- __type__: the eventname, either `loadstart`, `loadstop`, `loaderror`, or `exit`. _(String)_

- __url__: the URL that was loaded. _(String)_

- __code__: the error code, only in the case of `loaderror`. _(Number)_

- __message__: the error message, only in the case of `loaderror`. _(String)_



window.open
===========

Opens a URL in a new `InAppBrowser` instance, the current browser
instance, or the system browser.

    var ref = window.open(url, target, options);

- __ref__: Reference to the `InAppBrowser` window. _(InAppBrowser)_

- __url__: The URL to load _(String)_. Call `encodeURI()` on this if the URL contains Unicode characters.

- __target__: The target in which to load the URL, an optional parameter that defaults to `_self`. _(String)_

    - `_self`: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the `InAppBrowser`.
    - `_blank`: Opens in the `InAppBrowser`.
    - `_system`: Opens in the system's web browser.

- __options__: Options for the `InAppBrowser`. Optional, defaulting to: `location=yes`. _(String)_

    The `options` string must not contain any blank space, and each feature's name/value pairs must be separated by a comma. Feature names are case insensitive. All platforms support the value below:

    - __location__: Set to `yes` or `no` to turn the `InAppBrowser`'s location bar on or off.
    
    Android only
    --------------------
    - __closebuttoncaption__ - set to a string that will be the caption for the "Done" button. 
    - __hidden__ - set to 'yes' to create the browser and load the page, but not show it. The load event will fire when loading is complete. Omit or set to 'no' (default) to have the browser open and load normally. 
    - __clearcache__ - set to 'yes' to have the browser's cookie cache cleared before the new window is opened
    - __clearsessioncache__ - set to 'yes' to have the session cookie cache cleared before the new window is opened

    iOS only
    --------
    - __closebuttoncaption__ - set to a string that will be the caption for the "Done" button. Note that you will have to localize this value yourself.
    - __hidden__ - set to 'yes' to create the browser and load the page, but not show it. The load event will fire when loading is complete. Omit or set to 'no' (default) to have the browser open and load normally. 
    - __toolbar__ -  set to 'yes' or 'no' to turn the toolbar on or off for the InAppBrowser (defaults to 'yes')
    - __enableViewportScale__:  Set to `yes` or `no` to prevent viewport scaling through a meta tag (defaults to `no`).
    - __mediaPlaybackRequiresUserAction__: Set to `yes` or `no` to prevent HTML5 audio or video from autoplaying (defaults to `no`).
    - __allowInlineMediaPlayback__: Set to `yes` or `no` to allow inline HTML5 media playback, displaying within the browser window rather than a device-specific playback interface. The HTML's `video` element must also include the `webkit-playsinline` attribute (defaults to `no`)
    - __keyboardDisplayRequiresUserAction__: Set to `yes` or `no` to open the keyboard when form elements receive focus via JavaScript's `focus()` call (defaults to `yes`).
    - __suppressesIncrementalRendering__: Set to `yes` or `no` to wait until all new view content is received before being rendered (defaults to `no`).
    - __presentationstyle__:  Set to `pagesheet`, `formsheet` or `fullscreen` to set the [presentation style](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle) (defaults to `fullscreen`).
    - __transitionstyle__: Set to `fliphorizontal`, `crossdissolve` or `coververtical` to set the [transition style](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle) (defaults to `coververtical`).

Supported Platforms
-------------------

- Android
- BlackBerry
- iOS
- Windows Phone 7 and 8

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

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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


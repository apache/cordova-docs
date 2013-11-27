---
license: Licensed to the Apache Software Foundation (ASF) under one
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

# InAppBrowser

> The `InAppBrowser` is a web browser view that displays when calling `window.open()`, or when opening a link formed as `<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');

__NOTE__: The InAppBrowser window behaves like a standard web browser,
and can't access Cordova APIs.

## Description

The object returned from a call to `window.open`.

## Methods

- addEventListener
- removeEventListener
- close
- show
- executeScript
- insertCSS

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.inappbrowser
        $ cordova plugin ls
        [ 'org.apache.cordova.inappbrowser' ]
        $ cordova plugin rm org.apache.cordova.inappbrowser

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS (in `res/xml/config.xml`)

        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.inappbrowser.InAppBrowser" />
        </feature>

* Android (in `res/xml/config.xml`)

        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.inappbrowser.InAppBrowser" />
        </feature>

* iOS (in the named application directory's `config.xml`)

        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>

* Windows Phone 7 and 8 (in `config.xml`)

        <feature name="InAppBrowser" />

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.

# addEventListener

> Adds a listener for an event from the `InAppBrowser`.

    ref.addEventListener(eventname, callback);

- __ref__: reference to the `InAppBrowser` window _(InAppBrowser)_

- __eventname__: the event to listen for _(String)_

  - __loadstart__: event fires when the `InAppBrowser` starts to load a URL.
  - __loadstop__: event fires when the `InAppBrowser` finishes loading a URL.
  - __loaderror__: event fires when the `InAppBrowser` encounters an error when loading a URL.
  - __exit__: event fires when the `InAppBrowser` window is closed.

- __callback__: the function that executes when the event fires. The function is passed an `InAppBrowserEvent` object as a parameter.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry
- iOS
- Windows Phone 7 and 8

## Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });

## Full Example

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

# removeEventListener

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

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry
- iOS
- Windows Phone 7 and 8

## Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);

## Full Example

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
             iabRef.addEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }

        </script>
      </head>
      <body>
      </body>
    </html>

# close

> Closes the `InAppBrowser` window.

    ref.close();

- __ref__: reference to the `InAppBrowser` window _(InAppBrowser)_

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry
- iOS
- Windows Phone 7 and 8

## Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();

## Full Example

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

# show

> Displays an InAppBrowser window that was opened hidden. Calling this has no effect if the InAppBrowser was already visible.

    ref.show();

- __ref__: reference to the InAppBrowser window (`InAppBrowser`)

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry
- iOS

## Quick Example

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    ref.show();

## Full Example

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

# executeScript

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

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry
- iOS

## Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({file: "myscript.js"});
    });

## Full Example

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
            });
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

# insertCSS

> Injects CSS into the `InAppBrowser` window.

    ref.insertCSS(details, callback);

- __ref__: reference to the `InAppBrowser` window _(InAppBrowser)_

- __injectDetails__: details of the script to run, specifying either a `file` or `code` key. _(Object)_
  - __file__: URL of the stylesheet to inject.
  - __code__: Text of the stylesheet to inject.

- __callback__: the function that executes after the CSS is injected.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry
- iOS

## Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });

## Full Example

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
                code: "body { background: #ffff00; }"
            }, function() {
                alert("Styles Altered");
            });
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

# InAppBrowserEvent

The object that is passed to the callback function from an
`addEventListener` call on an `InAppBrowser` object.

## Properties

- __type__: the eventname, either `loadstart`, `loadstop`, `loaderror`, or `exit`. _(String)_

- __url__: the URL that was loaded. _(String)_

- __code__: the error code, only in the case of `loaderror`. _(Number)_

- __message__: the error message, only in the case of `loaderror`. _(String)_

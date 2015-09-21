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

title: InAppBrowser
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

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
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

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
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

        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
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

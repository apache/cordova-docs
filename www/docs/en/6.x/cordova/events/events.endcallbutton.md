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

title: endcallbutton
---

# endcallbutton

This event fires when the user presses the end call button.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);

## Details

The event overrides the default end call behavior.

Applications typically should use `document.addEventListener` to
attach an event listener once the `[deviceready](events.deviceready.html)` event fires.

## Supported Platforms

- BlackBerry 10

## Quick Example

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);

    function onEndCallKeyDown() {
        // Handle the end call button
    }

## Full Example

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }

        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

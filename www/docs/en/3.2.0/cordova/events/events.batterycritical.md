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

title: batterycritical
---

# batterycritical

The event fires when the battery has reached the critical level
threshold.

    window.addEventListener("batterycritical", yourCallbackFunction, false);

## Details

The event fires when the percentage of battery charge has reached the
critical battery threshold. The value is device-specific.

The `batterycritical` handler is passed an object that contains two
properties:

- __level__: The percentage of battery charge (0-100). _(Number)_

- __isPlugged__: A boolean that indicates whether the device is plugged in. _(Boolean)_

Applications typically should use `window.addEventListener` to attach
an event listener once the `[deviceready](events.deviceready.html)` event fires.

## Supported Platforms

- Amazon Fire OS
- iOS
- Android
- BlackBerry WebWorks 5.0+
- Tizen

## Quick Example

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }

## Full Example

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>

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
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }

        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

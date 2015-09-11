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

# device.cordova

Get the version of Cordova running on the device.

    var string = device.cordova;

## Description

`device.cordova` returns the version of Cordova running on the device.

## Supported Platforms

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

## Quick <a href="../storage/storage.opendatabase.html">Example</a>

    var name = device.cordova;

## Full <a href="../storage/storage.opendatabase.html">Example</a>

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="device.html">Device</a> Properties <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="device.html">Device</a>Ready, false);

        // device APIs are available
        //
        function on<a href="device.html">Device</a>Ready() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = '<a href="device.html">Device</a> Model: '    + <a href="device.model.html">device.model</a>    + '<br />' +
                                '<a href="device.html">Device</a> Cordova: '  + device.cordova  + '<br />' +
                                '<a href="device.html">Device</a> Platform: ' + <a href="device.platform.html">device.platform</a> + '<br />' +
                                '<a href="device.html">Device</a> UUID: '     + <a href="device.uuid.html">device.uuid</a>     + '<br />' +
                                '<a href="device.html">Device</a> Version: '  + <a href="device.version.html">device.version</a>  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>


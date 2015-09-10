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

device.version
==============

Get the operating system version.

    var string = device.version;

Supported Platforms
-------------------

- Android 2.1+
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    // Android:    Froyo OS would return "2.2"
    //             Eclair OS would return "2.1", "2.0.1", or "2.0"
    //             Version can also return update level "2.1-update1"
    //
    // BlackBerry: Torch 9800 using OS 6.0 would return "6.0.0.600"
    //
    // iPhone:     iOS 3.2 returns "3.2"
    //
    // Windows Phone 7: returns current OS version number, ex. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

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
            element.innerHTML = '<a href="device.html">Device</a> Name: '     + <a href="device.name.html">device.name</a>     + '<br />' +
                                '<a href="device.html">Device</a> Cordova: '  + <a href="device.cordova.html">device.cordova</a>  + '<br />' +
                                '<a href="device.html">Device</a> Platform: ' + <a href="device.platform.html">device.platform</a> + '<br />' +
                                '<a href="device.html">Device</a> UUID: '     + <a href="device.uuid.html">device.uuid</a>     + '<br />' +
                                '<a href="device.html">Device</a> Version: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>

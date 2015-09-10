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

device.platform
===============

Get the device's operating system <a href="../storage/parameters/name.html">name</a>.

    var string = device.platform;

Supported Platforms
-------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iPhone"
    //   - "webOS"
    //   - "WinCE"
    var devicePlatform = device.platform;

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="device.html">Device</a> Properties <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.5.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="device.html">Device</a>Ready, false);

        // PhoneGap is ready
        //
        function on<a href="device.html">Device</a>Ready() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = '<a href="device.html">Device</a> Name: '     + device.<a href="../storage/parameters/name.html">name</a>     + '<br />' + 
                                '<a href="device.html">Device</a> PhoneGap: ' + <a href="device.phonegap.html">device.phonegap</a> + '<br />' + 
                                '<a href="device.html">Device</a> Platform: ' + device.platform + '<br />' + 
                                '<a href="device.html">Device</a> UUID: '     + <a href="device.uuid.html">device.uuid</a>     + '<br />' + 
                                '<a href="device.html">Device</a> Version: '  + device.<a href="../storage/parameters/version.html">version</a>  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    
iPhone Quirks
-------------

All devices return `iPhone` as the platform. This is inaccurate because Apple has rebranded the iPhone operating system as `iOS`.

BlackBerry Quirks
-----------------

<a href="device.html">Device</a>s may return the device platform <a href="../storage/parameters/version.html">version</a> instead of the platform <a href="../storage/parameters/name.html">name</a>.  For example, the Storm2 9550 would return '2.13.0.95' or similar.
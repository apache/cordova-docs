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

device.<a href="../storage/parameters/name.html">name</a>
===========

Get the device's model <a href="../storage/parameters/name.html">name</a>.

    var string = device.<a href="../storage/parameters/name.html">name</a>;
    
Description
-----------

`device.<a href="../storage/parameters/name.html">name</a>` returns the <a href="../storage/parameters/name.html">name</a> of the device's model or product. This value is set by the device manufacturer and may be different across <a href="../storage/parameters/version.html">version</a>s of the same product.

Supported Platforms
-------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    // Android:    Nexus One       returns "Passion" (Nexus One code <a href="../storage/parameters/name.html">name</a>)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Bold 8900       returns "8900"
    // iPhone:     All devices     returns a <a href="../storage/parameters/name.html">name</a> set by iTunes e.g. "Joe's iPhone"
    //
    var <a href="../storage/parameters/name.html">name</a> = device.<a href="../storage/parameters/name.html">name</a>;

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
                                '<a href="device.html">Device</a> Platform: ' + <a href="device.platform.html">device.platform</a> + '<br />' + 
                                '<a href="device.html">Device</a> UUID: '     + <a href="device.uuid.html">device.uuid</a>     + '<br />' + 
                                '<a href="device.html">Device</a> Version: '  + device.<a href="../storage/parameters/version.html">version</a>  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>


Android Quirks
--------------

- Gets the [product <a href="../storage/parameters/name.html">name</a>](http://developer.android.com/reference/android/os/Build.html#PRODUCT) instead of the [model <a href="../storage/parameters/name.html">name</a>](http://developer.android.com/reference/android/os/Build.html#MODEL).
    - The product <a href="../storage/parameters/name.html">name</a> is often the code <a href="../storage/parameters/name.html">name</a> given during production.
    - e.g. Nexus One returns "Passion", Motorola Droid returns "voles"

iPhone Quirks
-------------

- Gets the [device's custom <a href="../storage/parameters/name.html">name</a>](http://developer.apple.com/iphone/library/documentation/uikit/reference/UI<a href="device.html">Device</a>_Class/Reference/UI<a href="device.html">Device</a>.html#//apple_ref/doc/uid/TP40006902-CH3-SW13) instead of the [device model <a href="../storage/parameters/name.html">name</a>](http://developer.apple.com/iphone/library/documentation/uikit/reference/UI<a href="device.html">Device</a>_Class/Reference/UI<a href="device.html">Device</a>.html#//apple_ref/doc/uid/TP40006902-CH3-SW1).
    - The custom <a href="../storage/parameters/name.html">name</a> is set by the owner in iTunes.
    - e.g. "Joe's iPhone"
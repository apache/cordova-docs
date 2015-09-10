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

device.uuid
===========

Get the device's Universally Unique Identifier ([UUID](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)).

    var string = device.uuid;

Description
-----------

The details of how a UUID is generated are determined by the device manufacturer and are specific to the device's platform or model.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    // Android: Returns a random 64-bit integer (as a string, again!)
    //          The integer is generated on the device's first boot
    //
    // BlackBerry: Returns the PIN number of the device
    //             This is a nine-digit unique integer (as a string, though!)
    //
    // iPhone: (Paraphrased from the UI<a href="device.html">Device</a> Class documentation)
    //         Returns a string of hash values created from multiple hardware identifies.
    //         It is guaranteed to be unique for every device and cannot be tied
    //         to the user account.
    // Windows Phone 7 : Returns a hash of device+current user,
    // if the user is not defined, a guid is generated and will persist until the app is uninstalled
    // Tizen: returns the device IMEI (International Mobile Equipment Identity or IMEI is a number
    // unique to every GSM and UMTS mobile phone.
    var deviceID = device.uuid;

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
                                '<a href="device.html">Device</a> UUID: '     + device.uuid     + '<br />' +
                                '<a href="device.html">Device</a> Version: '  + <a href="device.version.html">device.version</a>  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>

iOS Quirk
-------------

The `uuid` on iOS is not unique to a device, but varies for each
application, for each installation.  It changes if you delete and
re-install the app, and possibly also when you upgrade iOS, or even
upgrade your app per version (apparent in iOS 5.1). The `uuid` is not
a reliable value.

Windows Phone 7 and 8 Quirks
-------------

The `uuid` for Windows Phone 7 requires the permission
`ID_CAP_IDENTITY_DEVICE`.  Microsoft will likely deprecate this
property soon.  If the capability is not available, the application
generates a persistent guid that is maintained for the duration of the
application's installation on the device.

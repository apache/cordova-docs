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


Device
======

> The `device` object describes the device's hardware and software.

Properties
----------

- device.name
- device.cordova
- device.platform
- device.uuid
- device.version

Variable Scope
--------------

Since `device` is assigned to the `window` object, it is implicitly in the global scope.

    // These reference the same `device`
    //
    var phoneName = window.device.name;
    var phoneName = device.name;


device.name
===========

Get the device's model name.

    var string = device.name;
    
Description
-----------

`device.name` returns the name of the device's model or product. This value is set by the device manufacturer and may be different across versions of the same product.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )
- Bada 1.2 & 2.x

Quick Example
-------------

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iPhone:     All devices     returns a name set by iTunes e.g. "Joe's iPhone"
    //
    var name = device.name;

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                                'Device Cordova: '  + device.cordova + '<br />' + 
                                'Device Platform: ' + device.platform + '<br />' + 
                                'Device UUID: '     + device.uuid     + '<br />' + 
                                'Device Version: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>


Android Quirks
--------------

- Gets the [product name](http://developer.android.com/reference/android/os/Build.html#PRODUCT) instead of the [model name](http://developer.android.com/reference/android/os/Build.html#MODEL).
    - The product name is often the code name given during production.
    - e.g. Nexus One returns "Passion", Motorola Droid returns "voles"

iPhone Quirks
-------------

- Gets the [device's custom name](http://developer.apple.com/iphone/library/documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW13) instead of the [device model name](http://developer.apple.com/iphone/library/documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW1).
    - The custom name is set by the owner in iTunes.
    - e.g. "Joe's iPhone"

Windows Phone 7 Quirks
-------------

- returns the manufacturer specified device name, for example, the Samsung Focus returns 'SGH-i917'

Bada Quirks
-----------
- returns the manufacturer model name. For example 'Samsung Wave S8500'



device.cordova
===============

Get the version of Cordova running on the device.

    var string = device.cordova;
    
Description
-----------

`device.cordova` returns the version of Cordova running on the device.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )
- Bada 1.2 & 2.x

Quick Example
-------------

    var name = device.cordova;

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                                'Device Cordova: '  + device.cordova  + '<br />' + 
                                'Device Platform: ' + device.platform + '<br />' + 
                                'Device UUID: '     + device.uuid     + '<br />' + 
                                'Device Version: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>




device.platform
===============

Get the device's operating system name.

    var string = device.platform;

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )
- Bada 1.2 & 2.x

Quick Example
-------------

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iPhone"
    //   - "webOS"
    //   - "WinCE"
    var devicePlatform = device.platform;

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                                'Device Cordova: '  + device.cordova  + '<br />' + 
                                'Device Platform: ' + device.platform + '<br />' + 
                                'Device UUID: '     + device.uuid     + '<br />' + 
                                'Device Version: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    
iPhone Quirks
-------------

The iPhone returns `iPhone` as the platform. The iPad returns `iPad` as the platform.  In the simulator they will return `iPhone Simulator` and `iPad Simulator` respectively.  These are inaccurate in all cases because Apple has rebranded the iPhone operating system as `iOS`.

BlackBerry Quirks
-----------------

Devices may return the device platform version instead of the platform name.  For example, the Storm2 9550 would return '2.13.0.95' or similar.

Windows Phone 7 Quirks
-----------------

Windows Phone 7 devices report platform as 'WinCE'



device.uuid
===========

Get the device's Universally Unique Identifier ([UUID](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)).

    var string = device.uuid;
    
Description
-----------

The details of how a UUID is generated are determined by the device manufacturer and specific to the device's platform or model.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )
- Bada 1.2 & 2.x

Quick Example
-------------

    // Android: Returns a random 64-bit integer (as a string, again!)
    //          The integer is generated on the device's first boot
    //
    // BlackBerry: Returns the PIN number of the device
    //             This is a nine-digit unique integer (as a string, though!)
    //
    // iPhone: (Paraphrased from the UIDevice Class documentation)
    //         Returns a string of hash values created from multiple hardware identifies.
    //         It is guaranteed to be unique for every device and cannot be tied
    //         to the user account.
    // Windows Phone 7 : Returns a hash of device+current user, 
    // if the user is not defined, a guid is generated and will persist until the app is uninstalled
    // 
    var deviceID = device.uuid;

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                                'Device Cordova: '  + device.cordova  + '<br />' + 
                                'Device Platform: ' + device.platform + '<br />' + 
                                'Device UUID: '     + device.uuid     + '<br />' + 
                                'Device Version: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>

iOS Quirk
-------------

The uuid for iOS is not unique for a device, but is unique per application per install. This will change if you delete the app and re-install, and possibly also when you upgrade your iOS version, or even upgrade your app per version (as we've seen in iOS 5.1). Not a reliable value.

Windows Phone 7 Quirks
-------------

The uuid for Windows Phone 7 requires the permission ID_CAP_IDENTITY_DEVICE.  Microsoft will likely be deprecating this property in the near future.  If the capability is not available, the application generates a persistent guid, that will be maintained for the install-lifetime of the application on the device.



device.version
==============

Get the operating system version.

    var string = device.version;

Supported Platforms
-------------------

- Android 2.1+
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )
- Bada 1.2 & 2.x

Quick Example
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
    var deviceVersion = device.version;

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
        
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                                'Device Cordova: '  + device.cordova  + '<br />' + 
                                'Device Platform: ' + device.platform + '<br />' + 
                                'Device UUID: '     + device.uuid     + '<br />' + 
                                'Device Version: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>


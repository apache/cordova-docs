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


Events
======

> Cordova lifecycle events.

Event Types
-----------

- deviceready
- pause
- resume
- online
- offline
- backbutton
- batterycritical
- batterylow
- batterystatus
- menubutton
- searchbutton
- startcallbutton
- endcallbutton
- volumedownbutton
- volumeupbutton

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Battery" value="org.apache.cordova.BatteryListener" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.BROADCAST_STICKY" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>SYSTEM_SERVICE</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Battery" value="org.apache.cordova.battery.Battery" />

#### www/config.xml

    <feature id="blackberry.app"          required="true" version="1.0.0.0" />
    <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
    <feature id="blackberry.system.event" required="true" version="1.0.0.0" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Battery</key>
        <string>CDVBattery</string>
    </dict>

### webOS

    No permissions are required.

### Windows Phone

    No permissions are required.



deviceready
===========

This is an event that fires when Cordova is fully loaded.

    document.addEventListener("deviceready", yourCallbackFunction, false);

Details
-------

This is a very important event that every Cordova application should use.

Cordova consists of two code bases: native and JavaScript. While the native code is loading, a custom loading image is displayed. However, JavaScript is only loaded once the DOM loads. This means your web application could, potentially, call a Cordova JavaScript function before it is loaded.

The Cordova `deviceready` event fires once Cordova has fully loaded. After the device has fired, you can safely make calls to Cordova function.

Typically, you will want to attach an event listener with `document.addEventListener` once the HTML document's DOM has loaded.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7
- Bada 1.2 & 2.x

Quick Example
-------------

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Now safe to use the Cordova API
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Device Ready Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            // Now safe to use the Cordova API
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



pause
===========

This is an event that fires when a Cordova application is put into the background.

    document.addEventListener("pause", yourCallbackFunction, false);

Details
-------

Cordova consists of two code bases: native and JavaScript. While the native code puts the application into the background the pause event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7

Quick Example
-------------

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // Handle the pause event
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Pause Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
		    document.addEventListener("pause", onPause, false);
        }

        // Handle the pause event
        //
        function onPause() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS Quirks
--------------------------
In the pause handler, any calls that go through Objective-C will not work, nor will any calls that are interactive, like alerts. This means that you cannot call console.log (and its variants), or any calls from Plugins or the Cordova API. These will only be processed when the app resumes (processed on the next run-loop).

- __resign__ event 

    This iOS specific event is available as a variant of the **pause** event, and is often used to detect when the "Lock" button has been pressed to lock the device when your app is the foreground app. If your app (and device) is enabled for multi-tasking, this will be paired with a subsequent **pause** event, but only under iOS 5 (effectively all "locked" apps in iOS 5 that have multi-tasking enabled are put to the background). 
    
    Under iOS 5, if you want your app to still run when the device is locked, you will have to disable multi-tasking (UIApplicationExitsOnSuspend - YES) for your app. This is different when you are on iOS 4 - to have your app run when the device is locked, the multi-tasking setting for your app does not matter.



resume
===========

This is an event that fires when a Cordova application is retrieved from the background.

    document.addEventListener("resume", yourCallbackFunction, false);

Details
-------

Cordova consists of two code bases: native and JavaScript. While the native code pulls the application from the background the resume event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7

Quick Example
-------------

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // Handle the resume event
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Resume Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            document.addEventListener("resume", onResume, false);
        }

        // Handle the resume event
        //
        function onResume() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS Quirks
--------------------------
Any calls to console.log during your **pause** event handler will be run now when the app resumes, see the iOS Quirks section for the **pause** event for an explanation. 

- __active__ event 

    This iOS specific event is available as a variant of the **resume** event, and is often used to detect when the "Lock" button has been pressed to unlock the device when your app is the foreground app. If your app (and device) is enabled for multi-tasking, this will be paired with a subsequent **resume** event, but only under iOS 5 (effectively all "locked" apps in iOS 5 that have multi-tasking enabled are put to the background). 
    
    Under iOS 5,  if you want your app to still run when the device is locked, you will have to disable multi-tasking (UIApplicationExitsOnSuspend - YES) for your app. This is different when you are on iOS 4 - to have your app run when the device is locked, the multi-tasking setting for your app does not matter.

- __resume__ event 

    Interactive functions like alert() when the resume event fires will need to be wrapped in a setTimeout call with a timeout value of zero, or else the app will hang. e.g.

        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }


online
===========

This is an event that fires when a Cordova application is online (connected to the Internet).

    document.addEventListener("online", yourCallbackFunction, false);

Details
-------

When the application's network connection changes to being online, the online event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7

Quick Example
-------------

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // Handle the online event
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Online Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            document.addEventListener("online", onOnline, false);
        }

        // Handle the online event
        //
        function onOnline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS Quirks
--------------------------
During initial startup, the first online event (if applicable) will take at least a second to fire.

Windows Phone 7 Quirks
--------------------------
When running in the Emulator, the connection.status of the device is always unknown, and this event will NOT fire.



offline
===========

This is an event that fires when a Cordova application is offline (not connected to the Internet).

    document.addEventListener("offline", yourCallbackFunction, false);

Details
-------

When the application's network connection changes to being offline, the offline event is fired.  

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7

Quick Example
-------------

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Handle the offline event
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Offline Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
		    document.addEventListener("offline", onOffline, false);
        }

        // Handle the offline event
        //
        function onOffline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

iOS Quirks
--------------------------
During initial startup, the first offline event (if applicable) will take at least a second to fire.

Windows Phone 7 Quirks
--------------------------
When running in the Emulator, the connection.status of the device is always unknown, and this event will NOT fire.



backbutton
===========

This is an event that fires when the user presses the back button.

    document.addEventListener("backbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default back button behaviour you can register an event listener for the 'backbutton' event.  It is no longer necessary to call any other method to over ride the back button behaviour.  Now, you only need to register an event listener for 'backbutton'.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 ( Mango )

Quick Example
-------------

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // Handle the back button
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Back Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to call Cordova methods
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
        
        // Handle the back button
        //
        function onBackKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



batterycritical
===========

This is an event that fires when a Cordova application detects the battery has reached the critical level threshold.

    window.addEventListener("batterycritical", yourCallbackFunction, false);

Details
-------

This event that fires when a Cordova application detects the percentage of battery has reached the critical battery threshold. This value is device specific.

The batterycritical handler will be called with an object that contains two properties:

- __level:__ The percentage of battery (0-100). _(Number)_
- __isPlugged:__ A boolean that represents whether or not the device is plugged in or not. _(Boolean)_

Typically, you will want to attach an event listener with `window.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(info) {
        // Handle the battery critical event
       	alert("Battery Level Critical " + info.level + "%\nRecharge Soon!"); 
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Device Ready Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        // 
	    function onLoad() {
    	    document.addEventListener("deviceready", onDeviceReady, false);
    	}

        // Cordova is loaded and it is now safe to make calls Cordova methods
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



batterylow
===========

This is an event that fires when a Cordova application detects the battery has reached the low level threshold.

    window.addEventListener("batterylow", yourCallbackFunction, false);

Details
-------

This event that fires when a Cordova application detects the percentage of battery has reached the low battery threshold. This value is device specific.

The batterylow handler will be called with an object that contains two properties:

- __level:__ The percentage of battery (0-100). _(Number)_
- __isPlugged:__ A boolean that represents whether or not the device is plugged in or not. _(Boolean)_

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // Handle the battery low event
       	alert("Battery Level Low " + info.level + "%"); 
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Device Ready Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        // 
	    function onLoad() {
    	    document.addEventListener("deviceready", onDeviceReady, false);
    	}

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
		    window.addEventListener("batterylow", onBatteryLow, false);
        }

        // Handle the batterylow event
        //
        function onBatteryLow(info) {
	       	alert("Battery Level Low " + info.level + "%"); 
        }
        
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



batterystatus
===========

This is an event that fires when a Cordova application detects a change in the battery status.

    window.addEventListener("batterystatus", yourCallbackFunction, false);

Details
-------

This event that fires when a Cordova application detects the percentage of battery has changed by at least 1 percent. It is also fired if the device has been plugged in or un-plugged.

The battery status handler will be called with an object that contains two properties:

- __level:__ The percentage of battery (0-100). _(Number)_
- __isPlugged:__ A boolean that represents whether or not the device is plugged in or not. _(Boolean)_

Typically, you will want to attach an event listener with `window.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 ( Mango )


Windows Phone 7 Quirks
----------------------

The `level` property is unavailable as Windows Phone 7 does not provide
native APIs for determining battery level. The `isPlugged` parameter
_is_ supported.

Quick Example
-------------

    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info) {
        // Handle the online event
       	console.log("Level: " + info.level + " isPlugged: " + info.isPlugged); 
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Cordova Device Ready Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        // 
	    function onLoad() {
    	    document.addEventListener("deviceready", onDeviceReady, false);
    	}

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
		    window.addEventListener("batterystatus", onBatteryStatus, false);
        }

        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
        	console.log("Level: " + info.level + " isPlugged: " + info.isPlugged); 
        }
        
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



menubutton
===========

This is an event that fires when the user presses the menu button.

    document.addEventListener("menubutton", yourCallbackFunction, false);

Details
-------

If you need to override the default menu button behaviour you can register an event listener for the 'menubutton' event.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("menubutton", onMenuKeyDown, false);

    function onMenuKeyDown() {
        // Handle the back button
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Menu Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }

        // Handle the menu button
        //
        function onMenuKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



searchbutton
===========

This is an event that fires when the user presses the search button on Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default search button behaviour on Android you can register an event listener for the 'searchbutton' event.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- Android

Quick Example
-------------

    document.addEventListener("searchbutton", onSearchKeyDown, false);

    function onSearchKeyDown() {
        // Handle the search button
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Search Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }

        // Handle the search button
        //
        function onSearchKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



startcallbutton
===========

This is an event that fires when the user presses the start call button.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default start call behaviour you can register an event listener for the 'startcallbutton' event.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);

    function onStartCallKeyDown() {
        // Handle the start call button
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Start Call Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }

        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



endcallbutton
===========

This is an event that fires when the user presses the end call button.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default end call behaviour you can register an event listener for the 'endcallbutton' event.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);

    function onEndCallKeyDown() {
        // Handle the end call button
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova End Call Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
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



volumedownbutton
===========

This is an event that fires when the user presses the volume down button.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default volume down behaviour you can register an event listener for the 'volumedownbutton' event.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);

    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Volume Down Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }

        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>



volumeupbutton
===========

This is an event that fires when the user presses the volume up button.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);

Details
-------

If you need to override the default volume up behaviour you can register an event listener for the 'volumeupbutton' event.

Typically, you will want to attach an event listener with `document.addEventListener` once you receive the Cordova 'deviceready' event.

Supported Platforms
-------------------

- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
-------------

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);

    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Cordova Volume Up Button Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Call onDeviceReady when Cordova is loaded.
        //
        // At this point, the document has loaded but cordova-2.0.0.js has not.
        // When Cordova is loaded and talking with the native device,
        // it will call the event `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova is loaded and it is now safe to make calls Cordova methods
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }

        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


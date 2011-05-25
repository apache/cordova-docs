connection.homeNW
====================

The home network provider of the cellular connection of the device (usually from the SIM card). However, there is no guarantee that your provider will put their name on the SIM card.

Description
-----------

Returns the home network provider info (e.g. "Vodafone UK") provided by the implementation. This property is only valid if the network connection is cellular-based, otherwise it is set to null.

Supported Platforms
-------------------

- Android
- iOS

Quick Example
-------------

	alert("Home Network: " + navigator.network.connection.homeNW);


Full Example
-------------

	    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	                          "http://www.w3.org/TR/html4/strict.dtd">
	    <html>
	      <head>
	        <title>navigator.network.connection.homeNW Example</title>

	        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
	        <script type="text/javascript" charset="utf-8">

	        // Wait for PhoneGap to load
	        // 
	        function onLoad() {
	            document.addEventListener("deviceready", onDeviceReady, false);
	        }

	        // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
	        //
	        function onDeviceReady() {
				alert("Home Network: " + navigator.network.connection.homeNW);
	        }

	        </script>
	      </head>
	      <body onload="onLoad()">
	        <p>A dialog box will report the home network.</p>
	      </body>
	    </html>

Android Quirks
----------
- This property may be null, it is read from the devices SIM card and not all carriers set this information.

iOS Quirks
----------
- This property is always null, it is set here for future support once iOS supports it.

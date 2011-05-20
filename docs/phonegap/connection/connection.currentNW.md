connection.currentNW
====================

The current network provider of the cellular connection of the device. 

Description
-----------

Returns the current network provider info (e.g. "Vodafone UK") provided by the implementation. This property is only valid if the network connection is cellular-based, otherwise it is set to null. This would be different from your home network provider, if you are roaming.

Supported Platforms
-------------------

- Android
- iOS

Quick Example
-------------

	alert("Current Network: " + navigator.connection.currentNW);


Full Example
-------------

	    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	                          "http://www.w3.org/TR/html4/strict.dtd">
	    <html>
	      <head>
	        <title>navigator.connection.currentNW Example</title>

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
				alert("Home Network: " + navigator.connection.currentNW);
	        }

	        </script>
	      </head>
	      <body onload="onLoad()">
	        <p>A dialog box will report the current network.</p>
	      </body>
	    </html>

connection.type
===================

Checks the active network connection that is being used.

Description
-----------

This property is a fast way to determine the device's network connection state, and type of connection.


Supported Platforms
-------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- Windows Phone 7 ( Mango )

Quick Example
-------------

    function checkConnection() {
        var networkState = navigator.network.connection.type;
        
        var states = {};
        states[Connection.UNKNOWN]	= 'Unknown connection';
        states[Connection.ETHERNET]	= 'Ethernet connection';
        states[Connection.WIFI]   	= 'WiFi connection';
        states[Connection.CELL_2G]	= 'Cell 2G connection';
        states[Connection.CELL_3G]	= 'Cell 3G connection';
        states[Connection.CELL_4G]	= 'Cell 4G connection';
        states[Connection.NONE]   	= 'No network connection';
    
        alert('Connection type: ' + states[networkState]);
    }
    
    checkConnection();


Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.network.connection.type Example</title>
        
        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">
            
        // Wait for PhoneGap to load
        // 
        document.addEventListener("deviceready", onDeviceReady, false);
        
        // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
        //
        function onDeviceReady() {
            checkConnection();
        }
        
	    function checkConnection() {
	        var networkState = navigator.network.connection.type;

	        var states = {};
	        states[Connection.UNKNOWN]	= 'Unknown connection';
	        states[Connection.ETHERNET]	= 'Ethernet connection';
	        states[Connection.WIFI]   	= 'WiFi connection';
	        states[Connection.CELL_2G]	= 'Cell 2G connection';
	        states[Connection.CELL_3G]	= 'Cell 3G connection';
	        states[Connection.CELL_4G]	= 'Cell 4G connection';
	        states[Connection.NONE]   	= 'No network connection';

	        alert('Connection type: ' + states[networkState]);
	    }
        
        </script>
      </head>
      <body>
        <p>A dialog box will report the network state.</p>
      </body>
    </html>

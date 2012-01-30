geolocation.clearWatch
======================

Stop watching for changes to the device's location referenced by the `watchID` parameter.

    navigator.geolocation.clearWatch(watchID);

Parameters
----------

- __watchID:__ The id of the `watchPosition` interval to clear. (String)

Description
-----------

Function `geolocation.clearWatch` stops watching changes to the device's location by clearing the `geolocation.watchPosition` referenced by `watchID`.

Supported Platforms
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )

Quick Example
-------------

    // Options: retrieve the location every 3 seconds
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });

    // ...later on...

    navigator.geolocation.clearWatch(watchID);


Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var watchID = null;

        // PhoneGap is ready
        //
        function onDeviceReady() {
            // Update every 3 seconds
            var options = { frequency: 3000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }

        // clear the watch that was started earlier
        // 
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
	    // onError Callback receives a PositionError object
	    //
	    function onError(error) {
	      alert('code: '    + error.code    + '\n' +
	            'message: ' + error.message + '\n');
	    }

        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
    	<button onclick="clearWatch();">Clear Watch</button>     
      </body>
    </html>
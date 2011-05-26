Accelerometer Watch Acceleration
================================

At a regular interval, get the acceleration along the x, y, and z axis.

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, [options]);

Description
-----------

The accelerometer is a motion sensor that detects the change (delta) in movement relative to the current position. The accelerometer can detect 3D movement along the x, y, and z axis.

Quick Example
-------------

    function(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n';
    };

    function onError() {
        alert('onError!');
    };

    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // The watch id references the current `watchAcceleration`
        var watchID = null;
        
        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
            startWatch();
        }

        // Start watching the acceleration
        //
        function startWatch() {
            clearWatch();
            
            // Update acceleration every 3 seconds
            var options = { frequency: 30000 };
            
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
        
        // Stop watching the acceleration
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
        
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess() {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                'Acceleration Y: ' + acceleration.y + '<br />' +
                                'Acceleration Z: ' + acceleration.z + '<br />';
        }

        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="accelerometer">Waiting for accelerometer...</div>
      </body>
    </html>
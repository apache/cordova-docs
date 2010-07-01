accelerometer.watchAcceleration
-----------
Gets the device's current accelerometer data at a regular interval. Each time the `Acceleration` is retrieved, the `successCallback` callback function is executed. Essentially, `navigator.accelerometer.getCurrentAcceleration` called on an interval.

Returns a watch ID that references the accelerometer watch interval. The watch ID can be used with `accelerometer.clearWatch` to stop watching the accelerometer.

### Syntax ###
    navigator.acceleration.watchAcceleration(successCallback, errorCallback, options)
    
- __successCallback:__ Called each time the acceleration data is available _(Function)_
    - __Syntax:__
        - `function (accel) {}`
    - __Parameter:__
        - __accel:__ Acceleration coordinates for the device _(Acceleration)_
- __errorCallback:__ Called when something goes wrong _(Function)_ (Optional)
    - __Syntax:__
        - `function (error) {}`
    - __Parameter:__
        - __error:__ An error message _(String)_
- __options:__ _(Object)_ (Optional)
    - __Syntax:__
        - `var options = { frequency: 10000 };`
    - __Values:__
        - __frequency:__ How often to retrieve the position in milliseconds. _(Number)_ (Default: 10000)

### Details ###

`accelerometer.watchPositon` is an asynchronous function. When the device's native code has retrieved the device's accelerometer data, the `successCallback` callback is invoked with an `Acceleration` object as the parameter.

### Example ###

    // successCallback Callback
    //
    var onSuccess = function(accel) {
        alert('Your x position is is ' + accel.x + ', your y position is ' + accel.y +
              ' and your z position is ' + accel.z);
    };

    // errorCallback Callback
    var onError = function() {
        alert('Fail whale!');
    };

    // Options: retrieve the acceleration data every 3 seconds
    //
    var options = { frequency: 3000 };

    // Start watching the acceleration
    //
    var watchID = navigator.accelerometer.watchPosition(onSuccess, onError, options);
    
### Example: Full Application ###
    <!doctype html>
    <html>
      <head>
        <title>PhoneGap: Accelerometer Example</title>
        <script type="text/javascript" src="phonegap.js"></script>
        <script>
            function onWinLoad() {
        		document.addEventListener("deviceready",onDeviceReady,false);
        	}
        	
        	function onDeviceReady() {
        		watchAccel();
        	}

            function watchAccel() {
        		navigator.accelerometer.watchAcceleration(onAccellUpdate,onAccelError,{frequency:50});
          	}
          	
          	function onAccelError(e) {
        		alert("fail: " + e );
        	}

        	function onAccellUpdate(accel) {
        	    var dimensions = ["x", "x", "z"];
        	    var i = 0;
        	    
        	    while (i < dimensions.length) {
        	        document.getElementById("accel_" + dimensions[i]).innerHTML = accel[dimensions[i]];
        	        i++;
        	    }
        	}

        </script>
      </head>
      <body onload="onWinLoad()">

    	<div class="accelValues">
    	    <p id="accel_x">???</p>
    	    <p id="accel_y">???</p>
    	    <p id="accel_z">???</p>
    	</div>
      </body>
    </html>

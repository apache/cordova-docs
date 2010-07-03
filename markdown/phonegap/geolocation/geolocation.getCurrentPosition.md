geolocation.getCurrentPosition
------------------------------

Returns the device's current GPS position as a `Position` object.

### Syntax ###

    navigator.geolocation.getCurrentPosition(onSuccess, onError, [options]);

- __onSuccess:__ Called when the GPS position is successfully retrieved. _(Function)_
    - __Syntax:__
        - `function(devicePosition) {}`
    - __Parameter:__
        - __devicePosition:__ Contains the position coordinates of the device. _(Position)_
- __onError:__ Called when PhoneGap is unable to retrieve the device's position. _(Function)_
    - __Syntax:__
        - `function() {}`
- __options:__ Unused at the moment. _(Object)_ (Optional)

### Details ###

`geolocation.getCurrentPositon` is an asynchronous function.

If the geolocation is retrieved, then the `onSuccess` function is called.

If an error occurs while retrieving the geolocation, then the `onError` function is called.

### Supported Platforms ###

- Android
- BlackBerry
- iPhone
- webOS

### Example: In-Line Callbacks ###

    // You can also define the callback functions in-line
    //
    navigator.geolocation.getCurrentPosition(
        // onSuccess
        //
        function(position) {
            alert('Your latitude is ' + position.coords.latitude +
                  ' and your longitude is ' + position.coords.longitude);
        },
        // onError
        //
        function() {
            alert('Fail whale!');
        }
    );
    
### Example: External Callbacks ###

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Your latitude is ' + position.coords.latitude +
              ' and your longitude is ' + position.coords.longitude);
    };

    // onError Callback
    //
    var onError = function() {
        alert('Fail whale!');
    };

    // Have PhoneGap get the GPS position.
    //   We do not pass an options object, since it is currently ignored.
    //
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

### Example: Full Application ###

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <meta name="viewport" content="width=default-width; user-scalable=no" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title>Geolocation Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        function onLoad() {
            document.addEventListener("deviceready",onDeviceReady,false);
        }

        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(
                // onSuccess Callback
                //
                function(position) {
                    document.getElementById('latitude').innerHTML  = position.coords.latitude;
                    document.getElementById('longitude').innerHTML = position.coords.longitude;
                },
                
                // onError Callback
                //
                function() {
                    alert('Fail whale!');
                }
            );
        }
	
        </script>
      </head>
      <body onload="onLoad()">
        <p>Your latitude is <span id="latitude">unknown</span></p>
        <p>Your longitude is <span id="longitude">unknown</span></p>
      </body>
    </html>
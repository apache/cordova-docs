device.uuid
-----------

Returns the device's Universally Unique Identifier ([UUID](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)) as a string. The details of how the UUID is generated are determined by the device manufacturer and are specific to the device's platform or model.

### Syntax ###

    window.device.uuid;
    device.uuid;

### Supported Platforms ###

- Android 2.1 +
- iPhone

### Brief Example ###

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
    //
    var deviceID = window.device.uuid;
    
    // Shorthand form:
    //
    var deviceID = device.uuid;

### Full Example ###

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <meta name="viewport" content="width=default-width; user-scalable=no" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title>Device UUID Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        function onLoad() {
            document.addEventListener("deviceready",onDeviceReady,false);
        }

        function onDeviceReady() {
            var deviceID = device.uuid;
			document.getElementById('dID').innerHTML  = deviceID;
        }
	
        </script>
      </head>
      <body onload="onLoad()">
        <p>Your device uuid is <span id="dID">unknown</span></p>
      </body>
    </html>
    
device.platform
---------------

Returns the device's platform as a string. The platform is defined as the manufacturer's name, so this property has a broader reach when compared to the device's name.

### Syntax ###

    window.device.platform;
    device.plaform;

### Supported Platforms ###

- Android 2.1+
- iPhone

### Brief Example ###

    // Depending on the device, this will return:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iPhone"
    //   - "webOS"
    //
    var devicePlatform = window.device.platform;
    
    // Shorthand form:
    //
    var devicePlatform = device.platform;

### Full Example ###

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <meta name="viewport" content="width=default-width; user-scalable=no" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title>Device Platform Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        function onLoad() {
            document.addEventListener("deviceready",onDeviceReady,false);
        }

        function onDeviceReady() {
            var devicePlatform = device.platform;
			document.getElementById('dPlatform').innerHTML  = devicePlatform;
        }
	
        </script>
      </head>
      <body onload="onLoad()">
        <p>Your device platform is <span id="dPlatform">unknown</span></p>
      </body>
    </html>
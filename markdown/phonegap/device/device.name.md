device.name
-----------

Returns the device's model name as a string. The name is defined by the manufacturer, so it is different for each device.

### Syntax ###

    window.device.name;
    device.name;

### Supported Platforms ###

- Android 2.1+
- iPhone

### Brief Example ###

    // Android:    Nexus One will return "Passion" (original code name)
    // BlackBerry: Bold will return "9000"
    // iPhone:     Returns the name assigned in iTunes e.g. "Joe's iPhone"
    //
    var deviceName = window.device.name;
    
    // Shorthand form:
    //
    var deviceName = device.name

### Full Example ###

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <meta name="viewport" content="width=default-width; user-scalable=no" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title>Device Name Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        function onLoad() {
            document.addEventListener("deviceready",onDeviceReady,false);
        }

        function onDeviceReady() {
            var deviceName = device.name;
			document.getElementById('dName').innerHTML  = deviceName;
        }
	
        </script>
      </head>
      <body onload="onLoad()">
        <p>Your device name is <span id="dName">unknown</span></p>
      </body>
    </html>
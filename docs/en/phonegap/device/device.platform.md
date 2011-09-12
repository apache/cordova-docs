device.platform
===============

Get the device's operating system name.

    var string = device.platform;

Supported Platforms
-------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone

Quick Example
-------------

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iPhone"
    //   - "webOS"
    //
    var devicePlatform = device.platform;

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

        // PhoneGap is ready
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                                'Device PhoneGap: ' + device.phonegap + '<br />' + 
                                'Device Platform: ' + device.platform + '<br />' + 
                                'Device UUID: '     + device.uuid     + '<br />' + 
                                'Device Version: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    
iPhone Quirks
-------------

All devices return `iPhone` as the platform. This is inaccurate because Apple has rebranded the iPhone operating system as `iOS`.

BlackBerry Quirks
-----------------

Devices may return the device platform version instead of the platform name.  For example, the Storm2 9550 would return '2.13.0.95' or similar.
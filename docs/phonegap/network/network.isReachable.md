network.isReachable
===================

Checks whether a connection can be established with the specified domain.

    network.isReachable(reachableHostname, reachableCallback, [reachableOptions])

Description
-----------

This is a fast way to determine the device's network connection state, type of connection, and whether a specific domain is online.

`network.isReachable` is an asynchronous function that returns the network state through the callback function.

Quick Example
-------------

    var domain  = 'twitter.com';
    var options = { };
    
    function reachableCallback(reachability) {
        var states = {};
        states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
        states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
        states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';
    
        alert('Connection type: ' + states[reachability.code]);
    }
    
    navigator.network.isReachable(domain, reachableCallback, options);
 

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>isReachable Example</title>

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
            navigator.network.isReachable("twitter.com", reachableCallback);
        }
    
        // Check network status
        //
        function reachableCallback(reachability) {
            var states = {};
            states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
            states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
            states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';
        
            alert('Connection type: ' + states[reachability.code]);
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    
iPhone Quirks
-------------

Please see the reachableCallback and reachableOptions for iPhone specific quirks.
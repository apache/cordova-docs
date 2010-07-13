reachableCallback
=================

A callback function that provides the reachability status of a hostname.

    function reachableCallback(reachability) {
        // Check the reachability state
    }

Parameters
----------

- __reachability:__ The device's network state. (`NetworkStatus`)

Description
-----------

This callback accepts a single argument called `reachability`, which is a `NetworkStatus` constant.

Example
-------

    function reachableCallback(reachability) {
        var states = {};
        states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
        states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
        states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';

        alert('Connection type: ' + states[reachability]);
    }

iPhone Quirks
-------------

- The reachableCallback function must be declared in the global scope, otherwise the callback is never fired.
    - This works:
    
            // Global scope. Not declared within another function or object
            //
            function reachableCallback(reachability) {
                // Do something
            }
            
    - These do not work:
    
            navigator.network.isReachable('twitter.com', function() {
                // This does not work on the iPhone
            });
            
            // neither does
            
            var reachableCallback = function(reachability) {
                // This does not work on the iPhone
            };
            
    
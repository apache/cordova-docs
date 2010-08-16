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
    
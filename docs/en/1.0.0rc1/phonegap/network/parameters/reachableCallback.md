reachableCallback
=================

A callback function that provides the reachability status of a hostname.

    function reachableCallback(reachability) {
        // Check the reachability state
    }

Parameters
----------

- __reachability:__ The device's network state. (`NetworkStatus`)
    - Unfortunately, there is no consistency across the platforms on the `reachability` format. See the quirks below for platform details.

Description
-----------

This callback accepts a single argument called `reachability`, which is a `NetworkStatus` constant.

Example
-------

    function reachableCallback(reachability) {
        // There is no consistency on the format of reachability
        var networkState = reachability.code || reachability;
    
        var states = {};
        states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
        states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
        states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';

        alert('Connection type: ' + states[networkState]);
    }

BlackBerry Quirks
-----------------

Provides the network status as the value of `reachablity`

    function reachableCallback(reachability) {
        var hasConnection = (reachability !== NetworkStatus.NOT_REACHABLE);
    }

iPhone Quirks
-------------

The iPhone implementation only provides information about the type of connection available. It does not verify that the host is actually available. 

	function reachableCallback(reachability) {
	    var networkState = reachability.code;
	    alert('Connection type: ' + networkState + ' - ' + reachability.message);
	}

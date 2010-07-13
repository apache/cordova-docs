NetworkStatus
=============

`NetworkStatus` defines a set of constants that describe the state of the network connection. The `reachability` argument of `network.isReachable` is a `NetworkStatus` constant.

Constants
---------

- `NetworkStatus.NOT_REACHABLE`
- `NetworkStatus.REACHABLE_VIA_WIFI_NETWORK`
- `NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK`

Example
-------

    navigator.network.isReachable('twitter.com', function() {
       var states = {};
          states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
          states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
          states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';

          alert('Connection type: ' + states[reachability]);
    });
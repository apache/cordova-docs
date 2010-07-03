network.isReachable
===================

Checks whether the specified hostName (a string) is accessible through a data connection.

Upon completion, the callback function is passed an object that contains a "code" value. This code is equal to one of the `NetworkStatus` constants defined.

    network.isReachable(hostName, callback, options)
    
* __hostName:__ The hostname to attempt to connect to.
* __callback:__ function reference that is passed a status object in response.
* __options:__ optional object. If the hostName is an ip address, pass in an options object with the "isIpAddress" field set to true.

Example
-------

    function isNetworkAvailable(status) {
      if (status.code == NetworkStatus.NOT_REACHABLE) {
        alert("ALERT ALERT YOU CAN'T ACCESS ESSENTIAL RESOURCES ALERT ALERT");
      }
    }
    
    navigator.network.isReachable("twitter.com", isNetworkAvailable, { "isIpAddress":false });
geolocationOptions
==================

Optional parameters to customize the retrieval of the geolocation.

    { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

Options
-------

- __frequency:__ How often to retrieve the position in milliseconds. This option is not part of the W3C spec and will be removed in the future. maximumAge should be used instead. _(Number)_ (Default: 10000)
- __enableHighAccuracy:__ Provides a hint that the application would like to receive the best possible results. _(Boolean)_
- __timeout:__ The maximum length of time (msec) that is allowed to pass from the call to `geolocation.getCurrentPosition` or `geolocation.watchPosition` until the corresponding `geolocationSuccess` callback is invoked. _(Number)_
- __maximumAge:__ Accept a cached position whose age is no greater than the specified time in milliseconds. _(Number)_

Android Quirks
--------------

The Android 2.x simulators will not return a geolocation result unless the enableHighAccuracy option is set to true.

    { enableHighAccuracy: true }


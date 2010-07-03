notification.vibrate
====================

Vibrates the device for the specified amount of time.

Syntax
------

    navigator.notification.vibrate(milliseconds)

- __time:__ Milliseconds to vibrate the device. 1000 milliseconds equals 1 second _(Number)_

Warning
-------

At the moment, the `milliseconds` parameter is not respected across all platforms.

- __Android:__ Milliseconds.
- __BlackBerry:__ Seconds.
- __iPhone:__ Ignores the argument and vibrates for a preset time.

Supported Platforms
-------------------

- Android
- BlackBerry
- iPhone
- webOS

Example
-------

    // Android: vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);
    
    // BlackBerry: vibrate for 2 seconds
    //
    navigator.notification.vibrate(2)
    
    // iPhone: you have no choice
    //
    navigator.notification.vibrate();
    navigator.notification.vibrate(2500);   // 2500 is ignored
device.version
--------------

Returns the device's operating system (OS) version as a string.

### Syntax ###

    window.device.version;
    device.version;
    
### Supported Platforms ###

- Android
- BlackBerry
- iPhone
- webOS

### Example ###

    // Android: Froyo OS would return "2.2"
    //          Eclair OS would return "2.1", "2.0.1", or "2.0"
    //          Cupcake OS would return "1.6"
    //
    // BlackBerry: Bold 9000 using OS 4.6 would return "4.6.0.282"
    //
    // iPhone: iOS 3.2 returns "3.2"
    //
    var deviceVersion = window.device.version;

    // Shorthand form:
    //
    var deviceVersion = device.version;
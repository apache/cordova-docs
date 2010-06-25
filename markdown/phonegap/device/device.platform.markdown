device.platform
---------------

Returns the device's platform as a string. The platform is defined as the manufacturer's name, so this property has a broader reach when compared to the device's name.

### Syntax ###

    window.device.platform;
    device.plaform;

### Supported Platforms ###

- Android
- BlackBerry
- iPhone
- WebOS

### Example ###

    // Depending on the device, this will return:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iPhone"
    //   - "webOS"
    //
    var devicePlatform = window.device.platform;
    
    // Shorthand form:
    //
    var devicePlatform = device.platform;
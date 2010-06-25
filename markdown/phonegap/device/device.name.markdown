device.name
-----------

Returns the device's model name as a string. The name is defined by the manufacturer, so it is different for each device.

### Syntax ###

    window.device.name;
    device.name;

### Supported Platforms ###

- Android
- BlackBerry
- iPhone
- webOS

### Example ###

    // Android:    Nexus One will return "Passion" (original code name)
    // BlackBerry: Bold will return "9000"
    // iPhone:     Returns the name assigned in iTunes e.g. "Joe's iPhone"
    //
    var deviceName = window.device.name;
    
    // Shorthand form:
    //
    var deviceName = device.name
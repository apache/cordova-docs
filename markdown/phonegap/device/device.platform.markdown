device.platform
---------------
Returns the device's platform name as a string. This is more general than device.name and tells you the name of the manufacturer.

The 'device' object is assigned to the 'window' object, so is implicitly in global scope. It is the only PhoneGap / device API object to be available in such a way.

### Supported Platforms ###
iPhone, Android, BlackBerry, webOS

### Example ###
    var devicePlatform = device.platform;
    // Returns 'BlackBerry' or 'iPhone' or 'Android' or 'webOS'
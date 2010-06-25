device.uuid
-----------

Returns the device's Universally Unique Identifier ([UUID](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)) as a string. The details of how the UUID is generated are determined by the device manufacturer and are specific to the device's platform or model.

### Syntax ###

    window.device.uuid;
    device.uuid;

### Supported Platforms ###

- Android
- BlackBerry
- iPhone
- webOS

### Example ###

    // Android: Returns a random 64-bit integer (as a string, again!)
    //          The integer is generated on the device's first boot
    //
    // BlackBerry: Returns the PIN number of the device
    //             This is a nine-digit unique integer (as a string, though!)
    //
    // iPhone: (Paraphrased from the UIDevice Class documentation)
    //         Returns a string of hash values created from multiple hardware identifies.
    //         It is guaranteed to be unique for every device and cannot be tied
    //         to the user account.
    //
    var deviceID = window.device.uuid;
    
    // Shorthand form:
    //
    var deviceID = device.uuid;
    
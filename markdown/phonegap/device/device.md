Device
======

> The `device` object is a set of properties that describe the hardware and software of the device.

Properties
----------

- device.name
- device.platform
- device.uuid
- device.version

Details
-------

The `device` object is the only PhoneGap API that is assigned to the `window` object. By belonging to the `window` object, `devie` is implicitly in JavaScript's global scope.

    var phoneName = window.device.name;
    var phoneName = device.name;        // Also works
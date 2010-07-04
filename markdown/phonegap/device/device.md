Device
======

> The `device` object describes the device's hardware and software.

Properties
----------

- device.name
- device.platform
- device.uuid
- device.version

Variable Scope
--------------

Since `device` is assigned to the `window` object, it is implicitly in the global scope.

    var phoneName = window.device.name;
    var phoneName = device.name;        // The same result
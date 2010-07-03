notification.beep
-----------------

The device will play a beep sound.

### Syntax ###

    navigator.notification.beep(times);

- __times:__ The number of times to repeat the beep _(Number)_

### Supported Platforms ###

- Android
- BlackBerry
- iPhone
- webOS

### Warning ###

The iPhone ignores the beep count argument.

### Example ###

    // Beep twice!
    navigator.notification.beep(2);

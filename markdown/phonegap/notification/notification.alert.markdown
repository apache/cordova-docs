notification.alert
------------------

Shows an alert or dialog box.

### Syntax ###

    navigator.notification.alert(message, [title], [buttonName])

- __message:__ Dialog message _(String)_
- __title:__ Dialog title _(String)_ (Optional) (Default: "Alert")
- __buttonName:__ Button name _(String)_ (Optional) (Default: "OK")
    
### Details ###

PhoneGap usually leverages the platform browser's JavaScript `alert` function, but on some platforms a more robust dialog box is shown.

The iPhone is the only platform that supports custom dialog titles and button names.

The Android shows a non-blocking dialog with the `title` "Alert" and OK / Cancel buttons. The dialog's non-blocking nature can be counter-intuitive because the most recent alert will show on top!

### Supported Platforms ###

- Android
- BlackBerry
- iPhone
- webOS

### Example ###

    // Android / BlackBerry / webOS
    //
    navigator.notification.alert('You are the winner!');
    
    // iPhone
    //
    navigator.notification.alert(
        'You are the winner!',  // message
        'Game Over',            // title
        'Done'                  // buttonName
    );
    
    // iPhone simple dialog
    //
    navigator.notification.alert('You are the winner!');
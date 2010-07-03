accelerometer.getCurrentAcceleration
====================================

Calls the `successCallback` function with current acceleration values in X,Y,Z axis as an `Acceleration` object.

Syntax
------

    navigator.acceleration.watchAcceleration(successCallback, errorCallback, options)
    
- __successCallback:__ Called when the acceleration data is available _(Function)_
    - __Syntax:__
        - `function (accel) {}`
    - __Parameter:__
        - __accel:__ Acceleration coordinates for the device _(Acceleration)_
- __errorCallback:__ Called when something goes wrong _(Function)_ (Optional)
    - __Syntax:__
        - `function (error) {}`
    - __Parameter:__
        - __error:__ An error message _(String)_
- __options:__ Not currently used _(Object)_ (Optional)

Example
-------

    // successCallback Callback
    //
    var onSuccess = function(accel) {
        alert('Your x position is is ' + accel.x + ', your y position is ' + accel.y +
              ' and your z position is ' + accel.z);
    };

    // errorCallback Callback
    var onError = function() {
        alert('Fail whale!');
    };

    // Start watching the acceleration
    //
    var watchID = navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

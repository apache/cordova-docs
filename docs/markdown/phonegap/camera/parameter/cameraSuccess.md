cameraSuccess
=============

onSuccess callback function that provides the image data.

    function(imageData) {
        // Do something with the image
    }

Parameters
----------

- __imageData:__ Base64 encoding of the image data. (`String`)

Example
-------

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
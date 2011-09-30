camera.getPicture
=================

Takes a photo using the camera or retrieves a photo from the device's album.  The image is returned as a base64 encoded `String` or as the URI of an image file.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

Description
-----------

Function `camera.getPicture` opens the device's default camera application so that the user can take a picture (if `Camera.sourceType = Camera.PictureSourceType.CAMERA`, which is the default). Once the photo is taken, the camera application closes and your application is restored.

If `Camera.sourceType = Camera.PictureSourceType.PHOTOLIBRARY` or `Camera.PictureSourceType.SAVEDPHOTOALBUM`, then a photo chooser dialog is shown, from which a photo from the album can be selected.

The return value will be sent to the `cameraSuccess` function, in one of the following formats, depending on the `cameraOptions` you specify:

- A `String` containing the Base64 encoded photo image (default). 
- A `String` representing the image file location on local storage.  

You can do whatever you want with the encoded image or URI, for example:

- Render the image in an `<img>` tag _(see example below)_
- Save the data locally (`LocalStorage`, [Lawnchair](http://brianleroux.github.com/lawnchair/), etc)
- Post the data to a remote server

Note: The image quality of pictures taken using the camera on newer devices is quite good.  _Encoding such images using Base64 has caused memory issues on some of these devices (iPhone 4, BlackBerry Torch 9800)._  Therefore, using FILE_URI as the 'Camera.destinationType' is highly recommended.

Supported Platforms
-------------------

- Android
- Blackberry WebWorks (OS 5.0 and higher)
- iPhone

Quick Example
-------------

Take photo and retrieve Base64-encoded image:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50 }); 

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

Take photo and retrieve image file location: 

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
        destinationType: Camera.DestinationType.FILE_URI }); 

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }


Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Photo</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value 
        
        // Wait for PhoneGap to connect with the device
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // PhoneGap is ready to be used!
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }

        // Called when a photo is successfully retrieved
        //
        function onPhotoDataSuccess(imageData) {
          // Uncomment to view the base64 encoded image data
          // console.log(imageData);
      
          // Get image handle
          //
          var smallImage = document.getElementById('smallImage');
      
          // Unhide image elements
          //
          smallImage.style.display = 'block';
      
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }

        // Called when a photo is successfully retrieved
        //
        function onPhotoURISuccess(imageURI) {
          // Uncomment to view the image file URI 
          // console.log(imageURI);
      
          // Get image handle
          //
          var largeImage = document.getElementById('largeImage');
      
          // Unhide image elements
          //
          largeImage.style.display = 'block';
      
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          largeImage.src = imageURI;
        }

        // A button will call this function
        //
        function capturePhoto() {
          // Take picture using device camera and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
        }

        // A button will call this function
        //
        function capturePhotoEdit() {
          // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true }); 
        }
    
        // A button will call this function
        //
        function getPhoto(source) {
          // Retrieve image file location from specified source
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }

        // Called if something bad happens.
        // 
        function onFail(message) {
          alert('Failed because: ' + message);
        }

        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Capture Photo</button> <br>
        <button onclick="capturePhotoEdit();">Capture Editable Photo</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">From Photo Library</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">From Photo Album</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>

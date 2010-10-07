camera.getPicture
=================

Takes a photo and returns the image as a base64 encoded `String`.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

Description
-----------

`camera.getPicture` opens the device's default camera application so that the user can take a photo. Once the photo is taken, the camera application closes and your application is restored.

The return value will be sent to the `cameraSuccess` function, in one of the following formats, depending on the `cameraOptions` you specify:

- A `String` containing the base64 encoded photo image (default). 
- A `String` representing the image file location on local storage.  

You can do whatever you want with the encoded image or URI, for example:

- Render the image in an `<img>` tag _(see example below)_
- Save the data locally (`LocalStorage`, [Lawnchair](http://brianleroux.github.com/lawnchair/), etc)
- Post the data to a remote server

Supported Platforms
-------------------

- Android
- iPhone
- Blackberry Widgets (OS 5.0 and higher)

Quick Example
-------------

Retrieve base64-encoded image:

    navigator.camera.getPicture(onSuccess, onFail, 
	    { destinationType: Camera.DestinationType.DATA_URL, quality: 50 }); 

    function onSuccess(imageData) {
	    var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

	function onFail(message) {
		alert('Failed because: ' + message);
	}

Retrieve image file location: 

    navigator.camera.getPicture(onSuccess, onFail, 
	    { destinationType: Camera.DestinationType.FILE_URI, quality: 50 }); 

    function onSuccess(imageURI) {
	    var image = document.getElementById('myImage');
        image.src = imageURI;
    }

	function onFail(message) {
		alert('Failed because: ' + message);
	}


Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
    	<title>Capture Photo</title>

    	<script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        var pictureSource;   // picture source for iPhone
	    // Wait for PhoneGap to connect with the device
	    //
    	function onLoad() {
    		document.addEventListener("deviceready",onDeviceReady,false);
    	}
	
    	// PhoneGap is ready to be used!
    	//
    	function onDeviceReady() {
    	    // used for iPhone only
    	    pictureSource=navigator.camera.PictureSourceType;
    	}

	    // A button will call this function
	    //
    	function capturePhoto() {
          // Take picture and retrieve image as base64-encoded string
          navigator.camera.getPicture(onSuccessBase64, fail, 
	        { destinationType: Camera.DestinationType.DATA_URL, quality: 50 });

          // Take picture and retrieve image file URI 
          navigator.camera.getPicture(onSuccessURI, fail, 
            { destinationType: Camera.DestinationType.FILE_URI, quality: 50 });
    	}

        // Called when a photo is successfully taken
        //
        function onSuccessBase64(imageData) {
    	  // Uncomment to view the base64 encoded image data
          // console.log(data);
	  
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

        // Called when a photo is successfully taken
        //
        function onSuccessURI(imageURI) {
    	  // Uncomment to view the image file URI 
          // console.log(data);
	  
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
	
	    // Called if something bad happens.
	    // 
    	function onFail(mesage) {
    		alert('Failed because: ' + message);
    	}
        // iPhone ONLY
        function getPicture(source){
            navigator.camera.getPicture(onSuccess, onFail, {quality: 20, sourceType: source});
        }
        function getPictureEdit(source){
            navigator.camera.getPicture(onSuccess, onFail, {quality: 20, sourceType: source, allowEdit: true});
        }
        function capturePhotoEdit() {
            navigator.camera.getPicture(onSuccess, onFail, { quality: 20, allowEdit: true }); 
        }
        </script>
      </head>
      <body onload="onLoad()">
    	<a href="#" onclick="capturePhoto();return false;">Take Photo</a>
        <p>iPhone Only <br>
        <button onclick="getPicture(pictureSource.PHOTOLIBRARY)">
        From Photo Library</button> <br>
        <button onclick="getPictureEdit(pictureSource.PHOTOLIBRARY)">
        From Photo Library - editable</button> <br>
        <button onclick="capturePhotoEdit()">
        Capture Editable</button> <br>
        <button onclick="getPicture(pictureSource.SAVEDPHOTOALBUM)">
        From Saved Photos</button>
        </p>
    	<img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
    	<img style="display:none;" id="largeImage" src="" />
      </body>
    </html>

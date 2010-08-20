camera.getPicture
=================

Takes a photo and returns the image as a base64 encoded `String`.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

Description
-----------

`camera.getPicture` opens the device's default camera application so that the user to take a photo. Once the photo is taken, the camera application closes and your application is restored.

The image is base64 encoded and returned as a `String` in the `cameraSuccess` function. Since the data is a `String`, you can do whatever you want with it, for example:

- Render the image in an `<img>` tag _(see example below)_
- Save the data locally (`LocalStorage`, [Lawnchair](http://brianleroux.github.com/lawnchair/), etc)
- Post the data to a remote server

Supported Platforms
-------------------

- Android
- iPhone

Quick Example
-------------

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50 }); 

    function onSuccess(imageData) {
	    var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

	function onFail(mesage) {
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
	
	    // Wait for PhoneGap to connect with the device
	    //
    	function onLoad() {
    		document.addEventListener("deviceready",onDeviceReady,false);
    	}
	
    	// PhoneGap is ready to be used!
    	//
    	function onDeviceReady() {
    	}
	
	    // A button will call this function
	    //
    	function capturePhoto() {
          navigator.camera.getPicture(onSuccess, onFail, { quality: 50 }); 
    	}

        // Called when a photo is successfully taken
        //
        function onSuccess(imageData) {
    	  // Uncomment to view the base64 encoded image data
          // debug.log(data);
	  
    	  // Get image handles
    	  //
    	  var smallImage = document.getElementById('smallImage');
    	  var largeImage = document.getElementById('largeImage');
	  
    	  // Unhide image elements
    	  //
    	  smallImage.style.display = 'block';
    	  largeImage.style.display = 'block';
	  
    	  // Show the captured photo
    	  // The inline CSS rules are used to resize the image
    	  //
          smallImage.src = "data:image/jpeg;base64," + imageData;
    	  largeImage.src = "data:image/jpeg;base64," + imageData;
        }
	
	    // Called if something bad happens.
	    // 
    	function onFail(mesage) {
    		alert('Failed because: ' + message);
    	}

        </script>
      </head>
      <body onload="onLoad()">
    	<a href="#" onclick="capturePhoto();return false;">Take Photo</a>
    	
    	<img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
    	<img style="display:none;" id="largeImage" src="" />
      </body>
    </html>

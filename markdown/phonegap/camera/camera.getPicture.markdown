camera.getPicture
-----------------

Takes a photo and returns the image as a `String` of base64 encoded data.

### Syntax ###

    navigator.camera.getPicture(successCallback, errorCallback, [options]);

* __successCallback:__ Invoked when the photo is taken. _(Function)_
    * __Syntax:__
        * `function(imageData) {}`
    * __Parameter:__
        * __imageData:__ Stores the base64 encoded data. _(String)_
* __errorCallback:__ Invoked when an error occurs. _(Function)_
    * __Syntax:__
        * `function(errorMessage) {}`
    * __Parameter:__
        * __errorMessage:__ Different error message on each platform. _(String)_
* __options:__ Customization. _(Object)_ (Optional)
    * __Syntax:__
        * `var cameraOptions = { quality: 75 };`
    * __Values:__
        * __quality:__ Quality of saved image. Range is 0 - 100. _(Number)_

### Details ###

`camera.getPicture` opens the device's default camera application and allows the user to take a photo. Once the photo is captured, the camera application closes and your application is restored. The image is base64 encoded and returned as a JavaScript `String` in the `successCallback` function. Since the data is a `String`, you can do whatever you want with it, for example:

- Render the image in an `<img>` tag _(See the example)_
- Save the data locally (`LocalStorage`, `Lawnchair`, etc)
- Post the data to a remote server

### Supported Platforms ###

- Android
- BlackBerry
- iPhone
- webOS

### Warning ###

The `options` parameter is ignored on:

- BlackBerry
- WebOS

### Brief Example ###

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50 }); 

    function onSuccess(imageData) {
	    var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

	function onFail(mesage) {
		alert('Failed because: ' + message);
	}

### Full Example ###

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

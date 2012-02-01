capture.captureAudio
====================

> Start the audio recorder application and return information about captured audio clip file(s).

    navigator.device.capture.captureAudio( 
	    CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
	);

Description
-----------

This method starts an asynchronous operation to capture audio recordings using the device's default audio recording application.  The operation allows the device user to capture multiple recordings in a single session.

The capture operation ends when either the user exits the audio recording application, or the maximum number of recordings, specified by the __limit__ parameter in CaptureAudioOptions, has been reached.  If no value is provided for the __limit__ parameter, a default value of one (1) is used, and the capture operation will terminate after the user records a single audio clip.

When the capture operation is finished, it will invoke the CaptureCB callback with an array of MediaFile objects describing each captured audio clip file.  If the operation is terminated by the user before an audio clip is captured, the CaptureErrorCB callback will be invoked with a CaptureError object with the CaptureError.`CAPTURE_NO_MEDIA_FILES` error code.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Quick Example
-------------

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Audio</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }	    
        }

        // Called if something bad happens.
        // 
        function captureError(error) {
	        var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }

        // A button will call this function
        //
        function captureAudio() {
            // Launch device audio recording application, 
            // allowing user to capture up to 2 audio clips
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
        }

        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;

            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });   
        }

        </script>
        </head>
        <body>
            <button onclick="captureAudio();">Capture Audio</button> <br>
        </body>
    </html>

BlackBerry WebWorks Quirks
--------------------------

- PhoneGap for BlackBerry WebWorks attempts to launch the __Voice Notes Recorder__ application, provided by RIM, to capture the audio recordings.  The developer will receive a CaptureError.`CAPTURE_NOT_SUPPORTED` error code if the application is not installed on the device.

iOS Quirks
----------

- iOS does not have a default audio recording application so a simple user interface is provided.

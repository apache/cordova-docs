media.seekTo
========================

Sets the current position within an audio file.

    media.seekTo(milliseconds);

Parameters
----------

- __milliseconds__: The position to set the playback position within the audio in milliseconds. .


Description
-----------

Function `media.seekTo` is an asynchronous function that updates the current position of the underlying audio file of a Media object. Also updates the ___position__ parameter within the Media object. 

Supported Platforms
-------------------

- Android
- iOS
    
Quick Example
-------------

        // Audio player
        //
        var my_media = new Media(src, onSuccess, onError);
		my_media.play();
        // SeekTo to 10 seconds after 5 seconds
        setTimeout(function() {
            my_media.seekTo(10000);
        }, 5000);


Full Example
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                      "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>Media Example</title>
        
            <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
            <script type="text/javascript" charset="utf-8">
        
            // Wait for PhoneGap to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
        
            // PhoneGap is ready
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }
        
            // Audio player
            //
            var my_media = null;
            var mediaTimer = null;
        
            // Play audio
            //
            function playAudio(src) {
                // Create Media object from src
                my_media = new Media(src, onSuccess, onError);
        
                // Play audio
                my_media.play();
                // Update media position every second
        		mediaTimer = setInterval(function() {
            		// get media position
           			my_media.getCurrentPosition(
                		// success callback
                		function(position) {
                    		if (position > -1) {
                        		setAudioPosition(position + " sec");
                    		}
                		},
                		// error callback
                		function(e) {
                    		console.log("Error getting pos=" + e);
                		}
            		);
        		}, 1000);
        		// SeekTo to 10 seconds after 5 seconds
        		setTimeout(function() {
            		my_media.seekTo(10000);
           		}, 5000);
     		}
        
            // Stop audio
            // 
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
                }
                clearInterval(mediaTimer);
                mediaTimer = null;
            }
        
            // onSuccess Callback
            //
            function onSuccess() {
                console.log("playAudio():Audio Success");
            }
        
            // onError Callback 
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' + 
                      'message: ' + error.message + '\n');
            }
        
            // Set audio position
            // 
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }
        
            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">Play Audio</a>
            <a href="#" class="btn large" onclick="stopAudio();">Stop Playing Audio</a>
            <p id="audio_position"></p>
          </body>
        </html>
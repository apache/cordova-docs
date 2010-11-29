media.play
==========

Starts or resumes playing an audio file.

    media.play();


Description
-----------

Function `media.play` is a synchronous function that starts or resumes playing an audio file.

Supported Platforms
-------------------

- Android
- iOS
    
Quick Example
-------------

    // Play audio
    //
    function playAudio(url) {
        // Play the audio file at url
        var media = new Media(url,
            // success callback
            function() {
                console.log("playAudio():Audio Success");
            },
            // error callback
            function(err) {
                console.log("playAudio():Audio Error: "+err);
        });

        // Play audio
        media.play();
    }


Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Device Properties Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
            playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
        }
    
        // Audio player
        //
        var media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) {
            // Create Media object from src
            var media = new Media(src, onSuccess, onError);

            // Play audio
            media.play();

            // Update media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get media position
                    media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position/1000) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        // 
        function pauseAudio() {
            if (media) {
                media.pause();
            }
        }

        // Stop audio
        // 
        function stopAudio() {
            if (media) {
                media.stop();
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
      <body onload="onLoad()">
        <a href="#" class="btn large" onclick="playAudio();">Play Audio</a>
        <a href="#" class="btn large" onclick="pauseAudio();">Pause Playing Audio</a>
        <a href="#" class="btn large" onclick="stopAudio();">Stop Playing Audio</a>
        <p id="audio_position"></p>
      </body>
    </html>

---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---

media.seekTo
========================

Sets the current position within an audio file.

    media.seekTo(milliseconds);

Parameters
----------

- __milliseconds__: The position to set the playback position within the audio in milliseconds. .


Description
-----------

Function `media.seekTo` is an asynchronous function that updates the current position of the underlying audio file of a <a href="media.html">Media</a> object. Also updates the ___position__ parameter within the <a href="media.html">Media</a> object. 

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iOS
- Windows Phone 7 ( Mango )
    
Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

        // Audio player
        //
        var my_media = new <a href="media.html">Media</a>(src, onSuccess, onError);
		my_<a href="media.play.html">media.play</a>();
        // SeekTo to 10 seconds after 5 seconds
        setTimeout(function() {
            my_media.seekTo(10000);
        }, 5000);


Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                      "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title><a href="media.html">Media</a> <a href="../storage/storage.opendatabase.html">Example</a></title>
        
            <script type="text/javascript" charset="utf-8" src="cordova-1.8.0.js"></script>
            <script type="text/javascript" charset="utf-8">
        
            // Wait for Cordova to load
            //
            document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);
        
            // Cordova is ready
            //
            function on<a href="../device/device.html">Device</a>Ready() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }
        
            // Audio player
            //
            var my_media = null;
            var mediaTimer = null;
        
            // Play audio
            //
            function playAudio(src) {
                // Create <a href="media.html">Media</a> object from src
                my_media = new <a href="media.html">Media</a>(src, onSuccess, onError);
        
                // Play audio
                my_<a href="media.play.html">media.play</a>();
                // Update media position every second
        		mediaTimer = setInterval(function() {
            		// get media position
           			my_media.getCurrent<a href="../geolocation/Position/position.html">Position</a>(
                		// success callback
                		function(position) {
                    		if (position > -1) {
                        		setAudio<a href="../geolocation/Position/position.html">Position</a>(position + " sec");
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
                    my_<a href="media.stop.html">media.stop</a>();
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
            function setAudio<a href="../geolocation/Position/position.html">Position</a>(position) {
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

BlackBerry WebWorks Quirks
----------

- This API is not supported on BlackBerry OS 5 devices.

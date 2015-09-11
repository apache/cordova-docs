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

media.play
==========

Starts or <a href="../events/events.resume.html">resume</a>s playing an audio file.

    media.play();

Description
-----------

The `media.play` method executes synchronously, and starts or <a href="../events/events.resume.html">resume</a>s
playing an audio file.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 and 8
- Tizen
- Windows 8

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    // Play audio
    //
    function playAudio(url) {
        // Play the audio file at url
        var my_media = new <a href="media.html">Media</a>(url,
            // success callback
            function () {
                console.log("playAudio():Audio Success");
            },
            // error callback
            function (err) {
                console.log("playAudio():Audio Error: " + err);
            }
        );
        // Play audio
        my_media.play();
    }

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title><a href="media.html">Media</a> <a href="../storage/storage.opendatabase.html">Example</a></title>

            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Wait for device API libraries to load
            //
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

            // device APIs are available
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
                if (my_media == null) {
                    // Create <a href="media.html">Media</a> object from src
                    my_media = new <a href="media.html">Media</a>(src, onSuccess, onError);
                } // else play current audio
                // Play audio
                my_media.play();

                // Update my_media position every second
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // get my_media position
                        my_media.getCurrent<a href="../geolocation/Position/position.html">Position</a>(
                            // success callback
                            function(position) {
                                if (position > -1) {
                                    setAudio<a href="../geolocation/Position/position.html">Position</a>((position) + " sec");
                                }
                            },
                            // error callback
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudio<a href="../geolocation/Position/position.html">Position</a>("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }

            // Pause audio
            //
            function <a href="../events/events.pause.html">pause</a>Audio() {
                if (my_media) {
                    my_media.<a href="../events/events.pause.html">pause</a>();
                }
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
            <a href="#" class="btn large" onclick="<a href="../events/events.pause.html">pause</a>Audio();">Pause Playing Audio</a>
            <a href="#" class="btn large" onclick="stopAudio();">Stop Playing Audio</a>
            <p id="audio_position"></p>
          </body>
        </html>

BlackBerry WebWorks Quirks
----------

- BlackBerry devices support a limited number of simultaneous audio
  channels. CDMA devices only support a single audio channel. Other
  devices support up to two simultaneous channels. An attempt to play
  more audio files than the supported amount results in previous
  playback being stopped.

iOS Quirks
----------

- __numberOfLoops__: Pass this option to the `play` method to specify
  the number of times you want the media file to play, e.g.:

        var my<a href="media.html">Media</a> = new <a href="media.html">Media</a>("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        my<a href="media.html">Media</a>.play({ numberOfLoops: 2 })

- __playAudioWhenScreenIsLocked__: Pass in this option to the `play`
  method to specify whether you want to allow playback when the screen
  is locked.  If set to `true` (the default value), the state of the
  hardware mute button is ignored, e.g.:

        var my<a href="media.html">Media</a> = new <a href="media.html">Media</a>("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        my<a href="media.html">Media</a>.play({ playAudioWhenScreenIsLocked : false })

- __order of file search__: When only a file name or simple path is
  provided, iOS searches in the `www` directory for the file, then in
  the application's `documents/tmp` directory:

        var my<a href="media.html">Media</a> = new <a href="media.html">Media</a>("audio/beer.mp3")
        my<a href="media.html">Media</a>.play()  // first looks for file in www/audio/beer.mp3 then in <application>/documents/tmp/audio/beer.mp3

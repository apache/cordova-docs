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

media.getDuration
=================

Returns the duration of an audio file.

    media.getDuration();

Description
-----------

The `media.getDuration` method executes synchronously, returning the
duration of the audio file in seconds, if known.  If the duration is
unknown, it returns a value of -1.

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

    // Audio player
    //
    var my_media = new <a href="media.html">Media</a>(src, onSuccess, onError);

    // Get duration
    var counter = 0;
    var timerDur = setInterval(function() {
        counter = counter + 100;
        if (counter > 2000) {
            clearInterval(timerDur);
        }
        var dur = my_media.getDuration();
        if (dur > 0) {
            clearInterval(timerDur);
            document.getElementById('audio_duration').innerHTML = (dur) + " sec";
        }
    }, 100);

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title><a href="media.html">Media</a> <a href="../storage/storage.opendatabase.html">Example</a></title>

            <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
                // Create <a href="media.html">Media</a> object from src
                my_media = new <a href="media.html">Media</a>(src, onSuccess, onError);

                // Play audio
                my_<a href="media.play.html">media.play</a>();

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

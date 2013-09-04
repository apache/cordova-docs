---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# media.seekTo

在音訊檔中設置的當前的位置。

    media.seekTo(milliseconds);
    

## 參數

*   **毫秒為單位）**： 要以毫秒為單位設置中，音訊的播放位置的位置。

## 說明

`media.seekTo`非同步，執行更新引用的音訊檔中的當前播放位置 `Media` 物件。 此外可以更新 `Media` 物件的 `position` 參數。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 6.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Tizen
*   Windows 8

## 快速的示例

    // Audio player
    //
    var my_media = new Media(src, onSuccess, onError);
        my_media.play();
    // SeekTo to 10 seconds after 5 seconds
    setTimeout(function() {
        my_media.seekTo(10000);
    }, 5000);
    

## 完整的示例

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>Media Example</title>
    
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
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
    

## 黑莓 WebWorks 怪癖

*   黑莓 OS 5 設備上不支援。
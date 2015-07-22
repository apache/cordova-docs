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

# media.getCurrentPosition

オーディオ ファイル内の現在位置を返します。

    media.getCurrentPosition(mediaSuccess, [mediaError]);
    

## パラメーター

*   **mediaSuccess**: 秒の現在の位置を渡されるコールバック。

*   **mediaError**: (省略可能) コールバックでエラーが発生した場合に実行します。

## 説明

基になっているオーディオ ファイルの現在位置を返します、非同期関数、 `Media` オブジェクト。また更新して、 `Media` オブジェクトの `position` パラメーター。

## サポートされているプラットフォーム

*   アンドロイド

*   ブラックベリー WebWorks (OS 5.0 およびより高い)

*   iOS

*   Windows Phone 7 と 8

*   Tizen

*   Windows 8

## 簡単な例

    // Audio player
    //
    var my_media = new Media(src, onSuccess, onError);
    
    // Update media position every second
    var mediaTimer = setInterval(function () {
        // get media position
        my_media.getCurrentPosition(
            // success callback
            function (position) {
                if (position > -1) {
                    console.log((position) + " sec");
                }
            },
            // error callback
            function (e) {
                console.log("Error getting pos=" + e);
            }
        );
    }, 1000);
    

## 完全な例

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
    
                // Update my_media position every second
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // get my_media position
                        my_media.getCurrentPosition(
                            // success callback
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position) + " sec");
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
                if (my_media) {
                    my_media.pause();
                }
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
            <a href="#" class="btn large" onclick="pauseAudio();">Pause Playing Audio</a>
            <a href="#" class="btn large" onclick="stopAudio();">Stop Playing Audio</a>
            <p id="audio_position"></p>
          </body>
        </html>
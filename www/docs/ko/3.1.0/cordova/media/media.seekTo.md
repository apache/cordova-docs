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

# media.seekTo

오디오 <a href="../file/fileobj/fileobj.html">파일</a> 내의 현재 <a href="../geolocation/Position/position.html">위치</a>를 설정합니다.

    media.seekTo(milliseconds);
    

## 매개 <a href="../../plugin_ref/spec.html">변수</a>

*   **밀리초**: 밀리초에서는 오디오에서 재생 <a href="../geolocation/Position/position.html">위치</a>를 설정 하는 <a href="../geolocation/Position/position.html">위치</a>.

## 설명

`media.seekTo`에서 참조 하는 오디오 <a href="../file/fileobj/fileobj.html">파일</a> 내에서 현재 재생 <a href="../geolocation/Position/position.html">위치</a>를 업데이트를 비동기적으로 실행 한 `Media` 개체. 또한 업데이트는 `Media` 개체의 `position` 매개 <a href="../../plugin_ref/spec.html">변수</a>.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (OS 6.0 및 높은)
*   iOS
*   Windows Phone 7과 8
*   Tizen
*   윈도우 8

## 빠른 예제

    // Audio player
    //
    var my_media = new Media(src, onSuccess, onError);
        my_<a href="media.play.html">media.play</a>();
    // SeekTo to 10 seconds after 5 seconds
    setTimeout(function() {
        my_media.seekTo(10000);
    }, 5000);
    

## 전체 예제

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>Media <a href="../storage/storage.opendatabase.html">Example</a></title>
    
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
                my_<a href="media.play.html">media.play</a>();
    
                // Update media position every second
                mediaTimer = setInterval(function() {
                    // get media position
                    my_<a href="media.getCurrentPosition.html">media.getCurrentPosition</a>(
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
    

## 블랙베리 WebWorks 단점

*   블랙베리 OS 5 <a href="../device/device.html">장치</a>에서 지원 되지 않습니다.
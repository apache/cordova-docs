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

# media.play

開始またはオーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>の再生を<a href="../events/events.resume.html">再開</a>します。

    media.play();
    

## 説明

`media.play`メソッドを同期的に実行し、開始またはオーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>の再生を<a href="../events/events.resume.html">再開</a>します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Tizen
*   Windows 8

## 簡単な例

    // Play audio
    //
    function playAudio(url) {
        // Play the audio file at url
        var my_media = new Media(url,
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
    

## 完全な例

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
                if (my_media == null) {
                    // Create Media object from src
                    my_media = new Media(src, onSuccess, onError);
                } // else play current audio
                // Play audio
                my_media.play();
    
                // Update my_media position every second
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // get my_media position
                        my_<a href="media.getCurrentPosition.html">media.getCurrentPosition</a>(
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
                    my_<a href="media.pause.html">media.pause</a>();
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
    

## ブラックベリー WebWorks 癖

*   BlackBerry <a href="../device/device.html">デバイス</a>は、同時のオーディオ チャネルの限られた数をサポートします。 CDMA <a href="../device/device.html">デバイス</a>のみ 1 つのオーディオ チャンネルをサポートします。 その他の<a href="../device/device.html">デバイス</a>を 2 つまでの同時チャンネルをサポートします。 サポートされている量よりもより多くのオーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>を再生しよう結果以前の再生を停止しています。

## iOS の癖

*   **numberOfLoops**: このオプションを指定して、 `play` <a href="media.html">メディア</a> <a href="../file/fileobj/fileobj.html">ファイル</a>を再生する、例えば回数を指定する方法。
    
        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        myMedia.play({ numberOfLoops: 2 })
        

*   **playAudioWhenScreenIsLocked**: このオプションを渡す、 `play` 、画面がロックされているときに再生を許可するかどうかを指定するメソッド。 場合に設定されている `true` (既定値)、例えば、ハードウェア ミュート ボタンの状態は無視されます。
    
        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        myMedia.play({ playAudioWhenScreenIsLocked : false })
        

*   **<a href="../file/fileobj/fileobj.html">ファイル</a>検索の順序**: iOS の検索で<a href="../file/fileobj/fileobj.html">ファイル</a>名または単純なパスのみが提供される場合、 `www` ディレクトリ、<a href="../file/fileobj/fileobj.html">ファイル</a>をアプリケーションの `documents/tmp` ディレクトリ。
    
        var myMedia = new Media("audio/beer.mp3")
        myMedia.play()  // first looks for file in www/audio/beer.mp3 then in <application>/documents/tmp/audio/beer.mp3
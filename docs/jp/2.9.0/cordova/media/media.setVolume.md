---
license: Licensed to the Apache Software Foundation (ASF) under one
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

media.setVolume
===========

オーディオファイルの音量を設定します。

    media.setVolume(volume);

パラメーター
---------

- __volume__: 再生音量。 0.0 から 1.0 の間で設定します。

概要
-----------

`media.setVolume` メソッドはオーディオ再生中に音量を設定する非同期メソッドです。

サポートされているプラットフォーム
-------------------

- Android
- iOS

使用例
-------------

    // オーディオ再生
    //
    function playAudio(url) {
        // Play the audio file at url
        var my_media = new Media(url,
            // 成功時コールバック関数
            function() {
                console.log("playAudio():Audio Success");
            },
            // 失敗時コールバック関数
            function(err) {
                console.log("playAudio():Audio Error: "+err);
        });

        // オーディオ再生
        my_media.play();

        // 2秒後に音を消す
        setTimeout(function() {
            my_media.setVolume('0.0');
        }, 2000);

        // 5秒後に音量を最大にする
        setTimeout(function() {
            my_media.setVolume('1.0');
        }, 5000);
    }


Full Example
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>Media Example</title>

            <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }

            // オーディオプレーヤー
            //
            var my_media = null;
            var mediaTimer = null;

            // オーディオ再生
            //
            function playAudio(src) {
                // src から Media オブジェクトを生成する
                my_media = new Media(src, onSuccess, onError);

                // オーディオ再生
                my_media.play();

                // 1秒ごとに my_media の再生位置を更新する
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media の再生位置を取得する
                        my_media.getCurrentPosition(
                            // 成功時コールバック関数
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position) + " sec");
                                }
                            },
                            // 失敗時コールバック関数
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudioPosition("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }

            // オーディオの音量を設定する
            //
            function setVolume(volume) {
                if (my_media) {
                    my_media.setVolume(volume);
                }
            }

            // オーディオ再生を停止する
            //
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
                }
                clearInterval(mediaTimer);
                mediaTimer = null;
            }

            // onSuccess コールバック関数
            //
            function onSuccess() {
                console.log("playAudio():Audio Success");
            }

            // onError コールバック関数
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' + 
                      'message: ' + error.message + '\n');
            }

            // オーディオの再生位置を設定する
            //
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }

            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">Play Audio</a>
            <a href="#" class="btn large" onclick="setVolume('0.0');">Mute Audio</a>
            <a href="#" class="btn large" onclick="setVolume('1.0');">Unmute Audio</a>
            <a href="#" class="btn large" onclick="stopAudio();">Stop Playing Audio</a>
            <p id="audio_position"></p>
          </body>
        </html>
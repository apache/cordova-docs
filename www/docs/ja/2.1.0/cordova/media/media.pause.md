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

media.<a href="../events/events.pause.html">pause</a>
===========

オーディオファイルを一時停止します。

    media.<a href="../events/events.pause.html">pause</a>();


概要
-----------

`media.<a href="../events/events.pause.html">pause</a>` 関数はオーディオファイルを一時停止させる同期関数です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Tizen

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    // オーディオ再生
    //
    function playAudio(url) {
        // URL のオーディオファイルを再生
        var my_media = new <a href="media.html">Media</a>(url,
            // 呼び出し成功
            function() {
                console.log("playAudio():Audio Success");
            },
            // 呼び出し失敗
            function(err) {
                console.log("playAudio():Audio Error: "+err);
        });

        // オーディオ再生
        my_<a href="media.play.html">media.play</a>();

        // 10秒後に一時停止
        setTimeout(function() {
            media.<a href="../events/events.pause.html">pause</a>();
        }, 10000);
    }

詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの<a href="../storage/storage.opendatabase.html">使用例</a></title>

            <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

            // Cordova 準備完了
            //
            function on<a href="../device/device.html">Device</a>Ready() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }

            // オーディオプレイヤー
            //
            var my_media = null;
            var mediaTimer = null;

            // オーディオ再生
            //
            function playAudio(src) {
                // src から <a href="media.html">Media</a> オブジェクトを作成
                my_media = new <a href="media.html">Media</a>(src, onSuccess, onError);

                // オーディオ再生
                my_<a href="media.play.html">media.play</a>();

                // my_media の再生位置を一秒ごとに更新
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media の再生位置を取得
                        my_media.getCurrent<a href="../geolocation/Position/position.html">Position</a>(
                            // 呼び出し成功
                            function(position) {
                                if (position > -1) {
                                    setAudio<a href="../geolocation/Position/position.html">Position</a>((position) + " sec");
                                }
                            },
                            // 呼び出し失敗
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudio<a href="../geolocation/Position/position.html">Position</a>("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }

            // オーディオ一時停止
            //
            function <a href="../events/events.pause.html">pause</a>Audio() {
                if (my_media) {
                    my_media.<a href="../events/events.pause.html">pause</a>();
                }
            }

            // オーディオ停止
            //
            function stopAudio() {
                if (my_media) {
                    my_<a href="media.stop.html">media.stop</a>();
                }
                clearInterval(mediaTimer);
                mediaTimer = null;
            }

            // 成功時のコールバック関数
            //
            function onSuccess() {
                console.log("playAudio():Audio Success");
            }

            // エラー時のコールバック関数 
            //
            function onError(error) {
                alert('コード: '        + error.code    + '\n' +
                      'メッセージ: '    + error.message + '\n');
            }

            // 再生位置をセット
            //
            function setAudio<a href="../geolocation/Position/position.html">Position</a>(position) {
                document.getElementById('audio_position').innerHTML = position;
            }

            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">再生</a>
            <a href="#" class="btn large" onclick="<a href="../events/events.pause.html">pause</a>Audio();">一時停止</a>
            <a href="#" class="btn large" onclick="stopAudio();">停止</a>
            <p id="audio_position"></p>
          </body>
        </html>

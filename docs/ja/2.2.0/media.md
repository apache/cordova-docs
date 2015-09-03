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


Media
=====

> `Media` オブジェクトは、デバイス上でのオーディオファイルの再生や録音などといった機能をサポートします。

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);


注意: 現在の実装はメディアキャプチャーに関する W3C の仕様を満たしていません。利便性のためだけに提供されています。将来的には最新の W3C の仕様に合わせるとともに、現在の API を廃止することも検討されています。

パラメーター
----------

- __src__: オーディオコンテンツを示す URI を表します _(DOMString)_
- __mediaSuccess__: (オプション) Media オブジェクトが再生、録音、停止などのアクションを完了したときに呼ばれるコールバック関数を表します _(Function)_
- __mediaError__: (オプション) エラー発生時に呼ばれるコールバック関数を表します _(Function)_
- __mediaStatus__: (オプション) ステータスが変わったときに呼ばれるコールバック関数を表します _(Function)_

定数
---------

以下の定数は __mediaStatus__ コールバック関数への引数としてのみ使用されます。

- `Media.MEDIA_NONE`     = 0;
- `Media.MEDIA_STARTING` = 1;
- `Media.MEDIA_RUNNING`  = 2;
- `Media.MEDIA_PAUSED`   = 3;
- `Media.MEDIA_STOPPED`  = 4;

メソッド
-------

- media.getCurrentPosition: オーディオファイル内の現在の再生位置を返します
- media.getDuration: オーディオファイルの再生時間を返します
- media.play: オーディオファイルを再生または再開します
- media.pause: オーディオファイルを一時停止します
- media.release: OS のオーディオリソースを開放します
- media.seekTo: オーディオファイル中の再生位置を動かします
- media.startRecord: オーディオファイルの録音を開始します
- media.stopRecord: オーディオファイルの録音を停止します
- media.stop: オーディオファイルを停止します

追加の読み取り専用パラメーター
---------------------

- __position__: 再生位置を秒単位で表します。
    - 再生中は自動的に値が更新されないので、 `getCurrentPosition` メソッドを呼び、値を更新します
- __duration__: メディアの再生時間を秒単位で表します

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7.5
- Tizen

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Media" value="org.apache.cordova.AudioHandler" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>RECORDING</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Capture" value="org.apache.cordova.media.MediaCapture" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Media</key>
        <string>CDVSound</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_MEDIALIB" />
        <Capability Name="ID_CAP_MICROPHONE" />
        <Capability Name="ID_HW_FRONTCAMERA" />
        <Capability Name="ID_CAP_ISV_CAMERA" />
        <Capability Name="ID_CAP_CAMERA" />
    </Capabilities>

参照: [Application Manifest for Windows Phone](http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx)

### Tizen

    パーミッションの設定は必要ありません。


### Windows Phone に関する注意点
    一度に一つのメディアファイルのみ再生できます。
    アプリケーションが他のメディアとどのように関わるかには、厳しい制限があります。詳しくは http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx を参照してください。



media.getCurrentPosition
========================

オーディオファイル内の現在の再生位置を返します。

    media.getCurrentPosition(mediaSuccess, [mediaError]);

パラメーター
----------

- __mediaSuccess__: 現在再生位置とともに呼ばれるコールバック関数を表します
- __mediaError__: (オプション) エラー発生時に呼ばれるコールバック関数を表します

概要
-----------

`media.getCurrentPosition` 関数は Media オブジェクトのオーディオファイルの現在再生位置を返す非同期関数です。 Media オブジェクト内の __position__ パラメーターの値も更新します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Tizen

使用例
-------------

    // オーディオプレイヤー
    //
    var my_media = new Media(src, onSuccess, onError);

    // メディアの再生位置を一秒ごとに更新
    var mediaTimer = setInterval(function() {
            // 再生位置を取得
            my_media.getCurrentPosition(
                // 呼び出し成功
                function(position) {
                if (position > -1) {
                console.log((position) + " sec");
                }
                },
                // 呼び出し失敗
                function(e) {
                    console.log("Error getting pos=" + e);
                }
            );
        }, 1000);


詳細な使用例
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                      "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの使用例</title>

            <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }

            // オーディオプレイヤー
            //
            var my_media = null;
            var mediaTimer = null;

            // オーディオ再生
            //
            function playAudio(src) {
                // src から Media オブジェクトを作成
                my_media = new Media(src, onSuccess, onError);

                // オーディオ再生
                my_media.play();

                // my_media の再生位置を一秒ごとに更新
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media の再生位置を取得
                        my_media.getCurrentPosition(
                            // 呼び出し成功
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position) + " sec");
                                }
                            },
                            // 呼び出し失敗
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudioPosition("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }

            // オーディオ一時停止
            //
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
            }

            // オーディオ停止
            //
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
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
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }

            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">再生</a>
            <a href="#" class="btn large" onclick="pauseAudio();">一時停止</a>
            <a href="#" class="btn large" onclick="stopAudio();">停止</a>
            <p id="audio_position"></p>
          </body>
        </html>



media.getDuration
=================

オーディオファイルの再生時間を返します。

    media.getDuration();


概要
-----------

`media.getDuration` 関数は秒単位でオーディオファイルの再生時間を返す同期関数です。再生時間が不明な場合は、-1が返されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Tizen

使用例
-------------

        // オーディオプレイヤー
        //
        var my_media = new Media(src, onSuccess, onError);

        // 再生時間を取得
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


詳細な使用例
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの使用例</title>

            <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }

            // オーディオプレイヤー
            //
            var my_media = null;
            var mediaTimer = null;

            // オーディオ再生
            //
            function playAudio(src) {
                // src から Media オブジェクトを作成
                my_media = new Media(src, onSuccess, onError);

                // オーディオ再生
                my_media.play();

                // my_media の再生位置を一秒ごとに更新
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media の再生位置を取得
                        my_media.getCurrentPosition(
                            // 呼び出し成功
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position) + " sec");
                                }
                            },
                            // 呼び出し失敗
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudioPosition("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }

            // オーディオ一時停止
            //
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
            }

            // オーディオ停止
            //
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
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
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }

            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">再生</a>
            <a href="#" class="btn large" onclick="pauseAudio();">一時停止</a>
            <a href="#" class="btn large" onclick="stopAudio();">停止</a>
            <p id="audio_position"></p>
          </body>
        </html>



media.pause
===========

オーディオファイルを一時停止します。

    media.pause();


概要
-----------

`media.pause` 関数はオーディオファイルを一時停止させる同期関数です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Tizen

使用例
-------------

    // オーディオ再生
    //
    function playAudio(url) {
        // URL のオーディオファイルを再生
        var my_media = new Media(url,
            // 呼び出し成功
            function() {
                console.log("playAudio():Audio Success");
            },
            // 呼び出し失敗
            function(err) {
                console.log("playAudio():Audio Error: "+err);
        });

        // オーディオ再生
        my_media.play();

        // 10秒後に一時停止
        setTimeout(function() {
            media.pause();
        }, 10000);
    }

詳細な使用例
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの使用例</title>

            <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }

            // オーディオプレイヤー
            //
            var my_media = null;
            var mediaTimer = null;

            // オーディオ再生
            //
            function playAudio(src) {
                // src から Media オブジェクトを作成
                my_media = new Media(src, onSuccess, onError);

                // オーディオ再生
                my_media.play();

                // my_media の再生位置を一秒ごとに更新
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media の再生位置を取得
                        my_media.getCurrentPosition(
                            // 呼び出し成功
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position) + " sec");
                                }
                            },
                            // 呼び出し失敗
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudioPosition("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }

            // オーディオ一時停止
            //
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
            }

            // オーディオ停止
            //
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
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
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }

            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">再生</a>
            <a href="#" class="btn large" onclick="pauseAudio();">一時停止</a>
            <a href="#" class="btn large" onclick="stopAudio();">停止</a>
            <p id="audio_position"></p>
          </body>
        </html>



media.play
==========

オーディオファイルを再生または再開します。

    media.play();


概要
-----------

`media.play` 関数はオーディオファイルを再生または再開させる同期関数です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Tizen

使用例
-------------

    // オーディオ再生
    //
    function playAudio(url) {
        // URL のオーディオファイルを再生
        var my_media = new Media(url,
            // 呼び出し成功
            function() {
                console.log("playAudio():Audio Success");
            },
            // 呼び出し失敗
            function(err) {
                console.log("playAudio():Audio Error: "+err);
        });

        // オーディオ再生
        my_media.play();
    }


詳細な使用例
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの使用例</title>

            <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }

            // オーディオプレイヤー
            //
            var my_media = null;
            var mediaTimer = null;

            // オーディオ再生
            //
            function playAudio(src) {
                if (my_media == null) {
                    // src から Media オブジェクトを作成
                    my_media = new Media(src, onSuccess, onError);
                } // else 現在のオーディオを再生
                // オーディオ再生
                my_media.play();

                // my_media の再生位置を一秒ごとに更新
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media の再生位置を取得
                        my_media.getCurrentPosition(
                            // 呼び出し成功
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position) + " sec");
                                }
                            },
                            // 呼び出し失敗
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudioPosition("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }

            // オーディオ一時停止
            //
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
            }

            // オーディオ停止
            //
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
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
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }

            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">再生</a>
            <a href="#" class="btn large" onclick="pauseAudio();">一時停止</a>
            <a href="#" class="btn large" onclick="stopAudio();">停止</a>
            <p id="audio_position"></p>
          </body>
        </html>

BlackBerry WebWorks に関する注意点
----------

- BlackBerry は同時に再生できるオーディオの数が決まっています。 CDMA デバイスは1つのオーディオのみサポートしています。他のデバイスは2つまで同時再生をサポートしています。サポートされている数以上のオーディオファイルを再生することは、直前の再生オーディオを停止することに繋がります。

iOS に関する注意点
---------

- __numberOfLoops__

    このオプションを **play** メソッドに渡すことで、そのメディアファイルを何回再生するかを指定します。例:

        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        myMedia.play({ numberOfLoops: 2 })

- __playAudioWhenScreenIsLocked__

    このオプションを **play** メソッドに渡すことで、スクリーンがロックされた状態でもオーディオを再生するかどうかを指定します (設定しなかった場合、デフォルトは true です) 。もし true にセットされた場合は、ハードウェアのミュートボタンの設定は無視されます。例:

        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        myMedia.play({ playAudioWhenScreenIsLocked : false })



media.release
=================

OS のオーディオリソースを開放します。

    media.release();


概要
-----------

`media.release` 関数は OS のオーディオリソースを開放する同期関数です。 Android ではメディア再生のための OpenCore インスタンスが有限のため、この関数は特に Android にとって重要な関数です。 メディアリソースが不要になった場合には、 'release' 関数を使用してください。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Tizen

使用例
-------------

    // オーディオプレイヤー
    //
    var my_media = new Media(src, onSuccess, onError);

    my_media.play();
    my_media.stop();
    my_media.release();

詳細な使用例
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの使用例</title>

            <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }

            // オーディオプレイヤー
            //
            var my_media = null;
            var mediaTimer = null;

            // オーディオ再生
            //
            function playAudio(src) {
                // src から Media オブジェクトを作成
                my_media = new Media(src, onSuccess, onError);

                // オーディオ再生
                my_media.play();

                // my_media の再生位置を一秒ごとに更新
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media の再生位置を取得
                        my_media.getCurrentPosition(
                            // 呼び出し成功
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position) + " sec");
                                }
                            },
                            // 呼び出し失敗
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudioPosition("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }

            // オーディオ一時停止
            //
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
            }

            // オーディオ停止
            //
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
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
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }

            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">再生</a>
            <a href="#" class="btn large" onclick="pauseAudio();">一時停止</a>
            <a href="#" class="btn large" onclick="stopAudio();">停止</a>
            <p id="audio_position"></p>
          </body>
        </html>



media.seekTo
========================

オーディオファイル中の再生位置を動かします。

    media.seekTo(milliseconds);

パラメーター
----------

- __milliseconds__: 再生位置を動かす先の位置をミリ秒単位で表します


概要
-----------

`media.seekTo` 関数は Media オブジェクトのオーディオファイルの現在再生位置を更新する非同期関数です。 Media オブジェクト内の __position__ パラメーターの値も更新します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Tizen

使用例
-------------

        // オーディオプレイヤー
        //
        var my_media = new Media(src, onSuccess, onError);
        my_media.play();
        // 5秒後に、10秒の位置まで移動
        setTimeout(function() {
            my_media.seekTo(10000);
        }, 5000);


Full Example
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                      "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの使用例</title>

            <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }

            // オーディオプレイヤー
            //
            var my_media = null;
            var mediaTimer = null;

            // オーディオ再生
            //
            function playAudio(src) {
                // src から Media オブジェクトを作成
                my_media = new Media(src, onSuccess, onError);

                // オーディオ再生
                my_media.play();
                // メディアの再生位置を一秒ごとに更新
                mediaTimer = setInterval(function() {
                    // 再生位置を取得
                    my_media.getCurrentPosition(
                        // 呼び出し成功
                        function(position) {
                            if (position > -1) {
                                setAudioPosition(position + " sec");
                            }
                        },
                        // 呼び出し失敗
                        function(e) {
                            console.log("Error getting pos=" + e);
                        }
                    );
                }, 1000);
                // 5秒後に、10秒の位置まで移動
                setTimeout(function() {
                    my_media.seekTo(10000);
                }, 5000);
            }

            // オーディオ停止
            //
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
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
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }

            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">再生</a>
            <a href="#" class="btn large" onclick="stopAudio();">停止</a>
            <p id="audio_position"></p>
          </body>
        </html>

BlackBerry WebWorks に関する注意点
----------

- この API は BlackBerry OS 5 デバイスではサポートされていません。



media.startRecord
=================

オーディオファイルの録音を開始します。

    media.startRecord();


概要
-----------

`media.startRecord` 関数はオーディオファイルの録音を開始する同期関数です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

使用例
-------------

    // オーディオの録音
    //
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // 呼び出し成功
            function() {
                console.log("recordAudio():Audio Success");
            },

            // 呼び出し失敗
            function(err) {
                console.log("recordAudio():Audio Error: "+ err.code);
            });

        // オーディオの録音
        mediaRec.startRecord();
    }


詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // オーディオの録音
        //
        function recordAudio() {
            var src = "myrecording.amr";
            var mediaRec = new Media(src, onSuccess, onError);

            // オーディオの録音
            mediaRec.startRecord();

            // 10秒後に録音を停止
            var recTime = 0;
            var recInterval = setInterval(function() {
                recTime = recTime + 1;
                setAudioPosition(recTime + " sec");
                if (recTime >= 10) {
                    clearInterval(recInterval);
                    mediaRec.stopRecord();
                }
            }, 1000);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            recordAudio();
        }

        // 成功時のコールバック関数
        //
        function onSuccess() {
            console.log("recordAudio():Audio Success");
        }

        // エラー時のコールバック関数 
        //
        function onError(error) {
            alert('コード: '        + error.code    + '\n' +
                  'メッセージ: '    + error.message + '\n');
        }

        // 再生位置をセット
        //
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }

        </script>
      </head>
      <body>
        <p id="media">オーディオを録音...</p>
        <p id="audio_position"></p>
      </body>
    </html>

Android に関する注意点
----------

- Android デバイスはオーディオを Adaptive Multi-Rate フォーマットで録音します。ファイル名は .amr 拡張子で指定される必要があります。

BlackBerry WebWorks に関する注意点
----------

- BlackBerry デバイスはオーディオを Adaptive Multi-Rate フォーマットで録音します。ファイル名は .amr 拡張子で指定される必要があります。

iOS に関する注意点
----------

- 録音するためのファイルは既に .wav 形式で存在していなければなりません。 File API 群を使用することでファイルを作成することができます。

Tizen に関する注意点
----------

- この API は Tizen デバイスではサポートされていません。



media.stop
==========

オーディオファイルを停止します。

    media.stop();


概要
-----------

`media.stop` 関数はオーディオファイルを停止させる同期関数です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Tizen

使用例
-------------

    // オーディオ再生
    //
    function playAudio(url) {
        // URL のオーディオファイルを再生
        var my_media = new Media(url,
            // 呼び出し成功
            function() {
                console.log("playAudio():Audio Success");
            },
            // 呼び出し失敗
            function(err) {
                console.log("playAudio():Audio Error: "+err);
        });

        // オーディオ再生
        my_media.play();

        // 10秒後に一時停止
        setTimeout(function() {
            my_media.stop();
        }, 10000);
    }

詳細な使用例
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの使用例</title>

            <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
            <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }

            // オーディオプレイヤー
            //
            var my_media = null;
            var mediaTimer = null;

            // オーディオ再生
            //
            function playAudio(src) {
                // src から Media オブジェクトを作成
                my_media = new Media(src, onSuccess, onError);

                // オーディオ再生
                my_media.play();

                // my_media の再生位置を一秒ごとに更新
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media の再生位置を取得
                        my_media.getCurrentPosition(
                            // 呼び出し成功
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position) + " sec");
                                }
                            },
                            // 呼び出し失敗
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudioPosition("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }

            // オーディオ一時停止
            //
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
            }

            // オーディオ停止
            //
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
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
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }

            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">再生</a>
            <a href="#" class="btn large" onclick="pauseAudio();">一時停止</a>
            <a href="#" class="btn large" onclick="stopAudio();">停止</a>
            <p id="audio_position"></p>
          </body>
        </html>



media.stopRecord
================

オーディオファイルの録音を停止します。

    media.stopRecord();


概要
-----------

`media.stopRecord` 関数はオーディオファイルの録音を停止させる同期関数です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

使用例
-------------

    // オーディオの録音
    //
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // 呼び出し成功
            function() {
                console.log("recordAudio():Audio Success");
            },

            // 呼び出し失敗
            function(err) {
                console.log("recordAudio():Audio Error: "+ err.code);
        });

        // オーディオの録音
        mediaRec.startRecord();

        // 10秒後に録音を停止
        setTimeout(function() {
            mediaRec.stopRecord();
        }, 10000);
    }


詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // オーディオの録音
        //
        function recordAudio() {
            var src = "myrecording.mp3";
            var mediaRec = new Media(src, onSuccess, onError);

            // オーディオの録音
            mediaRec.startRecord();

            // 10秒後に録音を停止
            var recTime = 0;
            var recInterval = setInterval(function() {
                recTime = recTime + 1;
                setAudioPosition(recTime + " sec");
                if (recTime >= 10) {
                    clearInterval(recInterval);
                    mediaRec.stopRecord();
                }
            }, 1000);
        }

        // Cordova 準備完了
        //
        function onDeviceReady() {
            recordAudio();
        }

        // 成功時のコールバック関数
        //
        function onSuccess() {
            console.log("recordAudio():Audio Success");
        }

        // エラー時のコールバック関数 
        //
        function onError(error) {
            alert('コード: '        + error.code    + '\n' +
                  'メッセージ: '    + error.message + '\n');
        }

        // 再生位置をセット
        //
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }

        </script>
      </head>
      <body>
        <p id="media">オーディオを録音...</p>
        <p id="audio_position"></p>
      </body>
    </html>


Tizen に関する注意点
----------

- この API は Tizen デバイスではサポートされていません。



MediaError
==========

`MediaError` オブジェクトは、エラー発生時に `mediaError` コールバック関数に渡されます。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します
- __message:__ エラーの内容を表すエラーメッセージを表します

定数
---------

- `MediaError.MEDIA_ERR_ABORTED`
- `MediaError.MEDIA_ERR_NETWORK`
- `MediaError.MEDIA_ERR_DECODE`
- `MediaError.MEDIA_ERR_NONE_SUPPORTED`


概要
-----------

`MediaError` オブジェクトは、エラー発生時に `mediaError` コールバック関数に渡されます。




mediaError
==========

メディア関数群にエラーが発生したときのユーザーによって定義されるコールバック関数です。

    function(error) {
        // エラー処理
    }

パラメーター
----------

- __error:__ デバイスから返されるエラーを表します (`MediaError`)


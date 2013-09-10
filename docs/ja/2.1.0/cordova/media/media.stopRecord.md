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

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
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

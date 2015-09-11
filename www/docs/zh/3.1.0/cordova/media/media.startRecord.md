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

# media.startRecord

開始錄製的音訊<a href="../file/fileobj/fileobj.html">檔</a>。

    media.startRecord() ；
    

## 說明

`media.startRecord`方法同步執行，開始錄製的音訊<a href="../file/fileobj/fileobj.html">檔</a>。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // Record audio
    //
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // success callback
            function() {
                console.log("recordAudio():Audio Success");
            },
    
            // error callback
            function(err) {
                console.log("recordAudio():Audio Error: "+ err.code);
            });
    
        // Record audio
        mediaRec.startRecord();
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // Record audio
        //
        function recordAudio() {
            var src = "myrecording.amr";
            var mediaRec = new Media(src, onSuccess, onError);
    
            // Record audio
            mediaRec.startRecord();
    
            // Stop recording after 10 sec
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
    
        // device APIs are available
        //
        function onDeviceReady() {
            recordAudio();
        }
    
        // onSuccess Callback
        //
        function onSuccess() {
            console.log("recordAudio():Audio Success");
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
        <p id="media">Recording audio...</p>
        <p id="audio_position"></p>
      </body>
    </html>
    

## Android 的怪癖

*   Android <a href="../device/device.html">設備</a>音訊格式記錄的自我調整多速率。指定的<a href="../file/fileobj/fileobj.html">檔</a>應以*.amr*副<a href="../file/fileobj/fileobj.html">檔</a>名結尾。

## 黑莓 WebWorks 怪癖

*   黑莓<a href="../device/device.html">設備</a>音訊格式記錄的自我調整多速率。指定的<a href="../file/fileobj/fileobj.html">檔</a>必須以*.amr*副<a href="../file/fileobj/fileobj.html">檔</a>名結尾。

## iOS 的怪癖

*   iOS 只記錄到<a href="../file/fileobj/fileobj.html">檔</a>的類型*.wav*和返回一個錯誤如果<a href="../file/fileobj/fileobj.html">檔</a>副<a href="../file/fileobj/fileobj.html">檔</a>名不正確。

*   如果未提供的完整路徑，錄音放在應用程式的 `documents/tmp` 目錄。 這可以通過訪問 `File` API 使用 `LocalFileSystem.TEMPORARY` 。 在記錄時指定的任何子目錄中必須已經存在。

*   <a href="../file/fileobj/fileobj.html">檔</a>可以記錄和演奏的後面使用的<a href="../file/fileobj/fileobj.html">檔</a>的 URI：
    
        var myMedia = new Media("documents://beer.mp3")
        

## Tizen 怪癖

*   Tizen <a href="../device/device.html">設備</a>上不支援。
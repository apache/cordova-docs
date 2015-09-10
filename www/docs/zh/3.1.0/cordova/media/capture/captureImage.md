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

# capture.captureImage

> 啟動攝像頭應用程式並返回有關<a href="capture.html">捕獲</a>的影像<a href="../../file/fileobj/fileobj.html">檔</a>的資訊。

    navigator.device.capture.captureImage(
        <a href="CaptureCB.html">CaptureCB</a> captureSuccess, <a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a> captureError, [<a href="captureImageOptions.html">CaptureImageOptions</a> options]
    );
    

## 說明

開始非同步作業以<a href="capture.html">捕獲</a>圖像使用該<a href="../../device/device.html">設備</a>的攝像頭應用程式。該操作允許使用者在一個會話中<a href="capture.html">捕獲</a>多個圖像。

在<a href="capture.html">捕獲</a>操作結束或者當使用者<a href="../../inappbrowser/inappbrowser.html">關閉</a>攝像頭應用程式或由指定的錄音的最大數目 `<a href="captureAudioOptions.html">CaptureAudioOptions</a>.limit` 到達。 如果沒有 `limit` 指定的值，它將預設為一 (1) 和<a href="capture.html">捕獲</a>操作終止後使用者<a href="capture.html">捕獲</a>單個圖像。

在<a href="capture.html">捕獲</a>操作完成後，它將調用 `<a href="CaptureCB.html">CaptureCB</a>` 回<a href="../../file/fileobj/fileobj.html">檔</a>與陣列的 `MediaFile` 物件描述每個<a href="capture.html">捕獲</a>的影像<a href="../../file/fileobj/fileobj.html">檔</a>。 如果使用者終止之前<a href="capture.html">捕獲</a>圖像，操作 `<a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a>` 回<a href="../../file/fileobj/fileobj.html">檔</a>執行與 `<a href="CaptureError.html">CaptureError</a>` 物件特色 `<a href="CaptureError.html">CaptureError</a>.CAPTURE_NO_MEDIA_FILES` 錯誤代碼。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## Windows Phone 7 的怪癖

調用本機攝像頭應用程式，同時通過 Zune <a href="../../connection/connection.html">連接</a>您的<a href="../../device/device.html">設備</a>不工作，並錯誤回<a href="../../file/fileobj/fileobj.html">檔</a>執行。

## 快速的示例

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.<a href="../../notification/notification.alert.html">notification.alert</a>('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start image capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Image</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.<a href="../../notification/notification.alert.html">notification.alert</a>(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureImage() {
            // Launch device camera application,
            // allowing user to capture up to 2 images
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureImage();">Capture Image</button> <br>
        </body>
    </html>
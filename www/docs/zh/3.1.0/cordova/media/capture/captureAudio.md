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

# capture.captureAudio

> 啟動音訊答錄機應用程式並返回有關捕獲音訊剪輯檔的資訊。

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );
    

## 說明

開始非同步作業以捕獲使用該設備的預設音訊錄製應用程式的音訊錄製。 該操作允許設備使用者的單個會話中捕獲多個錄音。

在捕獲操作結束時或者在使用者退出音訊錄音應用程式或由指定的錄音的最大數目 `CaptureAudioOptions.limit` 到達。 如果沒有 `limit` 指定參數的值，它將預設為一 (1) 和捕獲操作終止後使用者記錄單個音訊剪輯。

在捕獲操作完成後， `CaptureCallback` 執行與陣列的 `MediaFile` 物件描述每個捕獲音訊剪輯檔。 如果使用者終止操作之前捕獲音訊剪輯時， `CaptureErrorCallback` 與執行 `CaptureError` 物件中，設有 `CaptureError.CAPTURE_NO_MEDIA_FILES` 錯誤代碼。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

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
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Audio</title>
    
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
            navigator.notification.alert(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureAudio() {
            // Launch device audio recording application,
            // allowing user to capture up to 2 audio clips
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureAudio();">Capture Audio</button> <br>
        </body>
    </html>
    

## 黑莓 WebWorks 怪癖

*   科爾多瓦的黑莓 WebWorks 嘗試啟動**錄音筆記**提供的應用程式，由 RIM，來捕獲音訊錄製。 這款應用程式會收到 `CaptureError.CAPTURE_NOT_SUPPORTED` 錯誤代碼，如果應用程式未安裝在設備上。

## iOS 的怪癖

*   iOS 沒有預設的音訊錄音應用程式，因此提供了一個簡單的使用者介面。

## Windows Phone 7 和 8 怪癖

*   Windows Phone 7 沒有預設的音訊錄音應用程式，因此提供了一個簡單的使用者介面。
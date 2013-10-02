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

# capture.captureVideo

> 비디오 레코더 응용 프로그램을 시작 하 고 캡처한 비디오 클립 파일에 대 한 정보를 반환 합니다.

    navigator.device.capture.captureVideo(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
    );
    

## 설명

비디오 녹화 장치의 비디오 레코딩 응용 프로그램을 사용 하 여 캡처하는 비동기 작업을 시작 합니다. 작업을 사용 하면 단일 세션에서 하나 이상의 녹음을 캡처할 수 있습니다.

캡처 작업이 끝나면 사용자 종료 비디오 레코딩 응용 프로그램 또는 녹음에 의해 지정 된 최대 수 `CaptureVideoOptions.limit` 에 도달. 없는 경우 `limit` 매개 변수 값 지정, 하나 (1), 기본 및 캡처 작업이 종료 되 면 사용자는 하나의 비디오 클립을 기록 하는 후.

캡처 작업이 완료 되 면 그것은 `CaptureCB` 의 배열과 콜백 실행 `MediaFile` 비디오 클립 파일을 캡처 설명 하는 각 개체. 사용자는 비디오 클립을 캡처하기 전에 작업을 종료 하는 경우는 `CaptureErrorCB` 콜백 실행 한 `CaptureError` 개체를 특징으로 `CaptureError.CAPTURE_NO_MEDIA_FILES` 오류 코드.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

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
    
    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Video</title>
    
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
        function captureVideo() {
            // Launch device video recording application,
            // allowing user to capture up to 2 video clips
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureVideo();">Capture Video</button> <br>
        </body>
    </html>
    

## 블랙베리 WebWorks 단점

*   블랙베리 WebWorks 위한 코르도바 **비디오 레코더** 응용, RIM, 제공한 비디오 녹화를 잡으려고 시도 합니다. 응용 프로그램 수신는 `CaptureError.CAPTURE_NOT_SUPPORTED` 오류 코드 응용 프로그램을 장치에 설치 되어 있지 않으면.
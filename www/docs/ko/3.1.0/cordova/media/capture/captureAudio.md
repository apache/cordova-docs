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

# capture.captureAudio

> 오디오 레코더 응용 프로그램을 시작 하 고 <a href="capture.html">캡처</a>한 오디오 클립 <a href="../../file/fileobj/fileobj.html">파일</a>에 대 한 정보를 반환 합니다.

    navigator.device.capture.captureAudio(
        <a href="CaptureCB.html">CaptureCB</a> captureSuccess, <a href="CaptureError.html">CaptureError</a>CB captureError,  [<a href="captureAudioOptions.html">CaptureAudioOptions</a> options]
    );
    

## 설명

소자의 기본 오디오 녹음 응용 프로그램을 사용 하 여 오디오 녹음을 <a href="capture.html">캡처</a>하는 비동기 작업을 시작 합니다. 작업 <a href="../../device/device.html">장치</a> 사용자를 단일 세션에서 여러 녹화를 <a href="capture.html">캡처</a>할 수 있습니다.

<a href="capture.html">캡처</a> 작업이 종료 사용자 오디오 녹음 응용 프로그램 또는 녹음에 의해 지정 된 최대 수를 종료 하는 경우 `<a href="captureAudioOptions.html">CaptureAudioOptions</a>.limit` 에 도달. 없는 경우 `limit` 매개 <a href="../../../plugin_ref/spec.html">변수</a> 값 지정, 하나 (1), 기본 및 <a href="capture.html">캡처</a> 작업이 종료 되 면 사용자는 하나의 오디오 클립을 기록 하는 후.

<a href="capture.html">캡처</a> 작업이 완료 되 면은 `CaptureCallback` 의 배열을 실행 `MediaFile` 오디오 클립 <a href="../../file/fileobj/fileobj.html">파일</a>을 <a href="capture.html">캡처</a> 설명 하는 각 개체. 전에 오디오 클립을 <a href="capture.html">캡처</a> 작업이 종료 되 면 사용자는 `<a href="CaptureError.html">CaptureError</a>Callback` 으로 실행 한 `<a href="CaptureError.html">CaptureError</a>` 개체, 특징으로 `<a href="CaptureError.html">CaptureError</a>.CAPTURE_NO_MEDIA_FILES` 오류 코드.

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
        navigator.<a href="../../notification/notification.alert.html">notification.alert</a>('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## 전체 예제

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
            navigator.<a href="../../notification/notification.alert.html">notification.alert</a>(msg, null, 'Uh oh!');
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
            var ft = new <a href="../../file/filetransfer/filetransfer.html">FileTransfer</a>(),
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
    

## 블랙베리 WebWorks 단점

*   코르도바 블랙베리 WebWorks에 대 한 **목소리 노트 레코더** 응용, RIM, 제공한 오디오 녹음을 잡으려고 시도 합니다. 응용 프로그램 수신는 `<a href="CaptureError.html">CaptureError</a>.CAPTURE_NOT_SUPPORTED` 오류 코드 응용 프로그램을 <a href="../../device/device.html">장치</a>에 설치 되어 있지 않으면.

## iOS 단점

*   iOS 없으므로 기본 오디오 녹음 응용 프로그램을 간단한 사용자 인터페이스를 제공 합니다.

## Windows Phone 7, 8 특수

*   Windows Phone 7 없으므로 기본 오디오 녹음 응용 프로그램을 간단한 사용자 인터페이스를 제공 합니다.
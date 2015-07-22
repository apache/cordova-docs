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

# media.startRecord

오디오 파일 녹음을 시작 합니다.

    media.startRecord();
    

## 설명

`media.startRecord`메서드는 동기적으로 실행, 오디오 파일에 대 한 녹음을 시작 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

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
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
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
    

## 안 드 로이드 단점

*   안 드 로이드 장치 적응 다중 속도 형식에서 오디오를 기록합니다. 지정 된 파일 *.amr* 확장명으로 끝나야 합니다.

## 블랙베리 WebWorks 단점

*   검은 딸기 장치 적응 다중 속도 형식에서 오디오를 기록합니다. 지정 된 파일 *.amr* 확장명으로 끝나야 합니다.

## iOS 단점

*   iOS만 레코드 형식을 *.wav* 및 반환 오류 경우 파일 이름 확장명의 파일을 수정 하지.

*   전체 경로 제공 하지 않으면 응용 프로그램의 기록 배치 됩니다 `documents/tmp` 디렉터리. 이 통해 액세스할 수 있는 `File` API를 사용 하 여 `LocalFileSystem.TEMPORARY` . 기록 시간에 지정 된 하위 디렉터리에 이미 존재 해야 합니다.

*   파일을 기록 하 고 재생할 수 있습니다 문서 URI를 사용 하 여 다시:
    
        var myMedia = new Media("documents://beer.mp3")
        

## Tizen 특수

*   Tizen 장치에서 지원 되지 않습니다.
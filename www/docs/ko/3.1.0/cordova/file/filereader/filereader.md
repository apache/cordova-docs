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

# FileReader

`FileReader`파일에 대 한 기본 액세스를 허용 합니다.

## 속성

*   **readyState**: 독자의 세 가지 가능한 상태, 어느 쪽이 든 `EMPTY` , `LOADING` 또는`DONE`.

*   **결과**: 읽은 파일의 내용을. *(DOMString)*

*   **오류**: 오류를 포함 하는 개체. *(FileError)*

*   **onloadstart**: 읽기 시작할 때 라고. *(기능)*

*   **onload**: 읽기 성공적으로 완료 될 때 호출 합니다. *(기능)*

*   **onabort**: 읽기를 중단 될 때 호출 합니다. 예를 들어, 호출 하 여는 `abort()` 방법. *(기능)*

*   **onerror**: 읽기 실패 때 호출 합니다. *(기능)*

*   **onloadend**: (중 성공 또는 실패) 요청이 완료 될 때 호출 합니다. *(기능)*

**참고:** 다음 porperty는 지원 되지 않습니다.

*   **onprogress**: 진행의 관점에서 보고, 파일을 읽는 동안 전화 `progress.loaded` / `progress.total` . *(기능)*

## 메서드

*   **중지**: 파일 읽기 중단.

*   **readAsDataURL**: 파일 및 base64 인코딩된 데이터의 URL로 데이터를 반환 합니다.

*   **readAsText**: 읽기 텍스트 파일.

*   **readAsBinaryString**: 이진 파일을 이진 문자열을 반환 합니다.

*   **readAsArrayBuffer**: 파일을 읽기는`ArrayBuffer`.

## 세부 정보

`FileReader`개체 디바이스의 파일 시스템에서 파일을 읽을 수 있는 방법을 제공 합니다. 텍스트 또는 base64 데이터 인코딩 문자열 파일을 읽을 수 있습니다. 수신 하는 이벤트 리스너는 `loadstart` , `progress` , `load` , `loadend` , `error` , 및 `abort` 이벤트.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## readAsDataURL

**매개 변수:**

*   **파일**: 파일 개체 읽기를.

## 빠른 예제

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsText

**매개 변수:**

*   **파일**: 파일 개체 읽기를.

*   **인코딩**: 인코딩 파일의 콘텐츠를 사용 하 여 인코딩. 기본값은 u t f 8입니다.

## 빠른 예제

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## 중단

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };
    
    function fail(error) {
        console.log(error.code);
    }
    
    entry.file(win, fail);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, fail);
        }
    
        function gotFile(file){
            readDataUrl(file);
            readAsText(file);
        }
    
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS 단점

*   **인코딩** 매개 변수는 지원 되지 않습니다, 및 효과에 항상 UTF8 인코딩.

## readAsBinaryString

현재 iOS와 안 드 로이드만 지원 합니다.

**매개 변수:**

*   **파일**: 파일 개체 읽기를.

## 빠른 예제

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsArrayBuffer

현재 iOS와 안 드 로이드만 지원 합니다.

**매개 변수:**

*   **파일**: 파일 개체 읽기를.

## 빠른 예제

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
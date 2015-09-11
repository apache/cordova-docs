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

# FileWriter

개체를 만들고 <a href="../fileobj/fileobj.html">파일</a>에 데이터를 쓸 수 있습니다.

## 속성

*   **readyState**: 세 가지 가능한 상태 중 하나, 어느 `INIT` , `WRITING` , 또는`DONE`.

*   **<a href="../fileobj/fileobj.html">파일</a> 이름**: 쓸 <a href="../fileobj/fileobj.html">파일</a>의 이름. *(DOMString)*

*   **길이**: 쓰여질 <a href="../fileobj/fileobj.html">파일</a>의 길이. *(긴)*

*   **<a href="../../geolocation/Position/position.html">위치</a>**: <a href="../fileobj/fileobj.html">파일</a> 포인터의 현재 <a href="../../geolocation/Position/position.html">위치</a>. *(긴)*

*   **오류**: 오류를 포함 하는 개체. *(<a href="../fileerror/fileerror.html">FileError</a>)*

*   **onwritestart**: 쓰기 시작할 때 호출 합니다. *(기능)*

*   **onwrite**: 요청이 성공적으로 완료 될 때 호출 합니다. *(기능)*

*   **onabort**: 쓰기를 중단 될 때 호출 합니다. 예를 들어, abort() 메서드를 호출 하 여 합니다. *(기능)*

*   **onerror**: 쓰기 실패 때 호출 합니다. *(기능)*

*   **onwriteend**: (중 성공 또는 실패) 요청이 완료 될 때 호출 합니다. *(기능)*

다음 속성은 지원 *되지 않습니다* :

*   **onprogress**: 진행의 관점에서 보고 <a href="../fileobj/fileobj.html">파일</a>을 쓰는 동안 전화 `progress.loaded` / `progress.total` . *(기능)*

## 메서드

*   **중지**: <a href="../fileobj/fileobj.html">파일</a> 쓰기를 중단 합니다.

*   **추구**: 지정 된 바이트를 <a href="../fileobj/fileobj.html">파일</a> 포인터를 이동 합니다.

*   **자르기**: <a href="../fileobj/fileobj.html">파일</a> 지정된 된 길이에 단축.

*   **쓰기**: <a href="../fileobj/fileobj.html">파일</a>에 데이터를 씁니다.

## 세부 정보

`FileWriter`개체 <a href="../../device/device.html">장치</a> <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">파일</a> 시스템</a>에 u t F-8로 인코딩된 <a href="../fileobj/fileobj.html">파일</a>을 작성 하는 방법을 제공 합니다. 응용 프로그램에 응답 `writestart` , `progress` , `write` , `writeend` , `error` , 및 `abort` <a href="../../events/events.html">이벤트</a>.

각 `FileWriter` 는 데이터 쓸 수 있습니다 여러 번 단일 <a href="../fileobj/fileobj.html">파일</a>에 해당 합니다. `FileWriter`<a href="../fileobj/fileobj.html">파일</a>의 유지 관리 `position` 및 `length` 특성을 애플 리 케이 션을 허용 하는 `seek` 및 `write` <a href="../fileobj/fileobj.html">파일</a>에 아무 데도. 기본적으로는 `FileWriter` 기존 데이터를 덮어쓰면서 <a href="../fileobj/fileobj.html">파일</a>의 시작 부분을 씁니다. 선택적 설정 `append` 을 부울 `true` 에 `FileWriter` 의 생성자는 <a href="../fileobj/fileobj.html">파일</a>의 끝에 쓰기.

텍스트 데이터는 아래에 나열 된 모든 플랫폼에서 지원 됩니다. 텍스트 <a href="../fileobj/fileobj.html">파일</a>에 기록 하기 전에 u t F-8로 인코딩됩니다. 어떤 플랫폼도는 ArrayBuffer 또는 Blob로 전달 될 수 있는 이진 데이터를 지원 합니다.

## 지원 되는 플랫폼

텍스트 및 바이너리 지원:

*   안 드 로이드
*   iOS

텍스트 전용 지원:

*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   Windows Phone 7과 8
*   윈도우 8

## 간단한 예를 추구합니다

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 빠른 예를 들어 자르기

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 빠른 <a href="../../inappbrowser/inappbrowser.html">보기</a> 작성

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 이진 쓰기 간단한 예

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 빠른 예를 들어 추가

    function win(writer) {
        writer.onwrite = function(evt) {
        console.log("write success");
    };
    writer.seek(writer.length);
        writer.write("appended text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 빠른 예를 들어 중단

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
        writer.abort();
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, got<a href="../fileentry/fileentry.html">FileEntry</a>, fail);
        }
    
        function got<a href="../fileentry/fileentry.html">FileEntry</a>(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Write File</p>
      </body>
    </html>
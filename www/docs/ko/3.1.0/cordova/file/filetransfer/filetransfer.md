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

# FileTransfer

`FileTransfer`개체를 사용 하면 업로드 또는 서버에서 <a href="../fileobj/fileobj.html">파일</a>을 다운로드 합니다.

## 속성

*   **onprogress**:로 불리는 `ProgressEvent` 새로운 양의 데이터를 전송 하는 때마다. *(기능)*

## 메서드

*   **업로드**: <a href="../fileobj/fileobj.html">파일</a>을 서버에 보냅니다.

*   **다운로드**: 서버에서 <a href="../fileobj/fileobj.html">파일</a>을 다운로드 합니다.

*   **중단**: 진행 중인 전송 중단.

## 세부 정보

`FileTransfer`개체를 HTTP 다중 파트 POST 요청을 사용 하 여 원격 서버에 <a href="../fileobj/fileobj.html">파일</a>을 업로드 하는 방법을 제공 합니다. HTTP 및 HTTPS 프로토콜이 지원 됩니다. 선택적 매개 <a href="../../../plugin_ref/spec.html">변수</a>를 전달 하 여 지정할 수 있습니다 한 `<a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>` 개체는 `upload()` 방법. 성공적으로 업로드에 대 한 `<a href="../fileuploadresult/fileuploadresult.html">FileUploadResult</a>` 개체 성공 콜백에 전달 됩니다. 오류가 발생 하는 경우는 `<a href="../filetransfererror/filetransfererror.html">FileTransferError</a>` 개체는 오류를 전달 합니다. 그것도 가능 (iOS와 안 드 로이드)에 원격 서버에서 <a href="../fileobj/fileobj.html">파일</a>을 다운로드 하 여 <a href="../../device/device.html">장치</a>에 저장 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 업로드

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **filePath**: <a href="../../device/device.html">장치</a>에서 <a href="../fileobj/fileobj.html">파일</a>의 전체 경로.

*   **서버**: 인코딩 <a href="../fileobj/fileobj.html">파일</a> 수신 서버의 URL`encodeURI()`.

*   **successCallback**: 콜백 전달 되는 `Metadata` 개체. *(기능)*

*   **errorCallback**: 콜백 검색에 오류가 발생 하면 실행 되는 `Metadata` . 로 호출을 `<a href="../filetransfererror/filetransfererror.html">FileTransferError</a>` 개체. *(기능)*

*   **옵션**: <a href="../fileobj/fileobj.html">파일</a> 이름 및 mimetype 선택적 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

*   **trustAllHosts**: 선택적 매개 <a href="../../../plugin_ref/spec.html">변수</a>는 기본적으로 `false` . 만약 설정 `true` , 그것은 모든 보안 인증서를 허용 합니다. 이 안 드 로이드 자체 서명 된 보안 인증서를 거부 하기 때문에 유용 합니다. 프로덕션 환경에서 사용 권장 되지 않습니다. 안 드 로이드와 iOS에서 지원. *(부울)*

**빠른 예제**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new <a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**전체 예제**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.<a href="../../camera/camera.getPicture.html">camera.getPicture</a>(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new <a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Upload File</p>
    </body>
    </html>
    

**설정 업로드 헤더**

안 드 로이드와 iOS에서 지원

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new <a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**안 드 로이드 단점**

설정에서 `chunkedMode` 옵션을 `false` Nginx 서버에 업로드 하는 문제를 방지 하려면.

## 다운로드

**매개 <a href="../../../plugin_ref/spec.html">변수</a>:**

*   **소스**: URL로 인코딩된 <a href="../fileobj/fileobj.html">파일</a>, 다운로드 서버`encodeURI()`.

*   **대상**: <a href="../../device/device.html">장치</a>에서 <a href="../fileobj/fileobj.html">파일</a>의 전체 경로.

*   **successCallback**: 콜백 전달 되는 `<a href="../fileentry/fileentry.html">FileEntry</a>` 개체. *(기능)*

*   **errorCallback**: 콜백 검색할 때 오류가 발생 하면 실행 되는 `Metadata` . 로 호출을 `<a href="../filetransfererror/filetransfererror.html">FileTransferError</a>` 개체. *(기능)*

*   **trustAllHosts**: 선택적 매개 <a href="../../../plugin_ref/spec.html">변수</a>는 기본적으로 `false` . 만약 설정 `true` 후 모든 보안 인증서를 받아들일 것입니다. 안 드 로이드 자체 서명 된 보안 인증서를 거부로 유용 합니다. 프로덕션 환경에서 사용 권장 되지 않습니다. 안 드 로이드와 iOS에서 지원. *(부울)*

*   **옵션**: 선택적 매개 <a href="../../../plugin_ref/spec.html">변수</a>를 현재 지 원하는 머리글만 (예: 인증 (기본 인증), 등).

**빠른 예제**

    // !! FilePath <a href="../../device/device.html">장치</a> var fileTransfer에 유효한 경로 가정 합니다 = 새로운 FileTransfer();
    var uri = encodeURI ("http://some.server.com/download.php");
    
    fileTransfer.download (uri, filePath, function(entry) {console.log ("다운로드 완료:" + entry.fullPath);
        }, {console.log ("다운로드 오류 소스" + error.source); function(error)
            console.log ("다운로드 오류 대상" + error.target);
            console.log ("업로드 오류 코드" + error.code);
        }, false 이면 {헤더: {"권한 부여": "기본 dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA = ="}});
    

## 중단

진행 중인 전송을 중단합니다. Onerror 콜백 <a href="../filetransfererror/filetransfererror.html">FileTransferError</a>.ABORT_ERR의 오류 코드는 <a href="../filetransfererror/filetransfererror.html">FileTransferError</a> 개체를 전달 합니다.

**지원 되는 플랫폼**

*   안 드 로이드
*   iOS

**빠른 예제**

    // !! 가정 <a href="../../device/device.html">장치</a> var 승리에 텍스트 <a href="../fileobj/fileobj.html">파일</a>을 유효한 URI를 포함 하는 <a href="../../../plugin_ref/spec.html">변수</a> fileURI function(r) = {console.log ("호출할 수 없습니다.");}
    
    실패 하는 var function(error) = {/ / error.code <a href="../filetransfererror/filetransfererror.html">FileTransferError</a>.ABORT_ERR 경고 = = ("오류가 발생 했습니다: 코드 =" + error.code);
        console.log ("업로드 오류 소스" + error.source);
        console.log ("업로드 오류 대상" + error.target);}
    
    var 옵션 = 새로운 <a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    var ft = 새로운 FileTransfer();
    ft.upload (fileURI encodeURI ("http://some.server.com/upload.php"), 승리, 실패, 옵션);
    ft.abort();
    

## onprogress

새로운 양의 데이터 전송 하는 때마다는 ProgressEvent 함께 호출 됩니다.

**지원 되는 플랫폼**

*   안 드 로이드
*   iOS

**예를 들어**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**단점** -둘 다 안 드 로이드, iOS는 lengthComputable는 `false` gzip 인코딩을 사용 하는 다운로드 합니다.
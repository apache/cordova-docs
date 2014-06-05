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

# camera.getPicture

카메라를 사용 하 여 사진을 걸립니다 또는 소자의 이미지 갤러리에서 사진을 검색 합니다. 이미지 base64 인코딩으로 성공 콜백에 전달 됩니다 `String` , 또는 이미지 파일에 대 한 URI로. 방법 자체는 반환 합니다 한 `CameraPopoverHandle` 개체 파일 선택 popover를 재배치 하는 데 사용할 수 있습니다.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## 설명

`camera.getPicture`기능 스냅 사진을 사용자가 디바이스의 기본 카메라 응용 프로그램을 엽니다. 이 동작은 기본적으로 발생 할 때 `Camera.sourceType` 와 `Camera.PictureSourceType.CAMERA` . 일단 사용자 스냅 사진, 카메라 응용 프로그램 종료 하 고 응용 프로그램 복원 됩니다.

경우 `Camera.sourceType` 은 `Camera.PictureSourceType.PHOTOLIBRARY` 또는 `Camera.PictureSourceType.SAVEDPHOTOALBUM` , 사용자가 기존 이미지를 선택할 수 있도록 다음 대화 상자 표시. `camera.getPicture`반환 함수는 `CameraPopoverHandle` 장치 방향 변경 될 때 이미지 선택 대화 상자, 예를 들어, 위치를 변경 하려면 사용할 수 있는 개체.

반환 값에 전송 되는 `cameraSuccess` 콜백 함수에 따라 지정 된 다음 형식 중 하나에 `cameraOptions` :

*   A `String` base64 인코딩된 사진 이미지를 포함 합니다.

*   A `String` 로컬 저장소 (기본값)의 이미지 파일 위치를 나타내는.

할 수 있는 당신이 원하는대로 인코딩된 이미지 또는 URI, 예를 들면:

*   렌더링 이미지는 `<img>` 아래 예제와 같이 태그

*   로컬로 데이터를 저장 ( `LocalStorage` , [Lawnchair][1], 등.)

*   원격 서버에 데이터 게시

 [1]: http://brianleroux.github.com/lawnchair/

**참고:** 더 새로운 장치에 사진 해상도 확실히 좋다입니다. 소자의 갤러리에서 선택 된 사진을 하지 낮은 품질에 관하여는 경우에는 `quality` 매개 변수를 지정 합니다. 일반적인 메모리 문제를 방지 하려면 설정 `Camera.destinationType` 을 `FILE_URI` 보다는`DATA_URL`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 안 드 로이드 단점

안 드 로이드 의도 사용 하 여 이미지 캡처 장치에서 카메라 활동을 시작 하 고 낮은 메모리와 휴대 전화에 코르 도우 바 활동 살해 수 있습니다. 코르도바 활동 복원 되 면이 시나리오에서는 이미지가 나타나지 않을 수 있습니다.

## iOS 단점

자바 스크립트를 포함 하 여 `alert()` 함수는 콜백 중에 문제를 일으킬 수 있습니다. 내 경고를 래핑하는 `setTimeout()` 허용 iOS 이미지 피커 또는 popover를 완벽 하 게 경고를 표시 하기 전에 닫습니다:

    setTimeout(function() {/ / 여기 짓!}, 0);
    

## Windows Phone 7 단점

당신의 장치 Zune 통해 연결 하는 동안 네이티브 카메라 응용 프로그램을 호출 하면 작동 하지 않습니다 하 고 오류 콜백 트리거합니다.

## Tizen 특수

Tizen만 지원 한 `destinationType` 의 `Camera.DestinationType.FILE_URI` 와 `sourceType` 의`Camera.PictureSourceType.PHOTOLIBRARY`.

## 빠른 예제

촬영 및 base64 인코딩 이미지로 검색:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
    
    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

촬영 하 고 이미지의 파일 위치를 검색:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Photo</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoDataSuccess(imageData) {
          // Uncomment to view the base64-encoded image data
          // console.log(imageData);
    
          // Get image handle
          //
          var smallImage = document.getElementById('smallImage');
    
          // Unhide image elements
          //
          smallImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoURISuccess(imageURI) {
          // Uncomment to view the image file URI
          // console.log(imageURI);
    
          // Get image handle
          //
          var largeImage = document.getElementById('largeImage');
    
          // Unhide image elements
          //
          largeImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          largeImage.src = imageURI;
        }
    
        // A button will call this function
        //
        function capturePhoto() {
          // Take picture using device camera and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function capturePhotoEdit() {
          // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function getPhoto(source) {
          // Retrieve image file location from specified source
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }
    
        // Called if something bad happens.
        //
        function onFail(message) {
          alert('Failed because: ' + message);
        }
    
        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Capture Photo</button> <br>
        <button onclick="capturePhotoEdit();">Capture Editable Photo</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">From Photo Library</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">From Photo Album</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>
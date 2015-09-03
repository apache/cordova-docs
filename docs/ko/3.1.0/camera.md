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


# 카메라

> `camera`개체는 소자의 기본 카메라 응용 프로그램에 대 한 액세스를 제공 합니다.

**중요 한 개인 정보 보호 참고:** 수집 및 디바이스의 카메라에서 이미지를 사용 하 여 중요 한 개인 정보 보호 문제를 발생 시킵니다. 응용 프로그램의 개인 정보 보호 정책 app는 카메라를 사용 하는 방법 및 다른 당사자와 함께 기록 된 이미지는 공유 하는 여부를 토론 해야 한다. 또한, 카메라를 사용 하는 애플 리 케이 션의 사용자 인터페이스에서 명백 하지 않은, 당신의 애플 리 케이 션이 (해당 되는 경우 장치 운영 체제 이렇게 이미 하지 않는) 카메라에 액세스 하기 전에 그냥--시간 통지를 제공 해야 합니다. 그 통지는 (예를 들어, **확인** 및 **아니오**선택 제시) 하 여 사용자의 허가 취득 뿐만 아니라, 위에서 언급 된 동일한 정보를 제공 해야 합니다. 자세한 내용은 개인 정보 보호 가이드를 참조 하십시오.

## 메서드

*   camera.getPicture
*   camera.cleanup

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.CameraLauncher" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.media.camera" />
        
        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>
        

*   (iOS`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][1]

*   (Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    참조: [Tizen 웹 응용 프로그램에 대 한 응용 프로그램 매니페스트][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.


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


# cameraSuccess

이미지 데이터를 제공 하는 onSuccess 콜백 함수.

    function(imageData) {
        // Do something with the image
    }
    

## 매개 변수

*   **imageData**: Base64 인코딩은 이미지 데이터, *또는* 이미지 파일에 따라 URI의 `cameraOptions` 적용. *(문자열)*

## 예를 들어

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


# cameraError

오류 메시지를 제공 하는 onError 콜백 함수.

    function(message) {
        // Show a helpful message
    }
    

## 매개 변수

*   **메시지**: 메시지는 장치의 네이티브 코드에 의해 제공 됩니다. *(문자열)*


# cameraOptions

카메라 설정을 사용자 지정 하는 선택적 매개 변수.

    {품질: 75, destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.CAMERA, allowEdit: 사실, encodingType: Camera.EncodingType.JPEG, targetWidth: 100, targetHeight: 100, popoverOptions: CameraPopoverOptions, saveToPhotoAlbum: false};
    

## 옵션

*   **품질**: 범위 0-100, 100은 파일 압축에서 손실 없이 일반적으로 전체 해상도 저장된 된 이미지의 품질. *(수)* (Note 카메라의 해상도 대 한 정보는 사용할 수 없습니다.)

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0, / / base64 인코딩된 문자열로 FILE_URI 이미지를 반환: 1, / / 이미지 파일 URI NATIVE_URI 반환: 2 / / 반환 이미지 기본 URI (예를 들어, 자산 라이브러리: / / iOS 또는 콘텐츠: / / 안 드 로이드에)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {PHOTOLIBRARY: 0, 카메라: 1, SAVEDPHOTOALBUM: 2};
        

*   **allowEdit**: 선택 하기 전에 이미지의 간단한 편집을 허용 합니다. *(부울)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0, / / 반환 JPEG로 인코딩된 PNG 이미지: 1 / 반환 PNG 이미지 인코딩 /};
        

*   **targetWidth**: 스케일 이미지를 픽셀 너비. **TargetHeight**와 함께 사용 해야 합니다. 가로 세로 비율이 일정 하 게 유지 합니다. *(수)*

*   **targetHeight**: 스케일 이미지를 픽셀 단위로 높이. **TargetWidth**와 함께 사용 해야 합니다. 가로 세로 비율이 일정 하 게 유지 합니다. *(수)*

*   **mediaType**:에서 선택 미디어 유형을 설정 합니다. 때에 작동 `PictureSourceType` 는 `PHOTOLIBRARY` 또는 `SAVEDPHOTOALBUM` . 에 정의 된 `nagivator.camera.MediaType` *(수)* 
    
        Camera.MediaType = {그림: 0, / / 아직 사진만의 선택을 허용 합니다. 기본입니다. DestinationType 비디오를 통해 지정 된 형식을 반환 합니다: 1, / / 동영상만은 항상 반환 FILE_URI ALLMEDIA의 선택을 허용: 2 / / 모든 미디어 유형에 서 선택 허용
        
    
    };

*   **correctOrientation**: 캡처 도중 장치의 방향에 대 한 해결 하기 위해 이미지를 회전 합니다. *(부울)*

*   **saveToPhotoAlbum**: 캡처 후 장치에서 사진 앨범에 이미지를 저장 합니다. *(부울)*

*   **popoverOptions**: iPad에 popover 위치를 지정 하는 iOS 전용 옵션. 에 정의 된`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {다시: 0, / / 앞 뒤 방향 카메라를 사용: 1 / 전면을 향하는 카메라를 사용 하 여 /};
        

## 안 드 로이드 단점

*   어떤 `cameraDirection` 다시 연결 사진에 결과 값.

*   무시는 `allowEdit` 매개 변수.

*   `Camera.PictureSourceType.PHOTOLIBRARY`그리고 `Camera.PictureSourceType.SAVEDPHOTOALBUM` 둘 다 동일한 사진 앨범을 표시 합니다.

## 블랙베리 단점

*   무시는 `quality` 매개 변수.

*   무시는 `sourceType` 매개 변수.

*   무시는 `allowEdit` 매개 변수.

*   응용 프로그램 사용자 스냅 사진 후 네이티브 카메라 응용 프로그램을 닫으려면 키 삽입 권한이 있어야 합니다.

*   큰 이미지 크기를 사용 하 여 이미지를 인코딩하 나중 모델 장치 (예를들면, 토치 9800)에 그 기능은 고해상도 카메라 무 능력에서 발생할 수 있습니다.

*   `Camera.MediaType`지원 되지 않습니다.

*   무시는 `correctOrientation` 매개 변수.

*   무시는 `cameraDirection` 매개 변수.

## iOS 단점

*   설정 `quality` 일부 장치 메모리 오류를 피하기 위해 50 아래.

*   사용 하는 경우 `destinationType.FILE_URI` , 사진 응용 프로그램의 임시 디렉터리에 저장 됩니다. 사용 하 여이 디렉터리의 내용을 삭제할 수 있는 `navigator.fileMgr` Api 저장 공간이 중요 한 경우.

## Tizen 특수

*   지원 되지 않는 옵션

*   항상 파일 URI를 반환 합니다.

## Windows Phone 7, 8 특수

*   무시는 `allowEdit` 매개 변수.

*   무시는 `correctOrientation` 매개 변수.

*   무시는 `cameraDirection` 매개 변수.


# CameraPopoverOptions

iOS 전용 매개 iPad의 보관 함 또는 앨범에서 이미지를 선택할 때는 popover의 앵커 요소 위치와 화살표 방향을 지정 합니다.

    {x: 0, y: 32, 폭: 320, 높이: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: x는 popover 앵커는 화면 요소의 픽셀 좌표. *(수)*

*   **y**: y 픽셀 좌표는 popover 앵커는 화면 요소입니다. *(수)*

*   **폭**: 폭 (픽셀)는 popover 앵커는 화면 요소. *(수)*

*   **높이**: 높이 (픽셀)는 popover 앵커는 화면 요소. *(수)*

*   **arrowDir**: 방향 화살표는 popover 가리켜야 합니다. 에 정의 된 `Camera.PopoverArrowDirection` *(수)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / iOS UIPopoverArrowDirection 상수 ARROW_DOWN 일치: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

참고는 popover의 크기 조정 화살표 방향 및 화면 방향 변경 될 수 있습니다. 앵커 요소 위치를 지정 하는 경우 방향 변경에 대 한 계정에 있는지 확인 합니다.

## 빠른 예제

     var popover = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     var options = {
         quality         : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType      : Camera.PictureSource.SAVEDPHOTOALBUM,
         popoverOptions  : popover
     };
    
     navigator.camera.getPicture(onSuccess, onFail, options);
    
     function onSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
     }
    
     function onFail(message) {
         alert('Failed because: ' + message);
     }


# CameraPopoverHandle

에 의해 만들어진 popover 대화에 대 한 핸들`camera.getPicture`.

## 메서드

*   **setPosition**:는 popover의 위치를 설정 합니다.

## 지원 되는 플랫폼

*   iOS

## setPosition

popover의 위치를 설정 합니다.

**매개 변수:**

*   `cameraPopoverOptions`:는 `CameraPopoverOptions` 새 위치를 지정 하는

## 빠른 예제

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## 전체 예제

     function onSuccess(imageData) {
          // Do stuff with the image!
     }
    
     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }
    
     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    
     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, 0);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }

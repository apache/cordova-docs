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

# cameraOptions

<a href="../camera.html">카메라</a> 설정을 사용자 지정 하는 선택적 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

    {품질: 75, destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.CAMERA, allowEdit: 사실, encodingType: Camera.EncodingType.JPEG, targetWidth: 100, targetHeight: 100, popoverOptions: <a href="CameraPopoverOptions.html">CameraPopoverOptions</a>, saveToPhotoAlbum: false};
    

## 옵션

*   **품질**: 범위 0-100, 100은 <a href="../../file/fileobj/fileobj.html">파일</a> 압축에서 손실 없이 일반적으로 전체 해상도 저장된 된 이미지의 품질. *(수)* (Note <a href="../camera.html">카메라</a>의 해상도 대 한 정보는 사용할 수 없습니다.)

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0, / / base64 인코딩된 문자열로 FILE_URI 이미지를 반환: 1, / / 이미지 <a href="../../file/fileobj/fileobj.html">파일</a> URI NATIVE_URI 반환: 2 / / 반환 이미지 기본 URI (예를 들어, 자산 라이브러리: / / iOS 또는 콘텐츠: / / 안 드 로이드에)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {PHOTOLIBRARY: 0, <a href="../camera.html">카메라</a>: 1, SAVEDPHOTOALBUM: 2};
        

*   **allowEdit**: 선택 하기 전에 이미지의 간단한 편집을 허용 합니다. *(부울)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0, / / 반환 JPEG로 인코딩된 PNG 이미지: 1 / 반환 PNG 이미지 인코딩 /};
        

*   **targetWidth**: 스케일 이미지를 픽셀 너비. **TargetHeight**와 함께 사용 해야 합니다. 가로 세로 비율이 일정 하 게 유지 합니다. *(수)*

*   **targetHeight**: 스케일 이미지를 픽셀 단위로 높이. **TargetWidth**와 함께 사용 해야 합니다. 가로 세로 비율이 일정 하 게 유지 합니다. *(수)*

*   **mediaType**:에서 선택 <a href="../../media/media.html">미디어</a> 유형을 설정 합니다. 때에 작동 `PictureSourceType` 는 `PHOTOLIBRARY` 또는 `SAVEDPHOTOALBUM` . 에 정의 된 `nagivator.camera.MediaType` *(수)* 
    
        Camera.MediaType = {그림: 0, / / 아직 사진만의 선택을 허용 합니다. 기본입니다. DestinationType 비디오를 통해 지정 된 형식을 반환 합니다: 1, / / 동영상만은 항상 반환 FILE_URI ALLMEDIA의 선택을 허용: 2 / / 모든 <a href="../../media/media.html">미디어</a> 유형에 서 선택 허용
        
    
    };

*   **correctOrientation**: <a href="../../media/capture/capture.html">캡처</a> 도중 <a href="../../device/device.html">장치</a>의 방향에 대 한 해결 하기 위해 이미지를 회전 합니다. *(부울)*

*   **saveToPhotoAlbum**: <a href="../../media/capture/capture.html">캡처</a> 후 <a href="../../device/device.html">장치</a>에서 사진 앨범에 이미지를 저장 합니다. *(부울)*

*   **popoverOptions**: iPad에 popover <a href="../../geolocation/Position/position.html">위치</a>를 지정 하는 iOS 전용 옵션. 에 정의 된`<a href="CameraPopoverOptions.html">CameraPopoverOptions</a>`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {다시: 0, / / 앞 뒤 방향 <a href="../camera.html">카메라</a>를 사용: 1 / 전면을 향하는 <a href="../camera.html">카메라</a>를 사용 하 여 /};
        

## 안 드 로이드 단점

*   어떤 `cameraDirection` 다시 <a href="../../connection/connection.html">연결</a> 사진에 결과 값.

*   무시는 `allowEdit` 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

*   `Camera.PictureSourceType.PHOTOLIBRARY`그리고 `Camera.PictureSourceType.SAVEDPHOTOALBUM` 둘 다 동일한 사진 앨범을 표시 합니다.

## 블랙베리 단점

*   무시는 `quality` 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

*   무시는 `sourceType` 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

*   무시는 `allowEdit` 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

*   응용 프로그램 사용자 스냅 사진 후 네이티브 <a href="../camera.html">카메라</a> 응용 프로그램을 닫으려면 키 삽입 권한이 있어야 합니다.

*   큰 이미지 크기를 사용 하 여 이미지를 인코딩하 나중 모델 <a href="../../device/device.html">장치</a> (예를들면, 토치 9800)에 그 기능은 고해상도 <a href="../camera.html">카메라</a> 무 능력에서 발생할 수 있습니다.

*   `Camera.MediaType`지원 되지 않습니다.

*   무시는 `correctOrientation` 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

*   무시는 `cameraDirection` 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

## iOS 단점

*   설정 `quality` 일부 <a href="../../device/device.html">장치</a> 메모리 오류를 피하기 위해 50 아래.

*   사용 하는 경우 `destinationType.FILE_URI` , 사진 응용 프로그램의 임시 디렉터리에 저장 됩니다. 사용 하 여이 디렉터리의 내용을 삭제할 수 있는 `navigator.fileMgr` Api 저장 공간이 중요 한 경우.

## Tizen 특수

*   지원 되지 않는 옵션

*   항상 <a href="../../file/fileobj/fileobj.html">파일</a> URI를 반환 합니다.

## Windows Phone 7, 8 특수

*   무시는 `allowEdit` 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

*   무시는 `correctOrientation` 매개 <a href="../../../plugin_ref/spec.html">변수</a>.

*   무시는 `cameraDirection` 매개 <a href="../../../plugin_ref/spec.html">변수</a>.
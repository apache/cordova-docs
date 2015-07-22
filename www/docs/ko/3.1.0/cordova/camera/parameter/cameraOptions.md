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
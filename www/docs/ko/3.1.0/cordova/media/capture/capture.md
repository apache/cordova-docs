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

# 캡처

> 소자의 오디오, 이미지 및 비디오 캡처 기능에 대 한 액세스를 제공합니다.

**중요 한 개인 정보 보호 참고:** 수집 및 이미지, 비디오 또는 오디오 장치의 카메라 또는 마이크를 사용 하 여 중요 한 개인 정보 보호 문제를 발생 시킵니다. 응용 프로그램의 개인 정보 보호 정책 응용 프로그램 같은 센서를 사용 하는 방법 및 다른 당사자와 함께 기록 된 데이터는 공유 하는 여부를 토론 해야 한다. 또한, 카메라 또는 마이크의 사용 애플 리 케이 션의 사용자 인터페이스에서 명백 하지 않은, 당신의 애플 리 케이 션이 (해당 되는 경우 장치 운영 체제 이렇게 이미 하지 않는) 카메라 또는 마이크에 액세스 하기 전에 그냥--시간 통지를 제공 해야 합니다. 그 통지는 (예를 들어, **확인** 및 **아니오**선택 제시) 하 여 사용자의 허가 취득 뿐만 아니라, 위에서 언급 된 동일한 정보를 제공 해야 합니다. Note 일부 애플 리 케이 션 장 터 저스트-인-타임 공지 및 카메라 또는 마이크에 액세스 하기 전에 사용자에 게 허가를 귀하의 응용 프로그램에 필요할 수 있습니다. 자세한 내용은 개인 정보 보호 가이드를 참조 하십시오.

## 개체

*   캡처
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   ConfigurationData
*   돌아가기
*   MediaFileData

## 메서드

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## 범위

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## 속성

*   **supportedAudioModes**: 오디오 녹음 장치에 의해 지원 되는 형식. (ConfigurationData[])

*   **supportedImageModes**: 기록 이미지 크기 및 장치에서 지원 되는 형식. (ConfigurationData[])

*   **supportedVideoModes**: 녹음 비디오 해상도 및 장치에 의해 지원 되는 형식. (ConfigurationData[])

## 메서드

*   `capture.captureAudio`: 오디오 클립을 기록 하는 장치 오디오 녹음 응용 프로그램을 시작 합니다.

*   `capture.captureImage`: 사진을 찍는 것을 디바이스의 카메라 응용 프로그램을 시작 합니다.

*   `capture.captureVideo`: 비디오 기록 장치의 비디오 레코더 응용 프로그램을 시작.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.media-capture' ]
        $ cordova plugin rm org.apache.cordova.media-capture
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/plugins.xml) < 기능 이름 "캡처" = >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.Capture =" / >< / 기능 > (app/AndroidManifest.xml)에서 < 사용 권한 android:name="android.permission.RECORD_AUDIO" / >< 사용 권한 android:name="android.permission.WRITE_EXTERNAL_STORAGE" / >
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml) < 기능 이름 "캡처" = >< param 이름을 "블랙베리 패키지" value="org.apache.cordova.capture.MediaCapture =" / >< / 기능 > (www/config.xml)에서 < id="blackberry.system 기능" 필수 = "true" 버전 "1.0.0.0" = / >< id="blackberry.io.file 기능" 필수 = "true" 버전 "1.0.0.0" = / >
        

*   (iOS`config.xml`)
    
        < 기능 이름 "캡처" = >< param 이름을 = "ios 패키지" 값 = "CDVCapture" / >< / 기능 >
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.
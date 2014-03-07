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

# 미디어

> `Media`개체를 기록 하 고 장치에서 오디오 파일 재생 기능을 제공 합니다.

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**참고:** 현재 구현 미디어 캡처에 대 한 W3C 사양을 준수 하지 않는 및 편의 위해서만 제공 됩니다. 미래 구현 최신 W3C 사양을 준수 한다 고 현재 Api 사용 중지 될 수 있습니다.

## 매개 변수

*   **src**: 오디오 콘텐츠를 포함 하는 URI. *(DOMString)*

*   **mediaSuccess**: (선택 사항) 후 실행 되는 콜백 한 `Media` 개체 현재 재생, 기록, 또는 중지 작업을 완료 했습니다. *(기능)*

*   **mediaError**: (선택 사항) 오류가 발생 하면 실행 되는 콜백. *(기능)*

*   **mediaStatus**: (선택 사항) 상태 변화를 나타내기 위해 실행 하는 콜백. *(기능)*

## 상수

다음 상수를 유일한 매개 변수로 보고 되는 `mediaStatus` 콜백:

*   `Media.MEDIA_NONE` = 0;
*   `Media.MEDIA_STARTING` = 1;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED` = 3;
*   `Media.MEDIA_STOPPED` = 4;

## 메서드

*   `media.getCurrentPosition`: 오디오 파일 내에서 현재 위치를 반환합니다.

*   `media.getDuration`: 오디오 파일의 기간을 반환합니다.

*   `media.play`: 시작 또는 오디오 파일 재생을 다시 시작 합니다.

*   `media.pause`: 오디오 파일의 재생을 일시 중지 합니다.

*   `media.release`: 기본 운영 체제의 오디오 리소스를 해제합니다.

*   `media.seekTo`: 오디오 파일 내에서 위치를 이동합니다.

*   `media.setVolume`: 오디오 재생 볼륨을 설정 합니다.

*   `media.startRecord`: 오디오 파일을 녹음을 시작 합니다.

*   `media.stopRecord`: 오디오 파일 기록을 중지 합니다.

*   `media.stop`: 오디오 파일 재생을 중지 합니다.

## 추가 읽기 전용 매개 변수

*   **위치**: 위치 오디오 재생 시간 (초).
    
    *   플레이; 하는 동안 자동으로 업데이트 전화 `getCurrentPosition` 를 업데이트 합니다.

*   **기간**: 기간, 매체의 초.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7.5
*   Tizen
*   윈도우 8

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ 코르도바 플러그인 추가 org.apache.cordova.media $ 코르도바 플러그인 ls ['org.apache.cordova.media'] $ 코르도바 플러그인 rm org.apache.cordova.media
     

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.AudioHandler" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.media.MediaCapture" />
        </feature>
        

*   (iOS`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.

### Windows Phone 단점

*   한 번에 하나의 미디어 파일을 다시 재생할 수 있습니다.

*   응용 프로그램 다른 미디어와 상호 작용 하는 방법에 대 한 엄격한 제한이 있다. [자세한 내용은 Microsoft 문서][2] 를 참조 하십시오.

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx
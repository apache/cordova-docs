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

# ConfigurationData

> 장치가 지 원하는 미디어 캡처 매개 변수 집합을 캡슐화 합니다.

## 설명

장치에서 지 원하는 미디어 캡처 모드를 설명 합니다. 구성 데이터는 MIME 유형 및 비디오 또는 이미지 캡처 캡처 크기 포함 됩니다.

MIME 형식 [RFC2046][1]을 준수 해야 합니다. 예:

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `비디오/3gpp`
*   `비디오/퀵타임`
*   `이미지/jpeg`
*   `오디오/amr`
*   `오디오/웨이브`

## 속성

*   **유형**: 미디어 형식을 나타내는 ASCII로 인코딩 소문자 문자열. (DOMString)

*   **높이**: 이미지 또는 비디오 픽셀에서의 높이 있습니다. 사운드 클립에 대 한 0입니다. (수)

*   **폭**: 이미지 또는 비디오 픽셀에서의 너비. 사운드 클립에 대 한 0입니다. (수)

## 빠른 예제

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

모든 플랫폼에서 지원 되지 않습니다. 모든 구성 데이터 배열이 비어 있습니다.
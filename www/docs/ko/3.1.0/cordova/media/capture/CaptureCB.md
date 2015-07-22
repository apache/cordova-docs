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

# CaptureCB

> 성공적인 미디어 캡처 작업에 따라 호출 됩니다.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };
    

## 설명

이 함수는 성공적인 캡처 작업이 완료 된 후 실행 합니다. 미디어 파일을 캡처한이 포인트와 중에 사용자가 미디어 캡처 응용 프로그램 종료 또는 캡처 한계에 도달 했습니다.

각 `MediaFile` 개체 캡처한 미디어 파일에 설명 합니다.

## 빠른 예제

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
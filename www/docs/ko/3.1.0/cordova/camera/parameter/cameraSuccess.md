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

# cameraSuccess

이미지 데이터를 제공 하는 onSuccess 콜백 함수.

    function(imageData) {
        // Do something with the image
    }
    

## 매개 <a href="../../../plugin_ref/spec.html">변수</a>

*   **imageData**: Base64 인코딩은 이미지 데이터, *또는* 이미지 <a href="../../file/fileobj/fileobj.html">파일</a>에 따라 URI의 `<a href="cameraOptions.html">cameraOptions</a>` 적용. *(문자열)*

## 예를 들어

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
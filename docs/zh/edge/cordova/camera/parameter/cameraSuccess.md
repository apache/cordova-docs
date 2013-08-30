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

# cameraSuccess

onSuccess 提供的图像数据的回调函数。

    function(imageData) {
        // Do something with the image
    }
    

## 参数

*   **把图像数据**： Base64 编码的图像数据，*或*图像文件的 URI，取决于 `cameraOptions` 生效。*（字符串）*

## 示例

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
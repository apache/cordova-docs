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

# <a href="CaptureError.html">CaptureError</a>CB

> 如果<a href="../media.html">媒體</a><a href="capture.html">捕獲</a>操作期間發生錯誤，調用。

    function captureError( <a href="CaptureError.html">CaptureError</a> error ) { ... };
    

## 說明

如果發生錯誤時試圖發起一個<a href="../media.html">媒體</a><a href="capture.html">捕獲</a>操作，執行此函數。 故障情形包括<a href="capture.html">捕獲</a>應用程式正忙、 <a href="capture.html">捕獲</a>操作已經發生，或使用者取消該操作之前<a href="capture.html">捕獲</a>任何<a href="../media.html">媒體</a><a href="../../file/fileobj/fileobj.html">檔</a>案時。

此函數執行與 `<a href="CaptureError.html">CaptureError</a>` 物件，其中包含適當的錯誤`code`.

## 快速的示例

    // capture error callback
    var captureError = function(error) {
        navigator.<a href="../../notification/notification.alert.html">notification.alert</a>('Error code: ' + error.code, null, 'Capture Error');
    };
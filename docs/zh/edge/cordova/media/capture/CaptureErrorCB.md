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

# CaptureErrorCB

> 如果媒体捕获操作期间发生错误，调用。

    function captureError( CaptureError error ) { ... };
    

## 说明

如果发生错误时试图发起一个媒体捕获操作，执行此函数。 故障情形包括捕获应用程序正忙、 捕获操作已经发生，或用户取消该操作之前捕获任何媒体文件时。

此函数执行与 `CaptureError` 对象，其中包含适当的错误`code`.

## 快速的示例

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
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

# CaptureVideoOptions

> 封装视频捕获的配置选项。

## 属性

*   **限制**： 该设备的用户可以在单个捕获操作中捕获的视频剪辑的最大数目。值必须是大于或等于 1 （默认为 1）。

*   **持续时间**： 视频剪辑，以秒为单位的最长期限。

## 快速的示例

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## 黑莓 WebWorks 怪癖

*   不支持的**持续时间**参数，所以录制的长度不能以编程方式加以限制。

## iOS 的怪癖

*   **限制**参数不受支持。只有一个视频记录每次调用的。
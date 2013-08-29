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

# CaptureAudioOptions

> 封装的音频捕获的配置选项。

## 属性

*   **限制**： 音频剪辑设备用户可以在单个捕获操作中记录的最大数目。值必须是大于或等于 1 （默认为 1）。

*   **持续时间**： 音频的声音剪辑，以秒为单位的最长期限。

## 快速的示例

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Android 的怪癖

*   `duration`参数不受支持。记录长度不能局限以编程方式。

## 黑莓 WebWorks 怪癖

*   `duration`参数不受支持。记录长度不能局限以编程方式。

## iOS 的怪癖

*   `limit`参数不受支持，所以只有一个记录可以创建的每个调用。
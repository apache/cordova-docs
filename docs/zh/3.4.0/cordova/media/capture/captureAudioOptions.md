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

> 封裝的音訊捕獲的配置選項。

## 屬性

*   **限制**： 音訊剪輯設備使用者可以在單個捕獲操作中記錄的最大數目。值必須是大於或等於 1 （預設為 1）。

*   **持續時間**： 音訊的音效片段，以秒為單位的最長期限。

## 快速的示例

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Android 的怪癖

*   `duration`參數不受支援。記錄長度不能局限以程式設計方式。

## 黑莓 WebWorks 怪癖

*   `duration`參數不受支援。記錄長度不能局限以程式設計方式。

## iOS 的怪癖

*   `limit`參數不受支援，所以只有一個記錄可以創建的每個調用。
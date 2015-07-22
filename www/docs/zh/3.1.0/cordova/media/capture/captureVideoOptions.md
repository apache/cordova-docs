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

> 封裝視頻捕獲的配置選項。

## 屬性

*   **限制**： 該設備的使用者可以在單個捕獲操作中捕獲的視訊短片的最大數目。值必須是大於或等於 1 （預設為 1）。

*   **持續時間**： 視訊短片，以秒為單位的最長期限。

## 快速的示例

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## 黑莓 WebWorks 怪癖

*   不支援的**持續時間**參數，所以錄製的長度不能以程式設計方式加以限制。

## iOS 的怪癖

*   **限制**參數不受支援。只有一個視頻記錄每次調用的。
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

# 配置

> 封裝一組設備支援的媒體捕獲參數。

## 說明

描述設備所支援的媒體捕獲模式。配置資料包含的 MIME 類型和捕獲尺寸的視頻或圖像捕獲。

MIME 類型應堅持[RFC2046][1]。例子：

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `視頻/3gpp`
*   `視頻/quicktime`
*   `圖像/jpeg`
*   `音訊/amr`
*   `音訊/wav`

## 屬性

*   **類型**： ASCII 編碼的小寫字串表示的媒體類型。() DOMString

*   **高度**： 圖像或視頻以圖元為單位的高度。值為零的音效片段。（人數）

*   **寬度**： 圖像或視頻以圖元為單位的寬度。值為零的音效片段。（人數）

## 快速的示例

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
    

不支援任何平臺。所有配置資料陣列都是空的。
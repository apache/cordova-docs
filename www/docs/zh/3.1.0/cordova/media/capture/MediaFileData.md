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

# MediaFileData

> 封裝有關的媒體檔案的格式資訊。

## 屬性

*   **編解碼器**： 實際的音訊和視頻內容的格式。() DOMString

*   **位元速率**： 內容的平均位元速率。值為零的圖像。（人數）

*   **高度**： 圖像或視頻以圖元為單位的高度。值為零的音訊剪輯。（人數）

*   **寬度**： 圖像或視頻以圖元為單位的寬度。值為零的音訊剪輯。（人數）

*   **持續時間**： 以秒為單位的視頻或音效片段的長度。值為零的圖像。（人數）

## 黑莓 WebWorks 怪癖

沒有 API 提供的格式資訊的媒體檔案，所以 `MediaFileData` 物件返回的 `MediaFile.getFormatData` 功能以下預設值：

*   **編解碼器**： 不受支援，並且返回`null`.

*   **位元速率**: 不受支援，並且返回零。

*   **高度**: 不受支援，並且返回零。

*   **寬度**: 不受支援，並且返回零。

*   **持續時間**： 不受支援，並且返回零。

## Android 的怪癖

支援以下 `MediaFileData` 屬性：

*   **編解碼器**： 不受支援，並且返回`null`.

*   **位元速率**: 不受支援，並且返回零。

*   **高度**： 支援： 僅圖像和視頻檔。

*   **寬度**： 支援： 僅圖像和視頻檔。

*   **持續時間**： 支援： 僅音訊和視頻檔。

## iOS 的怪癖

支援以下 `MediaFileData` 屬性：

*   **編解碼器**： 不受支援，並且返回`null`.

*   **位元速率**： 僅音訊 iOS4 設備上受支援。對於圖像和視頻，返回零。

*   **高度**： 支援： 僅圖像和視頻檔。

*   **寬度**： 支援： 僅圖像和視頻檔。

*   **持續時間**： 支援： 僅音訊和視頻檔。
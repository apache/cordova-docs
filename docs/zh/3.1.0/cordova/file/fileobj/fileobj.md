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

# 檔

此物件包含的單個檔的屬性。

## 屬性

*   **名稱**： 檔的名稱。*() DOMString*

*   **完整路徑**： 包括檔案名的檔的完整路徑。*() DOMString*

*   **類型**： 檔的 mime 類型。*() DOMString*

*   **lastModifiedDate**： 上次修改該檔的時間。*（日期）*

*   **大小**： 以位元組為單位的檔案大小。*(長)*

## 方法

*   **切片**: 僅選擇了部分要讀取的檔。

## 詳細資訊

`File`物件包含單個檔的屬性。您可以獲取的實例 `File` 物件通過調用 `FileEntry` 物件的 `file()` 方法。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 切片

返回一個新的 `File` 物件，為其 `FileReader` 返回只有該檔的指定的部分。 負值設置為 `start` 或 `end` 測量從檔的末尾。 相對於當前切片定位的索引。 （請參閱下面的完整示例）。

**參數：**

*   **開始**： 要閱讀，具有包容性的第一個位元組的索引。

*   **結束**: 後最後一個要讀取的位元組的索引。

**快速的示例**

    var slicedFile = file.slice(10, 30);
    

**完整的示例**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**支援的平臺**

*   Android 系統
*   iOS
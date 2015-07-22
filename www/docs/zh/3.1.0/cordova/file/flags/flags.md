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

# 標誌

提供的參數 `DirectoryEntry` 物件的 `getFile()` 和 `getDirectory()` 方法，查找或創建的檔和目錄，分別。

## 屬性

*   **創建**： 指示應創建的檔或目錄，是否它不存在。*（布林）*

*   **獨家**: 已由本身，但與一起使用時不起任何作用 `create` 導致檔或目錄的創建，如果已經存在的目標路徑失敗。*（布林）*

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / 獲取資料目錄，如果它不存在，則創建它。
    dataDir = fileSystem.root.getDirectory （"資料"，{創建: true});/ / 創建鎖定檔，當且僅當它不存在。
    備份的鎖定檔 = dataDir.getFile ("lockfile.txt"，{創建: 真實、 獨家： true}) ；
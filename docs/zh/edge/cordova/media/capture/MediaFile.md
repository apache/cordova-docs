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

# 媒體

> 封裝媒體捕獲檔的屬性。

## 屬性

*   **名稱**： 檔的名稱，不包含路徑資訊。() DOMString

*   **完整路徑**： 檔，包括名稱的完整路徑。() DOMString

*   **類型**： 檔的 mime 類型 (DOMString)

*   **lastModifiedDate**： 日期和檔的上次修改時間。（日期）

*   **大小**： 檔的大小，以位元組為單位。（人數）

## 方法

*   **MediaFile.getFormatData**: 檢索該媒體檔案的格式資訊。
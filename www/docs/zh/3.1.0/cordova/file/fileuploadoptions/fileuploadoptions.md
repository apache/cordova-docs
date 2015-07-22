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

# FileUploadOptions

A `FileUploadOptions` 可以將物件傳遞給 `FileTransfer` 物件的 `upload()` 方法，以指定上載腳本的附加參數。

## 屬性

*   **fileKey**： 表單元素的名稱。預設值為 `file` 。() DOMString

*   **檔案名**： 要保存在伺服器上的檔時使用的檔案名稱。預設值為 `image.jpg` 。() DOMString

*   **mimeType**： 要上傳的資料的 mime 類型。預設值為 `image/jpeg` 。() DOMString

*   **params**： 一組可選的鍵/值對中的 HTTP 要求的傳遞。（物件）

*   **chunkedMode**： 是否要分塊流式處理模式中的資料上載。預設值為 `true` 。(布林值)

*   **標題**： 一張地圖的標頭名稱/標頭值。使用陣列來指定多個值。（物件）

## 說明

A `FileUploadOptions` 可以將物件傳遞給 `FileTransfer` 物件的 `upload()` 方法，以指定上載腳本的附加參數。

## WP7 怪癖

*   **chunkedMode：**： 在 WP7 上可以忽略。
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

# FileTransferError

A `FileTransferError` 物件傳遞到錯誤回檔時出現錯誤。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。（人數）

*   **源**： 源 URI。（字串）

*   **目標**： 向目標 URI。（字串）

*   **HTTP_status**： HTTP 狀態碼。從 HTTP 連接收到一個回應代碼時，此屬性才可用。（人數）

## 常量

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## 說明

`FileTransferError`上傳或下載檔案時出現錯誤時，將物件傳遞到錯誤回檔。
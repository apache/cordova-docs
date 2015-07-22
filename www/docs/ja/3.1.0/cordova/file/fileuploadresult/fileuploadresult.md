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

# FileUploadResult

A `FileUploadResult` オブジェクトの成功時のコールバックに渡される、 `FileTransfer` オブジェクトの `upload()` メソッド。

## プロパティ

*   **bytesSent**: アップロードの一部としてサーバーに送信されたバイト数。（ロング）

*   **記述**: サーバーによって返される HTTP 応答コード。（ロング）

*   **応答**: サーバーによって返される HTTP 応答。（，）

## 説明

`FileUploadResult`の成功時のコールバックを介してオブジェクトが返されます、 `FileTransfer` オブジェクトの `upload()` メソッド。

## iOS の癖

*   サポートしていない `responseCode` または`bytesSent`.
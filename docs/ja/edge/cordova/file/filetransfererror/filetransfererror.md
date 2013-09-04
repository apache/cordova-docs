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

A `FileTransferError` オブジェクトは、エラーが発生エラー コールバックに渡されます。

## プロパティ

*   **コード**: 次のいずれかの定義済みのエラー コード。(数)

*   **ソース**: ソースを URI。(文字列)

*   **ターゲット**: 先の URI。(文字列)

*   **http_status**: HTTP ステータス コード。この属性は、HTTP 接続から応答コードを受信したときにのみ使用できます。(数)

## 定数

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## 説明

`FileTransferError`オブジェクトは、ファイルのダウンロードまたはアップロードするときにエラーが発生エラー コールバックに渡されます。
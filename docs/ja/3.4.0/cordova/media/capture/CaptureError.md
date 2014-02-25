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

# CaptureError

> 失敗したメディア キャプチャ操作からの結果のエラー コードをカプセル化します。

## プロパティ

*   **コード**: 事前定義されたエラー コードのいずれか次のとおりです。

## 定数

*   `CaptureError.CAPTURE_INTERNAL_ERR`: カメラまたはマイクの画像やサウンドをキャプチャに失敗しました。

*   `CaptureError.CAPTURE_APPLICATION_BUSY`： 現在カメラやオーディオのキャプチャのアプリケーション別のキャプチャ要求を提供します。

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`： 無効な API の使用 (例えば、の値 `limit` が 1 未満です)。

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: ユーザーが何かをキャプチャする前にカメラやオーディオのキャプチャ アプリケーションを終了します。

*   `CaptureError.CAPTURE_NOT_SUPPORTED`： 要求されたキャプチャ操作はサポートされていません。
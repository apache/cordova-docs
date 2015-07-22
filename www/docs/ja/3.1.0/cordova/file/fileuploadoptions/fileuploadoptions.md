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

A `FileUploadOptions` オブジェクトに渡すことができます、 `FileTransfer` オブジェクトの `upload()` メソッドをアップロード スクリプトに追加のパラメーターを指定します。

## プロパティ

*   **fileKey**: フォーム要素の名前。既定値は `file` です。（，）

*   **ファイル名**： ファイル名、サーバー上のファイルを保存するときに使用します。既定値は `image.jpg` です。（，）

*   **mime タイプ**: アップロードするデータの mime タイプ。既定値は `image/jpeg` です。（，）

*   **params**: HTTP リクエストに渡すために任意のキー/値ペアのセット。(オブジェクト)

*   **chunkedMode**: チャンク ストリーミング モードでデータをアップロードするかどうか。既定値は `true` です。(ブール値)

*   **ヘッダー**: ヘッダーの名前/ヘッダー値のマップ。1 つ以上の値を指定するには、配列を使用します。(オブジェクト)

## 説明

A `FileUploadOptions` オブジェクトに渡すことができます、 `FileTransfer` オブジェクトの `upload()` メソッドをアップロード スクリプトに追加のパラメーターを指定します。

## WP7 気まぐれ

*   **chunkedMode:**: WP7 では無視されます。
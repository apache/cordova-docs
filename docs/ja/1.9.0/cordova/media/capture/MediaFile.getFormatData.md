---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

MediaFile.getFormatData
=======================

> メディアキャプチャーファイルのフォーマット情報を取得します。

    mediaFile.getFormatData(
        MediaFileDataSuccessCB successCallback,
        [MediaFileDataErrorCB errorCallback]
    );

概要
-----------

この関数は、メディアファイルのフォーマット情報の取得を非同期で試みます。もし成功すれば、 MediaFileData オブジェクトを伴った MediaFileDataSuccessCB コールバック関数を呼び出します。もし失敗すれば、 MediaFileDataErrorCB コールバック関数を呼び出します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

BlackBerry WebWorks に関する注意点
--------------------------
メディアファイルのフォーマット情報を提供する API はありません。従って、全ての MediaFileData オブジェクトはデフォルト値で返されます。詳しくは MediaFileData のドキュメントをご覧ください。

Android に関する注意点
--------------
メディアファイルのフォーマット情報を取得する API は限定されています。従って、全ての MediaFileData のプロパティーがサポートされている訳ではありません。詳しくは MediaFileData のドキュメントをご覧ください。

iOS に関する注意点
----------
メディアファイルのフォーマット情報を取得する API は限定されています。従って、全ての MediaFileData のプロパティーがサポートされている訳ではありません。詳しくは MediaFileData のドキュメントをご覧ください。

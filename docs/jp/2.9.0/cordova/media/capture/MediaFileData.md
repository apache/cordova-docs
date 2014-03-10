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

MediaFileData
=============

> メディアファイルのフォーマット情報をカプセル化します。

プロパティー
----------

- __codecs__: オーディオやビデオの実際のフォーマットを表します。 (DOMString)
- __bitrate__: ファイルの平均ビットレートを表します。画像の場合は、0 に設定されます。 (Number)
- __height__: 画像またはビデオの高さをピクセルで表します。オーディオの場合は、0 に設定されます。 (Number)
- __width__: 画像またはビデオの幅をピクセルで表します。オーディオの場合は、0 に設定されます。 (Number)
- __duration__: ビデオまたはオーディオの長さを秒で表します。画像の場合は、0 に設定されます。 (Number)

BlackBerry WebWorks に関する注意点
--------------------------

メディアファイルのフォーマット情報を提供する API はありません。 `MediaFileData` オブジェクトは、 `MediaFile.getFormatData` 関数によって返され、以下のようなデフォルト値を持ちます:

- __codecs__: サポートされていません。この属性は常に `null` となります。
- __bitrate__: サポートされていません。この属性は常に 0 となります。
- __height__: サポートされていません。この属性は常に 0 となります。
- __width__: サポートされていません。この属性は常に 0 となります。
- __duration__: サポートされていません。この属性は常に 0 となります。

Android に関する注意点
--------------

`MediaFileData` プロパティーへのサポートは以下のとおりです:

- __codecs__: サポートされていません。この属性は常に `null` となります。
- __bitrate__: サポートされていません。この属性は常に 0 となります。
- __height__: サポートされています。 (画像及びビデオに限る) 。
- __width__: サポートされています。 (画像及びビデオに限る) 。
- __duration__: サポートされています。 (オーディオ及びビデオに限る) 。

iOS に関する注意点
----------

`MediaFileData` プロパティーへのサポートは以下のとおりです:

- __codecs__: サポートされていません。この属性は常に `null` となります。
- __bitrate__: iOS4 のデバイスにおいて、オーディオのみサポートされています。この属性は、画像とビデオについては常に 0 となります。
- __height__: サポートされています。 (画像及びビデオに限る) 。
- __width__: サポートされています。 (画像及びビデオに限る) 。
- __duration__: サポートされています。 (オーディオ及びビデオに限る) 。

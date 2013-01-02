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

- __codecs:__ オーディオやビデオの実際のフォーマットを表します。 (DOMString)
- __bitrate:__ ファイルの平均ビットレートを表します。画像の場合は、0に設定されます。 (Number)
- __height:__ 画像またはビデオの高さをピクセルで表します。オーディオの場合は、0に設定されます。 (Number)
- __width:__ 画像またはビデオの幅をピクセルで表します。オーディオの場合は、0に設定されます。 (Number)
- __duration:__ ビデオまたはオーディオの長さを秒で表します。画像の場合は、0に設定されます。 (Number)

BlackBerry WebWorks に関する注意点
--------------------------
メディアファイルのフォーマット情報を提供する API はありません。 MediaFileData オブジェクトは、 MediaFile.getFormatData 関数によって返され、以下のようなデフォルト値を持ちます:

- __codecs:__ サポートされていません。この属性は常に null となります。
- __bitrate:__ サポートされていません。この属性は常に0となります。
- __height:__ サポートされていません。この属性は常に0となります。
- __width:__ サポートされていません。この属性は常に0となります。
- __duration:__ サポートされていません。この属性は常に0となります。

Android に関する注意点
--------------
MediaFileData プロパティーへのサポートは以下のとおりです:

- __codecs:__ サポートされていません。この属性は常に null となります。
- __bitrate:__ サポートされていません。この属性は常に0となります。
- __height:__ サポートされています。 (画像及びビデオに限る) 。
- __width:__ サポートされています。 (画像及びビデオに限る) 。
- __duration:__ サポートされています。 (オーディオ及びビデオに限る) 。

iOS に関する注意点
----------
MediaFileData プロパティーへのサポートは以下のとおりです:

- __codecs:__ サポートされていません。この属性は常に null となります。
- __bitrate:__ iOS4 のデバイスにおいて、オーディオのみサポートされています。この属性は、画像とビデオについては常に0となります。
- __height:__ サポートされています。 (画像及びビデオに限る) 。
- __width:__ サポートされています。 (画像及びビデオに限る) 。
- __duration:__ サポートされています。 (オーディオ及びビデオに限る) 。

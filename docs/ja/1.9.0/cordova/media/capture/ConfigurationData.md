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

ConfigurationData
=================

> デバイスがサポートしているメディアキャプチャーのパラメーターのセットをカプセル化します。

概要
-----------

このオブジェクトは、デバイスによってサポートされているメディアキャプチャーのモードを表すために使われています。設定データは MIME type とビデオまたはイメージキャプチャーのためのサイズ情報を含んでいます。

MIME type は [RFC2046](http://www.ietf.org/rfc/rfc2046.txt) に従っています。 例:

- video/3gpp
- video/quicktime
- image/jpeg
- audio/amr
- audio/wav 

プロパティー
----------

- __type:__ ASCII エンコードされた小文字の文字列でメディアタイプを表します。 (DOMString)
- __height:__ 画像またはビデオの高さをピクセルで表します。 オーディオの場合は、0に設定されます。 (Number)
- __width:__ 画像またはビデオの幅をピクセルで表します。 オーディオの場合は、0に設定されます。 (Number)

使用例
-------------

    // サポートされている画像のモードを取得
    var imageModes = navigator.device.capture.supportedImageModes;

    // 幅が一番高い解像度を持つモードを選択
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }


どのプラットフォームからもサポートされていません。全ての設定データは空となっています。

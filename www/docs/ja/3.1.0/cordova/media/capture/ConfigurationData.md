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

# ConfigurationData

> デバイスがサポートするメディア キャプチャ パラメーターのセットをカプセル化します。

## 説明

デバイスでサポートされているメディアのキャプチャのモードについて説明します。構成データには、MIME の種類、およびビデオやイメージ キャプチャのキャプチャ寸法が含まれます。

MIME の種類は[RFC2046][1]に従う必要があります。例:

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `3 gpp ビデオ/`
*   `ビデオ/quicktime`
*   `イメージ/jpeg`
*   `オーディオ/amr`
*   `オーディオ/wav ファイル`

## プロパティ

*   **タイプ**: 小文字の文字列を ASCII でエンコードされたメディアの種類を表します。（，）

*   **高さ**: イメージまたはビデオのピクセルでの高さ。値は、サウンド クリップの場合は 0 です。(数)

*   **幅**: イメージまたはピクセルのビデオの幅。値は、サウンド クリップの場合は 0 です。(数)

## 簡単な例

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

任意のプラットフォームでサポートされていません。すべての構成データの配列は空です。
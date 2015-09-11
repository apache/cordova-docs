---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

# CaptureAudioOptions

> オーディオ <a href="capture.html">キャプチャ</a>の構成オプションをカプセル化します。

## プロパティ

*   **制限**: <a href="../../device/device.html">デバイス</a> ユーザーは、単一の<a href="capture.html">キャプチャ</a>操作で記録することができますオーディオ クリップの最大数。値 1 (デフォルトは 1) 以上にする必要があります。

*   **期間**: オーディオのサウンド クリップの最大継続時間を秒単位で。

## 簡単な例

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.<a href="captureAudio.html">capture.captureAudio</a>(captureSuccess, captureError, options);
    

## Android の癖

*   `duration`パラメーターはサポートされていません。長さの記録プログラムで限定することはできません。

## ブラックベリー WebWorks 癖

*   `duration`パラメーターはサポートされていません。長さの記録プログラムで限定することはできません。

## iOS の癖

*   `limit`パラメーターはサポートされていません、各呼び出しに対して、1 つだけ記録を作成できます。
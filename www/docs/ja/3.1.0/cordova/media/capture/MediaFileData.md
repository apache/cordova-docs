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

# MediaFileData

> <a href="../media.html">メディア</a> <a href="../../file/fileobj/fileobj.html">ファイル</a>の形式情報をカプセル化します。

## プロパティ

*   **コーデック**： オーディオおよびビデオ コンテンツの実際のフォーマット。（，）

*   **ビットレート**： コンテンツの平均ビットレート。値が画像の場合は 0 です。(数)

*   **高さ**: イメージまたはビデオのピクセルでの高さ。値は、オーディオ クリップの場合は 0 です。(数)

*   **幅**: イメージまたはピクセルのビデオの幅。値は、オーディオ クリップの場合は 0 です。(数)

*   **期間**: 秒のビデオまたはサウンドのクリップの長さ。値が画像の場合は 0 です。(数)

## ブラックベリー WebWorks 癖

<a href="../media.html">メディア</a> <a href="../../file/fileobj/fileobj.html">ファイル</a>の形式情報を提供する API がしないので、 `MediaFileData` によって返されるオブジェクト `<a href="MediaFile.getFormatData.html">MediaFile.getFormatData</a>` 機能次の既定値。

*   **コーデック**： いないサポートしを返します`null`.

*   **ビットレート**： いないサポートし、ゼロを返します。

*   **高さ**: いないサポートし、ゼロを返します。

*   **幅**: いないサポートし、ゼロを返します。

*   **期間**： いないサポートし、ゼロを返します。

## Android の癖

以下がサポート `MediaFileData` プロパティ。

*   **コーデック**： いないサポートしを返します`null`.

*   **ビットレート**： いないサポートし、ゼロを返します。

*   **高さ**: サポート: イメージ <a href="../../file/fileobj/fileobj.html">ファイル</a>やビデオ <a href="../../file/fileobj/fileobj.html">ファイル</a>のみです。

*   **幅**: サポート: イメージ <a href="../../file/fileobj/fileobj.html">ファイル</a>やビデオ <a href="../../file/fileobj/fileobj.html">ファイル</a>のみです。

*   **期間**: サポート: オーディオおよびビデオ <a href="../../file/fileobj/fileobj.html">ファイル</a>のみです。

## iOS の癖

以下がサポート `MediaFileData` プロパティ。

*   **コーデック**： いないサポートしを返します`null`.

*   **ビットレート**： iOS4 オーディオのみの<a href="../../device/device.html">デバイス</a>でサポートされています。画像や動画はゼロを返します。

*   **高さ**: サポート: イメージ <a href="../../file/fileobj/fileobj.html">ファイル</a>やビデオ <a href="../../file/fileobj/fileobj.html">ファイル</a>のみです。

*   **幅**: サポート: イメージ <a href="../../file/fileobj/fileobj.html">ファイル</a>やビデオ <a href="../../file/fileobj/fileobj.html">ファイル</a>のみです。

*   **期間**: サポート: オーディオおよびビデオ <a href="../../file/fileobj/fileobj.html">ファイル</a>のみです。
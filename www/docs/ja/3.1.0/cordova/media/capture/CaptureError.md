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

# CaptureError

> 失敗した<a href="../media.html">メディア</a> <a href="capture.html">キャプチャ</a>操作からの結果のエラー コードをカプセル化します。

## プロパティ

*   **コード**: 事前定義されたエラー コードのいずれか次のとおりです。

## 定数

*   `CaptureError.CAPTURE_INTERNAL_ERR`: <a href="../../camera/camera.html">カメラ</a>またはマイクの画像やサウンドを<a href="capture.html">キャプチャ</a>に失敗しました。

*   `CaptureError.CAPTURE_APPLICATION_BUSY`： 現在<a href="../../camera/camera.html">カメラ</a>やオーディオの<a href="capture.html">キャプチャ</a>のアプリケーション別の<a href="capture.html">キャプチャ</a>要求を提供します。

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`： 無効な API の使用 (例えば、の値 `limit` が 1 未満です)。

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: ユーザーが何かを<a href="capture.html">キャプチャ</a>する前に<a href="../../camera/camera.html">カメラ</a>やオーディオの<a href="capture.html">キャプチャ</a> アプリケーションを終了します。

*   `CaptureError.CAPTURE_NOT_SUPPORTED`： 要求された<a href="capture.html">キャプチャ</a>操作はサポートされていません。
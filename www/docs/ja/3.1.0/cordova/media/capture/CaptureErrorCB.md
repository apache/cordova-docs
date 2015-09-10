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

# <a href="CaptureError.html">CaptureError</a>CB

> <a href="../media.html">メディア</a> <a href="capture.html">キャプチャ</a>操作中にエラーが発生した場合に呼び出されます。

    function captureError( <a href="CaptureError.html">CaptureError</a> error ) { ... };
    

## 説明

この関数でエラーが発生を起動しようとすると、<a href="../media.html">メディア</a>の<a href="capture.html">キャプチャ</a>操作を実行します。 障害シナリオを含めます<a href="capture.html">キャプチャ</a> アプリケーションがビジー状態、<a href="capture.html">キャプチャ</a>操作は既に起こって、または、操作をキャンセルする前に<a href="../media.html">メディア</a> <a href="../../file/fileobj/fileobj.html">ファイル</a>が自動的に<a href="capture.html">キャプチャ</a>されます。

この関数で実行する、 `<a href="CaptureError.html">CaptureError</a>` 、適切なエラーを格納しているオブジェクト`code`.

## 簡単な例

    // capture error callback
    var captureError = function(error) {
        navigator.<a href="../../notification/notification.alert.html">notification.alert</a>('Error code: ' + error.code, null, 'Capture Error');
    };
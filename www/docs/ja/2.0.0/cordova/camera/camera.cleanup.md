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

camera.cleanup
=================

カメラで撮影され、ローカルストレージ temporary ディレクトリに保存された画像ファイルをクリーンアップします。

    navigator.camera.cleanup( <a href="parameter/cameraSuccess.html">cameraSuccess</a>, <a href="parameter/cameraError.html">cameraError</a> );

概要
-----------

`<a href="camera.getPicture.html">camera.getPicture</a>` が `<a href="camera.html">Camera</a>.sourceType = <a href="camera.html">Camera</a>.PictureSourceType.CAMERA` と `<a href="camera.html">Camera</a>.destinationType = <a href="camera.html">Camera</a>.DestinationType.FILE_URI` と一緒に使用されたとき、ローカルストレージ temporary ディレクトリに保存された画像ファイルをクリーンアップします。


サポートされているプラットフォーム
-------------------

- iOS


<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    navigator.camera.cleanup(onSuccess, onFail);

    function onSuccess() {
        console.log("クリーンアップに成功しました。")
    }

    function onFail(message) {
        alert('クリーンアップに失敗: ' + message);
    }

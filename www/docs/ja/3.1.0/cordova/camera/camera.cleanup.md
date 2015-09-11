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

# camera.cleanup

削除中間一時<a href="../storage/storage.html">ストレージ</a>から<a href="camera.html">カメラ</a>で撮影した写真。

    navigator.camera.cleanup( <a href="parameter/cameraSuccess.html">cameraSuccess</a>, <a href="parameter/cameraError.html">cameraError</a> );
    

## 説明

削除を呼び出した後に一時記憶域に保存されている画像<a href="../file/fileobj/fileobj.html">ファイル</a>を中間 `<a href="camera.getPicture.html">camera.getPicture</a>` 。 場合にのみ適用されるの値 `Camera.sourceType` に等しい `Camera.PictureSourceType.CAMERA` と、 `Camera.destinationType` に等しい`Camera.DestinationType.FILE_URI`.

## サポートされているプラットフォーム

*   iOS

## 例

    navigator.camera.cleanup(onSuccess, onFail);
    
    function onSuccess() {
        console.log("Camera cleanup success.")
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
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

CaptureErrorCB
==============

> メディアキャプチャー操作中にエラーが発生した場合に呼び出されます。

    function captureError( CaptureError error ) { ... };

概要
-----------

この関数は、もしメディアキャプチャーアプリを起動しようとして、アプリがビジー状態であってエラーが発生した場合、もしキャプチャー操作実行中にエラーが発生した場合、もしユーザーによってメディアファイルがキャプチャーされる前にキャプチャー操作がキャンセルされた場合などに呼び出されます。

この関数は適切なエラーコードが含まれた CaptureError オブジェクトを伴って呼び出されます。

使用例
-------------

    // capture エラーコールバック関数
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

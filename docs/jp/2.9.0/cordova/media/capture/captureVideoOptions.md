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

CaptureVideoOptions
===================

> ビデオキャプチャーのオプションをカプセル化します。

プロパティー
----------

- __limit__: 一つのキャプチャー操作で録画できるビデオの最大値を表します。値は1以上の必要があります  (デフォルトは1です) 。
- __duration__: ビデオクリップの最大録画時間を秒で表します。

使用例
-------------

    // キャプチャー操作時のビデオクリップの最大値を3に制限
    var options = { limit: 3 };

    navigator.device.capture.captureVideo(captureSuccess, captureError, options);

BlackBerry WebWorks に関する注意点
--------------------------

- __duration__ パラメーターはサポートされていません。 録画時間をプログラム的に制限することは出来ません。

iOS に関する注意点
----------

- __limit__ パラメーターはサポートされていません。1つのキャプチャー操作につき1つのビデオが録画されます。

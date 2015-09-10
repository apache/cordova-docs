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

device.cordova
===============

現在使用している Cordova のバージョン情報を表します。

    var string = device.cordova;

概要
-----------

`device.cordova` は現在実行中の Cordova のバージョン情報を取得します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone
- Windows Phone 7 (Mango)
- Bada 1.2 & 2.x

<a href="../storage/storage.opendatabase.html">使用例</a>
-------------

    var name = device.cordova;

詳細な<a href="../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>デバイスプロパティーの<a href="../storage/storage.opendatabase.html">使用例</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="device.html">Device</a>Ready, false);

        // Cordova 準備完了
        //
        function on<a href="device.html">Device</a>Ready() {
            var element = document.getElementById('deviceProperties');

            element.innerHTML = 'デバイス名: ' + <a href="device.name.html">device.name</a> + '<br />' +
                                'デバイス Cordova: ' + device.cordova + '<br />' +
                                'デバイスプラットフォーム: ' + <a href="device.platform.html">device.platform</a> + '<br />' +
                                'デバイス UUID: ' + <a href="device.uuid.html">device.uuid</a> + '<br />' +
                                'デバイスバージョン: ' + <a href="device.version.html">device.version</a> + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">デバイスプロパティーを読込中...</p>
      </body>
    </html>


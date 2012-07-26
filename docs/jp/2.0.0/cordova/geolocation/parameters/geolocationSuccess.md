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

geolocationSuccess
==================

位置情報取得に成功したとき (`geolocation.getCurrentPosition` と一緒に使われた時) 、または位置情報が変化したとき (`geolocation.watchPosition` と一緒に使われた時) に呼び出されるコールバック関数です。

    function(position) {
        // 任意のコード
    }

パラメーター
----------

- __position:__ デバイスによって返される位置情報を表します (`Position`)

使用例
-------

    function geolocationSuccess(position) {
        alert('緯度: '              + position.coords.latitude          + '\n' +
              '経度: '              + position.coords.longitude         + '\n' +
              '高度: '              + position.coords.altitude          + '\n' +
              '位置精度: '          + position.coords.accuracy          + '\n' +
              '高度精度: '          + position.coords.altitudeAccuracy  + '\n' +
              '方位: '              + position.coords.heading           + '\n' +
              '速度: '              + position.coords.speed             + '\n' +
              'タイムスタンプ: '    + position.timestamp                + '\n');
    }

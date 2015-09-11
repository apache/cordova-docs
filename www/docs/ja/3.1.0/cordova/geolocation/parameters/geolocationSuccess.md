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

# geolocationSuccess

地理<a href="../Position/position.html">位置</a>が利用可能になったときに実行されるユーザーのコールバック関数 (から呼び出されると `<a href="../geolocation.getCurrentPosition.html">geolocation.getCurrentPosition</a>` ）、（から呼び出されたときに、<a href="../Position/position.html">位置</a>が変更されたとき、または`<a href="../geolocation.watchPosition.html">geolocation.watchPosition</a>`).

    function(position) {
        // Do something
    }
    

## パラメーター

*   **<a href="../Position/position.html">位置</a>**: <a href="../../device/device.html">デバイス</a>によって返される地理<a href="../Position/position.html">位置</a>。*（<a href="../Position/position.html">位置</a>）*

## 例

    function geolocationSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }
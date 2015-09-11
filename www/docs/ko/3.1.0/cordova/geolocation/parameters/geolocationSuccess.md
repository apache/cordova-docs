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

<a href="../geolocation.html">지리적 <a href="../Position/position.html">위치</a></a> 사용할 수 있을 때 실행 되는 사용자의 콜백 함수 (에서 호출할 때 `<a href="../geolocation.getCurrentPosition.html">geolocation.getCurrentPosition</a>` ), 또는 (에서 호출할 때 <a href="../Position/position.html">위치</a> 변경 하는 경우`<a href="../geolocation.watchPosition.html">geolocation.watchPosition</a>`).

    function(position) {
        // Do something
    }
    

## 매개 <a href="../../../plugin_ref/spec.html">변수</a>

*   **<a href="../Position/position.html">위치</a>**: <a href="../../device/device.html">장치</a>에 의해 반환 된 <a href="../geolocation.html">지리적 <a href="../Position/position.html">위치</a></a>. *(<a href="../Position/position.html">위치</a>)*

## 예를 들어

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
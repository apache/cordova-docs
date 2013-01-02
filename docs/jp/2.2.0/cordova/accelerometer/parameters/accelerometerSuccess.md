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

accelerometerSuccess
====================

加速度情報を返す onSuccess コールバック関数です。

    function(acceleration) {
        // 任意のコード
    }

パラメーター
----------

- __acceleration:__ ある瞬間における加速度を表します。 (Acceleration)

使用例
-------

    function onSuccess(acceleration) {
        alert('X 軸における加速度: ' + acceleration.x + '\n' +
              'Y 軸における加速度: ' + acceleration.y + '\n' +
              'Z 軸における加速度: ' + acceleration.z + '\n' +
              'タイムスタンプ: '     + acceleration.timestamp + '\n');
    };

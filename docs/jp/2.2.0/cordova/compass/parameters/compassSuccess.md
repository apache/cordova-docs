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

compassSuccess
==============

コンパス方位の取得に成功したときに、 compassHeading オブジェクトを用いてコンパス方位情報を提供するコールバック関数です。

    function(heading) {
        // 任意のコード
    }

パラメーター
----------


- __heading:__ 方位情報。 _(compassHeading)_

使用例
-------

    function onSuccess(heading) {
        alert('現在の方位: ' + heading.magneticHeading);
    };

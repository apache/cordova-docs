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

compassOptions
==============

コンパス取得の設定をカスタマイズするためのパラメーターを表します。

オプション
-------

- __frequency:__ コンパスの向きを取得する頻度をミリ秒で表します。 _(Number)_ (デフォルト: 100)
- __filter:__ watchHeading の成功時のコールバック関数を初期化する際に必要な、角度の変化量を表します。 _(Number)_

Android に関する注意点
--------------

- filter はサポートされていません。

Windows Phone 7 に関する注意点
--------------

- filter はサポートされていません。

Bada に関する注意点
-----------

- filter はサポートされていません。

Tizen に関する注意点
-----------

- filter はサポートされていません。

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

reachableCallback
=================

ホストネームの接続可否状況を提供するコールバック関数です。

    function reachableCallback(reachability) {
        // ネットワークの接続可否をチェック
    }

パラメータ
----------

- __reachability:__ デバイスのネットワーク状況です。 (`NetworkStatus`)
    - 各プラットフォーム間での`reachability`のフォーマットに関しての一貫性が今のところないのが現状です。
	下記のプラットフォームに関する注意点を参照してください。

詳細
-----------
このコールバック関数は `NetworkStatus` のコンスタントである引数、 `reachability` のみを受け入れます。


使用例
-------

    function reachableCallback(reachability) {
        // 現状では各プラットフォーム間での reachability のフォーマットに関しての一貫性はありません
        var networkState = reachability.code || reachability;
    
        var states = {};
        states[NetworkStatus.NOT_REACHABLE]                      = '接続可能なネットワークが見つかりません';
        states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'データ接続';
        states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi接続';

        alert('接続の形式: ' + states[networkState]);
    }

BlackBerry に関する注意点
-----------------

　`reachability`　の値としてネットワークの状態を返します。

    function reachableCallback(reachability) {
        var hasConnection = (reachability !== NetworkStatus.NOT_REACHABLE);
    }

iPhone に関する注意点
-------------

iPhone上での実装は接続形式の情報のみを提供します。 ホストへ接続が可能かどうかは認証しません。
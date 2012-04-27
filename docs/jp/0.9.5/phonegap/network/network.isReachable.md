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

network.isReachable
===================

特定のドメインに対して接続の可否を確かめます。

    network.isReachable(reachableHostname, reachableCallback, [reachableOptions])

概要
-----------

このメソッドはデバイスのネットワークへの接続状況や接続の形式などの情報を調べるために必要です。 
`network.isReachable` は非同期関数なので、ネットワークの状態はコールバック関数から返されます。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    function reachableCallback(reachability) {
        // 現状では各プラットフォーム間でのreachabilityのフォーマットに関しての一貫性はありません
        var networkState = reachability.code || reachability;
        
        var states = {};
        states[NetworkStatus.NOT_REACHABLE]                      = '接続可能なネットワークが見つかりません';
        states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'データ接続';
        states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi接続';
    
        alert('接続の形式: ' + states[networkState]);
    }
    
    navigator.network.isReachable('phonegap.com', reachableCallback);


詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>isReachable の使用例</title>
        
        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">
            
        // PhoneGapの読み込みを待機
        // 
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
        
        // PhoneGapの準備が完了し、この時点から安全にPhoneGapのメソッドが利用できます。
        //
        function onDeviceReady() {
            navigator.network.isReachable("phonegap.com", reachableCallback, {});
        }
        
        // ネットワークの状態をチェック
        //
        function reachableCallback(reachability) {
            // 現状では各プラットフォーム間でのreachabilityのフォーマットに関しての一貫性はありません
            var networkState = reachability.code || reachability;
            
            var states = {};
            states[NetworkStatus.NOT_REACHABLE]                      = '接続可能なネットワークが見つかりません';
            states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'データ接続';
            states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi接続';
            
            alert('接続の形式: ' + states[networkState]);
        }
        
        </script>
      </head>
      <body onload="onLoad()">
        <p>ダイアログボックスにネットワークの状態が表示されます。</p>
      </body>
    </html>
<!---
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
-->

# org.apache.cordova.vibration

このプラグインを使用して、デバイスを振動させることができます。

## インストール

    cordova plugin add org.apache.cordova.vibration

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 と 8

## notification.vibrate

指定した時間の長さで、デバイスの振動を行います。

    navigator.notification.vibrate(time)

- __time__: ミリ秒単位で示す、デバイスの振動時間 _(Number)_


## 例

    // 2.5 秒間、振動する
    navigator.notification.vibrate(2500);


## iOS 特有の動作

- __time__: 指定した時間を無視して、事前に設定された時間を使用して、振動します。

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 を無視します

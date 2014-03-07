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

Media
=====

> `Media` オブジェクトは、デバイス上でのオーディオファイルの再生や録音などといった機能をサポートします。

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);


注意: 現在の実装はメディアキャプチャーに関する W3C の仕様を満たしていません。利便性のためだけに提供されています。将来的には最新の W3C の仕様に合わせるとともに、現在の API を廃止することも検討されています。

パラメーター
----------

- __src__: オーディオコンテンツを示す URI を表します _(DOMString)_
- __mediaSuccess__: (オプション) Media オブジェクトが再生、録音、停止などのアクションを完了したときに呼ばれるコールバック関数を表します _(Function)_
- __mediaError__: (オプション) エラー発生時に呼ばれるコールバック関数を表します _(Function)_
- __mediaStatus__: (オプション) ステータスが変わったときに呼ばれるコールバック関数を表します _(Function)_

メソッド
-------

- media.getCurrentPosition: オーディオファイル内の現在の再生位置を返します
- media.getDuration: オーディオファイルの再生時間を返します
- media.play: オーディオファイルを再生または再開します
- media.pause: オーディオファイルを一時停止します
- media.release: OS のオーディオリソースを開放します
- media.seekTo: オーディオファイル中の再生位置を動かします
- media.startRecord: オーディオファイルの録音を開始します
- media.stopRecord: オーディオファイルの録音を停止します
- media.stop: オーディオファイルを停止します

追加の読み取り専用パラメーター
---------------------

- ___position__: 再生位置を秒単位で表します。 再生中は自動的に値が更新されないので、 getCurrentPosition メソッドを呼び、値を更新します
- ___duration__: メディアの再生時間を秒単位で表します

サポートされているプラットフォーム
-------------------

- Android
- iOS
- Windows Phone 7 (Mango)


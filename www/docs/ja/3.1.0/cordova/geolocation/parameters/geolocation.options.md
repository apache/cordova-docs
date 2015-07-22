---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# geolocationOptions

地理位置情報の検索をカスタマイズするための省略可能なパラメーター`Position`.

    {maximumAge: 3000、タイムアウト: 5000、enableHighAccuracy: true};
    

## オプション

*   **enableHighAccuracy**： 最高の結果が、アプリケーションに必要があることのヒントを示します。 既定では、デバイスの取得を試みます、 `Position` ネットワーク ベースのメソッドを使用します。 このプロパティを設定する `true` 衛星測位などのより正確な方法を使用するためにフレームワークに指示します。 *(ブール値)*

*   **タイムアウト**: への呼び出しから通過が許可される時間 (ミリ秒単位) の最大長 `geolocation.getCurrentPosition` または `geolocation.watchPosition` まで対応する、 `geolocationSuccess` コールバックを実行します。 場合は、 `geolocationSuccess` この時間内に、コールバックは呼び出されません、 `geolocationError` コールバックに渡される、 `PositionError.TIMEOUT` のエラー コード。 (と組み合わせて使用するときに注意してください `geolocation.watchPosition` の `geolocationError` 間隔でコールバックを呼び出すことができますすべて `timeout` ミリ秒 ！)*(数)*

*   **maximumAge**： 年齢があるミリ秒単位で指定した時間よりも大きくないキャッシュされた位置を受け入れます。*(数)*

## Android の癖

限り android 2.x エミュレーター地理位置情報の結果を返さない、 `enableHighAccuracy` オプションを設定します。`true`.
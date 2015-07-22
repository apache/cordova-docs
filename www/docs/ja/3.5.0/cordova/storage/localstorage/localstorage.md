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

# localStorage

W3C の[Web ストレージ インターフェイス][1]へのアクセスを提供します

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## メソッド

*   **キー**: 指定した位置にキーの名前を返します。

*   **getItem**: 指定されたキーで識別される項目を返します。

*   **setItem**: キーを持つ項目の値を割り当てます。

*   **removeItem**: 指定されたキーで識別される項目を削除します。

*   **オフ**: すべてのキー/値ペアを削除します。

## 詳細

`window.localStorage`、W3C の[Web ストレージ インターフェイス][2]が実装するインターフェイス。 アプリを使用するキーと値のペアを使用して永続的なデータを保存できます。 `window.sessionStorage`インターフェイスのすべてのデータは、アプリを閉じるたびにクリアされることを除いてあらゆる点で同じように動作します。 各データベースは、別の名前空間を提供します。

 [2]: http://dev.w3.org/html5/webstorage/

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 6.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8

## キーの簡単な例

    var keyName = window.localStorage.key(0);
    

## 設定項目の簡単な例

    window.localStorage.setItem("key", "value");
    

## アイテムの簡単な例を得る

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## 削除する項目の簡単な例

        window.localStorage.removeItem("key");
    

## オフに簡単な例

        window.localStorage.clear();
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // keyname is now equal to "key"
            var value = window.localStorage.getItem("key");
            // value is now equal to "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage is now empty
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>
    

## Windows Phone 7 の癖

ドット表記では*ない*Windows Phone 7 で利用可能です。 使用してください `setItem` または `getItem` など、ストレージ オブジェクトから直接キーにアクセスするのではなく`window.localStorage.someKey`.
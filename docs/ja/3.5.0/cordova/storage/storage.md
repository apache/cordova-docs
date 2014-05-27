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

# ストレージ

> コルドバの記憶域オプションの概要です。

いくつかのストレージ Api は、コルドバのアプリケーションで使用できます。[Html5rocks][1]を参照してください。完全な概要と例。

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

*Web ストレージ*、*シンプルなストレージ*、またはその代替*セッション ストレージ*インターフェイスによってまた知られている、この API 同期キー/値ペアの記憶域を提供し、WebView の基になる実装で利用可能です。 詳細については[、W3C 仕様][2]を参照してください。

 [2]: http://www.w3.org/TR/webstorage/

**Windows Phone 7 気まぐれ**: ドット表記は*いない*利用可能な必ずを使用 `setItem` または `getItem` としてのストレージ オブジェクトから直接キーにアクセスするのではなく`window.localStorage.someKey`.

## WebSQL

この API は、基になる web ビューで利用可能です。 [Web SQL データベースの仕様][3]では、SQL クエリを通じてより多くのフル機能を備えたデータベース テーブルにアクセスを提供しています。

 [3]: http://dev.w3.org/html5/webdatabase/

次のプラットフォームをサポートして WebSQL：

*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Tizen

## IndexedDB

この API は、基になる web ビューで利用可能です。[Indexeddb][4]は LocalStorage より多くの機能よりも少ない WebSQL を提供しています。

 [4]: http://www.w3.org/TR/IndexedDB/

次のプラットフォームでは、IndexedDB をサポートします。

*   Windows Phone 8
*   ブラックベリー 10

## プラグイン ベースのオプション

Api が上記保存だけでなく、[ファイル API][5]できますローカル ファイル システム上のデータをキャッシュします。 [コルドバのプラグイン][6]の他の同様のストレージ オプションを提供します。

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/
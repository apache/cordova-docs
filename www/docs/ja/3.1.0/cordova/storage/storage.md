---
license: >
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

title: ストレージ
---

# ストレージ

> デバイスの記憶域オプションへのアクセスを提供します。

この API は 2 つの異なる W3C 仕様に基づくストレージ オプションを提供：

*   [Web ストレージ API 仕様][1]では、単純なキーと値のペアを使用してデータにアクセスすることができます。 LocalStorage このインターフェイスの詳細についてを参照してください。

*   [Web SQL データベースの仕様][2]では、SQL クエリを通じてより多くのフル機能を備えたデータベース テーブルにアクセスを提供しています。 このインタ フェースの概要下にすぐに表示されます。

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

コルドバは既にそれらをサポートしていないデバイスの少数派の両方のインターフェイスへのアクセスを提供します。それ以外の場合、組み込みの実装を適用します。

## メソッド

*   [openDatabase](storage.opendatabase.html)

## 引数

*   [database_name](parameters/name.html)
*   [database_version](parameters/version.html)
*   [database_displayname](parameters/display_name.html)
*   [database_size](parameters/size.html)

## オブジェクト

*   [データベース](database/database.html)
*   [SQLTransaction](sqltransaction/sqltransaction.html)
*   [SQLResultSet](sqlresultset/sqlresultset.html)
*   [SQLResultSetRowList](sqlresultsetrowlist/sqlresultsetrowlist.html)
*   Sqlerror 関数

## 機能へのアクセス

バージョン 3.0 は、現在ストレージ Api へのアクセスはコルドバに組み込まれてし、プラグインを追加するコマンド ライン インターフェイスでの説明に従って、CLI の使用を必要としません。

それ以上の年齢の一連の CLI に先行するコルドバ ツールを使用している場合、次のプラットフォームに固有の構成設定がまだ必要です。

*   （アンドロイド`app/res/xml/config.xml`)
    
        < 機能名 =「記憶域」>< param の名前 =「android パッケージ」value="org.apache.cordova.Storage"/></機能 >
        

*   （ブラックベリー WebWorks`www/config.xml`)
    
        < id="blackberry.widgetcache 機能"必要な ="true"バージョン =「1.0.0.0」/>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。
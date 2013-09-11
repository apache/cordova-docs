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

Getting Started with Symbian
============================

このガイドは、 Cordova のための開発環境セットアップ方法、またシンプルなアプリの動かし方を解説します。 Cordova は以前は PhoneGap と呼ばれていたため、いくつかのサイトは PhoneGap という名前をまだ使用しています。

ビデオチュートリアル:
----------------

- [Cordova Installer - Xcode 4 Template](http://www.youtube.com/v/R9zktJUN7AI?autoplay=1)


1. 必要なもの
---------------

- Windows, OS X, または Linux

他に [QT for Symbian](http://wiki.phonegap.com/w/page/16494811/PhoneGap-Symbian-%28Qt%29) や [Symbian with Sony Ericsson](http://wiki.phonegap.com/w/page/16494782/Getting-Started-with-PhoneGap-Symbian-(WRT-on-Sony-Ericsson)) といったガイドもあります。


2. SDK と Cordova のインストール
-------------------------

- [cygwin](http://www.cygwin.com/setup.exe) をダウンロードし、インストールします (Windows のみ) 。デフォルトでは選択されていませんが、 "make" を選択してください
- [Cordova](http://phonegap.com/download) の最新版をダウンロードし解凍します。これから Android ディレクトリと一緒に作業を進めます


3. 新規プロジェクトの作成
--------------------

- cygwin で、 Cordova を解凍したディレクトリまで移動し、 Symbian ディレクトリに移動します


4. Hello World の作成
--------------

- phonegap/symbian/framework/www にある index.html を好きなエディタで開きます
- `body` タグの中にある `"Build your phonegap app here! Dude!"` を削除し、 `<h1>Hello World</h1>` を追加します
- cygwin または terminal で、 make を実行します。これにより、 phonegap-symbian.wrt と app.wgz が作られます


5A. シミュレーターへのデプロイ
-----------------------

- Mac もしくは Linux には、 [Aptana Studio](http://www.aptana.org/products/studio2/download) と [Nokia WRT Plug-in for Aptana Studio](http://www.forum.nokia.com/info/sw.nokia.com/id/00d62bd8-4214-4c86-b608-5f11b94dad54/Nokia_WRT_Plug_in_for_Aptana_Studio.html) をインストールする必要があります。これは、ブラウザベースの JavaScript エミュレーターを持っています
- Windows は、S60 エミュレーターを持つ [S60 SDK](http://www.forum.nokia.com/info/sw.nokia.com/id/ec866fab-4b76-49f6-b5a5-af0631419e9c/S60_All_in_One_SDKs.html) をダウンロードします
- エミュレーターに phonegap-symbian.wrt と app.wgz をロードします


5B. デバイスへのデプロイ
--------------------

- phonegap-symbian.wrt と app.wgz を bluetooth または email を使ってデバイスにロードします


終了
-----

さらに詳しいガイドは [ここ](http://wiki.phonegap.com/w/page/16494780/Getting-Started-with-Phonegap-Nokia-WRT) で確認できます。


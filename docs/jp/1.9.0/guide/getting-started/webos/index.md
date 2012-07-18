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

Getting Started with WebOS
==========================

このガイドは、 Cordova のための開発環境セットアップ方法、またシンプルなアプリの動かし方を解説します。 Cordova は以前は PhoneGap と呼ばれていたため、いくつかのサイトは PhoneGap という名前をまだ使用しています。

ビデオチュートリアル:
----------------

- [Cordova and HP Palm webOS quick start video](http://www.youtube.com/v/XEnAUbDRZfw?autoplay=1)
- [How to convert iPhone app to a Palm](http://www.youtube.com/v/wWoJfQw79XI?autoplay=1)


1. 必要なもの
---------------

- Windows, OS X, または Linux


2. SDK と Cordova のインストール
----------------------------

- [Virtual Box](http://www.virtualbox.org/) のダウンロードとインストール
- [WebOS SDK](http://developer.palm.com/index.php?option=com_content&view=article&layout=page&id=1788&Itemid=321/) のダウンロードとインストール
- [cygwin SDK](http://developer.palm.com/index.php?option=com_content&amp;view=article&amp;layout=page&amp;id=1788&amp;Itemid=321) のダウンロードとインストール (Windows のみ) 。デフォルトでは選択されていませんが、 "make" を選択してください
- [Cordova](http://phonegap.com/download) の最新版をダウンロードし解凍します。 これから webOS ディレクトリと一緒に作業を進めます。
- [Mac App Store](http://itunes.apple.com/ca/app/xcode/id497799835?mt=12) のダウンロードとインストール (OSC のみ)
- Command Line Tools for XCode のダウンロードとインストール (OSX のみ) 。 XCode の Preferences -> Downloads -> Components から、 Command Line Tools の install をクリックすることでインストールできます


3. 新規プロジェクトの作成
--------------------

- ターミナルまたは cygwin を開き、 Cordova を解凍したフォルダーまで移動します。 webOS ディレクトリに移動します。

4. Hello World の作成
--------------

phonegap/webOS/framework/www の中の index.html を好きなエディタで開きます。 body タグの後に `<h1>Hello World</h1>` を追加します


5A. シミュレーターへのデプロイ
-----------------------

- アプリケーションフォルダーまたはスタートメニューからPlam エミュレーターを起動します
- webOS ディレクトリ内で、ターミナルまたは cygwin で make を実行します


5B. デバイスへのデプロイ
--------------------

- デバイスが [デベロッパーモードになっており、また接続されている](http://developer.palm.com/index.php?option=com_content&amp;view=article&amp;id=1552&amp;Itemid=59#dev_mode) ことを確認します
- webOS ディレクトリ内で、ターミナルまたは cygwin で make を実行します


終了
-----

さらに詳しいガイドは [ここ](http://wiki.phonegap.com/w/page/16494781/Getting-Started-with-PhoneGap-webOS) で確認できます。


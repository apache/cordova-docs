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

Getting Started with Blackberry
============================

Cordova for BlackBerry は [BlackBerry WebWorks framework](https://bdsc.webapps.blackberry.com/html5) を使用して作られています。 BlackBerry WebWorks ツールは Windows または Mac にて使用可能です。 WebWorks アプリケーションは OS 5.0以上の BlackBerry デバイスまたは BlackBerry PlayBook OS にのみデプロイ可能です。

1. 必要なもの
---------------

- Windows XP (32-bit) またはWindows 7 (32-bit and 64-bit) または Mac OSX 10.6.4以上
- Java Development Kit (JDK)
    - Windows: [Oracle JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk) (32-Bit Version)
    - Mac OS X: Mac OS X 10.7より前については、 Java はデフォルトで提供されています。 OS X 10.7以上については、 [Java](http://support.apple.com/kb/DL1421) のインストールが必要です
- Apache Ant
    - Windows: [Apache Ant](http://ant.apache.org/bindownload.cgi)
    - Mac OS X: Apache Ant は Java と一緒にインストールされます

2. SDK と Cordova のインストール
-------------------------

- PlayBook の開発には [Adobe Air SDK](http://www.adobe.com/devnet/air/air-sdk-download.html) が必要です
- 1つ以上の WebWorks SDK をダウンロード、インストールします。 インストールしたディレクトリを覚えておいてください。
    - スマートフォンの開発: [BlackBerry WebWorks Smartphone SDK](https://bdsc.webapps.blackberry.com/html5/download/sdk)
    - PlayBook の開発: [BlackBerry WebWorks Tablet OS SDK](https://bdsc.webapps.blackberry.com/html5/download/sdk)
- [Cordova](http://phonegap.com/download) の最新版をダウンロードし解凍します。

3. 新規プロジェクトの作成
--------------------

- コマンドプロンプトまたはターミナルをひらいて、 Cordova をダウンロード、解凍したディレクトリまで移動します。
- そのディレクトリには、 Cordova がサポートするプラットフォームごとにさらにディレクトリがあります。 blackberry のディレクトリに移動します。
- blackberry のディレクトリには、 `sample` と `www` の2つのディレクトリがあります。 `sample` フォルダーには、完成した Cordova プロジェクトが入っています。 `sample` フォルダーをコンピュータ内の別の場所にコピーします。
- コピーしたフォルダーに移動します。
- project.properties ファイルをあなたの好きなエディタで開き、 `blackberry.bbwp.dir=` および／または `playbook.bbwp.dir=` の部分を編集します。 値には、先ほどインストールした WebWorks SDK の中の `bbwp` バイナリファイルの位置をセットします。

4. Hello World の作成
--------------

サンプルプロジェクトのディレクトリ内でコマンドプロンプトまたはターミナルで `ant target build` とタイプすることで、サンプルプロジェクトをビルドします。ここで、 `target` は `blackberry` か `playbook` に置き換えてください。これは Cordova のサンプルプロジェクトで、普通の Hello World アプリではないことに注意してください。 www フォルダーにある index.html は多くの Cordova API の使用例を含みます。

5A. シミュレーターへのデプロイ
--------------------------------------

BlackBerry スマートフォンシミュレーターは Windows でのみ利用可能です。 PlayBook シミュレーターは VMWare Player (Windows) または VMWare Fusion (Mac OS X) を必要とします。 WebWorks SDK はデフォルトのシミュレーターを提供しています。追加のシミュレーターも [入手可能](http://us.blackberry.com/developers/resources/simulators.jsp) です。

- project.properties ファイルをお好きなエディタで開き、以下のプロパティーをカスタマイズします。
    - スマートフォン (オプション)
        - `blackberry.sim.dir` : シミュレーターのあるディレクトリへのパスを表します。 Windows では、ファイルセパレーターの '\' は '\\\' でエスケープされている必要があります。
        - `blackberry.sim.bin` : 指定されたシミュレーターのディレクトリ内で、実行したいシミュレーターの名前を表します。
    - Playbook
        - `playbook.sim.ip` : シミュレーターのセキュリティ設定でデベロッパーモードにした場合の、取得する IP アドレスを表します。
        - `playbook.sim.password` : シミュレーターのセキュリティ設定で設定できるシミュレータのパスワードを表します。
- プロジェクトのディレクトリにいるときは、コマンドプロンプトまたはターミナルで `ant target load-simulator` とタイプしてください。 ここで、 `target` は `blackberry` か `playbook` に置き換えてください。 PlayBook では、シミュレーターのバーチャルイメージは既にスタートしている必要があることに注意してください。
- アプリケーションは、シミュレーター内の All Applications セクションにインストールされます。 BlackBerry OS 5 ではアプリケーションは Download フォルダーにインストールされることに注意してください。

5B. デバイスへのデプロイ (Windows and Mac)
--------------------------------------

- デバイスへのデプロイは、 RIM から取得できる signing keys が必要です。
    - signing keys のリクエストのため、この [フォーム](https://bdsc.webapps.blackberry.com/html5/signingkey) に記入し提出してください。
    - signing keys を受け取ったら、それらをインストールします:
        - [Setup Smartphone Signing keys](https://bdsc.webapps.blackberry.com/html5/documentation/ww_publishing/signing_setup_smartphone_apps_1920010_11.html)
        - [Setup Tablet Signing keys](https://bdsc.webapps.blackberry.com/html5/documentation/ww_publishing/signing_setup_tablet_apps_1920009_11.html)
- サインされたアプリケーションを USB 接続されたスマートフォンデバイスにインストールするために、 [BlackBerry Desktop Sofware](http://us.blackberry.com/apps-software/desktop/) をインストールします。
- project.properties ファイルをお好きなエディタで開き、以下のプロパティーをカスタマイズします:
    - スマートフォン (オプション)
        - `blackberry.sigtool.password` : signing keys が登録されたときに使われるパスワードを表します。 もし指定されていない場合は、プロンプトにより入力が促されます。
    - Playbook (必須)
        - `playbook.sigtool.csk.password` : Signing key のパスワードを表します。
        - `playbook.sigtool.p12.password` : Signing key のパスワードを表します。
        - `playbook.device.ip` : デバイスのセキュリティ設定でデベロッパーモードにした場合の、取得する IP アドレスを表します。
        - `playbook.device.password` : デバイスのセキュリティ設定で設定できるデバイスのパスワードを表します。
- プロジェクトのディレクトリにいるときは、コマンドプロンプトまたはターミナルで `ant target load-device` とタイプしてください。ここで、 `target` は `blackberry` か `playbook` に置き換えてください。
- アプリケーションは、デバイス内の All Applications セクションにインストールされます。 BlackBerry OS 5 ではアプリケーションは Download フォルダーにインストールされることに注意してください。

追加の情報
----------------------

以下の記事は、 BlackBerry WebWorks framework を使って Cordova アプリケーションを開発するときに役立ちます。

- [BlackBerry WebWorks Development Pitfalls](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712)
- [Best practices for packaging WebWorks applications](https://bdsc.webapps.blackberry.com/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html)


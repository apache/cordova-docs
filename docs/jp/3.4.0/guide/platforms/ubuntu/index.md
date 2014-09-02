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

# Ubuntu プラットフォームに関する解説

## イニシャルリリース ( 初版リリース / Initial Release )

Ubuntu プラットフォームをサポートする、イニシャルリリースとなります。ここでは、Ubuntu 上でのアプリ構築と Web プロジェクト開発手順に従った作業を行います。手順には、プロジェクトへの Ubuntu プラットフォームの追加、Cordova 標準プラグインの追加、Ubuntu プラットフォーム用アプリのビルド・実行まで含まれています。

### Ubuntu SDK

Ubuntu QtCreator 開発環境をインストールすることができます。詳細に関しては、 [developer.ubuntu.com](http://developer.ubuntu.com) をご確認ください ( QtCreator SDK のインストールは、任意です。必要であれば追加してください。 )。

### Ubuntu ランタイム プラットフォーム ( Runtime Platform )

Ubuntu は、そのデスクトップ環境の利便性により、広く認知されるようになりました ( laptop、PC など )。
Ubuntu Touch は、スマートフォンとタブレット上で Ubuntu OS が動作するよう、拡張を行ったものです。
Ubuntu ランタイム プラットフォーム ( runtime
platform ) は、複数の異なる CPU アーキテクチャ ( x86、armhf など ) をサポートしています。よって、アプリとプラグインコードは、適宜、コンパイルする必要があります。この分野のサポートは、Ubuntu 側でも急速に進化・改変しています。

### 最新情報

Ubuntu ランタイム プラットフォーム上における、Cordova アプリのサポートに関しての最新情報は、 [wiki.ubuntu.com/Cordova](http://wiki.ubuntu.com/Cordova) をご確認ください。

## 開発プラットフォームに関する必要事項

イニシャルリリースにおいては、開発対象のプラットフォームは、Ubuntu デスクトップのいずれかとなります。サポートされている機能のすべてを使用するには、
Ubuntu 13.10 ( コード名 「 ‘saucy’ 」 ) 以降のバージョンが必要です。

非公式の Ubuntu システムに、npm を使用して、Cordova をインストールすることもできます。ただし、Ubuntu 用 Debian パッケージ群経由で現在提供されている、重要な機能は使用できません。

## Cordova のインストール

Ubuntu Cordova 
[Personal Package Archive ( PPA )](https://launchpad.net/~cordova-ubuntu/+archive/ppa) を、開発者の Ubuntu システムに追加します。

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update

Install cordova-cli パッケージ ( 各種依存関係を含む ) をインストールします。

    $ sudo apt-get install cordova-cli

## プロジェクトの開発手順

### プロジェクトの作成

    $ cordova create project1 REVERSEDNSNAME.project1 project1

### プロジェクトを保存したディレクトリーへ移動

    $ cd project1

### Ubuntu プラットフォームの追加

    $ cordova platform add ubuntu

### Ubuntu でのビルド

    $ cordova build ubuntu

### アプリの実行

    $ cordova run ubuntu

### Battery Status プラグインの追加

    $ cordova plugin add org.apache.cordova.battery-status


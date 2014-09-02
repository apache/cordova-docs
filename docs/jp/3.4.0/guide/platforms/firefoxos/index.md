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

# Firefox OS プラットフォームに関する解説

SDK 開発環境の設定方法、および、Firefox OS 搭載のデバイスへの Cordova アプリの展開方法を説明します。

## システム要件とサポート

Firefox OS アプリは、基本的に、単なる Web アプリです。ただし、アプリに関するメタデータを定義した manifest.webapp ファイルを使用して、Firefox OS 搭載デバイスにインストールすることができます。Cordova のサポート対象のプラットフォームであれば、どのプラットフォームも使用できます。Web アプリのビルドに関しては、　[MDN](https://developer.mozilla.org/en-US/) の [アプリセンター](https://developer.mozilla.org/en-US/Apps) をご確認ください。

## インストールと環境設定

[Node.js](http://nodejs.org/) をインストールして、次に、Cordova パッケージをインストールします。

  	$ npm install -g cordova

次に、テスト用 Cordova アプリ ( test-app ) を作成して、新規に作成されたディレクトリへ移動します。

  	$ cordova create test-app
  	$ cd test-app

以下のように、アプリのサポート対象のプラットフォームとして、Firefox OS を追加します。

  	$ cordova platform add firefoxos

これにより、platforms/firefoxos/www ディレクトリに、Firefox OS アプリが作成されます。Firefox manifest ファイル ( manifest.webapp ) が www ディレクトリに置かれている点に関して、他のプラットフォームのディレクトリとは異なります。

## アプリの展開

ここまでの手順で、基本的な準備は整いました。test-app/www 内のコードを変更して、アプリを修正することもできます。 "cordova plugin add" コマンドを使用して、プラグインを追加することもできます ( 原文では、プラグイン群へのリンクを、ここに置く予定だったようです )。例を以下に記します。

	cordova plugin add org.apache.cordova.device
	cordova plugin add org.apache.cordova.vibration

また、test-app/www ディレクトリに、カスタマイズした manifest.webapp ファイルを追加する必要があります。このファイルには、最低限、以下の内容を記述します。

  	{ 
    	"launch_path":"/index.html",
    	"installs_allowed_from":["*"],
    	"version":"0.0.1",
    	"name":"My app",
    	"pkgName":"io.cordova.hellocordova",
    	"icons": {
      		"128": "/img/logo.png"
    	}
  	}

Firefox アプリの manifest に関しては、MDN 上の [アプリの manifest](https://developer.mozilla.org/en-US/Apps/Developing/Manifest) をご確認ください。

アプリのコードを修正した後、Firefox OS アプリに変更を反映させる場合には、以下のコマンドを実行します。

  	$ cordova prepare

Firefox OS プラットフォームを扱うときは、build ( cordova build  ) コマンドは必要ありません。Firefox OS アプリは、HTML を基にしているので、コンパイルの必要がないからです。

## テストとデバッグ

Firefox OS [アプリマネージャ](https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager) を使用して、アプリのテストを行うことができます。

テスト用デバイス ( またはシミュレータ ) とアプリマネージャを接続するとき、 "Add Packaged App" オプションを選択して、test-app/platforms/firefoxos/www/ ディレクトリを指しているか確認してください。次に、マネージャインターフェイス上でアプリが表示されていることを確認してください。

ここで、"Update" ボタンを押して、テスト用デバイス ( またはシミュレータ ) にアプリをインストールすることができます。 "Debug" ボタンを押すと、アプリのデバッグとコードの編集を行うことができます。

注意 : アプリを公開する前に、 [アプリの検証テスター](https://marketplace.firefox.com/developers/validator) を使用して、検証することを推奨します。

## Firefox Marketplace 上でのアプリの配布

Firefox Marketplace に、自作アプリの配布申請を行うことができます。または、開発者自身で、配布を行うこともできます。詳細な方法に関しては、MDN の [Firefox Marketplace](https://developer.mozilla.org/en-US/Marketplace) をご確認ください。 [アプリの配布に関するオプション](https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options) では、開発者自身の配布方法に関して解説しています。
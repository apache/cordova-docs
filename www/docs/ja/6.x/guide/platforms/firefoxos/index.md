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

title: Firefox の OS プラットフォームのガイド
---

# Firefox の OS プラットフォームのガイド

このガイドでは、Firefox OS デバイス用 Cordova アプリを作成し、テストおよびそれらのアプリケーションを発行するには、開発環境を設定する方法について説明します。

## 要件、およびサポート

Firefox の OS アプリは基本的にアプリについてのメタデータを定義してことができます Firefox OS デバイスにインストールされている manifest.webapp ファイルの追加の web アプリだけです。 コルドバをサポートする任意のプラットフォームを使用することができます。Web アプリケーションの構築についての詳細を見つけるために[MDN][1] [アプリ センター][2]にご相談します。.

 [1]: https://developer.mozilla.org/en-US/
 [2]: https://developer.mozilla.org/en-US/Apps

## インストールおよび環境のセットアップ

インストール[Node.js][3]、まずコルドバ パッケージのインストールのように。

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

次に、サンプル Cordova アプリを作成し、新しく作成したディレクトリに移動します。

    $ cordova create test-app
    $ cd test-app
    

Firefox OS サポートされているプラットフォームとしてアプリケーションに追加する、次のように。

    $ cordova platform add firefoxos
    

Firefox の OS アプリ www ディレクトリ内に Firefox のマニフェスト ファイル (manifest.webapp) があることを除いて同じに見える現在のプラットフォーム/firefoxos/www ディレクトリに作成されます。

## アプリの開発

この時点で、あなたは行く準備ができて-何でもしたいアプリになるをテスト-アプリ/www 内部コードを変更します。 たとえばを使用して"コルドバ プラグイン"を追加、アプリを[プラグインのサポート]()を追加できます。

    cordova plugin add cordova-plugin-device
    cordova plugin add cordova-plugin-vibration
    

アプリのコードが書き込まれるとき、変更を使用してプロジェクトに追加した Firefox OS アプリに配置します。

    $ cordova prepare firefoxos
    

パッケージ化されたアプリケーションを作成するには、1 つのプラットフォーム/firefoxos/www ディレクトリの zip することができます。また、単にそれを使用して構築できます。

    $ cordova build firefoxos
    

Firefox OS パッケージ アプリは platforms/firefoxos/build/package.zip に建設されます。

## テストとデバッグ

Firefox の OS [Web IDE][4] を使用してアプリをテストすることができます。.

 [4]: https://developer.mozilla.org/en-US/docs/Tools/WebIDE

Web IDE、テスト デバイス/シミュレータに接続し「オープン パッケージ アプリ」オプションを選択して、テスト アプリケーション/プラットフォーム/firefoxos/www をポイントを確認してください/ディレクトリ マネージャーのインターフェイスに、アプリを含める。

ここで、テスト デバイス/シミュレータ (「再生」ボタン) と、アプリをインストールできます。「一時停止」ボタンし、アプリをデバッグしてコードを編集することができますライブを使用してください。

注: アプリを公開する前にする必要があります [アプリケーション検証ツール][5] を使用してそれを検証します。.

 [5]: https://marketplace.firefox.com/developers/validator

## Firefox のマーケットプ レースでアプリの公開

アプリを Firefox マーケットプ レースに提出または自分で発行することができます。 MDN; これを行う方法についての詳細を見つけるために、[Firefox 市場ゾーン][6] を訪問します。[アプリの発行オプション][7] は、起動する最高の場所です。

 [6]: https://developer.mozilla.org/en-US/Marketplace
 [7]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options
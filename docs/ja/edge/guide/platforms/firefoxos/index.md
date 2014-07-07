* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

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

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.vibration
    

また、カスタム manifest.webapp ファイルは以下の少なくとも、テスト-アプリ/www ディレクトリに追加する必要があります。

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
    

Firefox アプリケーション マニフェストの詳細については、[アプリ マニフェストの][4]MDN にをお読みください。

 [4]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

アプリのコードが書き込まれるとき、変更を使用してプロジェクトに追加した Firefox OS アプリに配置します。

    $ cordova prepare
    

ビルド ステップ (すなわちコルドバ ビルド) が必要ないこと Firefox OS プラットフォームに展開する場合 Firefox の OS アプリが HTML ベースおよびしたがってコンパイルされていません注意してください。

## テストとデバッグ

Firefox OS[アプリケーション マネージャー][5]を使用してアプリをテストすることができます。.

 [5]: https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager

アプリ マネージャー、テスト デバイス/シミュレータに接続し「パッケージ化アプリケーションを追加」オプションを選択してテスト-アプリケーション/プラットフォーム/firefoxos/www をポイントを確認してください/ディレクトリ マネージャーのインターフェイスに、アプリを含める。

ここで、テスト デバイス/シミュレータ (「更新」ボタン) と、アプリをインストールできます。"Debug"ボタンし、アプリをデバッグしてコードを編集することができますライブを使用してください。

注: アプリを公開する前にする必要があります[アプリケーション検証ツール][6]を使用してそれを検証します。.

 [6]: https://marketplace.firefox.com/developers/validator

## Firefox のマーケットプ レースでアプリの公開

アプリを Firefox マーケットプ レースに提出または自分で発行することができます。 MDN; これを行う方法についての詳細を見つけるために、 [Firefox 市場ゾーン][7]を訪問します。[アプリの発行オプション][8]は、起動する最高の場所です。

 [7]: https://developer.mozilla.org/en-US/Marketplace
 [8]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options
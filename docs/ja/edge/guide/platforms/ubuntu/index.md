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

# Ubuntu プラットフォーム ガイド

## 初期リリース

コルドバで Ubuntu のプラットフォームのサポートの最初のリリースを歓迎します。 このリリースでは、フォーカスが Ubuntu システムの開発とコルドバ Web プロジェクト開発のワークフローを使用しています。 これはあなたと、プロジェクト標準のコルドバのプラグインを追加して、もちろん、Ubuntu のプラットフォーム用のアプリを実行する Ubuntu のプラットフォームを追加されています。

### Ubuntu SDK

また、Ubuntu の QtCreator 開発環境をインストールする可能性があります。 詳しくは[developer.ubuntu.com][1]参照してください。 （QtCreator SDK は Cordova アプリに Ubuntu のプラットフォーム サポートを追加する必要はありません。)

 [1]: http://developer.ubuntu.com

### Ubuntu のランタイム プラットフォーム

Ubuntu はデスクトップ環境 (ラップトップ、Pc など) をよく知られています。 Ubuntu のタッチ携帯電話とタブレットの上に Ubuntu OS を拡張します。 Ubuntu ランタイム プラットフォームは、さまざまな CPU アーキテクチャを持ち (x 86、armhf、etc.）。 アプリとプラグインのコードを適切にコンパイルしなければなりません。 この広い領域のためのサポートは、Ubuntu で急速に進化しています。

### 最新情報

Ubuntu ランタイム プラットフォーム向け Cordova アプリ サポートの最新情報、 [wiki.ubuntu.com/Cordova][2]を参照してください。.

 [2]: http://wiki.ubuntu.com/Cordova

## 開発プラットフォームの要件

この初期のリリースでは、開発プラットフォームは Ubuntu デスクトップをする必要があります。Ubuntu 13.10 (コードネーム '生意気な') 以降がサポートされている機能の完全なセットをお楽しみください必要です。

(故宮を使用)、非 Ubuntu システムでコルドバをインストールできますが、重要な機能はこの時点で Ubuntu debian パッケージを通じてのみ提供されます。

## コルドバのインストール

あなたの Ubuntu システムに Ubuntu コルドバ[、個人的なパッケージ アーカイブ][3]を追加します。

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

コルドバ cli パッケージ (とその依存関係) をインストールします。

    $ sudo apt-get install cordova-cli
    

## プロジェクト ワークフロー

### プロジェクトを作成します。

    $ cordova create project1 REVERSEDNSNAME.project1 project1
    

### プロジェクト ディレクトリに移動します。

    $ cd project1
    

### Ubuntu のプラットフォームを追加します。

    $ cordova platform add ubuntu
    

### Ubuntu のビルド

    $ cordova build ubuntu
    

### アプリを実行します。

    $ cordova run ubuntu
    

### バッテリーの状況のプラグインを追加します。

    $ cordova plugin add org.apache.cordova.battery-status
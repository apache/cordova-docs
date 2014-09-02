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

# Tizen プラットフォームに関する解説

SDK 開発環境の設定方法、および、Tizen オペレーティングシステム搭載のデバイスへの Cordova アプリの展開方法を説明します。

## システム要件とサポート

Tizen SDK のシステム要件として、Linux Ubuntu 10.04 / 10.10 / 11.04 / 11.10 ( 32-bit )、または、Windows XP SP3 / 7 ( 32-bit ) が必要です。

Tizen SDK と併用して、`cordova` ユーティリティを使用してください。コマンドライン インターフェイスのインストール方法、および、プロジェクトの追加・ビルド・展開方法に関しては、『 コマンドライン インターフェイス 』 をご確認ください。

## SDK のインストール

[tizen.org](https://developer.tizen.org/sdk) から Tizen SDK をダウンロードします。

<!--

- ( 任意 ) Tizen 用 Cordova プロジェクト テンプレートをインストールします。 `/templates` ディレクトリ内のコンテンツを Tizen Eclipse IDE の Templates の web ディレクトリ ( 例 : `/home/my_username/tizen-sdk/IDE/Templates/web` ) にコピーします。

- __2 番目の方法 : Tizen Eclipse IDE の Tizen 用 Cordova プロジェクト テンプレートの使用__

    - Tizen Eclipse IDE を起動します。
    - __File &rarr; New &rarr; Tizen Web Project__ を選択します。
    - __User Template__ と __User defined__ を選択します。
    - Tizen 用 Cordova テンプレート ( __CordovaBasicTemplate__ ) を 1 つ選択します。
    - __Project name__ と Target の __Location__ を入力します。

    ![](img/guide/platforms/tizen/project_template.png)

    - __Finish__ をクリックします。

    ![](img/guide/platforms/tizen/project_explorer.png)

    - __Project Explorer__ に、プロジェクトが表示されます。

-->

## SDK でプロジェクトを開く

1. Tizen Eclipse IDE を起動します。.

2. __File &rarr; Import &rarr; Tizen Web Project__ を選択します。

   ![](img/guide/platforms/tizen/import_project.png)

3. __Next__ ボタンを押します。

4. __Select root directory__ が選択されていることを確認してください。

5. __Copy projects into workspace__ が選択されていることを確認してください。

6. __Browse__ ボタンを押して、tizen/ `samples` / 下のディレクトリ ( ここでは `/cordova-basic` ) を選択します。

   ![](img/guide/platforms/tizen/import_widget.png)

7. __Finish__ ボタンを押します。 プロジェクトがインポートされ、 __Project Explorer__ に表示されます。

   ![](img/guide/platforms/tizen/project_explorer.png)

プロジェクトを再ビルドする場合、 __Project Explorer__ 上で右クリックして、 __Build Project__ を選択します。

![](img/guide/platforms/tizen/build_project.png)

ウィジェットパッケージ ファイル ( 例 : _hello.wgt_ ) がプロジェクトのルート ( root ) ディレクトリに作成されます。

## エミュレーターへの展開

__Project Explorer__ のプロジェクトを右クリックして、 __Run As &rarr; Tizen Web Simulator Application__ を選択します。

![](img/guide/platforms/tizen/runas_web_sim_app.png)

## デバイスへの展開

* Target のデバイスが正しく起動・接続・設定されていることを確認してください。 特に __日付と時間__ は正しく設定してください。

* __Connection Explorer__ を使用して、アプリの展開先となる Target を選択します。 __Window &rarr; Show View &rarr; Connection Explorer__ を選択します。

  ![](img/guide/platforms/tizen/connection_explorer.png)

* __Project Explorer__ のプロジェクトを右クリックします。次に、 __Run As & rarr; Tizen Web Application__ を選択します。

  ![](img/guide/platforms/tizen/runas_web_app.png)


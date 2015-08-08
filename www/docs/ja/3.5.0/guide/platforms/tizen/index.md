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

# Tizen プラットフォーム ガイド

このガイドは Tizen オペレーティング システムを実行するデバイスの Cordova アプリを展開する SDK の開発環境を設定する方法について説明します。

## 要件、およびサポート

Tizen SDK には、Linux Ubuntu 10.04/10.10/11.04/11.10 (32-ビット)、または Windows XP SP3/7 （32 ビット） が必要です。

開発者を使用する必要があります、 `cordova` Tizen SDK と共にユーティリティ。 それをインストール、追加プロジェクト、ビルドし、プロジェクトを配置する方法については、コマンド ライン インターフェイス参照してください。

## SDK をインストールします。

[Tizen.org][1]から Tizen SDK をダウンロードします。.

 [1]: https://developer.tizen.org/sdk

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## SDK でプロジェクトを開く

1.  Tizen の Eclipse IDE を起動します。

2.  **→ インポート → Tizen Web プロジェクトのファイル**を選択します。

    ![][2]

3.  **次**のキーを押します.

4.  **ルート ディレクトリを選択**がオンになっていることを確認します。

5.  **プロジェクト ワークスペースにコピー**がオンになっていることを確認します。

6.  **参照**を押すし、選択コルドバ Tizen `samples` プロジェクト ディレクトリ (など `/cordova-basic` )。

    ![][3]

7.  **終了**キーを押します。プロジェクト必要があります今インポートして、**プロジェクト エクスプ ローラー]**ビューに表示されます。

    ![][4]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png
 [4]: {{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png

**プロジェクト エクスプ ローラー]**ビューを右クリックしてプロジェクトをリビルドし、**プロジェクトのビルド**を選択します。

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png

*Hello.wgt*などのウィジェット パッケージ ファイルがプロジェクトのルート ディレクトリに生成されます。

## エミュレーターへの展開します。

**プロジェクト エクスプ ローラー]**ビューでプロジェクトを右クリックし、 **Tizen Web シミュレータ アプリケーション → として実行**を選択します。

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png

## デバイスへの配置します。

*   ターゲット デバイス正しく起動、接続され構成されていることを確認します。その**日付と時刻**の設定を正しく設定する必要があります。

*   **接続エクスプ ローラー]**ビューを使用してアプリケーションの配置先を選択します：**ウィンドウ → 表示 → 接続エクスプ ローラー**.

    ![][7]

*   **プロジェクト エクスプ ローラー]**ビューを選択として実行**& rarr; でプロジェクトを右クリックします。Tizen Web アプリケーション**:

    ![][8]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png

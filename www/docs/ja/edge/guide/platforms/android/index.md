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

# Android プラットフォーム ガイド

このガイドは、Android デバイスのための Cordova アプリを展開する SDK 環境を設定する方法と必要に応じて開発ワークフローでアンドロイドを中心のコマンド ライン ツールを使用する方法を示します。 開発のためこれらのプラットフォームを中心としたシェル ツールまたはクロス プラットフォーム コルドバ CLI を使用するかどうかに関係なく Android SDK をインストールする必要があります。 2 つの開発パスの比較の概要を参照してください。 CLI の詳細は、コマンド ライン インターフェイスを参照してください。

## 要件、およびサポート

人造人間のためのコルドバ OS X、Linux または Windows のオペレーション システムにインストールされている可能性がありますが人造人間 SDK が必要です。 Android の SDK の[システム要件][1]を参照してください。.

 [1]: http://developer.android.com/sdk/index.html#Requirements

コルドバ (Android の API レベル 14 で始まる) アンドロイド 4.0.x をサポートしているより高い。 一般的な規則として Google の[分布のダッシュ ボード][2]上の 5% を下回ると Android のバージョンになるコルドバでサポートされていません。 アンドロイド バージョン API より早くレベル 10、および 3.x バージョン (ハニカム、API レベル 11-13) はその 5 ％ のしきい値を大きく下回ったことができます。

 [2]: http://developer.android.com/about/dashboards/index.html

## コルドバ シェル ツールをインストールします。

SDK と一緒にコルドバのアンドロイドを中心のシェル ・ ツールを使用する場合は[cordova.apache.org][3]からコルドバをダウンロードします。 コマンド ライン インターフェイスで記述されているクロス プラットフォーム CLI ツールを使用する予定がある場合それ以外の場合このセクションを無視します。

 [3]: http://cordova.apache.org

コルドバ ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 適切なアーカイブを展開してください `android` この場合、空のディレクトリ内。 関連性の高い実行ユーティリティは、トップレベルで利用可能な `bin` ディレクトリ。 (より詳細な指示が必要な場合は、 **README**ファイルを参照して)。

これらのシェルのツールを作成、構築、および Android アプリを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。 プラグインを開発する方法の詳細については、アプリケーション ・ プラグインを参照してください。

## Java 開発キット (JDK) のインストールします。

[Java 開発キット (JDK) 7][4]をインストールまたはそれ以降。

 [4]: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html

Windows をインストールするときも JDK インストール パス (たとえば、C:\Program Files\Java\jdk1.7.0_75) によると`JAVA_HOME`環境変数を設定する必要があります。

## Android の SDK をインストールします。

[Android のスタンドアロン SDK ツール][5]や[Android のスタジオ][6]をインストールします。 Procceed 対応`アンドロイド Studio`プラグインのアンドロイド新しいコルドバの開発またはネイティブ ツールを使用して実行および Android プラットフォームをデバッグする場合。 それ以外の場合は、 `Android のスタンドアロン SDK ツール`は Android アプリケーション ビルドおよび配置するのに十分です。

 [5]: http://developer.android.com/sdk/installing/index.html?pkg=tools
 [6]: http://developer.android.com/sdk/installing/index.html?pkg=studio

詳細なインストール手順は利用可能な上記のリンクをインストールの一部として。

コルドバするために、コマンド ライン ツールまたはに基づいては、CLI は、SDK の`ツール`や`プラットフォーム固有のツール`ディレクトリ`パス`に含める必要があります。 Mac では、テキスト エディターを使用して、作成または SDK のインストールに応じて、次のような行を追加する`~/.bash_profile`ファイルを変更することができます。

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools


`~/.Bash_profile`内のこの行は、新しくオープンしたターミナル ウィンドウでこれらのツールを公開します。 ターミナル ・ ウィンドウをまだ開いて場合は osx 版、またはログアウト/ログイン Linux 上を避けるために、現在の端末ウィンドウで使用できるようにするこれを実行します。

        $ source ~/.bash_profile


Windows の`PATH`環境を変更: する

1.  デスクトップの左下隅の [**スタート**] メニューをクリックして、**コンピューター**を右クリックして ［**プロパティ**］.

2.  左側の列では、**システムの詳細設定**を選択します。

3.  表示されたダイアログ ボックスで**環境変数**キーを押します。.

4.  **パス**変数を選択し、キーを押して**編集**.

5.  追加するのには、次の `PATH` 例えば、SDK をインストールしたに基づきます。

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools


6.  値を保存して両方のダイアログ ボックスを閉じます。

## SDK パッケージをインストールします。

アンドロイド SDK マネージャーを開く (たとえば、端末を介して:`アンドロイド`) インストールと。

1.  アンドロイド 5.1.1 (API 22) プラットフォーム SDK
2.  Android の SDK ビルド ツール バージョン 19.1.0 またはそれ以降
3.  Android 対応リポジトリ (エクストラ)

詳細については、 [SDK パッケージのインストール][7]を参照してください。

 [7]: http://developer.android.com/sdk/installing/adding-packages.html

## エミュレーターを構成します。

人造人間 sdk は既定で任意の既定のエミュレーターのインスタンスを提供しません。 コマンド ・ ラインで`android`を実行して新しいものを作成できます。 プレス**ツール → 管理 Avd** (Android 仮想デバイス)、**デバイスの定義**されたダイアログ ボックスから任意の項目を選択します。

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

プレス**AVD の作成**、必要に応じて、名前の変更、変更を受け入れて**[ok]**を押します。

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

これで、AVD **Android 仮想デバイス**リストに表示されます。

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

エミュレーターを開くには、個別のアプリケーションとして、AVD を選択し、**開始**を押します。ハードウェア ボタンで使用できるコントロールを追加して、デバイスのように多くを起動します。

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

高速な経験のため、実行速度を向上させる`仮想マシン加速`を使用できます。 多くの近代的な Cpu をより効率的に仮想マシンを実行する拡張機能を提供します。 加速度のこのタイプを使用する前にかどうか、現在の開発システムの CPU をサポートしています 1 つ次の仮想化テクノロジを決定する必要があります。

*   **インテル バーチャライゼーション ・ テクノロジー**(VT-x、vmx) → [Intel VT-x 対応のプロセッサ一覧][12]
*   **AMD の仮想化**AMD-V （SVM）、Linux のサポートだけ (2006 年 5 月以来すべての Cpu AMD を含める AMD-V Sempron を除く)。

 [12]: http://ark.intel.com/products/virtualizationtechnology

かどうか、インテル ・ プロセッサーの VT-x テクノロジをサポートする、`インテル プロセッサー識別ユーティリ ティー`を実行している、インテル[・ ダウンロード ・ センター][13]からダウンロードできます`windows`や`OS に依存しない`である[booteable ユーティリティ][14]を使用することができますを調べる別の方法.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

インストールし、`インテルのプロセッサー識別ユーティリ ティー`を実行後、Windows 上あなたの CPU 仮想化テクノロジをサポートしているかどうかを確認するために次のウィンドウを得るでしょう：

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

エミュレーターをスピードアップするためにダウンロードし、1 つ以上の`Intel x86 原子`システム イメージとして`インテル ハードウェア加速実行マネージャー (HAXM)`をインストールする必要があります。.

あなたアンドロイド SDK マネージャーを開き、テストするどちらかのバージョンの`Intel x86 原子`システム イメージを選択します。 `エクストラ`に行くと`Intel x86 エミュレーター アクセラレータ (HAXM)`を選択し、それらのパッケージをインストールします。

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

ダウンロード後`エクストラ/インテル/Hardware_Accelerated_Execution_Manager`でアンドロイド SDK で提供されているインテル インストーラーを実行します。 **注**:`より多くの情報とステップ バイ ステップ ガイダンスこのチェックを見つけることができる場合は、パッケージのインストールに問題がある` [Intel の記事][17].

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  1 つ以上の`Intel x86 原子`システム イメージとして、`インテル ハードウェア加速実行マネージャー`、**余分な物**の下で利用可能なインストールします。.

2.  `エクストラ/インテル/Hardware_Accelerated_Execution_Manager`でアンドロイド SDK で提供されているインテルのインストーラーを実行します。.

3.  インテル画像に設定されているターゲットで新しい AVD を作成します。

4.  エミュレーターを起動するときはハックス モジュールのロードに失敗を示すエラー メッセージがない確認します。

## 新しいプロジェクトを作成します。

この時点で、新しいプロジェクトを作成する、コマンド ライン インターフェイスまたは人造人間固有のシェルのツールのセットで説明するクロス プラットフォーム CLI ツールの間に選択できます。 ソース コード ディレクトリ内からの場合、CLI アプローチここです：

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ ccordova prepare              # or "cordova build"


ここでは Unix および Windows の対応する低レベル シェル ツール アプローチ：

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## プロジェクトをビルドします

開発で CLI を使用している場合、プロジェクトの最上位レベルの`www`ディレクトリにはソース ファイルが含まれます。アプリを再構築するには、プロジェクト ディレクトリ内のこれらのいずれかを実行します。

        $ cordova build                   # build all platforms that were added
        $ cordova build android           # build debug for only Android
        $ cordova build android --debug   # build debug for only Android
        $ cordova build android --release # build release for only Android


開発で人造人間に固有のシェルのツールを使用している場合、別のアプローチがあります。 プロジェクトを生成した後、既定のアプリのソースは`資産/www`サブディレクトリで利用可能です。 以降のコマンドはその`コルドバ`サブディレクトリで利用できます。

`ビルド`コマンドをプロジェクト ファイルを消去して、アプリを再構築します。ここでは、Mac と Windows の両方の構文です。 例の最初のペアを生成するデバッグ情報と 2 番目のリリースのアプリを構築します。

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug

        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release


## アプリを展開します。

`コルドバ`CLI ユーティリティを使用して、コマンド ・ ラインから、エミュレーターまたはデバイスにアプリケーションを配置することができます。

        $ cordova emulate android       #to deploy the app on a default android emulator
        $ cordova run android --device  #to deploy the app on a connected device


それ以外の場合は、代替シェル インターフェイスを使用します。

        $ /path/to/project/cordova/run --emulator
        $ /path/to/project/cordova/run --device


使用することができます**cordova run android --list**を見るすべての利用可能なターゲットと**cordova run android --target=target_name** 、特定のデバイスまたはエミュレーターでアプリケーションを実行する (たとえば、`cordova run android --target="Nexus4_emulator"`).

**コルドバの実行 - ヘルプ**を使用して、追加のビルドを参照してください、オプションを実行することもできます。

これは、ホーム画面にアプリをプッシュし、それを起動します。

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/emulator2x.png

ときにアプリを`実行`を`構築`することもそれ。 追加を追加することができます`--デバッグ`、 `-リリース`、および構築方法や、再構築が必要かどうかも制御する`--nobuild`フラグ。

        $ /path/to/project/cordova/run --emulator --nobuild


## その他のコマンド

実行時のアプリケーションの詳細なログを生成します。

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat


次のプロジェクト ファイルが消去されます。

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat


## SDK で新しいプロジェクトを開く

Android プラットフォームは、プロジェクトに追加されます、一度[Android Studio][6]内からそれを開くことができます。

1.  **アンドロイド Studio**アプリケーションを起動します。

2.  **インポート プロジェクト (Eclipse ADT、Gradle など)**を選択します.

    ![][19]

3.  Android プラットフォームは、ストアド`あなた/プロジェクト/プラットフォーム/android`の場所を選択します。).

    ![][20]

4.  `Gradle 同期`質問の単に答えが**はい**.

 [19]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png
 [20]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png

あなたを構築し、 `Android のスタジオ`から直接アプリケーションを実行することができますすべての現在設定されて.

![][21]

 [21]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png

[Android のスタジオの概要][22]を参照してください、そして[建物と Android Studio から実行する][23]詳細については。

 [22]: http://developer.android.com/tools/studio/index.html
 [23]: http://developer.android.com/tools/building/building-studio.html

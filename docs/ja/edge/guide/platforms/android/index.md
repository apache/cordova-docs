* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Android プラットフォーム ガイド

このガイドは、Android デバイスのための Cordova アプリを展開する SDK 環境を設定する方法と必要に応じて開発ワークフローでアンドロイドを中心のコマンド ライン ツールを使用する方法を示します。 開発のためこれらのプラットフォームを中心としたシェル ツールまたはクロス プラットフォーム コルドバ CLI を使用するかどうかに関係なく Android SDK をインストールする必要があります。 2 つの開発パスの比較の概要を参照してください。 CLI の詳細は、コマンド ライン インターフェイスを参照してください。

## 要件、およびサポート

人造人間のためのコルドバには Android SDK が必要です。Android の SDK の[システム要件][1]を参照してください。.

 [1]: http://developer.android.com/sdk/index.html

コルドバ アンドロイド 2.3.x (ジンジャーブレッド, Android の API レベル 10 で始まる) および 4.x をサポートします。一般的な規則として Google の[分布のダッシュ ボード][2]上の 5% を下回ると Android のバージョンになるコルドバでサポートされていません。 アンドロイド バージョン API より早くレベル 10、および 3.x バージョン (ハニカム、API レベル 11-13) はその 5 ％ のしきい値を大きく下回ったことができます。

 [2]: http://developer.android.com/about/dashboards/index.html

## コルドバ シェル ツールをインストールします。

SDK と一緒にコルドバのアンドロイドを中心のシェル ・ ツールを使用する場合は[cordova.apache.org][3]からコルドバをダウンロードします。 コマンド ライン インターフェイスで記述されているクロス プラットフォーム CLI ツールを使用する予定がある場合それ以外の場合このセクションを無視します。

 [3]: http://cordova.apache.org

コルドバ ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 適切なアーカイブを展開してください `android` この場合、空のディレクトリ内。 関連性の高い実行ユーティリティは、トップレベルで利用可能な `bin` ディレクトリ。 (より詳細な指示が必要な場合は、 **README**ファイルを参照して)。

これらのシェルのツールを作成、構築、および Android アプリを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。 プラグインを開発する方法の詳細については、アプリケーション ・ プラグインを参照してください。

[Developer.android.com/sdk][4]から Android SDK をインストールします。 Android の sdk 'adt - バンドル - < os > < アーチ > - < バージョン >' ファイルとして配布されます。 Windows では、adt バンドルは、インストーラーにパッケージ化されます。 OSX と Linux 上に簡単に解凍 'adt バンドル' 開発ツールを格納する場所。 [Android の SDK のセットアップに関する詳細情報をここで発見ことができます。][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

コルドバを仕事、またはそれらに基づいている CLI コマンド ライン ツール、SDK を含める必要があります `tools` と `platform-tools` でディレクトリを `PATH` 。 Mac では、テキストエディターを使用して作成または変更することができます、 `~/.bash_profile` ファイルは、SDK のインストールに応じて、次のような行を追加します。

        エクスポート パス ${path} を =:/開発/adt-バンドル/sdk/プラットフォーム固有のツール:/開発/adt-バンドル/sdk/ツール
    

パスを追加します `java` と `ant` に必要な場合。 この行で `~/.bash_profile` 新たにオープンしたターミナル ウィンドウでこれらのツールを公開します。 ターミナル ・ ウィンドウをまだ開いて場合は osx 版、またはログアウト/ログイン Linux 上を避けるために、現在の端末ウィンドウで使用できるようにするこれを実行します。

        $ ソース ~/.bash_profile
    

変更する、 `PATH` Windows 7 環境。

1.  デスクトップの左下隅の [**スタート**] メニューをクリックして、**コンピューター**を右クリックして ［**プロパティ**］.

2.  左側の列では、**システムの詳細設定**を選択します。

3.  表示されたダイアログ ボックスで**環境変数**キーを押します。.

4.  **パス**変数を選択し、キーを押して**編集**.

5.  追加するのには、次の `PATH` 例えば、SDK をインストールしたに基づきます。
    
        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools
        

6.  値を保存して両方のダイアログ ボックスを閉じます。

また、コマンド ・ プロンプトとタイプ Java および Ant. オープンを有効にする必要があります `java` 、また入力と `ant` 。追加、 `PATH` これらのいずれかの実行に失敗します。

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## SDK で新しいプロジェクトを開く

この時点で、新しいプロジェクトを作成する、コマンド ライン インターフェイスまたは人造人間固有のシェルのツールのセットで説明するクロス プラットフォーム CLI ツールの間に選択できます。 ソース コード ディレクトリ内からの場合、CLI アプローチここです：

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

ここでは Unix および Windows の対応する低レベル シェル ツール アプローチ：

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

ここでは、SDK を使用して変更する方法です。

1.  **Eclipse**アプリケーションを起動します。

2.  **新しいプロジェクト**のメニュー項目を選択します。

3.  表示されたダイアログ ボックスから**既存のコードから Android プロジェクト**を選択し、**次**キーを押します。
    
    ![][6]

4.  CLI を使用している場合に移動、 `hello` にし、プロジェクトの作成ディレクトリの `platforms/android` サブディレクトリ。 代わりに、使用している場合、 `create` シェル ユーティリティと、単に移動、 `hello` ディレクトリ。

5.  **終了**キーを押します。.

 [6]: img/guide/platforms/android/eclipse_new_project.png

Eclipse ウィンドウが開いたら、未解決の問題を示す赤い**X**が表示されます。もしそうなら、この追加の手順を実行します。

1.  プロジェクト ディレクトリを右クリックします。

2.  結果**のプロパティ**] ダイアログ [ **Android**ナビゲーション ウィンドウから。

3.  プロジェクトのビルド ターゲットは、インストールされている最高の Android の API レベルを選択します。

4.  **[Ok]**をクリックします.

5.  **クリーン****をプロジェクト**メニューから選択します。これは、プロジェクト内のすべてのエラーを修正する必要があります。

## プロジェクトをビルドします

開発で CLI を使用している場合は、プロジェクト ディレクトリの最上位 `www` ディレクトリにソース ファイルが含まれています。アプリを再構築するには、プロジェクト ディレクトリ内のこれらのいずれかを実行します。

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

開発で人造人間に固有のシェルのツールを使用している場合、別のアプローチがあります。 プロジェクトを生成した後、既定のアプリケーションのソースは、 `assets/www` サブディレクトリ。 後続のコマンドがその `cordova` サブディレクトリ。

`build`コマンドをプロジェクト ファイルを消去して、アプリを再構築します。ここでは、Mac と Windows の両方の構文です。 例の最初のペアを生成するデバッグ情報と 2 番目のリリースのアプリに署名します。

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## エミュレーターを構成します。

いずれかを使用することができます、 `cordova` 、エミュレーターでアプリケーションを実行する CLI ユーティリティまたはコルドバのアンドロイドを中心としたシェル ツールします。 いずれかの方法では、SDK には、少なくとも 1 つのデバイスを表示する最初構成する必要があります。 Eclipse から個別に実行される Java アプリケーション アンドロイド SDK マネージャー使用します。 それを開く 2 つの方法があります。

1.  実行 `android` コマンド ・ ラインで。

2.  Eclipse、内でこのツールバー アイコンを押します。
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

一度開いて、アンドロイド SDK マネージャーはさまざまなランタイム ライブラリが表示されます。

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

**ツール → 管理 Avd** (Android 仮想デバイス) を選択し、表示されたダイアログ ボックス内の**デバイス定義**から任意の項目を選択します。

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

プレス**AVD の作成**、必要に応じて、名前の変更、変更を受け入れて**[ok]**を押します。

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

これで、AVD **Android 仮想デバイス**リストに表示されます。

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

エミュレーターを開くには、個別のアプリケーションとして、AVD を選択し、**開始**を押します。ハードウェア ボタンで使用できるコントロールを追加して、デバイスのように多くを起動します。

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## エミュレーターへの展開します。

この時点で使用することができます、 `cordova` CLI ユーティリティ コマンドラインからエミュレーターにアプリケーションを配置します。

        $ cordova emulate android
    

それ以外の場合、代替シェル インターフェイスを使用します。

        $ /path/to/project/cordova/run --emulator
    

エミュレーターは、現在、SDK 内有効に頼らずに指定する名前ごとに参照できます。

        $ /path/to/project/cordova/run --target=NAME
    

これは、ホーム画面にアプリをプッシュし、それを起動します。

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

ときにあなた `run` 、アプリは、あなたも `build` それ。 追加を追加することができます `--debug` 、 `--release` 、および `--nobuild` 構築方法やも、再構築が必要かどうかを制御するフラグ。

        $ /path/to/project/cordova/run --emulator --nobuild
    

代わりに Eclipse 内で作業している、プロジェクトを右クリックし、 **Android アプリケーション → として実行**を選択します。どれもが既に開かれている場合、AVD を指定しようとしています。

高速な体験を使用してできます、 `Virtual Machine Acceleration` の実行速度を向上させます。 多くの近代的な Cpu をより効率的に仮想マシンを実行する拡張機能を提供します。 加速度のこのタイプを使用する前にかどうか、現在の開発システムの CPU をサポートしています 1 つ次の仮想化テクノロジを決定する必要があります。

*   **インテル バーチャライゼーション ・ テクノロジー**(VT-x、vmx) → [Intel VT-x 対応のプロセッサ一覧][14]
*   **AMD の仮想化**AMD-V （SVM）、Linux のサポートだけ (2006 年 5 月以来すべての Cpu AMD を含める AMD-V Sempron を除く)。

 [14]: http://ark.intel.com/products/virtualizationtechnology

別の方法を見つける場合、インテル ・ プロセッサーの VT-x 技術をサポートする、それは実行することによって、 `Intel Processor Identification Utility` の `Windows` 、インテル[・ ダウンロード ・ センター][15]からダウンロードすることができますまたは、 [booteable ユーティリティ][16]は、使用することができます`OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

後のインストールし、実行、 `Intel Processor Identification Utility` 、Windows 上あなたの CPU 仮想化テクノロジをサポートしているかどうかを確認するために次のウィンドウを得るでしょう。

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

エミュレーターをスピードアップするためにダウンロードし、1 つまたは複数をインストールする必要があります `Intel x86 Atom` システム イメージだけでなく、`Intel Hardware Accelerated Execution Manager (HAXM)`.

あなたアンドロイド SDK マネージャーを開き、選択、 `Intel x86 Atom` どちらかのバージョンをテストするためのシステム イメージ。 移動し、 `Extras` を選択します `Intel x86 Emulator Accelerator (HAXM)` 、それらのパッケージをインストール。

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

ダウンロード後、Android SDK で利用可能です、インテル インストーラーを実行 `extras/intel/Hardware_Accelerated_Execution_Manager` 。 **注**: `If you have any problems installing the package, you can find more information and step by step guidance check this` [インテル記事][19] .

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  1 つまたは複数インストール `Intel x86 Atom` システム イメージだけでなく、 `Intel Hardware Accelerated Execution Manager` 、**余分な物**の下で利用可能な.

2.  内でアンドロイド SDK で提供されているインテルのインストーラーを実行します。`extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  インテル画像に設定されているターゲットで新しい AVD を作成します。

4.  エミュレーターを起動するときはハックス モジュールのロードに失敗を示すエラー メッセージがない確認します。

## デバイスへの配置します。

デバイスに直接アプリをプッシュするには、 [Android 開発者向けサイト][20]で説明されているようにあなたのデバイスで USB デバッグを有効にかどうかを確認し、ミニ USB ケーブルを使用してあなたのシステムにプラグインします。

 [20]: http://developer.android.com/tools/device.html

この CLI コマンドを使用してアプリをデバイスにプッシュすることができます。

        $ cordova run android
    

.. またはこの人造人間中心のシェル インターフェイスを使用します。

        $ /path/to/project/cordova/run --device
    

指定したフラグなしで、 `run` コマンドはデバイスが見つからない場合、接続先のデバイスまたは現在実行中のエミュレーターを検出し、それ以外の場合、エミュレーターを指定するよう求められます。

Eclipse 内からアプリケーションを実行するには、プロジェクトを右クリックし、 **Android アプリケーション → として実行**を選択します.

## その他のコマンド

実行時のアプリケーションの詳細なログを生成します。

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

次のプロジェクト ファイルが消去されます。

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat
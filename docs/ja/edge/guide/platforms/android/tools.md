* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# アンドロイド シェル ツール ガイド

このガイドは、コルドバの一連のプラットフォームを中心としたシェル ツールを使用して Android アプリを開発する方法を示します。 概要で説明したこの開発パスはコマンド ライン インターフェイスで記述されているクロス プラットフォーム CLI ツールよりも開発オプションの大きい範囲を提供するかもしれない。 たとえば、ネイティブ コンポーネントと一緒にカスタム コルドバ WebView を展開する場合、シェル ・ ツールを使用する必要があります。 開発パスはいずれかを使用する前に Android プラットフォーム ガイドで説明されているよう、Android SDK 環境を構成すること最初する必要があります。

人造人間のためのシェル ・ ツールを有効にする、コルドバ[cordova.apache.org][1]からダウンロードします。 ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 各ターゲット、たい展開 `android` この場合。 関連するツールは、最上位レベルでふつう利用できる `bin` ディレクトリ、それ以外の場合より詳細な方向の**README**ファイルを参照してください。

 [1]: http://cordova.apache.org

これらのツールを作成、構築、および Android アプリを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。 プラグインを開発する方法の詳細については、アプリケーション ・ プラグインを参照してください。

## プロジェクトを作成します。

実行、 `create` プロジェクト、逆ドメイン スタイル パッケージ識別子、およびアプリケーションの表示名を既存のパスを指定するコマンドです。 ここでは Mac の/Linux と Windows の両方の構文です。

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## ビルド

これをきれいにし、プロジェクトをビルドします。

Mac の/Linux または Windows をデバッグします。

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Mac の/Linux または Windows のリリース：

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## アプリを実行します。

`run`コマンドは、次の*省略可能な*パラメーターを受け入れます。

*   ターゲットを指定します。これが含まれています `--emulator` 、 `--device` 、または`--target=<targetID>`.

*   仕様を作成します。これが含まれています `--debug` 、 `--release` 、または`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

少なくとも 1 つの Android 仮想デバイス、それ以外の場合でそうよう求められますを作成するかどうかを確認、 `android` コマンド。 AVD 1 つ以上のターゲットとして使用できる場合はいずれかを選択するよう求められます。 既定では、 `run` コマンド デバイスが見つからない場合に接続されているデバイス、または現在実行中のエミュレーターを検出します。

## ログの記録

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## クリーニング

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Ant のマニュアルを使用します。

コマンド ・ ラインから直接よう Ant を呼び出すしたい場合 `ant debug install` 、ant コマンドに追加のパラメーターを指定する必要があります。

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

これは、コルドバの Ant スクリプトで使用されるディレクトリは、既定とは異なるためにです。これは、Ant をコマンドラインから実行時の競合を避けるために日食/ADT の内部。

これらの追加のパラメーターが自動的に追加されますあなたのためを使用して、 `cordova/build` と `cordova/run` スクリプトは、上記します。 使用することをお勧めします。 このため、 `cordova/build` と `cordova/run` ではなく、コマンドラインから直接呼び出す Ant スクリプトです。

## Gradle （！） 実験建物

人造人間のためのコルドバ[Gradle][2]建物になりました。 これはコルドバに任意 3.x が既定で有効に将来的には、おそらくコルドバ 4.0 が。ビルド システムは、シェルの設定またはと一緒にコマンドラインで指定することができる環境変数で有効になって、 `cordova build` コマンド。

 [2]: http://www.gradle.org/

Gradle ビルド規則は、まだ開発中, と Gradle 既定のビルド システムになる前に大規模な変更の対象となることに注意してください。 開発者は、それをしようと、それを試してみることをお勧めすることがそれの上にあなた自身の生産のビルド システムを作成する場合はおそらくいくつか重大な変更次のいくつかのリリースでそれが安定する前に。

### 関連する環境変数

*   **アンドロイド _ を構築**
    
    この変数は、どのビルド システムは、プロジェクトをビルドする使用を制御します。値のいずれかを取ることができる `ant` または`gradle`.
    
    設定しないと、現在既定の `ant` 、しかし、これを変更すると予想されます。

### （あなたは通常これらを設定する必要はありません） その他の環境変数

*   **アンドロイド _ ホーム**
    
    これは Android の SDK を含むディレクトリに設定する必要があります。 コルドバは検索これを通常の設定を必要としないので、PATH 変数を見てだけでなく、既定のインストール場所にします。

*   **JAVA _ ホーム**
    
    いくつかのマシンでこの Gradle は、Java コンパイラを見つけることができるように設定する必要があります。

### Gradle プロパティ

これらの[プロパティ][3]は、ビルドのカスタマイズを設定できます。

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks**
    
    これが設定されている場合は複数の APK ファイルが生成されます: ライブラリ プロジェクトでサポートされているネイティブ プラットフォームごとに 1 つ (x 86、腕、等)。 これは、プロジェクトで生成された APK のサイズを大幅に増やすことができます大規模なのネイティブ ライブラリを使用する場合に重要なことができます。
    
    設定しない場合、[すべてのデバイスで使用できる単一の APK が生成されます。

*   **cdvVersionCode**
    
    VersionCode 設定よりも優先されます。`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile**
    
    リリースの署名情報を含む .properties ファイルへのパスを構築します。ファイルはようになります。
    
        storeFile=relative/path/to/keystore.p12 storePassword SECRET1 [storetype] を = = pkcs12 keyAlias DebugSigningKey keyPassword = SECRET2 =
        
    
    `storePassword``keyPassword`はオプションであり、入力を求められますを省略すると。

*   **cdvDebugSigningPropertiesFile**
    
    同じです cdvReleaseSigningPropertiesFile がデバッグをビルドします。署名キーを他の開発者と共有する必要がある場合に役立ちます。

*   **cdvMinSdkVersion**
    
    値をオーバーライドする `minSdkVersion` で設定 `AndroidManifest.xml` 。複数を作成するときに便利です APKs SDK バージョンをに基づいてください。

*   **cdvBuildToolsVersion**
    
    自動検出をオーバーライド `android.buildToolsVersion` 値。

*   **cdvCompileSdkVersion**
    
    自動検出をオーバーライド `android.compileSdkVersion` 値。

### 拡張 build.gradle

カスタマイズする必要がある場合 `build.gradle` 、むしろ直接編集よりはという兄弟ファイルを作成する必要があります `build-extras.gradle` 。 このファイルは、メインにインクルードされます `build.gradle` 場合します。 ここで例に示します。

    ＃ 例ビルド extras.gradle # このファイルは 'build.gradle' ext.cdvDebugSigningPropertiesFile の先頭に = ' (プラモデル)/../アンドロイド-デバッグ-keys.properties' # この関数セットが 'build.gradle' ext.postBuildExtras の終わりに実行するコードを使用できるとき = {android.buildTypes.debug.applicationIdSuffix = '.debug'}
    

### 例のビルド

    ANDROID_BUILD エクスポート エクスポート gradle ORG_GRADLE_PROJECT_cdvMinSdkVersion = 14 コルドバ ビルド android----gradleArg = PcdvBuildMultipleApks = = true
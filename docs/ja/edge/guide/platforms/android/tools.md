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

## アプリケーションの署名

署名の要件ここで Android アプリを確認することができます： http://developer.android.com/tools/publishing/app-signing.html

アプリを署名する必要があります、次のパラメーター: * キーストア (`--キーストア`): キーのセットを保持できるバイナリ ファイルへのパス。 * キーストア パスワード (`--storePassword`): キーストア パスワード * エイリアス (`--別名`): 歌うことのために使用される秘密のキーを指定する id。 * パスワード (`--password`): 指定された秘密キーのパスワード。 * キーストア (`--keystoreType`) のタイプ: jks pkcs12 (デフォルト: 自動検出ファイル拡張子に基づいて)`ビルド`または`実行`スクリプトを上記のコマンドライン引数を使用してこれらのパラメーターを指定することができます。

また、(`-buildConfig`) 引数を使用してビルド構成ファイル (build.json) で指定する可能性があります。ビルドの構成ファイルのサンプルを次に示します。

    {
         "android": {
             "debug": {
                 "keystore": "..\android.keystore",
                 "storePassword": "android",
                 "alias": "mykey1",
                 "password" : "password",
                 "keystoreType": ""
             },
             "release": {
                 "keystore": "..\android.keystore",
                 "storePassword": "",
                 "alias": "mykey2",
                 "password" : "password",
                 "keystoreType": ""
             }
         }
     }
    

リリース署名用パスワードを除外することができ、ビルド システムは、パスワードを求めるプロンプトを発行します。

ミックスし、一致するコマンドライン引数と build.json ファイル内のパラメーターへのサポートがあります。 コマンドライン引数の値は、優先順位を取得します。 これは、コマンドラインでパスワードを指定するために役立ちますすることができます。

## ログの記録

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## クリーニング

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Gradle の構築

Cordova-android@4.0.0、現在プロジェクトは[Gradle][2]を使用してビルドされます。 ANT の建物には古いバージョンのドキュメントを参照してください。

 [2]: http://www.gradle.org/

### Gradle プロパティ

これらの[プロパティ][3]は、ビルドのカスタマイズを設定できます。

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks**(デフォルト: false)
    
    これが設定されている場合は複数の APK ファイルが生成されます: ライブラリ プロジェクトでサポートされているネイティブ プラットフォームごとに 1 つ (x 86、腕、等)。 これは、プロジェクトで生成された APK のサイズを大幅に増やすことができます大規模なのネイティブ ライブラリを使用する場合に重要なことができます。
    
    設定しない場合、[すべてのデバイスで使用できる単一の APK が生成されます。

*   **cdvVersionCode**
    
    VersionCode `AndroidManifest.xml` で設定よりも優先されます。

*   **cdvReleaseSigningPropertiesFile**(デフォルト: release-signing.properties)
    
    リリースの署名情報を含む .properties ファイルへのパスを構築します。ファイルはようになります。
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
        
    
    `storePassword` および `keyPassword` は省略可能、促されるを省略した場合。

*   **cdvDebugSigningPropertiesFile**(デフォルト: debug-signing.properties)
    
    同じです cdvReleaseSigningPropertiesFile がデバッグをビルドします。署名キーを他の開発者と共有する必要がある場合に役立ちます。

*   **cdvMinSdkVersion**
    
    `MinSdkVersion` `与えます` で設定の値をオーバーライドします。複数を作成するときに便利です APKs SDK バージョンをに基づいてください。

*   **cdvBuildToolsVersion**
    
    自動検出された `android.buildToolsVersion` 値をオーバーライドします。

*   **cdvCompileSdkVersion**
    
    自動検出された `android.compileSdkVersion` 値をオーバーライドします。

### 拡張 build.gradle

`Build.gradle`、カスタマイズするのではなく、直接編集する必要がある場合`ビルド extras.gradle`をという名前の兄弟ファイルを作成する必要があります。 このファイルは、メインの`build.gradle`が存在する場合にインクルードされます。 ここで例に示します。

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

プラグインは`ビルド extras.gradle`経由でのファイルも含めることができます注意してください。

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### 例のビルド

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true
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

# Android のコマンド ライン ツール

`cordova`コマンド ライン ユーティリティは、一度にいくつかのプラットフォームでアプリケーションをビルドすることができます高度なツールです。 コルドバ フレームワークの古いバージョンをそれぞれのプラットフォームに固有のコマンド ライン ツールのセットを提供します。 CLI に代わるものとしてそれらを使用するには[cordova.apache.org][1]からコルドバのこのバージョンをダウンロードする必要があります。 ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 ターゲットにするプラットフォームを展開します。 ここで説明したツールは、最上位レベルでふつう利用できる `bin` ディレクトリ、それ以外の場合より詳細な方向の**README**ファイルを参照してください。

 [1]: http://cordova.apache.org

プラグインできるようにする低レベルのコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。概要については、アプリケーション ・ プラグインを参照してください。

## プロジェクトを作成します。

実行、 `create` プロジェクト、逆ドメイン スタイル パッケージ識別子、およびアプリケーションの表示名を既存のパスを指定するコマンドです。Mac と Windows の両方の構文を次に示します。

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## ビルド

これをきれいにし、プロジェクトをビルドします。

Mac または Windows をデバッグします。

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

Mac または Windows のリリース：

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## アプリを実行します。

`run`コマンドは、次の*省略可能な*パラメーターを受け入れます。

*   ターゲットを指定します。これが含まれています `--emulator` 、 `--device` 、または`--target=<targetID>`.

*   仕様を作成します。これが含まれています `--debug` 、 `--release` 、または`--nobuild`.
    
    $/path/to/project/cordova/run [ターゲット] は、[ビルド] $ C:\path\to\project\cordova\run.bat [ターゲット] は、[ビルド]

少なくとも 1 つ Android 仮想デバイスの作成、それ以外の場合でそうよう求められますかどうかを確認、 `android` コマンド。 AVD 1 つ以上のターゲットとして使用できる場合はいずれかを選択するよう求められます。 既定では、 `run` コマンドはデバイスが見つからない場合、接続先のデバイスまたは現在実行中のエミュレーターを検出します。

## ログの記録

    $/path/to/project/cordova/log $ C:\path\to\project\cordova\log.bat
    

### クリーニング

    $/path/to/project/cordova/clean $ C:\path\to\project\cordova\clean.bat
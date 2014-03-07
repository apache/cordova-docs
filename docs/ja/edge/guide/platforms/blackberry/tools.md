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

# ブラックベリーのコマンド ライン ツール

`cordova`コマンド ライン ユーティリティは、一度にいくつかのプラットフォームでアプリケーションをビルドすることができます高度なツールです。 コルドバ フレームワークの古いバージョンをそれぞれのプラットフォームに固有のコマンド ライン ツールのセットを提供します。 CLI に代わるものとしてそれらを使用するには[cordova.apache.org][1]からコルドバのこのバージョンをダウンロードする必要があります。 ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 ターゲットにするプラットフォームを展開します。 ここで説明したツールは、最上位レベルでふつう利用できる `bin` ディレクトリ、それ以外の場合より詳細な方向の**README**ファイルを参照してください。

 [1]: http://cordova.apache.org

## プロジェクトを作成します。

実行、 `create` プロジェクト、逆ドメイン スタイル パッケージ識別子、およびアプリケーションの表示名を既存のパスを指定するコマンドです。Mac と Windows の両方の構文を次に示します。

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_project com.example.project_name ProjectName
    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_project com.example.project_name ProjectName
    

**注：**ブラックベリーのプラットホームはパッケージ名のプレース ホルダーを無視します ( `com.example.project_name` ) がそれはまだクロスプラット フォーム ツールで使用するため必須です。

## プロジェクトをビルドします。

ブラックベリーのプロジェクトのため確認してくださいあなたをカスタマイズする、 `project.properties` 、コルドバ プロジェクトのルート ディレクトリ内のファイル。 あなたのブラックベリーの署名キーのパスワードを供給するために行うし、ブラックベリー WebWorks SDK とブラックベリー エミュレーターの実行可能ファイルの場所を指定する必要があります。

    $ /path/to/my_new_project/cordova/build <platform>
    $ /path/to/my_new_project/cordova/build.bat <platform>
    

## エミュレーターを起動します。

ブラックベリーのプロジェクトのため確認してくださいあなたをカスタマイズする、 `project.properties` 、コルドバのプロジェクト ディレクトリのルートにあるファイル。 あなたのブラックベリーの署名キーのパスワードを供給するために行うし、ブラックベリー WebWorks SDK とブラックベリー エミュレーターの実行可能ファイルの場所を指定する必要があります。

    $ /path/to/my_new_project/cordova/run <platform>
    

[選択と表示されたら [いいえ]。

    お使いのコンピューターに接続されている BlackBerry デバイスはありますか？(y/n) $/path/to/my_new_project/cordova/run < プラットフォーム >
    

[選択と表示されたら [いいえ]。

    お使いのコンピューターに接続されている BlackBerry デバイスはありますか？(y/n)
    

## ログの記録

残念ながら、ログ、デバイスから直接ストリーミング現在サポートされていません。 ただし、ブラックベリー脚本とブラックベリーの smartphone デバイスのブラックベリー OS 7.0 を実行して、上記の組み込みの Web インスペクター サポートを提供しています。 また、アプリケーション ログにアクセスできます (への呼び出しを含む `console.log` ) 'lglg' キーを入力して、ホーム画面から「ALT」キーを押したままであなたのデバイス上。
---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: プラットフォームとプラグインのバージョン管理
---

# プラットフォームとプラグインのバージョン管理

バージョン 4.3.0 以降、コルドバは、プラットフォームおよびプラグイン保存および復元する機能を提供します。

この機能を使用して、保存し、すべてのプラットフォームとプラグインのソース コードをチェックインすることがなく既知の状態に自分たちのアプリを復元することができます。

'save' コマンドは、config.xml でアプリのプラットフォームとプラグインのバージョンに関する詳細を格納します。 **cordova prepare**することが発行されたときに '復元' 手順自動的に行われます config.xml ファイルに保存されている情報の使用します。

保存/復元機能が便利になるシナリオの 1 つは、プラットフォームやプラグインに焦点を各チーム メンバーとアプリに、連携する大規模なチームです。 この機能では、簡単にプロジェクトを共有し、リポジトリにチェックインされているコードの重複の量を減らします。

## プラットフォームのバージョン管理

### プラットフォームを保存

プラットフォームを保存するには、次のコマンドを発行します。

    $ cordova platform add <platform[@<version>] | directory | git_url> --save
    

上記のコマンドを実行すると、結果の config.xml はようになります。

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="~4.0.0" />
        ...
    </xml>
    

いくつかの例:

  * android プラットフォームの固定されたバージョンを取得します = > **'保存コルドバ プラットフォームを追加 android-'**を、プロジェクトに追加し、config.xml を更新します。
  * 取得 = > **'保存コルドバ プラットフォームの追加 android@3.7.0-'**をバージョン 3.7.0 npm から android プラットフォームはプロジェクト、その後更新 config.xml にそれを追加します。
  * = > **'コルドバ プラットフォーム android @https://github.com/apache/cordova-android.git - を保存追加'**指定したコルドバ android git リポジトリをクローン、android プラットフォームをプロジェクトに追加します config.xml を更新し、指定した git url をそのバージョンをポイントします。
  * 取得 = > **'保存コルドバ プラットフォームの追加 c:/パス/を/アンドロイド/プラットフォーム-'**を指定したディレクトリから android プラットフォームはプロジェクト、し、更新プログラムの config.xml ファイルとディレクトリにポイントにそれを追加します。

### 既存のプロジェクトのプラットフォームを保存質量

'--save' 上記フラグは、プラットフォームの追加使用を覚えている場合にのみ役に立つ。 既存のプロジェクトがある場合、プロジェクトに追加された現在のすべてのプラットフォームを保存する場合は、使用することができます。

    $ cordova platform save
    

### 更新/プラットフォームを削除します。

また、コマンド 'コルドバ プラットフォーム アップ デート' と 'コルドバ プラットフォームを削除' の間に config.xml から更新/削除することが可能です。

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
    

いくつかの例:

  * 固定バージョン、config.xml の更新のエントリに android プラットフォームのアップデートに加えて = > **'コルドバ プラットフォーム アップ デート android - 保存'**を
  * バージョン 3.8.0、config.xml の更新のエントリに android プラットフォームのアップデートに加えて => **'コルドバのプラットフォームは、android@3.8.0 - を保存更新'**
  * フォルダーで、config.xml の更新のエントリのバージョンに android プラットフォームのアップデートに加えて => **'コルドバのプラットフォームは、/path/to/android/platform - を保存更新'**
  * = > **'保存するコルドバ プラットフォーム削除アンドロイド-'**をプロジェクトから android プラットフォームを削除し、config.xml からそのエントリを削除します。

### プラットフォームの復元

プラットフォームは、 **「コルドバ準備」**コマンドの実行時に自動的に config.xml から復元されます。

インストールするバージョンは、config.xml から撮影バージョン/フォルダー/git_url を指定せず、プラットフォームを追加した場合**場合が見つかりました**.

例:

Config.xml ファイルに次のエントリが含まれているとします。

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>
    

コマンド**'コルドバ プラットフォームは、android を追加'** (ないバージョン/フォルダー/git_url 指定) を実行すると、'android@3.7.0' (config.xml から取得)、プラットフォームがインストールされます。

* * *

## バージョン管理プラグイン

*(プラグインのコマンドがプラグインのコマンドのミラー)*

### プラグインの保存

プラグインを保存するには、次のコマンドを発行します。

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save
    

上記のコマンドを実行すると、結果の config.xml はようになります。

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="~1.0.0" />
        ...
    </xml>
    

いくつかの例:

  * = > **'を保存コルドバ プラグインの追加コルドバ-プラグイン-コンソール-'**をコンソール ・ プラグインの固定されたバージョンを取得します、それをプロジェクトに追加します、次に、config.xml を更新します。
  * 取得 = > **'保存コルドバ プラグインの追加 cordova-plugin-console@0.2.13-'**を android のプラグインは、バージョン 0.2.13 npm からはプロジェクト、その後更新 config.xml にそれを追加します。
  * **'保存コルドバ プラグインの追加 https://github.com/apache/cordova-plugin-console.git-'** = > 指定されたコンソールのプラグインの git リポジトリのクローンを作成、コンソール ・ プラグインをプロジェクトに追加しますし、config.xml を更新および指定した git url をそのバージョンをポイントします。
  * 取得 = > **'保存コルドバ プラグインの追加 c:/パス/を/コンソール/プラグイン-'**を指定したディレクトリからコンソール ・ プラグインはプロジェクト、し、更新プログラムの config.xml ファイルとディレクトリにポイントにそれを追加します。

### 既存のプロジェクトのプラグインを保存質量

'--保存' 上記のフラグは、プラグイン追加時に使用するを忘れないで場合にのみ役に立つ。 既存のプロジェクトがある場合や保存する場合、すべては現在、プロジェクトのプラグインを追加を使用できます。

    $ cordova plugin save
    

### 更新/プラグインを削除

また、コマンド 'コルドバ プラグイン更新' と 'コルドバ プラグインを削除' の間に config.xml から更新/削除することが可能です。

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
    

いくつかの例:

  * 固定されたバージョン、config.xml の更新のエントリをコンソール ・ プラグインの更新に加えて => **「保存コルドバ プラグインのアップデート コルドバ-プラグイン-コンソール」**
  * android のプラグインの更新バージョン 3.8.0、config.xml の更新のエントリに加え => **'コルドバ プラグインは、cordova-plugin-console@0.2.13 - を保存更新'**
  * フォルダーで、config.xml の更新のエントリのバージョンをコンソール ・ プラグインの更新に加えて => **'コルドバ プラグインは、/path/to/console/plugin - を保存更新'**
  * = > **'保存するコルドバ プラグイン削除コルドバ-プラグイン-コンソール-'**をプロジェクトからコンソール ・ プラグインを削除し、config.xml からそのエントリを削除します。

### プラグインを復元します。

プラグインは、 **「コルドバ準備」**コマンドの実行時に自動的に config.xml から復元されます。

バージョン/フォルダー/git_url を指定することがなく、プラグインを追加すると、インストールするバージョンは、config.xml から取ら**場合が見つかりました**.

例:

Config.xml ファイルに次のエントリが含まれているとします。

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="0.2.11" />
        ...
    </ xml>
    

コマンド**'コルドバ プラグインは、コルドバ プラグイン コンソールを追加する'** (ないバージョン/フォルダー/git_url 指定) を実行すると、'cordova-plugin-console@0.2.11' (config.xml から取得)、プラグインがインストールされます。
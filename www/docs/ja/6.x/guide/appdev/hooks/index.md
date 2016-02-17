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

title: フック ガイド
---

# フック ガイド

コルドバのフックは、アプリケーションとプラグインの開発者によって追加することができるまたはあなた専有物によってもコルドバ コマンドをカスタマイズするシステムを構築する特別なスクリプトを表します。 フック スクリプトは、定義済みの特別なフォルダーにそれらを追加することによって定義できる ( `/hooks` ) もしくは構成ファイル ( `config.xml` と `plugin.xml` ) と、次の順序で直列に実行します。

  * アプリケーションからフック `/hooks` ;
  * アプリケーションからフック `config.xml` ;
  * プラグイン フックから`plugins/.../plugin.xml`.

**注**: `/hooks`ディレクトリは、config.xml と plugin.xml にフック要素の使用は推奨と見なされます。

## サポートされているフック タイプ

次のフックの種類がサポートされます。

    after_build
    after_compile
    after_clean
    after_docs
    after_emulate
    after_platform_add
    after_platform_rm
    after_platform_ls
    after_plugin_add
    after_plugin_ls
    after_plugin_rm
    after_plugin_search
    after_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    after_prepare
    after_run
    after_serve
    before_build
    before_clean
    before_compile
    before_docs
    before_emulate
    before_platform_add
    before_platform_rm/
    before_platform_ls
    before_plugin_add
    before_plugin_ls
    before_plugin_rm
    before_plugin_search/
    before_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    before_plugin_uninstall // Plugin hooks in plugin.xml are executed for a plugin being uninstalled only
    before_prepare
    before_run
    before_serve
    pre_package // Windows and Windows Phone only
    

## フックを定義する方法

### `/hooks`ディレクトリ経由で

**注**: このメソッドは、config.xml と plugin.xml にフック要素の使用は推奨と見なされます。

対応するフック タイプが発生したときにカスタム アクションを実行する 'フック' ディレクトリ内のサブフォルダーの名前としてフック タイプを使用して、配置するには、ファイルここでは、たとえばスクリプトします。

    # script file will be automatically executed after each build
    hooks/after_build/after_build_custom_action.js
    

これらのフックを使用する場合は JavaScript のローダブル モジュールとしてではなく、実行可能ファイルとして実行常に。 **注意**: ここでは、スクリプトを実行可能にします。

### Config.xml

フックは、たとえば`< hooks >`要素を使用してプロジェクトの`config.xml`で定義できます。

    <hook type="before_build" src="scripts/appBeforeBuild.bat" />
    <hook type="before_build" src="scripts/appBeforeBuild.js" />
    <hook type="before_plugin_install" src="scripts/appBeforePluginInstall.js" />
    
    <platform name="wp8">
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/wp8/appWP8BeforePluginInstall.js" />
        ...
    </platform>
    
    <platform name="windows8">
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/windows8/appWin8BeforePluginInstall.js" />
        ...
    </platform>
    

### プラグイン フック (plugin.xml)

定義することができますプラグイン開発者としてフックの`plugin.xml`に`< hook >`要素を使用してそのようなスクリプトを実行します。

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />
    
    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>
    

`before_plugin_install`、 `after_plugin_install`、 `before_plugin_uninstall`プラグインをインストール/アンインストールするプラグイン専用のフックが発生します。

## スクリプト インターフェイス

### Javascript

Node.js を使用してフックを作成する場合、次のモジュール定義を使用する必要があります。

```javascript
module.exports = function(context) {
    ...
}
```

Q: を使用して、スクリプトの非同期を作ることができます。

```javascript
module.exports = function(context) {
    var Q = context.requireCordovaModule('q');
    var deferral = new Q.defer();

    setTimeout(function(){
      console.log('hook.js>> end');
    deferral.resolve();
    }, 1000);

    return deferral.promise;
}
```

`コンテキスト`オブジェクトにフックの種類、実行するスクリプトの完全なパスが含まれています, オプションのフックは、コルドバとトップレベル「コルドバ」オブジェクトに渡されるコマンドライン引数。

```json
{
  "hook": "before_plugin_install",
  "scriptLocation": "c:\\script\\full\\path\\appBeforePluginInstall.js",
  "cmdLine": "The\\exact\\command\\cordova\\run\\with arguments",
  "opts": {
    "projectRoot":"C:\\path\\to\\the\\project",
    "cordova": {
      "platforms": ["wp8"],
      "plugins": ["com.plugin.withhooks"],
      "version": "0.21.7-dev"
    },
    "plugin": {
      "id": "com.plugin.withhooks",
      "pluginInfo": {
        ...
      },
      "platform": "wp8",
      "dir": "C:\\path\\to\\the\\project\\plugins\\com.plugin.withhooks"
    }
  },
  "cordova": {...}
}

```

`context.opts.plugin`オブジェクトのみプラグイン フック スクリプトに渡されます。

コルドバの追加モジュールを要求する、次のように`context.requireCordovaModule`を使用してスクリプトのことも。

```javascript
var Q = context.requireCordovaModule('q');
```

**注**: `config.xml`または`plugin.xml`のみを介して定義されている`.js`ファイルに新しいモジュール ローダー スクリプト インターフェイスを使用します。 互換性の理由から`/hooks`フォルダーで指定したフック ファイルはノード child_process スポーン、後述を参照してください ' javascript' を介して実行されます。

### 非 javascript

**注**: Node.js を使用してクロスプラット フォームになるようにフックを書いて強くお勧めします上記の 'Javascript' セクションを参照してください。

非 javascript スクリプトは、プロジェクトのルート ディレクトリからノード child_process スポーンを介して実行され、最初の引数としてルート ディレクトリ パスを持っています。 その他のすべてのオプションは、環境変数を使用してスクリプトに渡されます。

  * CORDOVA_VERSION - コルドバ-CLI のバージョン。
  * CORDOVA_PLATFORMS - カンマ区切りのコマンドに適用されるプラットフォームのリスト (例えば: アンドロイド, ios の)。
  * CORDOVA_PLUGINS - カンマ区切りのプラグインに適用されます、コマンド Id のリスト (例: org.apache.cordova.file、org.apache.cordova.file 転送)
  * CORDOVA_HOOK - 実行されているフックへのパス。
  * CORDOVA_CMDLINE - コルドバに渡された正確なコマンドライン引数 (例えば: コルドバ - ios の実行をエミュレート)

スクリプトには、ゼロ以外の終了コードが返された場合は、親コルドバ コマンドが中止されます。

また、たとえウィンドウで作業しているし、コルドバ CLI は通訳を知るための最初の行として、shebang 行を期待するフック スクリプトない bat ファイル (これは推奨、Windows 以外のオペレーティング システムで動作するようにあなたのスクリプトの場合) のため必要を使用してスクリプトを起動するに注意してください。 Shebang 行は、次の例と一致する必要があります。

    #!/usr/bin/env [name_of_interpreter_executable]
    

## サンプルの使用方法

このサンプルは、コンソール出力生成された .apk ファイル Android プラットフォーム用のサイズにトレースするコルドバ フックの使用方法を示します。

空白の Cordova アプリを作成し、プラットフォーム ビルドするたびに`afterBuild.js`スクリプトを実行するコルドバを指示する`config.xml`に次の定義を追加します。

    <hook type="after_build" src="scripts/afterBuild.js" />
    

`Scripts/afterBuild.js`ファイルを作成し、次の実装を追加します。 我々 は、 `fs.stat`メソッドの非同期バージョンを使用して、フックを介して非同期機能を行うことができる方法を示します。

    module.exports = function(ctx) {
        // make sure android platform is part of build 
        if (ctx.opts.platforms.indexOf('android') < 0) {
            return;
        }
        var fs = ctx.requireCordovaModule('fs'),
            path = ctx.requireCordovaModule('path'),
            deferral = ctx.requireCordovaModule('q').defer();
    
        var platformRoot = path.join(ctx.opts.projectRoot, 'platforms/android');
        var apkFileLocation = path.join(platformRoot, 'build/outputs/apk/android-debug.apk');
    
        fs.stat(apkFileLocation, function(err,stats) {
            if (err) {
                 deferral.reject('Operation failed');
            } else {
                console.log('Size of ' + apkFileLocation + ' is ' + stats.size +' bytes');
                deferral.resolve();
            }
        });
    
        return deferral.promise;
    };
    

上記の例のパラメーター `ctx`コルドバによって渡されるスクリプトの完全なパス、ターゲット プラットフォーム、コマンドライン引数などの実行コンテキストを表しし、も追加のヘルパー機能を公開します。 詳細については上記を参照してください`スクリプト インターフェイス`セクション。

Android プラットフォームを追加し、ビルドを実行することができます。

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
    

多くの適切な使用例はここで見つけることができます。

<http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>
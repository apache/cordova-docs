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

# 概要

コルドバは、オープン ソース モバイル開発フレームワークです。 HTML5、CSS3、JavaScript などの標準的な web 技術開発を使用するクロス プラットフォーム、各モバイル プラットフォームのネイティブ開発言語を回避することができます。 アプリケーション各プラットフォームを対象としたラッパー内で実行される各デバイスのセンサー、データ、およびネットワークの状態をアクセスするための標準に準拠した API バインドに依存しています。

場合は、コルドバを使用します。

*   モバイル開発者と各プラットフォームの言語とツールを再実装しなくても 1 つ以上のプラットフォーム上でアプリケーションを拡張する設定します。

*   web 開発者と様々 なアプリケーションの配布用にパッケージ化されている web アプリケーションを配置するポータルを格納します。

*   モバイル開発者、 *WebView* (ブラウザー ウィンドウ) デバイス レベルの Api にアクセスできるとネイティブ アプリケーションのコンポーネントを混在することに興味があるまたはネイティブと WebView コンポーネント間のプラグイン インターフェイスを開発する場合。

## 基本的なコンポーネント

Cordova アプリ共通に頼る `config.xml` ファイルをアプリケーションに関する情報を提供し、シフト方向に応答かどうかなど、そのしくみに影響を与えるパラメーターを指定します。 このファイルは W3C の[Web アプリのパッケージ化][1]、または*ウィジェット*は、仕様に準拠しています。

 [1]: http://www.w3.org/TR/widgets/

アプリケーション自体が web ページとして実装されている、既定では、どのような CSS、JavaScript、画像、メディア ファイルを参照、 *index.html*という名前またはその他のリソースを実行するために必要な。 アプリは、アプリ ストアに配布するネイティブ アプリケーションのラッパー内の*WebView*として実行します。

コルドバ有効 WebView その全体のユーザー インターフェイスを持つアプリケーションがあります。 On some platforms, it can also be a component within a larger, hybrid application that mixes the WebView with native application components. (See Embedding WebViews for details.)

A *plugin* interface is available for Cordova and native components to communicate with each other. This enables you to invoke native code from JavaScript. As of version 3.0, plugins provide bindings to standard device APIs. Third-party plugins provide additional bindings to features not necessarily available on all platforms. You can find these third-party plugins in the [plugin registry][2] and use them in your application. You can also develop your own plugins, as described in the Plugin Development Guide. Plugins may be necessary, for example, to communicate between Cordova and custom native components.

 [2]: http://plugins.cordova.io

## 開発パス

As of version 3.0, you can use two basic workflows to create a mobile app. While you can often use either workflow to accomplish the same task, they each offer advantages:

*   **Cross-platform workflow**: Use this workflow if you want your app to run on as many different mobile operating systems as possible, with little need for platform-specific development. This workflow centers around the `cordova` utility, otherwise known as the Cordova *CLI*, that was introduced with Cordova 3.0. The CLI is a high-level tool that allows you to build projects for many platforms at once, abstracting away much of the functionality of lower-level shell scripts. The CLI copies a common set of web assets into subdirectories for each mobile platform, makes any necessary configuration changes for each, runs build scripts to generate application binaries. The CLI also provides a common interface to apply plugins to your app. (For details on the CLI, see The Command-Line Interface.)

*   **Platform-centered workflow**: Use this workflow if you want to focus on building an app for a single platform and need to be able to modify it at a lower level. You need to use this approach, for example, if you want your app to mix custom native components with web-based Cordova components, as discussed in Embedding WebViews. As a rule of thumb, use this workflow if you need to modify the project within the SDK. This workflow relies on a set of lower-level shell scripts that are tailored for each supported platform, and a separate Plugman utility that allows you to apply plugins. While you can use this workflow to build cross-platform apps, it is generally more difficult because the lack of a higher-level tool means separate build cycles and plugin modifications for each platform. Still, this workflow allows you greater access to development options provided by each SDK, and is essential for complex hybrid apps. (See the various Platform Guides for details on each platform's available shell utilities.)

When first starting out, it may be easiest to use the cross-platform workflow to create an app, as described in The Command-line Interface. You then have the option to switch to a platform-centered workflow if you need the greater control the SDK provides. Lower-level shell utilities are available at [cordova.apache.org][3] in a separate distribution than the CLI. For projects initially generated by the CLI, these shell tools are also available in the project's various `platforms/*/cordova` directories.

 [3]: http://cordova.apache.org

**NOTE**: Once you switch from the CLI-based workflow to one centered around the platform-specific SDKs and shell tools, you can't go back. The CLI maintains a common set of cross-platform source code, which on each build it uses to write over platform-specific source code. To preserve any modifications you make to the platform-specific assets, you need to switch to the platform-centered shell tools, which ignore the cross-platform source code, and instead relies on the platform-specific source code.
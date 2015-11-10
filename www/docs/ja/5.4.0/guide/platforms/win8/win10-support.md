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

title: Windows 10 コルドバ
---

# Windows 10 コルドバ

多分、代わりにそれを呼び出すこと"10 を Windows コルドバの" Windows 10 プラットフォーム セキュリティ制限あなたの方法のうちを取得して web にコルドバのサポートをもたらすことを再設計、HTML と JavaScript アプリのプラットフォームを持っています。

## Windows 10 入門

Windows 10 を追加するアプリ サポートは Windows ターゲット プラットフォームのバージョンを 10.0 に設定すると同じくらい簡単です。

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


両方の設定これらの設定でビルドするときだけ、1 つ .appx (.appxupload) を作成するとします。 彼らは、少なくとも Windows 10 を必要があります。

### リモート モードとローカル モード

リモート モードは、Windows 10 で HTML アプリケーションの Windows プラットフォームの新機能です。 Windows 8 と 8.1 は、HTML アプリケーションが Windows 10 で「ローカル モード」と呼ばれるもので働いていた。 ローカル モードでは、HTML アプリケーションはネイティブ Windows API 表面および機能へのフル アクセスをあります。 悪意のあるコードによる個人情報の漏洩になる可能性があるスクリプト注入攻撃を防ぐためにローカル モードはインライン スクリプトを禁止し、明示的なコンテキスト (`MSApp.execUnsafeLocalFunction`以内に DOM を操作する開発者が必要です。).

リモート モードは、変更することがなく、コード内で直接 jQuery や AngularJS のような修飾されていないライブラリを使用することが可能になるこれらの要件を排除します。 これを行うには、Windows ストアでアプリを証明するときに特定の機能を宣言するあなたの能力を削除します。 これらの機能は通常の除去は、特定の機能への行き方ですがそれは Api や戦術の異なる組み合わせを使用する必要があります。

### リモート モードの機能に及ぼす影響

次の機能は、Windows ストアにリモート モード アプリケーションを配置するときに使用できません。

  * エンタープライズ認証 (`enterpriseAuthentication`)
  * 共有ユーザー証明書 (`sharedUserCertificates`)
  * ドキュメント ライブラリ (`documentsLibrary`)
  * 音楽ライブラリ (`musicLibrary`)
  * 画像ライブラリ (`picturesLibrary`)
  * 動画ライブラリ (`videosLibrary`)
  * リムーバブル [ストレージ](../../../cordova/storage/storage.html) (`removableStorage`)
  * インターネット クライアント/サーバー (`internetClientServer`) - その`internetClient`に注意してくださいが許可されても
  * プライベート ネットワーク クライアント/サーバー (`privateNetworkClientServer`)

各ライブラリの制限はユーザーが[ファイル ピッカー](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx)を通じてファイル システムと対話することを要求することによって回避することがあります。 これは、悪意のある挿入されたコードが任意ファイル システムにアクセスするを防ぎます。

ネットワーク関連の制限は、チェック機能を使用していない API を使用するか、または`XMLHttpRequest`や Web ソケットなどの標準的なインターネット通信チャネル経由で通信を仲介することによって回避する必要があります。

エンタープライズ認証およびユーザーの証明書の共有機能は、エンタープライズ シナリオでとりわけ目標とされます。 これらの機能は、プライベート/エンタープライズ対応の App ストアでサポートされるので、まだこれらをサポートすることができます内部展開機構に展開しようとしているアプリケーションを構築する場合。 しかし、彼らはリモート モード パブリック Windows ストアでアプリのサポートされていません。 これらの機能の 1 つは、アプリ マニフェストで検出された場合、Windows 10 をターゲットをビルドすると、警告が表示されます。

## 参照

### config.xml の設定

#### windows-target-version, windows-phone-target-version

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


*少なくとも 1 つは必要です。*

これらの設定は特定バージョンの Windows または Windows Phone アプリ パッケージのターゲットにしたいです。

**有効な値**

  * `10.0`、 `UAP`: Windows 10 普遍的なアプリケーション プラットフォームの構築
  * `8.1`: ビルドの Windows 8.1 または Windows Phone 8.1
  * `8.0`: Windows 8.0 の構築します。 Windows Phone では無効です (代わりに**wp8**コルドバ プラットフォームを使用)

**シナリオ**

のみのみ Windows 10 を対象としている、場合は、config.xml ファイルに 1 つの`windows-target-version`設定があります。

#### WindowsDefaultUriPrefix

    <preference name="WindowsDefaultUriPrefix" value="ms-appx://|ms-appx-web://" />


この設定は、アプリがそのスタートアップ URI として**ローカル コンテキスト**または**リモート コンテキスト**をターゲットにするかどうかを識別します。 既定でリモート コンテキストは、Windows の 10 を作成するとき (`ms-appx-web://`).

リモート モードの機能制限の影響を受けないローカル モード アプリケーションを作成するためにこの設定を設定する必要が`ms-appx://`リモート Uri に`< アクセス >`要素を宣言しません。

**有効な値**

  * `ms-appx://`(Windows 8.0、8.1 の既定値): スタート ページがローカル コンテキストで実行されます。
  * `ms-appx-web://`(Windows 10 の既定値): スタート ページがリモート コンテキストで実行

#### {SDK} MinVersion、{SDK} MaxVersionTested

*オプション*

    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
    <preference name="Windows.Mobile-MinVersion" value="10.0.9927.0" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Microsoft.Band-MinVersion" value="10.0.11.0" />


これらの設定が (普遍的な Windows、Windows Mobile、または Xbox に限定されないを含む) どの生態系を識別し、その最小/最大のバージョンと互換性があります。 まだプラットフォーム普遍的なアプリケーション プラットフォーム (ので基本 OS として Windows 10) をサポートしていることが必要です。 ただし、アプリケーションがのみ承ります (Xbox 上でゲームのストリーミング) などの特定のデバイスの特定の機能に注意してください示唆された可能性があります。

**有効な値**

それぞれの値に 3 つの部分があります: **SDK**、**バージョンの制限**、および**バージョンの値**。 これらの設定は、 `Windows`または`Microsoft`に始まり、 `MinVersion -`または`- MaxVersionTested`で終わるによって検出されました。

  * **SDK**は、対象とする専門的なプラットフォームを定義します。 既定値は`Windows.Universal`です。 これらの有効な値は、`パッケージ/Depednencies/TargetPlatform`要素内の AppxManifest スキーマで定義されます。
  * 、 **バージョン制限** アプリケーション互換性の規則を定義します。 たとえば場合、 `-MinVersion` それをロードすることはできません少なくとも対応する SDK のと、10.1.0.0 をサポートしていない OS とバージョンと、10.1.0.0 に設定されます。
      * `MinVersion-`必要な SDK の最低限のバージョンを指定します。
      * `-MaxVersionTested`は、SDK の最も高いテスト バージョンを指定します。 対応する SDK の新しいバージョンがリリースされた場合は、指定されたバージョンの互換モードで実行されます。
  * **バージョンの値**は*major.minor.build.qfe*の形で 4 整数の組.

Config.xml ファイルのこれらの種類の設定を指定しない場合、既定では Windows.Universal バージョン 10.0.0.0 が選択されます。

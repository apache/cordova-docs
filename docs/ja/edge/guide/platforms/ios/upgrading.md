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

# IOS のアップグレード

このガイドは、コルドバの旧バージョンからアップグレードする iOS のプロジェクトを変更する方法を示します。 これらの命令のほとんど、古いの前にあるコマンド ライン ツールのセットで作成されたプロジェクトに適用されます、 `cordova` CLI ユーティリティ。 CLI のバージョンを更新する方法については、コマンド ライン インターフェイス参照してください。

**注**: Xcode 4.6 必要、Xcode 5 はお勧めします。 現在、Apple の App Store に提出する必要があります使用する iOS SDK の最新の出荷されたバージョン iOS 7 であります。 iOS 7 SDK 必要はありませんまだ、しかしこれはすぐに変更可能性があります。

## 3.2.0 プロジェクト アップグレード 3.1.0

CLI 以外のプロジェクトを実行します。

        bin/パス/を/プロジェクトの更新
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update ios`

## アップグレード 3.0.0 プロジェクト 3.1.0

CLI 以外のプロジェクトを実行します。

        bin/パス/を/プロジェクトの更新
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update ios`

iOS 7 の問題:

1.  削除 `width=device-width, height=device-height` から、 `index.html` ファイルの `viewport` `meta` タグ。 （[関連するバグ][1]を参照してください。.)

2.  IOS 7 サポートのメディア、メディアのキャプチャ、splashscreen コア プラグインを更新します。

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 問題：

1.  Xcode 5 (問題ナビゲーター） でそうように求められます場合は、プロジェクトの設定を更新します。

2.  更新、**コンパイラ C の/C + + Objective-C** **ビルド オプション**] セクションで [**ビルド設定**] タブで設定します。 **既定のコンパイラ (アップル LLVM 5.0)**を選択します。.

## 2.9.0 から CLI (3.0.0) へのアップグレード

1.  コマンド ライン インターフェイスで説明されているようにコルドバ、CLI を使用して新しい Apache コルドバ 3.0.0 プロジェクトを作成します。

2.  たとえばコルドバ プロジェクトにあなたのプラットフォームを追加します。`cordova
platform add ios`.

3.  プロジェクトの内容をコピー `www` ディレクトリを `www` で作成したコルドバ プロジェクトのルート ディレクトリ。

4.  コピーまたは元のプロジェクトから任意のネイティブの資産を上書き ( `Resources` など)、確実に新しいファイルを追加する、 `.xcodeproj` プロジェクト。 IOS のプロジェクトのビルド中、 `platforms\ios` ディレクトリ。

5.  コピー、 `config.xml` に、 `www` ディレクトリ、すべてのプラグインの定義を削除します。プラットフォーム ディレクトリの代わりにここでの設定を変更します。

6.  コルドバ CLI ツールを使用して、必要な任意のプラグインをインストールします。CLI 処理するすべてのコア Api のプラグインとして追加する必要がありますので注意してください。のみ 3.0.0 プラグインは CLI と互換性があります。

7.  ビルドおよびテストします。

## 3.0.0 にアップグレード 2.9.0 プロジェクト

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 3.0.0 ソースを展開`~/Documents/Cordova-3.0.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova.js` (バージョン サフィックスをもうがない、バージョン ヘッダー ファイル自体には注意してください) に新しいプロジェクトからファイルを `www` ディレクトリと削除あなた `www/cordova.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

7.  削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

**注**: コルドバ 3.0.0 を皮切りに、プラグインがあらかじめインストールされていないと使用する必要があります、 `plugman` それらを自分でインストールするコマンド ライン ユーティリティです。 Plugman を使用してプラグインを管理するを参照してください。

## アップグレード 2.8.0 プロジェクト 2.9.0

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.9.0 ソースを展開`~/Documents/Cordova-2.9.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova.js` (バージョン サフィックスをもうがない、バージョン ヘッダー ファイル自体には注意してください) に新しいプロジェクトからファイルを `www` ディレクトリと削除あなた `www/cordova.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

7.  削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

## アップグレード 2.7.0 2.8.0 にプロジェクト

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.8.0 ソースを展開`~/Documents/Cordova-2.8.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova.js` (バージョン サフィックスをもうがない、バージョン ヘッダー ファイル自体には注意してください) に新しいプロジェクトからファイルを `www` ディレクトリと削除あなた `www/cordova-2.7.0.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

7.  更新 `<plugin>` 内のタグの `config.xml` ファイルを `<feature>` タグ。 既存のことに注意してください `<plugin>` タグまだ動作しますは推奨されません。 この情報をコピーすることができます、 `config.xml` 、新しいプロジェクト用のファイル。 たとえば。
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

9.  これら 2 つのフレームワークをプロジェクトに追加します。
    
        OpenAL ImageIO
        

10. ターゲット プロジェクトの**ビルド設定**を更新します。**リンク → その他のリンカーのフラグ**の下で編集する**"- Obj - C"** **"-ObjC」**.

11. ターゲット プロジェクトの**ビルド設定**を更新します。 **リンク → その他のリンカーのフラグ**の下を変更**"-all_load"**を `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a` 。 これを行うにで定義されている問題がある場合必要がありますのみ[この問題します][2]。.

 [2]: https://issues.apache.org/jira/browse/CB-3458

## アップグレード 2.6.0 へ 2.7.0 プロジェクト

1.  ダウンロードし、たとえば、ハード ドライブ上の永続的なディレクトリの場所へ 2.7.0 コルドバ ソースを抽出、`~/Documents/Cordova-2.7.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova-2.7.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-2.6.0.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-2.7.0.js` ファイル。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、 `AppDelegate.m` ファイルから、新しい 1 つによると （[この diff][3]を見るプロジェクト).

8.  `config.xml`ファイルに[この行を削除][4].

9.  削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## 2.6.0 にアップグレード 2.5.0 プロジェクト

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.6.0 ソースを展開`~/Documents/Cordova-2.6.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  プロジェクトのコピー `www/cordova-2.6.0.js` にファイルを `www` ディレクトリ、および削除を `www/cordova-2.5.0.js` ファイル。

6.  コルドバのスクリプト参照を更新あなた `www/index.html` ファイルと共に、スクリプトを参照する他のファイル) を指す、新しい `cordova-2.6.0.js` ファイル。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、 `AppDelegate.m` ファイルから、新しい 1 つによると （[この diff][5]を見るプロジェクト).

8.  `config.xml`ファイルは、[この新しい行を追加][6].

9.  `config.xml`ファイルは、[この新しい行を追加][7].

10. `config.xml`ファイル、 [UIWebViewBounce DisallowOverscroll に変更されているしデフォルト値が異なる][8].

11. `config.xml`ファイル、 `EnableLocation` の好みは廃止されました。

12. 削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## アップグレード 2.4.0 2.5.0 にプロジェクト

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.5.0 ソースを展開`~/Documents/Cordova-2.5.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova-2.5.0.js` に新しいプロジェクトからファイルを `www` ディレクトリと削除あなた `www/cordova-2.4.0.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-2.5.0.js` ファイル。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、 `AppDelegate.m` ファイルから、新しい 1 つによると （[この diff][9]を見るプロジェクト).

8.  `config.xml`ファイル、[これらの新しい行を追加][10].

9.  `config.xml`ファイル、[ルート要素を編集する、ウィジェットにコルドバからそれを変える][11].

10. `config.xml`ファイル、 [OpenAllWhitelistURLsInWebView 設定の削除][12].

11. 削除、 `cordova` ディレクトリ、およびコピー、 `cordova` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。2.5.0 で、これはスクリプトを更新します。

12. 削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## アップグレード 2.3.0 2.4.0 にプロジェクト

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.4.0 ソースを展開`~/Documents/Cordova-2.4.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova-2.4.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-2.3.0.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-2.4.0.js` ファイル。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、 `MainViewController.m` ファイルから、新しい 1 つによると （[この diff][13]を見るプロジェクト).

8.  更新 (または置き換えるには、決してファイルを変更した場合)、 `AppDelegate.m` ファイルから、新しい 1 つによると （[この diff][14]を見るプロジェクト).

9.  `config.xml`ファイルは、[この新しい行を追加][15].

10. 削除、 `cordova` ディレクトリ、およびコピー、 `cordova` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。2.4.0 でこのスクリプトを修正します。

11. 削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

12. リソースとしてプロジェクトに AssetsLibrary.framework を追加します。 ( [Apple のドキュメント][16]について参照してくださいそう方法。)。

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## アップグレード 2.2.0 2.3.0 にプロジェクト

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.3.0 ソースを展開`~/Documents/Cordova-2.3.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova-2.3.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-2.2.0.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-2.3.0.js` ファイル。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、 `MainViewController.m` 新しいプロジェクトからの 1 つによると。

8.  削除、 `cordova` ディレクトリ、およびコピー、 `cordova` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。2.3.0、新しいスクリプトがあります。

9.  削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

10. 変換、 `Cordova.plist` ファイルを `config.xml` 、スクリプトを実行して `bin/cordova\_plist\_to\_config\_xml` プロジェクト ファイル。

11. InAppBrowser プラグインを追加、 `config.xml` の下でこのタグを追加することによって `<cordova><plugins>` :
    
        < プラグイン名"InAppBrowser"の値を = ="CDVInAppBrowser"/>
        

12. Objective-C のプラグインはもう*ない*ホワイト注意ください。 ホワイト リストにアプリケーションのホワイト リストとの接続を設定する必要が、 `User-Agent` メイン コルドバ WebView として同じユーザー エージェントへの接続のヘッダー。 アクセスしてこれを得ることができる、 `userAgent` メイン ビュー コント ローラーをオフ プロパティ。 メイン ビュー コント ローラー ( `CDVViewController` ) はまた、 `URLisAllowed` URL ホワイト リストを渡すかどうかをチェックするメソッド。

13. デバイス API の変更:
    
    *   IOS は、device.platform を返すを使用して `iPhone` 、 `iPad` または `iPod Touch` （正しく） を返します今;`iOS`.
    *   IOS は、ユーザーのデバイスの名前を返す使用 (すべてのプラットフォームでは非推奨今) device.name (例えば ' Shazron の iPhone 5 '）;今、それを返すために使用どのような device.platform を返します： `iPhone` 、 `iPad` または`iPod Touch`.
    *   すべてのプラットフォーム、device.model; と呼ばれる新しいプロパティがありますこれは特定のデバイス モデルを返します、例えば `iPad2,5` (他のプラットフォームでは、返すを返すために使用どのような device.name)。

## 2.2.0 にプロジェクト アップグレード 2.1.0

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.2.0 ソースを展開`~/Documents/Cordova-2.2.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova-2.2.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-2.1.0.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-2.2.0.js` ファイル。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、 `MainViewController.m` 新しいプロジェクトからの 1 つによると：
    
    *   更新 → viewWillAppear

8.  コピー、 `cordova` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。2.2.0、これは、更新されたエミュレート' スクリプト。

9.  次に、更新、 `CordovaLib` サブ プロジェクト参照。 コルドバ 2.1.0 以降では、使用していない CORDOVALIB Xcode 変数もうどこを参照するとき `CordovaLib` が存在する、参照は絶対参照、現在。
    
    1.  ターミナル.app を起動します。
    2.  コルドバをインストールした場所に移動 (手順 1 を参照) で、 `bin` サブディレクトリ
    3.  最初のパラメーターは、プロジェクトのパスをあなたの以下のスクリプトを実行 `.xcodeproj` ファイル。
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**注**: コードを至る 2.2.0 で、 `bin/create` スクリプトのコピーで、 `CordovaLib` プロジェクトにプロジェクトのサブ。 セットアップの同じようなものが、ちょうど右のコピー `CordovaLib` 更新をプロジェクト ディレクトリに、 `CordovaLib` サブテーマ Xcode ファイル インスペクター (プロジェクト) の相対位置。

## アップグレード 2.0.0 プロジェクト 2.1.0

コルドバ 2.1.0 と `CordovaLib` を**自動参照カウント (ARC)**を使用してアップグレードされました。 必要な**アーク**を使用する CordovaLib が**アーク**を使用してプロジェクトをアップグレードする場合にアップグレードするください使用しないメニューから Xcode 移行ウィザード：**編集 → → リファクタリング... Objective-C の弧に変換**、libCordova.a の選択を解除し、ウィザードを完了するまで実行します。

1.  ダウンロードし、するたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.1.0 ソースを展開`~/Documents/Cordova-2.1.0`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova-2.1.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-2.0.0.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-2.1.0.js` ファイル。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、 `AppDelegate.m` 新しいプロジェクトからの 1 つによると：
    
    *   編集 → アプリケーション: didFinishLaunchingWithOptions:
    *   追加 → アプリケーション: supportedInterfaceOrientationsForWindow:

8.  更新 (または置き換えるには、決してファイルを変更した場合)、 `MainViewController.m` 新しいプロジェクトからの 1 つによると：
    
    *   追加 → viewWillAppear

9.  コピー、 `cordova` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。2.1.0 でスペースを含むパスをサポートする更新されたスクリプトがあります。

10. 削除する、 `VERSION` ファイルをプロジェクトから参照 (*ない*1 つで`CordovaLib`).

11. 次に、更新、 `CordovaLib` サブ プロジェクト参照。 コルドバ 2.1.0 以降では、使用していない CORDOVALIB Xcode 変数もうどこを参照するとき `CordovaLib` が存在する、参照は絶対参照、現在。
    
    1.  ターミナル.app を起動します。
    2.  コルドバをインストールした場所に移動 (手順 1 を参照) で、 `bin` サブディレクトリ
    3.  最初のパラメーターは、プロジェクトのパスをあなたの以下のスクリプトを実行 `.xcodeproj` ファイル。
        
        `update_cordova_subproject パス/を/あなた/プロジェクト/xcodeproj`

## アップグレード 1.9.0 プロジェクト 2.0.0

1.  コルドバ 2.0.0 をインストールします。

2.  IOS コマンド ライン ツールで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

3.  コピー、 `www/cordova-2.0.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-1.9.0.js` ファイル。

4.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-2.0.0.js` ファイル。

5.  コピー、 `cordova` (場合プロジェクト コマンド ライン ツール) は、プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

6.  下の新しいエントリを追加 `Plugins` で、 `Cordova.plist` ファイル、**サポート ファイル**のグループの下で。 キーが `Device` で、値は`CDVDevice`.

7.  削除`Cordova.framework`.

8.  削除 `verify.sh` **サポート ファイル**グループから。

9.  プロジェクト ナビゲーターでプロジェクト アイコンを選択して、**ターゲット**プロジェクトを選択し、[**ビルド設定**] タブを選択します。

10. **プリプロセッサ マクロ**を検索し、すべて削除します**CORDOVA_FRAMEWORK = 1**の値。

11. 検索、 `CordovaLib` ホーム ・ フォルダーの下に、ハード ドライブにインストールされているディレクトリ `Documents` サブディレクトリ。

12. 検索、 `CordovaLib.xcodeproj` ファイルで、 `CordovaLib` ディレクトリ、その後ドラッグ アンド ドロップ、ファイルをプロジェクトに。それは、サブプロジェクトとして表示されます。

13. プロジェクトをビルドし、関連するいくつかのエラーを取得する必要があります `#import` ディレクティブ。

14. ため、 `#import` エラー、変更このスタイルでの輸入品を任意の引用：
    
        #import "CDV.h"
        
    
    このブラケット ベース スタイル。
    
        #import <Cordova/CDV.h>
        
    
    いずれかを削除して `#ifdef` 、コルドバの周囲にラッパーをインポートして、彼らはもはや必要ありません （輸入が今統一される)

15. もう一度、プロジェクトをビルドしする必要はありませんいずれか `#import` エラー。

16. プロジェクト ナビゲーターで**プロジェクトのアイコン**を選択、**ターゲット**プロジェクトを選択し、[**ビルド フェーズ**] タブを選択します。

17. **ターゲットの依存関係**の位相、し選択**+**ボタンを展開します。

18. 選択して、 `CordovaLib` ターゲット、し**追加**] ボタンを選択します。

19. 最初の**リンク ライブラリとバイナリ**フェーズ (フレームワークの束を既に含める必要があります) を展開し、 **+**の選択ボタン。

20. 選択、 `libCordova.a` スタティック ライブラリは、[**追加**] ボタンを選択します。

21. **スクリプトの実行**フェーズを削除します。

22. プロジェクト ナビゲーターで**プロジェクトのアイコン**を選択、**ターゲット**プロジェクトを選択し、[**ビルド設定**] タブを選択します。

23. **その他のリンカーのフラグ**を検索し、値を追加**-force_load**と**Obj-C**.

24. 展開、 `CordovaLib` サブ プロジェクト。

25. 検索、 `VERSION` ファイルは、(コピーではなく、それへのリンクを作成する) をメイン プロジェクトにドラッグします。

26. **追加フォルダーを作成するグループ**のラジオボタンを選択し、[**完了**] ボタンを選択します。

27. 選択、 `VERSION` 、前の手順でドラッグしたファイル。

28. **ファイル インスペクター**を表示する**オプション コマンド 1**のキーの組み合わせ入力 (または menuitem**表示 → ユーティリティ → ファイル インスペクターの表示**).

29. ドロップ ダウン メニューを**ファイル検査**で**場所**に対して**相対 CORDOVALIB**を選択します。.

30. 設定、Xcode **Xcode 設定 → 場所 → 派生データ高度な...**を**ユニークな**統一されたヘッダーを見つけることができますように。

31. プロジェクト ナビゲーターで**プロジェクトのアイコン**を選択、**ターゲット**を選択し、[**ビルド設定**] タブを選択します。

32. **ヘッダー検索パス**で検索します。この設定では、これら 3 つの値は、引用符を含むを追加します。
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. **その他のリンカーのフラグ**を検索します。この設定では、この値を追加します。
    
        -weak_framework CoreFoundation
        

34. プロジェクトをビルドし、それをコンパイルして問題**なく**リンクする必要があります。.

35. **スキーム**] ドロップダウンから、プロジェクトを選択し、[ **iPhone 5.1 シミュレータ**.

36. [**実行**] ボタンを選択します。

**注**: 手がかり Xcode でコンソール ・ ログでエラーの確認してくださいシミュレータで期待どおりにプロジェクトが動作していない場合。

## 1.8.X プロジェクト 1.9.0 をアップグレードします。

1.  コルドバ 1.9.0 をインストールします。

2.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

3.  コピー、 `www/cordova-1.9.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-1.8.x.js` ファイル。

4.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-1.9.0.js` ファイル。

**注**: 1.9.0 サポートする新しい `BackupWebStorage` ブール `Cordova.plist` 設定。 それはデフォルトで有効になっているので、設定それ `false` 特に iOS の 6 で、それを無効にします。 参照してください[リリース ノート: サファリと UIKit セクション][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## 1.8.X プロジェクト アップグレード 1.7.0

1.  コルドバ 1.8.0 をインストールします。

2.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

3.  コピー、 `www/cordova-1.8.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-1.7.x.js` ファイル。

4.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-1.8.0.js` ファイル。

キャプチャ API を使用する、新しい**ipad と網膜ディスプレイ**資産必要があります。

1.  コピー、 `Resources/Capture.bundle` 、上書き、既存のプロジェクトのディレクトリに新しいプロジェクトからの項目 `Resources/Capture.bundle` アイテム。

2.  プロジェクトでは、選択、 `Capture.bundle` 項目 xcode プロジェクト ナビゲーターのあなたに**削除**キーを入力し、表示されるダイアログ ボックスから**削除する参照**を選択します。

3.  新しいドラッグ `Capture.bundle` xcode プロジェクト ナビゲーターはあなたに上記の手順 1 でオプションを選択、**追加フォルダーを作成するグループ**。

## 1.7.0 1.6.X プロジェクトのアップグレード

1.  コルドバ 1.7.0 をインストールします。

2.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

3.  コピー、 `www/cordova-1.7.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-1.6.0.js` ファイル。

4.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-1.7.0.js` ファイル。

## アップグレード 1.5.0 1.6.x にプロジェクト

1.  コルドバ 1.6.1 をインストールします。

2.  バックアップを作成 `AppDelegate.m` 、 `AppDelegate.h` 、 `MainViewController.m` 、 `MainViewController.h` 、および `Cordova.plist` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.5.0-Based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  追加するすべての新しい `MainViewController` と `AppDelegate` 、Xcode プロジェクトへファイルを。

6.  コピー、 `www/cordova-1.6.1.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/cordova-1.5.0.js` ファイル。

7.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-1.6.1.js` ファイル。

8.  追加、新しい `Cordova.plist` ファイルをプロジェクトに。 統一コルドバ JavaScript ファイル （Android とブラックベリーからのものと一致するコアのプラグインのサービスの名前を変更する必要がありますので、これは必要です。`cordova-js`).

9.  統合の設定、新しいにあなたの**バックアップ Cordova.plist**でいた**プラグイン**と**ExternalHosts**のエントリ`Cordova.plist`.

10. 統合、バックアップ内にあるプロジェクトに固有のコード `AppDelegate.h` と `AppDelegate.m` に新しい `AppDelegate` ファイル。 任意 `UIWebViewDelegate` または `CDVCommandDelegate` でコード `AppDelegate.m` に行く必要がある `MainViewController.m` 今 (そのファイル内のコメント アウト セクションを参照してください)。

11. あなたのバックアップであるプロジェクトに固有のコードを統合 `MainViewController.h` と `MainViewController.m` に新しい MainViewController ファイル。

12. プロジェクト ナビゲーターでプロジェクト アイコンをクリックして、**プロジェクト**を選択し、[**ビルド設定**] タブを選択します。

13. 入力**コンパイラ C の/C + + Objective-C**の検索フィールド。

14. **アップル LLVM コンパイラ 3.1**値を選択します。

## 1.4.X プロジェクト 1.5.0 をアップグレードします。

1.  コルドバ 1.5.0 をインストールします。

2.  新しいプロジェクトを作成し、一度それを実行します。この新しいプロジェクトから資産の一部を必要があります。

3.  コピー、 `www/cordova-1.5.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/phonegap-1.4.x.js` ファイル。

4.  コルドバのスクリプト参照に更新あなた `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す新しいコルドバ `cordova-1.5.0.js` ファイル。

5.  検索 `PhoneGap.framework` 、プロジェクト ナビゲーターでそれを選択します。

6.  **削除**キーを入力し、削除、 `PhoneGap.framework` プロジェクト ナビゲーターの参照。

7.  (**ファイルの追加**シート） プロジェクトにファイルを追加するシートをドロップダウンする必要があります**オプション コマンド A**のキーの組み合わせを入力します。 **追加フォルダーを作成済みグループ**のラジオボタンが選択されていることを確認してください。

8.  フォルダーに移動するための別のシートにドロップダウンする必要があります**シフト コマンド G**のキーの組み合わせ入力 (、**フォルダーに移動する：**シート)。

9.  入力してください `/Users/Shared/Cordova/Frameworks/Cordova.framework` で、**フォルダーに移動する：**シートし、 **[移動**] ボタンを押します。

10. **ファイルの追加**シートで、**追加**ボタンを押します。

11. 選択 `Cordova.framework` プロジェクト ナビゲーターで。

12. **ファイル インスペクター**を表示する**オプション コマンド 1**のキーの組み合わせを入力します。.

13. ドロップ ダウン メニューを**ファイル検査**で**場所**の**絶対パス**を選択します。.

14. (**ファイルの追加**シート） プロジェクトにファイルを追加するシートをドロップダウンする必要があります**オプション コマンド A**のキーの組み合わせを入力します。 **追加フォルダーを作成済みグループ**のラジオボタンが選択されていることを確認してください。

15. フォルダーに移動するための別のシートにドロップダウンする必要があります**シフト コマンド G**のキーの組み合わせ入力 (、**フォルダーに移動する：**シート)。

16. 入力してください `~/Documents/CordovaLib/Classes/deprecated` で、**フォルダーに移動する：**シートし、 **[移動**] ボタンを押します。

17. **ファイルの追加**シートで、**追加**ボタンを押します。

18. `AppDelegate.h`、 `AppDelegate.m` 、および `MainViewController.h` 、ファイル全体を置き換える `#ifdef PHONEGAP_FRAMEWORK` とブロックします。
    
        #import"CDVDeprecated.h"
        

19. プロジェクト ナビゲーターで**プロジェクト アイコン**をクリックして、**ターゲット**を選択し、[**ビルド設定**] タブを選択します。

20. **フレームワークの検索パス**の検索.

21. 既存の値を置き換える`/Users/Shared/Cordova/Frameworks`.

22. **プリプロセッサ マクロ**の検索.

23. 最初の (結合された) 値と値を交換してください**CORDOVA_FRAMEWORK = はい**。.

24. **構築フェーズ**] タブを選択します。

25. 展開**スクリプトを実行**.

26. **コルドバ**の**PhoneGap**の出現を置き換える.

27. 見つけるあなた `PhoneGap.plist` プロジェクト ナビゲーターのファイルし、一度名前編集モードを入力するファイル名をクリックします。

28. 名前を変更する `PhoneGap.plist` に`Cordova.plist`.

29. 右クリックして `Cordova.plist` **→ としてオープン ソース コード**を選択します。.

30. **オプション コマンド F**キーを押して、ソース ウィンドウの左上のドロップダウンから**置換**を選択します。

31. 入力してください `com.phonegap` の検索文字列と `org.apache.cordova` の置換文字列を**すべて置換**ボタンを押します。

32. 置換文字列検索文字列と**CDV**の**PG**を入力し、**すべて置換**ボタンを押します。

33. 構築する**コマンド + B**キーを押します。 あなたは、将来の取り除くことができます廃止まだがある （参照してください `CDVDeprecated.h` 。 置換コード クラスを PG * CDV * を使用するなど)。

## 1.4.1 にアップグレード 1.4.0 プロジェクト

1.  コルドバ 1.4.1 をインストールします。

2.  バックアップを作成します。`MainViewController.m`.

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  コピー、 `MainViewController.m` プロジェクトの 1.4.0-based ディレクトリに新しいプロジェクトから古いファイルを置き換える、ディスク上のファイル (バックアップ ファイルを最初から上記の手順 2)。

5.  追加、 `MainViewController.m` 、Xcode プロジェクトにファイル。

6.  統合、バックアップ内にあるプロジェクトに固有のコード `MainViewController.m` 新しいファイルに。

7.  更新、 `phonegap-1.4.0.js` ファイルは省略可能、何も JavaScript 1.4.0 と 1.4.1 の間で変わった。

## アップグレード 1.3.0 プロジェクト 1.4.0

1.  コルドバ 1.4.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.3.0-Based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  コピー、 `www/phonegap-1.4.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/phonegap-1.3.0.js` ファイル。

7.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `phonegap-1.4.0.js` ファイル。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。

## 1.3.0 に 1.2.0 アップグレード プロジェクト

1.  コルドバ 1.3.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.2.0-Based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  コピー、 `www/phonegap-1.3.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/phonegap-1.2.0.js` ファイル。

7.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `phonegap-1.3.0.js` ファイル。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。

## 1.2.0 をプロジェクト アップグレード 1.1.0

1.  コルドバ 1.2.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.1.0-Based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  コピー、 `www/phonegap-1.2.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/phonegap-1.1.0.js` ファイル。

7.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `phonegap-1.2.0.js` ファイル。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。

## アップグレード 1.0.0 1.1.0 するプロジェクト

1.  コルドバ 1.1.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.0.0-Based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  コピー、 `www/phonegap-1.1.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/phonegap-1.0.0.js` ファイル。

7.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `phonegap-1.1.0.js` ファイル。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。

## アップグレード 0.9.6 プロジェクトを 1.0.0 に

1.  コルドバ 1.0.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  0.9.6-Based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  コピー、 `www/phonegap-1.0.0.js` に新しいプロジェクトからファイルを `www` ディレクトリ、および削除を `www/phonegap-0.9.6.js` ファイル。

7.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `phonegap-1.0.0.js` ファイル。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。
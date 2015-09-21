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

title: IOS のアップグレード
---

# IOS のアップグレード

このガイドは、コルドバの旧バージョンからアップグレードする iOS のプロジェクトを変更する方法を示します。 これらの命令のほとんど、古いの前にあるコマンド ライン ツールのセットで作成されたプロジェクトに適用されます、 `cordova` CLI ユーティリティ。 CLI のバージョンを更新する方法については、コマンド ライン インターフェイス参照してください。

**注**: Xcode 6 が必要です。 現在、Apple の App Store に提出する iOS iOS 8 は SDK の最新の出荷されたバージョンを使用する必要があります、これは Xcode 6 のみ含まれています。

## アップグレード 3.6.0 プロジェクト 4.0.0

CLI 以外のプロジェクトを実行します。

        bin/update path/to/project
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  既存のプロジェクトで `cordova platform update ios` を実行します。

## アップグレード 3.3.0 プロジェクト 3.4.0

CLI 以外のプロジェクトを実行します。

        bin/update path/to/project
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update ios`

## アップグレード 3.2.0 プロジェクト 3.3.0

CLI 以外のプロジェクトを実行します。

        bin/update path/to/project
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update ios`

## 3.2.0 プロジェクト アップグレード 3.1.0

CLI 以外のプロジェクトを実行します。

        bin/update path/to/project
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update ios`

## アップグレード 3.0.0 プロジェクト 3.1.0

CLI 以外のプロジェクトを実行します。

        bin/update path/to/project
    

CLI のプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update ios`

iOS 7 の問題:

1.  削除 `width=device-width, height=device-height` `index.html` ファイル `viewport` `meta` タグから。 （[関連するバグ][1] を参照してください。.)

2.  IOS 7 サポートのメディア、メディアのキャプチャ、splashscreen コア プラグインを更新します。

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 問題：

1.  Xcode 5 (問題ナビゲーター） でそうように求められます場合は、プロジェクトの設定を更新します。

2.  更新、**コンパイラ C の/C + + Objective-C** **ビルド オプション**] セクションで [**ビルド設定**] タブで設定します。 **既定のコンパイラ (アップル LLVM 5.0)** を選択します。.

## 2.9.0 から CLI (3.0.0) へのアップグレード

1.  コマンド ライン インターフェイスで説明されているようにコルドバ、CLI を使用して新しい Apache コルドバ 3.0.0 プロジェクトを作成します。

2.  たとえばコルドバ プロジェクトにプラットフォームを追加します: `cordova
platform add ios`.

3.  プロジェクトの内容をコピー `www` ディレクトリを `www` で作成したコルドバ プロジェクトのルート ディレクトリ。

4.  コピーまたは上書き (`リソース` など)、元のプロジェクトから任意のネイティブの資産を `.xcodeproj` プロジェクトに新しいファイルを追加することを確かめます。 IOS プロジェクトを `platforms\ios` ディレクトリ内に作成します。

5.  `www` ディレクトリに `config.xml` をコピーし、任意のプラグインの定義を削除します。プラットフォーム ディレクトリの代わりにここでの設定を変更します。

6.  コルドバ CLI ツールを使用して、必要な任意のプラグインをインストールします。CLI が処理するすべてのコア Api のプラグインとして追加する必要がありますので注意してください。のみ 3.0.0 プラグインは CLI と互換性があります。

7.  ビルドおよびテストします。

## 3.0.0 にアップグレード 2.9.0 プロジェクト

1.  ダウンロードし、`~/Documents/Cordova-3.0.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 3.0.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova.js` (バージョン サフィックスをもうがない、ヘッダー ファイル自体には、バージョンに注意) ファイルから新しいプロジェクトに、 `www` ディレクトリ、および削除、 `www/cordova.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

7.  削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

**注**： プラグインが事前にインストールされていない、コルドバ 3.0.0 から始まると `plugman` コマンド ライン ユーティリティを使用して、それらを自分でインストールする必要があります。 Plugman を使用してプラグインを管理するを参照してください。

## アップグレード 2.8.0 プロジェクト 2.9.0

1.  ダウンロードし、`~/Documents/Cordova-2.9.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.9.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova.js` (バージョン サフィックスをもうがない、ヘッダー ファイル自体には、バージョンに注意) ファイルから新しいプロジェクトに、 `www` ディレクトリ、および削除、 `www/cordova.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

7.  削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

## アップグレード 2.7.0 2.8.0 にプロジェクト

1.  ダウンロードし、`~/Documents/Cordova-2.8.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.8.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  `www/cordova.js` コピー (バージョン サフィックスをもうがない、ヘッダー ファイル自体には、バージョンに注意) `www` ディレクトリに新しいプロジェクト ファイルし、`www/cordova-2.7.0.js` ファイルを削除します。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova.js` ファイル。

7.  `<plugin>` タグに、`config.xml` ファイルで `<feature>` タグを更新します。 メモこと既存の `<plugin>` タグまだ動作しますは推奨されません。 新しいプロジェクトの `config.xml` ファイルでこの情報をコピーできます。 たとえば。
    
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
    
        OpenAL
        ImageIO
        

10. ターゲット プロジェクトの **ビルド設定** を更新します。下で **リンク → その他のリンカー フラグ**、編集する **"- Obj - C"** **"-ObjC」**.

11. ターゲット プロジェクトの **ビルド設定** を更新します。 下で **リンク → その他のリンカー フラグ**、変更 **"-すべて _ ロード"** する `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a`。 これを行うにで定義されている問題がある場合必要がありますのみ [この問題します][2]。.

 [2]: https://issues.apache.org/jira/browse/CB-3458

## アップグレード 2.6.0 へ 2.7.0 プロジェクト

1.  ダウンロードし、`~/Documents/Cordova-2.7.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.7.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  コピー、 `www/cordova-2.7.0.js` ファイルから新しいプロジェクトに、 `www` ディレクトリ、および削除、 `www/cordova-2.6.0.js` ファイル。

6.  コルドバ スクリプト参照を更新して、 `www/index.html` ファイルとスクリプト参照が含まれている他のファイル) を指す、新しい `cordova-2.7.0.js` ファイル。

7.  更新 (または置き換えるには、決してファイルを変更した場合) から、新しい 1 つによると、`AppDelegate.m` ファイル ([この diff][3] を見るプロジェクト).

8.  `Config.xml` ファイルで、[この行を削除][4].

9.  削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## 2.6.0 にアップグレード 2.5.0 プロジェクト

1.  ダウンロードし、`~/Documents/Cordova-2.6.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.6.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  `www` ディレクトリにプロジェクトの `www/cordova-2.6.0.js` ファイルをコピーし、`www/cordova-2.5.0.js` ファイルを削除します。

6.  (スクリプトを参照する他のファイル) と共に `www/index.html` ファイルでコルドバ スクリプト参照を更新して新しい `コルドバ 2.6.0.js` ファイルを参照します。

7.  更新 (または置き換えるには、決してファイルを変更した場合) から、新しい 1 つによると、`AppDelegate.m` ファイル ([この diff][5] を見るプロジェクト).

8.  `config.xml` ファイルで、[この新しい行を追加][6].

9.  `config.xml` ファイルで、[この新しい行を追加][7].

10. `Config.xml` ファイルは、[UIWebViewBounce DisallowOverscroll に変更されているしデフォルト値が異なる][8].

11. `config.xml` ファイルの `EnableLocation` 設定は廃止されました。

12. 削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## アップグレード 2.4.0 2.5.0 にプロジェクト

1.  ダウンロードし、`~/Documents/Cordova-2.5.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.5.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  新しいプロジェクトから `www` ディレクトリに `www/cordova-2.5.0.js` ファイルをコピーし、`www/cordova-2.4.0.js` ファイルを削除します。

6.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 2.5.0.js` ファイルを指します。

7.  更新 (または置き換えるには、決してファイルを変更した場合) から、新しい 1 つによると、`AppDelegate.m` ファイル ([この diff][9] を見るプロジェクト).

8.  `config.xml` ファイルで、[これらの新しい行を追加][10].

9.  `config.xml` ファイルで、[ルート要素を編集する、ウィジェットにコルドバからそれを変える][11].

10. [削除する OpenAllWhitelistURLsInWebView 好み][12]、`config.xml` ファイルで.

11. `コルドバ` ディレクトリを削除して `コルドバ` ディレクトリを新しいプロジェクトからプロジェクトのルート ディレクトリにコピーします。2.5.0 で、これはスクリプトを更新します。

12. 削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## アップグレード 2.3.0 2.4.0 にプロジェクト

1.  ダウンロードし、`~/Documents/Cordova-2.4.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.4.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  新しいプロジェクトから `www` ディレクトリに `www/cordova-2.4.0.js` ファイルをコピーし、`www/cordova-2.3.0.js` ファイルを削除します。

6.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 2.4.0.js` ファイルを指します。

7.  更新 (または置き換えるには、決してファイルを変更した場合) から、新しい 1 つによると、`MainViewController.m` ファイル ([この diff][13] を見るプロジェクト).

8.  更新 (または置き換えるには、決してファイルを変更した場合) から、新しい 1 つによると、`AppDelegate.m` ファイル ([この diff][14] を見るプロジェクト).

9.  `config.xml` ファイルで、[この新しい行を追加][15].

10. `コルドバ` ディレクトリを削除して `コルドバ` ディレクトリを新しいプロジェクトからプロジェクトのルート ディレクトリにコピーします。2.4.0 でこのスクリプトを修正します。

11. 削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

12. リソースとしてプロジェクトに AssetsLibrary.framework を追加します。 ([マニュアル][16] 参照してくださいアップルのこれを行う方法について。)。

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## アップグレード 2.2.0 2.3.0 にプロジェクト

1.  ダウンロードし、`~/Documents/Cordova-2.3.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.3.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  新しいプロジェクトから `www` ディレクトリに `www/cordova-2.3.0.js` ファイルをコピーし、`www/cordova-2.2.0.js` ファイルを削除します。

6.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 2.3.0.js` ファイルを指します。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、新しいプロジェクトからの 1 つによると `MainViewController.m`。

8.  `コルドバ` ディレクトリを削除して `コルドバ` ディレクトリを新しいプロジェクトからプロジェクトのルート ディレクトリにコピーします。2.3.0、新しいスクリプトがあります。

9.  削除、 `CordovaLib` ディレクトリ、およびコピー、 `CordovaLib` プロジェクトのルート ディレクトリに新しいプロジェクト ディレクトリ。

10. プロジェクト ファイルでスクリプトの `bin/cordova\_plist\_to\_config\_xml` を実行して `Cordova.plist` ファイル `config.xml` に変換します。

11. `< コルドバ >< プラグイン >` 下にこのタグを追加することによって InAppBrowser プラグイン `config.xml` に追加します。
    
        <plugin name="InAppBrowser" value="CDVInAppBrowser" />
        

12. ホワイト リストにアプリケーションのホワイト リストで接続する必要がメイン コルドバ WebView として同じユーザー エージェントに接続の *ユーザー エージェント* ヘッダーを設定します。 ホワイト リストにアプリケーションのホワイト リストで接続する必要がメイン コルドバ WebView として同じユーザー エージェントに接続の `ユーザー エージェント` ヘッダーを設定します。 メイン ビュー コント ローラーをオフ `userAgent` プロパティにアクセスしてこれを得ることができます。 メイン ビュー-コント ローラー (`CDVViewController`) URL ホワイト リストを渡すかどうかを確認するための `URLisAllowed` メソッドがあります。

13. デバイス API の変更:
    
    *   IOS、`iPhone`、`iPad` または `iPod タッチ`; を返すに使用 device.platform今 `iOS` をで返します (正しく).
    *   IOS は、ユーザーのデバイスの名前を返す使用 (すべてのプラットフォームでは非推奨今) device.name (例えば ' Shazron の iPhone 5 '）;今、それを返すために使用どのような device.platform を返します: `iPhone`、`iPad` または `iPod のタッチ`.
    *   すべてのプラットフォーム、device.model; と呼ばれる新しいプロパティがありますこれは、特定のデバイス モデル、例えば `iPad2 5` を返します (その他のプラットフォームでは、返しますを返すために使用どのような device.name)。

## 2.2.0 にプロジェクト アップグレード 2.1.0

1.  ダウンロードし、`~/Documents/Cordova-2.2.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.2.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  新しいプロジェクトから `www` ディレクトリに `www/cordova-2.2.0.js` ファイルをコピーし、`www/cordova-2.1.0.js` ファイルを削除します。

6.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 2.2.0.js` ファイルを指します。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、新しいプロジェクトからの 1 つによると `MainViewController.m`：
    
    *   Updated → viewWillAppear

8.  `コルドバ` ディレクトリにコピーします新しいプロジェクトからプロジェクトのルート ディレクトリ。2.2.0、これは、更新されたエミュレート' スクリプト。

9.  次に、`CordovaLib` サブ プロジェクト参照を更新します。 我々 はない変数を使用して、CORDOVALIB Xcode もうときコルドバ 2.1.0 にはじまって、`CordovaLib` が存在するを参照する参照は、絶対ファイル参照で今。
    
    1.  ターミナル.app を起動します。
    2.  コルドバをインストールした場所に移動 (手順 1 を参照)、`bin` サブディレクトリ
    3.  最初のパラメーターは、プロジェクトの `.xcodeproj` ファイルのパスを以下のスクリプトを実行します。
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**注**: コードを至る 2.2.0 で `bin/を作成する` スクリプト `CordovaLib` サブ プロジェクトをプロジェクトにコピーします。 セットアップの同じようなものが、ちょうど右 `CordovaLib` で、プロジェクト ディレクトリにコピーを更新する、`CordovaLib` サブ プロジェクトの場所 (プロジェクト) を基準にして Xcode ファイル インスペクター

## アップグレード 2.0.0 プロジェクト 2.1.0

コルドバ 2.1.0 と `CordovaLib` を **自動参照カウント (ARC)** を使用してアップグレードされています。 必要な **アーク** を使用する CordovaLib が **アーク** を使用してプロジェクトをアップグレードする場合にアップグレードするください使用しないメニューから Xcode 移行ウィザード： **編集 → リファクタリング →... Objective-C の弧に変換**、libCordova.a の選択を解除し、ウィザードを完了するまで実行します。

1.  ダウンロードし、`~/Documents/Cordova-2.1.0` にたとえば、ハード ドライブ上の永続的なディレクトリ場所にコルドバ 2.1.0 ソース抽出.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

5.  新しいプロジェクトから `www` ディレクトリに `www/cordova-2.1.0.js` ファイルをコピーし、`www/cordova-2.0.0.js` ファイルを削除します。

6.  `Www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 2.1.0.js` ファイルを指します。

7.  更新 (または置き換えるには、決してファイルを変更した場合)、新しいプロジェクトからの 1 つによると `AppDelegate.m`：
    
    *   Edited → application:didFinishLaunchingWithOptions:
    *   Added → application:supportedInterfaceOrientationsForWindow:

8.  更新 (または置き換えるには、決してファイルを変更した場合)、新しいプロジェクトからの 1 つによると `MainViewController.m`：
    
    *   Added → viewWillAppear

9.  `コルドバ` ディレクトリにコピーします新しいプロジェクトからプロジェクトのルート ディレクトリ。2.1.0 でスペースを含むパスをサポートする更新されたスクリプトがあります。

10. `バージョン` ファイル参照 (*ない* 1 つ `CordovaLib` のプロジェクトから削除します。).

11. 次に、`CordovaLib` サブ プロジェクト参照を更新します。 我々 はない変数を使用して、CORDOVALIB Xcode もうときコルドバ 2.1.0 にはじまって、`CordovaLib` が存在するを参照する参照は、絶対ファイル参照で今。
    
    1.  ターミナル.app を起動します。
    2.  コルドバをインストールした場所に移動 (手順 1 を参照)、`bin` サブディレクトリ
    3.  最初のパラメーターは、プロジェクトの `.xcodeproj` ファイルのパスを以下のスクリプトを実行します。
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

## アップグレード 1.9.0 プロジェクト 2.0.0

1.  コルドバ 2.0.0 をインストールします。

2.  IOS シェル ツール ガイドで説明されているように、新しいプロジェクトを作成します。この新しいプロジェクトから資産必要があります。

3.  新しいプロジェクトから `www` ディレクトリに `www/cordova-2.0.0.js` ファイルをコピーし、`www/cordova-1.9.0.js` ファイルを削除します。

4.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 2.0.0.js` ファイルを指します。

5.  `コルドバ` ディレクトリにコピーします新しいプロジェクトからプロジェクトのルート ディレクトリ (場合は、プロジェクトのコマンド ライン ツール)。

6.  `Cordova.plist` ファイルの **関連ファイル** のグループで `プラグイン` の下の新しいエントリを追加します。 キーは `Device` で、値は `CDVDevice`.

7.  `Cordova.framework` を削除します。.

8.  **サポート ファイル** グループから `verify.sh` を削除します。

9.  プロジェクト ナビゲーターでプロジェクト アイコンを選択して、**ターゲット** プロジェクトを選択し、[**ビルド設定**] タブを選択します。

10. **プリプロセッサ マクロ** を検索し、すべて削除します **CORDOVA_FRAMEWORK = 1** の値。

11. ホーム フォルダーの `ドキュメント` のサブディレクトリの下に、ハード ドライブにインストールされている `CordovaLib` ディレクトリに移動します。

12. `CordovaLib` ディレクトリで `CordovaLib.xcodeproj` ファイルを探ししにドラッグ アンド ドロップ、ファイル、プロジェクト。それは、サブプロジェクトとして表示されます。

13. プロジェクトをビルドする、`#import` ディレクティブに関するいくつかのエラーを取得する必要があります。

14. `#import` エラーこのスタイルでの輸入品を任意の見積もりを変更します。
    
        #import "CDV.h"
        
    
    このブラケット ベース スタイル。
    
        #import <Cordova/CDV.h>
        
    
    インポートのコルドバの任意の `#ifdef` ラッパーを削除する、彼らはもはや必要ありません （輸入が今統一される)

15. プロジェクトを再度ビルドする必要があります `#import` エラーしていません。

16. プロジェクト ナビゲーターで **プロジェクトのアイコン** を選択、**ターゲット** プロジェクトを選択し、[**ビルド フェーズ**] タブを選択します。

17. **ターゲットの依存関係** の位相、し選択 **+** ボタンを展開します。

18. `CordovaLib` ターゲットを選択し、[**追加**] ボタンを選択します。

19. 最初の **リンク ライブラリとバイナリ** フェーズ (フレームワークの束を既に含める必要があります) を展開し、**+** を選択ボタン。

20. `LibCordova.a` 静的ライブラリを選択し、[**追加**] ボタンを選択します。

21. **スクリプトの実行** フェーズを削除します。

22. プロジェクト ナビゲーターで **プロジェクトのアイコン** を選択、**ターゲット** プロジェクトを選択し、[**ビルド設定**] タブを選択します。

23. **その他のリンカーのフラグ** を検索し、値を追加 **-force_load** と **- Obj - C**.

24. `CordovaLib` サブ プロジェクトを展開します。

25. `VERSION` ファイルを見つけて、（コピーではなく、それへのリンクを作成する） をメイン プロジェクトにドラッグします。

26. **追加フォルダーを作成するグループ** のラジオボタンを選択し、[**完了**] ボタンを選択します。

27. 前の手順でドラッグした `VERSION` のファイルを選択します。

28. **ファイル インスペクター** を表示する **オプション コマンド 1** のキーの組み合わせ入力 (または menuitem **ビュー → ユーティリティ → ファイル インスペクターの表示**).

29. ドロップ ダウン メニューを **ファイル検査** で **場所** に対して **相対 CORDOVALIB** を選択します。.

30. Xcode を設定 **Xcode 好み → 場所 → 派生データ → 高度な...** を **ユニークな** 統一されたヘッダーを見つけることができますように。

31. プロジェクト ナビゲーターで **プロジェクトのアイコン** を選択、**ターゲット** を選択し、[**ビルド設定**] タブを選択します。

32. **ヘッダー検索パス** で検索します。この設定では、これら 3 つの値は、引用符を含むを追加します。
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. **その他のリンカーのフラグ** を検索します。この設定では、この値を追加します。
    
        -weak_framework CoreFoundation
        

34. プロジェクトをビルドし、それをコンパイルして問題 **なく** リンクする必要があります。.

35. **スキーム**] ドロップダウンから、プロジェクトを選択し、[**iPhone 5.1 シミュレータ**.

36. [**実行**] ボタンを選択します。

**注**: 手がかり Xcode でコンソール ・ ログでエラーの確認してくださいシミュレータで期待どおりにプロジェクトが動作していない場合。

## 1.8.x プロジェクト 1.9.0 をアップグレードします。

1.  コルドバ 1.9.0 をインストールします。

2.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

3.  新しいプロジェクトから `www` ディレクトリに `www/cordova-1.9.0.js` ファイルをコピーし、`www/cordova-1.8.x.js` ファイルを削除します。

4.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 1.9.0.js` ファイルを指します。

**注**: 1.9.0 に新しい `BackupWebStorage` ブール `Cordova.plist` 設定をサポートしています。 それが既定で有効になって、そうに設定 `false` iOS の 6 で特に、それを無効にします。 参照してください [リリース ノート: サファリと UIKit セクション][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## 1.8.x プロジェクト アップグレード 1.7.0

1.  コルドバ 1.8.0 をインストールします。

2.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

3.  新しいプロジェクトから `www` ディレクトリに `www/cordova-1.8.0.js` ファイルをコピーし、`www/cordova-1.7.x.js` ファイルを削除します。

4.  `Www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 1.8.0.js` ファイルを指します。

キャプチャ API を使用する、新しい **ipad と網膜ディスプレイ** 資産必要があります。

1.  新しいプロジェクトから過剰書き込み、既存の `Resources/Capture.bundle` アイテムをプロジェクト ディレクトリに `Resources/Capture.bundle` 項目をコピーします。

2.  プロジェクトでは、Xcode では、プロジェクト ナビゲーターに `Capture.bundle` 項目を選択し、**削除** キーを入力して表示されるダイアログ ボックスから **削除する参照** を選択します。

3.  Xcode では、プロジェクト ナビゲーターに上記のステップ 1 から新しい `Capture.bundle` をドラッグし **、追加するフォルダーのグループを作成**」ラジオボタンを選択します。

## 1.7.0 1.6.x プロジェクトのアップグレード

1.  コルドバ 1.7.0 をインストールします。

2.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

3.  新しいプロジェクトから `www` ディレクトリに `www/cordova-1.7.0.js` ファイルをコピーし、`www/cordova-1.6.0.js` ファイルを削除します。

4.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 1.7.0.js` ファイルを指します。

## アップグレード 1.5.0 1.6.x にプロジェクト

1.  コルドバ 1.6.1 をインストールします。

2.  プロジェクトで `AppDelegate.m`、`AppDelegate.h`、`MainViewController.m`、`MainViewController.h`、および `Cordova.plist` のバックアップを作成します。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.5.0-based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  Xcode プロジェクトに新しい `MainViewController` と `AppDelegate` ファイルを追加します。

6.  新しいプロジェクトから `www` ディレクトリに `www/cordova-1.6.1.js` ファイルをコピーし、`www/cordova-1.5.0.js` ファイルを削除します。

7.  `Www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `コルドバ 1.6.1.js` ファイルを指します。

8.  新しい `Cordova.plist` ファイルをプロジェクトに追加します。 統一コルドバ JavaScript ファイル (`コルドバ-js` は、Android とブラックベリーからのものと一致するコアのプラグインのサービスの名前を変更する必要がありますので、これは必要です。).

9.  統合の設定、**プラグイン** と **ExternalHosts** のエントリが新しい `Cordova.plist` にあなたの **バックアップ Cordova.plist** であった.

10. 新しい `AppDelegate` ファイルにバックアップ `AppDelegate.h` と `AppDelegate.m` でいるプロジェクトに固有のコードを統合します。 `AppDelegate.m` で、`UIWebViewDelegate` や `CDVCommandDelegate` コード (そのファイル内のコメント アウト セクションを参照してください） `MainViewController.m` に今行く必要があります。

11. 新しい MainViewController ファイルにバックアップ `MainViewController.h` と `MainViewController.m` でいるプロジェクトに固有のコードを統合します。

12. プロジェクト ナビゲーターでプロジェクト アイコンをクリックして、**プロジェクト** を選択し、[**ビルド設定**] タブを選択します。

13. 入力 **コンパイラ C の/C + + Objective-C** の検索フィールド。

14. **アップル LLVM コンパイラ 3.1** 値を選択します。

## 1.4.x プロジェクト 1.5.0 をアップグレードします。

1.  コルドバ 1.5.0 をインストールします。

2.  新しいプロジェクトを作成し、一度それを実行します。この新しいプロジェクトから資産の一部を必要があります。

3.  新しいプロジェクトから `www` ディレクトリに `www/cordova-1.5.0.js` ファイルをコピーし、`www/phonegap-1.4.x.js` ファイルを削除します。

4.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しいコルドバ `コルドバ 1.5.0.js` ファイルを指すようにします。

5.  プロジェクト ナビゲーターで `PhoneGap.framework` を見つける、それを選択します。

6.  **削除** キーを入力し、プロジェクト ナビゲーターの `PhoneGap.framework` 参照を削除します。

7.  (**ファイルの追加** シート） プロジェクトにファイルを追加するシートをドロップダウンする必要があります **オプション コマンド A** のキーの組み合わせを入力します。 **追加フォルダーを作成済みグループ** のラジオボタンが選択されていることを確認してください。

8.  フォルダーに移動するための別のシートにドロップダウンする必要があります **シフト コマンド G** のキーの組み合わせ入力 (、**フォルダーに移動する：** シート)。

9.  `/Users/Shared/Cordova/Frameworks/Cordova.framework` を入力して、**フォルダーに移動する：** シートし、**[移動**] ボタンを押します。

10. **ファイルの追加** シートで、**追加** ボタンを押します。

11. プロジェクト ナビゲーターで `Cordova.framework` を選択します。

12. **ファイル インスペクター** を表示する **オプション コマンド 1** のキーの組み合わせを入力します。.

13. ドロップ ダウン メニューを **ファイル検査** で **場所** の **絶対パス** を選択します。.

14. (**ファイルの追加** シート） プロジェクトにファイルを追加するシートをドロップダウンする必要があります **オプション コマンド A** のキーの組み合わせを入力します。 **追加フォルダーを作成済みグループ** のラジオボタンが選択されていることを確認してください。

15. フォルダーに移動するための別のシートにドロップダウンする必要があります **シフト コマンド G** のキーの組み合わせ入力 (、**フォルダーに移動する：** シート)。

16. `~/Documents/CordovaLib/Classes/deprecated` を入力して、**フォルダーに移動する：** シートし、**[移動**] ボタンを押します。

17. **ファイルの追加** シートで、**追加** ボタンを押します。

18. `AppDelegate.h`、`AppDelegate.m`、および `MainViewController.h` ファイルと全体の `#ifdef PHONEGAP_FRAMEWORK` ブロックに置き換えます。
    
        #import "CDVDeprecated.h"
        

19. プロジェクト ナビゲーターで **プロジェクト アイコン** をクリックして、**ターゲット** を選択し、[**ビルド設定**] タブを選択します。

20. **フレームワークの検索パス** の検索.

21. `/ユーザ/共有/コルドバ/フレームワーク` の既存の値を置き換える.

22. **プリプロセッサ マクロ** の検索.

23. 最初の (結合された) 値と値を交換してください **CORDOVA_FRAMEWORK = はい**。.

24. **構築フェーズ**] タブを選択します。

25. 展開 **スクリプトを実行**.

26. **コルドバ** の **PhoneGap** の出現を置き換える.

27. プロジェクト ナビゲーターの `PhoneGap.plist` ファイルを見つけるし、一度名前編集モードを入力するファイル名をクリックします。

28. `Cordova.plist` に `PhoneGap.plist` をの名前を変更します。.

29. `Cordova.plist` を右クリックし、選択 **としてオープン → ソース コード**.

30. **オプション コマンド F** キーを押して、ソース ウィンドウの左上のドロップダウンから **置換** を選択します。

31. 検索文字列と置換文字列のための `org.apache.cordova` の `com.phonegap` を入力し、**すべて置換** ボタンを押します。

32. 置換文字列検索文字列と **CDV** の **PG** を入力し、**すべて置換** ボタンを押します。

33. 構築する **コマンド + B** キーを押します。 あなたは、将来の取り除くことができます廃止まだがある (`CDVDeprecated.h` を参照してください。 置換コード クラスを PG * に CDV * を使用するなど)。

## 1.4.1 にアップグレード 1.4.0 プロジェクト

1.  コルドバ 1.4.1 をインストールします。

2.  `MainViewController.m` のバックアップを作成します。.

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  新しいプロジェクトから古いファイルを置き換える、ディスク上 1.4.0-based プロジェクトのディレクトリに `MainViewController.m` ファイルをコピー (バックアップ ファイルを最初から上記の手順 2)。

5.  Xcode プロジェクトに `MainViewController.m` ファイルを追加します。

6.  新しいファイルに、バックアップ `MainViewController.m` でいるプロジェクトに固有のコードを統合します。

7.  `Phonegap 1.4.0.js` ファイルの更新は省略可能、何も JavaScript 1.4.0 と 1.4.1 の間で変わった。

## アップグレード 1.3.0 プロジェクト 1.4.0

1.  コルドバ 1.4.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.3.0-based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  新しいプロジェクトから `www` ディレクトリに `www/phonegap-1.4.0.js` ファイルをコピーし、`www/phonegap-1.3.0.js` ファイルを削除します。

7.  `Www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `phonegap 1.4.0.js` ファイルを指すようにします。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。

## 1.3.0 に 1.2.0 アップグレード プロジェクト

1.  コルドバ 1.3.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.2.0-based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  新しいプロジェクトから `www` ディレクトリに `www/phonegap-1.3.0.js` ファイルをコピーし、`www/phonegap-1.2.0.js` ファイルを削除します。

7.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `phonegap 1.3.0.js` ファイルを指すようにします。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。

## 1.2.0 をプロジェクト アップグレード 1.1.0

1.  コルドバ 1.2.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.1.0-based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  新しいプロジェクトから `www` ディレクトリに `www/phonegap-1.2.0.js` ファイルをコピーし、`www/phonegap-1.1.0.js` ファイルを削除します。

7.  `Www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `phonegap 1.2.0.js` ファイルを指すようにします。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。

## アップグレード 1.0.0 1.1.0 するプロジェクト

1.  コルドバ 1.1.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  1.0.0-based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  新しいプロジェクトから `www` ディレクトリに `www/phonegap-1.1.0.js` ファイルをコピーし、`www/phonegap-1.0.0.js` ファイルを削除します。

7.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `phonegap 1.1.0.js` ファイルを指すようにします。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。

## アップグレード 0.9.6 プロジェクトを 1.0.0 に

1.  コルドバ 1.0.0 をインストールします。

2.  バックアップを作成 `AppDelegate.m` と `AppDelegate.h` プロジェクト内。

3.  新しいプロジェクトを作成します。この新しいプロジェクトから資産の一部を必要があります。

4.  0.9.6-based プロジェクトのディレクトリ (バックアップ ファイルを最初から上記の手順 2) すべての古いファイルを置き換える、ディスク上に新しいプロジェクトからこれらのファイルをコピーします。
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  すべて追加の `MainViewController` Xcode プロジェクトへファイルを。

6.  新しいプロジェクトから `www` ディレクトリに `www/phonegap-1.0.0.js` ファイルをコピーし、`www/phonegap-0.9.6.js` ファイルを削除します。

7.  `www/index.html` ファイル （とスクリプト参照が含まれている他のファイル） でコルドバ スクリプト参照を更新して新しい `phonegap 1.0.0.js` ファイルを指すようにします。

8.  下で新しいエントリを追加する `Plugins` で、 `PhoneGap.plist` ファイル。キーが `com.phonegap.battery` で、値は`PGBattery`.

9.  あなたのバックアップであるプロジェクトに固有のコードを統合 `AppDelegate.h` と `AppDelegate.m` に新しい AppDelegate ファイル。
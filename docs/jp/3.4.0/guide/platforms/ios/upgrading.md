---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# iOS の更新

このガイドでは、新しいバージョンの Cordova へ移行するときに必要となる、 iOS プロジェクト側の修正点に関して解説します。このガイドで使用する手順のほとんどは、 `cordova` の CLI ユーティリティがリリースされる前のコマンドライン ツールを使用して作成されたプロジェクトに適用するものです。CLI 自体のバージョン更新に関しては、『 コマンドライン インターフェイス 』 をご確認ください。

__注意__ : Xcode 5 を使用します。Apple App Store への申請を検討している場合、最新バージョンの iOS SDK を使用する必要があります。現在、最新バージョンは、iOS 7 ( Xcode 5 ) となっております。

## 3.3.0 プロジェクトから 3.4.0 への更新

CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin/update path/to/project

CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. `cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update ios` を実行します。

## 3.2.0 プロジェクトから 3.3.0 への更新

CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin/update path/to/project

CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. `cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update ios` を実行します。

## 3.1.0 プロジェクトから 3.2.0 への更新

CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin/update path/to/project

CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. `cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update ios` を実行します。

## 3.0.0 プロジェクトから 3.1.0 への更新

CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin/update path/to/project

CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. `cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update ios` を実行します。

iOS 7 に関する補足事項を以下に記します。

1. `index.html` ファイルに記述された `meta` タグ ( `viewport` 指定 ) から、 `width=device-width`　と `height=device-height` を削除します ( こちらの [ 関連したバグ ](https://issues.apache.org/jira/browse/CB-4323) を参照のこと )。

2. iOS 7 に対応するため、コアプラグイン ( メディア、メディアキャプチャー、スプラッシュスクリーン ) を更新します。

Xcode 5 に関する補足事項を以下に記します。

1. プロジェクト設定 ( Project Settings ) の更新を、Xcode 5 側 ( Issues Navigator 内 ) が要求した場合、更新を行います。

2. __Build Options__ セクション > __Build Settings__ タブ > __Compiler for C/C++/Objective-C__ の設定を更新します。 __Default
   compiler ( Apple LLVM 5.0 )__ を選択してください。

## 2.9.0 から CLI ( 3.0.0 ) への更新

1. 『 コマンドライン インターフェイス 』 の記載内容に従い、cordova CLI を使用して、Apache Cordova 3.0.0 プロジェクトを新規作成します。

2. プラットフォームを cordova プロジェクトに追加します。例 ： 「 `cordova
   platform add ios` 」 

3. プロジェクトの `www` ディレクトリのコンテンツを、先ほど作成した cordova プロジェクトの root ( ルート ) に位置する `www` ディレクトリにコピーします。

4. ネイティブのアセット ( native assets ) のコピーまたは上書きを、旧プロジェクトから行ってください ( `Resources` など )。また、新規のファイルが `.xcodeproj` プロジェクトに追記されていることをご確認ください。iOS プロジェクトのビルドは、 `platforms\ios` ディレクトリ内で行います。

5. `config.xml` ファイルを `www` ディレクトリにコピーして、次に、プラグインの定義を削除します。プラットフォーム下のディレクトリのファイルではなく、このファイルの設定の更新を行います。

6. cordova CLI ツールを使用して、必要なプラグインをインストールします。CLI では、すべてのコア API をプラグインとして取り扱うため、すべてのプラグインをインストールしておくことを推奨します。また、3.0.0 系のプラグインのみ、CLI で取り扱うことができます。

7. ビルドとテストを行います。

## 2.9.0 プロジェクト から 3.0.0 への更新

1. Cordova 3.0.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-3.0.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. 新規のプロジェクトの `www/cordova.js` ( ファイル名の後ろにバージョン番号を追加しません。バージョン番号はファイル内のヘッダー部に記載します。 ) ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova.js` ファイルを指すように更新します。

7. 開発者の `CordovaLib` ディレクトリを削除して、新規のプロジェクトの`CordovaLib` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。  

__注意__ : Cordova 3.3.0 のプラグインは、前もってインストールされていません。プラグインをインストールする場合、 `plugman` コマンドライン ユーティリティを使用して、各自でインストールする必要があります。詳細は、『 Plugman を使用した、プラグインの管理 』 をご確認ください。

## 2.8.0 プロジェクトから 2.9.0 への更新

1. Cordova 2.9.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-2.9.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. 新規のプロジェクトの `www/cordova.js` ( ファイル名の後ろにバージョン番号を追加しません。バージョン番号はファイル内のヘッダー部に記載します。 ) ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova.js` ファイルを指すように更新します。

7. 開発者の `CordovaLib` ディレクトリを削除して、新規のプロジェクトの`CordovaLib` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。

## 2.7.0 プロジェクト から 2.8.0 への更新

1. Cordova 2.8.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-2.8.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. 新規のプロジェクトの `www/cordova.js` ( ファイル名の後ろにバージョン番号を追加しません。バージョン番号はファイル内のヘッダー部に記載します。 ) ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-2.7.0.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova.js` ファイルを指すように更新します。

7. `config.xml` ファイル内の `<plugin>` タグのすべてを、 `<feature>` タグに変更します。既存の `<plugin>` タグでも動作しますが、今後は廃止する予定です。新規のプロジェクトの `config.xml` ファイルの内容を、参考としてコピーすることもできます。例を以下に示します。

        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- 他のプラグイン -->
        </plugins>
        
        <!-- 変更後の <feature> タグは <plugins> と同じレベルに配置 -->
        <feature name="LocalStorage">
    	    <param name="ios-package" value="CDVLocalStorage" />
    	</feature>
    	<!-- 他の <feature> タグ -->
        

8. 開発者の `CordovaLib` ディレクトリを削除して、新規のプロジェクトの `CordovaLib` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。  

9. 下記の 2 つのフレームワークを、開発者のプロジェクトに加えてください。

        OpenAL
        ImageIO

10. 開発者のプロジェクトの Target ( ターゲット ) の __Build Settings__ を更新します。 __Linking &rarr; Other Linker Flags__ 下で、 __"-Obj-C"__ を __"-ObjC"__ に変更してください。

11. 開発者のプロジェクトの Target ( ターゲット ) の __Build Settings__ を更新します。 __Linking &rarr; Other Linker Flags__ 下で、 __"-all\_load"__ を `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a` に変更してください。 [ こちら ](https://issues.apache.org/jira/browse/CB-3458) に記載されている問題が発生している場合だけ、この設定が必要となります。

## 2.6.0 から 2.7.0 への更新

1. Cordova 2.7.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-2.7.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. 新規のプロジェクトの `www/cordova-2.7.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-2.6.0.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-2.7.0.js` ファイルを指すように更新します。

7. 新規のプロジェクトの `AppDelegate.m` の内容に従い、開発者の `AppDelegate.m` ファイルを更新 ( このファイルの変更をいままで行っていない場合には、新規のプロジェクトのファイルをそのまま使用 ) してください ( [ こちらの差分 ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23) を参照のこと )。

8. 開発者の `config.xml` ファイルから、 [ こちらに記載されているライン ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc) を削除します。

9. 開発者の `CordovaLib` ディレクトリを削除して、新規のプロジェクトの`CordovaLib` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。

## 2.5.0 プロジェクト から 2.6.0 への更新

1. Cordova 2.6.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-2.6.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. プロジェクトの `www/cordova-2.6.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-2.5.0.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-2.6.0.js` ファイルを参照するように更新します。

7. 新規のプロジェクトの `AppDelegate.m` の内容に従い、開発者の `AppDelegate.m` ファイルを更新 ( このファイルの変更をいままで行っていない場合には、新規のプロジェクトのファイルをそのまま使用 ) してください ( [ こちらの差分 ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9) を参照のこと )。

8. 開発者の `config.xml` ファイルに、 [ こちらのライン ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d) を追加します。

9. 開発者の `config.xml` ファイルに、 [ こちらのライン ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f) を追加します。

10. 開発者の `config.xml` ファイルにおいて、 [ UIWebViewBounce は DisallowOverscroll に変更され、デフォルト値も異なっています ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5) 。

11. 開発者の `config.xml` ファイルの `EnableLocation` の preference を削除 ( 廃止 ) します。

12. 開発者の `CordovaLib` ディレクトリを削除して、新規のプロジェクトの `CordovaLib` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。

## 2.4.0 プロジェクト から 2.5.0 への更新

1. Cordova 2.5.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-2.5.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. 新規のプロジェクトの `www/cordova-2.5.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-2.4.0.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-2.5.0.js` ファイルを指すように更新します。

7. 新規のプロジェクトの `AppDelegate.m` の内容に従い、開発者の `AppDelegate.m` ファイルを更新 ( このファイルの変更をいままで行っていない場合には、新規のプロジェクトのファイルをそのまま使用 ) してください ( [ こちらの差分 ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09) を参照のこと )。

8. 開発者の `config.xml` ファイルに、 [ これらのライン ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb) を追加します。

9. 開発者の `config.xml` ファイルの [ root 要素 ( cordova から widget へ ) を変更 ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c) します。

10. 開発者の `config.xml` ファイルの [ OpenAllWhitelistURLsInWebView の preference を削除 ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4) します。

11. 開発者の `cordova` ディレクトリを削除して、新規のプロジェクトの `cordova` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。2.5.0 では、更新したスクリプトが格納されています。

12. 開発者の `CordovaLib` ディレクトリを削除して、新規のプロジェクトの `CordovaLib` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。

## 2.3.0 プロジェクト から 2.4.0 への更新

1. Cordova 2.4.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-2.4.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. 新規のプロジェクトの `www/cordova-2.4.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-2.3.0.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-2.4.0.js` ファイルを指すように更新します。

7. 新規のプロジェクトの `MainViewController.m` の内容に従い、開発者の `MainViewController.m` ファイルを更新 ( このファイルの変更をいままで行っていない場合には、新規のプロジェクトのファイルをそのまま使用 ) してください ( [ こちらの差分 ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997) を参照のこと )。

8. 新規のプロジェクトの `AppDelegate.m` の内容に従い、開発者の `AppDelegate.m` ファイルを更新 ( このファイルの変更をいままで行っていない場合には、新規のプロジェクトのファイルをそのまま使用 ) してください ( [ こちらの差分 ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d) を参照のこと )。

9. 開発者の `config.xml` ファイルに、 [ こちらのライン ](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d) を追加します。

10. 開発者の `cordova` ディレクトリを削除して、新規のプロジェクトの `cordova` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。2.4.0 では、修正したスクリプトが格納されています。

11. 開発者の `CordovaLib` ディレクトリを削除して、新規のプロジェクトの `CordovaLib` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。

12. アセットの処理に使用する場合もあるので、開発者のプロジェクトに、AssetsLibrary.framework を追加します ( 追加方法に関しては [ Apple の資料 ](https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html) を参照のこと )。

## 2.2.0 プロジェクト から 2.3.0 への更新

1. Cordova 2.3.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-2.3.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. 新規のプロジェクトの `www/cordova-2.3.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-2.2.0.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-2.3.0.js` ファイルを指すように更新します。

7. 新規のプロジェクトの `MainViewController.m` の内容に従い、開発者の `MainViewController.m` ファイルを更新してください ( このファイルの変更をいままで行っていない場合には、新規のプロジェクトのファイルをそのまま使用します )。

8. 開発者の `cordova` ディレクトリを削除して、新規のプロジェクトの `cordova` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。2.3.0 では、新規のスクリプトが格納されています。

9. 開発者の `CordovaLib` ディレクトリを削除して、新規のプロジェクトの `CordovaLib` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。

10. 開発者のプロジェクトの `Cordova.plist` ファイルに対して、 `bin/cordova\_plist\_to\_config\_xml` のスクリプトを実行して、開発者の `Cordova.plist` ファイルを `config.xml` に変換してください。

11. `<cordova><plugins>` 下に下記のタグを追加して、開発者の `config.xml` に InAppBrowser プラグインを追加してください。

        <plugin name="InAppBrowser" value="CDVInAppBrowser" />

12. Objective-C プラグインから接続を行う場合、その接続先はホワイトリストに _登録されていません_ 。アプリのホワイトリスト ( app whitelist ) を使用して、接続を行うには、
メインの Cordova WebView と同じ user-agent を、リクエストの `User-Agent`ヘッダーに設定する必要があります。
メインの ビューコントローラー ( view-controller ) の `userAgent` プロパティーにアクセスして、この値を取得することができます。
また、メインのビューコントローラー ( `CDVViewController` ) には、 `URLisAllowed` メソッドがあるので、このメソッドを使用して、ホワイトリストと URL を照合することができます。

13. Device API の変更点。
    - iOS では、device.platform を使用して、 `iPhone` 、 `iPad` または `iPod Touch` を返していましたが、現在では、 `iOS` を返します。
    - iOS では、device.name ( 現在、すべてのプラットフォームでこの機能を廃止 ) を使用して、ユーザのデバイス名を返していましたが ( 例 Shazron 氏の iPhone 5 )、現在では、device.platform が以前返していた値 ( `iPhone` 、 `iPad` または `iPod Touch` ) を返します。
    - すべてのプラットフォームを対象とする、新たなプロパティ ( device.model ) を追加しました。戻り値は、デバイスの型番です ( 例 `iPad2.5` )。他のプラットフォーム上での戻り値は、device.name が以前返していた値です。

## 2.1.0 プロジェクトから 2.2.0 への更新

1. Cordova 2.2.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-2.2.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の記載内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. 新規のプロジェクトの `www/cordova-2.2.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-2.1.0.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-2.2.0.js` ファイルを指すように更新します。

7. 新規のプロジェクトの `MainViewController.m` の内容に従い、開発者の `MainViewController.m` ファイルを更新してください ( このファイルの変更をいままで行っていない場合には、新規のプロジェクトのファイルをそのまま使用します )。
    - Updated &rarr; viewWillAppear

8. 新規のプロジェクトの `cordova` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。2.2.0 では、更新した 'emulate' スクリプトが格納されています。

9. 開発者の `CordovaLib` サブプロジェクトへの参照箇所を更新します。Cordova 2.1.0 から、 `CordovaLib` の置き場所を参照するときに、CORDOVALIB 変数 ( Xcode ) を使用しません。現在、参照は、ファイルへの絶対パスを使用して行います。

    1. Terminal.app を起動します。
    2. `bin` サブディレクトリ内の Cordova をインストールした場所へ移動します ( Step 1 を参照 )。
    3. 下記のスクリプトを実行します。第 1 パラメータは、開発者のプロジェクトの `.xcodeproj` ファイルへのパス ( path ) です。

        `update_cordova_subproject path/to/your/project/xcodeproj`

__注意__ : `CordovaLib` サブプロジェクトの `bin/create` スクリプトを、開発者のプロジェクトにコピーしてください ( 原文 「 the `bin/create` script copy in the `CordovaLib` sub-project into your project. 」 )。設定を同じようにするため、 `CordovaLib` ディレクトリ下のフォルダーを、開発者のプロジェクトのディレクトリにコピーして、次に、`CordovaLib` サブプロジェクトの位置情報 ( プロジェクトに関連のある個所 ) を更新します ( Xcode File Inspector を使用 )。

## 2.0.0 プロジェクト から 2.1.0 への更新

Cordova 2.1.0 では、 __Automatic Reference Counting ( ARC )__ を使用できるように、 `CordovaLib` のアップグレードを行っています。CordovaLib を使用するために、 __ARC__ にアップグレードを行う必要はありません。ただし、 __ARC__ を使用するために、プロジェクトをアップグレードしたい場合には、メニューから Xcode migration wizard を選択して、 __Edit &rarr; Refactor &rarr; Convert to Objective-C ARC...__ を行い、libCordova を選択を行わず、ウィザードの最終ステップまで終了させてください。

1. Cordova 2.1.0 のソースのダウンロード後、ハードドライブ上の恒常的なディレクトリへ解凍を行います ( 例 : `~/Documents/Cordova-2.1.0` )。

2. Xcode を実行している場合、終了させます。

3. Terminal.app を使用して、上記でダウンロードしたソースを置いたディレクトリへ移動します。

4. 『 iOS コマンドライン ツール 』 の内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

5. 新規のプロジェクトの `www/cordova-2.1.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-2.0.0.js` ファイルを削除します。

6. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-2.1.0.js` ファイルを指すように更新します。

7. 新規のプロジェクトの `AppDelegate.m` の内容に従い、開発者の `AppDelegate.m` ファイルを更新してください ( このファイルの変更をいままで行っていない場合には、新規のプロジェクトのファイルをそのまま使用します )。

  - 修正 &rarr; application:didFinishLaunchingWithOptions:
  - 追加  &rarr; application:supportedInterfaceOrientationsForWindow:

8. 新規のプロジェクトの `MainViewController.m` の内容に従い、開発者の `MainViewController.m` ファイルを更新してください ( このファイルの変更をいままで行っていない場合には、新規のプロジェクトのファイルをそのまま使用します )。

  - 追加 &rarr; viewWillAppear

9. 新規のプロジェクトの `cordova` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします。2.1.0 では、スペース ( space ) が混在したパス ( path ) をサポートできるように、更新したスクリプトが格納されています。

10. 開発者のプロジェクト上の `VERSION` ファイルへの参照箇所を削除します ( `CordovaLib` 内のファイルでは _ありません_ )。

11. 開発者の `CordovaLib` サブプロジェクトへの参照箇所を更新します。Cordova 2.1.0 から、 `CordovaLib` の置き場所を参照するときに、CORDOVALIB 変数 ( Xcode ) を使用しません。現在、参照は、ファイルへの絶対パスを使用して行います。

    1. Terminal.app を起動します。
    2. `bin` サブディレクトリ内の Cordova をインストールした場所へ移動します ( Step 1 を参照 )。
    3. 下記のスクリプトを実行します。第 1 パラメータは、開発者のプロジェクトの `.xcodeproj` ファイルへのパス ( path ) です。

        `update_cordova_subproject path/to/your/project/xcodeproj`

## 1.9.0 プロジェクト から 2.0.0 への更新

1. Cordova 2.0.0 をインストールします。

2. 『 iOS コマンドライン ツール 』 の内容に従い、プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

3. 新規のプロジェクトの `www/cordova-2.0.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-1.9.0.js` ファイルを削除します。

4. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-2.0.0.js` ファイルを指すように更新します。

5. 新規のプロジェクトの `cordova` ディレクトリを、開発者のプロジェクトの root ( ルート ) ディレクトリへコピーします ( コマンドライン ツールを使用したい場合 )。

6. __Supporting Files__ グループ下に置かれている、開発者の `Cordova.plist` ファイルの `Plugins` 下にエントリーを追加します。key は `Device` 、value は `CDVDevice` です。

7. `Cordova.framework` を削除します。

8. __Supporting Files__ グループの `verify.sh` を削除します。

9. Project Navigator のプロジェクトアイコンを選択して、次に、開発者のプロジェクトの __Target__ を選択して、そして、 __Build Settings__ タブを選択します。

10. __Preprocessor Macros__ を検索します。次に、 __CORDOVA_FRAMEWORK=1__ 値をすべて削除します。

11. `CordovaLib` ディレクトリを選択します。このディレクトリは、開発者のホームフォルダー ( home folder ) の `Documents` サブディレクトリ下に作成されています ( ハードドライブ上 )。

12. `CordovaLib` ディレクトリの `CordovaLib.xcodeproj` ファイルを選択して、開発者のプロジェクトにこのファイルをドラッグ & ドロップします。これにより、サブプロジェクトとして表示されます。

13. プロジェクトのビルドを行います。このとき、 `#import` ディレクティブに関するエラーが表示されるはずです。

14. `#import` エラーに関しては、下記の引用符形式の import を修正します。

        #import "CDV.h"

    変更後は、こちらの山括弧形式になります。

        #import <Cordova/CDV.h>

    Cordova の import で使用していた `#ifdef` ラッパー ( wrapper ) を削除してください。これらのラッパーは、もはや不要となりました ( 現在、import 方法は統一化しています )。

15. プロジェクトのビルドを再び行ってください。 `#import` エラーが表示されないことをご確認ください。

16. Project Navigator の __プロジェクトアイコン__ を選択して、次に、開発者のプロジェクトの __Target__ を選択して、そして、 __Build Phases__ タブを選択します。

17. __Target Dependencies__ フェーズ ( phase ) を開き、 __+__ ボタンを選択します。

18. `CordovaLib` ターゲットを選択して、 __Add__ ボタンを選択します。

19. 最初の __Link Binary with Libraries__ フェーズを開き ( フェーズ内に複数のフレームワークが表示されていることをご確認ください )、 __+__ ボタンを選択します。
 
20. `libCordova.a` の静的ライブラリ ( static library ) を選択して、 __Add__ ボタンを選択します。

21. __Run Script__ フェーズを削除します。

22. Project Navigator の __プロジェクトアイコン__ を選択して、次に、開発者のプロジェクトの __Target__ を選択して、そして、 __Build Settings__ タブを選択します。

23. __Other Linker Flags__ を検索します。次に、値を追加します ( __-force_load__ と __-Obj-C__ )。

24. `CordovaLib` サブプロジェクトを開きます。

25. `VERSION` ファイルを選択して、開発者のメインプロジェクトにドラッグします ( リンクを作成します。コピーではありません。 )。

26. __Create groups for any added folders__ ラジオボタンを選択して、 __Finish__ ボタンを選択します。

27. 上記のステップでドラッグした `VERSION` ファイルを選択します。

28. __Option-Command-1__ のショートカットキーを押して、 __File Inspector__ を表示します ( または、メニューアイテムから __View &rarr; Utilities &rarr; Show File Inspector__ を選択 )。

29. __File Inspector__ の __Location__ のドロップダウンメニューから __Relative to CORDOVALIB__ を選択します。 

30. Xcode の preference の設定を行います。 __Xcode Preferences &rarr; Locations &rarr; Derived Data &rarr; Advanced...__ を選択して、 __Unique__ に設定します。これにより、統一化されているヘッダーを見つけることができます。

31. Project Navigator の __プロジェクトアイコン__ を選択して、次に、開発者のプロジェクトの __Target__ を選択して、そして、 __Build Settings__ タブを選択します。

32. __Header Search Paths__ を検索します。その設定に、以下の 3 つの値を追記 ( 引用符を含む ) します。

        "$(TARGET_BUILD_DIR)/usr/local/lib/include"

        "$(OBJROOT)/UninstalledProducts/include"

        "$(BUILT_PRODUCTS_DIR)"

33. __Other Linker Flags__ を検索します。その設定に、以下の値を追記します。

        -weak_framework CoreFoundation

34. プロジェクトのビルドを行います。 コンパイルを行えること、および、 __no issues__ と表示されることをご確認ください。

35. __Scheme__ ドロップダウンから開発者のプロジェクトを選択して、 __iPhone 5.1 Simulator__ を選択してください。

36. __Run__ ボタンを選択します。

__注意__: シミュレーター上で、プロジェクトに不具合が生じている場合には、Xcode のコンソールログで状態を確認します。

## 1.8.x プロジェクト から 1.9.0 への更新

1. Cordova 1.9.0 をインストールします。

2. プロジェクトを新規作成してください。この新規のプロジェクトのアセット ( assets ) が必要となります。

3. 新規のプロジェクトの `www/cordova-1.9.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-1.8.x.js` ファイルを削除します

4. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-1.9.0.js` ファイルを指すように更新します。

__NOTE__: 1.9.0 では、Cordova.plist の新 `BackupWebStorage` ( boolean 値 ) をサポートします。デフォルトでは有効となっていますので、無効にするには `false` に設定します ( 特に iOS 6 )。 こちらの [Release Notes: Safari and UIKit Section](https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html) をご確認ください。

## 1.7.0 プロジェクト から 1.8.x への更新

1. Cordova 1.8.0 をインストールします。

2. プロジェクトを新規作成してください。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

3. 新規のプロジェクトの `www/cordova-1.8.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-1.7.x.js` ファイルを削除します。

4. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-1.8.0.js` ファイルを指すように更新します。

Capture API を使用する場合には、新 __iPad retina-display__ アセット ( assets ) が必要となります。

1. 新規のプロジェクトの `Resources/Capture.bundle` アイテム ( item ) を、開発者のプロジェクトのディレクトリにコピーして、既存の `Resources/Capture.bundle` アイテムを上書きします。

2. Xcode の Project Navigator ( 開発者のプロジェクト ) で `Capture.bundle` アイテム ( item ) を選択して、 __Delete__ キーを押して、表示されたダイアログ上で __Remove Reference__ を選択します。

3. 上記のステップ 1 の新 `Capture.bundle` を Xcode の Project Navigator にドラッグして、 __Create groups for any added folders__ ラジオボタンを選択します。

## 1.6.x プロジェクト から 1.7.0 への更新

1. Cordova 1.7.0 をインストールします。

2. プロジェクトを新規作成してください。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

3. 新規のプロジェクトの `www/cordova-1.7.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-1.6.0.js` ファイルを削除します。

4. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-1.7.0.js` ファイルを指すように更新します。

## 1.5.0 プロジェクト から 1.6.x への更新

1. Cordova 1.6.1 をインストールします。

2. 開発者のプロジェクトのバックアップをしてください。バックアップ対象のファイルは、 `AppDelegate.m` 、 `AppDelegate.h` 、 `MainViewController.m` 、 `MainViewController.h` 、 `Cordova.plist` です。

3. プロジェクトを新規作成してください。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

4. 新規のプロジェクトが持つ以下のファイルを、ディスク上の開発者の 1.5.0 系のプロジェクトディレクトリにコピーして、旧ファイルを置き換えます ( 上記のステップ 2 に従い、旧ファイルのバックアップを最初に行います )。

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist

5. 新 `MainViewController` と新 `AppDelegate` ファイルのすべてを、開発者の Xcode プロジェクトに追加します。

6. 新規のプロジェクトの `www/cordova-1.6.1.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova-1.5.0.js` ファイルを削除します。

7. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-1.6.1.js` ファイルを指すように更新します。

8. 開発者のプロジェクトに新 `Cordova.plist` ファイルを追加します。Cordova JavaScript ファイルの統一化 ( `cordova-js` ) に伴い、Android と BlackBerry のサービス名に適合するように、コア plugin のサービス名を変更する必要があるため、この処理が必要となります。

9. 設定を移植します。__バックアップを行った Cordova.plist__ から __Plugins__ と __ExternalHosts__ のエントリーを、新 `Cordova.plist` に移植します。

10. プロジェクトで使用するコードを移植します。バックアップを行った `AppDelegate.h` と `AppDelegate.m` 内に存在する、プロジェクトで使用するコードを新 `AppDelegate` ファイル に移植します。 `AppDelegate.m` の `UIWebViewDelegate` または `CDVCommandDelegate` を `MainViewController.m` へ必ず移植してください ( 左記ファイル内のコメントを参照のこと )。

11. プロジェクトで使用するコードを移植します。バックアップを行った `MainViewController.h` と `MainViewController.m` 内に存在する、プロジェクトで使用するコードを新 MainViewController 系ファイルへ移植します。

12. Project Navigator のプロジェクトアイコンをクリックして、開発者の __Project__ を選択して、次に、 __Build Settings__ タブを選択します。

13. 検索フィールド ( search field ) に __Compiler for C/C++/Objective-C__ と入力します。

14. __Apple LLVM Compiler 3.1__ 値を選択します。

## 1.4.x プロジェクト から 1.5.0 への更新

1. Cordova 1.5.0 をインストールします。

2. プロジェクトを新規作成して、一度実行します。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

3. 新規のプロジェクトの `www/cordova-1.5.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/cordova1.4.x.js` ファイルを削除します。

4. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `cordova-1.5.0.js` ファイルを指すように更新します。

5. Project Navigator 上で `PhoneGap.framework` を検索して、選択します。

6. __Delete__ キーを押して、 `PhoneGap.framework` への参照を Project Navigator から削除します。

7. __Option-Command-A__ のショートカットキーを押して、 __Add Files...__ シート ( sheet ) を表示します。開発者のプロジェクトに追加するファイルを選択します。 __Created groups for any added folders__ ラジオボタンが選択されていることを確認してください。

8. __Shift-Command-G__ のショートカットキーを押して、 __Go to the folder:__ シート ( sheet ) を表示して、フォルダーへ移動します。

9. __Go to the folder:__ シート ( sheet ) 上で `/Users/Shared/Cordova/Frameworks/Cordova.framework` と入力して、 __Go__ ボタンを押します。

10. __Add Files...__ シート ( sheet ) の __Add__ ボタンを押します。

11. Project Navigator 上で `Cordova.framework` を選択します。

12. __Option-Command-1__ のショートカットキーを押して、 __File Inspector__ を表示します。

13. __File Inspector__ の __Location__ ドロップダウンメニューから __Absolute Path__ を選択します。

14. __Option-Command-A__ のショートカットキーを押して、 __Add Files...__ シート ( sheet ) を表示します。開発者のプロジェクトに追加するファイルを選択します。 __Created groups for any added folders__ ラジオボタンが選択されていることを確認してください。

15. __Shift-Command-G__ のショートカットキーを押して、 __Go to the folder:__ シート ( sheet ) を表示して、フォルダーへ移動します。

16. __Go to the folder:__ シート ( sheet ) 上で `~/Documents/CordovaLib/Classes/deprecated` と入力して、 __Go__ ボタンを押します。

17. __Add Files...__ シート ( sheet ) の __Add__ ボタンを押します。

18. 開発者の `AppDelegate.h` 、 `AppDelegate.m` および `MainViewController.h` ファイル内の `#ifdef PHONEGAP_FRAMEWORK` ブロック ( block ) 全体を以下の記述に置き換えます。

        #import "CDVDeprecated.h"

19. Project Navigator の __プロジェクトアイコン__ をクリックして、 __Target__ を選択して、次に、 __Build Settings__ タブを選択します。

20. __Framework Search Paths__ を検索します。

21. `/Users/Shared/Cordova/Frameworks` を使用して、既存の値を置き換えます。

22. __Preprocessor Macros__ を検索します。

23. __CORDOVA_FRAMEWORK=YES__ を使用して、最初の値 ( 複合型 ) を置き換えます。

24. __Build Phases__ タブを選択します。

25. __Run Script__ を開きます。

26. __PhoneGap__ と記載があるものを __Cordova__ にすべて置き換えます。

27. Project Navigator 上で、開発者の `PhoneGap.plist` ファイルを検索して、ファイル名をクリックして、ファイル名の変更モードにしてください。

28. `PhoneGap.plist` から `Cordova.plist` へファイル名を変更します。

29. `Cordova.plist` を右クリックして、 __Open As &rarr; Source Code__ を選択します。

30. __Option-Command-F__ を押して、Source ウィンドウの左上のドロップダウンから __Replace__ を選択します。

31. Find 文字列 ( 検索する文字列 ) に `com.phonegap` と入力して、Replace 文字列 ( 置換後の文字列 ) に `org.apache.cordova` と入力して、 __Replace All__ ボタンを押します。

32. Find 文字列 ( 検索する文字列 ) に __PG__ と入力して、Replace 文字列 ( 置換後の文字列 ) に __CDV__ と入力して、 __Replace All__ ボタンを押します。

33. __Command-B__ を押して、ビルドします。将来的には削除しなければならない対象の廃止機能はまだいくつか残っています ( `CDVDeprecated.h` を参照してください。たとえば、PG* を使用している、開発者のコード内のクラスを CDV* に置き換えるなど )。

## 1.4.0 プロジェクト から 1.4.1 への更新

1. Cordova 1.4.1 をインストールします。

2. `MainViewController.m` のバックアップをしてください。

3. プロジェクトを新規作成してください。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

4. 新規のプロジェクトの `MainViewController.m` ファイルを、ディスク上の開発者の 1.4.0 系のプロジェクトディレクトリにコピーして、旧ファイルを置き換えます ( 上記のステップ 2 に従い、旧ファイルのバックアップを最初に行います )。

5. 開発者の Xcode プロジェクトに `MainViewController.m` ファイルを追加します。

6. プロジェクトで使用するコードを移植します。バックアップを行った `MainViewController.m` 内に存在する、プロジェクトで使用するコードを新しいファイルへ移植します。

7. `phonegap-1.4.0.js` の更新は、必須ではありません。1.4.0 と 1.4.1 の間で、JavaScript を更新した箇所はありません。

## 1.3.0 プロジェクト から 1.4.0 への更新

1. Cordova 1.4.0 をインストールします。

2. 開発者のプロジェクトのバックアップをしてください。バックアップ対象のファイルは、 `AppDelegate.m` と `AppDelegate.h` です。

3. プロジェクトを新規作成してください。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

4. 新規のプロジェクトに存在する以下のファイルを、開発者の 1.3.0 系のプロジェクトディレクトリにコピーして、旧ファイルを置き換えます ( 上記のステップ 2 に従い、旧ファイルのバックアップを最初に行います )。

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib

5. 新 `MainViewController` ファイルのすべてを、開発者の Xcode プロジェクトに追加します。

6. 新規のプロジェクトの `www/phonegap-1.4.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/phonegap-1.3.0.js` ファイルを削除します。

7. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `phonegap-1.4.0.js` ファイルを指すように更新します。

8. 開発者の `PhoneGap.plist` ファイルの `Plugins` 下にエントリーを追加します。key は `com.phonegap.battery` 、value は `PGBattery` です。

9. プロジェクトで使用するコードを移植します。バックアップを行った `AppDelegate.h` と `AppDelegate.m` 内に存在する、プロジェクトで使用するコードを新 AppDelegate ファイル群へ移植します。

## 1.2.0 プロジェクト から 1.3.0 への更新

1. Cordova 1.3.0 をインストールします。

2. 開発者のプロジェクトのバックアップをしてください。バックアップ対象のファイルは、 `AppDelegate.m` と `AppDelegate.h` です。

3. プロジェクトを新規作成してください。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

4. 新規のプロジェクトに存在する以下のファイルを、開発者の 1.2.0 系のプロジェクトディレクトリにコピーして、旧ファイルを置き換えます ( 上記のステップ 2 に従い、旧ファイルのバックアップを最初に行います )。

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib

5. 新 `MainViewController` ファイルのすべてを、開発者の Xcode プロジェクトに追加します。

6. 新規のプロジェクトの `www/phonegap-1.3.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/phonegap-1.2.0.js` ファイルを削除します。

7. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `phonegap-1.3.0.js` ファイルを指すように更新します。

8. 開発者の `PhoneGap.plist` ファイルの `Plugins` 下にエントリーを追加します。key は `com.phonegap.battery` 、value は `PGBattery` です。

9. プロジェクトで使用するコードを移植します。バックアップを行った `AppDelegate.h` と `AppDelegate.m` 内に存在する、プロジェクトで使用するコードを新 AppDelegate ファイル群へ移植します。

## 1.1.0 プロジェクト から 1.2.0 への更新

1. 1.2.0 をインストールします。

2. 開発者のプロジェクトのバックアップをしてください。バックアップ対象のファイルは、 `AppDelegate.m` と `AppDelegate.h` です。

3. プロジェクトを新規作成してください。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

4. 新規のプロジェクトに存在する以下のファイルを、開発者の 1.1.0 系のプロジェクトディレクトリにコピーして、旧ファイルを置き換えます ( 上記のステップ 2 に従い、旧ファイルのバックアップを最初に行います )。

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib

5. `MainViewController` ファイルのすべてを、開発者の Xcode プロジェクトに追加します。

6. 新規のプロジェクトの `www/phonegap-1.2.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/phonegap-1.1.0.js` ファイルを削除します。

7. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `phonegap-1.2.0.js` ファイルを指すように更新します。

8. 開発者の `PhoneGap.plist` ファイルの `Plugins` 下にエントリーを追加します。key は `com.phonegap.battery` 、value は `PGBattery` です。

9. プロジェクトで使用するコードを移植します。バックアップを行った `AppDelegate.h` と `AppDelegate.m` 内に存在する、プロジェクトで使用するコードを新 AppDelegate ファイル群へ移植します。

## 1.0.0 プロジェクト から 1.1.0 への更新

1. Cordova 1.1.0 をインストールします。

2. 開発者のプロジェクトのバックアップをしてください。バックアップ対象のファイルは、 `AppDelegate.m` と `AppDelegate.h` です。

3. プロジェクトを新規作成してください。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

4. 新規のプロジェクトに存在する以下のファイルを、開発者の 1.0.0 系のプロジェクトディレクトリにコピーして、旧ファイルを置き換えます ( 上記のステップ 2 に従い、旧ファイルのバックアップを最初に行います )。

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib

5. 新 `MainViewController` ファイルのすべてを、開発者の Xcode プロジェクトに追加します。

6. 新規のプロジェクトの `www/phonegap-1.1.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/phonegap-1.0.0.js` ファイルを削除します。

7. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `phonegap-1.1.0.js` ファイルを指すように更新します。

8. 開発者の `PhoneGap.plist` ファイルの `Plugins` 下にエントリーを追加します。key は `com.phonegap.battery` 、value は `PGBattery` です。

9. プロジェクトで使用するコードを移植します。バックアップを行った `AppDelegate.h` と `AppDelegate.m` 内に存在する、プロジェクトで使用するコードを新 AppDelegate ファイル群へ移植します。

## 0.9.6 プロジェクト から 1.0.0 への更新

1. Cordova 1.0.0 をインストールします。

2. 開発者のプロジェクトのバックアップをしてください。バックアップ対象のファイルは、 `AppDelegate.m` と `AppDelegate.h` です。

3. プロジェクトを新規作成してください。この新規のプロジェクトのいくつかのアセット ( assets ) が必要となります。

4. 新規のプロジェクトに存在する以下のファイルを、開発者の 0.9.6 系のプロジェクトディレクトリにコピーして、旧ファイルを置き換えます ( 上記のステップ 2 に従い、旧ファイルのバックアップを最初に行います )。

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib

5. 新 `MainViewController` ファイルのすべてを、開発者の Xcode プロジェクトに追加します。

6. 新規のプロジェクトの `www/phonegap-1.0.0.js` ファイルを開発者の `www` ディレクトリへコピーして、開発者の `www/phonegap-0.9.6.js` ファイルを削除します。

7. 開発者の `www/index.html` ファイル ( および、スクリプトの参照を行っているファイル ) 内で Cordova スクリプトを参照している箇所を、新 `phonegap-1.0.0.js` ファイルを指すように更新します。

8. 開発者の `PhoneGap.plist` ファイルの `Plugins` 下にエントリーを追加します。key は `com.phonegap.battery` 、value は `PGBattery` です。

9. プロジェクトで使用するコードを移植します。バックアップを行った `AppDelegate.h` と `AppDelegate.m` 内に存在する、プロジェクトで使用するコードを新 AppDelegate ファイル群へ移植します。
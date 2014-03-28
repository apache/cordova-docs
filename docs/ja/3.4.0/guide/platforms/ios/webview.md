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

# iOS の web 表示

このセクションを大きい iOS アプリケーション内でのコルドバ有効 WebView コンポーネントを埋め込む方法を示します。これらのコンポーネントが互いと通信できる方法については、アプリケーション ・ プラグインを参照してください。

コルドバ 1.4、始まる iOS web 表示のサポートを使用して、 `Cleaver` コンポーネント Xcode テンプレートを参照実装として提供しています。 コルドバ 2.0 およびそれ以降のバージョンのみサブプロジェクト ベース包丁実装をサポートします。

これらの手順を少なくとも必要とコルドバ 2.3 と Xcode 4.5 と一緒に、 `config.xml` iOS の新しく作成されたプロジェクトからのファイル。 ことができます手順をコマンド ライン インターフェイスで、新しいプロジェクトを作成し、取得する、 `config.xml` 内で名前付きアプリケーションのサブディレクトリ内のファイルから`platforms/ios`.

これらの指示に従って、最新コルドバ分布があることを確認します。[Cordova.apache.org][1]からダウンロードし、その iOS パッケージを解凍します。

 [1]: http://cordova.apache.org

## 包丁は、Xcode プロジェクト (CordovaLib サブ プロジェクト) に追加します。

1.  それが実行されている場合は、Xcode を終了します。

2.  ターミナルを開きコルドバ iOS のソース ディレクトリに移動します。

3.  コピー、 `config.xml` ファイルをプロジェクト ディレクトリに上記で説明しました。

4.  Xcode を開くし、ファインダーを使用してコピー、 `config.xml` 、**プロジェクト ナビゲーター**ウィンドウにファイル。

5.  **追加フォルダーを作成するグループ**を選択し、**終了**キーを押します.

6.  Finder を使用してコピー、 `CordovaLib/CordovaLib.xcodeproj` Xcode の**プロジェクト ナビゲーター**にファイル

7.  選択 `CordovaLib.xcodeproj` **プロジェクト ナビゲーター**内.

8.  **ファイル インスペクター**を表示する**オプション コマンド 1**のキーの組み合わせを入力します。.

9.  選択してください**グループに相対的な****ファイル検査**のドロップ ダウン メニューでの**場所**.

10. **プロジェクト ナビゲーター**で**プロジェクトのアイコン**を選択、**ターゲット**を選択して [**ビルド設定**] タブの [します。

11. 追加 `-force_load` と `-Obj-C` の**他のリンカーのフラグ**値。

12. プロジェクト ナビゲーターで**プロジェクト アイコン**をクリックして**ターゲット**を選択し、**ビルド フェーズ**] タブを選択します。

13. **ライブラリとリンク バイナリ**を展開します。.

14. **+**を選択してこのボタンをクリックすると、し次の**フレームワーク**を追加。 必要に応じて、**プロジェクト ナビゲーター**内移動それら**フレームワーク**グループの下。
    
        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework
        

15. **ターゲットの依存関係**、1 つ以上のボックスがある場合にそのラベルを持つセットトップ ボックスを展開します。

16. **+**を選択してこのボタンをクリックすると、し追加、 `CordovaLib` 製品を構築します。

17. **ライブラリとリンク バイナリ プログラム**、1 つ以上のボックスがある場合にそのラベルを持つセットトップ ボックスを展開します。

18. **+**を選択してこのボタンをクリックすると、し追加`libCordova.a`.

19. 設定、 **Xcode の基本設定 → 場所 → 派生データ → 高度な...** **一意**に.

20. プロジェクト ナビゲーターで**プロジェクトのアイコン**を選択、**ターゲット**を選択し、[**ビルド設定**] タブを選択します。

21. **ヘッダー検索パス**で検索します。この設定では、引用符を含む以下のこれらの 3 つの値を追加します。
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    コルドバ 2.1.0、現在 `CordovaLib` **自動参照カウント (ARC)**を使用してにアップグレードされています。 使用する**アーク**にアップグレードする必要はありません `CordovaLib` から Xcode の移行ウィザードを使用して**円弧**を使用してプロジェクトをアップグレードする場合は、**編集 → → リファクタリング... Objective-C の円弧に変換**メニュー、 **libCordova.a の選択を解除**を完了するまでウィザードを実行します。

## CDVViewController を使用してください。

1.  次のヘッダーを追加します。
    
        #import <Cordova/CDVViewController.h>
        

2.  新しいインスタンス化 `CDVViewController` とどこか、例えば、クラスのプロパティにそれを保持：
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  必要に応じて、設定、 `wwwFolderName` プロパティは、既定値は `www` ：
    
        viewController.wwwFolderName = @"myfolder";
        

4.  必要に応じて、スタート ページ設定、 `config.xml` ファイルの `<content>` タグは、ローカルのファイル。
    
        <content src="index.html" />
        
    
    .. またはリモート ・ サイト：
    
        <content src="http://apache.org" />
        

5.  必要に応じて、設定、 `useSplashScreen` プロパティは、既定値は `NO` ：
    
        viewController.useSplashScreen = YES;
        

6.  **ビュー フレーム**を設定します。常にこれ、最後のプロパティとして設定します。
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  包丁をビューに追加します。
    
        [myView addSubview:viewController.view];
        

## HTML、CSS、JavaScript 資産を追加します。

1.  プロジェクト内の新しいディレクトリを作成します `www` たとえば。

2.  このディレクトリに、HTML、CSS、JavaScript の資産を配置します。

3.  Xcode の**プロジェクト ナビゲーター**ウィンドウにディレクトリをコピーするには、Finder を使用します。

4.  **追加フォルダーを作成するフォルダー参照**を選択します.

5.  適切な設定 `wwwFolderName` と `startPage` の最初に作成したディレクトリのプロパティまたは (前のセクションで指定された) 既定値を使用してインスタンス化するとき、`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"
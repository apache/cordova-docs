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

title: iOS の web 表示
---

# iOS の web 表示

コルドバ 1.4 以降では、iOS アプリケーションでコルドバ、コンポーネントとして使用できます。このコンポーネントは、コードネーム '包丁'。

新しいコルドバ ベースのアプリケーション コルドバ 1.4 またはより大きい使用の包丁で提供される Xcode テンプレートを使用して作成されます。(テンプレートは包丁のリファレンス実装) です。

コルドバ 2.0.0 とそれ以降のバージョンに基づいてサブ プロジェクト包丁実装をサポートのみ。

## 前提条件

*   コルドバ 2.3.0 以上

*   Xcode 4.5 以上

*   `config.xml`ファイルから新しく作成された iOS プロジェクト)

## 包丁、Xcode プロジェクト (CordovaLib サブ プロジェクト) に追加します。

1.  ダウンロード ソース展開と、コルドバ、ハード ドライブ上の永続的なディレクトリの場所を例に`~/Documents/Cordova`.

2.  それが実行されている場合は、Xcode を終了します。

3.  ターミナルを使用して、上記ダウンロードしたソースを配置したディレクトリに移動します。

4.  コピー、 `config.xml` ディスク上のプロジェクトのディレクトリにファイル (上記の前提条件を参照してください)。

5.  ドラッグ アンド ドロップ、 `config.xml` Xcode プロジェクト ナビゲーターにファイル。

6.  **追加フォルダーを作成するグループ**のオプション ボタンを選択し、**終了**キーを押します.

7.  ドラッグ アンド ドロップ、 `CordovaLib.xcodeproj` Xcode プロジェクト ナビゲーターにファイル (永続的なディレクトリから、上記の場所およびそれべきで、 `CordovaLib` サブディレクトリ)。

8.  Select `CordovaLib.xcodeproj` in the Project Navigator.

9.  **ファイル インスペクター**を表示する**オプション コマンド 1**のキーの組み合わせを入力します。.

10. 選択してください**グループに相対的な****ファイル検査**のドロップ ダウン メニューでの**場所**.

11. プロジェクト ナビゲーターで**プロジェクトのアイコン**を選択、**ターゲット**を選択し、[**ビルド設定**] タブを選択します。

12. 追加 `-all_load` と `-Obj-C` の**他のリンカーのフラグ**値。

13. プロジェクト ナビゲーターで**プロジェクト アイコン**をクリックして**ターゲット**を選択し、[**ビルド フェーズ**] タブを選択します。

14. **ライブラリとリンク バイナリ**を展開します。.

15. **+**を選択してこのボタンをクリックすると、し次の**フレームワーク**を追加。必要に応じて、プロジェクト ナビゲーターで移動それら**フレームワークス**グループの下で)。
    
        AddressBook.framework AddressBookUI.framework AudioToolbox.framework AVFoundation.framework CoreLocation.framework MediaPlayer.framework QuartzCore.framework SystemConfiguration.framework MobileCoreServices.framework CoreMedia.framework
        

16. **ターゲットの依存関係**、複数のボックスがある場合、このようなラベル トップ ボックスを展開 ！

17. **+**を選択してこのボタンをクリックすると、し追加、 `CordovaLib` 製品を構築します。

18. **ライブラリとリンク バイナリ プログラム**、複数のボックスがある場合、このようなラベル トップ ボックスを展開 ！

19. **+**を選択してこのボタンをクリックすると、し追加`libCordova.a`.

20. **一意**に**Xcode 設定 → 場所 → 派生データ高度な...** Xcode の優先順位を設定します。.

21. プロジェクト ナビゲーターで**プロジェクトのアイコン**を選択、**ターゲット**を選択し、[**ビルド設定**] タブを選択します。

22. **ヘッダー検索パス**で検索します。その設定は引用符 （） で以下これら 3 つの値を追加します。
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    コルドバ 2.1.0 と `CordovaLib` を**自動参照カウント (ARC)**を使用してアップグレードされました。 必要な**アーク**を使用する CordovaLib が**アーク**を使用してプロジェクトをアップグレードする場合にアップグレードするください使用しないメニューから Xcode 移行ウィザード:**編集 → → リファクタリング... Objective-C の弧に変換**、 **libCordova.a の選択を解除**、完了するまでウィザードを実行します。

## コード内で CDVViewController を使用してください。

1.  このヘッダーを追加します。
    
        #import <Cordova/CDVViewController.h>
        

2.  新しいインスタンス化 `CDVViewController` 、それをどこか （例えば、あなたのクラスでのプロパティ) を保持して。
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  (*省略可能です*)設定、 `wwwFolderName` プロパティ (既定値は `www` )。
    
        viewController.wwwFolderName = @"myfolder";
        

4.  (*省略可能です*)あなたの config.xml でスタート ページを設定、 `<content>` タグ。
    
        <content src="index.html" />
        
    
    OR
    
        <content src="http://apache.org" />
        

5.  (*省略可能です*)設定、 `useSplashScreen` プロパティ (既定値は `NO` )。
    
        viewController.useSplashScreen = YES;
        

6.  **ビュー フレーム**を設定 (常に、最後のプロパティとしてこれをセット)。
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  包丁のビューに追加します。
    
        [myView addSubview:viewController.view];
        

## HTML、CSS、JavaScript の資産を追加します。

1.  ディスクのプロジェクトで新しいディレクトリを作成 `www` 例えば。

2.  このディレクトリに、HTML、CSS、JavaScript の資産を置きます。

3.  ドラッグ アンド ドロップ ディレクトリ Xcode プロジェクト ナビゲーター。

4.  **追加フォルダーを作成するフォルダーの参照**オプション ボタンを選択します。

5.  適切な設定 `wwwFolderName` と `startPage` の最初に作成したフォルダーのプロパティ (前のセクションを参照) の既定値を使用またはインスタンスを作成する、`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"
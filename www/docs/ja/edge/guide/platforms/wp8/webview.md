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

title: Windows Phone 8.0 web 表示
---

# Windows Phone 8.0 web 表示

このガイドより大規模な Windows Phone 8.0 アプリケーション内のコルドバ有効 WebView コンポーネントを埋め込む方法を示します。

これらの指示に従う、最新コルドバ分布があることを確認します。 [Cordova.apache.org](http://cordova.apache.org)からダウンロードし、Windows Phone 8.0 パッケージ （コルドバ wp8 *.zip) を解凍します。

  1. パッケージに移動 `wp8/framework` ディレクトリおよびビルド `WPCordovaClassLib.sln` 。それを作成します`Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. コピー、 `WPCordovaClassLib.dll` ファイルを Windows Phone 8 プロジェクトに `/libs` ディレクトリを含めると `WPCordovaClassLib.dll` 経由であなたのプロジェクトに `Project->References->Add Reference` 。 また、あなたを直接参照することができます、 `wp8/framework/WPCordovaClassLib.csproj` ファイル。

  3. 追加 `CordovaView` (たとえば、ページにコンポーネント`MainPage.xaml`).
    
        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />
        

  4. コピー `common/www/cordova.js` Windows Phone 8 プロジェクトのアプリケーションの HTML や JavaScript ファイルと共に `html` ディレクトリ、プロジェクトに新しいファイルが含まれます。

  5. コピー、 `wp8/template/config.xml` プロジェクトのルート ディレクトリに、

上記の手順はコルドバ コアコンポーネントのみをリンク、コルドバ プラグインをリンクするために管理のプラグインを使用して Plugman を参照してください。
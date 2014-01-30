---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# ブラックベリー 10 構成

`config.xml`ファイルは、各アプリケーションと CordovaWebView のインスタンス全体に適用される、アプリの基本的な設定を制御します。 ブラックベリー 10 にのみ適用されますこのセクションの詳細設定を構築します。 グローバル構成のオプションには、config.xml ファイル情報を参照してください。

*   `ChildBrowser`( `disable` またはデフォルトの `enable` ): ブラウザーの子ウィンドウを無効にします。 既定では、アプリ経由でアクセスされるリソースを表示するセカンダリ ブラウザー ウィンドウが起動 `window.open()` またはを指定して、 `_blank` アンカー ターゲット。 指定 `disable` この既定動作をオーバーライドします。
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker`( `enable` またはデフォルトの `disable` ): への呼び出しを防止するポップアップ ブロッカーを有効 `window.open()` 。 既定では、ポップアップの子ブラウザー ウィンドウで表示します。 優先順位を設定する `enable` すべてが表示されません。
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity`( `disable` またはデフォルト `enable` ）： に設定されている `disable` 未知のソースからリモート コンテンツにアクセスできるように、web のセキュリティ設定をオーバーライドします。 この設定は、開発の利便性だけ、ので削除して配布用アプリケーションのパッケージとして用います。 知られているとホワイト リストに登録を使用してリリースされたアプリは、すべての Uri がする必要があります、 `<access>` ドメイン ホワイト リスト ガイドで説明されている要素。
    
        <preference name="WebSecurity" value="disable"/>
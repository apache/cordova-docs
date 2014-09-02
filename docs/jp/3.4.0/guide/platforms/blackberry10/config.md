---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements. See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership. The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
         under the License.
---

# BlackBerry 10 の設定

`config.xml` ファイルを使用して、各アプリと各 CordovaWebView のインスタンス間に適用する、アプリの基本的な設定を行います。
この節では、BlackBerry 10 のビルドのみに適用する preference に関して解説します。グローバル設定で使用する各種オプションに関しては、『 config.xml ファイル 』 をご確認ください。

- `ChildBrowser` ( `disable` 、または、デフォルトでは `enable` ) : Child Browser ウィンドウを無効にします。
デフォルト設定の場合、 `window.open()` またはアンカー ( target = `_blank` ) を使用してアクセスした各リソースを表示するとき、別のブラウザーウィンドウをアプリ側で立ち上げます。 `disable` に指定すると、デフォルトの挙動を上書きします。

        <preference name="ChildBrowser" value="disable"/>

- `PopupBlocker` ( `enable` 、または、デフォルトでは `disable` ) : ポップアップブロック ( popup blocker ) を有効にします。ポップアップブロックを有効にすると、 `window.open()` への呼び出しを防ぎます。デフォルトでは、Child Browser ウィンドウ内でポップアップを表示します。preference を `enable` に設定することにより、表示不可にすることができます。

        <preference name="PopupBlocker" value="enable"/>

- `WebSecurity` ( `disable` 、または、デフォルトでは `enable` ) : `disable` に設定すると、Web のセキュリティ設定を上書きし、提供元不明のアプリ ( Unknown Source ) からのリモートコンテンツへのアクセスを行えるようにします。
この preference は、開発中のみ、使用するものです。配布用にアプリをパッケージ化する前に削除する必要があります。『 ホワイトリストに関するガイド 』 で記載されているように、リリースを行うアプリに関しては、`<access>` 要素を使用して、ホワイトリストに URI の登録を行い、外部ドメインは既知の状態になっている必要があります。

        <preference name="WebSecurity" value="disable"/>

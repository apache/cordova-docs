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

# Windows 8 アップグレード

このガイドは、コルドバの旧バージョンからアップグレードする Windows 8 プロジェクトを変更する方法を示します。 これらの命令のほとんど、古いの前にあるコマンド ライン ツールのセットで作成されたプロジェクトに適用されます、 `cordova` CLI ユーティリティ。 CLI のバージョンを更新する方法については、コマンド ライン インターフェイス参照してください。

## 3.1.0 から 3.2.0 にアップグレードします。

コルドバ CLI で作成されたプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update windows8`.

コルドバ CLI で作成されていないプロジェクトの場合に実行します。

        bin\update <project_path>
    

## 3.1.0 へのアップグレードします。

コルドバ CLI Windows 8 はコルドバ 3.1.0 で導入されました。アップグレードには、プロジェクトとすべての必要な資産の上に移動新しいコルドバ CLI の作成をお勧めします。

## 2.8.0 から 2.9.0 へのアップグレードします。

次のコマンドで行うことがから Visual Studio 確かに、任意のプロジェクトの参照は更新/削除します。

1.  削除 `cordova-2.8.0.js` プロジェクトの `www` ディレクトリ。

2.  追加 `cordova.js` をプロジェクトのソースからファイル `www` ディレクトリ。(ファイルがもはやファイル名にバージョン番号が含まれていることに注意してください)。

3.  ビルドとテスト ！

## 2.8.0 へ 2.7.0 からのアップグレードします。

次のコマンドで行うことがから Visual Studio 確かに、任意のプロジェクトの参照は更新/削除します。

1.  削除 `cordova-2.7.0.js` プロジェクトの `www` ディレクトリ。

2.  追加 `cordova.js` をプロジェクトのソースからファイル `www` ディレクトリ。(ファイルがもはやファイル名にバージョン番号が含まれていることに注意してください)。

3.  ビルドとテスト ！
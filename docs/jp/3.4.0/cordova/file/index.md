<!---
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
-->

# org.apache.cordova.file

このプラグインは、 [HTML5 Filesystem API](http://dev.w3.org/2009/dap/file-system/pub/FileSystem/) に準拠しています。使用方法に関しては、HTML5 Rocks の [FileSystem article](http://www.html5rocks.com/en/tutorials/file/filesystem/) に記載の関係箇所をご確認ください。ストレージに関する他のオプションの概要に関しては、Cordova の [storage guide](http://cordova.apache.org/docs/en/edge/cordova_storage_storage.md.html) をご確認ください。

## インストール

    cordova plugin add org.apache.cordova.file

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10*
- iOS
- Windows Phone 7 と 8*
- Windows 8*

\* _これらのプラットフォームでは、 `FileReader.readAsArrayBuffer` および `FileWriter.write(blob)` のサポートを行っていません。_

## Android 特有の動作

### Android の Persistent ストレージの場所 ( ファイルの永続的な保存場所 )

Android 搭載デバイスには、永続的なファイル ( persistent file ) を保存する、有効な場所が複数あります。さまざまな想定および用法に関しての議論は [こちらのページ](http://developer.android.com/guide/topics/data/data-storage.html) をご覧ください。

以前のバーションのプラグインでは、デバイスが SD カード (または、同様のストレージパーティション) を使用するかどうかを基に、一時的なファイルと永続的なファイルの保存場所を、起動時に選択できました。SD カードが使用できた場合、または、大容量の内臓ストレージパーティションが利用できた場合 （ 例 ： Nexus 搭載のデバイス ）、永続性的なファイルを、その領域の root に保存できました。この場合、Cordova アプリは、カード内の使用可能なファイルのすべてを閲覧することができました。

SD カードが使用できなかった場合、以前のバージョンのプラグインでは、 /data/data/<packageId> 下にデータを保存できました。これにより、アプリ間のデータ処理は個別化できましたが、ユーザ間でのデータの共有を許すことになりました。

現在では、アプリの config.xml ファイルの設定に沿って、内部 ( Internal ) のファイルの保存場所を使用するか、または、以前の設定をそのまま使用してファイルを保存するか、選択することができます。この設定を行うには、config.xml ファイルに、以下のラインのいずれかを追加してください。

    <preference name="AndroidPersistentFileLocation" value="Internal" />

    <preference name="AndroidPersistentFileLocation" value="Compatibility" />

このラインを追加しない場合、File プラグインでは、デフォルトとして "Compatibility" ( 後方互換 ) を使用します。また、preference タグが存在する場合でも、上記の値のいずれかが設定されていなければ、アプリは起動しません。

古いバーション ( 1.0 より前 ) のプラグインを実装したアプリの配布をすでに行っている場合、および、persistent ファイルシステム ( persistent filesystem ) にファイルを保存していた場合、preference を "Compatibility" に設定しなければなりません。デバイス間で動作は異なりますが、 "Internal" に場所を変更してしまうと、既存ユーザがアプリをアップグレードしたときに、以前に保存したファイルにアクセスできなくなります。

ここ最近で開発されたアプリの場合、または、persistent ファイルシステムにファイルを以前保存したことがない場合、"internal" の設定を推奨します。

## BlackBerry 特有の動作

以下のケースでは、 `DirectoryEntry.removeRecursively()` はエラーになる場合があります。この場合、 `ControlledAccessException` を投げます。 

- 以前にインストールしたアプリが作成した、ディレクトリへアクセスを行う場合

> 解決策 : 手動にて、temporary ディレクトリのクリーンを行ってください。または、アプリを再インストールする前に、インストールされているアプリでクリーン処理を行ってください。

- デバイスに USB 接続を行った場合

> 解決策: デバイスから USB ケーブルを取り外し、再度実行してください。

## iOS 特有の動作
- `FileReader.readAsText(blob, encoding)`
  - `encoding` パラメータはサポートしません。UTF-8 形式のエンコードが常に有効となります。

### iOS の Persistent ストレージの場所 ( ファイルの永続的な保存場所 )

iOS 搭載デバイスには、永続的なファイル ( persistent file ) を保存する、有効な場所が 2 つあります。1 つ目は Documents ディレクトリ、2 つ目は Library ディレクトリです。以前のバーションのプラグインでは、Documents ディレクトリのみに、永続性のあるファイルを保存できました。ただ、iTunesにおいて、この方法を用いると、アプリが保有するすべてのファイルを常に表示してしまう問題がありました。特に、複数の小さいサイズのファイルを処理するアプリでは問題となりました。Documents ディレクトリは、本来、エクスポートを行うドキュメントをまとめるために存在します。

現在では、アプリの config.xml ファイルの設定に沿って、Documents ディレクトリまたは Library ディレクトリのどちらにファイルを保存するか選択できます。この設定を行うには、config.xml ファイルに、以下のラインのいずれかを追加してください。

    <preference name="iosPersistentFileLocation" value="Library" />

    <preference name="iosPersistentFileLocation" value="Compatibility" />

このラインを追加しない場合、File プラグインでは、デフォルトとして "Compatibility" ( 後方互換 ) を使用します。また、preference タグが存在する場合でも、上記の値のいずれかが設定されていなければ、アプリは起動しません。

古いバーション ( 1.0 より前 ) のプラグインを実装したアプリの配布をすでに行っている場合、および、persistent ファイルシステム ( persistent filesystem ) にファイルを保存していた場合、preference を "Compatibility" に設定しなければなりません。"Library" に場所を変更してしまうと、既存ユーザがアプリをアップグレードしたときに、以前に保存したファイルにアクセスできなくなります。

ここ最近で開発されたアプリの場合、または、persistent ファイルシステムにファイルを以前保存したことがない場合、"Library" の設定を推奨します。

## アップグレード メモ

`FileEntry` と `DirectoryEntry` の構造を、このプラグインの v1.0.0 から変更しました。公開された仕様に基づき、追加変更を行いました。

以前のバーション ( 1.0.0 より前 ) のプラグインでは、 `Entry` オブジェクトの `fullPath` プロパティー内に、ファイル保存場所へのデバイス固有の絶対パス ( device-absolute-file-location ) を保存していました。典型的なパスは、以下の形式となっていました。

    /var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
    /storage/emulated/0/path/to/file                                    (Android)

`Entry` オブジェクトの `toURL()` メソッドを使用して、これらのパスを返すこともできました。

v1.0.0 では、 _HTML ファイルシステムの root 構造に習い、_ `fullPath` 属性を、ファイルへのパス ( path ) とします。 `FileEntry` オブジェクトの `fullPath` を使用して、上記の 2 つのパスを以下のように表します。

    /path/to/file

デバイス固有の絶対パスをアプリが使用している場合、および、 `Entry` オブジェクトの `fullPath` プロパティーを使用して、絶対パスを以前取得していた場合には、 代わりに、 `entry.toURL()` を使用するよう、コードの更新を行う必要があります。このメソッドは、filesystem URL 形式で実行結果を返します。

    cdvfile://localhost/persistent/path/to/file

この実行結果を使用して、ファイルを一意に識別できます。

後方互換性 ( backwards compatibility ) に関して付け加えると、 `resolveLocalFileSystemURL()` には、デバイス固有の絶対パスを渡すことができ、それに対応した `Entry` オブジェクトを返します。ただし、TEMPORARY または PERSISTENT ファイルシステムにファイルが存在する場合のみ、これが当てはまります。

File-Transfer プラグインでは、デバイス固有の絶対パスを以前使用していたため、これが問題となっていました ( 渡すことは、いまだにできますが )。現在では、FileSystem URL を使用して支障なく動作するよう、更新しました。よって、 `entry.fullPath` を `entry.toURL()` に置き換えれば、このプラグインを使用して、デバイスのファイルを支障なく利用できるようになります。

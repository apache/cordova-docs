プラグイン開発者へのメモ
===========================

こちらは、Android と iOS 向けに、プラグインの開発を行う開発者へのメモ書きです。ここでは、File プラグインを使用して、ファイルシステムにアクセスを行うインターフェイスを構築する際の注意を記します。

Cordova の file system URL の使用方法
-------------------------------------

バージョン 1.0.0 以降、このプラグインでは、ブリッジを越えるすべてのコミュニケーションにおいて、 `cdvfile` スキーマを採用しています。これは、デバイス内のファイルシステムへのパスを外部 ( JavaScript ) に暴露させないためです。

これに伴い、JavaScript 側では、FileEntry と DirectoryEntry オブジェクトは、fullpath 属性 ( HTML のファイルシステムの root 構造と類似 ) を持つようになりました。開発予定のプラグインの JavaScript API で FileEntry または DirectoryEntry オブジェクトを使用する場合、ネイティブコードへそのオブジェクトをブリッジ越しに渡す前に、そのオブジェクトを使用して `.toURL()` を呼ぶ必要があります。

### cdvfile:// 形式の URL を、ファイルシステムのパスに変更する場合

filesystem に書き込みを行うプラグインでは、返されたファイルシステムの URL を変換して filesystem 内の実際の場所を指すよう、処理を行う場合もあります。これを行う方法はいくつかありますが、ネーティブプラットフォーム毎に変換方法は異なります。

`cdvfile://`　形式の URL を実際のデバイスのファイルへマップ化するとき、一部の URL をマップ化できない場合もあります。一部の URL は、ファイルでは示すことができない、デバイスのリソース ( asset ) を参照している場合もあるためです。また、リモートのリソースを参照している場合もあります。
このようなことも想定できるため、プラグインを開発する場合には、URL からパスへの変換を行ったとき、有効な結果を返しているか常にテストする必要があります。

#### Android

Android においては、 `org.apache.cordova.CordovaResourceApi` を使用して、 `cdvfile://` 形式の URL を filesystem のパスに変換できます。 `CordovaResourceApi` は、 `cdvfile://` 形式の URL を処理するメソッドをがいくつか実装しています。

    // webView は、プラグインクラスのメンバーです
    CordovaResourceApi resourceApi = webView.getResourceApi();

    // ファイルを指し示すマップ化ができない場合、デバイス上のファイルを指し示す file:/// 
    //　形式の URL、または、マップ化できなかった URL を取得します
    
    Uri fileURL = resourceApi.remapUri(Uri.parse(cdvfileURL));

ファイルプラグインを直接に使用することもできます。

    import org.apache.cordova.file.FileUtils;
    import org.apache.cordova.file.FileSystem;
    import java.net.MalformedURLException;

    // プラグインマネジャー ( plugin manager ) から File プラグインを取得します
    FileUtils filePlugin = (FileUtils)webView.pluginManager.getPlugin("File");

    // URL を渡して、パスを受け取ります
    try {
        String path = filePlugin.filesystemPathForURL(cdvfileURL);
    } catch (MalformedURLException e) {
        // filesystem url が認識されない場合の処理
    }

パスから `cdvfile://` 形式の URL への変換

    import org.apache.cordova.file.LocalFilesystemURL;

    // cdvfile 形式の URL に変換できない場合、デバイスパス ( device path ) に
    // 関する LocalFilesystemURL オブジェクト、または、null を取得します

    LocalFilesystemURL url = filePlugin.filesystemURLforLocalPath(path);
    // 文字列形式の URL オブジェクトを取得します
    String cdvfileURL = url.toString();

プラグインでファイルを作成し、そのとき、FileEntry オブジェクトを使用したい場合には、File プラグインを使用してください。

    // cdvfile 形式の URL への変換に、対象のファイルが対応していない場合には、
    // JavaScript での使用に適した JSON 構造体、または、null を返します
    JSONObject entry = filePlugin.getEntryForFile(file);

#### iOS

iOS 搭載の Cordova における `CordovaResourceApi` の使用方法に関しては、Android のそれとは異なります。iOS では、URL から filesystem パスへの変換の際には、File プラグインを使用してください。


    // URL 文字列から CDVFilesystem URL オブジェクトを取得します
    CDVFilesystemURL* url = [CDVFilesystemURL fileSystemURLWithString:cdvfileURL];
    // マップ化できない場合には、URL オブジェクトに関するパス、または、空白 
    // ( 原文 「 nil 」 ) を取得します 
    NSString* path = [filePlugin filesystemPathForURL:url];
    

    // cdvfile 形式の URL に変換できない場合、デバイスパス ( device path ) に
    // 関する CDVFilesystem　URL オブジェクト、または、空白 ( 原文 「 nil 」 ) を取得します
    CDVFilesystemURL* url = [filePlugin fileSystemURLforLocalPath:path];
    // 文字列形式の URL オブジェクトを取得します
    NSString* cdvfileURL = [url absoluteString];

プラグインでファイルを作成し、そのとき、FileEntry オブジェクトを使用したい場合には、File プラグインを使用してください。

    // cdvfile 形式の URL に変換できない場合、デバイスパス ( device path ) に
    // 関する CDVFilesystem　URL オブジェクト、または、空白 ( 原文 「 nil 」 ) を取得します
    CDVFilesystemURL* url = [filePlugin fileSystemURLforLocalPath:path];
    // JavaScript に返す構造体を取得します
    NSDictionary* entry = [filePlugin makeEntryForLocalURL:url]

#### JavaScript

JavaScript においては、FileEntry または DirectoryEntry オブジェクトから `cdvfile://` 形式の URL を取得する場合、 `.toURL()` を呼び出してください。

    var cdvfileURL = entry.toURL();

プラグインのレスポンスハンドラーにおいては、返された FileEntry 構造体を Entry オブジェクトへ変換する場合、ハンドラーのコード内で、File プラグインのインポートを行い、新しいオブジェクトを作成してください。

    // Entry オブジェクトの作成
    var entry;
    if (entryStruct.isDirectory) {
        entry = new DirectoryEntry(entryStruct.name, entryStruct.fullPath, new FileSystem(entryStruct.filesystemName));
    } else {
        entry = new FileEntry(entryStruct.name, entryStruct.fullPath, new FileSystem(entryStruct.filesystemName));
    }


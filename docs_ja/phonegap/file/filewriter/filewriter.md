FileWriter
==========

FileWriterオブジェクトはファイルへの書き込みに使用します。

プロパティ
----------

- __readyState:__ 右の3種類の状態のいずれかを表します (INIT、WRITING、DONE)
- __fileName:__ 書き込みの対象となるファイル名を表します _(DOMString)_
- __length:__ 書き込みの対象となるファイルの長さを表します _(long)_
- __position:__ ファイルポインタの現在の位置を表します _(long)_
- __error:__ エラー情報を表します _(FileError)_
- __onwritestart:__ 書き込み開始時に呼ばれる関数を表します _(Function)_
- __onprogress:__ ファイル書き込み中に呼ばれ、進捗状況を報告する関数を表します _(Function)_ -現在サポートされていません
- __onwrite:__ リクエストが成功したときに呼ばれる関数を表します _(Function)_
- __onabort:__ abort() メソッドを実行したときなど、書き込みが強制終了したときに呼ばれる関数を表します _(Function)_
- __onerror:__ 書き込みが失敗したときに呼ばれる関数を表します _(Function)_
- __onwriteend:__ 成功、失敗にかかわらずリクエストが完了した際に呼ばれる関数を表します _(Function)_

メソッド
-------

- __abort__: 書き込みを中断します
- __seek__: ファイルポインタを指定したバイトまで移動します
- __truncate__: ファイルを指定した長さに切り詰めます
- __write__: ファイルにデータを書き込みます

詳細
-------

`FileWriter` オブジェクトはデバイスのファイルシステムに書き込む際に使用します。
また、イベントを受け取るための独自のイベントリスナを登録することもできます。
`FileWriter` はひとつのファイルに対して使用され、複数回書き込みを行うこともできます。
 `FileWriter` が書き込み位置を管理することで、ユーザーは部分的に書き込むことができます。

`FileWrite`はファイルポインタの位置とlength属性を指定することができるので、ファイルのどの位置からでも書き込みを行うことができます。
デフォルトではファイルの開始位置にポインタがセットされ、既存のデータを上書きしながら書き込みが行われます。
書き込みをファイルの最終から始める場合は `FileWriter` コンストラクタにtrueを指定してください。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

Seek の例
------------------------------
	
    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt");
	// ファイルポインタをEOFに移動
	writer.seek(writer.length);	

Truncate　の例
--------------------------

    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt");
	writer.truncate(10);	

Write の例
-------------------	

	var writeSuccess = function(evt) {
		console.log("書き込み成功");
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt");
	writer.onwrite = writeSuccess;
	writer.write("サンプルテキスト");

Append の例
--------------------	

	var writeSuccess = function(evt) {
		console.log("書き込み成功");
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt", true);
	writer.onwrite = writeSuccess;
	writer.write("サンプルテキスト");
	
Abort　の例
-------------------

	var aborted = function(evt) {
		console.log(evt.target.error);
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var writer = new FileWriter(paths[0] + "write.txt");
	writer.onabort = aborted;
	writer.write("サンプルテキスト");
	writer.abort();

詳細な例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>連絡先の使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込みの待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
			var paths = navigator.fileMgr.getRootPaths();
			var writer = new FileWriter(paths[0] + "write.txt");
			writer.onwrite = writeSuccess;
			writer.write("サンプルテキスト");
			// ファイル名は'サンプルテキスト'に変更されました。
        }

		function writeSuccess() {
			console.log("書き込み成功");
			var paths = navigator.fileMgr.getRootPaths();
			var writer = new FileWriter(paths[0] + "write.txt");
			writer.seek(4);
			writer.truncate(writer.position);
			// ファイル名は'some'に変更されました。
		}
		
		function fail(evt) {
			console.log(evt.target.error.code);
		}
		
        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>ファイルに書き込みます。</p>
      </body>
    </html>
    
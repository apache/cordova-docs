FileReader
==========

FileReader はファイルの読み込みを行うオブジェクトです。


プロパティ
----------

- __readyState:__ 下記の3種類の状態のいずれかを表します (EMPTY、LOADING、DONE)
- __result:__ 読み込まれたファイルのコンテンツを表します _(DOMString)_
- __error:__ エラー情報を表します _(FileError)_
- __onloadstart:__ 読み込み開始時に呼ばれる関数を表します _(Function)_
- __onprogress:__ 読み込み中に呼ばれる関数を表します (progess.loaded/progress.total) _(Function)_ -現在サポートされていません
- __onload:__ 読み込みが成功したときに呼ばれる関数を表します _(Function)_
- __onabort:__ abort() メソッドを実行したときなど、読み込みが強制終了したときに呼ばれる関数を表します _(Function)_
- __onerror:__ 読み込みが失敗したときに呼ばれる関数を表します _(Function)_
- __onloadend:__ 成功、失敗にかかわらずリクエストが完了した際に呼ばれる関数を表します _(Function)_

メソッド
-------

- __abort__: 読み込みを強制終了します
- __readAsDataURL__: ファイルを読み込み、データをBase64でエンコードされたデータURLで返します
- __readAsText__: テキストファイルを読み込みます

詳細
-------

`FileReader` オブジェクトはデバイスのファイルシステムからファイルを読み込みます。ファイルはテキストまたはBase64でエンコードされた文字列として読み込まれます。イベントを受け取るための独自のイベントリスナを登録することもできます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS

データURLとして読み込む場合
----------------

__パラメータ:__

- fileName - 読み込むファイルのフルパスを表します


使用例
-------------

	var win = function(evt) {
		console.log(evt.target.result);
	};
	var fail = function(evt) {
		console.log(evt.target.error.code);
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var reader = new FileReader();
	reader.onload = win;
	reader.onerror= fail;
	reader.readAsDataURL(paths[0] + "readme.txt");

テキストとして読み込む場合
------------

__パラメータ:__

- fileName - 読み込むファイルのフルパスを表します
- encoding - ファイルのコンテンツのエンコードを表します (デフォルト: UTF8)

使用例
-------------

	var win = function(evt) {
		console.log(evt.target.result);
	};
	var fail = function(evt) {
		console.log(evt.target.error.code);
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var reader = new FileReader();
	reader.onload = win;
	reader.onerror= fail;
	reader.readAsText(paths[0] + "readme.txt");

読み込みを中断する例
-------------------

	var aborted = function(evt) {
		console.log(evt.target.error.code);
	};
	
    var paths = navigator.fileMgr.getRootPaths();
	var reader = new FileReader();
	reader.onabort = aborted;
	reader.readAsText(paths[0] + "readme.txt");
	reader.abort();

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>連絡先の使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
			var paths = navigator.fileMgr.getRootPaths();
			var reader = new FileReader();
			reader.onload = win;
			reader.onerror= fail;
			reader.readAsText(paths[0] + "readme.txt");
        }

		function win(evt) {
			console.log(evt.target.result);
		}
		
		function fail(evt) {
			console.log(evt.target.error.code);
		}
		
        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>ファイルを読み込みます。</p>
      </body>
    </html>

iOS に関する注意点
----------
- __encoding__ オプションはサポートしていません。常にUTF8エンコーディングが使われます。
-  __readAsDataUrl()__ はiOSではサポートされおりません。

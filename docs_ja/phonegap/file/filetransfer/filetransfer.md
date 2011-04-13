FileTransfer
==========

FileTransfer オブジェクトはファイルをサーバーにアップロードする際に使用します。

プロパティ
----------

N/A

メソッド
-------

- __upload__: サーバーにファイルを送信

詳細
-------

`FileTransfer` オブジェクトはマルチパート形式でHTTPサーバーにPOST処理を行いファイルをアップロードします。このメソッドはHTTPとHTTPSの両方をサポートします。uploadメソッドに `FileUploadOptions` オブジェクトを送ることで、任意のパラメータを追加できます。

アップロードが成功した場合 `FileUploadResult` オブジェクトともにsuccessコールバック関数が呼ばれます。エラーが発生した場合は `FileTransferError` オブジェクトとともにerrorコールバックが呼ばれます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)

使用例
------------------------------
	
  	var win = function(r) {
        console.log("コード = " + r.responseCode);
        console.log("結果 = " + r.response);
        console.log("送信バイト数 = " + r.bytesSent);
	}
	
    var fail = function(error) {
        alert("エラーが発生しました: Code = " = error.code);
    }
	
	var options = new FileUploadOptions();
	options.fileKey="file";
	options.fileName="newfile.txt";
	options.mimeType="text/plain";

    var params = new Object();
	params.value1 = "test";
	params.value2 = "param";
		
	options.params = params;
	
	var paths = navigator.fileMgr.getRootPaths();
	var ft = new FileTransfer();
    ft.upload(paths[0] + "newfile.txt", "http://some.server.com/upload.php", win, fail, options);
    
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

        // PhoneGapの準備完了
        //
        function onDeviceReady() {
			var options = new FileUploadOptions();
			options.fileKey="file";
			options.fileName="newfile.txt";
			options.mimeType="text/plain";

    		var params = new Object();
			params.value1 = "test";
			params.value2 = "param";
		
			options.params = params;
	
			var paths = navigator.fileMgr.getRootPaths();
			var ft = new FileTransfer();
    		ft.upload(paths[0] + "newfile.txt", "http://some.server.com/upload.php", win, fail, options);
        }

		function win(evt) {
        	console.log("コード = " + r.responseCode);
        	console.log("反応 = " + r.response);
        	console.log("送信完了 = " + r.bytesSent);
		}
		
		function fail(evt) {
        	alert("エラーが発生しました。: コード = " = error.code);
		}
		
        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>ファイルを読み込みます。</p>
      </body>
    </html>
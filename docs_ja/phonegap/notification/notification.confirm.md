notification.confirm
====================

カスタマイズ可能な認証ダイアログボックスを表示します。

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message:__ ダイアログのメッセージです。 (`String`)
- __confirmCallback:__ - 押されたボタンのインデックス（1,2,3...）とともに呼び出されるコールバック関数です。 ( `Number` )
- __title:__ ダイアログのタイトルです。( `String` ) (Optional, Default: "Confirm")
- __buttonLabels:__ ボタンのラベルを設定するためのカンマ区切りのStringです。 ( `String` ) (Optional, Default: "OK,Cancel")
    
概要
-----------

 `notification.confirm` はブラウザの `confirm` 関数よりも広いカスタマイズ性を持ったネイティブダイアログボックスを表示する関数です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

	// 確認ダイアログの表示プロセスの開始
	function onConfirm(button) {
		alert('選択されたボタン ' + button);
	}

    // 確認ダイアログを表示
    //
    function showConfirm() {
        navigator.notification.confirm(
	        'You are the winner!',  // メッセージ
			onConfirm,				// 選択されたボタンによって呼ばれるコールバック
	        'Game Over',            // タイトル
	        'Restart,Exit'          // ボタン
        );
    }
        
詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Notification の使用例</title>

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
            // 空のコード
        }
    
		// 確認ダイアログの表示プロセスの開始
		function onConfirm(button) {
			alert('選択されたボタン ' + button);
		}

        // 確認ダイアログの表示
        //
        function showConfirm() {
            navigator.notification.confirm(
		        'You are the winner!',  // メッセージ
				onConfirm,				// 選択されたボタンによって呼ばれるコールバック
		        'Game Over',            // タイトル
		        'Restart,Exit'          // ボタン
            );
        }
    
        </script>
      </head>
      <body onload="onLoad()">
        <p><a href="#" onclick="showConfirm(); return false;">確認</a></p>
      </body>
    </html>
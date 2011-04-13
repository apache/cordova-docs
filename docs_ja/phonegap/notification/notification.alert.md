notification.alert
==================

通知ダイアログボックスを表示します。

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

- __message:__ ダイアログのメッセージです。 ( `String` )
- __alertCallback:__ 通知ダイアログが確認された後に呼び出されるコールバック関数です。 ( `Function` )
- __title:__ ダイアログのタイトルです。 ( `String` ) (Optional, Default: "Alert")
- __buttonName:__ ボタンの表記です。 ( `String` ) (Optional, Default: "OK")
    
詳細
-----------

多くのPhoneGapの実装はネイティブダイアログボックスを使用しますが、特定のプラットフォームはブラウザの `alert` 関数を使います（通常これらのカスタマイザビリティーは制限されます）。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // Android / BlackBerry WebWorks (OS 5.0 以上) / iPhone
    //
    function alertDismissed() {
        // 任意のコード
    }

    navigator.notification.alert(
        'メッセージ内容',       // メッセージ
        alertDismissed,         // コールバック
        'タイトル',             // タイトル
        'ボタン'                // ボタン
    );

    // BlackBerry (OS 4.6) / webOS
    //
    navigator.notification.alert('メッセージ内容');
        
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
    
        // 通知ダイアログ確認
	    function alertDismissed() {
	        // 任意のコード
	    }

        // 通知ダイアログを表示
        //
        function showAlert() {
          navigator.notification.alert(
            'メッセージ内容',       // メッセージ
            alertDismissed,         // コールバック
            'タイトル',             // タイトル
            'ボタン'                // ボタン
          );
        }
    
        </script>
      </head>
      <body onload="onLoad()">
        <p><a href="#" onclick="showAlert(); return false;">通知を表示</a></p>
      </body>
    </html>
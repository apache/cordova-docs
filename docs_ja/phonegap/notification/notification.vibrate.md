notification.vibrate
====================

設定された時間分、デバイスのバイブレーションを実行します。

    navigator.notification.vibrate(milliseconds)

- __time:__ バイブレーションの長さを表すミリ秒単位の数値です。 ( `Number` )

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // 2.5秒間バイブレーションを鳴らします。
    //
    navigator.notification.vibrate(2500);

詳細な使用例
------------
    
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>通知機能の使用例</title>

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
    
        // 通知を表示
        //
        function showAlert() {
		    navigator.notification.alert(
		        'メッセージの内容',  // メッセージ
		        'タイトルの内容',            // タイトル
		        'ボタンの内容'                  // ボタン
		    );
        }
    
        // 警告音を3回鳴らします。
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // 2秒間バイブレーションを鳴らします。
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }

        </script>
      </head>
      <body onload="onLoad()">
        <p><a href="#" onclick="showAlert(); return false;">通知を表示</a></p>
        <p><a href="#" onclick="playBeep(); return false;">警告音を鳴らす</a></p>
        <p><a href="#" onclick="vibrate(); return false;">バイブレーション</a></p>
      </body>
    </html>

iPhone に関する注意点
-------------

- __time:__ `time` の設定を無視し、iPhoneであらかじめ定められた時間バイブレーションを流します。

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 は無視されます。

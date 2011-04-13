notification.beep
=================
デバイスに警告音を流します。


    navigator.notification.beep(times);

- __times:__ 警告音を流す回数です。 (`Number`)

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // 警告音を2回鳴らします。
    navigator.notification.beep(2);

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Notification の例</title>

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

        // 通知を表示します。
        //
        function showAlert() {
		    navigator.notification.alert(
		        'You are the winner!',  // メッセージ
		        'Game Over',            // タイトル
		        'Done'                  // ボタン
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

Android　に関する注意点
--------------

- Androidは"Settings/Sound & Display"パネルで設定されたデフォルトの"Notification ringtone"を流します。

iPhone に関する注意点
-------------

-  引数 `beep count` を無視します。
- iPhoneはネイティブのbeep APIを持っていません。
  - そのため、PhoneGapはmedia APIを使って警告音をオーディオファイルを再生することで実行します。適当な警告音のファイルを使用してください。
  - この際のファイルは30秒未満とし、www/root に、`beep.wav` として保存してください。
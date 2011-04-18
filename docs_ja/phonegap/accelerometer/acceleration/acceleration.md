Accelerationオブジェクト
============

ある時間軸上でキャプチャされた加速度のデータを含みます。

プロパティー
----------

- __x:__ x軸上での動作量を表します。 範囲： 0 から 1(`Number`)
- __y:__ y軸上での動作量 範囲： 0 から 1(`Number`)
- __z:__ z軸上での動作量 範囲： 0 から 1(`Number`)
- __timestamp:__ マイクロ秒単位のタイムスタンプ値 (`DOMTimeStamp`)

概要
-----------

本オブジェクトは PhoneGap によって作成され、加速度センサー関係のメソッドにより返されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    function onSuccess(acceleration) {
        alert('X軸上の加速度: ' + acceleration.x + '\n' +
              'Y軸上の加速度: ' + acceleration.y + '\n' +
              'Z軸上の加速度: ' + acceleration.z + '\n' +
              'タイムスタンプ: '      + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>加速度センサーの使用例</title>

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
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }

        // onSuccess: 現在の加速度情報を取得
        //
        function onSuccess() {
            alert('X軸上の加速度: ' + acceleration.x + '\n' +
                  'Y軸上の加速度: ' + acceleration.y + '\n' +
                  'Z軸上の加速度: ' + acceleration.z + '\n' +
                  'タイムスタンプ: '      + acceleration.timestamp + '\n');
        }

        // onError: 加速度情報取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>使用例</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>
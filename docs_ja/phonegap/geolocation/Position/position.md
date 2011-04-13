Position
========

Geolocation APIによって作成された位置座標（`Position`）を扱うオブジェクトです。

プロパティ
----------

- __coords:__ 地理座標を表します。 _(Coordinates)_
- __timestamp:__ ミリ秒単位で表される `coords` のタイムスタンプです。 _(DOMTimeStamp)_

概要
-----------

`Position` オブジェクトはPhoneGapにより作成され、コールバック関数を通してユーザーに返されます。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // 成功時のコールバック
    //
    var onSuccess = function(position) {
        alert('緯度: '       + position.coords.latitude          + '\n' +
              '経度: '       + position.coords.longitude         + '\n' +
              '高度: '       + position.coords.altitude          + '\n' +
              '位置精度: '   + position.coords.accuracy          + '\n' +
              '高度精度: '   + position.coords.altitudeAccuracy  + '\n' +
              '方位: '       + position.coords.heading           + '\n' +
              '速度: '       + position.coords.speed             + '\n' +
              'タイムスタンプ: ' + new Date(position.timestamp)  + '\n');
    };

    // 失敗時のコールバックは、PositionErrorオブジェクトを取得
    //
    function onError(error) {
        alert('コード: '    + error.code    + '\n' +
              'メッセージ: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

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
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: '           + position.coords.latitude              + '<br />' +
                                '経度: '          + position.coords.longitude             + '<br />' +
                                '高度: '           + position.coords.altitude              + '<br />' +
                                '位置精度: '           + position.coords.accuracy              + '<br />' +
                                '高度精度: '  + position.coords.altitudeAccuracy      + '<br />' +
                                '方位: '            + position.coords.heading               + '<br />' +
                                '速度: '              + position.coords.speed                 + '<br />' +
                                'タイムスタンプ: '          + new Date(position.timestamp)          + '<br />';
        }
    
	    // 失敗時のコールバックは、PositionErrorオブジェクトを受けとる
	    //
	    function onError(error) {
	        alert('コード: '    + error.code    + '\n' +
	              'メッセージ: ' + error.message + '\n');
	    }

        </script>
      </head>
      <body onload="onLoad()">
        <p id="geolocation">位置情報を取得中...</p>
      </body>
    </html>

iPhone に関する注意点
-------------

- __timestamp:__ このプロパティーはサポートされていますが、ミリ秒ではなく通常の秒単位で記述されます。対処法としては、手動でマイクロ秒に変換することが考えられます。

        var onSuccess = function(position) {
            alert('緯度: '  + position.coords.latitude             + '\n' +
                  '経度: '  + position.coords.longitude            + '\n' +
                  'タイムスタンプ: ' + new Date(position.timestamp * 1000)  + '\n');
        };

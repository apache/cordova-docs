geolocation.clearWatch
======================

`watchID` パラメータによって参照されるデバイスの位置情報の監視を停止します。

    navigator.geolocation.clearWatch(watchID);

パラメータ
----------

- __watchID:__ `watchPosition` の位置間隔をクリアするためのidです (String)

概要
-----------
`geolocation.clearWatch` 関数は `watchID` に参照される `geolocation.watchPosition` をクリアすることでデバイスの位置情報の監視を停止します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // オプションにて3秒ごとに位置情報を取得するよう設定
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });

    // ...後に続く...

    navigator.geolocation.clearWatch(watchID);


詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>位置情報の使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        var watchID = null;

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            // 3秒毎に更新
            var options = { frequency: 3000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // 取得に成功した場合
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: '  + position.coords.latitude      + '<br />' +
                                '経度: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }

        // 開始されたウォッチをクリア
        // 
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
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
        <p id="geolocation">Geolocation　監視中...</p>
    	<button onclick="clearWatch();">監視の停止</button>     
      </body>
    </html>
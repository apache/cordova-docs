geolocation.watchPosition
=========================
デバイスの現在位置の変化を監視します。


    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);

													  
パラメータ
----------

- __geolocationSuccess__: 現在位置取得成功時に呼ばれるコールバック関数です
- __geolocationError__: (オプション) エラー発生時に呼ばれるコールバック関数です
- __geolocationOptions__: (オプション) geolocation のオプションです

返り値
-------

- __String__: 位置変化を参照するウォッチIDを返します。 `geolocation.clearWatch` に適用することで位置変化の監視を中止することができます。

概要
-----------
`geolocation.watchPosition` は位置情報に変化があった場合にデバイスに現在位置情報を返す非同期関数です。
デバイスが新しい位置情報を取得した場合、 `geolocationSuccess` コールバック関数が `Position` オブジェクトをパラメータとして呼び出されます。

エラー発生時には `geolocationError` コールバック関数が `PositionError` オブジェクトとともに呼ばれます。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // 成功時のコールバック関数
    //   GPSの現在座標を保有するPositionオブジェクトを引数とする
    
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = '緯度: '  + position.coords.latitude      + '<br />' +
                            '経度: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    // 失敗時のコールバック関数はPositionErrorオブジェクトを取得
    //
    function onError(error) {
        alert('コード: '    + error.code    + '\n' +
              'メッセージ: ' + error.message + '\n');
    }

    // 3秒ごとに位置情報を取得する設定（オプション）
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });
    

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
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '緯度: '  + position.coords.latitude      + '<br />' +
                                '経度: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
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
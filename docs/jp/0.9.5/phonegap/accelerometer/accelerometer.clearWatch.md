accelerometer.clearWatch
========================

指定したウォッチIDの加速度センサー測定を停止します。

    navigator.accelerometer.clearWatch(watchID);

- __watchID__: `accelerometer.watchAcceleration` によって返されるウォッチID

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... 後に続く ...
    
    navigator.accelerometer.clearWatch(watchID);
    
詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>加速度センサーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // ウォッチIDが現在の `watchAcceleration` を参照
        var watchID = null;
        
        // PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            startWatch();
        }

        // 加速度情報の監視を開始
        //
        function startWatch() {
            
            // 3秒ごとに更新
            var options = { frequency: 3000 };
            
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
        
        // 加速度情報の監視を中止
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
		    
        // onSuccess: 現在の加速度情報を取得
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'X軸上の加速度: ' + acceleration.x + '<br />' +
                                'Y軸上の加速度: ' + acceleration.y + '<br />' +
                                'Z軸上の加速度: ' + acceleration.z + '<br />' + 
                                'タイムスタンプ: '      + acceleration.timestamp + '<br />';
        }

        // 加速度情報取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <div id="accelerometer">加速度センサーを待機</div>
		<button onclick="stopWatch();">監視中止</button>
      </body>
    </html>
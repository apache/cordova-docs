accelerometer.watchAcceleration
===============================

ある時間間隔における、x, y, z軸上の加速度を返します。

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
                                                           
概要
-----------

加速度センサーは三次元空間上の動きを補足するものです。

 `accelerometer.watchAcceleration` 関数を使うと、一定間隔ごとにデバイスの加速度情報を取得できます。加速度情報を取得するたびに、 `accelerometerSuccess` コールバック関数が実行されます。 
取得する間隔は `frequency` オブジェクトのパラメータを `frequency` 通じてミリ秒単位で指定できます。
本関数の戻り値であるウォッチIDは、実行中の加速度センサー測定への参照を表します。関数にウォッチIDを渡すことで、加速度センサーのキャプチャを停止できます。

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

    var options = { frequency: 3000 };  // 3秒ごとに更新
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

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
        
        // PhoneGap の読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            startWatch();
        }

        // 加速度センサーのキャプチャを開始
        //
        function startWatch() {
            
            // 加速度情報を3秒ごとに更新
            var options = { frequency: 3000 };
            
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
        
        // 加速度センサーのキャプチャを停止
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

        // onError: 加速度情報の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <div id="accelerometer">加速度センサーを待機</div>
      </body>
    </html>
    
 iPhoneに関する注意点
-------------

- 指定された時間間隔に対して、PhoneGapはコールバック関数を呼び出し、加速度情報を渡します。ただし、時間間隔はPhoneGapによって最低40ms、最高1000msに制限されています。
  - たとえば時間間隔として3秒(3000ms)を指定した場合、PhoneGapは加速度情報を1秒で取得しますが、コールバック関数は3秒ごとに呼び出しが行われます。
  
compass.watchHeading
====================

コンパス方位を一定の時間間隔で取得します。

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
                                                           
概要
-----------

`compass.watchHeading` 関数は一定の時間間隔でデバイスの現在の方位を取得します。

方位情報が取得されるごとに `compassSuccess` コールバック関数が実行されます。時間間隔は `campassOptions` オブジェクトの `frequency` パラメータを通じてミリ秒単位で指定します。

この関数の返り値であるwatchIDには、コンパスの監視間隔への参照が格納されます。このIDは `compass.clearWatch` 関数を用いて監視を停止に使用します。

サポートされているプラットフォーム
-------------------

- Android
- iPhone


使用例
-------------

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = '方位: ' + heading;
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    var options = { frequency: 3000 };  // 3秒ごとに更新
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>コンパスの使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // ウォッチIDが現在の `watchHeading`　を参照
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

        // コンパスの監視を開始
        //
        function startWatch() {
            
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
            
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
        
        // コンパスの監視を停止
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
        
        // onSuccess: 現在の方位を取得
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = '方位: ' + heading;
        }

        // onError: 方位取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <div id="heading">方位を待機</div>
        <button onclick="startWatch();">ウォッチ開始</button>
        <button onclick="stopWatch();">ウォッチ中止</button>
      </body>
    </html>
    
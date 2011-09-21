device.phonegap
===============

現在使用しているPhoneGapのバージョン情報を表します。

    var string = device.phonegap;
    
概要
-----------

`device.phonegap` は現在実行中のPhoneGapのバージョン情報を取得します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

簡単な例
-------------

    var name = device.phonegap;

詳細な例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>デバイスプロパティの使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込み待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'デバイス名: '     + device.name     + '<br />' + 
                                'PhoneGap: ' + device.phonegap + '<br />' + 
                                'プラットフォーム: ' + device.platform + '<br />' + 
                                'UUID: '     + device.uuid     + '<br />' + 
                                'バージョン: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body onload="onLoad()">
        <p id="deviceProperties">デバイスプロパティーを読み込み中...</p>
      </body>
    </html>
    
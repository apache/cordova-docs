device.version
==============

OSのバージョンを取得します。

    var string = device.version;

サポートされているプラットフォーム
-------------------

- Android 2.1+
- BlackBerry
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // Android:    Froyoの場合は2.2を返却
    //             Eclaiの場合は2.0、2.0.1、もしくは2.1を返却
    //             アップデートが行われると 2.1-update1 のように返却
    //
    // BlackBerry: OS 4.6を搭載したBold 9000の場合4.6.0.282を返却
    //
    // iPhone:     iOS 3.2は3.2を返却
    //
    var deviceVersion = device.version;

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>デバイスプロパティの使用例</title>

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
        <p id="deviceProperties">デバイスプロパティーの読み込み中...</p>
      </body>
    </html>
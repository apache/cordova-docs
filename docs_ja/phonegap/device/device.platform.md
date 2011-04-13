device.platform
===============

デバイスのOS名を取得します。

    var string = device.platform;

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iPhone"
    //   - "webOS"
    //
    var devicePlatform = device.platform;

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

        // PhoneGapの準備完了
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
    
iPhone に関する注意点
-------------

全てのデバイスで `iPhone` を返します。AppleはiPhoneのOSをiOSと名称を変更したのでこの表記は正確ではありません。

BlackBerry に関する注意点
-----------------
OS名ではなくプラットフォームのバージョンを返す可能性があります。（例：Storm2 9550の場合、'2.13.0.95'を返すことがあります）

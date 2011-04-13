device.name
===========

デバイスのモデル名を取得します。

    var string = device.name;
    
詳細
-----------

`device.name` はデバイスのモデル名を返します。この値はデバイスの製造者によって設定されるため、同じモデルでも異なるバージョンで値が異なる場合があります。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0以上)
- iPhone

使用例
-------------

    // Android:    Nexus One       Nexus OneのコードネームであるPassionを返します
    //             Motorola Droid  volesを返します
    // BlackBerry: Bold 8900       8900を返します
    // iPhone:     iTunesでセットした名前を返します
    //
    var name = device.name;

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
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>


Android に関する注意点
--------------

- [モデル名] (http://developer.android.com/reference/android/os/Build.html#MODEL) の代わりに [製品名] (http://developer.android.com/reference/android/os/Build.html#PRODUCT) を取得します。
    - 製品名はほとんどの場合、生産時のコードネームとなります。
    - 例： Nexus OneはPassionを返し、Motorola Droid はvolesを返します。

iPhone に関する注意点
-------------

- [モデル名] (http://developer.apple.com/iphone/library/documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW1) の代わりに [デバイスのカスタムネーム] (http://developer.apple.com/iphone/library/documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW13) を取得します。
    - カスタムネームはiTunesのオーナーによって設定されます。

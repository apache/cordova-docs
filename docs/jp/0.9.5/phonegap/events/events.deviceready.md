deviceready
===========

このイベントはPhoneGapが完全にロードされたときに呼び出されます。


    document.addEventListener("deviceready", yourCallbackFunction, false);

詳細
-------

このイベントはすべてのPhoneGapアプリケーションで使用される重要なイベントです。

PhoneGapはネイティブとJavaScriptの2つのコードで形成されます。ネイティブコードがロードされている間は、カスタムのロード画面が表示されます。
しかし、JavaScriptはDOMが読み込まれるまではロードされません。そのため、PhoneGapのJavascript関数群がロードされる前に、それらの関数が呼ばれる可能性があります。

`deviceready` イベントはPhoneGapが完全にロードした後で発動されます。安全にPhoneGap関数を呼び出すためには、デバイスが完全に発動したことを確認してください。

通常はHTML文書のDOMが読み込まれた後、 `document.addEventListener` を通じてイベントリスナをセットします。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // PhoneGap APIを安全に使用できます
    }

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>PhoneGap Device Ready 使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込み完了とともにonDeviceReadyを呼び出します。
        //
        // この時点ではドキュメントの読み込みは完了していますが、PhoneGapの読み込みはまだ完了していません。
        // PhoneGapが読み込み完了とともに　`deviceready`　イベントが呼び出されます。
        // 
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGapの読み込みが完了したので、PhoneGapのメソッドを安全に呼び出すことができます。
        //
        function onDeviceReady() {
            // PhoneGap APIを安全に使用できます。
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    
BlackBerry (OS 4.6) に関する注意点
--------------------------

カスタムイベントはRIM BrowserField上ではサポートされていないため `deviceready` イベントは発動されません。

回避策としてPhoneGapが完全にロードされるまで `PhoneGap.available` に問い合わせを行うことが挙げられます。


    function onLoad() {
        // BlackBerry OS 4ブラウザはイベントに対応しません
        // 下記の通りPhoneGapが利用可能になるまで待機します
        //
        var intervalID = window.setInterval(
          function() {
              if (PhoneGap.available) {
                  window.clearInterval(intervalID);
                  onDeviceReady();
              }
          },
          500
        );
    }

    function onDeviceReady() {
        // PhoneGap APIを安全に使用できます
    }
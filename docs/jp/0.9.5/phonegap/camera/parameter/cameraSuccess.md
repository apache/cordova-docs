cameraSuccess
=============

撮影に成功した場合に呼び出されるコールバック関数です。

    function(imageData) {
        // 任意のコード
    }

パラメータ
----------

- __imageData:__ Base64 によるイメージエンコーディング、またはイメージファイルの URI (cameraOptionsで設定)

使用例
-------

    // 画像を表示
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
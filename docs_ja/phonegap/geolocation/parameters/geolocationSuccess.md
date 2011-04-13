geolocationSuccess
==================

位置情報取得に成功したときに呼び出されるコールバック関数です。

    function(position) {
        // 任意のコード
    }

パラメータ
----------

- __position:__ デバイスによって返される位置情報です。 (`Position`)

例
-------

    function geolocationSuccess(position) {
        alert('緯度: '         + position.coords.latitude          + '\n' +
              '経度: '         + position.coords.longitude         + '\n' +
              '高度: '         + position.coords.altitude          + '\n' +
              '位置精度: '     + position.coords.accuracy          + '\n' +
              '高度精度: '     + position.coords.altitudeAccuracy  + '\n' +
              '方位: '         + position.coords.heading           + '\n' +
              '速度: '         + position.coords.speed             + '\n' +
              'タイムスタンプ: ' + new Date(position.timestamp)    + '\n');
    }

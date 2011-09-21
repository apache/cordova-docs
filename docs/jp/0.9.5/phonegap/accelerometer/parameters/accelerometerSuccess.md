accelerometerSuccess
====================

加速度情報を返す onSuccess コールバック関数です。

    function(acceleration) {
        // 任意のコード
    }

パラメータ
----------

- __acceleration:__ ある瞬間における加速度 (Acceleration)

使用例
-------

    function onSuccess(acceleration) {
        alert('X軸上での加速度: ' + acceleration.x + '\n' +
              'Y軸上での加速度: ' + acceleration.y + '\n' +
              'Z軸上での加速度: ' + acceleration.z + '\n' +
              'タイムスタンプ: '      + acceleration.timestamp + '\n');
    };
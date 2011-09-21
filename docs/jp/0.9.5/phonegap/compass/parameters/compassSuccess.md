compassSuccess
==============

コンパス方位の取得に成功したときに呼び出されるコールバック関数です。

    function(heading) {
        // 任意のコード
    }

パラメータ
----------

- __heading:__ ある特定の時間軸上におけるコンパス方位。範囲: 0から359.99 _(Number)_

使用例
-------

    function onSuccess(heading) {
        alert('現在の方位: ' + heading);
    };
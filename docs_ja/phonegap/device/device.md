Device
======

> `device` オブジェクトはデバイスのハードウェアとソフトウェアの情報を表します。

プロパティ
----------

- device.name
- device.phonegap
- device.platform
- device.uuid
- device.version

変数の範囲
--------------

`device` オブジェクトは `window` オブジェクトに割り当てられます。グローバルスコープとして扱われます。

    // 下記は同じ `device` オブジェクト
    //
    var phoneName = window.device.name;
    var phoneName = device.name;
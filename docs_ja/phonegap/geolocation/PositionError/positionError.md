PositionError
========

`PositionError` オブジェクトはエラーが発生した場合に、geolocationErrorコールバック関数に渡されます。


プロパティ
----------

- __code:__ 下のリストの中のあらかじめ定義されたエラーコードのいずれかが格納されます
- __message:__ エラーの内容を表すエラーメッセージが格納されます

定数
---------

- `PositionError.PERMISSION_DENIED`
- `PositionError.POSITION_UNAVAILABLE`
- `PositionError.TIMEOUT`

概要
-----------

`PositionError` オブジェクトは、geolocationに関するエラーが発生したときに `geolocationError` コールバック関数を通して、ユーザーに返されます。

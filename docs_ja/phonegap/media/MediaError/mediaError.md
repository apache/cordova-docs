MediaError
==========

`MediaError` オブジェクトはエラーが発生時に `mediaError` コールバック関数に渡されます。

プロパティ
----------

- __code:__ 下記のリストの中のあらかじめ定義されたエラーコードが格納されます。
- __message:__ エラーの詳細を説明するエラーメッセージです。

コンスタント
---------

- `MediaError.MEDIA_ERR_ABORTED`
- `MediaError.MEDIA_ERR_NETWORK`
- `MediaError.MEDIA_ERR_DECODE`
- `MediaError.MEDIA_ERR_NONE_SUPPORTED`


概要
-----------

 `MediaError` オブジェクトはエラーが発生した際 `mediaError` コールバック関数を通してユーザーに返されます。

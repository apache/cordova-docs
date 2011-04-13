SQLError
========

エラー発生時に投げられる `SQLError` オブジェクトです。

プロパティ
----------

- __code:__ 下記のリストの中の、あらかじめ定義されたエラーコードの一つです。
- __message:__ エラーの詳細メッセージです。

定数
---------

- `SQLError.UNKNOWN_ERR`
- `SQLError.DATABASE_ERR`
- `SQLError.VERSION_ERR`
- `SQLError.TOO_LARGE_ERR`
- `SQLError.QUOTA_ERR`
- `SQLError.SYNTAX_ERR`
- `SQLError.CONSTRAINT_ERR`
- `SQLError.TIMEOUT_ERR`

概要
-----------
データベース操作に関連したエラーに対して投げられる `SQLError` オブジェクトです。


ContactError
========

エラーが発生した時に `contactError` コールバック関数に渡されるオブジェクトです。

パラメータ
----------

- __code:__ 下記のいずれかのエラーコードが格納されます。

コンタクト
---------

- `ContactError.UNKNOWN_ERROR`
- `ContactError.INVALID_ARGUMENT_ERROR`
- `ContactError.NOT_FOUND_ERROR`
- `ContactError.TIMEOUT_ERROR`
- `ContactError.PENDING_OPERATION_ERROR`
- `ContactError.IO_ERROR`
- `ContactError.NOT_SUPPORTED_ERROR`
- `ContactError.PERMISSION_DENIED_ERROR`

詳細
-----------

エラーが発生した際に `contactError` コールバック関数を通して 'ContactError' オブジェクトが返されます。

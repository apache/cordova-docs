FileError
========

`FileError` オブジェクトはエラーが発生した場合にFileWriter/FileReaderのerrorプロパティ上にセットされます。 

プロパティ
----------

- __code:__ 下記のエラーコードのいずれかがセットされます

定数
---------

- `FileError.NOT_FOUND_ERR`
- `FileError.SECURITY_ERR`
- `FileError.ABORT_ERR`
- `FileError.NOT_READABLE_ERR`
- `FileError.ENCODING_ERR`
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
- `FileError.INVALID_STATE_ERR`
- `FileError.SYNTAX_ERR`

詳細
-----------

`FileError` オブジェクトはファイルの読み書き時に回避不能なエラーが発生した時に発行されます。現在の状態が FileWriter.DONE または FileWriter.INIT である場合に abort メソッドを呼び出した場合は ABORT_ERR が発行されます。

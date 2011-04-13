Storage
==========

デバイスのストレージにアクセスします。

この API は [W3C Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/) と [W3C Web Storage API Specification](http://dev.w3.org/html5/webstorage/) に基づいて設計されています。

既にW3Cの実装がされているデバイスについては PhoneGapの実装の変わりにビルトインのサポートが使用されます。W3Cのサポートが実装されていないデバイスに関しても、 PhoneGapの実装はW3Cの仕様と適合します。

メソッド
-------

- openDatabase

引数
---------

- name
- version
- display_name
- size

オブジェクト
-------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage
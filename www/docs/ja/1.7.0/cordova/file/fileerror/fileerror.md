---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---

<a href="../fileobj/fileobj.html">File</a>Error
========

`<a href="../fileobj/fileobj.html">File</a>Error` オブジェクトはエラーが発生した際に <a href="../fileobj/fileobj.html">File</a> API のメソッドに渡されます。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します

定数
---------

- `<a href="../fileobj/fileobj.html">File</a>Error.NOT_FOUND_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.SECURITY_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.ABORT_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.NOT_READABLE_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.ENCODING_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.NO_MODIFICATION_ALLOWED_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.INVALID_STATE_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.SYNTAX_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.INVALID_MODIFICATION_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.QUOTA_EXCEEDED_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.TYPE_MISMATCH_ERR`
- `<a href="../fileobj/fileobj.html">File</a>Error.PATH_EXISTS_ERR`

概要
-----------

`<a href="../fileobj/fileobj.html">File</a>Error` オブジェクトは <a href="../fileobj/fileobj.html">File</a> API のあらゆるエラーコールバック関数への唯一のパラメーターです。開発者はエラーのタイプを特定するために、 code プロパティーを確認する必要があります。

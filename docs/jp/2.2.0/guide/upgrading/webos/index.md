---
license: Licensed to the Apache Software Foundation (ASF) under one
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

Upgrading Cordova webOS
=======================

これは、 Cordova を古いバージョンから新しいバージョンにアップグレードする必要がある人のためのドキュメントです。

## 2.0.0 から 2.1.0 へのアップグレード ##

1. cordova-2.0.0.js をプロジェクトから削除します

2. index.html から次の行を更新します:

    次から:
    <script type="text/javascript" src="cordova-2.0.0.js"></script>

    次に変更します:
    <script type="text/javascript" src="cordova-2.1.0.js"></script>

3. makefile を実行し、新しいバージョンの cordova-2.1.0.js ファイルを生成します


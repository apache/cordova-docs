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

title: Upgrading Cordova iOS
---

Upgrading Cordova iOS
=====================

## 1.7.0 から 1.8.0 へのアップグレード ##

1. Cordova 1.8.0 を **インストール** します
2. **新規プロジェクトを作成します** - この新規プロジェクトからアセットを持っていきます
3. 新規プロジェクトから **www/cordova-1.8.0.js** ファイルを **www** フォルダーに **コピー** し、 **www/cordova-1.7.x.js** ファイルを削除します
4. **www/index.html** ファイル (また、他に Cordova script を参照しているファイル) の Cordova script 参照部分を、新しい **cordova-1.8.0.js** ファイルを参照するように **更新** します

もし **Capture API** を使う場合は、新しい **iPad retina-display** アセットが必要です:

1.  新規プロジェクトから **Resources/Capture.bundle** を既存プロジェクトの **Resources/Capture.bundle** に上書きコピーします
2.  既存プロジェクトで、 Xcode の Project Navigator の中の **Capture.bundle** を選択し、 **Delete** キーを押します。ポップアップダイアログで、 **Remove Reference** を選択します
3.  ステップ1から新しい **Capture.bundle** を Xcode の Project Navigator 上にドラッグし、 **Create groups for any added folders** ラジオボタンを選択します

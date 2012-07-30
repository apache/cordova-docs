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

Upgrading Cordova Windows Phone
===============================

これは、 Cordova を古いバージョンから新しいバージョンにアップグレードする必要がある人のためのドキュメントです。

## 1.9.0 から 2.0.0 へのアップグレード ##

Apache Cordova 2.0.0 では WP7 プロジェクト構成に対してかなりの変更が加えられたので、アップグレードは他とは少し違います。厳密に言うとアップグレードではなく、新規プロジェクトを作成し、既存のソースファイルをコピーするといったような手順になります。

### Visual Studio の Solution Explorer ウィンドウ内:
1. 新しい Apache Cordova WP7 2.0 プロジェクトを作成します
2. 'www' フォルダーの中身を新しいプロジェクトにコピーします。ここで、中身が VS のプロジェクトに追加されていることを確認して下さい
3. 新しい cordova-2.0.0.js を使って HTML を更新します
4. スプラッシュスクリーンやアイコン画像をコピーまたは上書きします
5. プラグインフォルダーからすべてのプラグインを新しいプロジェクトにコピーします。ここで、プラグインが VS のプロジェクトに追加されていることを確認してください
6. ビルドし、テストします


## 1.8.0 から 1.9.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.9.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.9.0.js を使って HTML を更新します


## 1.7.0 から 1.8.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.8.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.8.0.js を使って HTML を更新します

## 1.6.0 から 1.7.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.7.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.7.0.js を使って HTML を更新します

## 1.6.0 から 1.6.1 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.6.1.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.6.1.js を使って HTML を更新します

## 1.5.0 から 1.6.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.6.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.6.0.js を使って HTML を更新します

## 1.4.0 から 1.5.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.5.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.5.0.js を使って HTML を更新します

## 1.3.0 から 1.4.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.4.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.4.0.js を使って HTML を更新します

## 1.2.0 から 1.3.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.3.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.3.0.js を使って HTML を更新します

## 1.1.0 から 1.2.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.2.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.2.0.js を使って HTML を更新します

## 1.0.0 から 1.1.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.1.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. 新しい cordova-1.1.0.js を使って HTML を更新します

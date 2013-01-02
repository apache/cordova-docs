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

Upgrading Cordova Android
=========================


これは、 Cordova を古いバージョンから新しいバージョンにアップグレードする必要がある人のためのドキュメントです。

## 2.0.0 から 2.1.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから cordova-2.0.0.jar を削除します
2. プロジェクトの libs ディレクトリに cordova-2.1.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい cordova-2.1.0.js をプロジェクトにコピーします
5. HTML を、新しい cordova-2.1.0.js を使って更新します
6. res/xml/config.xml を framework/res/xml/config.xml と同じとなるようにコピーします


## 1.9.0 から 2.0.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから cordova-1.9.0.jar を削除します
2. プロジェクトの libs ディレクトリに cordova-2.0.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい cordova-2.0.0.js をプロジェクトにコピーします
5. HTML を、新しい cordova-2.0.0.js を使って更新します
6. res/xml/config.xml を framework/res/xml/config.xml と同じとなるようにコピーします

### 2.0.0 リリースに関する注意点
config.xml は cordova.xml と plugins.xml に置き換わるものです。この新しい config.xml は前の2つのコンビネーションです。
しかしながら古いファイルは廃止予定であり、現在はまだ動きますが、将来的のリリースでは動かなくなります。

## 1.8.1 から 1.9.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから cordova-1.8.0.jar を削除します
2. プロジェクトの libs ディレクトリに cordova-1.9.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい cordova-1.9.0.js をプロジェクトにコピーします
5. HTML を、新しい cordova-1.9.0.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します

### 1.9.0 リリースに関する注意点

- サードパーティーのプラグインは動く場合と、動かない場合があります。これは、 CordovaWebView がリリースされたためです。これらのプラグインはコンテキスト取得の際に、 getContext() または getActivity() を使用して CordovaInterface から取得する必要があります。
もし Android アプリケーション開発を熟知していない場合は、プラグインの開発者に連絡を取り、彼らのバグトラッキングシステムにタスクとして登録するよう伝えてください。

## 1.8.0 から 1.8.1 へのアップグレード ##

1. プロジェクトの libs ディレクトリから cordova-1.8.0.jar を削除します
2. プロジェクトの libs ディレクトリに cordova-1.8.1.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい cordova-1.8.1.js をプロジェクトにコピーします
5. HTML を、新しい cordova-1.8.1.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します


## 1.7.0 から 1.8.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから cordova-1.7.0.jar を削除します
2. プロジェクトの libs ディレクトリに cordova-1.8.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい cordova-1.8.0.js をプロジェクトにコピーします
5. HTML を、新しい cordova-1.8.0.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します


## 1.6.1 から 1.7.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから cordova-1.6.1.jar を削除します
2. プロジェクトの libs ディレクトリに cordova-1.7.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい cordova-1.7.0.js をプロジェクトにコピーします
5. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します


## 1.6.0 から 1.6.1 へのアップグレード ##

1. プロジェクトの libs ディレクトリから cordova-1.6.0.jar を削除します
2. プロジェクトの libs ディレクトリに cordova-1.6.1.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい cordova-1.6.1.js をプロジェクトにコピーします
5. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します

## 1.5.0 から 1.6.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから cordova-1.5.0.jar を削除します
2. プロジェクトの libs ディレクトリに cordova-1.6.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい cordova-1.6.0.js をプロジェクトにコピーします
5. HTML を、新しい cordova-1.6.0.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します
7. res/xml/phonegap.xml を、 framework/res/xml/cordova.xml と同じになるように res/xml/cordova.xml に置き換えます

## 1.4.0 から 1.5.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから phonegap-1.4.0.jar を削除します
2. プロジェクトの libs ディレクトリに cordova-1.5.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい cordova-1.5.0.js をプロジェクトにコピーします
5. HTML を、新しい cordova-1.5.0.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します
7. res/xml/phonegap.xml を、 framework/res/xml/cordova.xml と同じになるように res/xml/cordova.xml に置き換えます

## 1.3.0 から 1.4.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから phonegap-1.3.0.jar を削除します
2. プロジェクトの libs ディレクトリに phonegap-1.4.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい phonegap-1.4.0.js をプロジェクトにコピーします
5. HTML を、新しい phonegap-1.4.0.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します
7. res/xml/phonegap.xml を framework/res/xml/phonegap.xml と同じになるように更新します


## 1.2.0 から 1.3.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから phonegap-1.2.0.jar を削除します
2. プロジェクトの libs ディレクトリに phonegap-1.3.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい phonegap-1.3.0.js をプロジェクトにコピーします
5. HTML を、新しい phonegap-1.3.0.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します
7. res/xml/phonegap.xml を framework/res/xml/phonegap.xml と同じになるように更新します


## 1.1.0 から 1.2.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから phonegap-1.1.0.jar を削除します
2. プロジェクトの libs ディレクトリに phonegap-1.2.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい phonegap-1.2.0.js をプロジェクトにコピーします
5. HTML を、新しい phonegap-1.2.0.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します
7. res/xml/phonegap.xml を framework/res/xml/phonegap.xml と同じになるように更新します


## 1.0.0 から 1.1.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから phonegap-1.0.0.jar を削除します
2. プロジェクトの libs ディレクトリに phonegap-1.1.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい phonegap-1.1.0.js をプロジェクトにコピーします
5. HTML を、新しい phonegap-1.1.0.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します


## 0.9.6 から 1.0.0 へのアップグレード ##

1. プロジェクトの libs ディレクトリから phonegap-0.9.6.jar を削除します
2. プロジェクトの libs ディレクトリに phonegap-1.0.0.jar を追加します
3. もし Eclipse を使用している場合は、プロジェクトをリフレッシュし clean を実行します
4. 新しい phonegap-1.0.0.js をプロジェクトにコピーします
5. HTML を、新しい phonegap-1.0.0.js を使って更新します
6. res/xml/plugins.xml を framework/res/xml/plugins.xml と同じとなるように更新します



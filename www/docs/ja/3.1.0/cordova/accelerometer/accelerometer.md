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

# <a href="acceleration/acceleration.html">加速</a>度センサー

> *X* *y*、および*z*の方向での<a href="../device/device.html">デバイス</a>の動きを<a href="../media/capture/capture.html">キャプチャ</a>します。

## メソッド

*   <a href="accelerometer.getCurrentAcceleration.html">accelerometer.getCurrentAcceleration</a>
*   <a href="accelerometer.watchAcceleration.html">accelerometer.watchAcceleration</a>
*   <a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>

## 引数

*   <a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>
*   <a href="parameters/accelerometerError.html">accelerometerError</a>
*   <a href="parameters/accelerometerOptions.html">accelerometerOptions</a>

## オブジェクト (読み取り専用)

*   <a href="acceleration/acceleration.html">加速</a>

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*として<a href="../device/device.html">デバイス</a> レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin ls
        [ 'org.apache.cordova.device-motion' ]
        $ cordova plugin rm org.apache.cordova.device-motion
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   （アンドロイド`app/res/xml/config.xml`)
    
        <feature name="Accelerometer">
            <param name="android-package" value="org.apache.cordova.AccelListener" />
        </feature>
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Accelerometer">
            <param name="blackberry-package" value="org.apache.cordova.accelerometer.Accelerometer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="org.apache.cordova" required="true" version="1.0.0" />
        

*   iOS （`config.xml`)
    
        <feature name="Accelerometer">
            <param name="ios-package" value="CDVAccelerometer" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の<a href="../../guide/overview/index.html">概要</a>のセクションを参照してください。
---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# MediaFile.getFormatData

> 取得についての書式情報メディア キャプチャ ファイル。

    mediaFile.getFormatData (MediaFileDataSuccessCB successCallback, [MediaFileDataErrorCB 解り]);
    

## 説明

この関数は、非同期的にメディア ファイルの形式情報を取得しようとします。 かどうかは成功、呼び出します、 `MediaFileDataSuccessCB` コールバックを `MediaFileData` オブジェクト。 この関数を呼び出します、試行が失敗した場合、 `MediaFileDataErrorCB` コールバック。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## ブラックベリー WebWorks 癖

ので、すべてのメディア ファイルに関する情報の API を提供しない `MediaFileData` 既定値を持つオブジェクトを返します。

## Android の癖

API 情報にアクセスするメディア ファイル形式は限られて、それで、必ずしもすべて `MediaFileData` プロパティがサポートされます。

## iOS の癖

API 情報にアクセスするメディア ファイル形式は限られて、それで、必ずしもすべて `MediaFileData` プロパティがサポートされます。
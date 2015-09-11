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

# MediaFile.getFormatData

> 檢索格式<a href="../media.html">媒體</a><a href="capture.html">捕獲</a><a href="../../file/fileobj/fileobj.html">檔</a>的資訊。

    mediaFile.getFormatData （<a href="MediaFileData.html">MediaFileData</a>SuccessCB successCallback） [<a href="MediaFileData.html">MediaFileData</a>ErrorCB errorCallback] ；
    

## 說明

此函數以非同步方式嘗試檢索該<a href="../media.html">媒體</a><a href="../../file/fileobj/fileobj.html">檔</a>案的格式資訊。 如果成功，它將調用 `<a href="MediaFileData.html">MediaFileData</a>SuccessCB` 回<a href="../../file/fileobj/fileobj.html">檔</a>與 `<a href="MediaFileData.html">MediaFileData</a>` 物件。 如果該嘗試失敗，此函數將調用 `<a href="MediaFileData.html">MediaFileData</a>ErrorCB` 回<a href="../../file/fileobj/fileobj.html">檔</a>。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 黑莓 WebWorks 怪癖

不為<a href="../media.html">媒體</a><a href="../../file/fileobj/fileobj.html">檔</a>案，所以所有有關的資訊提供一個 API `<a href="MediaFileData.html">MediaFileData</a>` 物件返回的預設值。

## Android 的怪癖

訪問<a href="../media.html">媒體</a><a href="../../file/fileobj/fileobj.html">檔</a>案格式資訊的 API 的限制，所以並不是所有 `<a href="MediaFileData.html">MediaFileData</a>` 支援的屬性。

## iOS 的怪癖

訪問<a href="../media.html">媒體</a><a href="../../file/fileobj/fileobj.html">檔</a>案格式資訊的 API 的限制，所以並不是所有 `<a href="MediaFileData.html">MediaFileData</a>` 支援的屬性。
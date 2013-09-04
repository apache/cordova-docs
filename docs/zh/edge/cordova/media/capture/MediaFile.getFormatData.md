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

> 檢索格式媒體捕獲檔的資訊。

    mediaFile.getFormatData （MediaFileDataSuccessCB successCallback） [MediaFileDataErrorCB errorCallback] ；
    

## 說明

此函數以非同步方式嘗試檢索該媒體檔案的格式資訊。 如果成功，它將調用 `MediaFileDataSuccessCB` 回檔與 `MediaFileData` 物件。 如果該嘗試失敗，此函數將調用 `MediaFileDataErrorCB` 回檔。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 黑莓 WebWorks 怪癖

不為媒體檔案，所以所有有關的資訊提供一個 API `MediaFileData` 物件返回的預設值。

## Android 的怪癖

訪問媒體檔案格式資訊的 API 的限制，所以並不是所有 `MediaFileData` 支援的屬性。

## iOS 的怪癖

訪問媒體檔案格式資訊的 API 的限制，所以並不是所有 `MediaFileData` 支援的屬性。
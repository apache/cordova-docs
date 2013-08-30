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

> 检索格式媒体捕获文件的信息。

    mediaFile.getFormatData （MediaFileDataSuccessCB successCallback） [MediaFileDataErrorCB errorCallback] ；
    

## 说明

此函数以异步方式尝试检索该媒体文件的格式信息。 如果成功，它将调用 `MediaFileDataSuccessCB` 回调与 `MediaFileData` 对象。 如果该尝试失败，此函数将调用 `MediaFileDataErrorCB` 回调。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 黑莓 WebWorks 怪癖

不为媒体文件，所以所有有关的信息提供一个 API `MediaFileData` 对象返回的默认值。

## Android 的怪癖

访问媒体文件格式信息的 API 的限制，所以并不是所有 `MediaFileData` 支持的属性。

## iOS 的怪癖

访问媒体文件格式信息的 API 的限制，所以并不是所有 `MediaFileData` 支持的属性。
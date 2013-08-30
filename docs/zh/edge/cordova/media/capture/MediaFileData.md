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

# MediaFileData

> 封装有关的媒体文件的格式信息。

## 属性

*   **编解码器**： 实际的音频和视频内容的格式。() DOMString

*   **比特率**： 内容的平均比特率。值为零的图像。（人数）

*   **高度**： 图像或视频以像素为单位的高度。值为零的音频剪辑。（人数）

*   **宽度**： 图像或视频以像素为单位的宽度。值为零的音频剪辑。（人数）

*   **持续时间**： 以秒为单位的视频或声音剪辑的长度。值为零的图像。（人数）

## 黑莓 WebWorks 怪癖

没有 API 提供的格式信息的媒体文件，所以 `MediaFileData` 对象返回的 `MediaFile.getFormatData` 功能以下默认值：

*   **编解码器**： 不受支持，并且返回`null`.

*   **比特率**: 不受支持，并且返回零。

*   **高度**: 不受支持，并且返回零。

*   **宽度**: 不受支持，并且返回零。

*   **持续时间**： 不受支持，并且返回零。

## Android 的怪癖

支持以下 `MediaFileData` 属性：

*   **编解码器**： 不受支持，并且返回`null`.

*   **比特率**: 不受支持，并且返回零。

*   **高度**： 支持： 仅图像和视频文件。

*   **宽度**： 支持： 仅图像和视频文件。

*   **持续时间**： 支持： 仅音频和视频文件。

## iOS 的怪癖

支持以下 `MediaFileData` 属性：

*   **编解码器**： 不受支持，并且返回`null`.

*   **比特率**： 仅音频 iOS4 设备上受支持。对于图像和视频，返回零。

*   **高度**： 支持： 仅图像和视频文件。

*   **宽度**： 支持： 仅图像和视频文件。

*   **持续时间**： 支持： 仅音频和视频文件。
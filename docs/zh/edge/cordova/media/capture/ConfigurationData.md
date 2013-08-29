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

# 配置

> 封装一组设备支持的媒体捕获参数。

## 说明

描述设备所支持的媒体捕获模式。配置数据包含的 MIME 类型和捕获尺寸的视频或图像捕获。

MIME 类型应坚持[RFC2046][1]。例子：

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `视频/3gpp`
*   `视频/quicktime`
*   `图像/jpeg`
*   `音频/amr`
*   `音频/wav`

## 属性

*   **类型**： ASCII 编码的小写字符串表示的媒体类型。() DOMString

*   **高度**： 图像或视频以像素为单位的高度。值为零的声音剪辑。（人数）

*   **宽度**： 图像或视频以像素为单位的宽度。值为零的声音剪辑。（人数）

## 快速的示例

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

不支持任何平台。所有配置数据数组都是空的。
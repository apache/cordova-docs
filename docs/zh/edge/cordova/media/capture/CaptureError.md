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

# CaptureError

> 封装失败的媒体捕获操作所引起的错误代码。

## 属性

*   **代码**： 下面列出的预定义的错误代码之一。

## 常量

*   `CaptureError.CAPTURE_INTERNAL_ERR`： 摄像机或麦克风无法捕获的图像或声音。

*   `CaptureError.CAPTURE_APPLICATION_BUSY`： 相机或音频捕获应用程序正在服另一个捕获请求。

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`： API 的使用无效 （例如，价值 `limit` 小于 1)。

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`： 在用户退出之前捕获任何相机或音频捕获应用程序。

*   `CaptureError.CAPTURE_NOT_SUPPORTED`： 请求的捕获操作不受支持。
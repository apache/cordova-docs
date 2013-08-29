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

# FileUploadOptions

A `FileUploadOptions` 可以将对象传递给 `FileTransfer` 对象的 `upload()` 方法，以指定上载脚本的附加参数。

## 属性

*   **fileKey**： 表单元素的名称。默认值为 `file` 。() DOMString

*   **文件名**： 要保存在服务器上的文件时使用的文件名称。默认值为 `image.jpg` 。() DOMString

*   **mimeType**： 要上传的数据的 mime 类型。默认值为 `image/jpeg` 。() DOMString

*   **params**： 一组可选的键/值对中的 HTTP 请求的传递。（对象）

*   **chunkedMode**： 是否要分块流式处理模式中的数据上载。默认值为 `true` 。(布尔值)

*   **标题**： 一张地图的标头名称/标头值。使用数组来指定多个值。（对象）

## 说明

A `FileUploadOptions` 可以将对象传递给 `FileTransfer` 对象的 `upload()` 方法，以指定上载脚本的附加参数。

## WP7 怪癖

*   **chunkedMode：**： 在 WP7 上可以忽略。
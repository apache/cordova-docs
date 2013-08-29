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

# FileUploadResult

A `FileUploadResult` 对象传递给成功回调的 `FileTransfer` 对象的 `upload()` 方法。

## 属性

*   **字节发送**： 作为上载的一部分发送到服务器的字节数。(长)

*   **responseCode**： 由服务器返回的 HTTP 响应代码。(长)

*   **响应**： 由服务器返回的 HTTP 响应。() DOMString

## 说明

`FileUploadResult`通过成功回调的返回的对象是 `FileTransfer` 对象的 `upload()` 方法。

## iOS 的怪癖

*   不支持 `responseCode` 或`bytesSent`.
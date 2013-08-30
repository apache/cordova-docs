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

# FileTransferError

A `FileTransferError` 对象传递到错误回调时出现错误。

## 属性

*   **代码**： 下面列出的预定义的错误代码之一。（人数）

*   **源**： 源 URI。（字符串）

*   **目标**： 向目标 URI。（字符串）

*   **http_status**： HTTP 状态代码。从 HTTP 连接收到一个响应代码时，此属性才可用。（人数）

## 常量

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## 说明

`FileTransferError`上传或下载文件时出现错误时，将对象传递到错误回调。
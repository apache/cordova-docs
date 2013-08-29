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

# FileError

A `FileError` 对象时出现错误在文件 API 方法中的任何设置。

## 属性

*   **代码**： 下面列出的预定义的错误代码之一。

## 常量

*   `FileError.NOT_FOUND_ERR`
*   `FileError.SECURITY_ERR`
*   `FileError.ABORT_ERR`
*   `FileError.NOT_READABLE_ERR`
*   `FileError.ENCODING_ERR`
*   `FileError.NO_MODIFICATION_ALLOWED_ERR`
*   `FileError.INVALID_STATE_ERR`
*   `FileError.SYNTAX_ERR`
*   `FileError.INVALID_MODIFICATION_ERR`
*   `FileError.QUOTA_EXCEEDED_ERR`
*   `FileError.TYPE_MISMATCH_ERR`
*   `FileError.PATH_EXISTS_ERR`

## 说明

`FileError`对象是提供给任何文件 API 错误回调的唯一参数。 若要确定错误的类型，比较其 `code` 属性设置为任何上述的节目表。
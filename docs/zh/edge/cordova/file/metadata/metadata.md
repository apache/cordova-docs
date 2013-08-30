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

# 元数据

供应状态信息的文件或目录的一个接口。

## 属性

*   **modificationTime**： 当文件或目录被最后修改的时间。*（日期）*

## 详细信息

`Metadata`对象表示文件或目录的状态信息。 调用 `DirectoryEntry` 或 `FileEntry` 对象的 `getMetadata()` 方法将产生 `Metadata` 实例。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);
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

# 媒体

> 封装媒体捕获文件的属性。

## 属性

*   **名称**： 文件的名称，不包含路径信息。() DOMString

*   **完整路径**： 文件，包括名称的完整路径。() DOMString

*   **类型**： 文件的 mime 类型 (DOMString)

*   **lastModifiedDate**： 日期和文件的上次修改时间。（日期）

*   **大小**： 文件的大小，以字节为单位。（人数）

## 方法

*   **MediaFile.getFormatData**: 检索该媒体文件的格式信息。
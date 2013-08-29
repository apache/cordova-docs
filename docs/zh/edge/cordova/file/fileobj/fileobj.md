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

# 文件

此对象包含的单个文件的属性。

## 属性

*   **名称**： 文件的名称。*() DOMString*

*   **完整路径**： 包括文件名的文件的完整路径。*() DOMString*

*   **类型**： 文件的 mime 类型。*() DOMString*

*   **lastModifiedDate**： 上次修改该文件的时间。*（日期）*

*   **大小**： 以字节为单位的文件大小。*(长)*

## 方法

*   **切片**: 仅选择了部分要读取的文件。

## 详细信息

`File`对象包含单个文件的属性。您可以获取的实例 `File` 对象通过调用 `FileEntry` 对象的 `file()` 方法。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 切片

返回一个新的 `File` 对象，为其 `FileReader` 返回只有该文件的指定的部分。 负值设置为 `start` 或 `end` 测量从文件的末尾。 相对于当前切片定位的索引。 （请参阅下面的完整示例）。

**参数：**

*   **开始**： 要阅读，具有包容性的第一个字节的索引。

*   **结束**: 后最后一个要读取的字节的索引。

**快速的示例**

    var slicedFile = file.slice(10, 30);
    

**完整的示例**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**支持的平台**

*   Android 系统
*   iOS
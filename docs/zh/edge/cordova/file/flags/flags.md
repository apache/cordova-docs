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

# 标志

提供的参数 `DirectoryEntry` 对象的 `getFile()` 和 `getDirectory()` 方法，查找或创建的文件和目录，分别。

## 属性

*   **创建**： 指示应创建的文件或目录，是否它不存在。*（布尔）*

*   **独家**: 已由本身，但与一起使用时不起任何作用 `create` 导致文件或目录的创建，如果已经存在的目标路径失败。*（布尔）*

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / 获取数据目录，如果它不存在，则创建它。
    dataDir = fileSystem.root.getDirectory （"数据"，{创建: true});/ / 创建锁定文件，当且仅当它不存在。
    备份的锁定文件 = dataDir.getFile ("lockfile.txt"，{创建: 真实、 独家： true}) ；
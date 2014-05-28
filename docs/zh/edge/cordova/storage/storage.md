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

# 存储

> 对Cordova存储选项的概述。

几个存储APIs 是用于Cordova的应用程序。请参阅[html5rocks][1]。为更全面地概述和示例。

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

此 API 也被称为*web storage*、*simple storage*，或由其备用*session storage*接口，这个API提供同步键/值对存储，并且是可用的在底层的 WebView中实现。 请参阅[W3C spec][2]的详细信息。

 [2]: http://www.w3.org/TR/webstorage/

**Windows Phone 7 Quirk**： 点符号是*not*提供的，所以一定要使用 `setItem` 或 `getItem` ，而不是直接从存储对象访问键，如`window.localStorage.someKey`.

## WebSQL

此 API 是在底层WebView中可用。 [Web SQL Database Specification][3]提供了通过 SQL 查询访问的更多的功能全面的数据库表。

 [3]: http://dev.w3.org/html5/webdatabase/

在以下平台支持 WebSQL：

*   Android
*   BlackBerry 10
*   iOS
*   Tizen

## IndexedDB

此 API 是在底层WebView中可用的。[Indexed DB][4]提供比LocalStorage更多但比 WebSQL 较少的功能。

 [4]: http://www.w3.org/TR/IndexedDB/

以下平台支持 IndexedDB：

*   Windows Phone 8
*   BlackBerry 10

## Plugin-Based 选项

除了上面列出的 APIs 的存储，[File API][5]允许您在本地文件系统上缓存数据。 其他的[Cordova plugins][6]提供类似的存储选项。

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/
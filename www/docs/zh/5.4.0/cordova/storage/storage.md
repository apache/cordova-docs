---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: 存儲
---

# 存儲

> 科爾多瓦的存儲選項的概述。

幾個存儲 Api 是對科爾多瓦應用程式可用。請參閱 [html5rocks][1]。有關更完整的概述和示例。

 [1]: http://www.html5rocks.com/en/features/storage

## 認為

此 API 也已知作為*web 存儲*、*簡單的存儲*，或由其備用*會話存儲*介面，提供同步鍵/值對存儲，是可用基礎 web 視圖實現中。 請參閱[W3C 規範][2]的詳細資訊。

 [2]: http://www.w3.org/TR/webstorage/

## WebSQL

此 API 是在底層 web 視圖中可用。 [Web SQL 資料庫規範][3]提供了更多的功能全面的資料庫表可以通過 SQL 查詢訪問。

 [3]: http://dev.w3.org/html5/webdatabase/

以下平臺支援 WebSQL：

*   Android 系統
*   黑莓 10
*   iOS
*   Tizen

## IndexedDB

此 API 是在底層 web 視圖中可用。[索引 DB][4]提供更多的功能比 LocalStorage 但較少比 WebSQL。

 [4]: http://www.w3.org/TR/IndexedDB/

以下平臺支援 IndexedDB：

*   黑莓 10
*   火狐瀏覽器的作業系統
*   Windows Phone 8
*   Windows 8

## 基於外掛程式的選項

除了上面列出的 Api 的存儲，[檔 API][5]允許您對本地檔案系統上的緩存資料。 其他的[科爾多瓦外掛程式][6]提供類似的存儲選項。

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/
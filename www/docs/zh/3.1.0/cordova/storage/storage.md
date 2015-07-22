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

> 提供對設備的存儲選項的訪問。

此 API 提供了基於兩個不同的 W3C 規範的存儲選項：

*   [Web 存儲 API 規範][1]允許您要訪問的資料通過簡單的鍵/值對。 上認為在此介面上的完整詳細資訊，請參閱節。

*   [Web SQL 資料庫規範][2]提供更多的功能全面的資料庫表訪問通過 SQL 查詢。 此介面的摘要將立即出現下面。

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

科爾多瓦提供兩個介面都對少數已經不支援他們的設備的訪問。否則內置實現應用。

## 方法

*   [大概](storage.opendatabase.html)

## 參數

*   [database_name](parameters/name.html)
*   [database_version](parameters/version.html)
*   [database_displayname](parameters/display_name.html)
*   [database_size](parameters/size.html)

## 物件

*   [資料庫](database/database.html)
*   [SQLTransaction](sqltransaction/sqltransaction.html)
*   [SQLResultSet](sqlresultset/sqlresultset.html)
*   [SQLResultSetRowList](sqlresultsetrowlist/sqlresultsetrowlist.html)
*   [SQLError](sqlerror/sqlerror.html)

## 訪問功能

版本為 3.0，對存儲 Api 的訪問內置於科爾多瓦，，不需要使用 CLI 要添加的外掛程式，如所述的命令列介面。

如果您使用較舊的前面，CLI 的科爾多瓦工具集，，仍然需要以下的平臺特定的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名稱 ="存儲">< 參數名稱 ="android 包"value="org.apache.cordova.Storage"/ >< / 功能 >
        

*   黑莓手機 WebWorks （中`www/config.xml`)
    
        < 功能 id="blackberry.widgetcache"所需 ="true"版本 ="1.0.0.0"/ >
        

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。
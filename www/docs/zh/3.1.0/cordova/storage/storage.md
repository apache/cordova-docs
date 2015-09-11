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
---

# 存儲

> 提供對<a href="../device/device.html">設備</a>的存儲選項的訪問。

此 API 提供了基於兩個不同的 W3C 規範的存儲選項：

*   [Web 存儲 API 規範][1]允許您要訪問的資料通過簡單的鍵/值對。 上認為在此介面上的完整詳細資訊，請參閱節。

*   [Web SQL <a href="database/database.html">資料庫</a>規範][2]提供更多的功能全面的<a href="database/database.html">資料庫</a>表訪問通過 SQL 查詢。 此介面的摘要將立即出現下面。

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

科爾多瓦提供兩個介面都對少數已經不支援他們的<a href="../device/device.html">設備</a>的訪問。否則內置實現應用。

## 方法

*   <a href="storage.opendatabase.html">大概</a>

## 參數

*   <a href="parameters/name.html">database_name</a>
*   <a href="parameters/version.html">database_version</a>
*   <a href="parameters/display_name.html">database_displayname</a>
*   <a href="parameters/size.html">database_size</a>

## 物件

*   <a href="database/database.html">資料庫</a>
*   <a href="sqltransaction/sqltransaction.html">SQLTransaction</a>
*   <a href="sqlresultset/sqlresultset.html">SQLResultSet</a>
*   <a href="sqlresultset/sqlresultset.html">SQLResultSet</a>RowList
*   <a href="sqlerror/sqlerror.html">SQLError</a>

## 訪問功能

版本為 3.0，對存儲 Api 的訪問內置於科爾多瓦，，不需要使用 CLI 要添加的外掛程式，如所述的<a href="../../guide/cli/index.html">命令列介面</a>。

如果您使用較舊的前面，CLI 的科爾多瓦工具集，，仍然需要以下的平臺特定的<a href="../media/capture/ConfigurationData.html">配置</a>設置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名稱 ="存儲">< 參數名稱 ="android 包"value="org.apache.cordova.Storage"/ >< / 功能 >
        

*   黑莓手機 WebWorks （中`www/config.xml`)
    
        < 功能 id="blackberry.widgetcache"所需 ="true"版本 ="1.0.0.0"/ >
        

一些平臺可能支援此功能，而無需任何特殊的<a href="../media/capture/ConfigurationData.html">配置</a>。請參見在<a href="../../guide/overview/index.html">概述</a>部分中*的平臺支援*。
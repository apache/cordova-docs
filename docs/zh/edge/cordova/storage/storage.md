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

> 提供对设备的存储选项的访问。

此 API 提供了基于两个不同的 W3C 规范的存储选项：

*   [Web 存储 API 规范][1]允许您要访问的数据通过简单的键/值对。 上认为在此接口上的完整详细信息，请参阅节。

*   [Web SQL 数据库规范][2]提供更多的功能全面的数据库表访问通过 SQL 查询。 此接口的摘要将立即出现下面。

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

科尔多瓦提供两个接口都对少数已经不支持他们的设备的访问。否则内置实现应用。

## 方法

*   大概

## 参数

*   database_name
*   database_version
*   database_displayname
*   database_size

## 对象

*   数据库
*   SQLTransaction
*   SQLResultSet
*   SQLResultSetRowList
*   SQLError

## 访问功能

版本为 3.0，对存储 Api 的访问内置于科尔多瓦，，不需要使用 CLI 要添加的插件，如所述的命令行界面。

如果您使用较旧的前面，CLI 的科尔多瓦工具集，，仍然需要以下的平台特定的配置设置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名称 ="存储">< 参数名称 ="android 包"value="org.apache.cordova.Storage"/ >< / 功能 >
        

*   黑莓手机 WebWorks （中`www/config.xml`)
    
        < 功能 id="blackberry.widgetcache"所需 ="true"版本 ="1.0.0.0"/ >
        

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。
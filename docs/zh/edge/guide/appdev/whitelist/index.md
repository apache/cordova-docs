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

# 域白名单指南

## 概述

域白是一种安全模式，控制访问到外部域，如 `http://google.com` 。 Apache 科尔多瓦默认安全策略允许访问的任何站点。 在移动之前您在生产中的应用，应审查其白名单和声明访问到特定的网络域和子域。

## 规格

域白为[W3C 构件访问][1]规范奠定了基础。 在构件访问规范中， `<access>` 元素，用来声明对特定的网络域的访问。 在将来，Apache 科尔多瓦将抽象的平台白实现向 W3C 构件访问规范。 然而，现在每个平台必须实现它自己的域白。

 [1]: http://www.w3.org/TR/widgets-access/

## 语法

[Google.com][2]访问：

 [2]: http://google.com

    http://google.com
    

对安全[google.com][3]的访问 ( `https://` ):

 [3]: https://google.com

    https://google.com
    

子域[maps.google.com][4]访问：

 [4]: http://maps.google.com

    http://maps.google.com
    

访问[google.com][2] （例如， [mail.google.com][5]和[docs.google.com][6]） 的所有子域：

 [5]: http://mail.google.com
 [6]: http://docs.google.com

    http://*.google.com
    

对于所有的域 （例如， [google.com][2]和[developer.mozilla.org][7]） 的访问权限：

 [7]: http://developer.mozilla.org

    *
    

## Android 系统

### 详细信息

在找到白规则 `res/xml/config.xml` ，并宣布与元素`<access origin="..." />`.

Android 系统完全支持白语法。

### 语法

[Google.com][2]访问：

    < 访问来源 ="http://google.com"/ >
    

## 黑莓手机

### 详细信息

在找到白规则 `www/config.xml` ，并宣布与元素`<access uri="..." />`.

完整引用，请参阅的[黑莓 WebWorks 访问元素文档][8].

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

### 语法

[Google.com][2]访问：

    < 访问 uri ="http://google.com"的子域 ="false"/ >
    

对[maps.google.com][4]的访问：

    < 访问 uri ="http://maps.google.com"子域 ="false"/ >
    

对在[google.com][2]上的所有子域的访问：

    < 访问 uri ="http://google.com"的子域 ="true"/ >
    

访问到所有的域，包括 `file://` 协议：

    < 访问 uri ="*"的子域 ="true"/ >
    

## iOS

### 详细信息

在找到白规则 `AppName/config.xml` ，并宣布与元素`<access origin="..." />`.

iOS 完全支持白语法。

**注：**起源指定没有协议，如 `www.apache.org` 而不是 `http://www.apache.org` ，默认为所有的 `http` ， `https` ， `ftp` ，和 `ftps` 计划。

### 语法

通配符在 iOS 上的 ( `*` ) 比[W3C 构件访问][1]规范更灵活。

访问所有子域和顶级域名 （ `.com` ， `.net` ，等等）：

    *.google.*
    

## Windows Phone (7 和 8)

在找到白规则 `config.xml` ，并宣布与元素`<access origin="..." />`.

Android 系统完全支持白语法。

### 语法

[Google.com][2]访问：

    < 访问来源 ="http://google.com"/ >
    

## Tizen

### 详细信息

应用程序根目录下的 `config.xml` 文件指定域白规则，使用 `<access origin="..." />` 元素。 完整引用，请参阅 \[Tizen 访问外部网络资源文档\] \[10\]。

### 语法

[Google.com][2]访问：

    < 访问来源 ="http://google.com"的子域 ="false"/ >
    

对安全[google.com][3]的访问 ( `https://` ):

    < 访问来源 ="https://google.com"的子域 ="false"/ >
    

对在[google.com][2]上的所有子域的访问：

    < 访问来源 ="http://google.com"的子域 ="true"/ >
    

访问到所有的域，包括 `file://` 协议：

    < 访问来源 ="*"的子域 ="true"/ >
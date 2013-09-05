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

# 域白名單指南

## 概述

域白是一種安全模式，控制訪問到外部域，如 `http://google.com` 。 Apache 科爾多瓦預設安全性原則允許訪問的任何網站。 在移動之前您在生產中的應用，應審查其白名單和聲明訪問到特定的網路域和子域。

## 規格

域白為[W3C 構件訪問][1]規範奠定了基礎。 在構件訪問規範中， `<access>` 元素，用來聲明對特定的網路域的訪問。 在將來，Apache 科爾多瓦將抽象的平臺白實現向 W3C 構件訪問規範。 然而，現在每個平臺必須實現它自己的域白。

 [1]: http://www.w3.org/TR/widgets-access/

## 語法

[Google.com][2]訪問：

 [2]: http://google.com

    http://google.com
    

對安全[google.com][3]的訪問 ( `https://` ):

 [3]: https://google.com

    https://google.com
    

子域[maps.google.com][4]訪問：

 [4]: http://maps.google.com

    http://maps.google.com
    

訪問[google.com][2] （例如， [mail.google.com][5]和[docs.google.com][6]） 的所有子域：

 [5]: http://mail.google.com
 [6]: http://docs.google.com

    http://*.google.com
    

對於所有的域 （例如， [google.com][2]和[developer.mozilla.org][7]） 的存取權限：

 [7]: http://developer.mozilla.org

    *
    

## Android 系統

### 詳細資訊

在找到白規則 `res/xml/config.xml` ，並宣佈與元素`<access origin="..." />`.

Android 系統完全支援白語法。

### 語法

[Google.com][2]訪問：

    <access origin="http://google.com" />
    

## 黑莓手機

### 詳細資訊

在找到白規則 `www/config.xml` ，並宣佈與元素`<access uri="..." />`.

完整引用，請參閱的[黑莓 WebWorks 訪問元素文檔][8].

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

### 語法

[Google.com][2]訪問：

    <access uri="http://google.com" subdomains="false" />
    

對[maps.google.com][4]的訪問：

    <access uri="http://maps.google.com" subdomains="false" />
    

對在[google.com][2]上的所有子域的訪問：

    <access uri="http://google.com" subdomains="true" />
    

訪問到所有的域，包括 `file://` 協定：

    <access uri="*" subdomains="true" />
    

## iOS

### 詳細資訊

在找到白規則 `AppName/config.xml` ，並宣佈與元素`<access origin="..." />`.

iOS 完全支援白語法。

**注：**起源指定沒有協定，如 `www.apache.org` 而不是 `http://www.apache.org` ，預設為所有的 `http` ， `https` ， `ftp` ，和 `ftps` 計畫。

### 語法

萬用字元在 iOS 上的 ( `*` ) 比[W3C 構件訪問][1]規範更靈活。

訪問所有子域和頂層網域名 （ `.com` ， `.net` ，等等）：

    *.google.*
    

## Windows Phone (7 和 8)

在找到白規則 `config.xml` ，並宣佈與元素`<access origin="..." />`.

Android 系統完全支援白語法。

### 語法

[Google.com][2]訪問：

    <access origin="http://google.com" />
    

## Tizen

### 詳細資訊

應用程式根目錄下的 `config.xml` 檔指定域白規則，使用 `<access origin="..." />` 元素。 完整引用，請參閱 \[Tizen 訪問外部網路資源文檔\] \[10\]。

### 語法

[Google.com][2]訪問：

    <access origin="http://google.com" subdomains="false" />
    

對安全[google.com][3]的訪問 ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

對在[google.com][2]上的所有子域的訪問：

    <access origin="http://google.com" subdomains="true" />
    

訪問到所有的域，包括 `file://` 協定：

    <access origin="*" subdomains="true" />
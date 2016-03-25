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

title: 白名單指南
---

# 白名單指南

## 概述

資源白的就是安全模型控制訪問外部網路資源，如 `http://google.com` 。 Apache 科爾多瓦預設安全性原則允許訪問 Internet 上的任何網站上的任何資源。 在移動之前您在生產中的應用，應審查其白名單和聲明訪問到特定的網路域和子域。

## 規格

域白為[W3C 構件訪問][1]規範奠定了基礎。 在構件訪問規範中， `<access>` 元素，用來聲明對特定的網路資源的訪問。 Apache 科爾多瓦擴展了此概念允許個別網路資源 (Url) 的白。 在將來，Apache 科爾多瓦將抽象的白平臺實現。 然而，現在每個平臺實現其自己的資源或域的白。 平臺實現之間的差異是在本文檔後面所述。

 [1]: http://www.w3.org/TR/widgets-access/

白名單條目的一般格式如下 Google Chrome 打包企業應用套件的"[模式匹配][2]"規範。 資源指定的 URL，但一個星號 （*） 字元可用作在幾個地方的"萬用字元"表示"任何值可能會在這裡去"。 具體的例子如下所示。

 [2]: http://developer.chrome.com/apps/match_patterns.html

## 語法

在[google.com][3]的所有資源的存取權限：

 [3]: http://google.com

    http://google.com/*
    

訪問所有資源在安全[google.com][4] ( `https://` ):

 [4]: https://google.com

    HTTPs://google.com/ *
    

對特定的子域[maps.google.com][5]的訪問：

 [5]: http://maps.google.com

    http://maps.google.com/*
    

訪問[google.com][3] （例如， [mail.google.com][6]和[docs.google.com][7]） 的所有子域：

 [6]: http://mail.google.com
 [7]: http://docs.google.com

    http://*.google.com/*
    

對上[www.google.com][8] "/ 移動"路徑下的所有資源的訪問：

 [8]: http://www.google.com

    http://www.google.com/mobile/*
    

訪問[google.com][3]上任何協定 （如 HTTP、 HTTPS、 FTP 等）：

    *://google.com/*
    

所有資源 （例如， [google.com][3]和[developer.mozilla.org][9]） 在互聯網上訪問：

 [9]: http://developer.mozilla.org

    *
    

## Android 系統

### 詳細資訊

在找到白規則 `res/xml/config.xml` ，並宣佈與元素`<access origin="..." />`.

Android 系統完全支援白語法。

### 語法

[Google.com][3]訪問：

    <access origin="http://google.com/*" />
    

## 黑莓 10

### 詳細資訊

在找到白規則 `www/config.xml` ，並宣佈與元素`<access origin="..." />`.

黑莓 10 比其他平臺兩種方式以不同的方式處理萬用字元：

1） 由用戶端代碼訪問的內容必須顯式聲明。起源 ="*"將不尊重這一使用情形。或者，可使用首選項禁用所有 web 安全。

2） 子域 ="true"可用於代替"*.domain"

### 語法

[Google.com][3]訪問：

    <access origin="http://google.com" subdomains="false" />
    

對[maps.google.com][5]的訪問：

    <access origin="http://maps.google.com" subdomains="false" />
    

對在[google.com][3]上的所有子域的訪問：

    <access origin="http://google.com" subdomains="true" />
    

訪問到所有的域，包括 `file://` 協定：

    <access origin="*" subdomains="true" />
    

禁用所有 web 安全性：

    <preference name="websecurity" value="disable" />
    

## iOS

### 詳細資訊

在找到白規則 `AppName/config.xml` ，並宣佈與元素`<access origin="..." />`.

iOS 完全支援白語法。

### 在 3.1.0 中更改：

之前 3.1.0 版，科爾多瓦 iOS 包括一些非標準擴展域 whilelisting 計畫其他科爾多瓦平臺都支援的。 自 3.1.0、 iOS 白名單現在符合資源白名單語法描述了本文檔的頂部。 如果您從 pre-3.1.0、 升級和使用這些擴展，您可能需要更改您 `config.xml` ，以前一樣繼續白組相同的資源檔。

具體而言，這些模式需要更新：

*   " `apache.org` "（無協定）： 這將先前匹配 `http` ， `https` ， `ftp` ，和 `ftps` 的協定。 將更改為" `*://apache.org/*` "，包括所有協定，或都包括您需要支援的每個協定的線。

*   " `http://apache.*` "（萬用字元域的一端）： 這將先前匹配的所有頂級-級別-域，包括所有可能的兩個字母 Tld （但不是有用域喜歡。 co.uk)。 為每個 TLD，您實際上控制，並且需要到白名單中包括一條線。

*   " `h*t*://ap*he.o*g` "（萬用字元為隨機丟失信件）： 不再支援這些 ； 更改包含一條線的每個域和協定，您實際上需要到白名單中。

### 語法

[Google.com][3]訪問：

    <access origin="http://google.com/*" />
    

## Windows Phone (7 和 8)

在找到白規則 `config.xml` ，並宣佈與元素`<access origin="..." />`.

### 語法

[Google.com][3]訪問：

    <access origin="http://google.com" />
    

## Tizen

### 詳細資訊

應用程式根目錄下的 `config.xml` 檔指定域白規則，使用 `<access origin="..." />` 元素。 完整引用，請參閱[Tizen 訪問外部網路資源檔][10].

 [10]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_4#8814682_CreatingaProject-AccessingExternalNetworkResources

### 語法

[Google.com][3]訪問：

    <access origin="http://google.com" subdomains="false" />
    

對安全[google.com][4]的訪問 ( `https://` ):

    <access origin="https://google.com" subdomains="false" />
    

對在[google.com][3]上的所有子域的訪問：

    <access origin="http://google.com" subdomains="true" />
    

訪問到所有的域，包括 `file://` 協定：

    <access origin="*" subdomains="true" />
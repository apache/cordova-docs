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

# 白名單指南

域白是一種安全模式，控制訪問到您應用程式有沒有控制的外部域。 科爾多瓦的預設安全性原則允許訪問的任何網站。 在移動之前您在生產中的應用，應制訂白名單和允許訪問特定的網路域和子域。

科爾多瓦遵循[W3C 構件訪問][1]規範，它依賴于 `<access>` 中應用程式的元素 `config.xml` 檔以啟用對特定域的網路訪問。 對於依賴于所述的命令列介面 CLI 工作流的專案，此檔位於專案的頂級目錄。 否則為特定于平臺的發展道路，位置列出以下各節。 （每個平臺上見各種平臺指南的詳細資訊）。

 [1]: http://www.w3.org/TR/widgets-access/

下面的示例演示白名單中的語法：

*   [Google.com][2]訪問：
    
        <access origin="http://google.com" />
        

*   對安全[google.com][3]的訪問 ( `https://` ):
    
        <access origin="https://google.com" />
        

*   子域[maps.google.com][4]訪問：
    
        <access origin="http://maps.google.com" />
        

*   對所有子域[google.com][2]，例如[mail.google.com][5]和[docs.google.com][6]的訪問：
    
        <access origin="http://*.google.com" />
        

*   到*所有*的域，例如， [google.com][2]和[developer.mozilla.org][7]的訪問：
    
        <access origin="*" />
        
    
    這是新創建的 CLI 專案的預設值。

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

## 亞馬遜火 OS 白

在找到特定平臺白規則`res/xml/config.xml`.

## Android 白

在找到特定平臺白規則`res/xml/config.xml`.

**注**： 在 Android 2.3 上和之前，域白僅適用于 `href` 的超連結，不引用的資源，如圖像和腳本。 採取步驟，避免從被注入到應用程式的腳本。

導航到非白名單域通過 `href` 的超連結會導致要打開預設瀏覽器中，而不是在應用程式中的頁。（比較這到下面提到的 iOS 的行為)。

## iOS 白

該平臺的白規則命名的應用程式目錄中找到 `config.xml` 檔。

沒有一個協定，如指定的起源 `www.apache.org` 而不是 `http://www.apache.org` ，預設為所有的 `http` ， `https` ， `ftp` ，和 `ftps` 計畫。

在 iOS 平臺上的萬用字元是比在[W3C 構件訪問][1]規範更靈活。 例如，以下訪問所有子域和頂層網域如 `.com` 和 `.net` ：

        <access origin="*.google.*" />
    

與上文指出的對非白名單域通過導航的 Android 平臺不同的是 `href` iOS 上的超連結可以防止頁面打開在所有。

## 黑莓 10 白

在找到白規則`www/config.xml`.

黑莓 10 位使用萬用字元有別于其他平臺兩種方式：

*   通過訪問任何內容 `XMLHttpRequest` 必須顯式聲明。 設置 `origin="*"` 不在這種情況下工作。 另外，所有 web 安全性可能會都禁用使用 `WebSecurity` 黑莓手機配置中所述的首選項：
    
        <preference name="websecurity" value="disable" />
        

*   作為替代設置 `*.domain` ，設置附加 `subdomains` 屬性為 `true` 。 它應設置為 `false` ，預設情況。 例如，以下允許訪問 `google.com` ， `maps.google.com` ，和 `docs.google.com` ：
    
        <access origin="http://google.com" subdomains="true" />
        
    
    以下縮小訪問到 `google.com` ：
    
        <access origin="http://google.com" subdomains="false" />
        
    
    指定訪問到所有的域，包括本地 `file://` 協定：
    
    <access origin="*" subdomains="true" />

(有關支援的詳細資訊，請參閱黑莓的文檔[訪問元素][8]上.)

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## 3.1.0 的 iOS 變化

之前 3.1.0 版，科爾多瓦 iOS 包括一些非標準擴展域 whilelisting 計畫其他科爾多瓦平臺都支援的。 自 3.1.0、 iOS 白名單現在符合資源白名單語法描述了本文檔的頂部。 如果您從 pre-3.1.0、 升級和使用這些擴展，您可能需要更改您 `config.xml` ，以前一樣繼續白組相同的資源檔。

具體而言，這些模式需要更新：

*   `apache.org`（無協定）： 這將先前匹配 `http` ， `https` ， `ftp` ，和 `ftps` 的協定。 將更改為" `*://apache.org/*` "，包括所有協定，或都包括您需要支援的每個協定的線。

*   `http://apache.*`（萬用字元域的一端）： 這將先前匹配的所有頂級-級別-域，包括所有可能的兩個字母 Tld （但不是有用域喜歡。 co.uk)。 為每個 TLD，您實際上控制，並且需要到白名單中包括一條線。

*   `h*t*://ap*he.o*g`（隨機缺少字母的萬用字元）： 不再支援這些 ；更改包含為每個域和協定，你實際上需要到白名單中的一線。

## Windows Phone 白

Windows Phone 7 和 8 的白規則發現在應用程式中的 `config.xml` 檔。

## Tizen 白

白規則發現在應用程式中的 `config.xml` 檔。 在平臺上同樣依賴于 `subdomains` 屬性作為黑莓平臺。 (有關支援的詳細資訊，請參閱 Tizen 的文檔[訪問元素][9]上.)

 [9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm
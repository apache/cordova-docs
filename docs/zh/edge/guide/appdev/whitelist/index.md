* * *

許可證： 根據一個或多個參與者授權合約許可到 Apache 軟體基金會 （ASF）。 See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

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

**注**： 為了防止外部 Url 如 `mailto:` 從在科爾多瓦科爾多瓦 3.6.0，如 web 視圖中打開指定 `origin="*"` 含蓄將添加 HTTP 和 HTTPs 協定的規則。 如果你需要額外的自訂協定訪問，然後你應該也添加它們明確地到白名單。 也請參見"外部應用程式白名單"下面啟動外部應用程式的 URL 的詳細資訊。

**請注意**： 有些網路請求不經過科爾多瓦白名單。這包括 <video> 和 <audio> 資源，WebSocket 連接 （在 Android 4.4 +），以及可能的其他非 HTTP 請求。關於 Android 4.4 +，您可以包括 [CSP][8] 標頭在你的 HTML 文檔，以限制對這些資源的訪問。較早版本的 android 系統，它不可能對他們進行限制。

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### 外部應用程式白名單

科爾多瓦 3.6.0 介紹了第二次的白名單，限制允許使用 Url 來啟動外部應用程式。 在以前版本的科爾多瓦，所有非 HTTP Url，如 `mailto:` ， `geo:` ， `sms:` 和 `intent` ，被隱式地允許的目標<a>標記。</a> 因為潛在的洩漏資訊到應用程式，如果一個 XSS 漏洞，允許攻擊者構建任意的連結，這些 Url 必須列入白名單，以及開始在科爾多瓦 3.6.0。

若要允許啟動外部應用程式的 URL 模式，請使用 <access> 標記在你 `config.xml` 檔中，用 `launch-external` 屬性設置。

例子：

*   若要允許發送 SMS 消息的連結：
    
    <access origin="sms:*" launch-external="yes" />

*   若要允許打開地圖的連結：
    
    <access origin="geo:*" launch-external="yes" />

*   若要允許 example.com 在外部瀏覽器中打開的連結：
    
    <access origin="http://example.com/*" launch-external="yes" />

*   允許在外部瀏覽器中打開的所有非白名單網站： （這是的先前行為的非白名單的 Url 相同）
    
    <access origin="http://*" launch-external="yes" /> <access origin="https://*" launch-external="yes" />

*   要允許訪問所有的 url，恢復到科爾多瓦 3.5.0 政策 （不推薦）：
    
    <access origin="*" launch-external="yes" />

當導航到一個 URL 從應用程式內，內部白名單第一，測試，如果 URL 不是有白名單，然後測試外部的白名單。 這意味著，任何 `http:` 或 `https:` 匹配這兩個白名單的 Url 將在科爾多瓦的應用程式，打開，而不是啟動外部瀏覽器。

## iOS 白名單

該平臺的白名單規則命名的應用程式目錄中找到 `config.xml` 檔。

沒有一個協定，如指定的起源 `www.apache.org` 而不是 `http://www.apache.org` ，預設為所有的 `http` ， `https` ， `ftp` ，和 `ftps` 計畫。

萬用字元在 iOS 平臺上的是比在[W3C 小部件訪問][1]規範更靈活。 例如，以下訪問所有子域和頂層網域如 `.com` 和 `.net` ：

        < 訪問來源 ="*.google.*"/ >
    

與不同的 Android 平臺上文指出的導航到非白名單域通過 `href` iOS 上的超連結可以防止頁面在所有開放。

## 黑莓 10 白名單

中找到白名單規則`www/config.xml`.

黑莓 10年使用萬用字元有別于其他平臺兩種方式：

*   通過訪問任何內容 `XMLHttpRequest` 必須顯式聲明。 設置 `origin="*"` 不能在這種情況下。 另外，所有 web 安全性可能會都禁用使用 `WebSecurity` 偏好黑莓手機配置中所述：
    
        < 首選項名稱 = 值"websecurity"="禁用"/ >
        

*   作為替代設置 `*.domain` ，設置附加 `subdomains` 屬性到 `true` 。 它應設置為 `false` ，預設情況。 例如，以下允許訪問 `google.com` ， `maps.google.com` ，和 `docs.google.com` ：
    
        < 訪問來源 ="HTTP://google.com"的子域 ="true"/ >
        
    
    以下變窄訪問到 `google.com` ：
    
        < 訪問來源 ="HTTP://google.com"的子域 ="false"/ >
        
    
    指定訪問到所有的域，包括當地 `file://` 協定：
    
    <access origin="*" subdomains="true" />

（有關支援的詳細資訊，請參閱黑莓的文檔[訪問元素][9]上.)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## 3.1.0 的 iOS 變化

在版本之前 3.1.0，科爾多瓦 iOS 包括一些非標準的擴展到其他科爾多瓦平臺都支援的域 whilelisting 方案。 自 3.1.0，iOS 白名單現在符合資源白名單語法描述了本文檔的頂部。 如果您從 pre-3.1.0，升級，您在使用這些擴展，您可能需要更改 `config.xml` 才能像以前一樣繼續白名單組相同的資源檔。

具體來說，這些模式需要更新：

*   " `apache.org` "（無協定）： 這將先前匹配 `http` ， `https` ， `ftp` ，和 `ftps` 的協定。 將更改為" `*://apache.org/*` "，包括所有協定，或都包括一條線為每個您需要支援的協定。

*   " `http://apache.*` "（萬用字元域的末尾）： 這以前將匹配所有頂級-級別-域，包括所有可能的兩個字母 Tld （但不是有用的域喜歡.co.uk)。 為每個 TLD，您實際上控制，並且需要到白名單中包括一條線。

*   " `h*t*://ap*he.o*g` "（隨機丟失信件的萬用字元）： 這些都不再支援 ； 變化，包括一條線的每個域，協定，你實際上需要到白名單中。

## Windows Phone 白名單

Windows Phone 8 的白名單規則發現在應用程式中的 `config.xml` 檔。

## Tizen 白名單

白名單規則發現在應用程式中的 `config.xml` 檔。 該平臺依賴于相同 `subdomains` 屬性作為黑莓平臺。 （有關支援的詳細資訊，請參閱 Tizen 的文檔[訪問元素][10]上.)

 [10]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm
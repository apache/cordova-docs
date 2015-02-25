* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 白名單指南

域白名單是一種控制訪問的安全模型向外部域，您的應用程式已不能控制。 科爾多瓦的預設安全性原則允許訪問的任何網站。 在移動之前您在生產中的應用，應制訂白名單和允許訪問特定的網路域和子域。

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

要知道有些網站可以自動從其主頁定向到不同的 url，例如，使用 HTTPs 協定或具體國家域。 例如 HTTP://www.google.com 將重定向在 HTTPs://www.google.com，使用 SSL/TLS，然後可能進一步將重定向到一個地理位置，例如 HTTPs://www.google.co.uk。 這樣的場景可能需要修改或額外的白名單的作品可以超越你所需的初期。 請考慮這您構建您的白名單。

請注意白名單僅適用于主要的科爾多瓦 web 視圖，不適用於 InAppBrowser web 視圖或系統 web 瀏覽器中的打開連結。

## 亞馬遜火 OS 白

在 `res/xml/config.xml` 中找到特定于平臺的白名單規則.

## Android 白

在 `res/xml/config.xml` 中找到特定于平臺的白名單規則.

**注**： 在 Android 2.3 和之前，域白名單只有作品 `href` 的超連結，不引用資源 （如圖像和腳本。 採取措施，避免被注入到應用程式中的腳本。

**注**： 為了防止外部 Url 如 `mailto:` 從科爾多瓦到科爾多瓦 3.6.0 版 web 視圖中打開指定 `origin="*"` 含蓄將添加 HTTP 和 HTTPs 協定的規則。 如果您需要訪問附加的自訂協定，然後您應該還添加他們明確到白名單中。 也見下文"外部應用程式白名單"上啟動外部應用程式的 URL 的詳細資訊。

**注意**： 有些網路請求不經過科爾多瓦白名單。 這包括 < 視頻 > 和 < 音訊 > 資源、 WebSocket 連接 （關於 Android 4.4 +） 和其他可能的非 HTTP 請求。 Android 4.4 +，您可以在 HTML 文檔，以限制對這些資源的訪問包括 [CSP][8] 的標頭。 較早版本的 android 系統，它不可能對他們進行限制。

 [8]: https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy

### 外部應用程式白名單

科爾多瓦 3.6.0 版介紹了第二個白名單中，限制允許使用 Url 來啟動外部應用程式。 在以前版本的科爾多瓦，所有的非 HTTP Url，如 `mailto:`、 `geo：`，`sms` 和 `intent`，被隱式允許 < > 標記的目標。 由於洩漏資訊中的應用潛力，如果一個 XSS 漏洞，使得攻擊者能夠構建任意的連結，這些 Url 必須列入白名單，以及科爾多瓦 3.6.0 版開始。

若要允許啟動外部應用程式的 URL 模式，請使用在 `config.xml` 檔中，設置了 `launch-external` 屬性的 <access> 標記。

例子：

*   若要允許發送 SMS 消息的連結：
    
        <access origin="sms:*" launch-external="yes" />
        

*   若要允許連結打開映射：
    
        <access origin="geo:*" launch-external="yes" />
        

*   若要允許在外部瀏覽器中打開的連結的連結：
    
        <access origin="http://example.com/*" launch-external="yes" />
        

*   允許在外部瀏覽器中打開的所有非白名單網站： （這是先前的行為，非白名單的 url 相同）
    
        <access origin="http://*" launch-external="yes" />
        <access origin="https://*" launch-external="yes" />
        

*   若要允許訪問所有的 url，恢復到科爾多瓦 3.5.0 政策 （不推薦）：
    
        <access origin="*" launch-external="yes" />
        

當導航到一個 URL 從應用程式內，內部白名單第一，測試，如果 URL 未有列入白名單，然後測試外部的白名單。 這意味著，任何 `HTTP:` 或 `HTTPs：` 匹配這兩個白名單的 Url 在科爾多瓦的應用程式，將會打開，而不是啟動外部瀏覽器。

## iOS 白名單

該平臺的白名單規則是命名的應用程式目錄的 `config.xml` 檔中找到的。

起源一種協定，例如 `www.apache.org`，而不是 `HTTP://www.apache.org`，沒有指定預設為所有的 `HTTP`、 `HTTPs`、 `ftp`、 和 `ftps` 的計畫。

萬用字元在 iOS 平臺上的是比在 [W3C 部件訪問][1] 規範更加靈活。 例如，以下訪問所有子域和頂層網域名 `.com` 和 `.net` 等：

        <access origin="*.google.*" />
    

與上文提到的導航到非白名單通過 `href` 域的 Android 平臺不同的是 iOS 上的超連結防止頁面打開根本。

## 黑莓 10 白名單

在 `www/config.xml` 中找到白名單規則.

黑莓 10年使用萬用字元有別于其他平臺兩種方式：

*   通過訪問任何內容 `XMLHttpRequest` 必須顯式聲明。 設置 `origin="*"` 不能在這種情況下。 另外，所有 web 安全性可能會都禁用使用 `WebSecurity` 偏好黑莓手機配置中所述：
    
        <preference name="websecurity" value="disable" />
        

*   作為替代設置 `*.domain` ，設置附加 `subdomains` 歸因於 `true` 。 應將其設置為 `false` ，預設情況。 例如，以下允許訪問 `google.com` ， `maps.google.com` ，和 `docs.google.com` ：
    
        <access origin="http://google.com" subdomains="true" />
        
    
    以下縮小訪問到 `google.com` ：
    
        <access origin="http://google.com" subdomains="false" />
        
    
    指定訪問到所有的域，包括當地 `file://` 協定：
    
    <access origin="*" subdomains="true" />

（有關支援的詳細資訊，請參閱黑莓的文檔 [訪問元素][9] 上.)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## 火狐瀏覽器作業系統

火狐瀏覽器作業系統特定的域還有白名單沒有概念。 相反，有特殊的許可權稱為 [SystemXHR][10]。 有必要將此許可權添加到 `config.xml`：

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

`XMlHttpRequest` 物件需要使用兩個參數 `mozAnon` 和 `mozSystem` 進行具現化：

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

此解決方案是透明的因此沒有其他平臺的區別。

## 3.1.0 iOS 變化

在 3.1.0 版之前, 科爾多瓦 iOS 包括一些非標準的擴展到其他科爾多瓦平臺都支援的域 whilelisting 方案。 截至 3.1.0、 iOS 白名單現在符合本文檔前面所述的資源白名單語法。 如果您從預 3.1.0、 升級和使用這些擴展，必須更改 `config.xml` 檔才能繼續白名單相同的資源作為前集。

具體而言，這些模式需要更新：

*   " `apache.org` "（沒有協定）： 這將以前匹配 `http` ， `https` ， `ftp` ，和 `ftps` 協定。 將更改為" `*://apache.org/*` "，包括所有協定，或都包括一條線為每個您需要支援的協定。

*   " `http://apache.*` "（萬用字元域的末尾）： 這以前將匹配所有頂級-級別-域，包括所有可能的兩個字母 Tld （但不是有用的域喜歡。 co.uk）。 為每個 TLD，您實際上控制，並且需要到白名單中包括一條線。

*   " `h*t*://ap*he.o*g` "（隨機丟失信件的萬用字元）： 這些都不再支援 ； 變化，包括一條線為每個域，協定，你實際上需要到白名單中。

## Windows Phone 白名單

Windows Phone 8 的白名單規則是在應用程式的 `config.xml` 檔中找到的。

## 泰白名單

白名單規則是在應用程式的 `config.xml` 檔中找到的。 平臺依靠相同的 `子域` 屬性作為黑莓平臺。 （有關支援的詳細資訊，請參閱 Tizen 的文檔 [訪問元素][11] 上.)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm
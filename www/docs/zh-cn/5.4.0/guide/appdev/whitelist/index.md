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

域白名單是一種控制訪問的安全模型向外部域，您的應用程式已不能控制。 科爾多瓦提供了一個可配置的安全性原則來定義可以訪問外部網站。 預設情況下，新的應用程式被配置為允許訪問任何網站。 在您的應用程式到生產之前，應制訂白名單和允許訪問特定的網路域和子域。

對於 Android 和 iOS （如其 4.0 的版本），科爾多瓦的安全性原則是可擴展的通過一個外掛程式介面。 您的應用程式應使用 [cordova-plugin-whitelist][1]，因為它提供了更好的安全性和可配置性比早期版本的科爾多瓦。 雖然有可能實現自己的白名單外掛程式，它不建議除非您的應用程式有非常具體的安全性原則要求。 有關用法和配置，請參閱 [cordova-plugin-whitelist][1] 的詳細資訊。

 [1]: https://github.com/apache/cordova-plugin-whitelist

對於其他平臺，科爾多瓦遵循 [W3C 部件訪問][2] 規範，這依賴于應用程式的 `config.xml` 檔以啟用對特定域的網路訪問中的 `<access>` 元素。 對於依賴于描述在命令列介面的 CLI 工作流程的專案，此檔位於專案的頂級目錄。 否則對於特定于平臺的發展路徑，以下各節列出的位置。 （每個平臺上見各種平臺指南的詳細資訊）。

 [2]: http://www.w3.org/TR/widgets-access/

下面的示例演示 `<access>` 白名單語法：

*   [Google.com][3]訪問：
    
        <access origin="http://google.com" />
        

*   對安全[google.com][4]的訪問 ( `https://` ):
    
        <access origin="https://google.com" />
        

*   子域[maps.google.com][5]訪問：
    
        <access origin="http://maps.google.com" />
        

*   對所有子域[google.com][3]，例如[mail.google.com][6]和[docs.google.com][7]的訪問：
    
        <access origin="http://*.google.com" />
        

*   到*所有*的域，例如， [google.com][3]和[developer.mozilla.org][8]的訪問：
    
        <access origin="*" />
        
    
    這是新創建的 CLI 專案的預設值。

 [3]: http://google.com
 [4]: https://google.com
 [5]: http://maps.google.com
 [6]: http://mail.google.com
 [7]: http://docs.google.com
 [8]: http://developer.mozilla.org

要知道有些網站可以自動從其主頁定向到不同的 url，例如，使用 HTTPs 協定或具體國家域。 例如 HTTP://www.google.com 將重定向在 HTTPs://www.google.com，使用 SSL/TLS，然後可能進一步將重定向到一個地理位置，例如 HTTPs://www.google.co.uk。 這樣的場景可能需要修改或額外的白名單的作品可以超越你所需的初期。 請考慮這您構建您的白名單。

請注意白名單僅適用于主要的科爾多瓦 web 視圖，不適用於 InAppBrowser web 視圖或系統 web 瀏覽器中的打開連結。

## 亞馬遜火 OS 白

在 `res/xml/config.xml` 中找到特定于平臺的白名單規則.

## Android 白

如上所述，看到 [cordova-plugin-whitelist][1] 的詳細資訊。科爾多瓦 android 4.0.0 之前，請參閱本文檔的舊版本。

## iOS 白名單

如上所述，看到 [cordova-plugin-whitelist][1] 的詳細資訊。科爾多瓦 ios 4.0.0 之前，請參閱本文檔的舊版本。

## 黑莓 10 白名單

在 `www/config.xml` 中找到白名單規則.

黑莓 10年使用萬用字元有別于其他平臺兩種方式：

*   必須顯式聲明由 `XMLHttpRequest` 訪問的任何內容。 設置 `origin="*"` 不能在這種情況下。 或者，可能使用黑莓手機配置中所述的 `WebSecurity` 偏好禁用所有 web 安全性：
    
        <preference name="websecurity" value="disable" />
        

*   作為設置 `*.domain` 的替代方法，將其他 `subdomains` 屬性設置為 `true`。 它應該被預設設置為 `false`。 例如，下面的允許訪問 `google.com`，`maps.google.com` 和 `docs.google.com`：
    
        <access origin="http://google.com" subdomains="true" />
        
    
    `Google.com` 以下縮小存取權限：
    
        <access origin="http://google.com" subdomains="false" />
        
    
    指定訪問到所有的域，包括本地 `file://` 協定：
    
        <access origin="*" subdomains="true" />
        

（有關支援的詳細資訊，請參閱黑莓的文檔 [訪問元素][9] 上.)

 [9]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## 火狐瀏覽器作業系統

火狐瀏覽器作業系統特定的域還有白名單沒有概念。 相反，有特殊的許可權稱為 [SystemXHR][10]。 有必要將此許可權添加到 `config.xml`：

 [10]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Permissions

    <platform name="firefoxos">
        <permission name="systemXHR" privileged="true" description="load data from server" />
    </platform>
    

`XMLHttpRequest` 物件需要使用兩個參數 `mozAnon` 和 `mozSystem` 進行具現化：

    var request = new XMLHttpRequest({
        mozAnon: true,
        mozSystem: true});
    

此解決方案是透明的因此沒有其他平臺的區別。

## Windows Phone 白名單

Windows Phone 8 的白名單規則是在應用程式的 `config.xml` 檔中找到的。

## 泰白名單

白名單規則是在應用程式的 `config.xml` 檔中找到的。 平臺依靠相同的 `subdomains` 屬性作為黑莓平臺。 （有關支援的詳細資訊，請參閱 Tizen 的文檔 [訪問元素][11] 上.)

 [11]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm
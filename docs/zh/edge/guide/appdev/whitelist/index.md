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

# Whitelist Guide

域白是一种安全模式，控制访问到您应用程序有没有控制的外部域。 科尔多瓦的默认安全策略允许访问的任何站点。 在移动之前您在生产中的应用，应制订白名单和允许访问特定的网络域和子域。

科尔多瓦遵循[W3C 构件访问][1]规范，它依赖于 `<access>` 中应用程序的元素 `config.xml` 文件以启用对特定域的网络访问。 对于依赖于所述的命令行界面 CLI 工作流的项目，此文件位于项目的顶级目录。 否则为特定于平台的发展道路，位置列出以下各节。 （每个平台上见各种平台指南的详细信息）。

 [1]: http://www.w3.org/TR/widgets-access/

下面的示例演示白名单中的语法：

*   [Google.com][2]访问：
    
        <access origin="http://google.com" />
        

*   对安全[google.com][3]的访问 ( `https://` ):
    
        <access origin="https://google.com" />
        

*   子域[maps.google.com][4]访问：
    
        <access origin="http://maps.google.com" />
        

*   对所有子域[google.com][2]，例如[mail.google.com][5]和[docs.google.com][6]的访问：
    
        <access origin="http://*.google.com" />
        

*   到*所有*的域，例如， [google.com][2]和[developer.mozilla.org][7]的访问：
    
        <access origin="*" />
        
    
    这是新创建的 CLI 项目的默认值。

 [2]: http://google.com
 [3]: https://google.com
 [4]: http://maps.google.com
 [5]: http://mail.google.com
 [6]: http://docs.google.com
 [7]: http://developer.mozilla.org

## 亚马逊火 OS 白

在找到特定平台白规则`res/xml/config.xml`.

## Android 白

在找到特定平台白规则`res/xml/config.xml`.

**注**： 在 Android 2.3 上和之前，域白仅适用于 `href` 的超链接，不引用的资源，如图像和脚本。 采取步骤，避免从被注入到应用程序的脚本。

导航到非白名单域通过 `href` 的超链接会导致要打开默认浏览器中，而不是在应用程序中的页。（比较这到下面提到的 iOS 的行为)。

## iOS 白

该平台的白规则命名的应用程序目录中找到 `config.xml` 文件。

没有一个协议，如指定的起源 `www.apache.org` 而不是 `http://www.apache.org` ，默认为所有的 `http` ， `https` ， `ftp` ，和 `ftps` 计划。

在 iOS 平台上的通配符是比在[W3C 构件访问][1]规范更灵活。 例如，以下访问所有子域和顶级域如 `.com` 和 `.net` ：

        <access origin="*.google.*" />
    

与上文指出的对非白名单域通过导航的 Android 平台不同的是 `href` iOS 上的超链接可以防止页面打开在所有。

## 黑莓 10 白

在找到白规则`www/config.xml`.

黑莓 10 位使用通配符有别于其他平台两种方式：

*   通过访问任何内容 `XMLHttpRequest` 必须显式声明。 设置 `origin="*"` 不在这种情况下工作。 另外，所有 web 安全性可能会都禁用使用 `WebSecurity` 黑莓手机配置中所述的首选项：
    
        <preference name="websecurity" value="disable" />
        

*   作为替代设置 `*.domain` ，设置附加 `subdomains` 属性为 `true` 。 它应设置为 `false` ，默认情况。 例如，以下允许访问 `google.com` ， `maps.google.com` ，和 `docs.google.com` ：
    
        <access origin="http://google.com" subdomains="true" />
        
    
    以下缩小访问到 `google.com` ：
    
        <access origin="http://google.com" subdomains="false" />
        
    
    指定访问到所有的域，包括本地 `file://` 协议：
    
    <access origin="*" subdomains="true" />

(有关支持的详细信息，请参阅黑莓的文档[访问元素][8]上.)

 [8]: https://developer.blackberry.com/html5/documentation/ww_developing/Access_element_834677_11.html

## 3.1.0 的 iOS 变化

之前 3.1.0 版，科尔多瓦 iOS 包括一些非标准扩展域 whilelisting 计划其他科尔多瓦平台都支持的。 自 3.1.0、 iOS 白名单现在符合资源白名单语法描述了本文档的顶部。 如果您从 pre-3.1.0、 升级和使用这些扩展，您可能需要更改 `config.xml` ，以前一样继续白组相同的资源文件。

具体而言，这些模式需要更新：

*   " `apache.org` "（无协议）： 这将先前匹配 `http` ， `https` ， `ftp` ，和 `ftps` 的协议。 将更改为" `*://apache.org/*` "，包括所有协议，或都包括您需要支持的每个协议的线。

*   " `http://apache.*` "（通配符域的一端）： 这将先前匹配的所有顶级-级别-域，包括所有可能的两个字母 Tld （但不是有用域喜欢。 co.uk)。 为每个 TLD，您实际上控制，并且需要到白名单中包括一条线。

*   " `h*t*://ap*he.o*g` "（通配符为随机丢失信件）： 不再支持这些 ； 更改包含一条线的每个域和协议，您实际上需要到白名单中。

## Windows Phone 白

Windows Phone 7 和 8 的白规则发现在应用程序中的 `config.xml` 文件。

## Tizen 白

白规则发现在应用程序中的 `config.xml` 文件。 在平台上同样依赖于 `subdomains` 属性作为黑莓平台。 (有关支持的详细信息，请参阅 Tizen 的文档[访问元素][9]上.)

 [9]: https://developer.tizen.org/help/index.jsp?topic=%2Forg.tizen.web.appprogramming%2Fhtml%2Fide_sdk_tools%2Fconfig_editor_w3celements.htm
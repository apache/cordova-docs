---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# iOS 外掛程式

此部分提供了如何在 iOS 平臺上實現本機外掛程式代碼的詳細資訊。 之前讀這篇文章，請參閱應用程式外掛程式外掛程式的結構和其共同的 JavaScript 介面的概述。 這一節繼續表明通信從科爾多瓦 web 視圖的本機平臺和後面的示例*回聲*外掛程式。

IOS 外掛程式作為擴展目標 C 類實現 `CDVPlugin` 類。 對於 JavaScript 的 `exec` 方法的 `service` 參數將映射到一個目標 C 類，每個外掛程式必須註冊為 `<feature>` 標記命名的應用程式目錄中 `config.xml` 檔。

## 外掛程式類映射

一個外掛程式的 JavaScript 部分使用 `cordova.exec` 方法，如下所示：

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

這封送一個請求從 `UIWebView` 到 iOS 本機一側，有效地調用 `action` 方法在 `service` 類，傳入的參數中的 `args` 陣列。

指定作為外掛程式 `<feature>` 科爾多瓦 iOS 應用程式專案中的標記 `config.xml` 檔，使用 `plugin.xml` 檔來自動應用程式外掛程式中所述注入此標記：

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

該功能的 `name` 屬性應匹配您所指定的作為 JavaScript `exec` 調用的 `service` 參數。 `value`屬性應與外掛程式的目標 C 類的名稱相匹配。 `<param>`元素的 `name` 應始終是 `ios-package` 。 如果你不遵守這些準則，該外掛程式可能會編譯，但科爾多瓦可能仍然不能夠訪問它。

## 外掛程式初始化和存留期

外掛程式物件的一個實例創建為生活的每個 `UIWebView` 。 首先從 JavaScript 的調用的引用時，通常被具現化外掛程式。 否則他們可以通過設置具現化 `param` 命名為 `onload` 到 `true` 在 `config.xml` 檔：

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

有*沒有*指定外掛程式的初始值設定項。相反，應使用外掛程式 `pluginInitialize` 為其啟動邏輯方法。

外掛程式需要長時間運行的請求，如媒體重播、 聽眾，保持內部狀態應執行的背景活動 `onReset` 方法來清理這些活動。 在方法運行時 `UIWebView` 定位到新的一頁或刷新，重新載入 JavaScript。

## 寫作 iOS 科爾多瓦外掛程式

JavaScript 調用觸發外掛程式請求到本機的一邊，和相應的 iOS 目標 C 外掛程式映射正確地在 `config.xml` 檔中，但最後 iOS 目標 C 外掛程式類看起來像什麼？ 無論派往與 JavaScript 的外掛程式 `exec` 函數傳遞到相應的外掛程式類的 `action` 方法。 外掛程式的方法有此簽名：

        - (void)myMethod:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* myarg = [command.arguments objectAtIndex:0];
    
            if (myarg != nil) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
            }
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }
    

有關更多詳細資訊，請參見 `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` ， `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` ，和`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult 訊息類型

您可以使用 `CDVPluginResult` 來返回結果的多種類型回 JavaScript 回呼函數，使用類的方法，它們遵循這種模式：

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

您可以創建 `String` ， `Int` ， `Double` ， `Bool` ， `Array` ， `Dictionary` ， `ArrayBuffer` ，和 `Multipart` 類型。 你可以也離開了任何參數來發送狀態，或返回錯誤，或甚至選擇不發送任何外掛程式的結果，在這種情況下既不回撥火。

請注意以下複雜的傳回值為：

*   `messageAsArrayBuffer`預計 `NSData*` 並將轉換為 `ArrayBuffer` 在 JavaScript 回檔。 同樣，任何 `ArrayBuffer` JavaScript 發送到一個外掛程式都將轉換為`NSData*`.

*   `messageAsMultipart`預計， `NSArray*` 包含任何其他支援類型，並將發送整個陣列作為 `arguments` 給您的 JavaScript 回檔。 這種方式，所有參數在序列化或反序列化作為必要的所以它是能夠安全返回 `NSData*` 作為多部分，但不是 `Array` /`Dictionary`.

## 回聲 iOS 外掛程式示例

若要匹配的 JavaScript 介面*回波*特徵描述的應用程式外掛程式，使用 `plugin.xml` 來注入 `feature` 到本地平臺規範 `config.xml` 檔：

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

然後我們將添加以下 `Echo.h` 和 `Echo.m` 檔到 `Plugins` 內科爾多瓦 iOS 應用程式目錄的資料夾：

        /********* Echo.h Cordova Plugin Header *******/
    
        #import <Cordova/CDV.h>
    
        @interface Echo : CDVPlugin
    
        - (void)echo:(CDVInvokedUrlCommand*)command;
    
        @end
    
        /********* Echo.m Cordova Plugin Implementation *******/
    
        #import "Echo.h"
        #import <Cordova/CDV.h>
    
        @implementation Echo
    
        - (void)echo:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* echo = [command.arguments objectAtIndex:0];
    
            if (echo != nil && [echo length] > 0) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
            }
    
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }
    
        @end
    

在檔的頂部必要的進口商品擴展從類 `CDVPlugin` 。 在這種情況下，該外掛程式只支援單個 `echo` 行動。 它獲取 echo 字串通過調用 `objectAtIndex` 方法獲取的第一個參數 `arguments` 對應于參數的陣列通過 JavaScript 在 `exec()` 函數。

它會檢查該參數，以確保它不是 `nil` 或空字串，返回 `PluginResult` 與 `ERROR` 如果是這樣的狀態。 如果該參數通過檢查，它返回 `PluginResult` 與 `OK` 狀態，在原始中傳遞 `echo` 的字串。 最後，它將發送結果到 `self.commandDelegate` ，其中執行 `exec` 方法的成功或失敗回檔 JavaScript 一邊。 如果成功回檔被調用，它將通過在 `echo` 參數。

## iOS 一體化

`CDVPlugin`類功能其他你的外掛程式可以重寫的方法。 例如，您可以捕獲 `pause` ， `resume` ，應用程式終止和 `handleOpenURL` 事件。 請參見[CDVPlugin.h][1]和[CDVPlugin.m][2]類的指導。

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## 執行緒

外掛程式方法通常在主介面相同的執行緒中執行。 如果你的外掛程式需要大量的處理，或者需要一個阻塞調用，則應使用後臺執行緒。 例如：

        - (void)myPluginMethod:(CDVInvokedUrlCommand*)command
        {
            // Check command.arguments here.
            [self.commandDelegate runInBackground:^{
                NSString* payload = nil;
                // Some blocking logic...
                CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
                // The sendPluginResult method is thread-safe.
                [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
            }];
        }
    

## 調試 iOS 外掛程式

若要調試的目標 C 一邊，你需要 Xcode 的內置調試器。 對於 JavaScript，在 iOS 5.0 可以使用[Weinre、 Apache 科爾多瓦專案][3]或[iWebInspector、 一個協力廠商實用程式][4]。 Ios 6，您可以向您的應用程式運行在 iOS 6 模擬器附加 Safari 6.0。

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## 常見的陷阱

*   別忘了添加到您的腳本映射 `config.xml` 。如果你忘記了，是在 Xcode 主控台中記錄錯誤。

*   別忘了添加任何主機，您在白名單中，連接到域白名單指南中所述。如果你忘記了，是在 Xcode 主控台中記錄錯誤。
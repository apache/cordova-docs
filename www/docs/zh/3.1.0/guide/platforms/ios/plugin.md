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

title: iOS 外掛程式
---

# iOS 外掛程式

外掛程式是一個擴展的目標 C 類 `CDVPlugin` 類。

每個外掛程式類必須註冊為 `<feature>` 中標籤的 `config.xml` 檔。 正是通過這一機制的 JavaScript `exec` 方法的 `service` 參數將映射到目標 C 類。

## 外掛程式類映射

一個外掛程式的 JavaScript 部分始終使用 `cordova.exec` 方法，如下所示：

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

這封送一個請求從 `UIWebView` 到 iOS 本機側，更或較不沸騰到調用 `action` 方法 `service` 類，傳入的參數中的 `args` 陣列。

指定外掛程式作為 `<feature>` 在科爾多瓦 iOS 應用程式專案中的標記 `config.xml` 檔。

    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>
    

功能 `name` 屬性應匹配您在 JavaScript 中使用 `exec` 調用的 `service` 參數，和 `value` 屬性應與外掛程式的目標 C 類的名稱相匹配。 `<param name>`應始終是我 `"ios-package"` 。 如果不遵循此安裝程式，該外掛程式可能編譯，但不是會到達科爾多瓦。

## 外掛程式初始化和存留期

外掛程式物件的一個實例創建為生活的每個 `UIWebView` 。 外掛程式不會具現化之前他們第一次引用通過調用從 JavaScript，除非 `<param>` 與 `onload` `name` 屬性設置為 `"true"` 的 `config.xml` 。 例如：

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
        <param name="onload" value="true" />
    </feature>
    

有*沒有*指定外掛程式的初始值設定項。相反，應使用外掛程式 `pluginInitialize` 他們開辦的邏輯方法。

長時間運行的請求，外掛程式背景活動 （例如，播放的媒體），聽眾或內部狀態應執行 `onReset` 方法和停止或清理這些活動。 這種方法運行時 `UIWebView` 定位到新的一頁或刷新，重新載入 JavaScript。

## 寫作 iOS 科爾多瓦外掛程式

我們有外掛程式請求到本機端 JavaScript 起火燃燒。 我們有通過正確映射的目標 C 的 iOS 外掛程式 `config.xml` 檔。 所以最後的 iOS 目標 C 外掛程式類長什麼樣子？

什麼獲取調度到該外掛程式通過 JavaScript 的 `exec` 函數獲取傳遞到相應的外掛程式類的 `action` 方法。外掛程式的方法有此簽名：

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
    

1.  [CDVInvokedUrlCommand.h][1]

2.  [CDVPluginResult.h][2]

3.  [CDVCommandDelegate.h][3]

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h
 [3]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h

## iOS CDVPluginResult 訊息類型

使用 CDVPluginResult 可以返回結果類型的各種回您的 JavaScript 回呼函數，使用看起來像的類方法：

    + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

您可以創建 `String` ， `Int` ， `Double` ， `Bool` ， `Array` ， `Dictionary` ， `ArrayBuffer` ，和 `Multipart` 類型。 或者，不附加任何參數 (只是發送狀態)。 或者，返回一個錯誤。 你甚至可以選擇不發送任何外掛程式的結果，在這種情況下不會觸發回檔。

### 備註

*   `messageAsArrayBuffer`預計 `NSData*` 並將轉換為 `ArrayBuffer` 為您的 JavaScript 回檔 （和 `ArrayBuffers` 從 JavaScript 發送到一個外掛程式都將轉換為`NSData*`).
*   `messageAsMultipart` 預計 `NSArray *` 包含任何其他支援類型，並將整個陣列作為發送 `參數` 給您的 JavaScript 回檔。 
    *   怪癖： 這不是只是語法糖 （儘管它是甜的）。 這種方式，所有參數序列化或反序列化，必要時。 例如，它是能夠安全返回 `NSData*` 作為多部分，但不是 `Array` /`Dictionary`.

## Echo 外掛程式 iOS 外掛程式

我們會將以下內容添加到該專案的 `config.xml` 檔：

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
    </feature>
    

然後我們將添加下列檔 （ `Echo.h` 和 `Echo.m` ） 到我們科爾多瓦 iOS 應用程式目錄裡面的外掛程式目錄：

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
    

讓我們看看代碼。在頂部，我們有所有必要的科爾多瓦進口。我們班延伸從 `CDVPlugin` （非常重要）。

此外掛程式只支援一個操作， `echo` 的行動。 第一，我們抓住 echo 字串使用 `objectAtIndex` 方法上的我們 `args` ，告訴它我們想要獲取的參數陣列中的第十的參數。 我們做一些參數檢查： 請確保它不是 `nil` ，並確保它不是一個零長度的字串。

如果是，我們返回 `PluginResult` 與 `ERROR` 狀態。 如果所有這些檢查通過，然後我們將返回 `PluginResult` 與 `OK` 狀態，並通過在 `echo` 我們收到了在第一位作為參數的字串。

最後，我們發送結果到 `self.commandDelegate` ，其中執行 `exec` 方法的成功或失敗回檔 JavaScript 一邊。 如果成功回檔被調用，它將通過在 `echo` 參數。

## 執行緒

在相同的 UI 執行緒中執行的外掛程式方法。如果你的外掛程式需要大量的處理，或者需要一個阻塞調用，則應使用後臺執行緒。例如：

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
    

## 高級的外掛程式功能

請參閱其他方法時，您可以在重寫：

*   [CDVPlugin.h][4]

*   [CDVPlugin.m][5]

 [4]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [5]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

例如，你可以掛接到 `pause` ， `resume` ，應用程式終止和 `handleOpenURL` 事件。

## 調試外掛程式

若要調試的目標 C 側，您將使用 Xcode 的內置調試器。 對於 JavaScript，在 iOS 5.0 可以使用[Weinre、 Apache 科爾多瓦專案][6]或[iWebInspector、 一個協力廠商實用程式][7]

 [6]: https://github.com/apache/cordova-weinre
 [7]: http://www.iwebinspector.com/

Ios 6，您將使用 Safari 6.0 將簡單地附加到您的應用程式運行在 iOS 6 模擬器。

## 常見的陷阱

*   別忘了向 config.xml 添加您的腳本映射。如果你忘記了，是在 Xcode 主控台中記錄錯誤。

*   別忘了添加任何主機，您在白名單中，連接到域白名單指南中所述。如果你忘記了，是在 Xcode 主控台中記錄錯誤。
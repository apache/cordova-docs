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

title: Windows 外掛程式
---

# Windows 外掛程式

此部分提供了如何在 Windows 應用商店應用程式中實現一個使用的外掛程式的詳細資訊。之前讀這篇文章，請參閱應用程式外掛程式外掛程式的結構和其共同的 JavaScript 介面的概述。 這一節繼續顯示示例*回聲*外掛程式從科爾多瓦 web 視圖的本機平臺和背部進行通信。

很重要的是要注意 Windows 支援直接在 JAVAscript 中，這意味著發展中國家的 '本土' 的部分，只需要在特殊情況下發展。

## 在 JavaScript 中創建一個 Windows 外掛程式

這些指令是要創建一個純 JavaScript 外掛程式。理解這一點對於理解如何添加本機/託管位至關重要。

Windows 科爾多瓦外掛程式是本質上是一個薄包裝周圍現有 WinJS 提供的功能，但假設你會想要定義為多個設備你 JS 通用介面，你通常會提供 API 的 1 JS 檔。

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }
    

## 在 Windows 上的裡面科爾多瓦 exec。

Cordova.exec 函數以不同的方式定義的每個平臺上，這是因為每個平臺都有它自己的應用 js 代碼和本機包裝代碼之間進行通信的方式。 但在 Windows 中，有沒有本地的包裝，所以 exec 調用有一致性。 就像你可以直接在 EchoPlugin.echo，你 js 只有外掛程式工作：

    // inside file echoplugin.js ( this is what NOT to do if you want to reuse the JS API cross platform )
    var EchoPlugin = {
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    }
    

這將可能會做工精細，但是它意味著您將需要為不同的平臺，不同版本的 echoPlugin.js，可能你可以在你的實現中有不一致的問題。 作為最佳實踐，我們決定模仿 cordova.exec 上窗戶，裡面的本機 API，所以我們可以運行相同的 JS 代碼，並不需要重寫一遍為平臺，和也利用檢查，任何參數或其他常見的代碼，由開發人員在其他平臺上工作的人員提供。

## 科爾多瓦 exec 代理

在 Windows 上，科爾多瓦提供一個代理，您可以使用來註冊一個物件，它將處理所有的 cordova.exec 調用的 API。

例如如果你想要為加速度感應器 API 提供實現，你會這樣做：

cordova.commandProxy.add ("加速度"{開始： function() {/ / 你代碼在這裡......}/ /......，其餘的在這裡的 API}） ；

所以在我們的例子中，我們將假設中 echoplugin.js 的代碼處理跨平臺相關，JavaScript，和我們可以只編寫 Windows 的代理

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    });
    

外掛程式定義

如果我們希望我們的外掛程式的使用者能夠輕鬆地安裝我們的外掛程式，我們需要定義根據 PlugMan 是如何定義的外掛程式。 更多關於這在[外掛程式規範][1]

 [1]: plugin_ref_spec.md.html#Plugin%20Specification

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.1.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

這給了我們 Windows JavaScript 外掛程式，使用一個通用的檔 （echoplugin.js） 和使用代理伺服器提供實施 （echopluginProxy.js） 的 Windows 只有部分工作。 我們怎麼做將本機/託管代碼添加到這？ 好吧我們要開始相同，唯一的區別將在 echopluginProxy 方法中我們做裡面。

# WinJS 如何訪問本機/託管代碼

在 Windows 中，WinJS 編寫的應用程式都能夠與本機代碼進行交互，這間的 op 是供 Windows 運行時元件。 細節很多，和本指南只會掩蓋基本知識。 Microsoft 提供了更多的資訊[在這裡][2].

 [2]: http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx

當您創建您的 Windows 運行時元件，任何類被定義為 '公共 ref 類密封' 被認為是 '可啟動班'，將可從 JavaScript 調用。

    // in your header file .h
    namespace EchoRuntimeComponent
    {
        public ref class EchoPluginRT sealed 
        {
            public:
            static Platform::String^ Echo(Platform::String^ input);
        }
    }
    
    // in the implementation file .cpp
    using namespace EchoRuntimeComponent;
    using namespace Platform;
    
    Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
    {
        if(input->IsEmpty()) 
        {
            return "Error: input string is empty.";
        }
        else
        {
            return input->ToString() + "echo";
        }
    }
    

現在為了讓我們來調用本機代碼，我們使用的命名空間、 類名和 lowerCamelCase 我們正在調用的方法。

var res = EchoRuntimeComponent.EchoPluginRT.echo("boom") ；我們將這移動到我們的 echopluginProxy.js 檔，得到這個：

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        }
    });
    

就是這樣，我們在 Apache Cordova Windows 中有使用端到端 c + + 支援 js 調用外掛程式 ！

# 技術的一些注意事項：

*   回檔通常是非同步所以馬上調用回檔可能預計不會由調用方。 在實踐中，如果電話不是非同步，你應該至少使用 javascript 超時強制被稱為非同步回檔。
*   可啟動的類可以做各種各樣的太棒了，像在調度，非同步回檔，通過您自己的物件類型、 陣列、 集合、 重載的方法和更多的事件。 我建議你做你的家庭作業。
*   如果你堅持共同的 Windows Phone 8.0 和 Windows SDK API 呼叫，你將能夠在 Windows Phone 8.0 Apache 科爾多瓦外掛程式中使用相同的運行時元件 （本機或託管的位）。 ~ 敬請期待這一職務。

# 定義你的外掛程式

現在，我們有一個工作的外掛程式，我們需要重新審視從早些時候的外掛程式定義，所以我們可以將其發佈。 我們現在可以作為一種框架添加運行時元件。 注意 WindowsRuntimeComponent 的輸出類型可以是.winmd 或.dll

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.2.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
            <framework src="src/windows/EchoRuntimeComponent.winmd" custom="true"/>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

就是這樣，你現在有一個可分發的外掛程式，你可以與世界分享 ！ 要注意，將框架添加到 Windows 科爾多瓦專案支援最近才加入，所以您將需要確保模具當前你科爾多瓦的一件事。 科爾多瓦 cli 和科爾多瓦 plugman 支援添加刪除本機支援的外掛程式。

> cordova plugin add com.risingj.echoplugin

或

> plugman install --platform windows --plugin com.risingj.echoplugin --project .

https://github.com/purplecabbage/cordova-runtimecomp-echoplug
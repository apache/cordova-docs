— — 許可證： 下一個或多個參與者授權合約許可向阿帕奇軟體基金會 (ASF)。 See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone 外掛程式

此部分提供了如何在 Windows Phone 平臺上實現本機外掛程式代碼的詳細資訊。 之前讀這篇文章，請參閱應用程式外掛程式外掛程式的結構和其共同的 JavaScript 介面的概述。 這一節繼續表明通信從科爾多瓦 web 視圖的本機平臺和後面的示例*回聲*外掛程式。

在 Windows Phone 上的科爾多瓦編寫外掛程式需要科爾多瓦的體系結構的一個基本的瞭解。 科爾多瓦 WP7 組成的 `WebBrowser` ，承載應用程式的 JavaScript 代碼並管理本機 API 呼叫。 您可以擴展 C# `BaseCommand` 類 ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` )，其中附帶了大部分你需要的功能：

1.  選擇您的專案，並按一下滑鼠右鍵，選擇**添加 → 新專案......**如果您願意，您可以添加它到 `Plugins` 資料夾。

2.  選擇**類**和命名為 `Echo.cs` 。 這類名稱必須*完全*匹配你叫什麼指定的服務作為 `cordova.exec()` 的 JavaScript 一邊打電話。

3.  包括基類，這些類執行：
    
        使用 WPCordovaClassLib.Cordova ；使用 WPCordovaClassLib.Cordova.Commands ；使用 WPCordovaClassLib.Cordova.JSON ；
        

4.  擴展您的類從 `BaseCommand` ：
    
        公共類回聲: BaseCommand {/ /......}
        

5.  添加 `echo` 可從 JavaScript 調用的方法：
    
        公共類回聲: BaseCommand {公共 void 回聲 （字串選項） {/ / JS 可調用外掛程式的所有方法必須都有此簽名 ！
                / / 公共返回 void，1 參數是一個字串}}
        

請參閱可用的外掛程式來重寫方法的[BaseCommand.cs][1]類。 例如，該外掛程式可以捕獲 '暫停' 和 '恢復' 事件。

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## 命名空間

不合格的命令的預設命名空間為：

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

如果你想要指定您自己的命名空間，則需要完全限定打電話到 `cordova.exec` 。例如，如果您想要定義您的類 C# 像這樣：

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

JavaScript 會需要調用 `exec` 像這樣：

        cordova.exec (贏、 失敗，"com.mydomain.cordovaExtensions.Echo"，......);
    

## 解釋在 C 中的參數

中討論的示例中應用程式外掛程式，你的外掛程式接收的資料是一個字串，但如果你想要傳遞的字串陣列嗎？ 假設 JavaScript `cordova.exec` 調用指定像這樣：

        cordova.exec （贏了，失敗了，"回聲"、"回聲"、 ["輸入的字串"]） ；
    

值 `options` 的字串傳遞給 `Echo.echo` 方法是 JSON：

        "[\"input string\"]"
    

所有 JavaScript `exec` 參數被傳遞到 C# 中之前, 是 JSON 編碼和所以需要解碼：

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## 通過結果從 C# 對 JavaScript

`BaseCommand`類提供的方法將資料傳遞到 JavaScript 回檔處理常式。如果你只是想要信號沒有附帶結果的成功，你可以簡單地調用：

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

若要傳遞回來的資料，你需要調用 `DispatchCommandResult` 以不同的方式：

        DispatchCommandResult (新 PluginResult （PluginResult.Status.OK，"一切都按計劃，這是一個傳遞給成功處理的結果"）） ；
    

使用一個已編碼的 JSON 字串的結構化的物件資料傳遞回 JavaScript：

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

要發出錯誤的信號，請致電 `DispatchCommandResult` 與 `PluginResult` 物件，其狀態是 `ERROR` ：

        DispatchCommandResult (新 PluginResult （PluginResult.Status.ERROR，"回波信號錯誤"）） ；
    

## 處理序列化錯誤

您的論點，在解釋時 `try` / `catch` 塊可説明遮罩掉壞的輸入。這種模式將出現在整個科爾多瓦 C# 代碼：

        string optVal = null;
    
        try
        {
            optVal = JsonHelper.Deserialize<string[]>(options)[0];
        }
        catch(Exception)
        {
            // simply catch the exception, we handle null values and exceptions together
        }
    
        if (optVal == null)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        }
        else
        {
            // ... continue on to do our work
        }
    

## 外掛程式 XML

下面演示如何使用 `plugin.xml` 檔來指定外掛程式的原始程式碼檔在 Windows Phone 平臺上。 請參閱應用程式外掛程式概述和外掛程式規範有關可用選項的詳細資訊。

*   `<source-file>`元素定義了所有外掛程式資源如*.cs*， *.xaml*， *.xaml.cs*，圖像資產和*.dll*檔的。

*   `<config-file>`元素定義元素注入到一個設定檔。此示例將外掛程式添加到該平臺的 `config.xml` 檔：
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    本示例將添加到連絡人功能 `WMAppManifest.xml` 檔：
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## 調試外掛程式

使用 Visual Studio 調試器來調試外掛程式的 C# 元件。您可以在您的類所公開的方法中的任何設置一個中斷點。

JavaScript 更難在 Windows Phone 上進行調試。您需要使用 `console.log` 來輸出外掛程式的狀態，或告知自己的錯誤。

## 常見的陷阱

*   要小心不要將從 JavaScript 的參數傳遞給本機方面難以作為 JSON 反序列化的。 大多數設備平臺期望的參數傳遞給 `cordova.exec()` 必須是一個陣列，如下所示：
    
        cordova.exec (勝利、 失敗，"ServiceName"、"方法名稱"["這是一個字串"、 54，{文字： '麻煩'}]) ；
        
    
    這可能會導致對 C# 進行解碼一個過於複雜的字串值：
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    相反，考慮將*所有*參數都轉換為字串之前調用 `exec()` ，和每個單獨解碼：
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   通常，最好要在調用之前檢查參數，在 JavaScript 中的 `exec()` 。 這樣做允許您重新使用更多的代碼和各種本機實現拉從外掛程式的不必要的功能。
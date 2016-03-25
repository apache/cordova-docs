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

title: Windows Phone 外掛程式
---

# Windows Phone 外掛程式

在 Windows Phone 上的科爾多瓦編寫外掛程式需要科爾多瓦的體系結構的一個基本的瞭解。 科爾多瓦 WP7 由瀏覽器承載的應用程式的 JavaScript 代碼並管理本機 API 呼叫組成。 有 BaseCommand ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ) 類在 C# 中，您可以擴展，並且它附帶的水管已經為你建的多數。

1.  選擇您的專案，並按一下滑鼠右鍵，選擇**添加 → 新專案......**
    
    *   最好是將它添加到外掛程式目錄中，但它是由你

2.  選擇類和它的名字`Echo.cs`
    
    *   此類必須*確切*名稱匹配你叫成什麼`cordova.exec(win, fail, "Echo", ...)`

3.  包括基類，這些類執行
    
        使用 WPCordovaClassLib.Cordova ；使用 WPCordovaClassLib.Cordova.Commands ；使用 WPCordovaClassLib.Cordova.JSON ；
        

4.  從 BaseCommand 擴展您的類
    
        公共類回聲: BaseCommand {/ /......}
        

5.  添加一個方法，可從 JavaScript 調用
    
        公共類回聲: BaseCommand {公共 void 回聲 （字串選項） {/ / JS 可調用外掛程式的所有方法必須都有此簽名 ！
                / / 公共返回 void，1 參數是一個字串}}
        

## 命名空間

不合格的命令的預設命名空間為：

    Cordova.Extension.Commands 命名空間 {/ /......}
    

如果您想要使用您自己的命名空間，則需要完全限定打電話到 `cordova.exec` 。例如，如果您想要定義您的類 C# 像這樣：

    命名空間 com.mydomain.cordovaExtensions {公共類回聲: BaseCommand {/ /......}}
    

然後，在 JavaScript 中你需要調用 `exec` 像這樣：

    cordova.exec (贏、 失敗，"com.mydomain.cordovaExtensions.Echo"，......);
    

## 解釋您在 C 中的參數

由您的外掛程式方法接收的資料是一個字串值，但在現實中看我們的 JavaScript 代碼，我們看到我們的意圖是要傳遞的字串陣列。 回望我們 JavaScript 調用 `cordova.exec` ，我們看到我們通過 `[str]` ：

    cordova.exec （贏了，失敗了，"回聲"、"回聲"、 ["輸入的字串"]） ；
    

如果我們檢查的選項字串傳遞到我們 `Echo.echo` 方法中，我們看到的值確實是：

    "[\"input string\"]"
    

所有 JavaScript `exec` 參數是 JSON 編碼之前被傳遞到 C#。

如果我們想要將此視為我們期待的字串，我們需要對它進行解碼。我們可以使用簡單的 JSON 反序列化。

    字串 optVal = JsonHelper.Deserialize < string [] > （選項） [0] ；/ / optVal 現在有"輸入字串"的值
    

## 將從 C# 的結果傳遞給 JavaScript

BaseCommand 類的基類提供用於將資料傳遞給您的 JavaScript 回檔處理常式方法。 只是發出信號命令已成功執行，沒有額外的結果資訊需要的時候，你可以簡單地調用：

    DispatchCommandResult() ；/ 調用回與空外掛程式的結果，認為成功的回檔
    

若要傳遞回來的資料，你需要調用不同版本的 `DispatchCommandResult` ：

    DispatchCommandResult (新 PluginResult （PluginResult.Status.OK，"一切都按計劃，這是一個傳遞給成功處理的結果"）） ；
    

將傳遞回 JavaScript 的結構化的物件的資料，應將其編碼為 JSON 字串：

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

如果您需要信號發生了一個錯誤，你可以叫 `DispatchCommandResult` 與 `PluginResult` 物件：

    DispatchCommandResult (新 PluginResult （PluginResult.Status.ERROR，"回波信號錯誤"）） ；
    

## 在序列化中處理錯誤你的外掛程式的 C# 方法

當解釋您的參數，它是使用 try/catch 塊，萬一我們有壞輸入一個好主意。這是一個整個的科爾多瓦 C# 代碼中使用的模式：

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
        // ... 關於繼續做我們的工作}
    

## 外掛程式 XML

這些都是 windows 電話具體例子使用通過檔、 外掛程式規格的更多詳細資訊，請參閱

### `<source-file>`

Windows 電話 `<source-file>` 目前使用元素來定義外掛程式的所有資源 （ie。.cs、.xaml，。 xaml.cs、.dll 和圖像資產等)。

### `<config-file>`

`<config-file>`元素定義了哪些元素得到放入設定檔。例如要將外掛程式添加到平臺 config.xml，你會做這樣的事情：

    < 設定檔 target="config.xml"父 ="/ *">< 功能名稱 ="PluginName">< 參數名稱 ="wp-包"值 ="PluginName"/ >< / 功能 >< / 設定檔 >
    

如果我們想要添加的連絡人的功能到 WMAppManifest.xml，它會看起來像這樣：

    <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
        <Capability Name="ID_CAP_CONTACTS" />
    </config-file>
    

## 高級的外掛程式功能

請參閱其他方法時，您可以在重寫：

*   [BaseCommand.cs][1]

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

例如，你可以掛接到 '[暫停](../../../cordova/events/events.pause.html)' 和 '恢復' 應用程式事件。

### 調試外掛程式

若要調試 C# 側，可以使用 Visual Studio 調試器，只是在公開您的類的方法中的任何設置一個中斷點。

JavaScript 是有點更難在 Windows Phone 上進行調試。您需要使用 `console.log` 來輸出的狀態你的外掛程式，或告知自己的錯誤。

## 常見的陷阱

*   您將傳遞給本機 JavaScript 實現中的參數在決定時要小心。 大多數設備平臺期望 args 傳遞到 cordova.exec 必須是一個陣列，但如果您在此陣列中有不同類型的物件，它變得困難或不可能進行反序列化。
    
        cordova.exec (勝利、 失敗，"ServiceName"、"方法名稱"["這是一個字串"、 54，{文字： '麻煩'}]) ；
        
    
    *   這意味著您的 C# 代碼接收難解碼的字串值，如：
        
            "[\"this 是 string\"、 54，{文字： '麻煩'}]"
            
    
    *   請考慮在調用 exec 之前將所有的參數轉換為字串：
        
            cordova.exec (勝利、 失敗，"ServiceName"、"方法名稱"["這是一個字串"、"54"，"{文字： '麻煩'}"]） ；字串 [] optValues = JsonHelper.Deserialize < string [] > (選項) ；
            

*   它通常是個好主意要做參數在調用之前檢查您的 JavaScript 代碼，在 `exec` 。 這允許您重新使用之間你的外掛程式各種本機實現更多的 JavaScript 代碼。
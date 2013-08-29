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

# Windows Phone 插件

在 Windows Phone 上的科尔多瓦编写插件需要科尔多瓦的体系结构的一个基本的了解。 科尔多瓦 WP7 由浏览器承载的应用程序的 JavaScript 代码并管理本机 API 调用组成。 有 BaseCommand ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ) 类在 C# 中，您可以扩展，并且它附带的水管已经为你建的多数。

1.  选择您的项目，并单击鼠标右键，选择**添加 → 新项目......**
    
    *   最好是将它添加到插件文件夹中，但它是由你

2.  选择类和它的名字`Echo.cs`
    
    *   此类必须*确切*名称匹配你叫成什么`cordova.exec(win, fail, "Echo", ...)`

3.  包括基类，这些类执行
    
        使用 WPCordovaClassLib.Cordova ；使用 WPCordovaClassLib.Cordova.Commands ；使用 WPCordovaClassLib.Cordova.JSON ；
        

4.  从 BaseCommand 扩展您的类
    
        公共类回声: BaseCommand {/ /......}
        

5.  添加一个方法，可从 JavaScript 调用
    
        公共类回声: BaseCommand {公共 void 回声 （字符串选项） {/ / JS 可调用插件的所有方法必须都有此签名 ！
                / / 公共返回 void，1 参数是一个字符串}}
        

## 命名空间

不合格的命令的默认命名空间为：

    Cordova.Extension.Commands 命名空间 {/ /......}
    

如果您想要使用您自己的命名空间，则需要完全限定打电话到 `cordova.exec` 。例如，如果您想要定义您的类 C# 像这样：

    命名空间 com.mydomain.cordovaExtensions {公共类回声: BaseCommand {/ /......}}
    

然后，在 JavaScript 中你需要调用 `exec` 像这样：

    cordova.exec (赢、 失败，"com.mydomain.cordovaExtensions.Echo"，......);
    

## 解释您在 C 中的参数

由您的插件方法接收的数据是一个字符串值，但在现实中看我们的 JavaScript 代码，我们看到我们的意图是要传递的字符串数组。 回望我们 JavaScript 调用 `cordova.exec` ，我们看到我们通过 `[str]` ：

    cordova.exec （赢了，失败了，"回声"、"回声"、 ["输入的字符串"]） ；
    

如果我们检查的选项字符串传递到我们 `Echo.echo` 方法中，我们看到的值确实是：

    "[\"input string\"]"
    

所有 JavaScript `exec` 参数是 JSON 编码之前被传递到 C#。

如果我们想要将此视为我们期待的字符串，我们需要对它进行解码。我们可以使用简单的 JSON 反序列化。

    字符串 optVal = JsonHelper.Deserialize < string [] > （选项） [0] ；/ / optVal 现在有"输入字符串"的值
    

## 将从 C# 的结果传递给 JavaScript

BaseCommand 类的基类提供用于将数据传递给您的 JavaScript 回调处理程序方法。 只是发出信号命令已成功执行，没有额外的结果信息需要的时候，你可以简单地调用：

    DispatchCommandResult() ；/ 调用回与空插件的结果，认为成功的回调
    

若要传递回来的数据，你需要调用不同版本的 `DispatchCommandResult` ：

    DispatchCommandResult (新 PluginResult （PluginResult.Status.OK，"一切都按计划，这是一个传递给成功处理的结果"）） ；
    

将传递回 JavaScript 的结构化的对象的数据，应将其编码为 JSON 字符串：

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

如果您需要信号发生了一个错误，你可以叫 `DispatchCommandResult` 与 `PluginResult` 对象：

    DispatchCommandResult (新 PluginResult （PluginResult.Status.ERROR，"回波信号错误"）） ；
    

## 在序列化中处理错误你的插件的 C# 方法

当解释您的参数，它是使用 try/catch 块，万一我们有坏输入一个好主意。这是一个整个的科尔多瓦 C# 代码中使用的模式：

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
        // ... 关于继续做我们的工作}
    

## 插件 XML

这些都是 windows 电话具体例子使用通过文件、 插件规格的更多详细信息，请参阅

### `<source-file>`

Windows 电话 `<source-file>` 目前使用元素来定义插件的所有资源 （ie。.cs、.xaml，。 xaml.cs、.dll 和图像资产等)。

### `<config-file>`

`<config-file>`元素定义了哪些元素得到放入配置文件。例如要将插件添加到平台 config.xml，你会做这样的事情：

    < 配置文件 target="config.xml"父 ="/ *">< 功能名称 ="PluginName">< 参数名称 ="wp-包"值 ="PluginName"/ >< / 功能 >< / 配置文件 >
    

如果我们想要添加的联系人的功能到 WMAppManifest.xml，它会看起来像这样：

    <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
        <Capability Name="ID_CAP_CONTACTS" />
    </config-file>
    

## 高级的插件功能

请参阅其他方法时，您可以在重写：

*   [BaseCommand.cs][1]

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

例如，你可以挂接到 '暂停' 和 '恢复' 应用程序事件。

### 调试插件

若要调试 C# 侧，可以使用 Visual Studio 调试器，只是在公开您的类的方法中的任何设置一个断点。

JavaScript 是有点更难在 Windows Phone 上进行调试。您需要使用 `console.log` 来输出的状态你的插件，或告知自己的错误。

## 常见的陷阱

*   您将传递给本机 JavaScript 实现中的参数在决定时要小心。 大多数设备平台期望 args 传递到 cordova.exec 必须是一个数组，但如果您在此数组中有不同类型的对象，它变得困难或不可能进行反序列化。
    
        cordova.exec (胜利、 失败，"ServiceName"、"方法名称"["这是一个字符串"、 54，{文字： '麻烦'}]) ；
        
    
    *   这意味着您的 C# 代码接收难解码的字符串值，如：
        
            "[\"this 是 string\"、 54，{文字： '麻烦'}]"
            
    
    *   请考虑在调用 exec 之前将所有的参数转换为字符串：
        
            cordova.exec (胜利、 失败，"ServiceName"、"方法名称"["这是一个字符串"、"54"，"{文字： '麻烦'}"]） ；字符串 [] optValues = JsonHelper.Deserialize < string [] > (选项) ；
            

*   它通常是个好主意要做参数在调用之前检查您的 JavaScript 代码，在 `exec` 。 这允许您重新使用之间你的插件各种本机实现更多的 JavaScript 代码。
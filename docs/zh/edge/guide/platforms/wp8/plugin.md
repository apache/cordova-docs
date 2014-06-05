— — 许可证： 下一个或多个参与者许可协议许可向阿帕奇软件基金会 (ASF)。 See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone 插件

此部分提供了如何在 Windows Phone 平台上实现本机插件代码的详细信息。 之前读这篇文章，请参阅应用程序插件插件的结构和其共同的 JavaScript 界面的概述。 这一节继续表明通信从科尔多瓦 web 视图的本机平台和后面的示例*回声*插件。

在 Windows Phone 上的科尔多瓦编写插件需要科尔多瓦的体系结构的一个基本的了解。 科尔多瓦 WP7 组成的 `WebBrowser` ，承载应用程序的 JavaScript 代码并管理本机 API 调用。 您可以扩展 C# `BaseCommand` 类 ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` )，其中附带了大部分你需要的功能：

1.  选择您的项目，并单击鼠标右键，选择**添加 → 新项目......**如果您愿意，您可以添加它到 `Plugins` 文件夹。

2.  选择**类**和命名为 `Echo.cs` 。 这类名称必须*完全*匹配你叫什么指定的服务作为 `cordova.exec()` 的 JavaScript 一边打电话。

3.  包括基类，这些类执行：
    
        使用 WPCordovaClassLib.Cordova ；使用 WPCordovaClassLib.Cordova.Commands ；使用 WPCordovaClassLib.Cordova.JSON ；
        

4.  扩展您的类从 `BaseCommand` ：
    
        公共类回声: BaseCommand {/ /......}
        

5.  添加 `echo` 可从 JavaScript 调用的方法：
    
        公共类回声: BaseCommand {公共 void 回声 （字符串选项） {/ / JS 可调用插件的所有方法必须都有此签名 ！
                / / 公共返回 void，1 参数是一个字符串}}
        

请参阅可用的插件来重写方法的[BaseCommand.cs][1]类。 例如，该插件可以捕获 '暂停' 和 '恢复' 事件。

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## 命名空间

不合格的命令的默认命名空间为：

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

如果你想要指定您自己的命名空间，则需要完全限定打电话到 `cordova.exec` 。例如，如果您想要定义您的类 C# 像这样：

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

JavaScript 会需要调用 `exec` 像这样：

        cordova.exec (赢、 失败，"com.mydomain.cordovaExtensions.Echo"，......);
    

## 解释在 C 中的参数

中讨论的示例中应用程序插件，你的插件接收的数据是一个字符串，但如果你想要传递的字符串数组吗？ 假设 JavaScript `cordova.exec` 调用指定像这样：

        cordova.exec （赢了，失败了，"回声"、"回声"、 ["输入的字符串"]） ；
    

值 `options` 的字符串传递给 `Echo.echo` 方法是 JSON：

        "[\"input string\"]"
    

所有 JavaScript `exec` 参数被传递到 C# 中之前, 是 JSON 编码和所以需要解码：

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## 通过结果从 C# 对 JavaScript

`BaseCommand`类提供的方法将数据传递到 JavaScript 回调处理程序。如果你只是想要信号没有附带结果的成功，你可以简单地调用：

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

若要传递回来的数据，你需要调用 `DispatchCommandResult` 以不同的方式：

        DispatchCommandResult (新 PluginResult （PluginResult.Status.OK，"一切都按计划，这是一个传递给成功处理的结果"）） ；
    

使用一个已编码的 JSON 字符串的结构化的对象数据传递回 JavaScript：

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

要发出错误的信号，请致电 `DispatchCommandResult` 与 `PluginResult` 对象，其状态是 `ERROR` ：

        DispatchCommandResult (新 PluginResult （PluginResult.Status.ERROR，"回波信号错误"）） ；
    

## 处理序列化错误

您的论点，在解释时 `try` / `catch` 块可帮助屏蔽掉坏的输入。这种模式将出现在整个科尔多瓦 C# 代码：

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
    

## 插件使用寿命

插件需要长时间运行的请求，如媒体回放、 听众，保持内部状态应执行的背景活动 `onReset` 方法来清理这些活动。 当 CordovaView webbrowser 控件导航到新的一页或刷新，重新加载 JavaScript 运行方法。

        // defined in WPCordovaClassLib.Cordova.Commands.BaseCommand
        public virtual void OnReset() { }
    

## 插件 XML

下面演示如何使用 `plugin.xml` 文件来指定插件的源代码文件在 Windows Phone 平台上。 请参阅应用程序插件概述和插件规范有关可用选项的详细信息。

*   `<source-file>`元素定义了所有插件资源如*.cs*， *.xaml*， *.xaml.cs*，图像资产和*.dll*文件的。

*   `<config-file>`元素定义元素注入到一个配置文件。此示例将插件添加到该平台的 `config.xml` 文件：
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    本示例将添加到联系人功能 `WMAppManifest.xml` 文件：
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## 调试插件

使用 Visual Studio 调试器来调试插件的 C# 组件。您可以在您的类所公开的方法中的任何设置一个断点。

JavaScript 更难在 Windows Phone 上进行调试。您需要使用 `console.log` 来输出插件的状态，或告知自己的错误。

## 常见的陷阱

*   要小心不要将从 JavaScript 的参数传递给本机方面难以作为 JSON 反序列化的。 大多数设备平台期望的参数传递给 `cordova.exec()` 必须是一个数组，如下所示：
    
        cordova.exec (胜利、 失败，"ServiceName"、"方法名称"["这是一个字符串"、 54，{文字： '麻烦'}]) ；
        
    
    这可能会导致对 C# 进行解码一个过于复杂的字符串值：
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    相反，考虑将*所有*参数都转换为字符串之前调用 `exec()` ，和每个单独解码：
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   通常，最好要在调用之前检查参数，在 JavaScript 中的 `exec()` 。 这样做允许您重新使用更多的代码和各种本机实现拉从插件的不必要的功能。
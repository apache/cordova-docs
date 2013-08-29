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

# 黑莓手机的插件

本指南介绍了如何开发回声插件在黑莓手机上。 插件开发指南提供广泛概述，你应该已经是熟悉的和本指南捡起它的留下。 此外，下载[科尔多瓦黑莓手机存储库][1].

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry-webworks.git;a=summary

`Cordova-BlackBerry`项目允许您将部署到黑莓火炬、 加粗和操作手册等。 Playbook 使用不同的代码基比其他黑莓手持设备，您需要为其重复你的发展努力。 本指南着重于手持设备，而不是平板电脑。 （在将来，本指南应包括这两个平台）。

Echo 插件基本上是返回用户不管消息提供给 `window.echo` 函数：

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
    

## 修改 plugins.xml

您的项目的 `www/plugins.xml` 目录中包含的所有必要引用到科尔多瓦项目的插件。 添加一个额外的引用，这样，当 `cordova.exec` 是科尔多瓦叫，知道如何映射 `Echo` 参数的 `cordova.exec` 到 `Echo` 我们想要写本机的类：

    < 功能名称 ="回声">< 参数名称 ="黑莓手机-包"value="org.apache.cordova.echo.Echo"/ >< / 功能 >
    

## 添加 Echo.java

如果您注意到结构的值属性，您将看到已定义的路径，导致回声插件。 在科尔多瓦黑莓 WebWorks 回购的根目录中，查找名为的目录 `framework` 。 此目录包含所有的源代码在黑莓手机上本机运行。 导航到 `framework/ext/src/org/apache/cordova` 。 此时，您将看到所有的插件目录，所是的源代码。 因此，添加目录回显到 `framework/ext/src/org/apache/cordova/echo` ，并创建一个文件称为 `Echo.java` 在`framework/ext/src/org/apache/cordova/echo/Echo.java`.

## 书写 Echo.java

在编写插件背后的基本思想是，创建一个扩展插件类的类调用的方法 `execute` 返回 `PluginResult` 类。 任何调用 `cordova.exec` 将传递给要在类中，以及参数内执行的操作中。 在这种情况下，"回声"是我们想要执行的类中"回声"和 [乙方] 的行动是我们在中传递的参数。

    包 org.apache.cordova.echo ；导入 org.apache.cordova.api.Plugin ；导入 org.apache.cordova.api.PluginResult ；导入 org.apache.cordova.json4j.JSONArray ；导入 org.apache.cordova.json4j.JSONException ；导入 org.apache.cordova.json4j.JSONObject ；/ --- 简单插件来演示如何生成一个插件黑莓 * 基本上回声回用户呼叫味精这个插件 * / 公共最后类回声扩展插件 {公共静态最终字符串回显 ="echo"；公共 PluginResult 执行字符串 callbackId JSONArray args 字符串操作） {PluginResult 结果 = 新 PluginResult （PluginResult.Status.INVALID_ACTION，"回声: 无效的操作："+ 行动） ；if(action.equals(echo)) {试 {字符串 theMsg = args.getString(0) ；如果 (theMsg! = null | | theMsg.length() > 0) {结果 = 新 PluginResult （PluginResult.Status.OK，theMsg） ；} 其他 {结果 = 新 PluginResult （PluginResult.Status.ERROR，"没什么，回显"） ；}} catch (JSONException e) {结果 = 新 PluginResult （PluginResult.Status.JSON_EXCEPTION，e.getMessage()) ；}} 返回结果 ；}
    
    }
    

所以如果我们看看上面的代码，我们可以看到在 execute 方法中，我们第一次寻找行动来。 Echo 插件，只有一种操作， `echo` ，因此，我们将只检查的。 如果我们的插件有更多的行动，它是简单的添加更多条件的测试，以检查这些操作。

然后我们拿进来从参数 args 参数由提供的消息。 我们可以抓住的只在做第一个参数`String theMsg = args.getString(0);`.

我们将做一些错误检查和邮件看起来很好，如果我们将实例化新的 PluginResult 与好的状态： `PluginResult.Status.OK` ，并返回该邮件： `theMsg` 。 在此之后，我们返回的结果，要传递回给 JavaScript 可以在回调中成功发射。 如果事情失败，我们可以返回各种状态异常，像 `PluginResult.Status.ERROR` ， `PluginResult.Status.JSON_EXCEPTION` ，或 `PluginResult.Status.INVALID_ACTION` 。 当传递回来时，这些类型的结果火中 JavaScript 的失败回调。

## 更新您的项目 www 目录中.jar

添加的 `Echo.java` 需要更新您的项目中。 若要生成 `.jar` 文件，定位到黑莓 WebWorks 回购根目录下并运行 `ant` 命令：

    蚂蚁更新-Dproject.path="~/path_to_my_project"
    

这将生成新的 `.jar` 文件在 `build/ext` 目录。复制 `build/ext/cordova.jar` 文件到您 `project/www/ext` 目录。

如果一切顺利，允许您在黑莓手机中使用 Echo 插件。
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

# 插件规范

`plugin.xml`文件是一个 XML 文档在 `plugins` 命名空间： `http://apache.org/cordova/ns/plugins/1.0` 。 它包含顶级 `plugin` 元素，定义该插件和定义插件的结构的儿童。

示例插件元素：

    <? xml 版本 ="1.0"编码 ="UTF 8"? >< 插件 xmlns ="http://apache.org/cordova/ns/plugins/1.0"xmlns:android ="http://schemas.android.com/apk/res/android"id="com.alunny.foo"版本 ="1.0.2">
    

## `<plugin>`元素

`plugin`元素是插件清单的顶级元素。它具有下列属性：

*   `xmlns`（必填）： 插件的命名空间， `http://apache.org/cordova/ns/plugins/1.0` 。 如果文档包含 XML 从其他命名空间如标记添加到 `AndroidManifest.xml` 文件中，这些命名空间，也应该列入的顶级元素。

*   `id`（必填）： 一个反向域样式标识符的插件，如`com.alunny.foo`

*   `version`（必填）： 该插件相匹配的以下主要-未成年人-修补程序样式的正则表达式的版本号：
    
        ^\d+[.]\d+[.]\d+$
        

## `<engines>`和 `<engine>` 的元素

子元素的 `<engines>` 元素指定版本的此插件支持的基于 Apache 科尔多瓦的框架。示例：

    < 引擎 >< 引擎名称 ="科尔多瓦"版本 ="1.7.0"/ >< 引擎名称 ="科尔多瓦"版本 ="1.8.1"/ >< 引擎名称 ="worklight"版本 ="1.0.0"平台 ="android"scriptSrc ="worklight_version"/ >< / 引擎 >
    

类似于 `<plugin>` 元素的 `version` 属性中，指定的版本字符串应匹配符合正则表达式的字符串主要-未成年人-修补程序：

        ^\d+[.]\d+[.]\d+$
    

引擎的元素也可指定模糊匹配为了避免重复，并减少维护基础平台更新时。 工具应该支持的最低 `>` ， `>=` ， `<` 和 `<=` ，例如：

    < 引擎 >< 引擎名称 ="科尔多瓦"版本 ="> = 1.7.0"/ >< 引擎名称 ="科尔多瓦"版本 ="< 1.8.1"/ >< / 引擎 >
    

'<engine>' 标签也有默认支持的所有主要平台存在的科尔多瓦。 指定的 '科尔多瓦' 引擎标记意味着科尔多瓦在任何平台上的所有版本必须都满足发动机版本属性。 你可能还会列出特定的平台和它们的版本以覆盖全部捕获 '科尔多瓦' 引擎：

    < 引擎 >< 引擎名称 ="科尔多瓦"版本 ="> = 1.7.0"/ >< 引擎名称 ="科尔多瓦-android 系统"版本 ="> = 1.8.0"/ >< 引擎名称 ="科尔多瓦-ios"版本 ="> = 1.7.1"/ >< / 引擎 >
    

这里是一个列表的默认引擎，'<engine>'标签支持： * '科尔多瓦' *' 科尔多瓦-plugman' * '科尔多瓦-android' *' 科尔多瓦-ios' * '科尔多瓦-blackberry10' *' 科尔多瓦-wp7' * '科尔多瓦-wp8' *' 科尔多瓦-windows8'

指定自定义的基于 Apache 科尔多瓦的框架应列出引擎标记下就像这样：

    < 引擎 >< 引擎名称 ="my_custom_framework"版本 ="1.0.0"平台 ="android"scriptSrc ="path_to_my_custom_framework_version"/ >< 引擎名称 ="another_framework"版本 ="> 0.2.0"平台 ="ios|android"scriptSrc ="path_to_another_framework_version"/ >< 引擎名称 ="even_more_framework"版本 ="> = 2.2.0"平台 ="*"scriptSrc ="path_to_even_more_framework_version"/ >< / 引擎 >
    

一个自定义的基于 Apache 科尔多瓦框架需要引擎的元素包含以下特性： '名称'、 '版本'、 'scriptSrc' 和 '平台'。

*   `name`（必填）： 人类可读的名称为您自定义的框架。

*   `version`（必填）： 您的框架必须要安装的版本。

*   `scriptSrc`（必填）： 告诉 plugman 是什么版本的自定义框架的脚本文件。理想情况下，此文件应该在你的插件文件夹的顶层目录内。

*   `platform`（必填）： 您的框架支持哪些平台。 您可以使用通配符 ' *' 说支持所有平台，指定多个具有像 'android|ios|blackberry10' 的管道字符或像 'android' 只是一个单一的平台。

plugman 中止与非零代码为其目标项目不能满足发动机的约束任何插件。

如果不是 `<engine>` 指定的标记、 plugman 尝试盲目地安装到指定的科尔多瓦的项目目录。

## `<name>`元素

该插件，其文本内容包含插件的名称人类可读的名称。例如：

    < 名称 > 美孚 < / 名称 >
    

此元素还不能 () 处理本地化。

## `<description>`元素

对该插件的人类可读说明。元素的文本内容包含插件的描述。示例：

    < 描述 > 美孚插件描述 < / 说明 >
    

此元素还不能 () 处理本地化。

## `<author>`元素

插件作者姓名。元素的文本内容包含插件作者的姓名。示例：

    < 作者 > 美孚插件描述 < / 作者 >
    

## `<keywords>`元素

插件关键字。元素的文本内容包含以逗号分隔的关键字来描述该插件。示例：

    < 关键字 > 美孚、 酒吧 < / 关键字 >
    

## `<license>`元素

插件许可。元素的文本内容包含插件许可证。示例：

    < 许可证 > Apache 2.0 许可证 < / 许可证 >
    

## `<asset>`元素

一个或多个元素列出文件或目录复制到科尔多瓦 app `www` 目录。例子：

    <! — — 单一文件中，要复制根目录中--> < 资产 src ="www/foo.js"target="foo.js"/ ><! — — 也要被复制的根目录中目录--> < 资产 src ="www/foo"目标 ="foo"/ >
    

所有 `<asset>` 标签需要两个 `src` 和 `target` 的属性。 只有 web 插件包含主要是 `<asset>` 的元素。 任何 `<asset>` 元素的嵌套在 `<platform>` 元素指定特定于平台 web 资产，如下所述。 属性包括：

*   `src`（必填）： 在该文件或目录中的位置的插件包，相对于 `plugin.xml` 文件。 如果文件不存在指定的 `src` plugman 的位置，停止和反转安装过程、 发出一个通知有关冲突，并以非零代码退出。

*   `target`（必填）：
    
    其中的文件或目录应设在科尔多瓦 app，相对于 `www` 目录。资产可以被加载到目标子目录，例如：
    
    <asset src="www/new-foo.js" target="js/experimental/foo.js" />
    
    创建 `js/experimental` 目录内 `www` 目录中，除非已经存在，然后拷贝 `new-foo.js` 文件并将它重命名 `foo.js` 。 如果在目标位置已存在的文件，plugman 将停止反转安装过程、 发出一个通知有关冲突，并以非零代码退出。

## `<js-module>`元素

大多数的插件包括一个或多个 JavaScript 文件。 每个 `<js-module>` 标记对应于一个 JavaScript 文件，并防止插件的用户不必添加 `<script>` 为每个文件标记。 虽然 `<asset>` 标签只是将一个文件复制从插件子目录到 `www` ， `<js-module>` 标记是复杂得多。 他们看起来像这样：

    < js 模块 src="socket.js"名称 ="套接字">< 黑糊 target="chrome.socket"/ >< / js 模块 >
    

与上面的例子，安装一个插件时 `socket.js` 复制到 `www/plugins/my.plugin.id/socket.js` ，并作为对条目添加 `www/cordova_plugins.js` 。 在加载时，代码在 `cordova.js` 使用 XHR 来读取每个文件并注入 `<script>` 到 HTML 标记。 它将添加一个映射，以痛打或合并并酌情按如下所述。

*不*换行的文件 `cordova.define` ，因为它会自动添加。 模块包裹在一个闭包， `module` ， `exports` ，和 `require` 在范围中，如是正常的 AMD 模块。

详细信息 `<js-module>` 标记：

*   `src`引用相关的插件目录中的文件 `plugin.xml` 文件。

*   `name`提供的模块名称的最后一个部分。 它一般可以不管你喜欢什么，以及它只事项如果您想要使用 `cordova.require` 来导入你的插件在 JavaScript 代码中的其他部分。 模块名的 `<js-module>` 是你的插件 `id` 后面跟的值 `name` 。 对于上面的例子，与 `id` 的 `chrome.socket` ，模块名称是`chrome.socket.Socket`.

*   内允许有三个标签 `<js-module>` ：
    
    *   `<clobbers target="some.value"/>`指示 `module.exports` 插入到 `window` 对象作为 `window.some.value` 。 你可以有很多 `<clobbers>` 像你喜欢。 上没有可用的任何对象 `window` 创建的。
    
    *   `<merges target="some.value"/>`指示应与任何现有的值在合并模块 `window.some.value` 。 如果已经存在任何键，该模块的版本将覆盖原始。 你可以有很多 `<merges>` 像你喜欢。 上没有可用的任何对象 `window` 创建的。
    
    *   `<runs/>`意味着，您的代码应与指定 `cordova.require` ，但不是安装在 `window` 对象。 这是有用的模块，将附加的事件处理程序初始化时或以其他方式。 你只能有一个 `<runs/>` 标记。 请注意，包括 `<runs/>` 与 `<clobbers/>` 或 `<merges/>` 是多余的因为他们也 `cordova.require` 您的模块。
    
    *   一个空的 `<js-module>` 仍然加载，并且可以访问的其他模块通过中`cordova.require`.

如果 `src` 不能解决到现有文件，plugman 将停止和反转安装，发出一个通知的问题，和以非零代码退出。

嵌套 `<js-module>` 内的元素 `<platform>` 声明特定平台 JavaScript 模块绑定。

## `<dependency>`

`<dependency>`标记允许您指定当前插件所依赖的其他插件。 虽然未来的版本将从插件库访问它们，在短期内的插件直接引用的 Url 作为 `<dependency>` 的标记。 他们的格式如下：

    < 依赖项 id="com.plugin.id"url ="https://github.com/myuser/someplugin"commit ="428931ada3891801"子目录 ="一些/路径/这里"/ >
    

*   `id`： 提供插件的 ID。 它应该是全局唯一的并表示在反向域的样式。 这些限制，既不当前执行的而他们可能在未来。

*   `url`： 插件 URL。这应该参考哪些 plugman 尝试克隆 git 资源库。

*   `commit`： 这是理解的任何 git 引用 `git checkout` ： 一个分支或标记的名称 （例如， `master` ， `0.3.1` ），或提交 （例如，哈希`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`： 指定目标的插件依赖项存在作为 git 资源库的子目录。 这是很有帮助的因为它允许存储库中包含几个相关的插件，每个单独指定。

在将来，将会介绍版本限制，和一个插件库会存在支持按名称而不是显式 Url 获取。

### 相对依赖项的路径

如果您将设置 `url` 的 `<dependency>` 标记到 `"."` ，并提供 `subdir` 、 依赖插件安装从同一个本地或远程 git 资源库作为父插件，指定 `<dependency>` 标记。

请注意， `subdir` 总是指定*根*的 git 资源库，不该父插件的相对路径。 即使你安装的插件与直接向它的本地路径，也是如此。 Plugman 发现 git 资源库的根目录，然后查找其他插件从那里。

## `< 平台 >`

`<platform>`标记标识平台有关联的本机代码或需要对它们的配置文件进行修改。 使用此规范的工具可以标识支持的平台和科尔多瓦项目中安装代码。

无插件 `<platform>` 标签被假定为只 JavaScript 的并因此可安装在所有的平台上。

平台标记示例：

    < 平台名称 ="android"><! — — android 操作系统特定的元素--> < / 平台 >< 平台名称 ="ios"><! — — ios 特定的元素--> < / 平台 >
    

所需 `name` 属性标识一个平台支持，将与该平台关联元素的子级。

平台名称应该是小写字母。平台名称，如任意选择，列出：

*   android 系统
*   bb10
*   ios
*   wp7
*   wp8

## `< 源文件 >`

`<source-file>`元素标识应安装到一个项目的可执行文件的源代码。例子：

    <!-android--> < 源文件 src="src/android/Foo.java"目标-dir ="src/com/alunny/foo"/ ><! — — ios--> < 源文件 src="src/ios/CDVFoo.m"/ >< 源文件 src="src/ios/someLib.a"框架 ="true"/ >< 源文件 src="src/ios/someLib.a"编译器标志 ="-用户-objc-弧"/ >
    

它支持以下属性：

*   `src`（必填）： 相对于文件位置的 `plugin.xml` 。 如果 `src` 文件无法找到，plugman 将停止并反转安装、 问题有关问题的通知和以非零代码退出。

*   `target-dir`： 目录文件应该将复制到其中，相对于科尔多瓦项目的根目录。 在实践中，这是最重要的是基于 Java 的平台上，凡中的一个文件 `com.alunny.foo` 软件包必须位于 `com/alunny/foo` 目录。 对于平台的源目录并不重要，应忽略此属性。
    
    随着资产，如果 `target` 的 `source-file` 会覆盖现有的文件、 plugman 停止和反转安装、 发出一个通知有关这一问题，并以非零代码退出。

*   `framework`(仅适用于 iOS): 如果设置为 `true` ，也作为一种框架向项目添加指定的文件。

*   `compiler-flags`(仅适用于 iOS)： 如果设置，分配特定的源代码文件的指定的编译器标志。

## `< 配置文件 >`

标识要进行修改，在该文件中修改应考虑的地方，和什么应修改基于 XML 的配置文件。

与此元素修改测试过的两种文件类型是 `xml` 和 `plist` 的文件。

`config-file`元素只允许您将新的儿童追加到 XML 文档树。孩子们在目标文档中要插入的 XML 文本。

XML 的的示例：

    < 配置文件 target="AndroidManifest.xml"父 ="应用程序/清单 /">< 活动 android:name="com.foo.Foo"android:label="@string/app_name">< 意图-滤清器 >< / 意图-滤清器 >< / 活动 >< / 配置文件 >
    

例如 `plist` ：

    < config 文件目标 ="*-Info.plist"父 ="CFBundleURLTypes">< 数组 >< 字典 >< 键 > 软件包名称 < / 键 >< 字符串 > $PACKAGE_NAME < / 字符串 >< / 辞典 >< / 阵列 >< / 配置文件 >
    

它支持以下属性：

*   `target`:
    
    将修改的文件和科尔多瓦项目的根目录的相对路径。
    
    目标可以包括通配符 （ `*` ） 的元素。在这种情况下，plugman 以递归方式搜索通过项目目录结构，并使用第一个匹配。
    
    在 iOS，相对于项目目录根配置文件的位置未知，所以指定的目标 `config.xml` 将解析为`cordova-ios-project/MyAppName/config.xml`.
    
    如果指定的文件不存在，该工具将忽略配置更改并继续安装。

*   `parent`： 引用添加到配置文件中的元素的父 XPath 选择器。 如果您使用绝对选择器，您可以使用通配符 （ `*` ） 以指定的根元素，例如，`/*/plugins`.
    
    为 `plist` 的文件， `parent` 确定应该在什么父项下插入指定的 XML。
    
    如果选择器不能解决对指定文档的一个孩子，工具停止和挫折安装过程中，会发出警告，并以非零代码退出。

## `< 插件-plist >`

这是*过时*，因为它仅适用于科尔多瓦-ios 2.2.0 和下面。使用 `<config-file>` 标记科尔多瓦的较新版本。

示例：

    < 配置文件 target="config.xml"父 ="/ 构件/插件">< 插件名称 = 值"ChildBrowser"="ChildBrowserCommand"/ >< / 配置文件 >
    

指定键和值将追加到正确的 `AppInfo.plist` iOS 科尔多瓦项目中的文件。例如：

    < 插件 plist 键 = 字符串"Foo"="CDVFoo"/ >
    

## `<resource-file>`和`<header-file>`

源代码文件一样，但专门为 iOS 等平台，区分源代码文件、 标题和资源。例子：

    < 资源文件 src="CDVFoo.bundle"/ >< 资源文件 src="CDVFooViewController.xib"/ >< 头文件 src="CDVFoo.h"/ >
    

## `<lib-file>`

像源、 资源和头文件，但专门为黑莓 10 这样的平台，使用用户生成的库。例子：

    < lib 文件 src="src/BlackBerry10/native/device/libfoo.so"拱 ="设备"/ >< lib 文件 src="src/BlackBerry10/native/simulator/libfoo.so"拱 ="模拟器"/ >
    

支持的属性：

*   `src`（必填）： 相对于文件位置的 `plugin.xml` 。 如果 `src` 不能发现，plugman 停止和反转安装，问题一个警告，有关这一问题，并以非零代码退出。

*   `arch`： 其中的体系结构 `.so` 文件已生成了，要么 `device` 或`simulator`.

## `< 框架 >`

标识该插件所依赖的一个框架 （通常的 OS 平台的一部分）。

例子：

    < 框架 src="libsqlite3.dylib"/ >< 框架 src="social.framework"弱 ="true"/ >
    

`src`属性标识的框架，其中 plugman 尝试添加到科尔多瓦项目中，给定平台的正确方式。

可选的 `weak` 属性是一个布尔值，该值指示是否应弱链接框架。默认值是`false`.

## `<info>`

向用户提供的其他信息。当您需要额外的步骤，不能轻松地自动或超出了 plugman 的范围时，这非常有用。例子：

    < 信息 > 你需要从使用 Android SDK 管理器 （运行 android） 的 Android 额外部分安装 __Google 玩 Services__。
    
    您需要将以下行添加到您的 'local.properties' android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib < / 信息 >
    

# 变量

在某些情况下，可能需要一个插件进行配置更改依赖于目标应用程序。 例如，若要为在 android 系统，其包 id 是 app C2DM 注册 `com.alunny.message` 如需要的权限：

    < 使用权限 android:name="com.alunny.message.permission.C2D_MESSAGE"/ >
    

在这种情况下，从插入内容的位置 `plugin.xml` 文件事先并不知道，变量可以表示一个美元符号后面跟随一系列的大写英文字母、 数字或下划线。 对于上面的示例中， `plugin.xml` 文件将包括此标记：

    < 使用权限 android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/ >
    

如果未找到，则 plugman 将指定的值或空字符串替换变量引用。 可能检测到的变量引用的值 （在这种情况下，从 `AndroidManifest.xml` 文件） 或指定的工具 ； 用户确切的过程是依赖于特定的工具。

plugman 可以要求用户指定一个插件所需的变量。例如，用于 C2M 和谷歌地图 API 密钥可以指定为一个命令行参数：

    plugman — — android 平台 — — 项目/路径/到/项目 — — 插件 name|git-url|path-变量 API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

以使变量强制性的 `<platform>` 标记需要包含 `<preference>` 标记。例如：

    < 首选项名称 ="API_KEY"/ >
    

plugman 检查这些所需的首选项传入的。如果不是，它应警告用户如何传递中的变量和以非零代码退出。

应保留某些变量的名称，如下所示。

## $PACKAGE_NAME

反向域风格独特包的标识符，对应于 `CFBundleIdentifier` 上的 iOS 或 `package` 的顶级属性 `manifest` 中的元素 `AndroidManifest.xml` 文件。
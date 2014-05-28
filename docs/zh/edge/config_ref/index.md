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

# Config.xml 文件

一个应用程序的行为（特性）的许多方面可以用一个全局配置文件config.xml来控制 该平台无关的XML文件是基于W3C的[打包的Web应用程序（窗口小部件）][1]规范安排的，并扩展到指定的核心Cordova API功能、插件和平台特定的设置。

 [1]: http://www.w3.org/TR/widgets/

与Cordova CLI创建的项目（在命令行界面中描述），这个文件可以在顶级的目录中找到。

        app/config.xml
    

请注意之前的版本3.3.1-0.2.0, 该文件存在与`app/www/config.xml`中，并且它在这里仍然支持。

当使用CLI来构建一个项目的时候，这个文件的版本是被动的被复制到不同的 `platforms/`子目录中，例如：

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml
    

本节详细介绍了全局和跨平台的配置选项。为平台特定选项请参阅以下部分：

*   iOS 配置
*   Android 系统配置
*   BlackBerry 10 配置

除了下面描述的各种配置选项，你还可以为每个目标平台的图像配置一个应用程序的核心集。为更多的信息，请查看图标和启动画面。

## 核心配置元素

这个例子显示了CLI的`create` 命令生成的默认 `config.xml`文件，在命令行界面中的描述

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
        </widget>
    

下面的配置元素出现在顶级的`config.xml`文件中，并在所有支持Cordova平台中支持：

*   该`<widget>` 元素的 `id`属性提供了应用程序的反向域标识符，并`version`在主/次/修补程序符号中表示其完整的版本号。

*   该`<name>` 元素指定应用程序的正式名称，因为它出现在设备的主屏幕上和应用存储接口中。。

*   该 `<description>`和 `<author>` 元素指定的元数据和联系信息可能出现在应用存储列表内。

*   该可选的 `<content>` 元素在顶级的web资源目录中定义了该应用程序的起始页。 默认值是`index.html`，这通常在一个项目的顶级`www` 目录中出现。

*   `<access>` 元素定义了一组外部域的应用程序被允许与其通信。 如上所示的默认值允许它访问任何服务器。 请查看域名Whitelist Guide 以了解详情。

*   该`<preference>`标记对`name` / `value`属性设置各种选项。 每个首选项的 `name` 是不区分大小写。 许多参数是指定平台特有的，如列在本页的顶部。 下面章节介绍的详细参数适应于多个平台。

## 全局参数选择

以下全局参数选择适用于所有平台：

*   `Fullscreen`允许你在屏幕顶端隐藏状态栏。默认值为`false`。例如：
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation`允许您锁定方向，并防止界面从响应变化的方向来旋转。 可能的值是`default`，`landscape`, or `portrait`。 例如：
    
        <preference name="Orientation" value="landscape" />
        
    
    **NOTE**: 该 `default`的值是指*both*横向和纵向方位被启用。 如果你想使用每个平台的默认设置（通常仅仅是纵向），离开此标记出来的 `config.xml` 文件。

## 多平台参数选择

下面的参数选择适用于多个平台，但不是所有的平台：

*   `DisallowOverscroll`(boolean 类型的值，默认值为 `false` )：如果你不想要当用户滚动过去的开头或结尾的内容时显示的任何反馈信息的接口，那就设置为`true`。
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    适用于 Android 和 iOS。 在iOS上，overscroll动作导致内容回升到原来的位置。 在Android系统上，他们沿顶部或底部边缘的内容产生一个微妙的发光效果。

*   `BackgroundColor`： 设置应用程序的背景颜色。 支持四个字节的十六进制值，与第一个字节代表一个 alpha 通道、 和标准的 RGB 值为以下三个字节。 此例子指定为蓝色：
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    适用于Android and BlackBerry，覆盖CSS否则可用在 *all* 平台上，例如：`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(boolean 类型的值，默认值为 `false` )： 设置为`true`，隐藏显示键盘上的附加工具栏，帮助用户从一种形式输入到另外一种形式来导航。
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    适用于 iOS 和BlackBerry手机。

## The *feature*元素

如果您使用CLI来构建应用程序，您可以使用该`plugin`命令来启动设备的APIs。 不修改顶级的`config.xml`文件，所以该`<feature>`元素不适用于您的工作流程。 如果您的工作直接在SDK中并使用特定平台的`config.xml`文件作为起源的话，您使用该 `<feature>`标签来启用设备级的APIs和外部插件。 他们经常出现在特定平台 `config.xml`文件的自定义值中。 例如，这里是如何为Android项目指定设备的API：

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

下面是如何为iOS项目出现的元素：

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

有关如何指定每个功能的详细信息，请参阅API参考。为插件的更多信息请参考插件开发指南。

## *平台*的元素

使用 CLI 来构建应用程序时，有时必要指定首选项或其他特定于特定平台的元素。 使用 `<platform>` 元素来指定配置，应该只出现在单个特定平台 `config.xml` 文件。 例如，在这里是如何指定那唯一的 android 系统应该使用全屏首选项：

        <platform name="android">
            <preference name="Fullscreen" value="true" />
        </platform>
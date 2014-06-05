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

# iOS 平台指南

本指南介绍如何设置您的 SDK 开发环境部署科尔多瓦的 iOS 设备 （如 iPhone 和 iPad 的应用程序。请参阅下列特定于平台的详细信息：

*   iOS 配置
*   升级 iOS
*   iOS WebViews
*   iOS 插件
*   iOS 命令行工具

上面的命令行工具请参阅科尔多瓦 3.0 以前的版本。关于当前界面的信息，请参阅命令行界面。

## 要求和支持

苹果公司 ® 生成仅在基于英特尔的 Mac OS X 操作系统上运行的 iOS 应用程序所需的工具。 仅在 OS X 10.7 (狮子) 版本上运行 Xcode ® 4.5 (要求的最低版本） 或更大，并包括 iOS 6 SDK （软件开发工具包）。 要提交到苹果 App Store℠ 的应用程序需要的苹果工具的最新版本。

您可以测试的许多科尔多瓦功能使用 iOS 模拟器安装 ios SDK 和 Xcode，但你需要使用实际的设备完全提交到 App Store 之前测试的所有应用程序的设备功能。 该设备必须至少有 iOS 5.x 安装、 科尔多瓦 2.3 支持的最低限度的 iOS 版本。配套设备包括所有 iPad ® 模型、 iPhone ® 3GS 及以上，和 iPod ® 触摸第三代或更高版本。 要安装到设备上的应用程序，您必须也是苹果公司的[iOS 开发者计划][1]，该费用每 99 年美元的成员。 本指南演示如何将应用程序部署到 iOS 模拟器，不必注册开发者计划。

 [1]: https://developer.apple.com/programs/ios/

## 安装 SDK

有两种方法可以下载 Xcode：

*   从[应用程序商店][2]，可通过搜索"Xcode"在**App Store**中的应用。

*   从[苹果开发者下载][3]，而作为苹果开发者需要注册。

 [2]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [3]: https://developer.apple.com/downloads/index.action

一旦安装了 Xcode，几个命令行工具需要为科尔多瓦运行启用。 从**Xcode**菜单中，选择**首选项**，然后**下载**选项卡。 从**组件**面板中，按**命令行工具**列表旁边的**安装**按钮。

## 在 SDK 中打开的项目

使用 `cordova` 实用程序设置了一个新的项目，如所述在科尔多瓦命令行界面。例如，在源代码中的目录：

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"
    

创建后，您可以在 Xcode 内打开它从。双击打开 `hello/platforms/ios/hello.xcodeproj` 文件。屏幕应该如下所示：

![][4]

 [4]: img/guide/platforms/ios/helloworld_project.png

## 部署到仿真程序

若要预览 iOS 模拟器中的应用程序：

1.  请确保在左边的面板中选择*.xcodeproj*文件。

2.  选择**你好**app 立即向右面板中。

3.  从工具栏上的**计划**菜单中选择预定的设备、 iPhone 等作为 6.0 模拟器在这里突出了：
    
    ![][5]

4.  按下**运行**按钮出现在同一工具栏左侧的**计划**中。 那生成、 部署并在模拟器中运行应用程序。 一个单独的仿真器应用程序将打开，并显示该应用程序：
    
    ![][6]
    
    只有一个仿真程序可能会运行一次，所以如果你想要在不同的仿真器中测试应用程序，您需要退出的仿真程序应用程序和运行一个不同的目标在 Xcode 的范围内。

 [5]: img/guide/platforms/ios/select_xcode_scheme.png
 [6]: img/guide/platforms/ios/HelloWorldStandard.png

Xcode 来捆绑在一起的最新版本的 iPhone 和 iPad 的仿真器。 较旧的版本中可能会提供**Xcode → 首选项 → 下载 → 组件**面板。

## 将部署到设备

有关各项要求，部署到一个设备的详细信息，请参阅苹果的[iOS 工具工作流指南][7]的*配置开发和分配资产*部分。 简单地说，您需要部署之前执行以下操作：

 [7]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  加入苹果 iOS 开发者计划。

2.  创建*资源调配配置文件*内[iOS 资源调配门户][8]。 您可以使用其*发展资源调配助理*来创建和安装配置文件和证书 Xcode 需要。

3.  验证*代码签名*部分*代码签名标识*内的项目设置设置为您设置的配置文件名称。

 [8]: https://developer.apple.com/ios/manage/overview/index.action

若要部署到设备：

1.  使用 USB 电缆将设备插入到您的 mac。

2.  Xcode 窗口**计划**下拉列表中选择的项目的名称。

3.  从**设备**下拉列表中选择您的设备。如果它通过 USB 连接电源，但仍然没有出现，请按**管理器**按钮，以解决任何错误。

4.  按下**运行**按钮以生成、 部署并运行该应用程序在您的设备上。

## 常见的问题

**否决警告**： 当应用程序更改或替换为另一个 API 编程接口 (API) 时，它被标记为*已过时*。 API 仍可工作，短期内，但最终将被删除。 这些过时的接口的一些反映在 Apache 科尔多瓦和 Xcode 问题对他们的警告您在生成和部署应用程序时。

Xcode 的警告 `invokeString` 方法涉及启动一个应用程序从一个自定义 URL 的功能。 虽然从自定义 URL 加载的机制发生了变化，此代码目前仍在继续为科尔多瓦的较早版本创建的应用程序提供向后的功能。 示例应用程序不使用这一功能，因此可以忽略这些警告。 若要防止出现这些警告，请删除引用已弃用的 invokeString API 的代码：

*   编辑*Classes/MainViewController.m*文件、 环绕的代码与下面的块 `/*` 和 `*/` 的评论如下所示，然后键入**命令-s**保存该文件：
    
        （失效） webViewDidFinishLoad:(UIWebView*) theWebView {/ / 如果 ___PROJECTNAME__ Info.plist 指定协议来处理的唯一有效 / * 如果 (self.invokeString) {/ / 这传递之前触发 deviceready 事件，以便您可以访问它的 js 时您会收到 deviceready NSLog (@"已否决： window.invokeString-相反，使用 window.handleOpenURL(url) 函数，总是调用通过自定义方案 url 启动应用程序时.") ；NSString * jsString = [NSString stringWithFormat:@"var invokeString = \"%@\"；"self.invokeString] ；[theWebView stringByEvaluatingJavaScriptFromString:jsString] ；} * / / / 黑色底彩色背景匹配的本机应用程序 theWebView.backgroundColor = [UIColor blackColor] ；返回 [超级 webViewDidFinishLoad: theWebView] ；}
        

*   编辑*Classes/AppViewDelegate.m*文件，注释掉下面的行插入双斜杠，如下所示，然后键入**命令-s**保存该文件：
    
        //self.viewController.invokeString = invokeString ；
        

*   按**命令-b**重新生成项目并消除此警告。

<!-- Does this fix only last until the next "cordova prepare"? -->

**缺少标题**: 编译错误有关的失踪头导致从生成位置的问题，可以通过 Xcode 偏好固定：

1.  选择**Xcode → 首选项 → 位置**.

2.  在**派生的数据**部分中，按**高级**按钮并选择**唯一**作为**生成位置**如下所示：
    
    ![][9]

 [9]: img/guide/platforms/ios/xcode_build_location.png

这是默认设置为一个新的 Xcode 安装，但也可以设置以不同的方式从较早版本的 Xcode 后升级。

进一步的信息，请参考苹果的文档：

*   [开始开发 iOS 应用程序今天][10]快速概述的步骤开发 iOS 的应用程序。

*   [会员中心主页][11]提供几个 iOS 的链接技术资源包括技术资源，资源调配门户、 分布指南和社区论坛。

*   [IOS 工具工作流指南][7]

*   [Xcode 4 用户指南][12]

*   从苹果世界广泛开发人员会议 (WWDC2012) 2012年[届会议视频][13]

*   安装[xcode 选择命令][14]，它有助于指定正确版本的 Xcode，如果不止一个的话。

 [10]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [11]: https://developer.apple.com/membercenter/index.action
 [12]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [13]: https://developer.apple.com/videos/wwdc/2012/
 [14]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ®，OS X ®，苹果公司 ®，Xcode ® 应用程序 Store℠，iPad ®，iPhone ®，iPod ® 和 Finder ® 是苹果公司商标)
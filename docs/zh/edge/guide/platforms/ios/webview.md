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

# WebViews iOS

从科尔多瓦 1.4 开始，可以使用一个组件作为科尔多瓦在 iOS 应用程序中。此组件是代号为 '刀'。

新科尔多瓦基于应用程序使用提供在科尔多瓦 1.4 或更多地使用刀的 Xcode 模板创建的。（模板是刀的参考实现。

科尔多瓦 2.0.0 和后续版本仅支持基于次级项目刀执行。

## 系统必备组件

*   科尔多瓦 2.3.0 或更大

*   Xcode 4.5 或更大

*   `config.xml`文件 (从新创建的 iOS 项目)

## 克利弗添加到 Xcode 项目 （CordovaLib 子项目）

1.  下载并解压缩到您的硬盘驱动器上的永久文件夹位置的科尔多瓦源，例如到`~/Documents/Cordova`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  复制 `config.xml` 文件到您的项目文件夹在磁盘上 （请参见上面的前提条件）。

5.  拖放式 `config.xml` 到 Xcode 项目导航的文件。

6.  选择**创建组的任何添加的文件夹**单选按钮，然后按**完成**.

7.  拖放式 `CordovaLib.xcodeproj` 到 Xcode 项目导航的文件 （从永久文件夹位置上面，和它应该是在 `CordovaLib` 子目录）。

8.  Select `CordovaLib.xcodeproj` in the Project Navigator.

9.  键入**选项-命令-1**键的组合，以显示**文件检查器**.

10. 选择**相对于组****文件检查器**器下拉菜单中的**位置**.

11. 在项目导航器中选择**项目图标**，选择你的**目标**，然后选择**生成设置**选项卡。

12. 添加 `-all_load` 和 `-Obj-C` 的**其他链接器标志**值。

13. 单击项目导航器中的**项目图标**，选择你的**目标**，然后选择**生成阶段**选项卡。

14. 展开**链接二进制文件与库**.

15. 选择**+**按钮，然后添加下列**框架**。（可选） 该项目导航器中移动他们的**框架**组下）：
    
        AddressBook.framework AddressBookUI.framework AudioToolbox.framework AVFoundation.framework CoreLocation.framework MediaPlayer.framework QuartzCore.framework SystemConfiguration.framework MobileCoreServices.framework CoreMedia.framework
        

16. 扩展**目标的依赖关系**，标有像这样如果您有多个框的顶部框 ！

17. 选择**+**按钮，然后添加 `CordovaLib` 生成产品。

18. 展开**链接二进制文件与库**，标有像这样如果您有多个框的顶部框 ！

19. 选择**+**按钮，然后添加`libCordova.a`.

20. 设置为**独特**Xcode 偏好**Xcode 首选项 → 位置 → 派生数据 → 先进......**.

21. 在项目导航器中选择**项目图标**，选择你的**目标**，然后选择**生成设置**选项卡。

22. 搜索**标题搜索路径**。该设置，添加以下 （带引号） 这三个值：
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    与科尔多瓦 2.1.0， `CordovaLib` 已升级为使用**自动引用计数 (弧)**。 你不需要升级到**弧**要使用 CordovaLib，但是如果你想要升级您的项目使用**弧**，请使用 Xcode 迁移向导从菜单中：**编辑 → 重构 → 转换为目标 C 弧...**，**取消选择 libCordova.a**，然后运行向导完成。

## 在您的代码中使用 CDVViewController

1.  添加此标头：
    
        #import <Cordova/CDVViewController.h>
        

2.  实例化一个新的 `CDVViewController` ，并保留它在某个地方 （例如，向您的类中的属性）：
    
        CDVViewController * viewController = [CDVViewController 新] ；
        

3.  (*可选*）设置 `wwwFolderName` 属性 （默认为 `www` ）：
    
        viewController.wwwFolderName = @"myfolder"；
        

4.  (*可选*）在您的 config.xml 中设置的起始页 `<content>` 标记。
    
        < 内容 src="index.html"/ >
        
    
    或
    
        < 内容 src ="http://apache.org"/ >
        

5.  (*可选*）设置 `useSplashScreen` 属性 （默认为 `NO` ）：
    
        viewController.useSplashScreen = 否。
        

6.  设置**视图框架**（总是此设置作为最后一个属性）：
    
        viewController.view.frame = CGRectMake (0、 0、 320、 480） ；
        

7.  将刀添加到您的视图：
    
        [myView addSubview:viewController.view] ；
        

## 添加您的 HTML、 CSS 和 JavaScript 资产

1.  在您在磁盘上的项目中创建一个新的文件夹 `www` 为例。

2.  将您的 HTML、 CSS 和 JavaScript 资产放入此文件夹。

3.  拖动并放到 Xcode 项目导航的文件夹。

4.  选择**创建文件夹引用的任何添加的文件夹**单选按钮。

5.  设置相应的 `wwwFolderName` 和 `startPage` 你最初创建的文件夹的属性，或使用默认设置 （请参阅上一节） 当你实例化`CDVViewController`.
    
        / * 如果您创建了一个名为 'myfolder' 文件夹和你想要的文件中它是 Start 的 ' mypage.html' * / viewController.wwwFolderName = @"myfolder"；viewController.startPage = @"mypage.html"
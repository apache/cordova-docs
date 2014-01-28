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

# 升级 iOS

本指南演示如何修改 iOS 项目从科尔多瓦的旧版本进行升级。 大多数这些说明适用于与旧集的前面的命令行工具创建的项目 `cordova` CLI 实用程序。 命令行界面信息，请参阅如何更新的 CLI 版本。

**注**： Xcode 4.6 必需的推荐 Xcode 5。 目前，以提交到苹果 App Store，你应使用最新的产品出厂的版本的 iOS SDK，这是 iOS 7。 iOS 7 SDK 尚不需要，但这可能会很快改变。

## 升级 3.1.0 项目到 3.2.0

对于非 CLI 的项目，请运行：

        bin/更新路径/到项目
    

CLI 的项目：

1.  更新 `cordova` CLI 版本。请参阅命令行界面。

2.  运行`cordova platform update ios`

## 升级 3.0.0 项目到 3.1.0

对于非 CLI 的项目，请运行：

        bin/更新路径/到项目
    

CLI 的项目：

1.  更新 `cordova` CLI 版本。请参阅命令行界面。

2.  运行`cordova platform update ios`

iOS 7 的问题：

1.  删除 `width=device-width, height=device-height` 从 `index.html` 文件的 `viewport` `meta` 标记。 （请参见[相关 bug][1].)

2.  更新你的 iOS 7 支持的媒体、 媒体捕获和闪屏核心插件。

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 的问题：

1.  如果 Xcode 5 提示您这样做 （在问题导航器），请更新您的项目设置。

2.  更新您**编译器的 C / C + + / 目标 C**根据**生成设置**选项卡，设置**生成选项**一节。 选择**默认编译器 （苹果 LLVM 5.0）**.

## 从 2.9.0 升级到 CLI （3.0.0)

1.  创建新的 Apache 科尔多瓦 3.0.0 项目使用 CLI，科尔多瓦，如所述的命令行界面。

2.  添加您的平台到科尔多瓦项目中，例如：`cordova
platform add ios`.

3.  该项目的内容复制 `www` 目录到 `www` 目录在您刚刚创建的科尔多瓦项目的根目录。

4.  复制或覆盖任何本机资产从原始项目 （ `Resources` 等），这让肯定要添加任何新文件到 `.xcodeproj` 项目。 IOS 项目内生成 `platforms\ios` 目录。

5.  复制您 `config.xml` 到 `www` 目录中，并删除任何插件定义。修改设置在这里而不是平台目录。

6.  使用科尔多瓦 CLI 工具来安装您需要的任何插件。请注意 CLI 处理所有核心 Api 作为插件，所以他们可能需要添加。只有 3.0.0 插件是与 CLI 兼容。

7.  生成并测试。

## 升级 2.9.0 项目到 3.0.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 3.0.0 源，例如到`~/Documents/Cordova-3.0.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova.js` （注意它再也没有一个版本后缀，该版本是在该文件本身在标题中） 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova.js` 文件。

7.  删除您 `CordovaLib` 目录和副本 `CordovaLib` 目录从新项目到项目的根目录。

**注意**： 从开始科尔多瓦 3.0.0，不预先安装插件，和你需要使用 `plugman` 命令行实用程序来安装它们自己。 请参阅使用 Plugman 管理插件。

## 升级 2.8.0 项目到 2.9.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.9.0 源，例如到`~/Documents/Cordova-2.9.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova.js` （注意它再也没有一个版本后缀，该版本是在该文件本身在标题中） 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova.js` 文件。

7.  删除您 `CordovaLib` 目录和副本 `CordovaLib` 目录从新项目到项目的根目录。

## 升级 2.7.0 项目到 2.8.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.8.0 源，例如到`~/Documents/Cordova-2.8.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova.js` （注意它再也没有一个版本后缀，该版本是在该文件本身在标题中） 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-2.7.0.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova.js` 文件。

7.  更新任何 `<plugin>` 标签在 `config.xml` 文件到 `<feature>` 标签。 注意，现有 `<plugin>` 标签仍正常工作，但都被否决了。 您可以复制此信息在 `config.xml` 文件的一个新的项目。 例如：
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  删除 `CordovaLib` 目录和副本 `CordovaLib` 目录从新项目到项目的根目录。

9.  将这两个框架添加到您的项目：
    
        OpenAL ImageIO
        

10. 更新您的项目目标**生成设置**。编辑**"-Obj-C"**要下**链接 → 其他链接器标志**， **"-ObjC"**.

11. 更新您的项目目标**生成设置**。 在**链接 → 其他链接器标志**，更改**"-all_load"**是 `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a` 。 你只需要这样做，如果你有在中定义的问题[这一问题。][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## 升级 2.6.0 项目到 2.7.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.7.0 源，例如到`~/Documents/Cordova-2.7.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova-2.7.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-2.6.0.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-2.7.0.js` 文件。

7.  更新 （或如果您从未更改该文件替换） 您 `AppDelegate.m` 文件根据您从新项目 (见[此比较][3]).

8.  在您 `config.xml` 文件，[删除这条线][4].

9.  删除您 `CordovaLib` 目录和副本 `CordovaLib` 目录从新项目到项目的根目录。

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## 升级 2.5.0 项目到 2.6.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.6.0 源，例如到`~/Documents/Cordova-2.6.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制项目的 `www/cordova-2.6.0.js` 文件到您 `www` 目录中，并删除您 `www/cordova-2.5.0.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及引用的脚本的任何其他文件） 来引用到新的 `cordova-2.6.0.js` 文件。

7.  更新 （或如果您从未更改该文件替换） 您 `AppDelegate.m` 文件根据您从新项目 (见[此比较][5]).

8.  在您 `config.xml` 文件，[添加此新行][6].

9.  在您 `config.xml` 文件，[添加此新行][7].

10. 在您 `config.xml` 文件， [UIWebViewBounce 已改为 DisallowOverscroll，和默认值都不同][8].

11. 在您 `config.xml` 文件， `EnableLocation` 首选项已被否决。

12. 删除您 `CordovaLib` 目录和副本 `CordovaLib` 目录从新项目到项目的根目录。

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## 升级 2.4.0 项目到 2.5.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.5.0 源，例如到`~/Documents/Cordova-2.5.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova-2.5.0.js` 到新项目中的文件您 `www` 目录并删除您 `www/cordova-2.4.0.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-2.5.0.js` 文件。

7.  更新 （或如果您从未更改该文件替换） 您 `AppDelegate.m` 文件根据您从新项目 (见[此比较][9]).

8.  在您 `config.xml` 文件，[添加这些新行][10].

9.  在您 `config.xml` 文件，[编辑的根元素，更改它从科尔多瓦到构件][11].

10. 在您 `config.xml` 文件，[删除 OpenAllWhitelistURLsInWebView 首选项][12].

11. 删除您 `cordova` 目录和副本 `cordova` 目录从新项目到项目的根目录。在 2.5.0，这已更新脚本。

12. 删除您 `CordovaLib` 目录和副本 `CordovaLib` 目录从新项目到项目的根目录。

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## 升级 2.3.0 项目到 2.4.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.4.0 源，例如到`~/Documents/Cordova-2.4.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova-2.4.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-2.3.0.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-2.4.0.js` 文件。

7.  更新 （或替换，如果您从未更改文件） 您 `MainViewController.m` 文件根据您从新项目 (见[此比较][13]).

8.  更新 （或如果您从未更改该文件替换） 您 `AppDelegate.m` 文件根据您从新项目 (见[此比较][14]).

9.  在您 `config.xml` 文件，[添加此新行][15].

10. 删除您 `cordova` 目录和副本 `cordova` 目录从新项目到项目的根目录。在 2.4.0，这已固定的脚本。

11. 删除您 `CordovaLib` 目录和副本 `CordovaLib` 目录从新项目到项目的根目录。

12. AssetsLibrary.framework 作为资源添加到项目中。 （参见[苹果的文档][16]有关如何执行此操作的说明.）。

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## 升级 2.2.0 项目到 2.3.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.3.0 源，例如到`~/Documents/Cordova-2.3.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova-2.3.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-2.2.0.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-2.3.0.js` 文件。

7.  更新 （或如果您从未更改该文件替换） 您 `MainViewController.m` 根据新项目中的一个。

8.  删除您 `cordova` 目录和副本 `cordova` 目录从新项目到项目的根目录。2.3.0，在这新的脚本。

9.  删除您 `CordovaLib` 目录和副本 `CordovaLib` 目录从新项目到项目的根目录。

10. 转换您 `Cordova.plist` 文件为 `config.xml` ，通过运行脚本 `bin/cordova\_plist\_to\_config\_xml` 对您的项目文件。

11. 添加到 InAppBrowser 插件你 `config.xml` ，通过添加此标记下的 `<cordova><plugins>` ：
    
        < 插件名称 = 值"InAppBrowser"="CDVInAppBrowser"/ >
        

12. 请注意目标 C 插件*不*列入白名单了。 到白名单中您的连接与应用程序白名单中，您需要设置 `User-Agent` 连接到同一个用户代理作为主要的科尔多瓦 web 视图的标题。 你可以通过访问 `userAgent` 关闭主视图-控制器属性。 主视图-控制器 ( `CDVViewController` ) 也有 `URLisAllowed` 为您检查是否一个 URL 通过白名单中的方法。

13. 设备的 API 更改：
    
    *   Ios，device.platform 用于返回 `iPhone` ， `iPad` 或 `iPod Touch` ； 现在它返回 （正确）`iOS`.
    *   对于 iOS，device.name (现已被否决所有平台) 用于返回用户的设备的名称 （例如 Shazron 的 iPhone 5 ′) ；现在它返回用于返回什么 device.platform： `iPhone` ， `iPad` 或`iPod Touch`.
    *   对于所有平台，有一个名为 device.model ； 的新属性这将返回特定的设备模型，例如： `iPad2,5` （对于其他平台，返回用于返回什么 device.name）。

## 升级 2.1.0 项目到 2.2.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.2.0 源，例如到`~/Documents/Cordova-2.2.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova-2.2.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-2.1.0.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-2.2.0.js` 文件。

7.  更新 （或如果您从未更改该文件替换） 您 `MainViewController.m` 根据新项目中的一个：
    
    *   更新 → viewWillAppear

8.  复制 `cordova` 目录从新项目到项目的根目录。在 2.2.0，这有更新的 '模仿' 脚本。

9.  下一步，更新您 `CordovaLib` 分项目的引用。 从科尔多瓦 2.1.0 开始，我们 CORDOVALIB Xcode 变量不再使用引用的位置时 `CordovaLib` 驻留，引用现在是绝对文件引用。
    
    1.  启动终端程序
    2.  转到您安装科尔多瓦的位置 （请参见步骤 1）、 在 `bin` 子目录
    3.  运行下面的脚本，其中第一个参数是您的项目的路径 `.xcodeproj` 文件：
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**注**： 在 2.2.0， `bin/create` 脚本中的副本 `CordovaLib` 分项目到您的项目。 要有相同种类的安装程序，只是复制权在 `CordovaLib` 到你的项目目录和更新 `CordovaLib` 分项目 （相对于项目) 在 Xcode 文件检查器中的位置。

## 升级 2.0.0 项目到 2.1.0

与科尔多瓦 2.1.0， `CordovaLib` 已升级为使用**自动引用计数 (弧)**。 你不需要升级到**弧**要使用 CordovaLib，但是如果你想要升级您的项目使用**弧**，请使用 Xcode 迁移向导从菜单中：**编辑 → 重构 → 转换为目标 C 弧...**，取消选择 libCordova.a，然后运行向导完成。

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.1.0 源，例如到`~/Documents/Cordova-2.1.0`.

2.  如果它正在运行，请退出 Xcode。

3.  使用终端程序，定位到你放在上面的下载的源的目录。

4.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova-2.1.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-2.0.0.js` 文件。

6.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-2.1.0.js` 文件。

7.  更新 （或如果您从未更改该文件替换） 您 `AppDelegate.m` 根据新项目中的一个：
    
    *   编辑 → 应用程序： didFinishLaunchingWithOptions：
    *   添加 → 应用程序： supportedInterfaceOrientationsForWindow：

8.  更新 （或如果您从未更改该文件替换） 您 `MainViewController.m` 根据新项目中的一个：
    
    *   添加 → viewWillAppear

9.  复制 `cordova` 目录从新项目到项目的根目录。在 2.1.0，这有更新的脚本，支持带空格的路径。

10. 删除 `VERSION` 文件从您的项目参考 （**是在`CordovaLib`).

11. 下一步，更新您 `CordovaLib` 分项目的引用。 从科尔多瓦 2.1.0 开始，我们 CORDOVALIB Xcode 变量不再使用引用的位置时 `CordovaLib` 驻留，引用现在是绝对文件引用。
    
    1.  启动终端程序
    2.  转到您安装科尔多瓦的位置 （请参见步骤 1）、 在 `bin` 子目录
    3.  运行下面的脚本，其中第一个参数是您的项目的路径 `.xcodeproj` 文件：
        
        `update_cordova_subproject 路径/为/您/项目/xcodeproj`

## 升级 1.9.0 项目到 2.0.0

1.  安装 2.0.0 科尔多瓦。

2.  创建一个新项目，如 iOS 命令行工具中所述。您需要从这个新的项目资产。

3.  复制 `www/cordova-2.0.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-1.9.0.js` 文件。

4.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-2.0.0.js` 文件。

5.  复制 `cordova` 目录从新项目到项目的根目录 （如果你想要的项目的命令行工具)。

6.  添加一个新条目下的 `Plugins` 在你 `Cordova.plist` 下**支持文件**组的文件。 关键是 `Device` 和值是`CDVDevice`.

7.  删除`Cordova.framework`.

8.  删除 `verify.sh` 从**支持文件**组。

9.  在项目导航器中选择项目图标，选择您的项目**目标**，然后选择**生成设置**选项卡。

10. 搜索**预处理器宏**，然后删除所有**CORDOVA_FRAMEWORK = 1**值。

11. 找到 `CordovaLib` 安装在您的硬盘-上根据您的个人文件夹中的目录 `Documents` 子目录。

12. 找到 `CordovaLib.xcodeproj` 文件在 `CordovaLib` 目录中，然后拖放到您的项目文件。它应显示作为子项目。

13. 构建您的项目，你应该与有关的一些错误 `#import` 指令。

14. 为 `#import` 的错误，改变这种风格在任何基于报价进口：
    
        #import "CDV.h"
        
    
    为此基于方括号中的样式：
    
        #import <Cordova/CDV.h>
        
    
    和删除任何 `#ifdef` 任何科尔多瓦的包装进口，他们再也不需要 （现在统一进口)

15. 再次，生成您的项目和它不应具有任何 `#import` 的错误。

16. 在项目导航器中选择**项目图标**，选择您的项目**目标**，然后选择**生成阶段**选项卡。

17. 展开**目标依赖项**阶段，然后选择**+**按钮。

18. 选择 `CordovaLib` 的目标，然后选择**添加**按钮。

19. 展开**链接二进制与图书馆**的第一阶段，（它应该已经包含框架的一群），然后选择**+**按钮。

20. 选择 `libCordova.a` 静态库，然后选择**添加**按钮。

21. 删除**运行脚本**阶段。

22. 在项目导航器中选择**项目图标**，选择您的项目**目标**，然后选择**生成设置**选项卡。

23. 搜索**其他的链接器标志**，并添加相应的值**-force_load**和**-Obj C**.

24. 扩大 `CordovaLib` 子项目。

25. 找到 `VERSION` 文件，将它拖动到您 （我们想要创建一个链接到它，不是副本） 的主项目。

26. 选择**创建组的任何添加的文件夹**单选按钮，然后选择**完成**按钮。

27. 选择 `VERSION` 文件，你只是被拖上一步中。

28. 键入**选项-命令-1**键的组合，以显示**文件检查器**(或菜单项**查看 → 实用程序 → 显示文件检查器**).

29. 选择**相对于 CORDOVALIB** **文件检查器**器下拉菜单中的**位置**.

30. 设置为**独特**，这样才可以找到统一标头的 Xcode 偏好**Xcode 首选项 → 位置 → 派生数据 → 先进的......** 。

31. 在项目导航器中选择**项目图标**，选择你的**目标**，然后选择**生成设置**选项卡。

32. 搜索**标题搜索路径**。该设置将追加这三个值，包括引号：
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. 搜索**其他链接器标志**。该设置将追加此值：
    
        -weak_framework CoreFoundation
        

34. 生成您的项目，它应编译和链接**没有**问题.

35. 从该**计划**下拉箭头，选择您的项目，然后选择**iPhone 5.1 模拟器**.

36. 选择**运行**按钮。

**注**： 如果您的项目不预期正常工作在模拟器中，请注意任何错误的控制台日志中 Xcode 的线索。

## 1.8.X 项目升级到 1.9.0

1.  安装包 1.9.0 科尔多瓦。

2.  创建一个新项目。您将需要的一些资产从这个新的项目。

3.  复制 `www/cordova-1.9.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-1.8.x.js` 文件。

4.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-1.9.0.js` 文件。

**注**： 1.9.0 支持新 `BackupWebStorage` 布尔 `Cordova.plist` 设置。 它默认启用的那么将其设置为 `false` ，禁用它，尤其是在 iOS 6 上。 请参阅[发行说明： 野生动物园和 UIKit 科][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## 升级 1.7.0 项目到 1.8.x

1.  安装 1.8.0 科尔多瓦。

2.  创建一个新项目。您将需要的一些资产从这个新的项目。

3.  复制 `www/cordova-1.8.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-1.7.x.js` 文件。

4.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-1.8.0.js` 文件。

如果您打算使用捕获 API，您将需要在新的**iPad 视网膜显示**资产：

1.  复制 `Resources/Capture.bundle` 从新项目到项目目录中，覆盖您现有的项目 `Resources/Capture.bundle` 项目。

2.  在您的项目中选择 `Capture.bundle` 项目到您的项目在 Xcode 中导航，键入**Delete**键，然后从出现的对话框中选择**移除引用**。

3.  拖动新 `Capture.bundle` 从步骤 1 以上到您项目中 Xcode 导航器，然后选择**创建组的任何添加的文件夹**单选按钮。

## 升级到 1.7.0 的 1.6.x 项目

1.  安装科尔多瓦 1.7.0。

2.  创建一个新项目。您将需要的一些资产从这个新的项目。

3.  复制 `www/cordova-1.7.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-1.6.0.js` 文件。

4.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-1.7.0.js` 文件。

## 升级 1.5.0 项目到 1.6.x

1.  安装 1.6.1 科尔多瓦。

2.  创建的备份， `AppDelegate.m` ， `AppDelegate.h` ， `MainViewController.m` ， `MainViewController.h` ，和 `Cordova.plist` 在您的项目中。

3.  创建一个新项目。您将需要的一些资产从这个新的项目。

4.  将这些文件从新项目复制到您的 1.5.0-based 项目目录在磁盘上，取代任何旧的文件 （备份您的文件首次从上述步骤 2）：
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  添加所有新的 `MainViewController` 和 `AppDelegate` 文件，放入您的 Xcode 项目。

6.  复制 `www/cordova-1.6.1.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/cordova-1.5.0.js` 文件。

7.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-1.6.1.js` 文件。

8.  添加新的 `Cordova.plist` 文件到您的项目。 这是必要的因为核心插件服务名称必须更改以匹配为一个统一的科尔多瓦 JavaScript 文件 (从 Android 和黑莓，部分`cordova-js`).

9.  集成任何设置，你在你的**备份 Cordova.plist**成新的**插件**和**ExternalHosts**条目`Cordova.plist`.

10. 集成任何您已在您的备份中的具体项目代码 `AppDelegate.h` 和 `AppDelegate.m` 成新 `AppDelegate` 文件。 任何 `UIWebViewDelegate` 或 `CDVCommandDelegate` 中的代码 `AppDelegate.m` 需要去到 `MainViewController.m` 现在 （见该文件中的注释掉节）。

11. 集成任何您已在您的备份中的具体项目代码 `MainViewController.h` 和 `MainViewController.m` 成新的 MainViewController 文件。

12. 在项目导航器中的项目图标上单击，选择您的**项目**，然后选择**生成设置**选项卡。

13. 输入**编译器的 C / C + + / 目标 C**在搜索字段中。

14. 选择**苹果 LLVM 编译器 3.1**的值。

## 升级到 1.5.0 版的 1.4.x 项目

1.  安装科尔多瓦 1.5.0 版。

2.  创建一个新的项目并运行一次。您将需要的一些资产从这个新的项目。

3.  复制 `www/cordova-1.5.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/phonegap-1.4.x.js` 文件。

4.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新的科尔多瓦 `cordova-1.5.0.js` 文件。

5.  找到 `PhoneGap.framework` 在你项目导航器中选择它。

6.  键入**Delete**键，删除 `PhoneGap.framework` 项目导航器中的引用。

7.  键入**选项-命令-A**组合键，应下拉表将文件添加到您的项目 （**添加文件...**表）。 请确保选中**创建组的任何添加的文件夹**单选按钮。

8.  键入的**Shift-命令-G**键组合，应下拉你去到一个文件夹中的另一个工作表 （**转到文件夹：**表）。

9.  输入 `/Users/Shared/Cordova/Frameworks/Cordova.framework` 在**转到文件夹：**工作表，然后按**继续**按钮。

10. 在工作表中**添加的文件......** ，请按**添加**按钮。

11. 选择 `Cordova.framework` 项目导航器中。

12. 键入**选项-命令-1**键的组合，以显示**文件检查器**.

13. **绝对路径**在**文件检查器**的下拉菜单中选择的**位置**.

14. 键入**选项-命令-A**组合键，应下拉表将文件添加到您的项目 （**添加文件...**表）。 请确保选中**创建组的任何添加的文件夹**单选按钮。

15. 键入的**Shift-命令-G**键组合，应下拉你去到一个文件夹中的另一个工作表 （**转到文件夹：**表）。

16. 输入 `~/Documents/CordovaLib/Classes/deprecated` 在**转到文件夹：**工作表，然后按**继续**按钮。

17. 在工作表中**添加的文件......** ，请按**添加**按钮。

18. 在你 `AppDelegate.h` ， `AppDelegate.m` ，和 `MainViewController.h` 文件，替换整个 `#ifdef PHONEGAP_FRAMEWORK` 与块：
    
        #import"CDVDeprecated.h"
        

19. 单击项目导航器中的**项目图标**，选择你的**目标**，然后选择**生成设置**选项卡。

20. **框架搜索路径**搜索.

21. 替换现有值与`/Users/Shared/Cordova/Frameworks`.

22. 搜索**预处理器宏**.

23. 对于第一次 （组合） 值，替换的值与**CORDOVA_FRAMEWORK = YES**.

24. 选择**生成阶段**选项卡。

25. 扩大**运行脚本**.

26. 与**科尔多瓦**的**PhoneGap**任何替换.

27. 找到您 `PhoneGap.plist` 文件在项目导航器，并单击文件名一旦输入名称编辑模式。

28. 重命名 `PhoneGap.plist` 到`Cordova.plist`.

29. 用鼠标右键单击 `Cordova.plist` ，然后选择**→ 作为开放源码的代码**.

30. 按**选项-命令-F**，选择**替换**从下拉在上面留下的源窗口。

31. 输入 `com.phonegap` 查找字符串，和 `org.apache.cordova` 的替换字符串，然后按**全部替换**按钮。

32. 查找字符串和**CDV**的**PG**输入替换字符串，然后按**全部替换**按钮。

33. 按**命令-B**生成。 你仍然有你可以摆脱在将来的瞧不起 （请参阅 `CDVDeprecated.h` 。 例如，替换在您的代码中使用的类，PG * CDV *）。

## 升级 1.4.0 1.4.1 向项目

1.  安装 1.4.1 科尔多瓦。

2.  制作一个备份`MainViewController.m`.

3.  创建一个新项目。您将需要的一些资产从这个新的项目。

4.  复制 `MainViewController.m` 到 1.4.0-based 项目目录中的新项目从磁盘上的文件，替换旧文件 （备份您的文件第一次从上面的步骤 2）。

5.  添加 `MainViewController.m` 到 Xcode 项目文件。

6.  将任何您已在您的备份中的具体项目代码集成 `MainViewController.m` 成新的文件。

7.  更新 `phonegap-1.4.0.js` 文件是可选的 JavaScript 1.4.0 和 1.4.1 之间上没有任何改变。

## 升级 1.3.0 项目到 1.4.0

1.  安装 1.4.0 科尔多瓦。

2.  制作一个备份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的项目中。

3.  创建一个新项目。您将需要的一些资产从这个新的项目。

4.  将这些文件从新项目复制到您的 1.3.0-based 项目目录在磁盘上，取代任何旧的文件 （备份您的文件首次从上述步骤 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 项目文件。

6.  复制 `www/phonegap-1.4.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/phonegap-1.3.0.js` 文件。

7.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `phonegap-1.4.0.js` 文件。

8.  添加一个新条目下的 `Plugins` 在你 `PhoneGap.plist` 文件。关键是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的备份中的具体项目代码 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 文件。

## 升级 1.2.0 项目到 1.3.0

1.  安装 1.3.0 科尔多瓦。

2.  制作一个备份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的项目中。

3.  创建一个新项目。您将需要的一些资产从这个新的项目。

4.  将这些文件从新项目复制到您的 1.2.0-based 项目目录在磁盘上，取代任何旧的文件 （备份您的文件首次从上述步骤 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 项目文件。

6.  复制 `www/phonegap-1.3.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/phonegap-1.2.0.js` 文件。

7.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `phonegap-1.3.0.js` 文件。

8.  添加一个新条目下的 `Plugins` 在你 `PhoneGap.plist` 文件。关键是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的备份中的具体项目代码 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 文件。

## 升级 1.1.0 项目到 1.2.0

1.  安装科尔多瓦 1.2.0。

2.  制作一个备份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的项目中。

3.  创建一个新项目。您将需要的一些资产从这个新的项目。

4.  将这些文件从新项目复制到您的 1.1.0-based 项目目录在磁盘上，取代任何旧的文件 （备份您的文件首次从上述步骤 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 项目文件。

6.  复制 `www/phonegap-1.2.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/phonegap-1.1.0.js` 文件。

7.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `phonegap-1.2.0.js` 文件。

8.  添加一个新条目下的 `Plugins` 在你 `PhoneGap.plist` 文件。关键是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的备份中的具体项目代码 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 文件。

## 升级 1.0.0 项目到 1.1.0

1.  安装科尔多瓦 1.1.0。

2.  制作一个备份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的项目中。

3.  创建一个新项目。您将需要的一些资产从这个新的项目。

4.  将这些文件从新项目复制到您的 1.0.0-based 项目目录在磁盘上，取代任何旧的文件 （备份您的文件首次从上述步骤 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 项目文件。

6.  复制 `www/phonegap-1.1.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/phonegap-1.0.0.js` 文件。

7.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `phonegap-1.1.0.js` 文件。

8.  添加一个新条目下的 `Plugins` 在你 `PhoneGap.plist` 文件。关键是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的备份中的具体项目代码 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 文件。

## 升级 0.9.6 项目到 1.0.0

1.  安装科尔多瓦 1.0.0。

2.  制作一个备份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的项目中。

3.  创建一个新项目。您将需要的一些资产从这个新的项目。

4.  将这些文件从新项目复制到您的 0.9.6-based 项目目录在磁盘上，取代任何旧的文件 （备份您的文件首次从上述步骤 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 项目文件。

6.  复制 `www/phonegap-1.0.0.js` 到新项目中的文件您 `www` 目录中，并删除您 `www/phonegap-0.9.6.js` 文件。

7.  更新中的科尔多瓦脚本引用您 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `phonegap-1.0.0.js` 文件。

8.  添加一个新条目下的 `Plugins` 在你 `PhoneGap.plist` 文件。关键是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的备份中的具体项目代码 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 文件。
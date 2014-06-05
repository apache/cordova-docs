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

# 升级黑莓 10

本指南演示如何修改黑莓手机的项目从科尔多瓦的旧版本进行升级。 大多数这些说明适用于与旧集的前面的命令行工具创建的项目 `cordova` CLI 实用程序。 信息，请参阅命令行界面如何更新的 CLI 版本。

## 从 3.1.0 升级到 3.2.0

为创建的科尔多瓦 CLI 的项目：

1.  更新 `cordova` CLI 版本。请参阅命令行界面。

2.  运行`cordova platform update blackberry`

对于不使用 CLI 科尔多瓦创建的项目，请运行：

        bin/update <project_path>
    

## 从 3.0.0 升级到 3.1.0

1.  创建新的 Apache 科尔多瓦 3.1.0 项目使用 CLI，科尔多瓦，如所述的命令行界面。

2.  添加您的平台到科尔多瓦项目中，例如：`cordova
platform add blackberry10`.

3.  复制的原始项目内容 `www` 目录到 `www` 目录在您刚刚创建的科尔多瓦项目的根目录。

4.  复制或覆盖原始项目中的任何本机资产 ( `Resources` ，等等.)

5.  复制 `config.xml` 文件到 `www` 目录中，并删除任何插件定义。您需要修改设置，在这里，而不是平台目录内。

6.  使用科尔多瓦 CLI 工具来安装您需要的任何插件。 请注意 CLI 处理所有核心 Api 作为插件，所以他们可能需要添加。 只有插件标记 3.0.0 和上文与 CLI 兼容。

7.  生成并测试。

请注意，CLI 完全支持 BlackBerry10 平台。PlayBook 和 BBOS，请参阅版本 2.9.0 科尔多瓦和下方。

## 从 2.9.0 升级到 CLI （3.0.0)

1.  创建新的 Apache 科尔多瓦 3.0.0 项目使用 CLI，科尔多瓦，如所述的命令行界面。

2.  添加您的平台到科尔多瓦项目中，例如：`cordova
platform add blackberry10`.

3.  复制的原始项目内容 `www` 目录到 `www` 目录在您刚刚创建的科尔多瓦项目的根目录。

4.  复制或覆盖原始项目中的任何本机资产 ( `Resources` ，等等.)

5.  复制 `config.xml` 文件到 `www` 目录中，并删除任何插件定义。您需要修改设置，在这里，而不是平台目录内。

6.  使用科尔多瓦 CLI 工具来安装您需要的任何插件。请注意 CLI 处理所有核心 Api 作为插件，所以他们可能需要添加。只有 3.0.0 插件是与 CLI 兼容。

7.  生成并测试。

## 升级 2.8.0 项目到 2.9.0

黑莓 10：

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.9.0 源，例如到`~/Cordova-2.9.0`.

2.  退出任何正在运行的 SDK 工具： 日食、 Momentics 和类似。

3.  导航到您放在上面，使用的 unix 像终端的下载的源的目录： 终端程序，Bash，这个软件，等等。

4.  创建一个新项目，黑莓手机壳工具指南中所述。这将成为您更新的项目的家中。

5.  将您的项目源从旧项目复制 `/www` 到新的项目目录 `/www` 目录。

6.  科尔多瓦的脚本中的引用更新 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova.js` 文件。

为 BlackBerryOS/行动手册：

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.9.0 源，例如到`~/Cordova-2.9.0`.

2.  退出任何正在运行的 SDK 工具： 日食、 Momentics 和类似。

3.  导航到您放在上面，使用的 unix 像终端的下载的源的目录： 终端程序，Bash，这个软件，等等。

4.  创建一个新项目，如 iOS 壳工具指南中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova.js` 到新项目中的文件 `www` 目录中，并删除 `www/cordova.js` 文件。

6.  科尔多瓦的脚本中的引用更新 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova.js` 文件。

7.  复制 `native` 到现有项目中，并覆盖旧从新项目目录 `native` 目录。

8.  复制 `lib` 到现有项目中，并覆盖旧从新项目目录 `lib` 目录。

9.  复制 `cordova` 到现有项目中，并覆盖旧从新项目目录 `cordova` 目录。

## 升级 2.7.0 项目到 2.8.0

黑莓 10 使用新的 CLI 模具和管理核心作为插件的 Api。 说明将您的项目迁移到新的项目，而不是更新现有的项目，由于更新一个旧的项目的复杂性。 此外注意到科尔多瓦 js 脚本文件现在被称为 'cordova.js' 和不再包含版本的字符串。

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.8.0 源，例如到`~/Cordova-2.8.0`.

2.  退出任何正在运行的 SDK 工具： 日食、 Momentics 和类似。

3.  导航到您放在上面，使用的 unix 像终端的下载的源的目录： 终端程序，Bash，这个软件，等等。

4.  创建一个新项目，黑莓手机壳工具指南中所述。这将成为您更新的项目的家中。

5.  将您的项目源从旧项目复制 `/www` 到新的项目目录 `/www` 目录。

6.  科尔多瓦的脚本中的引用更新 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova.js` 文件。

为 BlackBerryOS/行动手册：

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.8.0 源，例如到`~/Cordova-2.8.0`.

2.  退出任何正在运行的 SDK 工具： 日食、 Momentics 和类似。

3.  导航到您放在上面，使用的 unix 像终端的下载的源的目录： 终端程序，Bash，这个软件，等等。

4.  创建一个新项目，如 iOS 壳工具指南中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova.js` 到新项目中的文件 `www` 目录中，并删除 `www/cordova.js` 文件。

6.  科尔多瓦的脚本中的引用更新 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova.js` 文件。

7.  复制 `native` 到现有项目中，并覆盖旧从新项目目录 `native` 目录。

8.  复制 `lib` 到现有项目中，并覆盖旧从新项目目录 `lib` 目录。

9.  复制 `cordova` 到现有项目中，并覆盖旧从新项目目录 `cordova` 目录。

## 升级 2.6.0 项目到 2.7.0

1.  下载并解压缩到您的硬盘驱动器上的永久目录位置的科尔多瓦 2.7.0 源，例如到`~/Cordova-2.7.0`.

2.  退出任何正在运行的 SDK 工具： 日食、 Momentics 和类似。

3.  导航到您放在上面，使用的 unix 像终端的下载的源的目录： 终端程序，Bash，这个软件，等等。

4.  创建一个新项目，黑莓手机壳工具指南中所述。您需要从这个新的项目资产。

5.  复制 `www/cordova-2.7.0.js` 到新项目中的文件 `www` 目录中，并删除 `www/cordova-2.6.0.js` 文件。

6.  科尔多瓦的脚本中的引用更新 `www/index.html` 文件 （以及包含该脚本引用的任何其他文件） 以指向新 `cordova-2.7.0.js` 文件。

7.  复制 `native` 到现有项目中，并覆盖旧从新项目目录 `native` 目录。

8.  复制 `lib` 到现有项目中，并覆盖旧从新项目目录 `lib` 目录。

9.  复制 `cordova` 到现有项目中，并覆盖旧从新项目目录 `cordova` 目录。

## 从 2.5.0 升级到 2.6.0

更新 PhoneGap 下载目录：

建议你下载整个目录的新副本。

但是，在这里是零敲碎打更新所需的新零件：

1.  更新中的 cordova.blackberry.js 文件 `Phonegap-2.6.0/lib/blackberry/javascript` 目录。

2.  更新 `ext` ， `ext-air` ，和 `ext-qnx` 在 `Phonegap-2.6.0/lib/blackberry/framework` 目录。

3.  更新 `build.xml` 文件在 `Phonegap-2.6.0/lib/blackberry` 目录。

4.  更新 `Phonegap-2.6.0/lib/blackberry/bin` 目录。

5.  更新 `VERSION` 文件在 `Phonegap-2.6.0/lib/blackberry` 目录。

更新示例 / 目录或迁移现有的项目：

1.  打开 `www` 目录，其中包含该应用程序。

2.  删除和更新中的.jar 文件 `ext/` 目录。

3.  更新的内容 `ext-air/` 目录。

4.  更新的内容 `ext-qnx/` 目录。

5.  复制新 `cordova-2.6.0.js` 到您的项目。

6.  更新您的 html 代码，使用新的 `cordova-2.6.0.js` 文件。

## 从 2.4.0 升级到 2.5.0

更新 PhoneGap 下载目录：

建议你下载整个目录的新副本。

但是，在这里是零敲碎打更新所需的新零件：

1.  更新中的 cordova.blackberry.js 文件 `Phonegap-2.5.0/lib/blackberry/javascript` 目录。

2.  更新 `ext` ， `ext-air` ，和 `ext-qnx` 在 `Phonegap-2.5.0/lib/blackberry/framework` 目录。

3.  更新 `build.xml` 文件在 `Phonegap-2.5.0/lib/blackberry` 目录。

4.  更新 `Phonegap-2.5.0/lib/blackberry/bin` 目录。

5.  更新 `VERSION` 文件在 `Phonegap-2.5.0/lib/blackberry` 目录。

更新示例 / 目录或迁移现有的项目：

1.  打开 `www` 目录，其中包含该应用程序。

2.  删除和更新中的.jar 文件 `ext/` 目录。

3.  更新的内容 `ext-air/` 目录。

4.  更新的内容 `ext-qnx/` 目录。

5.  复制新 `cordova-2.5.0.js` 到您的项目。

6.  更新您的 html 代码，使用新的 `cordova-2.5.0.js` 文件。

## 从 2.3.0 升级到 2.4.0

更新只是 `www` 目录：

1.  打开 `www` 目录，其中包含该应用程序。

2.  删除和更新中的.jar 文件 `ext/` 目录。

3.  更新的内容 `ext-air/` 目录。

4.  复制新 `cordova-2.4.0.js` 到您的项目。
    
    *   如果行动手册，然后更新.js 文件在 `playbook/` 目录。
    *   如果黑莓 10，然后更新中的.js 文件 `qnx/` 目录。

5.  更新您的 html 代码，使用新的 `cordova-2.4.0.js` 文件。

更新 （即，更新使用 ant 工具） 的示例目录：

1.  打开 `sample/lib/` 目录。

2.  更新中的.jar 文件 `cordova.2.3.0/ext/` 目录。

3.  更新的内容 `cordova.2.3.0/ext-air/` 目录。

4.  更新的内容 `cordova.2.3.0/ext-qnx/` 目录。

5.  更新中的.js 文件 `cordova.2.3.0/javascript/` 目录。

6.  打开 `sample/lib/` 目录和重命名 `cordova.2.3.0/` 到目录`cordova.2.4.0/`.

7.  类型 `ant blackberry build` 或 `ant playbook build` 来更新 `www` 目录与更新科尔多瓦。

8.  打开 `www` 目录和更新您的 html 代码，使用新的 `cordova-2.4.0.js` 文件。

## 从 2.2.0 升级到 2.3.0

更新只是 `www` 目录：

1.  打开 `www` 目录，其中包含该应用程序。

2.  删除和更新中的.jar 文件 `ext/` 目录。

3.  更新的内容 `ext-air/` 目录。

4.  复制新 `cordova-2.3.0.js` 到您的项目。
    
    *   如果行动手册，然后更新.js 文件在 `playbook/` 目录。
    *   如果黑莓 10，然后更新中的.js 文件 `qnx/` 目录。

5.  更新您的 html 代码，使用新的 `cordova-2.3.0.js` 文件。

更新 （即，更新使用 ant 工具） 的示例目录：

1.  打开 `sample/lib/` 目录。

2.  更新中的.jar 文件 `cordova.2.2.0/ext/` 目录。

3.  更新的内容 `cordova.2.2.0/ext-air/` 目录。

4.  更新的内容 `cordova.2.2.0/ext-qnx/` 目录。

5.  更新中的.js 文件 `cordova.2.2.0/javascript/` 目录。

6.  打开 `sample/lib/` 目录和重命名 `cordova.2.2.0/` 到目录`cordova.2.3.0/`.

7.  类型 `ant blackberry build` 或 `ant playbook build` 来更新 `www` 目录与更新科尔多瓦。

8.  打开 `www` 目录和更新您的 html 代码，使用新的 `cordova-2.3.0.js` 文件。

## 从 2.1.0 升级到 2.2.0

更新只是 www 目录：

1.  打开 `www` 目录，其中包含该应用程序。

2.  删除和更新中的.jar 文件 `ext/` 目录。

3.  更新的内容 `ext-air/` 目录。

4.  复制新 `cordova-2.2.0.js` 到您的项目。
    
    *   如果行动手册，然后更新.js 文件在 `playbook/` 目录。
    *   如果黑莓 10，然后更新中的.js 文件 `qnx/` 目录。

5.  更新您的 html 代码，使用新的 `cordova-2.2.0.js` 文件。

更新 （即，更新使用 ant 工具） 的示例目录：

1.  打开 `sample/lib/` 目录。

2.  更新中的.jar 文件 `cordova.2.1.0/ext/` 目录。

3.  更新的内容 `cordova.2.1.0/ext-air/` 目录。

4.  更新的内容 `cordova.2.1.0/ext-qnx/` 目录。

5.  更新中的.js 文件 `cordova.2.1.0/javascript/` 目录。

6.  打开 `sample/lib/` 目录和重命名 `cordova.2.1.0/` 到目录`cordova.2.2.0/`.

7.  类型 `ant blackberry build` 或 `ant playbook build` 来更新 `www` 目录与更新科尔多瓦。

8.  打开 `www` 目录和更新您的 html 代码，使用新的 `cordova-2.2.0.js` 文件。

## 从 2.0.0 升级到 2.1.0

更新只是 `www` 目录：

1.  打开 `www` 目录，其中包含该应用程序。

2.  删除和更新中的.jar 文件 `ext/` 目录。

3.  更新的内容 `ext-air/` 目录。

4.  复制新 `cordova-2.1.0.js` 到您的项目。
    
    *   如果行动手册，然后更新.js 文件在 `playbook/` 目录。

5.  更新您的 html 代码，使用新的 `cordova-2.1.0.js` 文件。

更新 （即，更新使用 ant 工具） 的示例目录：

1.  打开 `sample/lib/` 目录。

2.  更新中的.jar 文件 `cordova.2.0.0/ext/` 目录。

3.  更新的内容 `cordova.2.0.0/ext-air/` 目录。

4.  更新中的.js 文件 `cordova.2.0.0/javascript/` 目录。

5.  打开 `sample/lib/` 目录和重命名 `cordova.2.0.0/` 到目录`cordova.2.1.0/`.

6.  类型 `ant blackberry build` 或 `ant playbook build` 来更新 `www` 目录与更新科尔多瓦。

7.  打开 `www` 目录和更新您的 html 代码，使用新的 `cordova-2.1.0.js` 文件。

## 从 1.9.0 升级到 2.0.0

更新只是 `www` 目录：

1.  打开 `www` 目录，其中包含该应用程序。

2.  删除和更新中的.jar 文件 `ext/` 目录。

3.  更新的内容 `ext-air/` 目录。

4.  复制新 `cordova-2.0.0.js` 到您的项目。
    
    *   如果行动手册，然后更新.js 文件在 `playbook/` 目录。

5.  更新您的 html 代码，使用新的 `cordova-2.0.0.js` 文件。

6.  更新 `www/plugins.xml` 文件。两个插件更改其命名空间/服务标签。更改为的捕获和联系人的插件，从旧的条目：
    
        < 插件名称 ="捕获"value="org.apache.cordova.media.MediaCapture"/ >< 插件名称 ="联系人"value="org.apache.cordova.pim.Contact"/ >
        
    
    自：
    
        < 插件名称 ="捕获"value="org.apache.cordova.capture.MediaCapture"/ >< 插件名称 ="联系人"value="org.apache.cordova.pim.Contact"/ >
        

更新 （即，更新使用 ant 工具） 的示例目录：

1.  打开 `sample/lib/` 目录。

2.  更新中的.jar 文件 `cordova.1.9.0/ext/` 目录。

3.  更新的内容 `cordova.1.9.0/ext-air/` 目录。

4.  更新中的.js 文件 `cordova.1.9.0/javascript/` 目录。

5.  打开 `sample/lib/` 目录和重命名 `cordova.1.9.0/` 到目录`cordova.2.0.0/`.

6.  类型 `ant blackberry build` 或 `ant playbook build` 来更新 `www` 目录与更新科尔多瓦。

7.  打开 `www` 目录和更新您的 html 代码，使用新的 `cordova-2.0.0.js` 文件。

8.  打开 `www` 目录和更新 `plugins.xml` 文件。两个插件更改其命名空间/服务标签。更改为的捕获和联系人的插件，从旧的条目：
    
         < 插件名称 ="捕获"value="org.apache.cordova.media.MediaCapture"/ >< 插件名称 ="联系人"value="org.apache.cordova.pim.Contact"/ >
        
    
    自：
    
         < 插件名称 ="捕获"value="org.apache.cordova.capture.MediaCapture"/ >< 插件名称 ="联系人"value="org.apache.cordova.pim.Contact"/ >
        

*   要升级到 1.8.0，请转从 1.7.0

## 从 1.7.0 升级到 1.8.0

更新只是 `www` 目录：

1.  打开 `www` 目录，其中包含该应用程序。

2.  删除和更新中的.jar 文件 `ext/` 目录。

3.  更新的内容 `ext-air/` 目录。

4.  复制新 `cordova-1.8.0.js` 到您的项目。
    
    *   如果行动手册，然后更新.js 文件在 `playbook/` 目录。

5.  更新您的 html 代码，使用新的 `cordova-1.8.0.js` 文件。

6.  更新 `www/plugins.xml` 文件。两个插件更改其命名空间/服务标签。更改为的捕获和联系人的插件，从旧的条目：
    
        < 插件名称 ="捕获"value="org.apache.cordova.media.MediaCapture"/ >< 插件名称 ="联系人"value="org.apache.cordova.pim.Contact"/ >
        
    
    自：
    
        < 插件名称 ="捕获"value="org.apache.cordova.capture.MediaCapture"/ >< 插件名称 ="联系人"value="org.apache.cordova.pim.Contact"/ >
        

更新 （即，更新使用 ant 工具） 的示例目录：

1.  打开 `sample/lib/` 目录。

2.  更新中的.jar 文件 `cordova.1.7.0/ext/` 目录。

3.  更新的内容 `cordova.1.7.0/ext-air/` 目录。

4.  更新中的.js 文件 `cordova.1.7.0/javascript/` 目录。

5.  打开 `sample/lib/` 目录和重命名 `cordova.1.7.0/` 到目录`cordova.1.8.0/`.

6.  类型 `ant blackberry build` 或 `ant playbook build` 来更新 `www` 目录与更新科尔多瓦。

7.  打开 `www` 目录和更新您的 html 代码，使用新的 `cordova-1.8.0.js` 文件。

8.  打开 `www` 目录和更新 `plugins.xml` 文件。两个插件更改其命名空间/服务标签。更改为的捕获和联系人的插件，从旧的条目：
    
         < 插件名称 ="捕获"value="org.apache.cordova.media.MediaCapture"/ >< 插件名称 ="联系人"value="org.apache.cordova.pim.Contact"/ >
        
    
    自：
    
         < 插件名称 ="捕获"value="org.apache.cordova.capture.MediaCapture"/ >< 插件名称 ="联系人"value="org.apache.cordova.pim.Contact"/ >
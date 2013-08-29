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

# 使用 Plugman 来管理插件

从 3.0 版本开始，科尔多瓦实现所有设备 Api 作为插件，然后留在默认情况下禁用。 此外，它还支持两种不同的方法来添加和删除插件。 第一是通过使用 `cordova` 所述的命令行界面 CLI。 第二是通过使用一个较低级别[plugman][1]命令行界面。 本指南着重于第二种方法，这可能是谁想要升级其版本的科尔多瓦，但谁都没尚未通过工作流中，科尔多瓦 CLI 的开发人员非常有用。

 [1]: https://github.com/apache/cordova-plugman/

在 plugman 上的详细信息，请参阅[其库中的自述文件][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## 基本命令

要安装 plugman，您必须在您的机器上安装的[节点][3]：

 [3]: http://nodejs.org/

    npm install -g plugman
    

在这里是要添加的每个平台插件的语法：

    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

要卸载的插件：

    plugman --uninstall --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## 安装核心插件

下面的示例显示如何添加插件，如需要，这样您在您的项目中使用任何科尔多瓦 Api 仍然工作后你升级到 3.0 版本。对于每个命令，你需要选择目标平台，并引用该平台的项目目录。

*   科尔多瓦-插件-电池-状态 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git

*   科尔多瓦-插件-相机 plugman-< ios|android|blackberry10|wp7|wp8 > — — 平台项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git

*   科尔多瓦-插件-控制台 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git

*   科尔多瓦-插件-联系人 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git

*   科尔多瓦-插件-设备 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

*   科尔多瓦-插件-设备-运动 （加速度计） plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git

*   科尔多瓦-插件-设备-方向 (指南针) plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git

*   科尔多瓦-插件-对话框 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git

*   科尔多瓦-插件-文件 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git

*   科尔多瓦的插件文件传输 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git

*   科尔多瓦-插件-地理定位 plugman-< ios|android|blackberry10|wp7|wp8 > — — 平台项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git

*   科尔多瓦-插件-全球化 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git

*   科尔多瓦-插件-inappbrowser plugman-< ios|android|blackberry10|wp7|wp8 > — — 平台项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git

*   科尔多瓦-插件-媒体 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git

*   科尔多瓦-插件-媒体-捕获 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git

*   科尔多瓦-插件-网络-信息 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git

*   科尔多瓦-插件-闪屏 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git

*   科尔多瓦-插件-振动 plugman — — 平台 < ios|android|blackberry10|wp7|wp8 > — — 项目 <directory> — — 插件 https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git
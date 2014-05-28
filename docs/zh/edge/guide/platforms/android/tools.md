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

# Android 壳工具指南

本指南演示如何使用平台为中心的外壳工具科尔多瓦的一整套开发 Android 应用程序。 这种发展道路，概述中讨论可能会为您提供比所述的命令行界面的跨平台 CLI 工具更大范围的发展方案。 例如，您需要部署一个科尔多瓦 web 视图自定义旁边的本机组件时使用外壳程序工具。 在使用之前要么发展路径，您必须首先配置 Android SDK 环境 Android 平台指南中所述。

要为 android 系统启用外壳工具，请从[cordova.apache.org][1]下载科尔多瓦。 下载文件中包含单独的档案，为每个平台。 展开每个您想要的目标， `android` 在这种情况下。 相关的工具，通常可用在顶级 `bin` 目录中，否则为咨询**自述**文件，了解有关更多详细的指示。

 [1]: http://cordova.apache.org

这些工具允许您创建、 构建和运行 Android 应用程序。 额外的命令行界面，可以跨所有平台的插件功能的信息，请参阅使用 Plugman 到管理插件。 有关如何开发插件的详细信息，请参阅应用程序插件。

## 创建一个项目

运行 `create` 命令，指定的现有路径的项目、 反向域风格包标识符和应用程序的显示名称。 这里是 Mac/Linux 和 Windows 的语法：

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## 生成

此清理，然后生成项目。

在 Mac/Linux 或 Windows 上调试：

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

释放，Mac/Linux 或 Windows 上：

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## 运行应用程序

`run`命令接受下列*可选*的参数：

*   目标规范。这包括 `--emulator` ， `--device` ，或`--target=<targetID>`.

*   生成规范。这包括 `--debug` ， `--release` ，或`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

请确保您创建至少一个 Android 虚拟设备，否则为系统会提示您这样与做 `android` 命令。 如果多个 AVD 可用作为目标，提示您选择一个。 默认情况下 `run` 命令检测连接的设备或当前正在运行的仿真程序，如果没有设备发现。

## 日志记录

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## 清洗

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## 手动使用的蚂蚁

如果你想打电话要蚂蚁直接从命令行如 `ant debug install` ，您需要指定的附加参数到 ant 命令：

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

这是因为是比默认值不同的科尔多瓦的 Ant 脚本所使用的目录。这样做是为了避免冲突，从与在命令行运行 Ant 时日食/ADT 里面。

这些附加参数，将自动为您添加时使用 `cordova/build` 和 `cordova/run` 脚本上文所述。 为此它建议使用 `cordova/build` 和 `cordova/run` 而不是直接从命令行调用 Ant 脚本。
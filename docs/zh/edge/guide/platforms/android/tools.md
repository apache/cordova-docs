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

# Android 系统的命令行工具

`cordova`命令行实用程序是一个高级别的工具，允许您在一次跨几个平台生成的应用程序。 旧版本的科尔多瓦框架提供了特定于每个平台的命令行工具集。 若要使用它们作为 CLI 的替代，您需要从[cordova.apache.org][1]下载此版本的科尔多瓦。 下载文件中包含单独的档案，为每个平台。 展开您想要的目标平台。 这里描述的工具，通常可用在顶级 `bin` 目录中，否则为咨询**自述**文件，了解有关更多详细的指示。

 [1]: http://cordova.apache.org

## 创建一个项目

运行 `create` 命令，指定的现有路径的项目、 反向域式包标识符和应用程序的显示名称。这里是 Mac 和 Windows 的语法：

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## 生成

此清理，然后生成项目。

在 Mac 或 Windows 上调试：

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

释放，Mac 或 Windows 上：

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## 运行应用程序

`run`命令接受下列*可选*的参数：

*   目标规范。这包括 `--emulator` ， `--device` ，或`--target=<targetID>`.

*   生成规范。这包括 `--debug` ， `--release` ，或`--nobuild`.
    
    \[目标\] \[生成\] $ /path/to/project/cordova/run $ C:\path\to\project\cordova\run.bat \[目标\] \[生成\]

请确保您创建至少一个 Android 虚拟设备，否则为系统会提示您这样与做 `android` 命令。 如果多个 AVD 可用作为目标，提示您选择一个。 默认情况下 `run` 命令检测连接的设备或当前正在运行的仿真程序，如果没有设备发现。

## 日志记录

    $ /path/to/project/cordova/log $ C:\path\to\project\cordova\log.bat
    

### 清洗

    $ /path/to/project/cordova/clean $ C:\path\to\project\cordova\clean.bat
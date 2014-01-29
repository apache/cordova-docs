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

# Windows Phone 的命令行工具

`cordova`命令行实用程序是一个高级别的工具，允许您在一次跨几个平台生成的应用程序。 旧版本的科尔多瓦框架提供了特定于每个平台的命令行工具集。 若要使用它们作为 CLI 的替代，您需要从[cordova.apache.org][1]下载此版本的科尔多瓦。 下载文件中包含单独的档案，为每个平台。 展开您想要的目标平台。 这里描述的工具，通常可用在顶级 `bin` 目录中，否则为咨询**自述**文件，了解有关更多详细的指示。

 [1]: http://cordova.apache.org

低级命令行界面，它使插件的信息，请参阅使用 Plugman 到管理插件。有关概述，请参见应用程序插件。

## Windows Phone

Windows Phone 的命令行工具支持创建、 构建和运行的新项目。必须从 cmd 或 powershell 的提示符下运行命令。

WP8 回购现在包括用于生成 WP7 + WP8 代码的应用程序。回购为每个具有的子目录： `wp7/` 和`wp8/`.

## 创建一个项目

有 2 种方法去有关创建一个新的 Apache 科尔多瓦 WP7 或 WP8 应用程序。

### 运行该批处理文件来创建和安装模板

*   根的回购协议包含 `createTemplates.bat` 文件。 双击它产生两个 `.zip` 文件： `CordovaWP7_x_x_x.zip` 和 `CordovaWP8_x_x_x.zip` ，其中*x.x.x*表示的当前版本号。 若要方便地使用这些文件在 Visual Studio 中的，复制它们到 `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` 。 然后，可以从 Visual Studio 中创建新的 Apache 科尔多瓦 Windows Phone 应用程序**文件 → 新建项目**菜单。

*   如果您从命令行运行该批处理文件，还可以调用同一个参数，以便自动安装

运行该脚本：

    > createTemplates.bat-安装
    

### 在命令行上使用创建脚本

运行 `create` 命令，指定的现有路径的项目、 反向域式包标识符和应用程序的显示名称。 下面是 Windows Phone 7 和 8 的语法：

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

启动 Visual Studio 和打开解决方案文件 (.sln) 中 (C:\path\to\my\_new\_project)

生成并运行它

## 建设项目 （清洁，然后生成）

*   调试
    
    $ C:\path\to\my\_new\_project\cordova\build-调试

*   释放
    
    $ C:\path\to\my\_new\_project\cordova\build — — 释放

## 运行应用程序

使用下列*可选*的参数运行运行命令

*   目标规范。这包括 `--emulator` ， `--device` ，或`--target=<targetID>`.

*   生成规范。这包括 `--debug` ， `--release` ，或`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[目标\] \[生成\]

默认情况下 `run` 命令调用与 `--emulator --debug` 如果不提供了标志。

## 清洗

    $ C:\path\to\my_new_project\cordova\clean
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

# iOS 命令行工具

`cordova`命令行实用程序是一个高级别的工具，允许您在一次跨几个平台生成的应用程序。 旧版本的科尔多瓦框架提供了特定于每个平台的命令行工具集。 若要使用它们作为 CLI 的替代，您需要从[cordova.apache.org][1]下载此版本的科尔多瓦。 下载文件中包含单独的档案，为每个平台。 展开您想要的目标平台。 这里描述的工具，通常可用在顶级 `bin` 目录中，否则为咨询**自述**文件，了解有关更多详细的指示。

 [1]: http://cordova.apache.org

IOS 命令行工具都建立在 shell 脚本和依赖于 Xcode 命令行工具如 `xcode-select` 和`xcodebuild`.

低级命令行界面，它使插件的信息，请参阅使用 Plugman 到管理插件。有关概述，请参见应用程序插件。

## 创建一个项目

运行 `create` 命令，指定的现有路径的项目、 反向域式包标识符和应用程序的显示名称。

    $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## 生成项目

    $ /path/to/my_new_project/cordova/build
    

## 在模拟器上运行应用程序

    $ /path/to/my_new_project/cordova/run
    

## 释放

    $ /path/to/my_new_project/cordova/release
    

## 日志记录

    $ /path/to/my_new_project/cordova/log
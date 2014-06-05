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

# iOS 壳工具指南

本指南演示如何使用科尔多瓦的套的平台为中心的外壳程序工具来开发 iOS 应用程序。 这种发展道路，概述中讨论可能会为您提供更广泛的发展方案时，iOS 比所述的命令行界面的跨平台 CLI 工具。 例如，您需要部署一个科尔多瓦 web 视图自定义旁边的本机组件时使用外壳程序工具。 在使用之前要么发展路径，您必须首先配置 SDK 环境的 iOS 平台指南中所述。 这些工具依赖于 Xcode 的命令行工具如 `xcode-select` 和`xcodebuild`.

若要启用 iOS 的外壳工具，请从[cordova.apache.org][1]下载科尔多瓦。 下载文件中包含单独的档案，为每个平台。 展开每个您想要的目标， `ios` 在这种情况下。 相关的工具，通常可用在顶级 `bin` 目录中，否则为咨询**自述**文件，了解有关更多详细的指示。

 [1]: http://cordova.apache.org

这些工具允许您创建、 构建和运行 iOS 的应用程序。 额外的命令行界面，可以跨所有平台的插件功能的信息，请参阅使用 Plugman 到管理插件。 有关如何开发插件的详细信息，请参阅应用程序插件。

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
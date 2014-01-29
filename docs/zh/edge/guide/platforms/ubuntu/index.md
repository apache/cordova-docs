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

# Ubuntu 平台指南

## 初始版本

欢迎来到科尔多瓦 Ubuntu 平台支持的初始版本。 此版本中，重点是在 Ubuntu 的系统上开发和使用科尔多瓦 Web 项目开发工作流。 这包括将 Ubuntu 平台添加到您的项目，添加标准科尔多瓦插件，，当然，建设和运行的 Ubuntu 平台的应用程序。

### Ubuntu SDK

您还可能想要安装 Ubuntu QtCreator 开发环境。 请参阅[developer.ubuntu.com][1]为更多的信息。 (QtCreator SDK 不是需要将 Ubuntu 平台支持添加到应用程序科尔多瓦。)

 [1]: http://developer.ubuntu.com

### Ubuntu 运行时平台

Ubuntu 是知名的为其桌面环境 （用于笔记本电脑、 Pc 和此类）。 Ubuntu 触摸延伸到手机和平板电脑上的 Ubuntu 操作系统。 Ubuntu 运行时平台有不同的 CPU 体系结构 （x 86，armhf，等.）。 必须适当地编译插件和应用程序代码。 对此广泛领域的支持正在迅速演变在 Ubuntu 中。

### 最新信息

科尔多瓦 app 支持 Ubuntu 运行时平台的最新信息，请参阅[wiki.ubuntu.com/Cordova][2].

 [2]: http://wiki.ubuntu.com/Cordova

## 发展平台要求

此初始发行版的开发平台应该是 Ubuntu 桌面。Ubuntu 13.10 (代号 '暧昧') 或更高版本需要享受完整的支持的功能集。

你可以安装科尔多瓦非 Ubuntu 使用在系统上 （故宫），但重要的能力，在这个时候只提供通过 Ubuntu debian 软件包。

## 科尔多瓦安装

添加到您的 Ubuntu 系统 Ubuntu 科尔多瓦[个人包存档][3]：

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

安装科尔多瓦 cli 包 （和它的依赖项）：

    $ sudo apt-get install cordova-cli
    

## 项目工作流

### 创建一个项目

    $ cordova create project1 REVERSEDNSNAME.project1 project1
    

### 移动到项目目录

    $ cd project1
    

### 添加 Ubuntu 平台

    $ cordova platform add ubuntu
    

### Ubuntu 的生成

    $ cordova build ubuntu
    

### 运行应用程序

    $ cordova run ubuntu
    

### 添加电池状态插件

    $ cordova plugin add org.apache.cordova.battery-status
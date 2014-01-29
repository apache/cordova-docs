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

# 概述

科尔多瓦是一个开放源码移动开发框架。 它允许您使用标准的 web 技术如 HTML5、 CSS3 和 JavaScript 进行跨平台开发，避免每个移动平台的本机开发语言。 应用程序在有针对性的对每个平台的包装内执行，并依靠符合标准的 API 绑定访问每个设备的传感器、 数据和网络状态。

如果您是，使用科尔多瓦：

*   移动开发人员和想要扩展应用程序跨多个平台，而无需重新实现它与每个平台的语言和工具集。

*   web 开发人员和想要部署 web 应用程序打包为分布在各种应用程序中存储的门户。

*   移动开发人员感兴趣混合本机应用程序中的组件与*web 视图*（浏览器窗口），可以访问设备级的 Api，或者如果您想要开发的插件界面本机和 web 视图组件之间。

## 基本组件

科尔多瓦的应用程序都依赖于一个共同的 `config.xml` 文件，提供有关应用程序的信息，并指定参数影响它如何工作，如它是否响应方向转移。 此文件遵循 W3C 的[打包 Web 应用程序][1]或*构件*，规范。

 [1]: http://www.w3.org/TR/widgets/

应用程序本身是作为 web 页来实现，默认情况下，引用任何 CSS、 JavaScript、 图像、 媒体文件，命名*index.html*或其他资源是它运行的必要条件。 这款应用程序作为*web 视图*的本机应用程序中包装，您分发给应用程序商店内执行。 为 web 应用程序进行交互的方式本机应用程序做的各项设备功能，它也必须引用 `cordova.js` 文件，该文件提供 API 绑定。

科尔多瓦启用 web 视图可提供具有其整个用户界面的应用程序。 它也可以是更大，混合应用程序与本机应用程序组件混合 web 视图中的一个组件。 科尔多瓦提供*插件*接口，使这些组件，以互相沟通。

## 发展路径

从 3.0 版，可以使用两种基本的工作流程来创建移动应用程序。 虽然您可以完成同样的事情使用这两个工作流，某些任务是更好地适合于使用在另一个工作流。 出于此原因，您应该了解这两个工作流，以便您可以使用最佳的工具为最好的局面。

*Web 项目开发*工作流和*本机平台开发*工作流支持的两个主要工作流。

### Web 项目开发

你能想到的第一个工作流作为*Web 项目开发*工作流。 当您想要创建一个科尔多瓦运行应用程序在尽可能多的移动操作系统上尽可能以尽可能少的特定于平台开发工作时，应使用此工作流。 此工作流进入了存在与科尔多瓦 3.0 和科尔多瓦*的命令行界面*(CLI) 的创作。 CLI 文摘走很多的照顾与构建您的应用程序涉及的细节的较低级别 shell 脚本的功能，如将复制您的 web 资产到正确的文件夹为每个移动平台，平台特定的配置更改，或运行特定生成脚本来生成应用程序二进制文件。 你可以阅读更多关于*Web 项目开发*工作流中的命令行界面。 请注意往往当人们说的"cli"，他们正在谈论此*Web 项目开发*工作流。

### 本机平台开发

第二个工作流可以看作一个*本机平台开发*工作流。 当你想要侧重于建设为一个单一的平台应用程序和感兴趣的改变的较低级别平台详细信息时，您应该使用它。 虽然仍然可以使用此工作流来构建跨平台的应用程序，缺乏的工具进行抽象的各种生成步骤将会使它更加困难。 例如，必须使用 Plugman 来安装您想要支持的每个平台的同一插件一次。 为使用此*本机平台开发*工作流带来的好处是的它使您能够访问到的较低级别 shell 脚本生成并测试应用程序，因此，如果你黑客本机侧的事情，此工作流是最有效的方法来测试您的更改。 此工作流，也是恰当的如果您想要使用 CordovaWebView 作为一个更大的本机应用程序中的一小部分 （见嵌入 WebViews 指南 》）。您可以阅读有关此工作流，在不同的 Shell 工具指南，例如，Android 壳工具指南和 iOS 壳工具指南。

当刚开始的时候，它可能是最容易使用的*Web 项目开发*工作流来创建一个应用程序。 （若要安装 CLI，参见命令行界面。根据您想要的目标的平台的集，您可以依靠逐步更多地共享在开发周期的 CLI：

*   在最基本的情况下，你可以使用 CLI 只是为了创建一个新项目填充，您要修改的默认配置。

*   对于很多的移动平台，也可以使用 CLI 来设置内部每个 SDK 编译所需的额外的项目文件。 为此，您必须安装每个目标的平台 SDK。 （见平台指南的说明）。如表中所示的平台支持，您可能需要在目标平台根据不同的操作系统上运行，CLI。

*   为支持平台，CLI 可以编译 executible 的应用程序和基于 SDK 的设备仿真程序中运行它们。 为全面的测试，还可以生成应用程序文件，并直接在设备上安装它们。

在开发周期中的任何点，您可以切换到使用更多的*本机平台开发*工作流。 提供的特定于平台 SDK 工具可能会提供一组更丰富的选项。 （见有关每个平台 SDK 工具的详细信息平台指南设置）。

SDK 环境是更适当的如果你想要实现一个混合本机和基于 web 的应用程序组件的混合应用。 您可以使用命令行实用程序最初生成应用程序，或以迭代方式此后要喂 SDK 工具更新的代码。 您也可以自己生成应用程序的配置文件。 （见 config.xml 文件的详细信息）。
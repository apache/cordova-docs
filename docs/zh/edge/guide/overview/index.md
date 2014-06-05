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

Apache 科尔多瓦是一个开放源码移动开发框架。 它允许您使用标准的 web 技术如 HTML5、 CSS3 和 JavaScript 进行跨平台开发，避免每个移动平台的本机开发语言。 应用程序在有针对性的对每个平台的包装内执行，并依靠符合标准的 API 绑定访问每个设备的传感器、 数据和网络状态。

Apache 科尔多瓦于 2012 年 10 月毕业于作为一个顶级项目内阿帕奇软件基金会 (ASF)。 科尔多瓦的未来发展会透过 ASF，确保开放管理的项目。 它将永远是根据 Apache 许可证，2.0 版本的自由和开放源码。访问[cordova.apache.org][1]的详细信息。

 [1]: http://cordova.apache.org

如果您是，使用 Apache 科尔多瓦：

*   移动开发人员和想要扩展应用程序跨多个平台，而无需重新实现它与每个平台的语言和工具集。

*   web 开发人员和想要部署 web 应用程序打包为分布在各种应用程序中存储的门户。

*   移动开发人员感兴趣混合本机应用程序中的组件与*web 视图*（浏览器窗口），可以访问设备级的 Api，或者如果您想要开发的插件界面本机和 web 视图组件之间。

## 基本组件

Apache 科尔多瓦的应用程序都依赖于一个共同的 `config.xml` 文件，提供有关应用程序的信息，并指定参数影响它如何工作，如它是否响应方向转移。 此文件遵循 W3C 的[打包 Web 应用程序][2]或*构件*，规范。

 [2]: http://www.w3.org/TR/widgets/

应用程序本身是作为 web 页来实现，默认情况下，引用任何 CSS、 JavaScript、 图像、 媒体文件，命名*index.html*或其他资源是它运行的必要条件。 这款应用程序作为*web 视图*的本机应用程序中包装，您分发给应用程序商店内执行。

科尔多瓦启用 web 视图可提供具有其整个用户界面的应用程序。 在一些平台上，它也可以是更大，混合应用程序与本机应用程序组件混合 web 视图中的一个组件。 （请参阅嵌入 WebViews 的详细信息）。

*插件*接口，供科尔多瓦和本机组件与对方沟通。 这使您可以调用来调用本机代码从 JavaScript。 从 3.0 版，插件提供绑定到标准设备的 Api。 第三方插件在所有平台上提供额外绑定到不一定可用的功能。 你可以找到这些第三方插件在[插件注册表][3]，并在您的应用程序中使用它们。 您也可以开发自己的插件，插件开发指南中所述。 插件可能是必要的例如，科尔多瓦和自定义本机组件之间进行通信。

 [3]: http://plugins.cordova.io

## 发展路径

从 3.0 版，可以使用两种基本的工作流程来创建移动应用程序。虽然你经常可以使用任一工作流完成相同的任务，他们每个人都具有优点：

*   **跨平台工作流**： 使用此工作流，如果您希望您的应用程序在许多不同的移动操作系统上运行，尽可能以小的特定于平台发展需要。 此工作流都是围绕 `cordova` 实用程序，否则称为科尔多瓦*CLI*，引入的科尔多瓦 3.0。CLI 是功能的一个高级别的工具，使您可以生成许多平台的项目一次，提取很大一部分的较低级别 shell 脚本。 CLI 将一组通用的 web 资产复制到每个移动平台的子目录，使得任何必需的配置更改为每个，运行生成脚本来生成应用程序二进制文件。 CLI 还提供了一个通用界面，适用于您的应用程序的插件。CLI 的更多详细信息，请参阅命令行界面。 除非你有需要为该平台为中心的工作流，被建议的跨平台工作流。

*   **平台为中心的工作流**： 如果你想要注重建立一个单一的平台的应用程序和需要，以便能够在较低级别进行修改使用此工作流。 您需要使用这种方法，例如，如果您希望您的应用程序组合自定义本机组件与基于 web 的科尔多瓦组件，如嵌入 WebViews 中所讨论。 作为一个经验法则，使用此工作流，如果您需要修改 SDK 中的项目。 此工作流，依赖于一套专门针对每个受支持的平台和单独的 Plugman 实用程序，它允许您要应用的插件的较低级别 shell 脚本。 虽然您可以使用此工作流构建跨平台的应用程序，通常很难更因为缺乏的一种较高级别的工具意味着单独的生成周期和插件修改为每个平台。 尽管如此，此工作流允许您提供的每个 SDK 的开发选项获得更多和复杂混合应用程序至关重要。 有关每个平台可用外壳实用程序，请参阅各种平台指南的详细信息。

当刚开始的时候，它可能是最容易使用的跨平台工作流来创建一个应用程序，如所述的命令行界面。 然后，您可以选择要切换到平台为中心的工作流，如果你需要 SDK 提供的更大控制。 较低级别外壳实用程序可用在[cordova.apache.org][1]中，CLI 比单独的分发。 最初由 CLI 生成的项目，这些外壳程序可用工具的还在该项目的各种 `platforms/*/cordova` 目录。

**注意**： 一旦你从基于 CLI 的工作流切换到一个围绕着一个特定于平台 Sdk 和外壳工具，你就不能回去。 CLI 维护一套共同的跨平台源代码中，其中每个生成它使用它来写入超过特定于平台的源代码。 若要保留您对特定于平台的资产进行任何修改，您需要切换到平台为中心的壳的工具，忽略跨平台的源代码，并且相反依赖特定于平台的源代码。

## 安装科尔多瓦

科尔多瓦的安装将根据您选择的工作流以上而有所不同：

*   跨平台工作流： 请参阅命令行界面。

*   平台为中心的工作流： 请参见平台参考线。

在安装之后科尔多瓦，建议您检查平台指南，你将为开发的移动平台。 它还建议你还审查隐私指南 》、 安全指南 》 和接下来的步骤。 有关配置科尔多瓦，请参阅 config.xml 文件。 从 JavaScript 访问本机函数的设备上，请参阅插件 Api。 并引用作为必要的其他列入指南。
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

# 配置参考

使用独立于平台的配置文件，可以控制应用程序行为的许多方面 `config.xml` ，其中的格式基于 W3C 的[打包 Web 应用程序 (小部件)][1]规范。

 [1]: http://www.w3.org/TR/widgets/

为项目创建与科尔多瓦 CLI （描述在命令行界面），可以在顶级找到此文件 `www` 目录。 使用 CLI 来生成项目将重新生成此内的各个子目录中的文件版本 `platforms` 。 对于非 CLI 的项目，每个特定于平台的文件作为源。

虽然位置的 `config.xml` 文件可能会更改取决于平台，其内容通常不这样做。 一些特定于平台的功能也是在相同的配置文件中指定的。 下面列出了详细信息：

*   iOS 配置
*   Android 系统配置
*   黑莓手机配置

## config.xml 元素

[Apache 科尔多瓦][2]项目力图通过 web 启发和基于 web 的抽象，很大程度是驱动和通过 web 社区的标准抽象远离本机平台细节。 请花几分钟时间熟悉[config.xml 规范][1]，目的要了解应用程序元数据的 Apache 科尔多瓦项目的类型是抽象的并提供简单的切入点。

 [2]: http://cordova.io

示例：

        < 构件 >< 首选项名称 ="MySetting"值 ="true"/ >< 功能名称 = 值"MyPlugin"="MyPluginClass"/ >< 访问来源 ="*"/ >< 内容 src="index.html"/ >< / 构件 >
    

请按照操作跨主要平台支持的 Apache 科尔多瓦的支持元素的列表。

### `<feature>`

这些元素映射到本机 Api 应用程序访问。 在运行时，Apache 科尔多瓦框架将映射 `<feature>` 元素为本机代码，使您的科尔多瓦应用程序访问设备不可用典型的基于 web 的应用程序的 Api。

### `<access>`

这些元素定义白名单的工作原理。请参阅域白名单指南的详细信息。

### `<content>`

此元素定义相对于项目的标准 web 资产根目录的应用程序的起始页。此元素是可选的默认值是`index.html`.
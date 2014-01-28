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

从 3.0 版本开始，科尔多瓦实现所有设备 Api 作为插件，然后留在默认情况下禁用。 此外，它还支持两种不同的方法来添加和删除插件。 第一是通过使用 `cordova` 所述的命令行界面 CLI。 第二种是通过使用一个较低级别[Plugman][1]命令行界面 （"本机平台 dev"工作流）。这些两条发展路径之间的主要区别是 Plugman 可以只添加插件到一个平台，一次而 CLI 会将插件添加到的所有平台，您的目标。 正因为如此，它更有意义，当你正在密切与单一的平台，因此，工作流的"本机平台 Dev"名称时，使用 Plugman。

 [1]: https://github.com/apache/cordova-plugman/

详细信息关于 Plugman，尤其是如果你有兴趣在消费作为节点模块 Plugman 或黑客对 Plugman 的代码，请参阅[其库中的自述文件][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## 安装 Plugman

要安装 plugman，您必须在您的机器上安装的[节点][3]。 然后您可以运行下面的命令从任意位置在您的环境以全局，安装 plugman，这样就可从您的计算机上的任何目录中：

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

您还必须有有 `git` 上你 `PATH` ，以便能够直接从远程 git Url 安装的插件。

**提示:**如果您发现与故宫安装 plugman 后你仍然不能运行任何 `plugman` 的命令，请确保您已添加 `/npm/` 目录到您`PATH`.

**注：**如果您不想通过安装 Plugman 全球污染您的全球故宫命名空间，您可以跳过此步骤。 如果这种情况，然后当你与外壳工具创建科尔多瓦项目，将有 `node_modules` 目录里面您的项目包含 Plugman。 既然你不 instally 全球范围内，您必须调用节点，每个 Plugman 命令，例如 `node ./node_modules/plugman/main.js -version` 。 本指南的其余部分假定您已安装 Plugman 就全球而言，意味着您可以调用它与只是`plugman`.

## 创建一个项目，科尔多瓦

您可以使用 Plugman 之前，您必须创建一个科尔多瓦项目。 你可以用命令行界面或更低的级别的 shell 脚本。 使用 shell 脚本来创建您的项目的说明都位于平台指南页上列出的各项"命令行工具"指南。

## 添加插件

一旦你已经安装了 Plugman，并已创建一个科尔多瓦项目，您可以开始将插件添加到与平台：

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

使用最小的参数，此命令将插件安装到科尔多瓦的一个项目。 您必须指定一个为该平台的平台和科尔多瓦的项目位置。 此外必须指定与不同的插件， `--plugin` 参数形式是：

*   `name`： 目录名称插件内容存在的地方。 这必须是现有目录下的 `--plugins_dir` 路径 （见下面的详细信息） 或一个插件在科尔多瓦注册表中的。
*   `url`： URL 以 https:// 或 git 开始： / / 指向一个有效 git 存储库，是复本，包含 `plugin.xml` 文件。 这个资料库的内容将复制到`--plugins_dir`.
*   `path`： 目录包含一个有效的插件，其中包括路径 `plugin.xml` 文件。此路径的内容将被复制到`--plugins_dir`.

其他参数：

*   `--plugins_dir`默认值为 `<project>/cordova/plugins` ，但可以为每个包含子目录中任何目录获取插件。
*   `--www`默认值为项目的 `www` 文件夹的位置，但可以作为科尔多瓦项目应用程序 web 资产使用的任何目录。
*   `--variable`允许指定某些变量在安装时，有必要对某些插件需要 API 密钥或其他自定义的用户定义的参数。 请[插件规范][4]的详细信息，参阅。

 [4]: plugin_spec.md

## 删除某个插件

若要卸载插件，你只需通过 `--uninstall` 标记，并提供插件 id。

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## 帮助命令

Plugman 特色全球帮助命令，可以帮助你如果你卡住或遇到的问题。它将显示所有可用的 Plugman 命令和它们的语法的列表：

    plugman -help
    plugman  # same as above
    

**注**： `plugman -help` 可能会显示一些额外的与注册表相关的命令。 这些命令用于插件开发人员，不可能进行第三方插件登记处。

您还可以将追加 `--debug|-d` 旗子到任何 Plugman 命令以运行该命令以详细模式，将显示任何内部调试消息，因为他们排放和可帮助您跟踪下像缺少文件的问题。

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin org.apache.cordova.battery-status
    

最后，您可以使用 `--version|-v` 标志来查看您使用哪个版本的 Plugman。

    plugman -v
    

## 注册表操作

那里有很多的 plugman 命令，可以用于与[插件注册表][5]进行交互。 请注意这些注册表命令是特定于*plugins.cordova.io*插件注册表，不可能由第三方插件登记处执行。

 [5]: http://plugins.cordova.io

### 寻找一个插件

您可以使用 Plugman 来搜索[插件注册表][5]插件 id 的匹配给定以空格分隔的关键字列表。

    plugman search <plugin keywords>
    

### 更改插件注册表

您可以获取或设置当前插件注册表的 URL，使用的 plugman。通常你应该离开这在 http://registry.cordova.io 设置，除非您想要使用第三方插件注册表。

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### 获取插件的信息

您可以获得有关任何特定插件在插件库中存储的信息：

    plugman info <id>
    

这将联系的插件注册表和提取信息，如插件的版本编号。

## 安装核心插件

下面的示例显示如何添加插件，如需要，这样您在您的项目中使用任何科尔多瓦 Api 仍然工作后你升级到 3.0 版本。对于每个命令，你需要选择目标平台，并引用该平台的项目目录。

*   cordova-plugin-battery-status
    
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration
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

# 升级 Windows Phone

本指南演示如何修改 Windows Phone 的项目，这两个版本 7 和 8，从科尔多瓦的旧版本进行升级。 大多数这些说明适用于与旧集的前面的命令行工具创建的项目 `cordova` CLI 实用程序。 命令行界面信息，请参阅如何更新的 CLI 版本。 以下部分显示了如何从非 CLI 项目升级。

## 从 2.9.0 升级到 CLI （3.0.0)

1.  创建新的 Apache 科尔多瓦 3.0.0 项目使用 CLI，科尔多瓦，如所述的命令行界面。

2.  添加您的平台的科尔多瓦项目，例如：`cordova
platform add wp7 wp8`.

3.  该项目的内容复制 `www` 目录到 `www` 目录在您刚刚创建的科尔多瓦项目的根目录。

4.  复制或覆盖任何本机资产从原始项目 （ `SplashScreen` ， `ApplicationIcon` 等等），这让确定要添加的任何新文件 `.csproj` 文件。 Windows 电话里面的项目生成 `platforms\wp7` 或 `platforms\wp8` 目录。

5.  使用科尔多瓦 CLI 工具来安装您需要的任何插件。请注意 CLI 处理所有核心 Api 作为插件，所以他们可能需要添加。只有 3.0.0 插件是与 CLI 兼容。

6.  生成并测试。

## 从 2.9.0 升级到 3.0.0 (非 CLI)

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建一个新的 Apache 科尔多瓦 WP7 或 WP8 3.0.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  复制并覆盖任何闪屏或图标图像。

4.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

5.  生成并测试。

**注：**所有核心 Api 从科尔多瓦版本 3.0 中, 移除和作为插件必须单独安装。 关于如何重新启用非 CLI 的工作流中的这些功能的详细信息，请参阅使用 Plugman 到管理插件。

## 从 2.8.0 升级到 2.9.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建一个新的 Apache 科尔多瓦 WP7 或 WP8 2.9.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新的名称 `cordova.js` 的 HTML 标记，如果它仍在使用科尔多瓦 VERSION.js (应该是刚中`cordova.js`).

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们也添加到.csproj 文件。

6.  生成并测试。

## 从 2.7.0 升级到 2.8.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建一个新的 Apache 科尔多瓦 WP7 或 WP8 2.8.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新您的 html 代码，使用新的 `cordova.js` 文件。（注意文件名中的版本号的缺乏。

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

6.  生成并测试。

## 从 2.6.0 升级到 2.7.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建一个新的 Apache 科尔多瓦 WP7 或 WP8 2.7.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新您的 html 代码，使用新的 `cordova-2.7.0.js` 文件。

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

6.  生成并测试。

## 从 2.5.0 升级到 2.6.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建一个新的 Apache 科尔多瓦 WP7 或 WP8 2.6.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新您的 html 代码，使用新的 `cordova-2.6.0.js` 文件。

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

6.  生成并测试。

## 从 2.4.0 升级到 2.5.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建一个新的 Apache 科尔多瓦 WP7 或 WP8 2.5.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新您的 html 代码，使用新的 `cordova-2.5.0.js` 文件。

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

6.  生成并测试。

## 从 2.3.0 升级到 2.4.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建一个新的 Apache 科尔多瓦 WP7 或 WP8 2.4.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新您的 html 代码，使用新的 `cordova-2.4.0.js` 文件。

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

6.  生成并测试。

## 从 2.2.0 升级到 2.3.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建新的 Apache 科尔多瓦 WP7 2.3.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新您的 html 代码，使用新的 `cordova-2.3.0.js` 文件。

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

6.  生成并测试。

## 从 2.1.0 升级到 2.2.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建新的 Apache 科尔多瓦 WP7 2.2.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新您的 html 代码，使用新的 `cordova-2.2.0.js` 文件。

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

6.  生成并测试。

## 从 2.0.0 升级到 2.1.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建新的 Apache 科尔多瓦 WP7 2.1.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新您的 html 代码，使用新的 `cordova-2.1.0.js` 文件。

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

6.  生成并测试。

## 从 1.9.0 升级到 2.0.0

有很大变化到 Apache 科尔多瓦 2.0.0 WP7 项目结构，使这升级有点更多涉及的其他人。 本质上这不是升级而建立一个新的项目和对现有源代码文件的副本。

在 Visual Studio 的解决方案资源管理器窗口中：

1.  创建一个新的 Apache 科尔多瓦 WP7 2.0 项目。

2.  将复制的内容你 `www` 目录到新的项目，并确保这些项目添加到 VS 项目。

3.  更新您的 html 代码，使用新的 `cordova-2.0.0.js` 文件。

4.  复制并覆盖任何闪屏或图标图像。

5.  复制超过任何插件从 `plugins` 目录到新项目，并确保他们还补充说到 VS 项目。

6.  生成并测试。

## 从 1.8.0 升级到 1.9.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**您可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.9.0.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.9.0.js` 文件。

## 从 1.7.0 升级到 1.8.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**您可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.8.0.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.8.0.js` 文件。

## 从 1.6.0 升级到 1.7.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**您可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.7.0.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.7.0.js` 文件。

## 从 1.6.0 升级到 1.6.1

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**您可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.6.1.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.6.1.js` 文件。

## 从 1.5.0 版升级到 1.6.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**您可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.6.0.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.6.0.js` 文件。

## 从 1.4.0 升级到 1.5.0 版

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**您可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.5.0.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.5.0.js` 文件。

## 从 1.3.0 升级到 1.4.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**您可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.4.0.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.4.0.js` 文件。

## 从 1.2.0 升级到 1.3.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**您可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.3.0.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.3.0.js` 文件。

## 从 1.1.0 升级到 1.2.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**您可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.2.0.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.2.0.js` 文件。

## 从 1.0.0 升级到 1.1.0

在 Visual Studio 的解决方案资源管理器窗口中：

1.  删除 `GapLib/WP7CordovaClassLib.dll` 从您的项目。

2.  移除对引用 `WP7CordovaClassLib` **引用**文件夹中。

3.  **引用**上单击鼠标右键，然后选择**添加引用**.

4.  导航到新分配并将该文件添加`WP7CordovaClassLib.dll`.
    
    *   **注：**你可以通过在引用上右击并选择**属性**查看 DLL 的版本.

5.  复制新 `cordova-1.1.0.js` 到您的项目。（请确定它被标记为内容）。

6.  更新您的 html 代码，使用新的 `cordova-1.1.0.js` 文件。
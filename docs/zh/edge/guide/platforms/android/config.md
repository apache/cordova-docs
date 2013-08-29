---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android 系统配置

`config.xml`文件控制科尔多瓦的各种设置。这些应用跨应用程序，和每个 CordovaWebView 实例。

## `< 首选项 >`

各种其他首选项 （作为 `<preference>` 标签） 默认情况下，不打破现有的应用程序。可用的选择是：

*   `useBrowserHistory`(boolean 类型的值，默认值为 `true` ）： 设置为 `false` 如果您想要使用被用来解决目前在之前的历史修复 Android 3.x 中的标签错误历史垫片。 （注意： 此设置将会在 2013 年 4 月已弃用)

*   `loadingDialog`： 显示本机加载对话框加载应用程序时。值的格式是*标题、 消息*

*   `loadingPageDialog`： 显示本机加载对话框加载的子页面时。值的格式是*标题、 消息*

*   `errorUrl`： 设置您的应用程序的错误页。应设在 Android 项目中`file://android_asset/www/`

*   `backgroundColor`： 设置您的应用程序的背景色。 支持四个字节的十六进制值，以表示 alpha 值，并采用标准的 RGB 值以下的三个字节的第一个字节。 例如， `0x00000000` 是黑色的。

*   `loadUrlTimeoutValue`： 多少科尔多瓦投掷超时错误的应用程序之前应等待的时间。

*   `keepRunning`(boolean 类型的值，默认值为 `true` ）： 确定是否科尔多瓦保持在后台运行。

*   `splashscreen`： 减去其扩展名的文件的名称 `res/drawable` 目录。 如果您有多项资产，他们都必须共享此共同在它们各自的目录名称。

*   `disallowOverscroll`(boolean 类型的值，默认值为 `false` ）： 设置为 `true` 禁用所发出的光芒，当用户滚动 web 视图的边缘之外。

## `< 插件 >`

Android 系统支持使用 `<feature>` 作为类似物的 `<plugin>` 元素。
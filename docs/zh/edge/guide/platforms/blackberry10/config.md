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

# 黑莓 10 配置

`config.xml`文件控制科尔多瓦的各种设置。 这些跨应用程序应用。 `config.xml`文件是位于在 `<project folder>/<www>` 目录。

## `< 首选项 >`

各种首选项 （作为 `<preference>` 标签） 默认情况下，不打破现有的应用程序。可用的选择是：

*   `autoHideSplashScreen`: ( `true` 或 `false` ）： 设置为 `false` ，控制通过 JavaScript API 闪屏被隐藏时。 此首选项默认设置为 true。

*   `backgroundColor`： 指定你的应用程序的背景色。值必须在使用 8 位十六进制数字的 ARGB 像素格式中指定的颜色值。

*   `childBrowser`: 禁用儿童浏览器窗口。 默认情况下，当内容尝试在新的窗口或选项卡中打开资源时 （通过使用 window.open ()，或者通过指定 `_blank` 作为锚点的目标），WebWorks 应用程序将会打开一个辅助浏览器窗口以显示该资源。 默认情况下启用此功能。 值必须指定 `disable` ，防止出现上述行动。

*   `hideKeyboardFormAccessoryBar`: ( `enable` 或 `disable` ） 禁用键盘窗体附件栏中的 HTML 窗体。 键盘窗体配件栏是一行的按钮 （上一页、 下一页和提交），用户可以使用一个窗体中导航。 默认情况下，当一个 WebWorks 应用程序包含一个 HTML 表单，并且 `<input>` 元素获取焦点，WebWorks 将显示此窗体的附件栏。 此功能允许您以防止您的应用程序通过指定的值显示窗体配件栏`enable`.

*   `orientation`: ( `auto` ， `portrait` ，或 `landscape` ） 在您的应用程序中指定屏幕的持久性方向。默认情况下，如果您不指定屏幕方向，方向是设置为自动。

*   `popupBlocker`： 启用弹出窗口阻止程序。 默认情况下，按黑莓 WebWorks 应用程序在一个儿童的浏览器窗口中显示所有弹出窗口。 您可以阻止弹出窗口显示无需用户干预通过启用弹出窗口阻止程序。 这是由指定的值`enable`.

*   `webSecurity`: 禁用 web 安全。 禁用 web 安全性允许您在开发过程中从未知的来源访问远程内容。 在打包您的应用程序，分发之前，您应该删除此设置。 此功能被作为只发展提供便利。 应在生产中，已知所有 Uri 和应使用白名单 `<access>` 元素。 若要禁用，指定的值`disable`.
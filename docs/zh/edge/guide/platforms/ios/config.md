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

# iOS 配置

`config.xml`设置文件控制科尔多瓦的各种设置。 这是应用广泛，并不设置每个 CDVViewController 实例。 `config.xml`文件位于您 `<project folder>/<appname>` 目录。

## `< 首选项 >`

各种首选项 （作为 `<preference>` 标签） 默认情况下，不打破现有的应用程序。可用的选择是：

*   `DisallowOverscroll`(boolean 类型的值，默认值为 `false` ）： 设置为 `true` 如果你不想对橡胶带 web 视图。

*   `TopActivityIndicator`（字符串，默认值为 `gray` ）： 这是栏中的状态/电池顶部纺 throbber，有效的值是 `whiteLarge` ， `white` ，和`gray`.

*   `EnableLocation`(boolean 类型的值，默认值为 `false` ）： 设置为 `true` 、 初始化启动时的地理定位插件 （以便在您所在的位置上的修补程序可以更准确）**已否决**： 请设置 `onload` 属性的 `Geolocation` 插件的 `true` 相反。

*   `EnableViewportScale`(boolean 类型的值，默认值为 `false` ）： 设置为 `true` ，防止结垢通过 meta 标记的视区。

*   `AutoHideSplashScreen`(boolean 类型的值，默认值为 `true` ）： 设置为 `false` ，控制通过 JavaScript API 闪屏被隐藏时。

*   `FadeSplashScreen`(boolean 类型的值，默认值为 `true` ）： 设置为 `false` ，防止出现闪屏，淡出时显示或隐藏它。

*   `FadeSplashScreenDuration`（浮动，默认值为 2）： 初始屏幕淡入淡出时间以秒为单位。

*   `ShowSplashScreenSpinner`(boolean 类型的值，默认值为 `true` ）： 设置为 `false` 隐藏初始屏幕微调框。

*   `MediaPlaybackRequiresUserAction`(boolean 类型的值，默认值为 `false` ）： 设置为 true，不允许 autoplayed HTML5 视频。

*   `AllowInlineMediaPlayback`(boolean 类型的值，默认值为 `false` ）： 设置为 true，以允许内联 HTML5 播放媒体，此外，在 HTML 文档中的视频元素还必须包括 webkit playsinline 属性。

*   `BackupWebStorage`（字符串，默认值为 `cloud` ）： 有效的值为 `none` ， `cloud` 和 `local` 。 设置为 `cloud` ，允许 web 存储数据要备份到 iCloud，并将设置为 `local` ，仅允许本地备份 （iTunes 同步）。 设置为 `none` ，不允许任何备份 web 存储。

*   `KeyboardDisplayRequiresUserAction`(boolean 类型的值，默认值为 `true` ）： 设置为 false 时窗体元素获得焦点通过 JavaScript focus() 调用打开键盘。

*   `SuppressesIncrementalRendering`(boolean 类型的值，默认值为 `false` ）： 它在呈现之前已收到设置为 true，等待，直到新的所有视图的内容。

*   `HideKeyboardFormAccessoryBar`(boolean 类型的值，默认值为 `false` ）： 设置为隐藏的附加工具栏的键盘上面是真实。 此工具栏功能**上一页**、**下一页**，和**做**按钮。

*   `KeyboardShrinksView`(boolean 类型的值，默认值为 `false` ）： 设置为 `true` 当键盘后缩小 web 视图。 Web 视图缩小，而不是视区萎缩和可滚动页面。 这适用于应用程序，它们相对于底部的 web 视图的元素的位置。 这是在 android 系统里的默认行为，构建应用程序而不是网页时发出很大的意义。
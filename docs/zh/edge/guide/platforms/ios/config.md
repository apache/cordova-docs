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

`config.xml`文件控制应用于每个应用程序和 CordovaWebView 实例的应用程序的基本设置。 本节详细说明仅适用于 iOS 版本的首选项。 有关全局配置选项，请参阅 config.xml 文件的信息。

*   `EnableViewportScale`(boolean 类型的值，默认值为 `false` ）： 设置为 `true` ，以便视区元标记来禁用或限制的范围的用户比例，这默认启用的。
    
        <preference name="EnableViewportScale" value="true"/>
        
    
    放置在 HTML 中禁用缩放和适合的视口，如下内容灵活地内呈现 web 视图：
    
        < 元名称 = '视' 内容 =' 宽度 = 设备-宽度，初始规模 = 1，用户可扩展 = no' / >
        

*   `MediaPlaybackRequiresUserAction`(boolean 类型的值，默认值为 `false` ）： 设置为 `true` 以防止与自动播放 HTML5 视频或音频 `autoplay` 属性或通过 JavaScript。
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(boolean 类型的值，默认值为 `false` ）： 设置为 `true` ，让 HTML5 播放媒体显示*内联*的屏幕布局，使用浏览器提供的控件，而不是本机控件内。 为此，添加 `webkit-playsinline` 归咎于任何 `<video>` 的元素。
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`（字符串，或者 `none` ， `local` ，或默认的 `cloud` ）： 设置为 `cloud` 允许通过 iCloud 备份到 web 存储数据。 设置为 `local` ，使得只有本地备份通过 iTunes 同步。 设置为 `none` 防止 web 存储备份。
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`（字符串，默认值为 `gray` ）： 控制指示大量的处理器活动的状态栏中的旋转的小图标的外观。 有效的值为 `whiteLarge` ， `white` ，和`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `KeyboardDisplayRequiresUserAction`(boolean 类型的值，默认值为 `true` ）： 设置为 `false` ，允许键盘出现在调用时 `focus()` 形式投入。
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(boolean 类型的值，默认值为 `false` ）： 设置为 `true` 等待，直到在呈现到屏幕之前已收到的所有内容。
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `GapBetweenPages`（浮动，默认值为 `` ）： 的大小，以磅为单位，页面之间的差距。
    
        <preference name="GapBetweenPages" value="0"/>
        

*   `PageLength`（浮动，默认值为 `` ）： 中点，在页面流的方向每个页面的大小。 当 PaginationMode 是从右到左或从左到右，此属性表示每个页面的宽度。 PaginationMode topToBottom 或 bottomToTop 时，此属性表示每个页面的高度。 默认值为 0，这意味着布局使用视区的大小来确定页面的尺寸。
    
        <preference name="PageLength" value="0"/>
        

*   `PaginationBreakingMode`（字符串，默认值为 `page` ）： 有效的值为 `page` 和 `column` 。在列或页断发生的方式。 此属性确定是否某些 CSS 属性关于列和页打破是荣幸还是忽略。 当此属性设置为 `column` ，内容尊重相关的页断的地方断列的 CSS 属性。
    
        <preference name="PaginationBreakingMode" value="page"/>
        

*   `PaginationMode`（字符串，默认值为 `unpaginated` ）： 有效的值为 `unpaginated` ， `leftToRight` ， `topToBottom` ， `bottomToTop` ，和 `rightToLeft` 。 此属性确定是否在 web 视图中的内容划分为一次填充视图一屏幕的页或一个长的滚动视图所示。 如果设置为一个分页的窗体，此属性切换分页的布局上的内容，导致其内容的 web 视图使用重新布局的 PageLength 和 GapBetweenPages 的值。
    
        <preference name="PaginationMode" value="unpaginated"/>
        

*   `UIWebViewDecelerationSpeed`（字符串，默认值为 `normal` ）： 有效的值为 `normal` ， `fast` 。 此属性控制减速势头滚动。 `normal`是大多数本机应用程序，默认的速度和 `fast` 的移动版 Safari 是默认的。
    
        <preference name="UIWebViewDecelerationSpeed" value="fast" />
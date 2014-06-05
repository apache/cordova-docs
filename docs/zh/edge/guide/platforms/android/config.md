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

`config.xml`文件控制应用于每个应用程序和 CordovaWebView 实例的应用程序的基本设置。 本节详细说明仅适用于 android 系统生成的首选项。 有关全局配置选项，请参阅 config.xml 文件的信息。

*   `KeepRunning`(boolean 类型的值，默认值为 `true` ）： 确定应用程序是否保持甚至后在后台运行 `pause` 事件火灾。 将此设置为 `false` 不会杀死后的 app `pause` 事件，但只是暂停执行代码内科尔多瓦 web 视图应用程序时在背景中。
    
        <preference name="KeepRunning" value="false"/>
        

*   `LoadUrlTimeoutValue`(以毫秒为单位的数字，默认为 `20000` ，20 秒)： 当加载一个页面，在引发超时错误之前等待的时间量。 此示例指定 10 秒，而不是 20：
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`（字符串，默认值为 `splash` ）： 包括其扩展名的文件的名称 `res/drawable` 目录。 各种资产必须共享此各子目录中的共同名称。
    
        <preference name="SplashScreen" value="mySplash"/>
        

*   `SplashScreenDelay`(编号以毫秒为单位，默认值为 `3000` ）： 所需的时间初始屏幕图像显示。
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(boolean 类型的值，默认值为 `true` ）： 控件是否在 InAppBrowser 内打开的页可以访问同一认为和 WebSQL 存储作为默认浏览器打开的页面。
    
        <preference name="InAppBrowserStorageEnabled" value="true"/>
        

*   `LoadingDialog`（字符串，默认值为 `null` ）： 如果设置，显示一对话框中指定的标题和消息，和一个微调框，加载的应用程序中的第一页时。 由在此值字符串中的逗号分隔的标题和消息，那逗号删除之前显示的对话框。
    
        <preference name="LoadingDialog" value="My Title,My Message"/>
        

*   `LoadingPageDialog`（字符串，默认值为 `null` ）： 相同， `LoadingDialog` ，但用于在应用程序中的第一页后加载的每个页面。
    
        <preference name="LoadingPageDialog" value="My Title,My Message"/>
        

*   `ErrorUrl`（URL，默认为 `null` ）： 如果设置，将显示而不是以"应用程序错误"标题对话框的应用程序中的错误时所引用的网页。
    
        <preference name="ErrorUrl" value="myErrorPage.html"/>
        

*   `ShowTitle`(boolean 类型的值，默认值为 `false` ）： 显示在屏幕顶部的标题。
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`（字符串，默认值为 `ERROR` ）： 将通过哪些日志将过滤邮件从您的应用程序的最小日志级别设置。 有效的值为 `ERROR` ， `WARN` ， `INFO` ， `DEBUG` ，和`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>
        

*   `SetFullscreen`(boolean 类型的值，默认值为 `false` ）： 同样作为 `Fullscreen` 在此 xml 文件的全局配置参数。 此 Android 特定元素支持全球否决 `Fullscreen` 元素，并将在未来版本中移除。
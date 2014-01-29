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

# 亚马逊火 OS 配置

`config.xml`文件控制应用于每个应用程序和 CordovaWebView 实例的应用程序的基本设置。 此节详细信息首选项仅适用于亚马逊火 OS 的基础。 有关全局配置选项，请参阅 config.xml 文件的信息。

*   `KeepRunning`(boolean 类型的值，默认值为 `true` ）： 确定应用程序是否保持甚至后在后台运行 `pause` 事件火灾。
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`： 指定显示在 400-500 范围内的标准 HTTP 错误响应的错误页。 将指定的文件放在包含主页和其他 web 资产的顶级目录。
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`： 显示本机对话框加载应用程序时。值的格式是*标题、 消息*
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`： 加载一个应用程序内的子页面时显示本机的对话框。值的格式是*标题、 消息*
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`（数，默认值是 `20000` ）： 当加载一个页面，在引发超时错误之前等待的时间量。 此示例指定 10 秒，而不是 20：
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`： 减去其扩展名的文件的名称 `res/drawable` 目录。各种资产必须共享此各子目录中的共同名称。
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(编号，默认值为 `5000` ）： 所需的时间初始屏幕图像显示。
    
        <preference name="SplashScreenDelay" value="10000"/>
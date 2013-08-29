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

科尔多瓦是一个开放源码移动开发框架。 它允许您使用标准的 web 技术如 HTML5、 CSS3 和 JavaScript 进行跨平台开发，避免每个移动平台的本机开发语言。 应用程序在有针对性的对每个平台的包装内执行，并依靠符合标准的 API 绑定访问每个设备的传感器、 数据和网络状态。

如果您是，使用科尔多瓦：

*   移动开发人员和想要扩展应用程序跨多个平台，而无需重新实现它与每个平台的语言和工具集。

*   web 开发人员和想要部署 web 应用程序打包为分布在各种应用程序中存储的门户。

*   移动开发人员感兴趣混合本机应用程序中的组件与*web 视图*（浏览器窗口），可以访问设备级的 Api，或者如果您想要开发的插件界面本机和 web 视图组件之间。

## 基本组件

科尔多瓦的应用程序都依赖于一个共同的 `config.xml` 文件，提供有关应用程序的信息，并指定参数影响它如何工作，如它是否响应方向转移。 此文件遵循 W3C 的[打包 Web 应用程序][1]或*构件*，规范。

 [1]: http://www.w3.org/TR/widgets/

应用程序本身是作为 web 页来实现，默认情况下，引用任何 CSS、 JavaScript、 图像、 媒体文件，命名*index.html*或其他资源是它运行的必要条件。 这款应用程序作为*web 视图*的本机应用程序中包装，您分发给应用程序商店内执行。 为 web 应用程序进行交互的方式本机应用程序做的各项设备功能，它也必须引用 `cordova.js` 文件，该文件提供 API 绑定。 <!-- XREF
(See the API Reference for an overview, and the Application
Development Guide for examples of how to use them.)
XREF -->

科尔多瓦启用 web 视图可提供具有其整个用户界面的应用程序。 它也可以是更大，混合应用程序与本机应用程序组件混合 web 视图中的一个组件。 科尔多瓦提供*插件*接口，使这些组件，以互相沟通。

## 发展路径

设置应用程序的最简单方法是运行 `cordova` 命令行实用程序，也称为*命令行界面*(CLI)。 （若要安装 CLI，参见命令行界面。根据您想要的目标的平台的集，您可以依靠逐步更多地共享在开发周期的 CLI：

*   在最基本的情况下，你可以使用 CLI 只是为了创建一个新项目填充，您要修改的默认配置。

*   对于很多的移动平台，也可以使用 CLI 来设置内部每个 SDK 编译所需的额外的项目文件。 为此，您必须安装每个目标的平台 SDK。 （见平台指南的说明）。如表中所示的平台支持下，您可能需要在目标平台根据不同的操作系统上运行，CLI。

*   为支持平台，CLI 可以编译 executible 的应用程序和基于 SDK 的设备仿真程序中运行它们。 <! — — XREF （请参阅应用程序发展指南的详细信息。） XREF--> 为全面的测试，还可以生成应用程序文件，直接在设备上安装它们。

在开发周期中的任何点，你也可以依赖特定于平台的 SDK 工具，可提供一组更丰富的选项。 （见有关每个平台 SDK 工具的详细信息平台指南设置）。SDK 环境是更适当的如果你想要实现一个混合本机和基于 web 的应用程序组件的混合应用。 <! — — XREF （请参阅混合应用指南为更多的信息。） XREF--> 你可以使用命令行实用程序最初生成应用程序，或以迭代方式此后要喂 SDK 工具更新的代码。 您也可以自己生成应用程序的配置文件。 <!-- XREF
(See Configuration Reference for details.)
XREF -->

<!-- XREF
To build projects on some platforms, you may need to apply digital signatures.
See Distributing Applications for information on how to upload your app to various store portals.
XREF -->

## 平台支持

下面显示一的组开发工具和设备的 Api 可为每个移动平台。（列标题显示的 CLI 速记存根 (stub)。

<!-- START HTML -->

<table class="compat" width="100%">
  <tr>
    <th>
      </td> <th>
        <tt>android 系统</tt>
      </th>
      
      <th>
        <tt>黑莓手机</tt>() 6
      </th>
      
      <th>
        <tt>blackberry10</tt>
      </th>
      
      <th>
        <tt>ios</tt>
      </th>
      
      <th>
        <tt>wp7</tt>(Windows<br />电话 7）
      </th>
      
      <th>
        <tt>wp8</tt>(Windows<br />电话 8）
      </th>
      
      <th>
        <tt>win8</tt><br />（Windows 8）
      </th>
      
      <th>
        <tt>tizen</tt>
      </th></tr> </thead> 
      
      <tr>
        <th>
          <a href="guide_cli_index.md.html">科尔多瓦<br />CLI</a>
        </th>
        
        <td data-col="android"    class="y">
          Mac、 Windows、 Linux
        </td>
        
        <td data-col="blackberry" class="n">
          Mac Windows
        </td>
        
        <td data-col="blackberry10" class="y">
          Mac Windows
        </td>
        
        <td data-col="ios"        class="y">
          Mac
        </td>
        
        <td data-col="winphone7"  class="y">
          Windows
        </td>
        
        <td data-col="winphone8"  class="y">
          Windows
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="guide_hybrid_webviews_index.md.html">嵌入式<br />Web 视图</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="guide_platforms_android_webview.md.html">（请参阅详细信息）</a>
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_platforms_ios_webview.md.html">（请参阅详细信息）</a>
        </td>
        
        <td data-col="winphone7"  class="n">
        </td>
        
        <td data-col="winphone8"  class="n">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="guide_hybrid_plugins_index.md.html">插件<br />接口</a>
        </th>
        
        <td data-col="android"    class="y">
          <a href="guide_guide_platforms_android_plugin.md.html">（请参阅详细信息）</a>
        </td>
        
        <td data-col="blackberry" class="y">
          <a href="guide_guide_platforms_blackberry_plugin.md.html">（请参阅详细信息）</a>
        </td>
        
        <td data-col="blackberry10" class="y">
          <a href="guide_guide_platforms_blackberry10_plugin.md.html">（请参阅详细信息）</a>
        </td>
        
        <td data-col="ios"        class="y">
          <a href="guide_guide_platforms_ios_plugin.md.html">（请参阅详细信息）</a>
        </td>
        
        <td data-col="winphone7"  class="y">
          <a href="guide_guide_platforms_wp8_plugin.md.html">（请参阅详细信息）</a>
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
        </th>
        
        <th colspan="20">
          平台 Api
        </th>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_accelerometer_accelerometer.md.html">加速度计</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_camera_camera.md.html">相机</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_media_capture_capture.md.html">捕获</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_compass_compass.md.html">指南针</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
          (3GS) +
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_connection_connection.md.html">连接</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_contacts_contacts.md.html">联系人</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_device_device.md.html">设备</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_events_events.md.html">事件</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_file_file.md.html">文件</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          没有文件传输
        </td>
        
        <td data-col="winphone8"  class="p">
          没有文件传输
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_geolocation_geolocation.md.html">地理定位</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_globalization_globalization.md.html">全球化</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="n">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="n">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_inappbrowser_inappbrowser.md.html">InAppBrowser</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="n">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_media_media.md.html">媒体</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_notification_notification.md.html">通知</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_splashscreen_splashscreen.md.html">闪屏</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="n">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="y">
        </td>
        
        <td data-col="winphone8"  class="y">
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="n">
        </td>
      </tr>
      
      <tr>
        <th>
          <a href="cordova_storage_storage.md.html">存储</a>
        </th>
        
        <td data-col="android"    class="y">
        </td>
        
        <td data-col="blackberry" class="y">
        </td>
        
        <td data-col="blackberry10" class="y">
        </td>
        
        <td data-col="ios"        class="y">
        </td>
        
        <td data-col="winphone7"  class="p">
          认为只有
        </td>
        
        <td data-col="winphone8"  class="p">
          认为只有
        </td>
        
        <td data-col="win8"       class="y">
        </td>
        
        <td data-col="tizen"       class="y">
        </td>
      </tr></table> 
      
      <!-- END HTML -->
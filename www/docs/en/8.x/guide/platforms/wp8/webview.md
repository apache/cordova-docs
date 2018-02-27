---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: Windows Phone 8.0 WebViews
---

# Windows Phone 8.0 WebViews

This guide shows how to embed a Cordova-enabled WebView component
within a larger Windows Phone 8.0 application. 

To follow these instructions, make sure you have the latest Cordova 
distribution. Download it from 
[cordova.apache.org](http://cordova.apache.org) and unzip its 
Windows Phone 8.0 package (cordova-wp8-*.zip).

1. Navigate to the package's `wp8/framework` directory and build
   `WPCordovaClassLib.sln`. 
   It creates the `Bin\Debug[Release]\WPCordovaClassLib.dll`.

1. Copy the `WPCordovaClassLib.dll` file into the Windows Phone 8 project's
    `/libs` directory and include `WPCordovaClassLib.dll` to your
    project via `Project->References->Add Reference`.
    Alternatively, you can directly reference the
    `wp8/framework/WPCordovaClassLib.csproj` file.

1. Add `CordovaView` component to your page (for example, `MainPage.xaml`).

        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />

1. Copy `common/www/cordova.js` along with the application's HTML 
    and JavaScript files to the Windows Phone 8 project's `html` directory
    and include new files to the project.

1. Copy the `wp8/template/config.xml`to the project's root directory and 

Instructions above will link core Cordova components only, 
see [Using Plugman to Manage Plugins](../../../plugin_ref/plugman.html) in order to link Cordova plugins.
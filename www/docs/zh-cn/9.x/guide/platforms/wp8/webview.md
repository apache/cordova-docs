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

本指南說明如何將嵌入在一個較大的 Windows Phone 8.0 應用程式內的科爾多瓦啟用 web 視圖元件。

要按照這些說明進行操作，請確保您有最新的科爾多瓦分佈。 從[cordova.apache.org](http://cordova.apache.org)下載和解壓縮其 Windows Phone 8.0 套裝軟體 （科爾多瓦-wp8-*.zip）。

  1. 導航到包的 `wp8/framework` 目錄和生成 `WPCordovaClassLib.sln` 。它將創建`Bin\Debug[Release]\WPCordovaClassLib.dll`.

  2. 複製 `WPCordovaClassLib.dll` 檔到 Windows Phone 8 專案 `/libs` 目錄，包括 `WPCordovaClassLib.dll` 到您的專案，通過 `Project->References->Add Reference` 。 或者，你可以直接引用 `wp8/framework/WPCordovaClassLib.csproj` 檔。

  3. 添加 `CordovaView` 元件綁定到您的頁面 （例如，`MainPage.xaml`).
    
        xmlns:my="clr-namespace:WPCordovaClassLib;assembly=WPCordovaClassLib">
        ...
        <my:CordovaView HorizontalAlignment="Stretch" Margin="0,0,0,0" 
        StartPageUri="html/index.html" x:Name="CordovaView" VerticalAlignment="Stretch" />
        

  4. 複製 `common/www/cordova.js` 以及應用程式的 HTML 和 JavaScript 檔到 Windows Phone 8 專案 `html` 目錄，並包括該專案的新檔。

  5. 複製 `wp8/template/config.xml` 到專案的根目錄中和

上面的說明將連結僅核心科爾多瓦元件，看到使用 Plugman 管理外掛程式連結科爾多瓦外掛程式。
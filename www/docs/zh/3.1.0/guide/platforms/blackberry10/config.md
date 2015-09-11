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
---

# 黑莓手機<a href="../../../cordova/media/capture/ConfigurationData.html">配置</a>

`config.xml`<a href="../../../cordova/file/fileobj/fileobj.html">檔</a>控制應用於每個應用程式和 CordovaWebView 實例的應用程式的基本設置。 僅適用于黑莓 10 此節的詳細資訊偏好生成。 有關全域<a href="../../../cordova/media/capture/ConfigurationData.html">配置</a>選項，請參閱 config.xml <a href="../../../cordova/file/fileobj/fileobj.html">檔</a>的資訊。

*   `ChildBrowser`( `disable` 或預設的 `enable` ）： 禁用兒童瀏覽器視窗。 預設情況下，應用程式啟動一個輔助瀏覽器視窗以<a href="../../../cordova/inappbrowser/inappbrowser.html">顯示</a>資源通過訪問 `<a href="../../../cordova/inappbrowser/window.open.html">window.open</a>()` 或通過指定 `_blank` 錨點目標。 指定 `disable` 重寫此預設行為。
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker`( `enable` 或預設的 `disable` ）： 啟用快顯視窗阻止程式，這樣可以防止對調用 `<a href="../../../cordova/inappbrowser/window.open.html">window.open</a>()` 。 預設情況下，快顯視窗在兒童瀏覽器視窗中<a href="../../../cordova/inappbrowser/inappbrowser.html">顯示</a>。 將首選項設置為 `enable` 防止它<a href="../../../cordova/inappbrowser/inappbrowser.html">顯示</a>在所有。
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity`( `disable` 或預設的 `enable` ）： 設置為 `disable` 重寫 web 安全設置，允許訪問遠端內容從未知的來源。 此首選項的目的是作為發展方便只，所以之前將它刪除包裝分發您的應用程式。 發佈應用程式，所有 Uri 都應已知和白名單使用 `<access>` 元素，域<a href="../../appdev/whitelist/index.html">白名單指南</a>中所述。
    
        <preference name="WebSecurity" value="disable"/>
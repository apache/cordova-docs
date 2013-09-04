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

`config.xml`檔控制科爾多瓦的各種設置。 這些跨應用程式應用。 `config.xml`檔是位於在 `<project folder>/<www>` 目錄。

## `< 首選項 >`

各種首選項 （作為 `<preference>` 標籤） 預設情況下，不打破現有的應用程式。可用的選擇是：

*   `autoHideSplashScreen`: ( `true` 或 `false` ）： 設置為 `false` ，控制通過 JavaScript API 閃屏被隱藏時。 此首選項預設設置為 true。

*   `backgroundColor`： 指定你的應用程式的背景色。值必須在使用 8 位十六進位數位的 ARGB 像素格式中指定的顏色值。

*   `childBrowser`: 禁用兒童瀏覽器視窗。 預設情況下，當內容嘗試在新的視窗或選項卡中打開資源時 （通過使用 window.open ()，或者通過指定 `_blank` 作為錨點的目標），WebWorks 應用程式將會打開一個輔助瀏覽器視窗以顯示該資源。 預設情況下啟用此功能。 值必須指定 `disable` ，防止出現上述行動。

*   `hideKeyboardFormAccessoryBar`: ( `enable` 或 `disable` ） 禁用鍵盤表單附件欄中的 HTML 表單。 鍵盤表單配件欄是一行的按鈕 （上一頁、 下一頁和提交），使用者可以使用一個表單中導航。 預設情況下，當一個 WebWorks 應用程式包含一個 HTML 表單，並且 `<input>` 元素獲取焦點，WebWorks 將顯示此表單的附件欄。 此功能允許您以防止您的應用程式通過指定的值顯示表單配件欄`enable`.

*   `orientation`: ( `auto` ， `portrait` ，或 `landscape` ） 在您的應用程式中指定螢幕的持久性方向。預設情況下，如果您不指定螢幕方向，方向是設置為自動。

*   `popupBlocker`： 啟用快顯視窗阻止程式。 預設情況下，按黑莓 WebWorks 應用程式在一個兒童的瀏覽器視窗中顯示所有快顯視窗。 您可以阻止快顯視窗顯示無需使用者干預通過啟用快顯視窗阻止程式。 這是由指定的值`enable`.

*   `webSecurity`: 禁用 web 安全。 禁用 web 安全性允許您在開發過程中從未知的來源訪問遠端內容。 在打包您的應用程式，分發之前，您應該刪除此設置。 此功能被作為只發展提供便利。 應在生產中，已知所有 Uri 和應使用白名單 `<access>` 元素。 若要禁用，指定的值`disable`.
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

# Windows Phone 7 平臺指南

本指南介紹如何設置您的 SDK 開發環境部署科爾多瓦的 Windows Phone 7 設備的應用程式。 應用程式也使用相同的 Api，但 7 缺乏的一些 IE10 的高級功能上 Windows Phone 8 可用的版本的 Windows Phone 8 設備上運行。 Windows Phone 8 應用程式*不*在 Windows Phone 7 設備上運行。

適用于這兩個版本的更多詳細的平臺特定資訊如下所示：

*   升級 Windows Phone
*   Windows Phone 外掛程式
*   Windows Phone 的命令列工具

上面的命令列工具請參閱科爾多瓦 3.0 以前的版本。關於當前介面的資訊，請參閱命令列介面。

## 系統要求

使用 Windows 7 或 Windows 8 (Pro) 或 Windows Vista sp2。需要的 SDK 的 Windows 64 位版本 (x64)。Pro 版被推薦運行的設備模擬程式。

註冊和支付為[Windows Phone 開發中心][1]帳戶，如果你想要在實際設備上安裝應用程式或將其提交給市場的地方。

 [1]: http://dev.windowsphone.com/en-us/publish

**注意**： 在虛擬機器中運行 SDK 可能提出了挑戰。閱讀[在 Mac 上的 Windows Phone][2]開發解決方案的見解。

 [2]: http://aka.ms/BuildaWP8apponaMac

## 安裝 SDK 和科爾多瓦

下載並安裝[Windows Phone SDK][3].

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

下載並解壓縮[科爾多瓦][4]的最新副本。 您需要工作 `lib\windows-phone-8\wp7` 子目錄中， `lib\windows-phone-8\wp8` 包含科爾多瓦的視窗電話 8 版本。

 [4]: http://phonegap.com/download

複製 `CordovaWP7_x_x_x.zip` 檔到 `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` 目錄。

## 建築範本

**注意**: 如果跳過這一步 `lib\windows-phone` 的目錄已經包含 `CordovaWP7_x_x_x.zip` 檔。

為了簡化開發過程，科爾多瓦，將捆綁一個腳本來生成 Visual Studio 範本。 這些允許您迅速生成科爾多瓦的應用程式，如果有必要，您可以修改它們。 以下步驟顯示如何生成它。

### 運行該批次檔來創建和安裝範本

根的回購協定包含 `createTemplates.bat` 檔。 按兩下此檔將生成兩個 `.zip` 檔： `CordovaWP7_x_x_x.zip` 和 `CordovaWP8_x_x_x.zip` ，其中*x.x.x*是的當前版本號。 若要使用這些檔很容易在 Visual Studio 中的，複製它們到 `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` 子目錄。 然後，可以創建新的**Apache 科爾多瓦 Windows Phone_ 應用程式從 Visual Studio __File → 新專案**功能表。

如果您從命令列運行該批次檔，還可以調用同一個參數，以便自動安裝：

        > createTemplates.bat-安裝


## 設立了一個新的專案

*   打開 Visual Studio 表示為 Windows Phone 和選擇**新的專案**.

*   選擇**CordovaWP7**。版本編號顯示在範本描述。

*   為該專案的名稱，並選擇**確定**.

## 審查的專案結構

`www`目錄功能 `html` ， `js` ，和 `css` 子目錄和任何其他資源要求您的應用程式。 任何附加內容需要的 Visual Studio 專案的一部分，必須將它設置為內容。

下面的示例結構表示一個 2.3.0 專案，但可能已安裝的版本而異：

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 為該設備生成專案

在測試之前您的設備上的應用程式，必須註冊該設備。 有關如何部署和測試 Windows Phone 7 上的詳細資訊，請參考[微軟的文檔][6]。 這些都是基本的步驟：

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   請確保您的電話連接，並且螢幕處於解鎖狀態。

*   在 Visual Studio 中，從頂部的下拉式功能表中選擇**設備**。

*   按主要的下拉式功能表中，若要啟動調試，旁邊的綠色**播放**按鈕，否則鍵入**F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

此時，你完了。

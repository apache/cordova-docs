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

title: WebViews iOS
---

# WebViews iOS

從科爾多瓦 1.4 開始，可以使用一個元件作為科爾多瓦在 iOS 應用程式中。此元件是代號為 '刀'。

新科爾多瓦基於應用程式使用提供在科爾多瓦 1.4 或更多地使用刀的 Xcode 範本創建的。（範本是刀的參考實現。

科爾多瓦 2.0.0 和後續版本僅支援基於次級專案刀執行。

## 系統必備元件

*   科爾多瓦 2.3.0 或更大

*   Xcode 4.5 或更大

*   `config.xml`[檔](../../../cordova/file/fileobj/fileobj.html) (從新創建的 iOS 專案)

## 克利弗添加到 Xcode 專案 （CordovaLib 子專案）

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦源，例如到`~/Documents/Cordova`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  複製 `config.xml` 檔到你的專案目錄在磁片上 （請參見上面的前提條件）。

5.  拖放式 `config.xml` 到 Xcode 專案導航的檔。

6.  選擇**創建組的任何添加的資料夾**選項按鈕，然後按**完成**.

7.  拖放式 `CordovaLib.xcodeproj` 到 Xcode 專案導航的檔 （從永久目錄以上，位置和它應該在 `CordovaLib` 子目錄）。

8.  Select `CordovaLib.xcodeproj` in the Project Navigator.

9.  鍵入**選項-命令-1**鍵的組合，以顯示**檔檢查器**.

10. 選擇**相對於組****檔檢查器**器下拉式功能表中的**位置**.

11. 在專案導航器中選擇**專案圖示**，選擇你的**目標**，然後選擇**生成設置**選項卡。

12. 添加 `-all_load` 和 `-Obj-C` 的**其他連結器標誌**值。

13. 按一下專案導航器中的**專案圖示**，選擇你的**目標**，然後選擇**生成階段**選項卡。

14. 展開**連結二進位檔案與庫**.

15. 選擇**+**按鈕，然後添加下列**框架**。（可選） 該專案導航器中移動他們的**框架**組下）：
    
        AddressBook.framework AddressBookUI.framework AudioToolbox.framework AVFoundation.framework CoreLocation.framework MediaPlayer.framework QuartzCore.framework SystemConfiguration.framework MobileCoreServices.framework CoreMedia.framework
        

16. 擴展**目標的依賴關係**，標有像這樣如果您有多個框的頂部框 ！

17. 選擇**+**按鈕，然後添加 `CordovaLib` 生成產品。

18. 展開**連結二進位檔案與庫**，標有像這樣如果您有多個框的頂部框 ！

19. 選擇**+**按鈕，然後添加`libCordova.a`.

20. 設置為**獨特**Xcode 偏好**Xcode 首選項 → [位置](../../../cordova/geolocation/Position/position.html) → 派生資料 → 先進......**.

21. 在專案導航器中選擇**專案圖示**，選擇你的**目標**，然後選擇**生成設置**選項卡。

22. 搜索**標題搜索路徑**。該設置，添加以下 （帶引號） 這三個值：
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    與科爾多瓦 2.1.0， `CordovaLib` 已升級為使用**自動引用計數 (弧)**。 你不需要升級到**弧**要使用 CordovaLib，但是如果你想要升級您的專案使用**弧**，請使用 Xcode 遷移嚮導從功能表中：**編輯 → 重構 → 轉換為目標 C 弧...**，**取消選擇 libCordova.a**，然後運行嚮導完成。

## 在您的代碼中使用 CDVViewController

1.  添加此標頭：
    
        #import <Cordova/CDVViewController.h>
        

2.  具現化一個新的 `CDVViewController` ，並保留它在某個地方 （例如，向您的類中的屬性）：
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  (*可選*）設置 `wwwFolderName` 屬性 （預設為 `www` ）：
    
        viewController.wwwFolderName = @"myfolder";
        

4.  (*可選*）在您的 config.xml 中設置的起始頁 `<content>` 標記。
    
        <content src="index.html" />
        
    
    或
    
        <content src="http://apache.org" />
        

5.  (*可選*）設置 `useSplashScreen` 屬性 （預設為 `NO` ）：
    
        viewController.useSplashScreen = YES;
        

6.  設置**視圖框架**（總是此設置作為最後一個屬性）：
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  將刀添加到您的視圖：
    
        [myView addSubview:viewController.view];
        

## 添加您的 HTML、 CSS 和 JavaScript 資產

1.  在您在磁片上的專案中創建一個新的目錄 `www` 為例。

2.  將您的 HTML、 CSS 和 JavaScript 資產放入此目錄。

3.  拖動並放到 Xcode 專案導航器的目錄。

4.  選擇**創建資料夾引用的任何添加的資料夾**選項按鈕。

5.  設置相應的 `wwwFolderName` 和 `startPage` 你最初創建的資料夾的屬性，或使用預設設置 （請參閱上一節） 當你具現化`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"
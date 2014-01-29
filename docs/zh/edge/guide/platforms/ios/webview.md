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

# WebViews iOS

這一節演示如何嵌入在一個較大的 iOS 應用程式內的科爾多瓦啟用 web 視圖元件。這些元件可以如何與對方溝通的詳細資訊，請參閱應用程式外掛程式。

支援的 iOS WebViews 開始與科爾多瓦版本 1.4，使用 `Cleaver` 的 Xcode 範本用作參考實現的元件。 科爾多瓦 2.0 及更高版本僅支援基於子專案的刀實施。

這些說明至少需要科爾多瓦 2.3 和 Xcode 4.5，沿與 `config.xml` 從新創建的 iOS 專案檔案。 你可以使用程式的命令列介面來創建一個新專案，然後獲取 `config.xml` 從檔中的命名的應用程式子目錄內`platforms/ios`.

要按照這些說明進行操作，請確保您有最新的科爾多瓦分佈。從[cordova.apache.org][1]下載並解壓其 iOS 包。

 [1]: http://cordova.apache.org

## 將刀添加到 Xcode 專案 （CordovaLib 子專案）

1.  如果它正在運行，請退出 Xcode。

2.  打開一個終端並導航到科爾多瓦 iOS 的原始目錄。

3.  複製 `config.xml` 檔到專案目錄上文所述。

4.  打開 Xcode 並使用 Finder 來複製 `config.xml` 檔到其**專案導航**視窗。

5.  選擇**創建組的任何添加的資料夾**，然後按**完成**.

6.  使用 Finder 來複製 `CordovaLib/CordovaLib.xcodeproj` 檔到 Xcode 的**專案導航器**

7.  選擇 `CordovaLib.xcodeproj` 內**專案導航器**.

8.  鍵入**選項-命令-1**鍵的組合，以顯示**檔檢查器**.

9.  選擇**相對於組****檔檢查器**器下拉式功能表中的**位置**.

10. 在**導航專案**中選擇**專案圖示**，選擇**目標**，然後選擇**生成設置**選項卡。

11. 添加 `-force_load` 和 `-Obj-C` 的**其他連結器標誌**值。

12. 按一下專案導航器中的**專案圖示**，選擇**目標**，然後選擇**生成階段**選項卡。

13. 展開**連結二進位檔案與庫**.

14. 選擇**+**按鈕，然後添加下列**框架**。 （可選） 在**導航專案**內, 移動它們**框架**組下：
    
        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework
        

15. 擴展**目標的依賴關係**，與該標籤，如果有多個框頂部的框。

16. 選擇**+**按鈕，然後添加 `CordovaLib` 生成產品。

17. 展開**連結與庫的二進位檔案**，與該標籤，如果有多個框頂部的框。

18. 選擇**+**按鈕，然後添加`libCordova.a`.

19. 設置**Xcode 首選項 → 位置 → 派生資料 → 高級...**到**獨特**.

20. 在專案導航器中選擇**專案圖示**，選擇你的**目標**，然後選擇**生成設置**選項卡。

21. 搜索**標題搜索路徑**。該設置，添加這三個值以下，包括引號：
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    科爾多瓦 2.1.0，如 `CordovaLib` 已升級為使用**自動引用計數 (弧)**。 你不需要升級到**弧**要使用 `CordovaLib` ，但如果您想要升級您的專案使用**弧**，則應使用 Xcode 遷移嚮導從**編輯 → 重構 → 轉換為目標 C 弧...**功能表中，**取消選擇 libCordova.a**，然後運行嚮導完成。

## 使用 CDVViewController

1.  添加以下標頭：
    
        #import <Cordova/CDVViewController.h>
        

2.  具現化一個新的 `CDVViewController` 和保留它在某個地方，例如，到類的屬性：
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  （可選） 設置 `wwwFolderName` 屬性，預設為 `www` ：
    
        viewController.wwwFolderName = @"myfolder";
        

4.  （可選） 設置的起始頁 `config.xml` 檔的 `<content>` 標記，或者本地的檔：
    
        <content src="index.html" />
        
    
    ...或是遠端站台：
    
        <content src="http://apache.org" />
        

5.  （可選） 設置 `useSplashScreen` 屬性，預設為 `NO` ：
    
        viewController.useSplashScreen = YES;
        

6.  設置**視圖框架**。始終設置為最後一個屬性：
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  向視圖添加刀：
    
        [myView addSubview:viewController.view];
        

## 添加 HTML、 CSS 和 JavaScript 資產

1.  創建一個新的目錄，在專案中， `www` 為例。

2.  將 HTML、 CSS 和 JavaScript 資產放到此目錄。

3.  使用 Finder 將目錄複寫到 Xcode 的**專案導航**視窗。

4.  選擇**任何添加的資料夾創建資料夾的參考檔**.

5.  設置相應的 `wwwFolderName` 和 `startPage` 你最初創建的目錄的屬性或使用預設值 （在上一節中指定） 時具現化`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"
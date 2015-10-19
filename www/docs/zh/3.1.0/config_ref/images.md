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

title: 圖示和啟動畫面
---

# 圖示和啟動畫面

這一節演示如何配置應用程式的圖示和可選初始螢幕上的各種平臺上，兩者在科爾多瓦 CLI （描述在命令列介面） 中工作時或使用特定于平臺 SDK 工具 （平臺指南中詳細說明）。

## 在 CLI 中配置圖示

工作時在 CLI 中，圖示原始檔案位於內各種平臺特定子目錄內專案的 `www/res/icons` 目錄。 新創建的專案來與一組預設的科爾多瓦圖示為您替換為您希望為目標的平臺。

Android 系統指定的低、 中、 高、 特高的各項決議的圖示：

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

IOS 平臺指定 72 圖元正方形圖示為 Ipad，並為 Iphone 和 Ipod，帶有高解析度*2 x*變形為視網膜的 57 圖元圖示顯示：

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone 指定預設 48 圖元的圖示，以及各種設備背景平鋪在代表應用程式時使用的圖像：

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

黑莓手機需要 80 圖元的圖示：

        blackberry/icon-80.png
    

Tizen 需要 128 圖元的圖示：

        tizen/icon-128.png
    

## 在 CLI 中配置初始螢幕

使用閃屏 API 來啟用應用程式的介紹性閃屏在許多平臺上的顯示。 工作時在 CLI 中，初始螢幕原始程式碼檔位於專案的 `www/res/screens` 子目錄。

Android 系統指定這兩個面向肖像和風景閃屏圖像為低、 中、 高、 特高的各項決議：

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

IOS 平臺指定變形為 iPhone 和 iPod 和 iPad，具有變形為視網膜顯示和不同的方向。*568 H*檔是為 iPhone 5 的高螢幕自訂：

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

黑莓和 Windows Phone 都指定一個初始螢幕圖像：

        blackberry/screen-225.png
        windows-phone/screen-portrait.jpg
    

以下各節詳細說明了如何設置初始螢幕時使用 Sdk 和相關的命令列工具在平臺指南仲介紹。

## Android 平臺的初始螢幕

[9-修補程式的圖像][1]檔放在 Android 專案 `res/drawable` 目錄。為每個大小應為：

 [1]: https://developer.android.com/tools/help/draw9patch.html

*   xlarge (xhDPI)： 至少 960 × 720
*   大 (下)： 至少 640 × 480
*   中期 (mDPI)： 至少 470 × 320
*   小 (lDPI)： 至少 426 × 320

在 `config.xml` ，添加下列優惠：

    <preference name="splashscreen", "splash" />
    <preference name="splashScreenDelay", 10000 />
    

第一行設置為初始螢幕顯示的圖像。如果你命名您的圖像什麼除了 `splash.png` ，您需要修改這條線。

第二行設置多久閃屏顯示以毫秒為單位的延遲。 遣散閃屏，一旦接收到 app `[deviceready](../cordova/events/events.deviceready.html)` 事件，調用 `navigator.splashscreen.hide()` 方法。

## IOS 平臺的初始螢幕

將您的初始螢幕圖像複製到 iOS 專案 `Resources/splash` 目錄。 僅添加您想要支援的比如 iPad 或者 iPhone 的設備圖像。 每個圖像的大小應為：

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 圖元為單位）
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## 10 黑莓平臺的初始螢幕

將您的初始螢幕圖像複製到專案的 `res/screen/blackberry10` 目錄。檔的名稱應該是：

*   splash-1280x768.png (1280x768 pixels)
*   splash-720x720.png (720x720 pixels)
*   splash-768x1280.png (768x1280 pixels)
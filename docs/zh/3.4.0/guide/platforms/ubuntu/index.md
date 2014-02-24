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

# Ubuntu 平臺指南

## 初始版本

歡迎來到科爾多瓦 Ubuntu 平臺支援的初始版本。 此版本中，重點是在 Ubuntu 的系統上開發和使用科爾多瓦 Web 專案開發工作流。 這包括將 Ubuntu 平臺添加到您的專案，添加標準科爾多瓦外掛程式，，當然，建設和運行的 Ubuntu 平臺的應用程式。

### Ubuntu SDK

您還可能想要安裝 Ubuntu QtCreator 開發環境。 請參閱[developer.ubuntu.com][1]為更多的資訊。 (QtCreator SDK 不是需要將 Ubuntu 平臺支援添加到應用程式科爾多瓦。)

 [1]: http://developer.ubuntu.com

### Ubuntu 運行時平臺

Ubuntu 是知名的為其桌面環境 （用於筆記本電腦、 Pc 和此類）。 Ubuntu 觸摸延伸到手機和平板電腦上的 Ubuntu 作業系統。 Ubuntu 運行時平臺有不同的 CPU 體系結構 （x 86，armhf，等.）。 必須適當地編譯外掛程式和應用程式代碼。 對此廣泛領域的支援正在迅速演變在 Ubuntu 中。

### 最新資訊

科爾多瓦 app 支援 Ubuntu 運行時平臺的最新資訊，請參閱[wiki.ubuntu.com/Cordova][2].

 [2]: http://wiki.ubuntu.com/Cordova

## 發展平臺要求

此初始發行版本的開發平臺應該是 Ubuntu 桌面。Ubuntu 13.10 (代號 '曖昧') 或更高版本需要享受完整的支援的功能集。

你可以安裝科爾多瓦非 Ubuntu 使用在系統上 （故宮），但重要的能力，在這個時候只提供通過 Ubuntu debian 套裝軟體。

## 科爾多瓦安裝

添加到您的 Ubuntu 系統 Ubuntu 科爾多瓦[個人包存檔][3]：

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

安裝科爾多瓦 cli 包 （和它的依賴項）：

    $ sudo apt-get install cordova-cli
    

## 專案工作流

### 創建一個專案

    $ cordova create project1 REVERSEDNSNAME.project1 project1
    

### 移動到專案目錄

    $ cd project1
    

### 添加 Ubuntu 平臺

    $ cordova platform add ubuntu
    

### Ubuntu 的生成

    $ cordova build ubuntu
    

### 運行應用程式

    $ cordova run ubuntu
    

### 添加電池狀態外掛程式

    $ cordova plugin add org.apache.cordova.battery-status
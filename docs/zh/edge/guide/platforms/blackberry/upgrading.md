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

# 升級黑莓手機

本指南演示如何修改黑莓手機的專案從科爾多瓦的舊版本進行升級。 這些說明適用于與舊集的前面的命令列工具創建的專案 `cordova` CLI 實用程式。 命令列介面資訊，請參閱如何更新的 CLI 版本。

## 升級 2.8.0 專案到 2.9.0

黑莓 10：

1.  下載並解壓縮到您的硬碟磁碟機上永久位置的科爾多瓦 2.9.0 源，例如到`~/Cordova-2.9.0`.

2.  退出任何正在運行的 SDK 工具： 日食、 Momentics 和類似。

3.  導航到您放在上面，使用的 unix 像終端的下載的源的目錄： 終端程式，Bash，這個軟體，等等。

4.  創建一個新專案，黑莓手機的命令列工具中所述。這將成為您更新的專案的家中。

5.  從舊專案複製您的專案源 `/www` 目錄到新的專案的 `/www` 目錄。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova.js` 檔。

### BlackBerryOS/操作手冊

1.  下載並解壓縮到您的硬碟磁碟機上永久位置的科爾多瓦 2.9.0 源，例如到`~/Cordova-2.9.0`.

2.  退出任何正在運行的 SDK 工具： 日食、 Momentics 和類似。

3.  導航到您放在上面，使用的 unix 像終端的下載的源的目錄： 終端程式，Bash，這個軟體，等等。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova.js` 檔。

7.  複製 `native` 到現有專案中，並覆蓋舊從新專案目錄 `native` 目錄。

8.  複製 `lib` 到現有專案中，並覆蓋舊從新專案目錄 `lib` 目錄。

9.  複製 `cordova` 到現有專案中，並覆蓋舊從新專案目錄 `cordova` 目錄。

## 升級 2.7.0 專案到 2.8.0

黑莓 10：

黑莓 10 使用新的 CLI 模具和管理核心作為外掛程式的 Api。 說明將您的專案遷移到新的專案，而不是更新現有的專案，由於更新一個舊的專案的複雜性。 此外注意到科爾多瓦 js 指令檔現在被稱為 'cordova.js' 和不再包含版本的字串。

1.  下載並解壓縮到您的硬碟磁碟機上永久位置的科爾多瓦 2.8.0 源，例如到`~/Cordova-2.8.0`.

2.  退出任何正在運行的 SDK 工具： 日食、 Momentics 和類似。

3.  導航到您放在上面，使用的 unix 像終端的下載的源的目錄： 終端程式，Bash，這個軟體，等等。

4.  創建一個新專案，黑莓手機的命令列工具中所述。這將成為您更新的專案的家中。

5.  從舊專案複製您的專案源 `/www` 目錄到新的專案的 `/www` 目錄。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova.js` 檔。

BlackBerryOS/行動手冊：

1.  下載並解壓縮到您的硬碟磁碟機上永久位置的科爾多瓦 2.8.0 源，例如到`~/Cordova-2.8.0`.

2.  退出任何正在運行的 SDK 工具： 日食、 Momentics 和類似。

3.  導航到您放在上面，使用的 unix 像終端的下載的源的目錄： 終端程式，Bash，這個軟體，等等。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova.js` 檔。

7.  複製 `native` 到現有專案中，並覆蓋舊從新專案目錄 `native` 目錄。

8.  複製 `lib` 到現有專案中，並覆蓋舊從新專案目錄 `lib` 目錄。

9.  複製 `cordova` 到現有專案中，並覆蓋舊從新專案目錄 `cordova` 目錄。

## 升級 2.6.0 專案到 2.7.0

1.  下載並解壓縮到您的硬碟磁碟機上永久位置的科爾多瓦 2.7.0 源，例如到`~/Cordova-2.7.0`.

2.  退出任何正在運行的 SDK 工具： 日食、 Momentics 和類似。

3.  導航到您放在上面，使用的 unix 像終端的下載的源的目錄： 終端程式，Bash，這個軟體，等等。

4.  創建一個新專案，黑莓手機的命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova-2.7.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-2.6.0.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-2.7.0.js` 檔。

7.  複製 `native` 到現有專案中，並覆蓋舊從新專案目錄 `native` 目錄。

8.  複製 `lib` 到現有專案中，並覆蓋舊從新專案目錄 `lib` 目錄。

9.  複製 `cordova` 到現有專案中，並覆蓋舊從新專案目錄 `cordova` 目錄。

## 從 2.5.0 升級到 2.6.0

更新 PhoneGap 下載目錄：

建議你下載整個目錄的新副本。

但是，在這裡是零敲碎打更新所需的新零件：

1.  更新中的 cordova.blackberry.js 檔 `Phonegap-2.6.0/lib/blackberry/javascript` 目錄。

2.  更新 `ext` ， `ext-air` ，和 `ext-qnx` 在 `Phonegap-2.6.0/lib/blackberry/framework` 目錄。

3.  更新 `build.xml` 檔在 `Phonegap-2.6.0/lib/blackberry` 目錄。

4.  更新 `Phonegap-2.6.0/lib/blackberry/bin` 目錄。

5.  更新 `VERSION` 檔在 `Phonegap-2.6.0/lib/blackberry` 目錄。

更新 `example/` 目錄或遷移現有的專案：

1.  打開您 `www/` 目錄，其中包含您的應用程式。

2.  刪除和更新中的.jar 檔 `ext/` 目錄。

3.  更新的內容 `ext-air/` 目錄。

4.  更新的內容 `ext-qnx/` 目錄。

5.  複製新 `cordova-2.6.0.js` 到您的專案。

6.  更新您的 html 代碼，使用新的 `cordova-2.6.0.js` 檔。

## 從 2.4.0 升級到 2.5.0

更新 PhoneGap 下載目錄：

建議你下載整個目錄的新副本。

但是，在這裡是零敲碎打更新所需的新零件：

1.  更新中的 cordova.blackberry.js 檔 `Phonegap-2.5.0/lib/blackberry/javascript` 目錄。

2.  更新 `ext` ， `ext-air` ，和 `ext-qnx` 在 `Phonegap-2.5.0/lib/blackberry/framework` 目錄。

3.  更新 `build.xml` 檔在 `Phonegap-2.5.0/lib/blackberry` 目錄。

4.  更新 `Phonegap-2.5.0/lib/blackberry/bin` 目錄。

5.  更新 `VERSION` 檔在 `Phonegap-2.5.0/lib/blackberry` 目錄。

更新示例 / 目錄或遷移現有的專案：

1.  打開您 `www/` 目錄，其中包含您的應用程式。

2.  刪除和更新中的.jar 檔 `ext/` 目錄。

3.  更新的內容 `ext-air/` 目錄。

4.  更新的內容 `ext-qnx/` 目錄。

5.  複製新 `cordova-2.5.0.js` 到您的專案。

6.  更新您的 html 代碼，使用新的 `cordova-2.5.0.js` 檔。

## 從 2.3.0 升級到 2.4.0

更新只是 `www` 目錄：

1.  打開您 `www/` 目錄，其中包含您的應用程式。

2.  刪除和更新中的.jar 檔 `ext/` 目錄。

3.  更新的內容 `ext-air/` 目錄。

4.  複製新 `cordova-2.4.0.js` 到您的專案。
    
    *   如果行動手冊，然後更新.js 檔在 `playbook/` 目錄。
    *   如果黑莓 10，然後更新中的.js 檔 `qnx/` 目錄。

5.  更新您的 html 代碼，使用新的 `cordova-2.4.0.js` 檔。

更新 （ie，更新使用 ant 工具） 的示例目錄：

1.  打開 `sample/lib/` 目錄。

2.  更新中的.jar 檔 `cordova.2.3.0/ext/` 目錄。

3.  更新的內容 `cordova.2.3.0/ext-air/` 目錄。

4.  更新的內容 `cordova.2.3.0/ext-qnx/` 目錄。

5.  更新中的.js 檔 `cordova.2.3.0/javascript/` 目錄。

6.  打開 `sample/lib/` 目錄和重命名 `cordova.2.3.0/` 到目錄`cordova.2.4.0/`.

7.  類型 `ant blackberry build` 或 `ant playbook build` 來更新 `www/` 目錄與更新科爾多瓦。

8.  打開 `www/` 目錄和更新您的 html 代碼，使用新的 `cordova-2.4.0.js` 檔。

## 從 2.2.0 升級到 2.3.0

更新只是 `www` 目錄：

1.  打開您 `www/` 目錄，其中包含您的應用程式。

2.  刪除和更新中的.jar 檔 `ext/` 目錄。

3.  更新的內容 `ext-air/` 目錄。

4.  複製新 `cordova-2.3.0.js` 到您的專案。
    
    *   如果行動手冊，然後更新.js 檔在 `playbook/` 目錄。
    *   如果黑莓 10，然後更新中的.js 檔 `qnx/` 目錄。

5.  更新您的 html 代碼，使用新的 `cordova-2.3.0.js` 檔。

更新 （ie，更新使用 ant 工具） 的示例目錄：

1.  打開 `sample/lib/` 目錄。

2.  更新中的.jar 檔 `cordova.2.2.0/ext/` 目錄。

3.  更新的內容 `cordova.2.2.0/ext-air/` 目錄。

4.  更新的內容 `cordova.2.2.0/ext-qnx/` 目錄。

5.  更新中的.js 檔 `cordova.2.2.0/javascript/` 目錄。

6.  打開 `sample/lib/` 目錄和重命名 `cordova.2.2.0/` 到目錄`cordova.2.3.0/`.

7.  類型 `ant blackberry build` 或 `ant playbook build` 來更新 `www/` 目錄與更新科爾多瓦。

8.  打開 `www/` 目錄和更新您的 html 代碼，使用新的 `cordova-2.3.0.js` 檔。

## 從 2.1.0 升級到 2.2.0

更新只是 www 目錄：

1.  打開您 `www/` 目錄，其中包含您的應用程式。

2.  刪除和更新中的.jar 檔 `ext/` 目錄。

3.  更新的內容 `ext-air/` 目錄。

4.  複製新 `cordova-2.2.0.js` 到您的專案。
    
    *   如果行動手冊，然後更新.js 檔在 `playbook/` 目錄。
    *   如果黑莓 10，然後更新中的.js 檔 `qnx/` 目錄。

5.  更新您的 html 代碼，使用新的 `cordova-2.2.0.js` 檔。

更新 （ie，更新使用 ant 工具） 的示例目錄：

1.  打開 `sample/lib/` 目錄。

2.  更新中的.jar 檔 `cordova.2.1.0/ext/` 目錄。

3.  更新的內容 `cordova.2.1.0/ext-air/` 目錄。

4.  更新的內容 `cordova.2.1.0/ext-qnx/` 目錄。

5.  更新中的.js 檔 `cordova.2.1.0/javascript/` 目錄。

6.  打開 `sample/lib/` 目錄和重命名 `cordova.2.1.0/` 到目錄`cordova.2.2.0/`.

7.  類型 `ant blackberry build` 或 `ant playbook build` 來更新 `www/` 目錄與更新科爾多瓦。

8.  打開 `www/` 目錄和更新您的 html 代碼，使用新的 `cordova-2.2.0.js` 檔。

## 從 2.0.0 升級到 2.1.0

更新只是 `www` 目錄：

1.  打開您 `www/` 目錄，其中包含您的應用程式。

2.  刪除和更新中的.jar 檔 `ext/` 目錄。

3.  更新的內容 `ext-air/` 目錄。

4.  複製新 `cordova-2.1.0.js` 到您的專案。
    
    *   如果行動手冊，然後更新.js 檔在 `playbook/` 目錄。

5.  更新您的 html 代碼，使用新的 `cordova-2.1.0.js` 檔。

更新 （ie，更新使用 ant 工具） 的示例目錄：

1.  打開 `sample/lib/` 目錄。

2.  更新中的.jar 檔 `cordova.2.0.0/ext/` 目錄。

3.  更新的內容 `cordova.2.0.0/ext-air/` 目錄。

4.  更新中的.js 檔 `cordova.2.0.0/javascript/` 目錄。

5.  打開 `sample/lib/` 目錄和重命名 `cordova.2.0.0/` 到目錄`cordova.2.1.0/`.

6.  類型 `ant blackberry build` 或 `ant playbook build` 來更新 `www/` 目錄與更新科爾多瓦。

7.  打開 `www/` 目錄和更新您的 html 代碼，使用新的 `cordova-2.1.0.js` 檔。

## 從 1.9.0 升級到 2.0.0

更新只是 `www` 目錄：

1.  打開您 `www/` 目錄，其中包含您的應用程式。

2.  刪除和更新中的.jar 檔 `ext/` 目錄。

3.  更新的內容 `ext-air/` 目錄。

4.  複製新 `cordova-2.0.0.js` 到您的專案。
    
    *   如果行動手冊，然後更新.js 檔在 `playbook/` 目錄。

5.  更新您的 html 代碼，使用新的 `cordova-2.0.0.js` 檔。

6.  更新您 `www/plugins.xml` 檔。兩個外掛程式更改其命名空間/服務標籤。更改為的捕獲和連絡人的外掛程式，從舊的條目：
    
        < 外掛程式名稱 ="捕獲"value="org.apache.cordova.media.MediaCapture"/ >< 外掛程式名稱 ="連絡人"value="org.apache.cordova.pim.Contact"/ >
        
    
    自：
    
        < 外掛程式名稱 ="捕獲"value="org.apache.cordova.capture.MediaCapture"/ >< 外掛程式名稱 ="連絡人"value="org.apache.cordova.pim.Contact"/ >
        

更新 （ie，更新使用 ant 工具） 的示例目錄：

1.  打開 `sample/lib/` 目錄。

2.  更新中的.jar 檔 `cordova.1.9.0/ext/` 目錄。

3.  更新的內容 `cordova.1.9.0/ext-air/` 目錄。

4.  更新中的.js 檔 `cordova.1.9.0/javascript/` 目錄。

5.  打開 `sample/lib/` 目錄和重命名 `cordova.1.9.0/` 到目錄`cordova.2.0.0/`.

6.  類型 `ant blackberry build` 或 `ant playbook build` 來更新 `www/` 目錄與更新科爾多瓦。

7.  打開 `www/` 目錄和更新您的 html 代碼，使用新的 `cordova-2.0.0.js` 檔。

8.  打開 `www/` 目錄和更新 `plugins.xml` 檔。兩個外掛程式更改其命名空間/服務標籤。更改為的捕獲和連絡人的外掛程式，從舊的條目：
    
         < 外掛程式名稱 ="捕獲"value="org.apache.cordova.media.MediaCapture"/ >< 外掛程式名稱 ="連絡人"value="org.apache.cordova.pim.Contact"/ >
        
    
    自：
    
         < 外掛程式名稱 ="捕獲"value="org.apache.cordova.capture.MediaCapture"/ >< 外掛程式名稱 ="連絡人"value="org.apache.cordova.pim.Contact"/ >
        

*   要升級到 1.8.0，請轉從 1.7.0

## 從 1.7.0 升級到 1.8.0

更新只是 `www` 目錄：

1.  打開您 `www/` 目錄，其中包含您的應用程式。

2.  刪除和更新中的.jar 檔 `ext/` 目錄。

3.  更新的內容 `ext-air/` 目錄。

4.  複製新 `cordova-1.8.0.js` 到您的專案。
    
    *   如果行動手冊，然後更新.js 檔在 `playbook/` 目錄。

5.  更新您的 html 代碼，使用新的 `cordova-1.8.0.js` 檔。

6.  更新您 `www/plugins.xml` 檔。兩個外掛程式更改其命名空間/服務標籤。更改為的捕獲和連絡人的外掛程式，從舊的條目：
    
        < 外掛程式名稱 ="捕獲"value="org.apache.cordova.media.MediaCapture"/ >< 外掛程式名稱 ="連絡人"value="org.apache.cordova.pim.Contact"/ >
        
    
    自：
    
        < 外掛程式名稱 ="捕獲"value="org.apache.cordova.capture.MediaCapture"/ >< 外掛程式名稱 ="連絡人"value="org.apache.cordova.pim.Contact"/ >
        

更新 （ie，更新使用 ant 工具） 的示例目錄：

1.  打開 `sample/lib/` 目錄。

2.  更新中的.jar 檔 `cordova.1.7.0/ext/` 目錄。

3.  更新的內容 `cordova.1.7.0/ext-air/` 目錄。

4.  更新中的.js 檔 `cordova.1.7.0/javascript/` 目錄。

5.  打開 `sample/lib/` 目錄和重命名 `cordova.1.7.0/` 到目錄`cordova.1.8.0/`.

6.  類型 `ant blackberry build` 或 `ant playbook build` 來更新 `www/` 目錄與更新科爾多瓦。

7.  打開 `www/` 目錄和更新您的 html 代碼，使用新的 `cordova-1.8.0.js` 檔。

8.  打開 `www/` 目錄和更新 `plugins.xml` 檔。兩個外掛程式更改其命名空間/服務標籤。更改為的捕獲和連絡人的外掛程式，從舊的條目：
    
         < 外掛程式名稱 ="捕獲"value="org.apache.cordova.media.MediaCapture"/ >< 外掛程式名稱 ="連絡人"value="org.apache.cordova.pim.Contact"/ >
        
    
    自：
    
         < 外掛程式名稱 ="捕獲"value="org.apache.cordova.capture.MediaCapture"/ >< 外掛程式名稱 ="連絡人"value="org.apache.cordova.pim.Contact"/ >
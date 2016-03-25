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

title: 平臺和外掛程式版本管理
---

# 平臺和外掛程式版本管理

從版 4.3.0 開始，科爾多瓦提供保存和還原平臺和外掛程式的能力。

此功能允許開發人員保存，並將他們的應用程式還原到已知狀態，而無需檢查在所有的平臺和外掛程式的原始程式碼。

保存命令在 config.xml 中存儲應用程式的平臺和外掛程式版本的詳細資訊。 '還原' 一步會自動發生**'cordova prepare'**發出，製作時使用以前保存的 config.xml 檔中的資訊。

在哪裡保存/恢復功能派上用場的一個方案是在處理一個應用程式，專注于一個平臺或者外掛程式每個團隊成員的大型團隊。 此功能很容易地共用專案和減少冗余檢查存儲庫中的代碼的數量。

## 平臺版本控制

### 儲蓄的平臺

若要保存一個平臺，你可以發出以下命令:

    $ cordova platform add <platform[@<version>] | directory | git_url> --save
    

運行上述命令後，由此產生的 config.xml 看起來像:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="~4.0.0" />
        ...
    </xml>
    

一些例子:

  * **'cordova platform add android --save'** => 檢索固定的版本的 android 平臺，將其添加到該專案，然後更新 config.xml。
  * **'cordova platform add android@3.7.0 --save'** => 檢索 android 平臺上，從新公共管理，版本 3.7.0 將它添加到專案，然後更新 config.xml。
  * **'cordova platform add android@https://github.com/apache/cordova-android.git​ --save'** => 克隆指定的科爾多瓦 android git 倉庫，將 android 平臺添加到專案中，然後更新 config.xml 並指向指定的 git url 及其版本。
  * **cordova platform add C:/path/to/android/platform --save** => 從指定的目錄中檢索的 android 平臺，將其添加到專案中，然後更新 config.xml 和指向的目錄。

### 保存對現有專案的平臺的大眾

'--save' 上文所述的旗幟只是有用的你只要記得使用平臺添加期間。 如果你有一個預先存在的專案，並且您想要保存您的專案中的所有當前添加的平臺，您可以使用:

    $ cordova platform save
    

### 更新/刪除平臺

它也是可能更新或刪除從 config.xml 命令 '科爾多瓦平臺更新' 和 '科爾多瓦平臺刪除' 期間:

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
    

一些例子:

  * 除了到固定的版本，更新 config.xml 條目更新 android 平臺**'cordova platform update android --save'** =>
  * 除了 android 平臺更新到版本 3.8.0，更新 config.xml 條目**'cordova platform update android@3.8.0 --save'** =>
  * 除了 android 平臺更新到版本更新資料夾，更新 config.xml 條目中**'cordova platform update /path/to/android/platform --save'** =>
  * =>**'cordova platform remove android --save'**從專案中移除的 android 平臺，從 config.xml 中刪除其專案。

### 恢復平臺

**'cordova prepare'**命令運行時，將會從 config.xml 自動還原平臺。

如果沒有指定版本的資料夾/git_url 中添加一個平臺，要安裝的版本取自 config.xml，**如果發現**.

示例:

假設您的 config.xml 檔包含以下項:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>
    

< / xml > 如果你運行命令**'cordova platform add android'** (沒有版本/資料夾/git_url 指定)，將安裝平臺 'android@3.7.0' (如從 config.xml 中檢索)。

* * *

## 外掛程式版本控制

*(外掛程式命令是外掛程式命令鏡像)*

### 保存外掛程式

若要保存外掛程式，您可以發出以下命令:

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save
    

運行上述命令後，由此產生的 config.xml 看起來像:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="~1.0.0" />
        ...
    </xml>
    

一些例子:

  * => **'cordova plugin add cordova-plugin-console --save'**檢索固定的版本的主控台外掛程式，將其添加到該專案，然後更新 config.xml。
  * **cordova plugin add cordova-plugin-console@0.2.13 --save** => 檢索 android 外掛程式，版本 0.2.13 從新公共管理，將其添加到該專案，然後更新 config.xml。
  * => **'cordova plugin add https://github.com/apache/cordova-plugin-console.git --save'**克隆指定的主控台外掛程式 git 倉庫、 將主控台外掛程式添加到該專案，然後更新 config.xml 和指向指定的 git url 及其版本。
  * **cordova plugin add C:/path/to/console/plugin --save**=> 從指定的目錄中檢索該主控台外掛程式，將其添加到專案中，然後更新 config.xml 和指向的目錄。

### 大眾在現有專案保存外掛程式

'--save' 上文所述的旗幟只是有用的你只要記得使用外掛程式添加期間。 如果你有一個預先存在的專案，並且您想要保存所有當前專案中添加的外掛程式，您可以使用:

    $ cordova plugin save
    

### 更新/刪除外掛程式

它也是可能更新或刪除從 config.xml 命令 '科爾多瓦外掛程式更新' 和 '科爾多瓦外掛程式刪除' 期間:

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
    

一些例子:

  * 除了到固定的版本，更新 config.xml 條目更新主控台外掛程式**'cordova plugin update cordova-plugin-console --save'** =>
  * 除了 android 外掛程式更新到版本 3.8.0，更新 config.xml 條目**'cordova plugin update cordova-plugin-console@0.2.13 --save'** =>
  * 除了更新到版本資料夾，更新 config.xml 條目中的主控台外掛程式**'cordova plugin update /path/to/console/plugin --save'** =>
  * =>**'cordova plugin remove cordova-plugin-console --save'**從專案中移除該主控台外掛程式和從 config.xml 中刪除它的條目。

### 恢復外掛程式

從 config.xml 的外掛程式會自動復原， **'cordova prepare'**命令運行時。

如果沒有指定版本的資料夾/git_url 添加一個外掛程式，要安裝的版本取自 config.xml，**如果發現**.

示例:

假設您的 config.xml 檔包含以下項:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="0.2.11" />
        ...
    </ xml>
    

< / xml > 如果你運行命令**'cordova plugin add cordova-plugin-console'** (沒veresion/folder/git_url 指定)，將安裝該外掛程式 'cordova-plugin-console@0.2.11' (如從 config.xml 中檢索)。
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

title: 鉤子指南
---

# 鉤子指南

科爾多瓦鉤表示特別的腳本可以由應用程式和外掛程式開發人員添加或甚至由您自己構建體系，以自訂科爾多瓦命令。 鉤腳本可以通過將其添加到特殊的預定義資料夾 (`/hooks`) 或通過設定檔 (`config.xml`和`plugin.xml`) 定義和連續運行順序如下:

  * 應用程式掛鉤從`/hooks`;
  * 應用鉤子從`config.xml`;
  * 從`plugins/.../plugin.xml`外掛程式鉤子.

**注**: `/hooks`目錄被認為是支援在 config.xml 和 plugin.xml 鉤元素，否決。

## 支援的鉤類型

支援以下的鉤子類型:

    after_build
    after_compile
    after_clean
    after_docs
    after_emulate
    after_platform_add
    after_platform_rm
    after_platform_ls
    after_plugin_add
    after_plugin_ls
    after_plugin_rm
    after_plugin_search
    after_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    after_prepare
    after_run
    after_serve
    before_build
    before_clean
    before_compile
    before_docs
    before_emulate
    before_platform_add
    before_platform_rm/
    before_platform_ls
    before_plugin_add
    before_plugin_ls
    before_plugin_rm
    before_plugin_search/
    before_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    before_plugin_uninstall // Plugin hooks in plugin.xml are executed for a plugin being uninstalled only
    before_prepare
    before_run
    before_serve
    pre_package // Windows and Windows Phone only
    

## 如何定義鉤子

### 通過`/hooks`目錄

**注意**: 此方法被認為是支援在 config.xml 和 plugin.xml 鉤元素，否決。

在相應的鉤子類型觸發時執行自訂操作、 使用鉤型作為 '鉤' 目錄內的子資料夾的名稱和地方您編寫的指令檔在這裡，例如:

    # script file will be automatically executed after each build
    hooks/after_build/after_build_custom_action.js
    

當使用這些鉤子，他們總是將作為不作為可載入 JavaScript 模組的可執行檔運行。 **記住**: 在這種情況下使您的腳本可執行。

### Config.xml

鉤子可以定義在專案的`config.xml`使用`< 鉤 >`元素，例如:

    <hook type="before_build" src="scripts/appBeforeBuild.bat" />
    <hook type="before_build" src="scripts/appBeforeBuild.js" />
    <hook type="before_plugin_install" src="scripts/appBeforePluginInstall.js" />
    
    <platform name="wp8">
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/wp8/appWP8BeforePluginInstall.js" />
        ...
    </platform>
    
    <platform name="windows8">
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/windows8/appWin8BeforePluginInstall.js" />
        ...
    </platform>
    

### 外掛程式鉤子 (plugin.xml)

作為外掛程式的開發人員，您可以定義掛接在`plugin.xml`中那樣使用`< 鉤 >`元素的腳本:

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />
    
    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>
    

`before_plugin_install`， `after_plugin_install`， `before_plugin_uninstall`外掛程式鉤子將發射專門為正在安裝卸載該外掛程式。

## 指令碼介面

### JAVAscript

如果您正在編寫鉤使用 Node.js，應使用下列模組定義:

```javascript
module.exports = function(context) {
    ...
}
```

您可以使用問: 你 scipts 非同步

```javascript
module.exports = function(context) {
    var Q = context.requireCordovaModule('q');
    var deferral = new Q.defer();

    setTimeout(function(){
      console.log('hook.js>> end');
    deferral.resolve();
    }, 1000);

    return deferral.promise;
}
```

`上下文`物件包含的鉤子類型，執行的腳本的完整路徑，鉤選項，命令列參數傳遞給科爾多瓦和頂級的"科爾多瓦"物件:

```json
{
  "hook": "before_plugin_install",
  "scriptLocation": "c:\\script\\full\\path\\appBeforePluginInstall.js",
  "cmdLine": "The\\exact\\command\\cordova\\run\\with arguments",
  "opts": {
    "projectRoot":"C:\\path\\to\\the\\project",
    "cordova": {
      "platforms": ["wp8"],
      "plugins": ["com.plugin.withhooks"],
      "version": "0.21.7-dev"
    },
    "plugin": {
      "id": "com.plugin.withhooks",
      "pluginInfo": {
        ...
      },
      "platform": "wp8",
      "dir": "C:\\path\\to\\the\\project\\plugins\\com.plugin.withhooks"
    }
  },
  "cordova": {...}
}

```

`coNtext.opts.plugin`物件僅將傳遞到外掛程式鉤子腳本。

您還可以通過以下方式使用`coNtext.requireCordovaModule`腳本中要求科爾多瓦的附加模組:

```javascript
var Q = context.requireCordovaModule('q');
```

**注意**: 新模組載入程式指令碼介面用於定義通過`config.xml`或`plugin.xml`只的`.js`檔。 出於相容性原因鉤檔指定通過`/hooks`資料夾運行通過節點 child_process 菌種，見 ' 非 javascript 一節。

### 非 javascript

**注意**: 我們強烈推薦寫你鉤使用 Node.js，所以，他們都是跨平臺的見上面的 'JAVAscript 一節。

非 javascript 腳本從專案的根目錄中通過節點 child_process 菌種運行，並且都經過目錄根作為第一個參數。 所有其他選項都傳遞到腳本使用環境變數:

  * CORDOVA_VERSION-科爾多瓦 CLI 的版本。
  * CORDOVA_PLATFORMS-的逗號分隔清單命令適用于的平臺 (例如: android、 ios)。
  * CORDOVA_PLUGINS-以逗號分隔的清單中的外掛程式 Id 命令適用于 (如: org.apache.cordova.file、 org.apache.cordova.file 轉讓)
  * CORDOVA_HOOK-的掛鉤上正在執行的路徑。
  * CORDOVA_CMDLINE-傳遞到科爾多瓦的確切的命令列參數 (例如: 科爾多瓦運行 ios — — 模仿)

如果一個腳本返回一個非零結束代碼，然後將中止父科爾多瓦命令。

此外請注意，即使您正在在 Windows 上，以防你鉤腳本並不是蝙蝠檔 (這建議，如果你想要你上班非 Windows 作業系統中的腳本) 科爾多瓦 CLI 將期望一切線作為第一行才知道翻譯它需要使用啟動腳本。 一切行應匹配下面的示例:

    #!/usr/bin/env [name_of_interpreter_executable]
    

## 示例用法

此示例演示科爾多瓦鉤用法跟蹤到主控台輸出為 Android 平臺生成的.apk 檔的大小。

創建空白科爾多瓦 app 並向`config.xml`來告訴科爾多瓦在每個平臺生成後運行`afterBuild.js`腳本添加下面的定義。

    <hook type="after_build" src="scripts/afterBuild.js" />
    

創建`scripts/afterBuild.js`檔並添加下面的實現。 我們使用`fs.stat`方法的非同步版本來演示如何非同步功能可以通過掛鉤。

    module.exports = function(ctx) {
        // make sure android platform is part of build 
        if (ctx.opts.platforms.indexOf('android') < 0) {
            return;
        }
        var fs = ctx.requireCordovaModule('fs'),
            path = ctx.requireCordovaModule('path'),
            deferral = ctx.requireCordovaModule('q').defer();
    
        var platformRoot = path.join(ctx.opts.projectRoot, 'platforms/android');
        var apkFileLocation = path.join(platformRoot, 'build/outputs/apk/android-debug.apk');
    
        fs.stat(apkFileLocation, function(err,stats) {
            if (err) {
                 deferral.reject('Operation failed');
            } else {
                console.log('Size of ' + apkFileLocation + ' is ' + stats.size +' bytes');
                deferral.resolve();
            }
        });
    
        return deferral.promise;
    };
    

參數`環磷醯胺`在上面例子中通過科爾多瓦和表示腳本的完整路徑、 目標平臺、 命令列參數等的執行上下文，也暴露出額外的協助工具。 有關更多詳細資訊請參見`指令碼介面`節以上。

現在可以添加 android 平臺，並執行生成。

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
    

可以在這裡找到更多好的用法示例:

<http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>
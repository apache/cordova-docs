# Apache 科爾多瓦 API 文檔

[Apache 科爾多瓦](http://cordova.io/)JavaScript API 文檔.

該文檔是發售[docs.cordova.io](http://docs.cordova.io/).

## 文檔格式

所有[Apache 科爾多瓦](http://cordova.io/)文檔編寫時[降價](http://daringfireball.net/projects/markdown/syntax)，可以到 HTML 排版的羽量級標記語言。 降價提供了一種簡單而靈活的方式來記錄科爾多瓦的核心 API 和特定于平臺的 Api。

## 檔結構

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/cordova/
    docs/LANGUAGE/VERSION/guide/platforms/PLATFORMNAME/


## 檔作出貢獻

### 報告或解決問題

我們使用[Apache JIRA](https://issues.apache.org/jira/browse/CB)

順便說一句，你搖滾!感謝您説明我們改進文檔!

### 使用 Git

你是新到 Git 或在 GitHub 上作出貢獻?

我們要[寫幾個 Git 教程](http://wiki.apache.org/cordova/ContributorWorkflow)説明您開始使用檔作出貢獻。

### 發送的請求

請求，歡迎!

我們欣賞主題設立分支機搆。

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master


### 添加一種語言

你想要另一種語言中的 Apache 科爾多瓦文檔嗎? 我們也做了! [Crowdin](http://crowdin.net/project/cordova)、 翻譯和當地語系化管理平臺的支援下，譯者可以登錄到使用方便模具並提供作為多或少的翻譯協助，會像他們。 如果你知道請支援科爾多瓦和作出貢獻的另一種語言。 http://crowdin.net/project/cordova. 使用 Crowdin 工具的一些最佳做法，請參閱我們的 wiki HTTP://wiki.apache.org/cordova/CordovaTranslations。

科爾多瓦語言管理員，別忘了這些步驟:

**1.config.json**

對於每種語言和版本，還有`config.json`所定義的語言以及如何合併的檔的名稱。

**2.自訂 HTML 範本**

每一種語言可以重寫預設範本在`templates/docs/LANGUAGE`.

### 編輯指南

請參閱準則`STYLEGUIDE.md`檔的語言和使用方式。

## 生成文檔與 Node.js

現在，文檔可以使用 Node.js，Windows，或 Linux 機器上運行。

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en dev    # compile English Dev docs
    $ ./bin/genjs ru dev    # compile Russian Dev docs
    $ ./bin/genjs es 3.5.0  # compile Spanish 3.5.0 docs


### 設置 Node.js

  1. 去 Node.JS[下載頁](http://nodejs.org/download/)
  2. 下載並安裝包為您的作業系統。
  3. 簽出此存儲庫使用 Git

        git clone https://github.com/apache/cordova-docs


  4. 安裝的依賴關係。在運行的克隆的科爾多瓦 docs 資料夾的根目錄

        npm install


  5. 現在，您能夠構建本地文檔。

### 快速預覽

小編輯時，它通常是安全，使 HTML 簡單地編輯從降價。 很多代碼編輯器外掛程式要呈現為 HTML 的降價和有極少數的[好](http://dillinger.io/)線上編輯。

目前，Node.JS 腳本和[joDoc js](https://github.com/kant2002/jodoc-js)用於生成的 HTML 文檔。

## 生成版本

還有 Rake 任務，將版本遞增，生成版本目錄中，並更新邊緣文檔。

    # generate version 4.1.0 for english.
    .\bin\incrementversion en 4.1.0

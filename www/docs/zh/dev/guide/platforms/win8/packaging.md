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

title: Windows 包裝
---

# Windows 包裝

你可以瞭解更多關於簽署和包裝在[MSDN](https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx)上的應用 Windows 商店應用程式.

為了能夠正確打包和簽名 Windows 應用程式有是所需的幾件事:

  * 簽章憑證
  * 身份細節匹配提供的簽章憑證

在 Windows 專案標識的詳細資訊保存在名為 package.appxmanifest 的檔。此檔是自動填滿每次科爾多瓦應用程式的構建。身份保留 3 重要欄位。

  * Name
  * Publisher
  * Version

可以從**config.xml**設置*NAme*和*Version*。*Publisher*可以作為生成的參數提供，或可以在**build.json**檔上設置。

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

從任一 CLI 或通過 build.json 檔，可以提供簽名的證書。證書相關 CLI 的標誌是:

  * `--packageCertificateKeyFile` : 一旦創建了簽章憑證包，可以使用此參數，將該證書與應用程式相關聯。此標誌將檔路徑作為參數。 如。 `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
  * `--packageThumbprint` : 包指紋用於驗證封裝證書金鑰檔的真實性。 創建證書金鑰檔時，將向最終使用者提供此值。 如。 `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

或者，這些值可以使用指定組建組態檔 (build.json) 使用 CLI (-buildConfig)。一個示例組建組態檔:

    {
        "windows": {
            "debug": {
                "packageCertificateKeyFile": "platforms\\windows\\CordovaApp_TemporaryKey.pfx"
            },
            "release": {
                "packageCertificateKeyFile": "c:\\path-to-key\\keycert.pfx",
                "packageThumbprint": "ABCABCABCABC123123123123",
                "publisherId": "CN=FakeCorp.com, L=Redmond, S=Washington, C=US"
            }
        }
    }
    

此外，它還支援以混合和匹配的命令列參數和 build.json 檔中的參數。從命令列參數的值將會得到優先。

# 如何創建證書金鑰和標誌科爾多瓦 windows 應用程式

需要分發和安裝 Windows 應用商店應用程式簽名的。 當你部署套裝程式版本，這一過程將由 Visual Studio 通常進行處理。 我們要做 tmhis 沒有 Visual Studio 創建我們自己的證書。

用於創建證書，我們需要使用[makecert.exe](https://msdn.microsoft.com/en-us/library/ff548309(v=vs.85).aspx)公用程式 此工具附帶 Windows SDK，可以發現下`%ProgramFiles(x86) %\Windows Kits\8.1\bin\x64`或`%ProgramFiles(x86) %\Windows Kits\8.1\bin\x86`.

我們需要做的第一件事是創建為簽署我們的應用程式的根鍵。

`makecert.exe -n "CN=FakeCorp.com" -r -eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" -e "01/01/2020" –h 0 -sv FakeCorp.com.pvk FakeCorp.com.cer`

要理解什麼金鑰做，這裡是參數做了簡要說明:

  * -n"CN=FakeCorp.com": 這是[X.509](http://en.wikipedia.org/wiki/X.509)證書主題名稱。在這個例子中它是**C**處理逐漸顯露出來**N**ame=FakeCorp.com。
  * -r: 創建[自簽章憑證](http://en.wikipedia.org/wiki/Self-signed_certificate).
  * -eku #EKU_VAL #: 逗號分隔的增強型金鑰用法 Oid。 
      * 1.3.6.1.5.5.7.3.3 表示該證書是有效的代碼簽名。始終指定此值以限制證書的用途。
      * 1.3.6.1.4.1.311.10.3.13 指示證書尊重一生簽署。 通常情況下，如果簽名是時間戳記，只要證書是在點有效時間戳記的時候，該簽名仍然有效即使在證書過期。 這 EKU 部隊要過期而不管簽名是否加蓋時間戳記的簽名。
  * -e"2020/1/1": 設置證書的過期日期。 
  * -h 0: 將此證書下面的樹的最大高度設置為 0，以防止證書被用於作為憑證授權單位 (CA) 可以頒發其他證書。
  * -sv FakeCorp.com.pvk: 輸出 PVK 檔。Windows 使用 PVK 檔來存儲用於代碼簽名的私密金鑰。
  * FakeCorp.com.cer: 輸出證書檔。CER 檔用於存儲 X.509 憑證。

在第一次運行金鑰之後, 在螢幕上就會彈出輸入私人密碼:

![]({{ site.baseurl }}/static/img/guide/platforms/win8/createprivatekeywindow.png)

一旦創建了 pvk 和 cer 檔，我們需要從這些證書創建一個 pfx 檔。 Pfx (個人交換格式) 檔包含各種加密資訊，如證書、 根憑證授權單位，憑證連結和私密金鑰。 進行包裝證書，我們將使用一種工具叫[pvk2pfx](https://msdn.microsoft.com/en-us/library/ff550672(v=vs.85).aspx)。 此工具附帶 Windows SDK，可以發現下 `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` 或`%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

`pvk2pfx -pvk FakeCorp.com.pvk -pi pvkPassword -spc FakeCorp.com.cer -pfx FakeCorp.com.pfx -po pfxPassword`

地點:

  * pvk: 輸入 pvk 檔案名稱
  * pi: pvk 密碼
  * spc: 輸入證書檔案名
  * pfx: 輸出 pfx 檔案名稱
  * 大埔: pfx 密碼;pvk 密碼如果不提供相同

如果我們提供此 pfx 檔到 build.json 檔中，我們將會有以下錯誤:"金鑰檔可能受密碼保護。 要更正此問題，請嘗試手動導入證書到當前使用者的個人憑證存儲區。"。 為了將其導入我們必須使用[certutil](https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx)從 admin 提示符:

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

地點:

  * user: 指定"當前使用者"個人存儲區
  * p: pfx 檔密碼
  * importPfx: pfx 檔的名稱

一旦安裝完畢下, 一步是將 packageThumbprint 和 packageCertificateKeyFile 添加到 build.json。 為了找到 packageThumbprint，搜索的公開我們已經與證書關聯:

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

一旦這些最後的值提供。科爾多瓦應該成功打包和簽名應用程式。

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

title: Windows パッケージ
---

# Windows パッケージ

署名および[MSDN](https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx)の Windows ストア アプリのパッケージについての詳細を学ぶことができます。.

正しくパッケージ化して Windows に署名できるようにするには、アプリはいくつ必要です。

  * 署名証明書
  * 指定された署名証明書に一致する識別情報の詳細

Windows プロジェクトの id の詳細は package.appxmanifest ファイルで保持されます。Cordova アプリをビルドするたびに、このファイルが自動的に設定されます。Identity は、3 つの重要なフィールドを保持しています。

  * Name
  * Publisher
  * Version

*NAme*と*Version*は、 **config.xml**から設定できます。*Publisher*は、構築パラメーターとして指定することができます。 または**build.json**ファイルに設定することができます。

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

いずれかの CLI から、または build.json ファイル、署名証明書を指定できます。証明書は、CLI のフラグ関連。

  * `--packageCertificateKeyFile` : パッケージの署名証明書を作成すると、このパラメーターを使用してアプリケーションに証明書を関連付けることができます。このフラグは、ファイルのパスを引数として受け取ります。 例えば。 `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
  * `--packageThumbprint` : パッケージ拇印を使用してパッケージ証明書キー ファイルの信頼性を検証します。 証明書キー ファイルを作成すると、この値は、エンド ・ ユーザーに提供されます。 例えば。 `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

CLI を使用してビルド構成ファイル (build.json) を使用してこれらの値を指定ことができますまた、(-buildConfig)。サンプルのビルド構成ファイル:

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
    

サポートをミックスし、コマンド ・ ライン引数および build.json ファイルのパラメーターと一致しています。コマンドライン引数から値は優先順位を取得します。

# 証明書にキーと署名コルドバ windows アプリを作成する方法

署名が配布して Windows ストア アプリをインストールする必要です。 このプロセスは、リリースのパッケージを展開するとき通常 Visual Studio によって処理されます。 私たちは私たち自身の証明書を作成する必要があります Visual Studio せず tmhis を行う。

証明書を作成するため我々 は util。 [makecert.exe](https://msdn.microsoft.com/en-us/library/ff548309(v=vs.85).aspx)を使用する必要があります。 このツールは、Windows SDK に付属し、 `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x64`または`%ProgramFiles(x86) %\Windows Kits\8.1\bin\x86`の下で見つけることができます。.

我々 が行う必要がある最初の事は、我々 のアプリに署名するためのルート キーを作成します。

`makecert.exe -n "CN=FakeCorp.com" -r -eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" -e "01/01/2020" –h 0 -sv FakeCorp.com.pvk FakeCorp.com.cer`

何の makecert は理解して、何をパラメーターの簡単な説明をここでは。

  * -n"CN=FakeCorp.com": これは、 [X.509](http://en.wikipedia.org/wiki/X.509)証明書の件名。この例では**C**ommon**N**ame=FakeCorp.com です。
  * -r:[自己署名証明書](http://en.wikipedia.org/wiki/Self-signed_certificate)を作成します.
  * -eku #EKU_VAL #: カンマで区切られた拡張キー使用法の Oid。 
      * 1.3.6.1.5.5.7.3.3 は、証明書がコードの署名用に有効であることを示します。常に証明書の使用目的を制限するこの値を指定します。
      * 1.3.6.1.4.1.311.10.3.13 は、証明書が有効期間の署名を尊重することを示します。 通常、証明書いた時点で有効なスタンプの時間だったとき、タイムスタンプを署名が場合、署名証明書の有効期限が切れた場合でも有効なままです。 この EKU は、署名がスタンプの時間かどうかにかかわらず期限切れに署名を強制します。
  * -e「2020/01/01」: 証明書の有効期限を設定します。 
  * -h 0: この証明書の下のツリーの最大の高さを証明書が他の証明書を発行できる証明機関 (CA) として使用されているを防ぐために 0 に設定します。
  * -sv FakeCorp.com.pvk: 出力 PVK ファイル。Windows では、コード署名の秘密キーを格納する PVK ファイルを使用します。
  * FakeCorp.com.cer: 出力証明書ファイル。CER ファイルを使用して、X.509 証明書を格納します。

初めての makecert を実行した後ポップアップ画面で専用パスワードを入力します。

![]({{ site.baseurl }}/static/img/guide/platforms/win8/createprivatekeywindow.png)

Pvk と cer ファイルが作成されると、これらの証明書から pfx ファイルを作成私たち必要があります。 Pfx (個人的な交換形式) ファイルには、各種証明書、ルート証明機関証明書、証明書チェーンおよび秘密キーなどの暗号化に関する情報が含まれています。 証明書をパッケージするには使用、ツールは、 [pvk2pfx](https://msdn.microsoft.com/en-us/library/ff550672(v=vs.85).aspx)を呼ばれます。 このツールは、Windows SDK に付属しの下で見つけることができます `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` または`%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

`pvk2pfx -pvk FakeCorp.com.pvk -pi pvkPassword -spc FakeCorp.com.cer -pfx FakeCorp.com.pfx -po pfxPassword`

場所:

  * pvk: 入力 pvk ファイル名
  * pi: pvk パスワード
  * spc: 入力証明書ファイル名
  * pfx: 出力 pfx ファイル名
  * po: pfx パスワード;pvk パスワードを指定しない場合と同じ

この pfx ファイルを build.json ファイルを提供する、もし私たちは次のエラーを持つでしょう:"キー ファイルはパスワードで保護することがあります。 この問題を解決する現在のユーザーの個人用証明書ストアに証明書を手動でインポートしよう。」。 それをインポートするために、私達は管理者プロンプトで[certutil](https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx)を使用しなければなりません。

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

場所:

  * user:「現在のユーザー」を指定します個人ストア
  * p: pfx ファイルのパスワード
  * importPfx: pfx ファイルの名前

一度インストールすれば、次のステップは、packageThumbprint と packageCertificateKeyFile を build.json に追加するのには。 PackageThumbprint を見つけるために、我々 は証明書に関連付けられている共通の検索します。

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

一度これらの最終的な値が提供されます。コルドバ正常にパッケージ化し、アプリケーションに署名します。

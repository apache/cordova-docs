---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# VMWare Fusion の構成

このセクションはコルドバを使用して Windows Phone アプリケーションを生成することができますように、Mac を VMWare Fusion を構成する方法を示します。

[マイクロソフトの開発者ネットワーク][1]は VMWare 融解の下の Windows を実行する方法の一般的な説明を提供します。 Windows をインストールした後次の手順を実行します。

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  VMWare Fusion 内、Windows 8 ディスク イメージを選択する用意しており、**設定**を選択します.

2.  **プロセッサとメモリ**の構成オプションを選択します。 *2 つ*のプロセッサ コアを指定することを確認し、**この仮想マシンでハイパーバイザー アプリケーションを有効に**します。

    ![][2]

    Windows Phone エミュレーターだけで全体的な VMWare の少なくとも 2 GB を予約するメモリの 1 ギガバイトを使用します。

3.  **高度な**設定を選択します。有効にすると、**優先仮想化エンジン: EPT で Intel VT-x**オプション。

    ![][3]

4.  *.Vmx*ファイルを追加または変更、次の設定を変更します。

        hypervisor.cpuid.v0 = "FALSE"
        mce.enable = "TRUE"
        vhv.enable = "TRUE"


 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_advanced_opts.png

これらの手順が完了すると、Windows Phone SDK をインストールする準備ができているし。詳細については、「Windows Phone 8 プラットフォーム ガイドを参照してください。

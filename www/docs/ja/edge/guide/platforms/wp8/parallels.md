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

# 平行線デスクトップを構成します。

このセクションはコルドバを使用して Windows Phone アプリケーションを生成することができますように、Mac を平行線デスクトップを構成する方法を示します。

[マイクロソフトの開発者ネットワーク][1]は平行線デスクトップの下の Windows を実行する方法の一般的な説明を提供します。 Windows をインストールした後次の手順を実行します。

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  平行線デスクトップの準備が Windows 8 のディスク イメージを選択し、**設定**を選択します.

2.  **一般的な → Cpu**オプションを選択します。*2 つ*の Cpu を指定します。推奨条件の範囲外になる場合でも少なくとも 2 GB のメモリを指定します。

    ![][2]

3.  Windows 8 の仮想マシン内でデバイス エミュレーター イメージを実行できる**最適化**オプションを選択し、**入れ子に仮想化**を有効にします。.

    ![][3]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_optimize_opts.png

これらの手順が完了すると、Windows Phone SDK をインストールする準備が整いました。詳細については、「Windows Phone 8 プラットフォーム ガイドを参照してください。

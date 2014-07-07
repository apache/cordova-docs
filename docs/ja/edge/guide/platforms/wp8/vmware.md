* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. 著作権所有権に関する追加情報のためのこの仕事と分散 NOTICE ファイルを参照してください。 ASF は、Version 2.0 (「ライセンス」）; Apache ライセンスの下であなたにこのファイルをライセンスします。ライセンスに従う場合、このファイルを使用可能性があります。 ライセンスのコピーを入手した可能性があります。

           http://www.apache.org/licenses/LICENSE-2.0 ソフトウェア ライセンスの下で配布で配布されて適用される法律によって必要なまたは書面で合意した、しない限り、「そのまま」なし保証またはいかなる種類の保証、明示または黙示を問わず、基礎。  アクセス許可と制限を支配する特定の言語用のライセンスを参照してください。
    

## ライセンス。

# VMWare Fusion の構成

このセクションはコルドバを使用して Windows Phone アプリケーションを生成することができますように、Mac を VMWare Fusion を構成する方法を示します。

[マイクロソフトの開発者ネットワーク][1]は VMWare 融解の下の Windows を実行する方法の一般的な説明を提供します。 Windows をインストールした後次の手順を実行します。

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  VMWare Fusion 内、Windows 8 ディスク イメージを選択する用意しており、**設定**を選択します.

2.  **プロセッサとメモリ**の構成オプションを選択します。 *2 つ*のプロセッサ コアを指定することを確認し、**この仮想マシンでハイパーバイザー アプリケーションを有効に**します。
    
    ![][2]
    
    Windows Phone エミュレーターだけで VMWare の少なくとも 2 GB を予約する必要がありますので、全体的なメモリの半分の 1 メガバイトを使用します。

3.  **高度な**設定を選択します。有効にすると、**優先仮想化エンジン: EPT で Intel VT-x**オプション。
    
    ![][3]

4.  *.Vmx*ファイルを追加または変更、次の設定を変更します。
    
        hypervisor.cpuid.v0 ="FALSE"mce.enable ="TRUE"vhv.enable ="TRUE"
        

 [2]: img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: img/guide/platforms/wp8/vmware_advanced_opts.png

これらの手順が完了すると、Windows Phone SDK をインストールする準備ができているし。詳細については、Windows Phone プラットフォーム ガイドを参照してください。
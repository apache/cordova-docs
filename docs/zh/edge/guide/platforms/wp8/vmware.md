* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. 請參閱分散式與此工作為版權的擁有權有關的其他資訊的通知檔。 ASF 許可證，此檔到你根據 Apache 許可證，2.0 版 （"許可證"） ；您不可能使用此檔除了符合許可證。 您可能會獲得在許可證的副本

           HTTP://www.apache.org/licenses/LICENSE-2.0 除非適用的法律要求或書面同意，否則按照該許可證分發的軟體分發上"按原樣"的基礎，而不擔保或條件的任何種類的明示或暗示。  請參閱許可證規定的許可權和限制的特定語言
    

## 根據許可證。

# 配置 VMWare 融合

這一節演示如何配置 VMWare 融合在 Mac 上，以便您可以使用科爾多瓦生成 Windows Phone 應用程式。

[Microsoft 開發人員網路][1]提供有關如何運行 Windows 下 VMWare 融合的一般說明。 之後安裝 Windows，請執行以下步驟：

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  在 VMWare 融合內, 選擇您已編寫並選擇**設置**的 Windows 8 磁片映射.

2.  選擇的**處理器和記憶體**的配置選項。 請確保指定*兩個*處理器內核，並**啟用在此虛擬機器的虛擬機器管理程式應用程式**：
    
    ![][2]
    
    Windows Phone 模擬程式單獨使用半一百萬位元組的記憶體，所以整體你應該針對 VMWare 預留至少 2 GB。

3.  選擇**高級**設置。啟用**首選虛擬化引擎： 英特爾 VT-x 與 EPT**選項：
    
    ![][3]

4.  修改*.vmx*檔，添加或修改以下設置：
    
        hypervisor.cpuid.v0 ="FALSE"mce.enable ="TRUE"vhv.enable ="TRUE"
        

 [2]: img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: img/guide/platforms/wp8/vmware_advanced_opts.png

一旦你完成這些步驟，你準備然後安裝 Windows Phone SDK。請參閱 Windows Phone 平臺指南的詳細資訊。
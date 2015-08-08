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

# 配置 VMWare 融合

這一節演示如何配置 VMWare 融合在 Mac 上，以便您可以使用科爾多瓦生成 Windows Phone 應用程式。

[Microsoft 開發人員網路][1]提供有關如何運行 Windows 下 VMWare 融合的一般說明。 之後安裝 Windows，請執行以下步驟：

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  在 VMWare 融合內, 選擇您已編寫並選擇**設置**的 Windows 8 磁片映射.

2.  選擇的**處理器和記憶體**的配置選項。 請確保指定*兩個*處理器內核，並**啟用在此虛擬機器的虛擬機器管理程式應用程式**：

    ![][2]

    Windows Phone 模擬器單獨使用半位元組的記憶體，所以，總體來說，你應該為 VMWare 預留至少 2 GB。

3.  選擇**高級**設置。啟用**首選虛擬化引擎： 英特爾 VT-x 與 EPT**選項：

    ![][3]

4.  修改*.vmx*檔，添加或修改以下設置：

        hypervisor.cpuid.v0 ="FALSE"mce.enable ="TRUE"vhv.enable ="TRUE"


 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_advanced_opts.png

一旦你完成這些步驟，你準備然後安裝 Windows Phone SDK。請參閱 Windows Phone 8 平臺指南的詳細資訊。

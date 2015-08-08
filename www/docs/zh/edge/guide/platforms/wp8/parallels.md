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

# 配置 512mb

這一節演示如何在 Mac 上配置的相似之處桌面，以便您可以使用科爾多瓦生成 Windows Phone 應用程式。

[Microsoft 開發人員網路][1]提供有關如何運行 Windows 的相似之處的桌面下的一般說明。 之後安裝 Windows，請執行以下步驟：

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  在桌面的相似之處內, 選擇您已經準備好的 Windows 8 磁片映射並選擇**設置**.

2.  選擇的**一般 → Cpu**選項。指定*兩個*Cpu。指定至少 2 GB 的記憶體，即使它不屬於建議的範圍：

    ![][2]

3.  要能運行 Windows 8 虛擬機器中的設備模擬程式圖像，選擇**優化**選項並啟用**嵌套的虛擬化**.

    ![][3]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_optimize_opts.png

一旦你完成這些步驟，你是準備好安裝 Windows Phone SDK。請參閱 Windows Phone 8 平臺指南的詳細資訊。

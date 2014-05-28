— — 许可证： 下一个或多个参与者许可协议许可向阿帕奇软件基金会 (ASF)。 See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 配置 512mb

这一节演示如何在 Mac 上配置的相似之处桌面，以便您可以使用科尔多瓦生成 Windows Phone 应用程序。

[Microsoft 开发人员网络][1]提供有关如何运行 Windows 的相似之处的桌面下的一般说明。 之后安装 Windows，请执行以下步骤：

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  在桌面的相似之处内, 选择您已经准备好的 Windows 8 磁盘映像并选择**设置**.

2.  选择的**一般 → Cpu**选项。指定*两个*Cpu。指定至少 2 GB 的内存，即使它不属于建议的范围：
    
    ![][2]

3.  要能运行 Windows 8 虚拟机中的设备仿真程序图像，选择**优化**选项并启用**嵌套的虚拟化**.
    
    ![][3]

 [2]: img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: img/guide/platforms/wp8/parallel_optimize_opts.png

一旦你完成这些步骤，您就可以安装 Windows Phone SDK。请参阅 Windows Phone 平台指南的详细信息。
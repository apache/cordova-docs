— — 许可证： 下一个或多个参与者许可协议许可向阿帕奇软件基金会 (ASF)。 请参阅分布式与此工作为版权的所有权有关的其他信息的通知文件。 ASF 许可证，此文件到你根据 Apache 许可证，2.0 版 （"许可证"） ；您不可能使用此文件除了符合许可证。 您可能会获得在许可证的副本

           http://www.apache.org/licenses/LICENSE-2.0 除非适用的法律要求或书面同意，否则按照该许可证分发的软件分发上"按原样"的基础，而不担保或条件的任何种类的明示或暗示。  请参阅许可证规定的权限和限制的特定语言
    

## 根据许可证。

# 配置 VMWare 融合

这一节演示如何配置 VMWare 融合在 Mac 上，以便您可以使用科尔多瓦生成 Windows Phone 应用程序。

[Microsoft 开发人员网络][1]提供有关如何运行 Windows 下 VMWare 融合的一般说明。 之后安装 Windows，请执行以下步骤：

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  在 VMWare 融合内, 选择您已编写并选择**设置**的 Windows 8 磁盘映像.

2.  选择的**处理器和内存**的配置选项。 请确保指定*两个*处理器内核，并**启用在此虚拟机的虚拟机管理程序应用程序**：
    
    ![][2]
    
    Windows Phone 仿真程序单独使用半一兆字节的内存，所以整体你应该针对 VMWare 预留至少 2 GB。

3.  选择**高级**设置。启用**首选虚拟化引擎： 英特尔 VT-x 与 EPT**选项：
    
    ![][3]

4.  修改*.vmx*文件，添加或修改以下设置：
    
        hypervisor.cpuid.v0 ="FALSE"mce.enable ="TRUE"vhv.enable ="TRUE"
        

 [2]: img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: img/guide/platforms/wp8/vmware_advanced_opts.png

一旦你完成这些步骤，你准备然后安装 Windows Phone SDK。请参阅 Windows Phone 平台指南的详细信息。
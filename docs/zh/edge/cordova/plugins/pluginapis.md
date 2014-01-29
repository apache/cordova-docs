---

许可证： 在下一个或更多的贡献许可协议 授权给Apache软件基金会（ASF）。 请参阅文件分布与这项工作有关的著作权归属的附加信息的通知文件。 ASF的许可证文件到你的Apache许可证下，版本2.0（"License"）；你不可能使用此文件，除了符合许可证之外。 您可能会获得在许可证的副本

           http://www.apache.org/licenses/LICENSE-2.0 
    除非适用的法律要求或书面同意，否则按照该许可证分发的软件分发上"AS IS"的基础，WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, 明示或暗示。  请参阅许可证规定的权限和限制的特定语言
    

## 根据许可证。

# 插件的 APIs

Cordova全员最小的一组APIs，和项目添加额外的APIs，它们需要通过插件。

您可以通过使用 [Plugin Registry][1] 的所有现有的插件来搜索。.

 [1]: http://plugins.cordova.io/

传统的Cordova插件集如下所示：

*   [电池状态][2]
    
    > 监视设备的电池的状态。

*   [相机][3]
    
    > 捕获照片使用的设备的相机。

*   [联系人][4]
    
    > 与设备联系人数据库的工作。

*   [设备][5]
    
    > 收集设备特定信息。

*   [设备运动 (加速度计)][6]
    
    > 进入设备的运动传感器。

*   [设备定位 (指南针)][7]
    
    > 获取该设备的指向的方向。

*   [会话][8]
    
    > 视觉设备通知。

*   [文件系统][9]
    
    > 通过 JavaScript挂接到本机文件系统。

*   [文件传输][10]
    
    > 通过 JavaScript挂接到本机文件系统。

*   [地理定位][11]
    
    > 意识到您的应用程序的本地位置。

*   [全球化][12]
    
    > 启用特定于区域设置的对象表示的形式。

*   [InAppBrowser][13]
    
    > 启动另一个应用程序中的浏览器实例的 Url。

*   [媒体][14]
    
    > 录制和播放音频文件。

*   [媒体捕获][15]
    
    > 使用设备的媒体捕获应用程序来捕获媒体文件。

*   [网络信息 (连接)][16]
    
    > 快速检查网络状态和蜂窝网络的信息。

*   [闪屏][17]
    
    > 显示和隐藏应用程序的初始屏幕。

*   [振动][18]
    
    > 振动设备的 API。

 [2]: https://github.com/apache/cordova-plugin-battery-status/blob/dev/doc/index.md
 [3]: https://github.com/apache/cordova-plugin-camera/blob/dev/doc/index.md
 [4]: https://github.com/apache/cordova-plugin-contacts/blob/dev/doc/index.md
 [5]: https://github.com/apache/cordova-plugin-device/blob/dev/doc/index.md
 [6]: https://github.com/apache/cordova-plugin-device-motion/blob/dev/doc/index.md
 [7]: https://github.com/apache/cordova-plugin-device-orientation/blob/dev/doc/index.md
 [8]: https://github.com/apache/cordova-plugin-dialogs/blob/dev/doc/index.md
 [9]: https://github.com/apache/cordova-plugin-file/blob/dev/doc/index.md
 [10]: https://github.com/apache/cordova-plugin-file-transfer/blob/dev/doc/index.md
 [11]: https://github.com/apache/cordova-plugin-geolocation/blob/dev/doc/index.md
 [12]: https://github.com/apache/cordova-plugin-globalization/blob/dev/doc/index.md
 [13]: https://github.com/apache/cordova-plugin-inappbrowser/blob/dev/doc/index.md
 [14]: https://github.com/apache/cordova-plugin-media/blob/dev/doc/index.md
 [15]: https://github.com/apache/cordova-plugin-media-capture/blob/dev/doc/index.md
 [16]: https://github.com/apache/cordova-plugin-network-information/blob/dev/doc/index.md
 [17]: https://github.com/apache/cordova-plugin-splashscreen/blob/dev/doc/index.md
 [18]: https://github.com/apache/cordova-plugin-vibration/blob/dev/doc/index.md

为这些插件文档的非英语翻译可以在Cordova文档的旧版本找到。使用顶部右上角的这个站点的下拉式菜单来切换版本。
---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. 请参阅分布式与此工作为版权的所有权有关的其他信息的通知文件。 ASF 许可证，此文件到你根据 Apache 许可证，2.0 版 （"许可证"） ；您不可能使用此文件除了符合许可证。 You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 图标和启动画面

这一节演示如何配置应用程序的图标和可选初始屏幕上的各种平台上，两者在科尔多瓦 CLI （描述在命令行界面） 中工作时或使用特定于平台 SDK 工具 （平台指南中详细说明）。

## 在 CLI 中配置图标

工作时在 CLI 中，图标源文件位于内各种平台特定子目录内项目的 `www/res/icons` 目录。 新创建的项目来与一组默认的科尔多瓦图标为您替换为您希望为目标的平台。

Android 系统指定的低、 中、 高、 特高的各项决议的图标：

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

IOS 平台指定 72 像素正方形图标为 Ipad，并为 Iphone 和 Ipod，带有高分辨率*2 x*变形为视网膜的 57 像素图标显示：

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone 指定默认 48 像素的图标，以及各种设备背景平铺在代表应用程序时使用的图像：

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

黑莓 10 需要一个在 config.xml 中的图标元素：

        <icon src="blackberry10/icon-86.png" />
    

为多个大小和区域设置，请参阅BlackBerry的文档。

http://developer.blackberry.com/html5/documentation/icon_element.html

Tizen 需要 128 像素的图标：

        tizen/icon-128.png
    

## 在 CLI 中配置初始屏幕

使用闪屏 API 来启用应用程序的介绍性闪屏在许多平台上的显示。 在 CLI 中工作时，初始屏幕源代码文件被放置在项目的 `www/res/screens` 子目录中。

Android 系统为低、 中、 高、 特高的各项决议 指定横屏和竖屏这两种闪屏图像：

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

IOS 平台指定变形为 iPhone 和/iPod 和 iPad，具有变形为视网膜显示和不同的方向。*568h* 文件适用于 iPhone 5 的高屏幕：

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone 指定单个初始屏幕图像：

        windows-phone/screen-portrait.jpg
    

以下各节详细说明了如何设置初始屏幕时使用 Sdk 和相关的命令行工具在平台指南中介绍。

别忘了在尝试使用 `navigator.splashscreen.hide()` 或 `navigator.splashscreen.show()` 方法之前安装的闪屏插件。

## Android 平台的初始屏幕

在 Android 项目`platforms/android/res/drawable*` 目录中放置[9-patch image][1] 文件。

 [1]: https://developer.android.com/tools/help/draw9patch.html

为每个大小应为：

*   xlarge (xhdpi)： 至少 960 × 720
*   large (hdpi): 至少 640 × 480
*   medium (mdpi): 至少 470 × 320
*   small (ldpi): 至少 426 × 320

如果您想要在Cordova中去使用提供的默认初始屏幕图像，您将要从 `platforms/android/www/res/screen/android` to `platforms/android/res/drawable*/`中去拷贝 png 文件：

    cd platforms/android/res
    mkdir drawable-port-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-portrait.png drawable-port-ldpi/screen.png
    mkdir drawable-land-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-landscape.png drawable-land-ldpi/screen.png
    mkdir drawable-port-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-portrait.png drawable-port-mdpi/screen.png
    mkdir drawable-land-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-landscape.png drawable-land-mdpi/screen.png
    mkdir drawable-port-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-portrait.png drawable-port-hdpi/screen.png
    mkdir drawable-land-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-landscape.png drawable-land-hdpi/screen.png
    mkdir drawable-port-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-portrait.png drawable-port-xhdpi/screen.png
    mkdir drawable-land-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-landscape.png drawable-land-xhdpi/screen.png
    

`drawable` 目录名称必须遵循支持[screen sizes][2] and [alternate resources][3]的 Android 约定.

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

在 `config.xml`中，添加下列参数：

    <preference name="SplashScreen" value="splash" />
    <preference name="SplashScreenDelay" value="10000" />
    

第一行设置为初始屏幕显示的图像。 这是在 `drawable*`目录的 png 的文件名。 如果你命名图像 `splash.png` 之外的任何内容，您需要修改这条行。 不包括文件扩展名 (i.e., `.png`). 如果您想要使用按上面列出的提供Cordova默认初始屏幕，使用值 `screen`.

第二行设置默认延迟多久闪屏显示以毫秒为单位。这应该是最大的预期的开始时间。SplashScreenDelay 的默认值是 3000 毫秒。

最后，初始屏幕应该是唯一存在的，只要有必要。 当您的应用程序已启动并已加载 web 视图时，您的应用程序应隐藏初始屏幕，以便您的主视图是可见。 因为应用程序开始时间将由多个因素造成差别很大，所以建议您的应用程序显式地调用 `navigator.splashscreen.hide()`，在 `deviceready` 事件作出回应的 Javascript 方法中。 否则，初始屏幕为你上述配置的 SplashScreenDelay 值将是可见的。 这一事件驱动的方法是高度建议与有初始屏幕总是在固定时间可见。

## IOS 平台的初始屏幕

将初始屏幕图像复制到 iOS 项目 `Resources/splash` 目录中。 只添加那些您想要支持的设备的图像，比如 iPad 或者 iPhone 。 每个图像的大小应为：

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 像素为单位）
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## BlackBerry 10平台的初始屏幕

添加一个 rim： 为每个分辨率和您希望支持的区域设置的初始元素去 config.xml ：

[http://developer.blackberry.com/html5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html
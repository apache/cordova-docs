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

当工作在 CLI 中你可以定义应用程序图标通过 `<icon>` 元素 （ `config.xml` ）。如果你不指定一个图标然后使用 Apache 科尔多瓦徽标。

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src： （必填） 指定的图像文件，www 的目录位置

平台： （可选） 目标平台

宽度： （可选） 图标的宽度 （以像素为单位）

高度： （可选） 图标的高度 （以像素为单位）

密度： （可选） android 具体，指定图标密度

下面的配置可以用于定义单个默认图标，将用于所有平台。

        <icon src="res/icon.png" />
    

为每个平台还可以定义设置以适合不同的屏幕分辨率像素完美图标。

亚马逊火 OS

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Android 系统

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Blackberry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>
    

请参阅针对多个大小和区域设置黑莓的文档。[] http://developer.blackberry.com/html5/documentation/icon_element.html

火狐浏览器操作系统

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         <platform name="ios">
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>
    

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

Windows Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>
    

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>
    

## 在 CLI 中配置初始屏幕

使用闪屏 API 来启用应用程序的介绍性闪屏在许多平台上的显示。 工作时在 CLI 中，初始屏幕源代码文件位于项目的 `www/res/screens` 子目录。

Android 系统指定这两个面向肖像和风景闪屏图像为低、 中、 高、 特高的各项决议：

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

IOS 平台指定变形为 iPhone 和 iPod 和 iPad，具有变形为视网膜显示和不同的方向。*568 h*文件适用于 iPhone 5 的高屏幕：

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

别忘了在尝试使用之前安装的闪屏插件 `navigator.splashscreen.hide()` 或 `navigator.splashscreen.show()` 方法。

## Android 平台的初始屏幕

[9-修补程序的图像][1]文件放在 Android 项目 `platforms/android/res/drawable*` 目录。

 [1]: https://developer.android.com/tools/help/draw9patch.html

为每个大小应为：

*   xlarge (xhdpi)： 至少 960 × 720
*   large (hdpi): 至少 640 × 480
*   medium (mdpi): 至少 470 × 320
*   small (ldpi): 至少 426 × 320

创建新的 Android 项目时，默认的初始屏幕图像提供科尔多瓦示例应用程序已经应该出现在 `platforms/android/res/drawable*` 的目录。 随意替换这些与您自己的图像。 提供您自己的初始屏幕图像时, 您不需要提供 8 科尔多瓦的默认在这里同样的排列顺序。 更多或更少可以使用优化。 `drawable`目录名称必须遵循支持[的屏幕大小][2]和[备用资源][3]的 Android 约定.

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

在顶级 `config.xml` 文件 （不是中的一 `platforms` )，添加以下首选项：

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

第一行设置为初始屏幕显示的图像。 这是在 png 文件的文件名 `drawable*` 目录、 减号 `.png` 扩展名。 闪屏的默认值是 `screen` (该文件为 `platforms/android/res/drawable*/screen.png` )，所以如果你形象命名为任何名称以外 `screen.png` 在 `drawable*` 目录，您需要添加修改这条线。

第二行设置默认延迟多久闪屏显示以毫秒为单位。这应该是最坏的预期的开始时间。SplashScreenDelay 的默认值是 3000 毫秒。

最后，作为一种最佳做法，初始屏幕应该是存在只，只要有必要。 当您的应用程序已启动并已加载 web 视图时，您的应用程序应隐藏初始屏幕，以便您主视图是可见的尽快准备好。 因为应用程序开始时间将由多个 CPU 速度和网络等因素造成差别很大，所以建议您的应用程序显式地调用 `navigator.splashscreen.hide()` 在响应的 JavaScript 方法 `deviceready` 事件。 否则，初始屏幕将可见该您配置上面的 SplashScreenDelay 值，很可能超过必要的。 与具有可见的总是固定工期的初始屏幕高度建议使用此事件驱动方法。

## IOS 平台的初始屏幕

将初始屏幕图像拷贝到 iOS 项目 `Resources/splash` 目录。 只添加那些您想要支持的比如 iPad 或者 iPhone 的设备的图像。 每个图像的大小应为：

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 像素为单位）
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## BlackBerry 10平台的初始屏幕

将 rim： 初始元素添加到 config.xml 每项决议和您希望支持的区域设置：

[http://developer.blackberry.com/html5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html
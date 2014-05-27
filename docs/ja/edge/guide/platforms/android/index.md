---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android プラットフォーム ガイド

このガイドは、Android デバイスのための Cordova アプリを展開する SDK 環境を設定する方法と必要に応じて開発ワークフローでアンドロイドを中心のコマンド ライン ツールを使用する方法を示します。 You need to install the Android SDK regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For a comparison of the two development paths, see the Overview. For details on the CLI, see The Command-Line Interface.

## 要件、およびサポート

See the Android SDK's [System Requirements][1].

 [1]: http://developer.android.com/sdk/index.html

Cordova supports Android 2.2, 2.3, and 4.x. As a general rule, platforms are deprecated as they dip below 5% on Google's [distribution dashboard][2].

 [2]: http://developer.android.com/about/dashboards/index.html

## コルドバ シェル ツールをインストールします。

SDK と一緒にコルドバのアンドロイドを中心のシェル ・ ツールを使用する場合は[cordova.apache.org][3]からコルドバをダウンロードします。 コマンド ライン インターフェイスで記述されているクロス プラットフォーム CLI ツールを使用する予定がある場合それ以外の場合このセクションを無視します。

 [3]: http://cordova.apache.org

コルドバ ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 適切なアーカイブを展開してください `android` この場合、空のディレクトリ内。 関連性の高い実行ユーティリティは、トップレベルで利用可能な `bin` ディレクトリ。 (より詳細な指示が必要な場合は、 **README**ファイルを参照して)。

これらのシェルのツールを作成、構築、および Android アプリを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。 プラグインを開発する方法の詳細については、アプリケーション ・ プラグインを参照してください。

[Developer.android.com/sdk][4]から Android SDK をインストールします。 The android sdk is distributed as an 'adt-bundle-<os>-<arch>-<ver>' file. On windows, the adt-bundle is packaged with an installer. On OSX and Linux, simply unpack the 'adt-bundle' in the location you store development tools. [More detailed information on Android SDK setup can be found here][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

For Cordova command-line tools to work, or the CLI that is based upon them, you need to include the SDK's `tools` and `platform-tools` directories in your `PATH`. On a Mac, you can use a text editor to create or modify the `~/.bash_profile` file, adding a line such as the following, depending on where the SDK installs:

        エクスポート パス ${path} を =:/開発/adt-バンドル/sdk/プラットフォーム固有のツール:/開発/adt-バンドル/sdk/ツール
    

Add the paths for `java` and `ant` if needed. This line in `~/.bash_profile` exposes these tools in newly opened terminal windows. If your terminal window is already open in OSX, or to avoid a logout/login on Linux, run this to make them available in the current terminal window:

        $ ソース ~/.bash_profile
    

To modify the `PATH` environment on Windows 7:

1.  Click on the **Start** menu in the lower-left corner of the desktop, right-click on **Computer**, then select **Properties**.

2.  Select **Advanced System Settings** in the column on the left.

3.  表示されたダイアログ ボックスで**環境変数**キーを押します。.

4.  **パス**変数を選択し、キーを押して**編集**.

5.  Append the following to the `PATH` based on where you installed the SDK, for example:
    
        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools
        

6.  値を保存して両方のダイアログ ボックスを閉じます。

You may also need to enable Java and Ant. Open a command prompt and type `java`, and also type `ant`. Append to the `PATH` whichever of these fails to run:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## Open a New Project in the SDK

At this point, to create a new project you can choose between the cross-platform CLI tool described in The Command-Line Interface, or the set of Android-specific shell tools. From within a source-code directory, here's the CLI approach:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

Here's the corresponding lower-level shell-tool approach for both Unix and Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

Here's how to use the SDK to modify it:

1.  **Eclipse**アプリケーションを起動します。

2.  **新しいプロジェクト**のメニュー項目を選択します。

3.  Choose **Android Project from Existing Code** from the resulting dialog box, and press **Next**:
    
    ![][6]

4.  If you're using the CLI, navigate to the `hello` directory you created for the project, then to the `platforms/android` subdirectory. Alternately, if you use the `create` shell utility, simply navigate to the `hello` directory.

5.  **終了**キーを押します。.

 [6]: img/guide/platforms/android/eclipse_new_project.png

Eclipse ウィンドウが開いたら、未解決の問題を示す赤い**X**が表示されます。もしそうなら、この追加の手順を実行します。

1.  プロジェクト ディレクトリを右クリックします。

2.  結果**のプロパティ**] ダイアログ [ **Android**ナビゲーション ウィンドウから。

3.  プロジェクトのビルド ターゲットは、インストールされている最高の Android の API レベルを選択します。

4.  **[Ok]**をクリックします.

5.  **クリーン****をプロジェクト**メニューから選択します。これは、プロジェクト内のすべてのエラーを修正する必要があります。

## Build the Project

開発で CLI を使用している場合は、プロジェクト ディレクトリの最上位 `www` ディレクトリにソース ファイルが含まれています。アプリを再構築するには、プロジェクト ディレクトリ内のこれらのいずれかを実行します。

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

If you are using the Android-specific shell tools in development, there is a different approach. Once you generate the project, the default app's source is available in the `assets/www` subdirectory. Subsequent commands are available in its `cordova` subdirectory.

The `build` command cleans project files and rebuilds the app. Here is the syntax for both Mac and Windows. The first pair of examples generate debugging information, and the second signs the apps for release:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## Configure an Emulator

You can use either the `cordova` CLI utility or Cordova's Android-centered shell tools to run an app in an emulator. Either way, the SDK must first be configured to display at least one device. To do so, use the Android SDK Manager, a Java application that runs separately from Eclipse. There are two ways to open it:

1.  Run `android` on the command line.

2.  From within Eclipse, press this toolbar icon:
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

Once open, the Android SDK Manager displays various runtime libraries:

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

Choose **Tools → Manage AVDs** (Android Virtual Devices), then choose any item from **Device Definitions** in the resulting dialog box:

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

Press **Create AVD**, optionally modifying the name, then press **OK** to accept the changes:

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

The AVD then appears in the **Android Virtual Devices** list:

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

To open the emulator as a separate application, select the AVD and press **Start**. It launches much as it would on the device, with additional controls available for hardware buttons:

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## エミュレーターへの展開します。

この時点で使用することができます、 `cordova` CLI ユーティリティ コマンドラインからエミュレーターにアプリケーションを配置します。

        $ cordova emulate android
    

それ以外の場合、代替シェル インターフェイスを使用します。

        $ /path/to/project/cordova/run --emulator
    

Instead of relying on whichever emulator is currently enabled within the SDK, you can refer to each by the names you supply:

        $ /path/to/project/cordova/run --target=NAME
    

This pushes the app to the home screen and launches it:

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

When you `run` the app, you also `build` it. You can append additional `--debug`, `--release`, and `--nobuild` flags to control how it is built, or even whether a rebuild is necessary:

        $ /path/to/project/cordova/run --emulator --nobuild
    

If instead you are working within Eclipse, right-click the project and choose **Run As → Android Application**. You may be asked to specify an AVD if none are already open.

For a faster experience, you can use the `Virtual Machine Acceleration` to improve the execution speed. Many modern CPUs provide extensions to execute Virtual Machines more efficiently. Before attempting to use this type of acceleration, you need to determine if your current development system's CPU, supports one the following virtualization technologies:

*   **Intel Virtualization Technology** (VT-x, vmx) → [Intel VT-x supported processor list][14]
*   **AMD Virtualization** (AMD-V, SVM), only supported for Linux (Since May 2006, all CPUs AMD include AMD-V, except Sempron).

 [14]: http://ark.intel.com/products/virtualizationtechnology

Another way to find out if your Intel processor supports VT-x Technology, it's by executing the `Intel Processor Identification Utility`, for `Windows`you can download it from the Intel [Download Center][15], or you can use the [booteable utility][16], which is `OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

After install and execute the `Intel Processor Identification Utility` over Windows, you will get the following window, in order to check if your CPU supports the Virtualization Technologies:

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

In order to speed up the emulator, you need to download and install one or more `Intel x86 Atom` System Images, as well as the `Intel Hardware Accelerated Execution Manager (HAXM)`.

Open your Android SDK Manager, and select the `Intel x86 Atom` System Image, for whichever version that you want to test. Then go to `Extras` and select `Intel x86 Emulator Accelerator (HAXM)`, and install those packages:

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

After download, run the Intel installer, which is available within your Android SDK at `extras/intel/Hardware_Accelerated_Execution_Manager`. **Note**:`If you have any problems installing the package, you can find more information and step by step guidance check this` [Intel Article][19].

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  Install one or more `Intel x86 Atom` System Images as well as the `Intel Hardware Accelerated Execution Manager`, available under **Extras**.

2.  Run the Intel installer, which is available within your Android SDK at `extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  Create a new AVD with the target set to an Intel image.

4.  When starting the emulator, ensure there are no error messages indicating a failure to load HAX modules.

## デバイスへの配置します。

To push an app directly to the device, make sure USB debugging is enabled on your device as described on the [Android Developer Site][20], and use a mini USB cable to plug it into your system.

 [20]: http://developer.android.com/tools/device.html

You can use this CLI command to push the app to the device:

        $ cordova run android
    

...or use this Android-centered shell interface:

        $ /path/to/project/cordova/run --device
    

With no flags specified, the `run` command detects a connected device, or a currently running emulator if no device is found, otherwise it prompts to specify an emulator.

To run the app from within Eclipse, right-click the project and choose **Run As → Android Application**.

## Other Commands

The following generates a detailed log of the app as it runs:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

The following cleans the project files:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat
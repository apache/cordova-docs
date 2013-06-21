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

Android Platform Guide
============================

This guide describes how to set up your development environment for Cordova and run a sample application.

1. Minimum Requirements for Development
---------------
- Identical to [Android Minimum Requirements](http://developer.android.com/sdk/index.html)

1.1 Supported Android Devices
-------------------------------
- Android 2.1 (Deprecated May 2013)
- Android 2.2
- Android 2.3
- Android 3.x (Deprecated May 2013)
- Android 4.x

Android 1.x is currently not supported.  In general, superseded
platforms are deprecated as they dip below 5% on Google's
[distribution dashboard](http://developer.android.com/about/dashboards/index.html).

2. Install SDK + Cordova
------------------------

- Download and install [Android SDK](http://developer.android.com/sdk/index.html)

- Download and extract the latest copy of [Cordova](http://cordova.apache.org/#download). You will be working in the `android` directory.

3A. Set up your PATH environment variable on Mac OS
---------------------------------------

- Open the Terminal program, by default in your `Applications/Utilities` folder.
- Run the following command to open the file with your default text editor:

`touch ~/.bash_profile; open ~/.bash_profile`

- You need to add the path to your Android SDK `platform-tools` and `tools` directory. This example uses `/Development/android-sdk-macosx` as the SDK's install directory. Add the following line:

`export PATH=${PATH}:/Development/android-sdk-macosx/platform-tools:/Development/android-sdk-macosx/tools`

- Save the file and quit the text editor.
- Execute your `.bash_profile` to update your PATH.

`source ~/.bash_profile`

- Your PATH now includes the Android SDK, available each time open the Terminal program.

3B. Set up your PATH environment variable on Windows
---------------------------------------

- From the Desktop, right-click __My Computer__ and click __Properties__.
- Click the __Advanced System Settings__ link in the left column.
- In the __System Properties__ window, click the __Environment Variables__ button.
- Select the PATH variable from the System variables section.
- Select the __Edit__ button.
- You need to add the path to your Android SDK platform-tools and tools directory. This example uses `C:\Development\android-sdk-windows` as the SDK's install directory. Append the following into the text box:

`;C:\Development\android-sdk-windows\platform-tools;C:\Development\android-sdk-windows\tools`

- Save your edit and close the Environment Variables dialog.
- You may also need to include `%JAVA_HOME%\bin` to your PATH. To check if this is required, open a command prompt and type `java`. Add `%JAVA_HOME%\bin` to the PATH if the program can't be found. You may need to specify the full path instead of the `%JAVA_HOME%` environment variable.
- Finally, you may also need to include `%ANT_HOME%\bin` to your PATH. To check if this is required, open a command prompt and type `ant`. Add `%ANT_HOME%\bin` to the PATH if the program can't be found. You may need to specify the full path instead of the `%ANT_HOME%` environment variable.

4. Set up New Project
--------------------

- In a terminal window, navigate to the Cordova distribution `android/bin` directory.
- Type `./create <project_folder_path> <package_name> <project_name>`, then press **Enter**

        <project_folder_path> is the path to your new Cordova Android project
        <package_name> is the package name, e.g. com.YourCompany.YourAppName
        <project_name> is the project name, e.g. YourApp (Must not contain spaces and dashes)

- If you get an __An unexpected error occurred__ error, try the command again prefixed with `sudo`

- Launch Eclipse, and select menu item **New Project**:
    ![](img/guide/getting-started/android/eclipse_new_project.png)
- Select the directory you used for `<project_folder_path>`
- Click Finish.

If your project has a red __X__ indicating there is a problem follow
these additional steps:

- Right-click on the project folder.
- In the resulting __Properties__ dialog, select __Android__ from the navigation pane.
- For the project build target, select the highest Android API level you have installed.
- Click __OK__
- Select __Clean__ from the __Project__ menu. This should correct all the errors in the project.

5A. Deploy to Emulator
----------------------

- Right-click the project and go to **Run As &gt; Android Application**
- Eclipse asks you to select an appropriate AVD. If there isn't one, then you'll need to create it.

__NOTE:__ For a faster experience, use an Intel-based emulator image.

- Open the Android SDK Manager:
  ![](img/guide/getting-started/android/eclipse_android_sdk_button.png)
- Install one or more `Intel x86 Atom` System Images as well as the `Intel Hardware Accelerated Execution Manager` (under Extras).
- Run the Intel installer, which has been downloaded to: `extras/intel/Hardware_Accelerated_Execution_Manager` within your Android SDK
- Create a new AVD with the Target set to an Intel image.
- When starting the emulator, ensure there are no error messages about the HAX module failing to load.

5B. Deploy to Device
--------------------

- Make sure USB debugging is enabled on your device and plug it into your system. Information can be found on the [Android Developer Site](http://developer.android.com/tools/device.html)
- Right-click the project and go to **Run As &gt; Android Application**


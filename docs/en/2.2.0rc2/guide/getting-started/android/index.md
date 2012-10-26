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

Getting Started with Android
============================

This guide describes how to set up your development environment for Cordova and run a sample application.

1. Requirements
---------------

- Eclipse 3.4+


2. Install SDK + Cordova
------------------------

- Download and install [Eclipse Classic](http://www.eclipse.org/downloads/)
- Download and install [Android SDK](http://developer.android.com/sdk/index.html)
- Download and install [ADT Plugin](http://developer.android.com/sdk/eclipse-adt.html#installing)
- Download the latest copy of [Cordova](http://incubator.apache.org/cordova/#download) and extract its contents. We will be working with the Android directory.

3. Setup New Project
--------------------

- In a terminal window, navigate to the `bin` directory within the `android` subfolder of the Cordova distribution.
- Type in `./create <project_folder_path> <package_name> <project_name>` then press **"Enter"**

        <project_folder_path> is the path to your new Cordova Android project
        <package_name> is the package name, e.g. com.YourCompany.YourAppName
        <project_name> is the project name, e.g. YourApp (Must not contain spaces)

- Launch Eclipse, and select menu item **New Project**
    ![](img/guide/getting-started/android/eclipse_new_project.png)
- Select the directory you used for `<project_folder_path>`
- Click Finish.

4A. Deploy to Emulator
----------------------

- Right click the project and go to **Run As &gt; Android Application**
- Eclipse will ask you to select an appropriate AVD. If there isn't one, then you'll need to create it.

**Note: For a faster experience, use an Intel-based emulator image:**

- Open the Android SDK Manager
  ![](img/guide/getting-started/android/eclipse_android_sdk_button.png)
- Install one or more `Intel x86 Atom` System Images as well as the `Intel Hardware Accelerated Execution Manager` (under Extras).
- Run the Intel installer, which has been downloaded to: `extras/intel/Hardware_Accelerated_Execution_Manager` within your Android SDK
- Create a new AVD with the Target set to an Intel image.
- When starting the emulator, ensure there are no error messages about the HAX module failing to load.


4B. Deploy to Device
--------------------

- Make sure USB debugging is enabled on your device and plug it into your system. (**Settings &gt; Applications &gt; Development**)
- Right click the project and go to **Run As &gt; Android Application**


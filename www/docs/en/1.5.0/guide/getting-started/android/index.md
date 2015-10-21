---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: Getting Started with Android
---

Getting Started with Android
============================


Video Tutorials:
----------------

- [PhoneGap and Android Quick Start Video Using Eclipse](http://www.youtube.com/v/MzcIcyBYJMA?autoplay=1)


1. Requirements
---------------

- Eclipse 3.4+

There is also a [Terminal](http://wiki.phonegap.com/w/page/30864168/phonegap-android-terminal-quickstart) of this tutorial that doesn't use Eclipse.


2. Install SDK + PhoneGap
----------------------------

- Download and install [Eclipse Classic](http://www.eclipse.org/downloads/)
- Download and install [Android SDK](http://developer.android.com/sdk/index.html)
- Download and install [ADT Plugin](http://developer.android.com/sdk/eclipse-adt.html#installing)
- Download the latest copy of [PhoneGap](http://phonegap.com/download) and extract its contents. We will be working with the Android directory.


 3. Setup New Project
-----------------------

- Launch Eclipse, then under the menu select **New &gt; Android Project**

    ![]({{ site.baseurl }}/static/img/guide/platforms/android/new_android_project.jpeg)
- In the root directory of the project, create two new directories:
    - **/libs**
    - **assets/www**
- Copy **cordova-1.5.0.js** from your PhoneGap download earlier to **assets/www**
- Copy **cordova-1.5.0.jar** from your PhoneGap download earlier to **/libs**
- Copy **xml** folder from your PhoneGap download earlier to **/res**
- Make a few adjustments too the project's main Java file found in the **src** folder in Eclipse: (view image below)
    - Change the class's extend from **Activity** to **DroidGap**
    - Replace the **setContentView()** line with **super.loadUrl("file:///android_asset/www/index.html");**
    - Add **import com.phonegap.*;**
    - Remove **import android.app.Activity;**

    ![]({{ site.baseurl }}/static/img/guide/platforms/android/javaSrc.jpg)
- You might experience an error here, where Eclipse can't find cordova-1.5.0.jar. In this case, right click on the /libs folder and go to Build Paths/ &gt; Configure Build Paths. Then, in the Libraries tab, add cordova-1.5.0.jar to the Project. If Eclipse is being temperamental, you might need to refresh (F5) the project once again.
- Right click on AndroidManifest.xml and select **Open With &gt; Text Editor**
- Paste the following permissions under versionName: (view image below)

        <supports-screens android:largeScreens="true" android:normalScreens="true" android:smallScreens="true" android:resizeable="true" android:anyDensity="true" />
        <uses-permission android:name="android.permission.CAMERA" />
        <uses-permission android:name="android.permission.VIBRATE" />
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        <uses-permission android:name="android.permission.INTERNET" />
        <uses-permission android:name="android.permission.RECEIVE_SMS" />
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" /> <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />

- Add `android:configChanges="orientation|keyboardHidden"` to the activity tag in AndroidManifest. (view image below)
- Add a second activity under you application tag in AndroidManifest. (view image below)

        <activity android:name="com.phonegap.DroidGap" android:label="@string/app_name" android:configChanges="orientation|keyboardHidden"> <intent-filter> </intent-filter> </activity>

    ![]({{ site.baseurl }}/static/img/guide/platforms/android/manifest.jpg)



4. [Hello World](../webos/index.html)
--------------

Now create and open a new file named **index.html** in the **assets/www** directory. Paste the following code:

        <!DOCTYPE HTML>
        <html>
        <head>
        <title>PhoneGap</title>
        <script type="text/javascript" charset="utf-8" src="cordova-1.5.0.js"></script>
        </head>
        <body>
        <h1>Hello World</h1>
        </body>
        </html>


5A. Deploy to Simulator
-----------------------

- Right click the project and go to **Run As** and click **Android Application**
- Eclipse will ask you to select an appropriate AVD. If there isn't one, then you'll need to create it.


5B. Deploy to [Device](../../../phonegap/device/device.html)
--------------------

- Make sure USB debugging is enabled on your device and plug it into your system. (Settings &gt; Applications &gt; Development)
- Right click the project and go to **Run As** and click **Android Application**


Done!
-----

You can also checkout more detailed [version](../../../phonegap/storage/parameters/version.html) of this guide [here](http://wiki.phonegap.com/w/page/30862722/phonegap-android-eclipse-quickstart).


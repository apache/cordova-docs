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

title: Getting Started with Bada
---

Getting Started with Bada
=========================

This guide describes how to set up your development environment for Cordova and run a sample application.  Note that Cordova used to be called PhoneGap, so some of the sites still use the old PhoneGap name.

1. Requirements
---------------

- Windows
- You need the bada 1.2 SDK to use cordova-bada (which is no longer available on Samsung&apos;s website)


2. Install SDK + Cordova
-------------------------

- Download and install the [Bada SDK](http://developer.bada.com) (Windows only). 
- Download the latest copy of [Cordova](http://phonegap.com/download) and extract its contents. We will be working with the bada directory.


3. Setup New Project
--------------------
- In Bada IDE, select _File_ -> Import project -> Bada C++ / Flash Project. 
    - Note: Bada 1.2 select "Bada Application Project"
    
    ![]({{ site.baseurl }}/static/img/guide/platforms/bada/import_bada_project.png)

- Make sure "Select root directory is checked" and then click Browse
- Browse to Cordova bada project folder (bada for 1.2 and bada-wac for 2.x) and select it. Make sure "Copy projects into workspace is checked"
    
    ![]({{ site.baseurl }}/static/img/guide/platforms/bada/import_bada_project.png)

- Click "Finish"

    ![]({{ site.baseurl }}/static/img/guide/platforms/bada/bada_project.png)
 

4. [Hello World](../webos/index.html)
--------------

**Bada 2.x**: Your HTML/CSS/Javascript code lives under the Res/ folder. Make sure your index.html contains the following two lines in the <head> section.


        <link href="osp://webapp/css/style.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="osp://webapp/js/webapp_core.js"></script>

**Bada 1.2**: Your HTML/CSS/Javascript code lives under the Res/ folder. Make sure your index.html contains the following line.

        <script type="text/javascript" src="cordova/cordova.js"> </script>

5A. Deploy to Simulator
-----------------------

- **Bada 2.x**: Right click on your project s folder and select Run As -&gt; bada Emulator Web Application 
    
    ![]({{ site.baseurl }}/static/img/guide/platforms/bada/bada_1_run.png)

- **Bada 1.2**: Right click on your project&apos; folder and select Build configurations -&gt; Set Active -&gt; Simulator-Debug

    ![]({{ site.baseurl }}/static/img/guide/platforms/bada/bada_set_target.png)

- Right click on your project&apos;s folder and select Run As -&gt; bada Simulator Application. You need to close the emulator every time you update your app!

5B. Deploy to [Device](../../../cordova/device/device.html)
--------------------

- Make sure your device is properly configured 

**Bada 2.x**: Right click on your project&apos;s folder and select Run As -&gt; bada Target Web Application

**Bada 1.2**:
- Right click on your project&apos;s folder and select Build configurations -> Set Active -> Target-Debug
- Right click on your project&apos;s folder and select Run As -> bada Target Application. You need to close the emulator every time you update your app!


Done!
-----

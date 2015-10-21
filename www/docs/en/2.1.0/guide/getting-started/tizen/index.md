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

title: Getting Started with Tizen
---

Getting Started with Tizen
=========================

This guide describes how to set up your development environment for Cordova and run a sample application.  Note that Cordova used to be called PhoneGap, so some of the sites still use the old PhoneGap name.

1. Requirements
---------------

- Linux Ubuntu 10.04/10.10/11.04/11.10 32-bit, Windows XP SP3/7 32-bit.


2. Install SDK + Cordova
-------------------------

- Download and install the [Tizen SDK](https://developer.tizen.org/sdk).
- Donwload the latest copy of [Cordova](http://phonegap.com/download) and extract its contents. We will be working with the tizen directory.
- (optional) Install Tizen Cordova template projects: copy the `/templates` directory content into you Tizen Eclipse IDE web templates directory (e.g: `/home/my_username/tizen-sdk/IDE/Templates/web`).


3. Setup New Project
--------------------

- **Method #1: Import a Cordova Tizen project sample**
    - Launch Tizen Eclipse IDE
    - Select  **File** -> **Import** -> **Tizen Web Project**

    ![]({{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png)

    - Click **Next**
    - Make sure that **Select root directory** is checked
    - Make sure **Copy projects into workspace** is checked
    - Click **Browse**
    - Browse to one of the Cordova Tizen "samples" project directory (e.g: `/cordova-basic`) and select it

    ![]({{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png)

    - Click **Finish**

    ![]({{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png)

    - Your project should now have been imported and appear **Project Explorer** view

- **Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates**
    - Launch Tizen Eclipse IDE
    - Select  **File** -> **New** -> **Tizen Web Project**
    - Select **User Template** and **User defined** items
    - Select one of the Tizen Cordova template (e.g: **CordovaBasicTemplate**)
    - Fill-up the **Project name** and its target **Location**

    ![]({{ site.baseurl }}/static/img/guide/platforms/tizen/project_template.png)

    - Click **Finish**

    ![]({{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png)

    - Your project should now have been created and appear **Project Explorer** view


4. [Hello World](../webos/index.html)
--------------
- To build your project:

    - **Right Click** your project in the **Project Explorer** view and Select **Build Project**

    ![]({{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png)

    - A widget package should have been generated in your project root directory (e.g: `cordova-basic.wgt`)

    - **Note** that the provided samples Tizen Cordova projects are not basic hello world applications. They contain a simple example usage of the Battery Cordova API.


5A. Deploy to Simulator
-----------------------

- **Right Click** your project in the **Project Explorer** view and Select **Run As** and **Tizen Web Simulator Application**

    ![]({{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png)

5B. Deploy to Device/Emulator
--------------------

- Make sure that your target device is properly launched/connected/configured ("Date and Time" settings must have been set correctly)
- Select your application deployement target with the **Connection Explorer** view (Select **Window** Menu -> **Show View** -> **Connection Explorer** )

    ![]({{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png)

- **Right Click** your project in the **Project Explorer** view and Select **Run As** and **Tizen Web Application**

    ![]({{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png)

Done!
-----

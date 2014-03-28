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

# Tizen Platform Guide

This guide describes how to set up your SDK development environment to
deploy Cordova apps for devices running the Tizen operating system.

## Requirements and Support

The Tizen SDK requires Linux Ubuntu 10.04/10.10/11.04/11.10 (32-bit),
or Windows XP SP3/7 (32-bit).

Developers should use the `cordova` utility in conjunction with
the Tizen SDK.  See The Command-Line Interface for information
how to install it, add projects, then build and deploy a project.

## Install the SDK

Download the Tizen SDK from
[tizen.org](https://developer.tizen.org/sdk).

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g.:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g.: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## Open a Project in the SDK

1. Launch the Tizen Eclipse IDE.

2. Select __File &rarr; Import &rarr; Tizen Web Project__:

   ![](img/guide/platforms/tizen/import_project.png)

3. Press __Next__.

4. Make sure __Select root directory__ is checked.

5. Make sure __Copy projects into workspace__ is checked.

6. Press __Browse__ and select the Cordova Tizen `samples` project directory (such as `/cordova-basic`):

   ![](img/guide/platforms/tizen/import_widget.png)

7. Press __Finish__. Your project should now be imported and appear in
   the __Project Explorer__ view:

   ![](img/guide/platforms/tizen/project_explorer.png)

To rebuild the project, right-click in the __Project Explorer__ view
and Select __Build Project__:

![](img/guide/platforms/tizen/build_project.png)

A widget package file such as _hello.wgt_ should generate in the
project's root directory.

## Deploy to Emulator

Right-click the project in the __Project Explorer__ view and select
__Run As &rarr; Tizen Web Simulator Application__:

![](img/guide/platforms/tizen/runas_web_sim_app.png)

## Deploy to Device

* Make sure that the target device is properly launched, connected and
  configured. Its __Date and Time__ settings must be set correctly.

* Use the __Connection Explorer__ view to select the application
  deployment target: __Window &rarr; Show View &rarr; Connection
  Explorer__.

  ![](img/guide/platforms/tizen/connection_explorer.png)

* Right-click the project in the __Project Explorer__ view, then
  select __Run As &rarr; Tizen Web Application__:

  ![](img/guide/platforms/tizen/runas_web_app.png)


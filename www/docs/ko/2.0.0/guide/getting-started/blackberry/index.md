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

title: Getting Started with Blackberry
---

Getting Started with Blackberry
============================

Cordova for BlackBerry makes use of the [BlackBerry WebWorks framework](https://bdsc.webapps.blackberry.com/html5). BlackBerry WebWorks tooling is available for Windows or Mac environments. WebWorks applications can ONLY be deployed to BlackBerry devices running OS 5.0 and higher or the BlackBerry PlayBook operating system.

1.  Requirements
---------------

- Windows XP (32-bit) or Windows 7 (32-bit and 64-bit) or Mac OSX 10.6.4+
- Java Development Kit (JDK)
    - Windows: [Oracle JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk) (32-Bit Version)
    - Mac OS X: Versions prior to Mac OS X 10.7 provided Java by default.  OS X 10.7+ requires installation of [Java](http://support.apple.com/kb/DL1421).
-   Apache Ant
    - Windows: [Apache Ant](http://ant.apache.org/bindownload.cgi).
    - Mac OS X: Apache Ant is bundled with Java install.


2.  Install SDK + Cordova
-------------------------

- PlayBook development requires the [Adobe Air SDK](http://www.adobe.com/devnet/air/air-sdk-download.html)
- Download and install one or more of the WebWorks SDKs. Keep note of the install directory.
    - Smartphone Development: [BlackBerry WebWorks Smartphone SDK](https://bdsc.webapps.blackberry.com/html5/download/sdk)
    - PlayBook Development: [BlackBerry WebWorks Tablet OS SDK](https://bdsc.webapps.blackberry.com/html5/download/sdk)
- Download the latest copy of [Cordova](http://phonegap.com/download) and extract its contents.


3.  Setup New Project
--------------------

- Open up a command prompt/terminal and navigate to where you extracted Cordova.
- There is a directory for each platform that Cordova supports.  CD into the blackberry directory.
- The blackberry directory contains two directories, `sample` and `www`.  The `sample` folder contains a complete Cordova project.  Copy the `sample` folder to another location on your computer.
- Change to the newly created directory.
- Open up the project.properties file with your favorite editor and edit the entries for `blackberry.bbwp.dir=` and/or `playbook.bbwp.dir=`. Set the  value(s) to the directory containing the `bbwp` binary in the WebWorks SDK(s) installed earlier.


4.  [Hello World](../webos/index.html)
--------------

Build the Cordova sample project by typing `ant target build` in your command prompt/terminal while you are in your project's directory. Replace `target` with either `blackberry` or `playbook`. Note this is a sample Cordova project and not a basic hello world application. The provided index.html in the www contains example usages of many of the Cordova API.

5A.  Deploy to Simulator
--------------------------------------

BlackBerry smartphone simulators are only available on Windows. PlayBook simulators require VMWare Player (Windows) or VMWare Fusion (Mac OS X). The WebWorks SDK provides a default simulator. Additional simulators are [available](http://us.blackberry.com/developers/resources/simulators.jsp).

- Open the project.properties file with your favorite editor and customize the following properties.
    - Smartphone (Optional)
        - `blackberry.sim.dir` : Path to directory containing simulator. On windows file separator '\' must be escaped '\\\'.
        - `blackberry.sim.bin` : Name of the simulator executable in the specified directory.
    - Playbook
        - `playbook.sim.ip` : IP address of simulator obtained when placing the simulator in developer mode through simulator security settings.
        - `playbook.sim.password` : Simulator password which can be set through simulator security settings.
- While in your project directory, in command prompt/terminal type `ant target load-simulator`. Replace `target` with either `blackberry` or `playbook`.  Note, for PlayBook the simulator virtual image must already be started.
- The application will be installed in the All Applications section in the simulator.  Note, on BlackBerry OS 5 the application is installed in the Downloads folder.

5B.  Deploy to [Device](../../../cordova/device/device.html) (Windows and Mac)
--------------------------------------

- Deploying to a device requires signing keys which can be obtained from RIM.
    - Fill out this [form](https://bdsc.webapps.blackberry.com/html5/signingkey). to request signing keys.
    - Install the signing keys once they have been received:
        - [Setup Smartphone Signing keys](https://bdsc.webapps.blackberry.com/html5/documentation/ww_publishing/signing_setup_smartphone_apps_1920010_11.html)
        - [Setup Tablet Signing keys](https://bdsc.webapps.blackberry.com/html5/documentation/ww_publishing/signing_setup_tablet_apps_1920009_11.html)
- Install [BlackBerry Desktop Software](http://us.blackberry.com/apps-software/desktop/) to be able to install a signed application to a smartphone device attached via USB.
- Open the project.properties file with your favorite editor and customize the following properties:
    - Smartphone (Optional)
        - `blackberry.sigtool.password` : Password used when code signing keys were registered.  If not specified, a prompt will occur.
    - Playbook (Required)
        - `playbook.sigtool.csk.password` : Signing key password.
        - `playbook.sigtool.p12.password` : Signing key password.
        - `playbook.device.ip` : IP address of device obtained when placing the device in developer mode through device security settings.
        - `playbook.device.password` : Device password which is set through device security settings.
- While in your project directory, in command prompt/terminal type `ant target load-device`. Replace `target` with either `blackberry` or `playbook`.
- The application will be installed in the All Applications section in the device.  Note, on BlackBerry OS 5 the application is installed in the Downloads folder.

Additional Information
----------------------

The following articles provide help to issues you may encounter when developing a Cordova application which is based on the BlackBerry WebWorks framework.

- [BlackBerry WebWorks Development Pitfalls](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712)
- [Best practices for packaging WebWorks applications](https://bdsc.webapps.blackberry.com/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html)


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

Getting Started with BlackBerry
============================

Cordova for BlackBerry makes use of the [BlackBerry WebWorks framework](https://bdsc.webapps.blackberry.com/html5). BlackBerry WebWorks tooling is available for Windows or Mac environments. 

WebWorks applications can ONLY be deployed to the following BlackBerry platforms:

* BlackBerry OS 5.0 and higher
* BlackBerry PlayBook
* BlackBerry 10 (QNX)


1.  Requirements
---------------

- Windows XP (32-bit) or Windows 7 (32-bit and 64-bit) or Mac OSX 10.6.4+
- Java Development Kit (JDK)
    - Windows: [Oracle JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk) (32-Bit Version)
    - Mac OS X: Versions prior to Mac OS X 10.7 provided Java by default.  OS X 10.7+ requires installation of [Java](http://support.apple.com/kb/DL1421).
-   Apache Ant
    - Windows: [Apache Ant](http://ant.apache.org/bindownload.cgi).
    - Mac OS X: Apache Ant is bundled with Java install.


2.  Install the WebWorks SDK
-------------------------
Download and install the appropriate WebWorks SDKs for your development. BlackBerry 10, BlackBerry PlayBook, and BlackBerry Smartphone WebWorks SDKs can all be downloaded from the following locations.  Please note that BlackBerry PlayBook development requires the Adobe Air SDK as well.

- [BlackBerry 10 (QNX) SDK] (https://developer.blackberry.com/html5/download/#blackberry10)
- [BlackBerry PlayBook SDK] (https://developer.blackberry.com/html5/download/#playbook) & [Adobe Air SDK](http://www.adobe.com/devnet/air/air-sdk-download.html)
- [BlackBerry Smartphones SDK] (https://developer.blackberry.com/html5/download/#smartphones)


3.  Register for Signing Keys
-------------------------
If you wish to publish your application on BlackBerry App World, or deploy on an actual device you’ll need to register for a set of free Code Signing Keys.  

To register for Signing Keys visit, and complete the [BlackBerry Keys Order Form](https://www.blackberry.com/SignedKeys).

Once you receive your Signing Keys, they'll need to be setup. To learn how to setup your Signing Keys visit the [BlackBerry HTML5/WebWorks website](https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html).


4.  Install Cordova
-------------------------

Download the latest copy of [Cordova](http://cordova.apache.org/#download) and extract its contents to your local machine.


5.  Setup New Project
--------------------

- Open up a command prompt/terminal and navigate to where you extracted Cordova.
- There is a directory for each platform that Cordova supports.  CD into the blackberry directory.
- The blackberry directory contains several directories.  The `example` folder contains a complete Cordova project.  Copy the `example` folder to another location on your computer.
- Change to the newly created directory.
- Open up the project.properties file with your favorite editor and edit the entries for the WebWorks SDKs you are using. For example...

BlackBerry 10 (QNX)
- `qnx.bbwp.dir=C:\\Program Files (x86)\\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9`

BlackBerry PlayBook
- `playbook.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks SDK for TabletOS 2.1.0.6\\bbwp`

BlackBerry Smartphone (OS5-7)
- `blackberry.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks Packager`


6.  Hello World
--------------

Build the Cordova sample project by typing `./cordova/build <target>` in your command prompt/terminal while you are in your project's directory. Replace `<target>` with either `qnx` `playbook` or `blackberry`. For example...

BlackBerry 10 (QNX)
- `./cordova/build qnx`

BlackBerry PlayBook
- `./cordova/build playbook`

BlackBerry Smartphone (OS5-7)
- `./cordova/build blackberry`


7A.  Deploy to Simulator
--------------------------------------

BlackBerry smartphone simulators are only available on Windows. BlackBerry 10, and PlayBook simulators require VMWare Player (Windows) or VMWare Fusion (Mac OS X). The WebWorks SDK provides a default simulator. Additional simulators are [available](http://us.blackberry.com/developers/resources/simulators.jsp).

For instructions on installing simulators, please visit the following link(s):
- [BlackBerry 10](https://developer.blackberry.com/html5/documentation/using_the_bb10_simulator_2008466_11.html)
- [BlackBerry PlayBook](https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html)
- [BlackBerry Smartphone](https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html)

- Open the project.properties file with your favorite editor and customize the following properties.
    
BlackBerry 10
- `qnx.sim.ip`
- `qnx.sim.password`
- Note: IP address of simulator obtained when placing the simulator in developer mode through simulator security settings. Simulator password can be set through simulator security settings.

Playbook
- `playbook.sim.ip` : 
- `playbook.sim.password`
- Note: IP address of simulator obtained when placing the simulator in developer mode through simulator security settings. Simulator password can be set through simulator security settings.

Smartphone (Optional)
- `blackberry.sim.dir` 
- `blackberry.sim.bin`
- Note: On windows file separator '\' must be escaped when specifying directories.  For example `C:\\Program Files\\BlackBerry\\Simulator`.  

While in your project directory, in command prompt/terminal type `./cordova/run <target>`. Replace `<target>` with either `qnx`, `playbook`, or `blackberry`. Note, for BlackBerry 10 and PlayBook, the simulator virtual image must already be started.  For example...

BlackBerry 10 (QNX)
- `./cordova/run qnx`

BlackBerry PlayBook
- `./cordova/run playbook`

BlackBerry Smartphone (OS5-7)
- `./cordova/run blackberry`

Answer 'n' when prompted "Do you have a BlackBerry device connected to your computer? (y/n)"

The application will be installed to the home screen of the simulator. Note, on BlackBerry OS 5 the application is installed in the Downloads folder.


7B.  Deploy to Device (Windows and Mac)
--------------------------------------

To deploy your app to a device you must have registered for, and setup BlackBerry Code Signing Keys.  See section 3 for details. Also, to deploy apps on BlackBerry 10 or PlayBook, the device must be set to Development Mode which can be enabled from the Settings > Security menu.

- Open the project.properties file with your favorite editor and customize the following properties:

BlackBerry 10 (QNX)
- `qnx.sigtool.password`
- `qnx.device.ip`
- `qnx.device.password`

BlackBerry PlayBook
- `playbook.sigtool.csk.password`
- `playbook.sigtool.p12.password`
- `playbook.device.ip`
- `playbook.device.password`

BlackBerry Smartphone (OS5-7)
- Smartphone (Optional)
- `blackberry.sigtool.password`

While in your project directory, in command prompt/terminal type `./cordova/run <target>`. Replace `<target>` with either `qnx`, `playbook`, or `blackberry`.  For example...

BlackBerry 10 (QNX)
- `./cordova/run qnx`

BlackBerry PlayBook
- `./cordova/run playbook`

BlackBerry Smartphone (OS5-7)
- `./cordova/run blackberry`

Answer "y" when prompted "Do you have a BlackBerry device connected to your computer? (y/n)"

The application will be installed to the home screen of the device. Note, on BlackBerry OS 5 the application is installed in the Downloads folder.

Additional Information
----------------------

The following articles provide help to issues you may encounter when developing a Cordova application which is based on the BlackBerry WebWorks framework

- [BlackBerry WebWorks Development Pitfalls](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712)

- [Best practices for packaging WebWorks applications](https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html)

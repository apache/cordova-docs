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

# BlackBerry 10 Platform Guide

This guide shows how to set up your SDK environment to deploy
Cordova apps for BlackBerry 10 devices.  For previous versions of
BlackBerry, you need to use a different SDK environment and set of
command-line tools, described in the BlackBerry Platform Guide.
For BlackBerry 10, you need to install the SDK regardless of whether
you want to use the cross-platform Cordova CLI for development, or a
narrower set of platform-centered command-line tools.  For a
comparison of the two development paths, see the Overview.  For
details on each, see The Command-Line Interface and the BlackBerry 10
Shell Tool Guide.

## Requirements

The development environment is available on Windows, Mac and Linux.

Developers should use the `cordova` utility in conjunction with the
BlackBerry WebWorks SDK or BlackBerry Native SDK. See The Command-Line
Interface for information how to install `cordova`, add projects, then
build and deploy for each platform.

Blackberry 10 Device Simulator:

* Processor: Intel dual core 2.0 GHz/AMD Athlon 4200+ or higher
* Disk space: 10 GB 
* RAM Memory: 4 GB 
* Virtualization: one of the following:
  * __Intel Virtualization Technology__ (VT, VT-x, vmx) &rarr; [Intel VT-x supported processor list](http://ark.intel.com/products/virtualizationtechnology)
  * __AMD Virtualization__ (AMD-V, SVM) (Since May 2006 all AMD CPUs include AMD-V except Sempron).

More information about requirements: [BB10 Simulator requeriments](http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html).

## Install the BlackBerry WebWorks SDK

Download and install the BlackBerry WebWorks SDK from [developer.blackberry.com](https://developer.blackberry.com/html5/download/)

The installer will add command-line tools to your path. Depending on your OS,
you may need to open a new terminal window or re-log in.

## Install the BlackBerry Native SDK

If you need to compile native code, for example when developing a native plugin, you
will need to install the BlackBerry Native SDK.

In order to get the BlackBerry Native SDK, download and install the IDE for Blackberry available from
[developer.blackberry.com](http://developer.blackberry.com/native/download/), then using the IDE, install the Blackberry Native SDK.
Following installation, you need to add its command-line tools to your
system path.

On Windows:

* Go to __My Computer &rarr; Properties &rarr; Advanced &rarr; Environment Variables__.

* Append the Native SDK's install directory to the PATH, for example:

        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\

On Mac and Linux:

* Edit the `~/.bash_profile` file, adding a line such as the
  following, depending on where the Native SDK was installed:

        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/

  or for the 10.2 Native SDK:

        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/

* Run the following to apply the change in the current session:

        $ source ~/.bash_profile

If you got any environmental problem, using the Native SDK from the command line, execute the appropriate file for your platform, located within the installation path:

* On Windows &rarr; MS-DOS shell:

        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat

* On Windows &rarr; git bash shell:

        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`

* On Linux &rarr; Installed as root user:

        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`

* On Linux &rarr; Installed as non-root user:

        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`

* On Mac:

        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


## Set up for Signing

If you wish to test on a device or distribute apps through BlackBerry
World, your system must be setup for code signing.

To obtain a signing key, go to the [BlackBerry Keys Order Form] (https://www.blackberry.com/SignedKeys/codesigning.html).

Select the first checkbox: "for BlackBerry10 apps developed using BlackBerry
NDK" and then sign in or create a BBID.

Enter a password and click "Get Token" to download bbidtoken.csk. Save this
file to the default location for your OS which will be displayed on the
download page.

The final step is to generate a signing certificate:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’

## Create a Project

Use the `cordova` utility to set up a new project, as described in The
Command-line Interface. For example, in a source-code directory:
 
        $ cordova create hello com.example.hello
        $ cd hello
        $ cordova platform add blackberry10
        $ cordova build

## Deploy to Emulator

If you wish to run a device emulator, download and install the
BlackBerry 10 Simulator.

* [Download](http://developer.blackberry.com/native/download/)
* [Getting Started](http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html)

Before testing an app on either an emulator or a device, you need to
enable development mode.

Launch the emulator image, then choose __Settings__ from the home screen:

![](img/guide/platforms/blackberry10/bb_home.png)

Navigate to the __Security and Privacy &rarr; Development Mode__
section and enable the option:

![](img/guide/platforms/blackberry10/bb_devel.png)

An additional set of command-line utilities are included when you set
up the BlackBerry 10 platform for your project.  The following
command, in this case invoked from the project top-level directory,
associates a target named _emu_ with the IP address displayed above.

* On Windows:

        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator

* On Mac/Linux:

        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator

Then, run the `emulate` command to view the app:

        $ cordova emulate blackberry10

## Deploy to Device

To deploy to a device, make sure it is plugged into your computer.
Enable development mode and obtain the IP address as desribed in the
emulator section above. You will also need to obtain the PIN from the
the __Settings__ application under __About &rarr; Hardware__:

![](img/guide/platforms/blackberry10/bb_pin.png)

Run the target command-line utility to associate a name with an IP
address, device password and PIN.

* On Windows:

        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

* On Mac/Linux:

        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

where:

* `--password` refers to the password to unlock the device.

* `--pin` refers to the device PIN obtained from the __Settings__ application.

Then, run the `run` command to view the app:

        $ cordova run blackberry10

If a debug token is not yet set up for the device, an error message
prompts you to use the platform run script with the password you
provided when registering for signing keys.

* On Windows:

        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret

* On Mac/Linux:

        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret

## Debugging with WebInspector

When debugging on the device or an emulator, you may run WebInspector
remotely to view the application's internal state.  A prompt displays
the URL that allows you to connect to the app with a standard web
browser.  For more information, see
[Debugging using WebInspector](http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html).

## Building a Release Version

By default, running the `cordova build` command creates an unsigned
_.bar_ package file suitable for testing on a device or simulator.

Use `--release` to create a release version suitable for distribution
through BlackBerry World.

    $ cordova build --release --keystorepass <signing password>

The `--keystorepass` option specifies the password you defined when
configuring your computer to sign applications.


## Deploy to Other Locations

The instructions above assume a device is plugged in via USB or a
simulator is running on the local machine. It is also possible to
deploy to other locations.

An additional set of command-line utilities are included when you set
up the BlackBerry 10 platform for your project.  The following
command, in this case invoked from the project top-level directory,
associates a target named _emu_ with an IP address.

* On Windows:

        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret

* On Mac/Linux:

        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret

Once the target is defined, you can provide it to the run command using
`--target`:

    $ cordova run blackberry10 --target=emu

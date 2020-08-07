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

title: Windows Platform Guide
toc_title: Windows
---

# Windows Platform Guide

This guide shows how to set up your SDK development environment to build and deploy Cordova apps Windows 10 (Universal Windows Platform [= UWP], formerly known as Universal App Platform [= UAP]), Windows 8.1 and Windows Phone 8.1.  It shows how to use either shell tools to generate and build apps, or the cross-platform Cordova CLI. (See the [Overview](../../overview/index.html#development-paths) for a comparison of these development options.) This section also shows how to modify Cordova apps within Visual Studio. Regardless of [which approach](../../overview/index.html#development-paths) you take, you need to install the Visual Studio SDK, as described below.

Cordova Windows on Windows 8.1 and Windows Phone 8.1 rely on Internet Explorer 11 as their rendering engine, so as a practical matter you can use IE's powerful debugger to test any web content that doesn't invoke Cordova APIs.  The Windows Phone Developer Blog provides [helpful guidance](https://blogs.windows.com/buildingapps/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10/#qYPwLJDbYKToOveG.97) on how to support IE along with comparable WebKit browsers.

## Requirements and Support

To develop apps for Windows 10 you need:

- [Windows] 10 or 8.1
- [Visual Studio] 2017 or 2015

> &#10071; Visual Studio 2019 does not support Cordova-Windows. See [apache/cordova-windows#327](https://github.com/apache/cordova-windows/issues/327)

To develop apps for Windows 8.1:

- [Windows] 8.1
- [Visual Studio] 2015 or 2013

> &#10071; Windows Phone 8 Emulator requires Windows 8.1 (x64) Professional edition or higher, and a processor that supports [Client Hyper-V and Second Level Address Translation (SLAT)](https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv)

Cordova apps targeting Windows can be developed on a Mac, either by running a
virtual machine environment or by using Boot Camp to dual-boot a
Windows partition. Consult these resources to set up the required
Windows development environment on a Mac:

- [VMWare Fusion](http://msdn.microsoft.com/en-US/library/windows/apps/jj945426)
- [Parallels Desktop](http://msdn.microsoft.com/en-US/library/windows/apps/jj945424)
- [Boot Camp](http://msdn.microsoft.com/en-US/library/windows/apps/jj945423)

## Installing the Requirements

Install any edition of [Visual Studio](http://www.visualstudio.com/downloads) matching the version
requirements listed above.

### Visual Studio 2017

You also need to install the Workload "Universal Windows Platform development" and the "Windows 10 SDK (10.0.10240.0)" as individual component.

<br/><p align="center"><img src="{{ site.baseurl }}/static/img/guide/platforms/windows/vs17_workload.png" /></p><br/>

See [here if you get error messages regarding `MSBuild v4.0`](#visual-studio-2017-and-msbuild-v40-is-not-supported-aborting). 

### Visual Studio 2015

The tools and SDKs for the target Windows platforms (UWP, 8.1, etc.) must also be selected in the installer. They can be found under the "Windows and Web Development" heading.

<br/><p align="center"><img src="{{ site.baseurl }}/static/img/guide/platforms/windows/win8_installTools.png" /></p><br/>

## Project Configuration

After installation, you should be ready to develop apps targetting Windows platform. Refer to [Create your first app](../../cli/index.html) guide for details.

### Target Windows version

By default the `cordova build` command produces one package for Windows 10.

App compatibility is determined by the OS that the app targeted.  Apps are forwardly-compatible but not backwardly-compatible, so an app targeting Windows 10 cannot run on 8.1, but an app built for 8.1 can run on 10.

#### Target version configuration

If you want to build Windows 8.1 and Windows Phone 8.1 packages by default, you have to target `8.1` and the following configuration setting must be added to configuration file (`config.xml`).

```xml
<preference name="windows-target-version" value="8.1" />
```

Once you add this setting, the `build` command will start producing Windows 8.1 and Windows Phone 8.1 packages.

#### Overriding configuration with the --appx parameter

You may decide that you want to build a particular version of your application targeting a particular OS (for example, you might have set that you want to target Windows 10, but you want to build for Windows Phone 8.1).  To do this, you can use the `--appx` parameter:

```
cordova build windows -- --appx=8.1-phone
```

The build system will ignore the preference set in `config.xml` for the target Windows version and strictly build a package for Windows Phone 8.1.

Valid values for the `--appx` flag are `8.1-win`, `8.1-phone`, and `uwp` or `uap` (for Windows 10 Universal Apps / Universal Windows Apps).  These options also apply to the `cordova run` command.

#### Considerations for target Windows version

Windows 10 supports a new "Remote" mode for Cordova apps (and HTML apps in general). This mode enables
apps to have much more freedom with respect to use of DOM manipulation and common web patterns such as the use
of inline script, but does so by reducing the set of capabilities your app may use when
submitted to the public Windows Store. For more information about Windows 10 and Remote Mode, look at
the [Understanding Remote Mode vs Local Mode](#understanding-remote-mode-vs-local-mode) section.

When using Remote Mode, developers are encouraged to apply a Content Security Policy (CSP) to their application
to prevent script injection attacks.

### Deploy options

To deploy Windows package:

```
cordova run windows
```

This command will give you the list of all available targets:

```
cordova run windows --list
```

This allows you to run the application on a specific device or emulator, in this case "Emulator 8.1 720p 4.7 inch"

```
cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone
```

#### Architecture option

- `--archs`
- Specific chip architectures (`anycpu`, `arm`, `x86`, `x64`)

#### Bundle option

- `--bundle`
- Generates an .appxbundle. Not valid if anycpu AND chip-specific architectures are used (at the same time)

You can also use __cordova run --help__ to see additional build and run options.

#### Deploy options when targetting Windows (Phone) 8.1

With Windows (Phone) 8.1 packages you have more options for deployment.

##### `--phone` and `--win`

To deploy Windows 8.1 package:

```
cordova run windows -- --win  # explicitly specify Windows as deployment target
```

To deploy Windows Phone 8.1 package:

```
cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
cordova run windows --device -- --phone  # deploy app to connected device
```

##### `--win10tools`

- `--win10tools`
- Uses Windows 10 deployment tools (used for a Windows 8.1 app when) being deployed to a Windows 10 device

### Using Visual Studio to deploy the app

Once you build a Cordova app, you can open it with Visual Studio. The various `build` commands generate a Visual Studio
Solution (_.sln_) file. Open the file in the File Explorer to modify the project within Visual Studio:

<br/><p align="center"><img src="{{ site.baseurl }}/static/img/guide/platforms/windows/win8_sdk_openSLN.png" /></p><br/>

The `CordovaApp` component displays within the solution, and its `www` directory contains the web-based source code, including the `index.html` home page:

<br/><p align="center"><img src="{{ site.baseurl }}/static/img/guide/platforms/windows/win8_sdk.png" /></p><br/>

The projects for different Windows versions are displayed separately in the solution explorer. You can choose the deploy target version by right clicking the 'solution' (topmost entry in the solution explorer) and then going into 'Properties'. Here you can update the 'Single start up' field. The controls below Visual Studio's main menu allow you to test or deploy the app:

<br/><p align="center"><img src="{{ site.baseurl }}/static/img/guide/platforms/windows/win8_sdk_deploy.png" /></p><br/>

With __Local Machine__ selected, press the green arrow to install the app on the same machine running Visual Studio. Once you do so, the app appears in Windows' app listings:

<br/><p align="center"><img src="{{ site.baseurl }}/static/img/guide/platforms/windows/win8_sdk_runApp.png" /></p><br/>

Each time you rebuild the app, the version available in the interface is refreshed.

Once available in the app listings, holding down the __CTRL__ key while selecting the app allows you to pin it to the main screen:

<br/><p align="center"><img src="{{ site.baseurl }}/static/img/guide/platforms/windows/win8_sdk_runHome.png" /></p><br/>

Note that if you open the app within a virtual machine environment, you may need to click in the corners or along the sides of the windows to switch apps or access additional functionality:

<br/><p align="center"><img src="{{ site.baseurl }}/static/img/guide/platforms/windows/win8_sdk_run.png" /></p><br/>

Alternately, choose the __Simulator__ deployment option to view the app as if it were running on a tablet device:

<br/><p align="center"><img src="{{ site.baseurl }}/static/img/guide/platforms/windows/win8_sdk_sim.png" /></p><br/>

Unlike desktop deployment, this option allows you to simulate the tablet's orientation, location, and vary its network settings.

__NOTE__: Consult the [Overview](../../overview/index.html) for advice on how to use Cordova's
command-line tools or the SDK in your workflow. The Cordova CLI relies
on cross-platform source code that routinely overwrites the
platform-specific files used by the SDK. If you want to use the SDK to
modify the project, use the lower-level shell tools as an alternative
to the CLI.

## Debugging

Visual Studio provides powerful tools to debug your application. You can refer to [this article](https://msdn.microsoft.com/en-us/library/7seh8d72.aspx) to get started with it.

**Note:** Resume and pause events are not triggered normally when debugging apps using Visual Studio. This is because Windows does not suspend your app when it is being debugged. The only way to change the application state is through the 'Lifecycle event' options inside Visual Studio. The events should work as expected when the app is run on a device/emulator without the debugger attached.

## Signing an App

You can learn more about signing and packaging of Windows Store Apps on [MSDN][1].

To be able to correctly package and sign Windows apps there are few things required:

- A signing certificate
- Identity details matching the provided signing certificate

In Windows project, identity details are kept in a file named `package.appxmanifest`. This file is automatically populated every time a Cordova app is built. Identity holds 3 important fields.

- Name
- Publisher
- Version

*Name* and *Version* can be set from `config.xml`. *Publisher* can be provided as a build parameter or can be set on `build.json` file.

![]({{ site.baseurl }}/static/img/guide/platforms/windows/vs2015_packaging.png)

*Name* and *Version* can also be set as platform-specific preferences in **config.xml** in the following way:

```xml
<widget windows-packageVersion="2.0.0" ...> <!-- windows-packageVersion overrides version -->
<preference name="WindowsStoreIdentityName" value="12345FakeCorp.CoolApp"/> <!-- WindowsStoreIdentityName overrides widget.id -->
```

*PublisherDisplayName* and *DisplayName* can also be overriden:

```xml
<preference name="WindowsStorePublisherName" value="FakeCorp"/> <!-- WindowsStorePublisherName overrides author -->
<preference name="WindowsStoreDisplayName" value="CoolApp"/> <!-- WindowsStorePublisherName overrides name -->
```

A signing certificate can be provided from either CLI or through `build.json` file. The certificate related CLI flags are:

| Parameter             | Flag              | Description
|-----------------------|-------------------|-----------------------------------
| Certificate File      | `--packageCertificateKeyFile`      | Path to the package signing certificate to be associated with the app
| Thumb Print           | `--packageThumbprint`              | Used to validate the authenticity of package certificate key file. When creating a certificate key file, this value will be provided to the end user

Example:
```
cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"
```

Alternatively, these values could be specified using a build configuration file (`build.json`) using CLI (`--buildConfig`). A sample build configuration file:

```json
{
    "windows": {
        "debug": {
            "packageCertificateKeyFile": "platforms\\windows\\CordovaApp_TemporaryKey.pfx"
        },
        "release": {
            "packageCertificateKeyFile": "c:\\path-to-key\\keycert.pfx",
            "packageThumbprint": "ABCABCABCABC123123123123",
            "publisherId": "CN=FakeCorp.com, L=Redmond, S=Washington, C=US"
        }
    }
}
```

There is also support to mix and match command line arguments and parameters in `build.json` file. Values from the command line arguments will get precedence.

### Creating a certificate key

Signing is required for distributing and installing Windows Store apps. This process is normally handled by Visual Studio when you deploy a package for release. To do this without Visual Studio we need to create our own certificates. [This article](https://msdn.microsoft.com/en-us/library/windows/desktop/jj835832(v=vs.85).aspx) has instructions on how to do that.

Once you have the `.pfx` file created and provided to `build.json` file, you might get the following error: "The key file may be password protected. To correct this, try to import the certificate manually into the current user's personal certificate  store.". In order to import it you have to use [certutil][2] from an admin prompt:

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

Where:

- user : Specifies "current user" personal store
- p : Password for pfx file
- importPFX : Name of pfx file

Once installed, next step is to add packageThumbprint and packageCertificateKeyFile to build.json. In order to find the packageThumbprint, search for the CommonName you've associated with the certificate:

```powershell
powershell -Command " & {dir -path cert:\CurrentUser\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"
```

Once these final values are provided. Cordova should successfully package and sign the app.

## MSBuild build flags

Similar to other platforms ([`--gradleArg` on Android](../android/index.html#setting-gradle-properties), [`--buildFlag` on iOS](../ios/index.html#xcode-build-flags)) you can pass custom flags to MSBuild. To do this you have two options:

- add one or more `--buildFlag` options to `cordova build windows` or `cordova run windows` commands:

      ```
      cordova build windows -- --buildFlag /clp:Verbosity=normal --buildFlag /p:myCustomProperty=Value
      cordova run windows -- --buildFlag /clp:Verbosity=minimal
      ```

- add `buildFlag` option to `build.json` file:

      ```json
      {
        "windows": {
          "debug": {
            "buildFlag": [
                "/clp:Verbosity=normal",
                "/p:myCustomProperty=Value"
            ]
          }
        }
      }
      ```


Note that `cordova-windows` appends build flags from `build.json` and CLI arguments in specific order. In particular, flags from `build.json` are being appended _before_ build flags from CLI, which basically means that CLI flags _override_ ones from `build.json` in case of any conflicts.

For the list of MSBuild's available command-line options please refer to [official MSBuild command-line reference](https://msdn.microsoft.com/library/ms164311.aspx).

## Platform Centered Workflow

If you want to use Cordova's Windows-centered shell tools in conjunction with the SDK, you have two basic options:

- Access them locally from project code generated by the CLI. They are
  available in the `platforms/windows/` directory after you add
  the `windows` platform as described below.

- Download them from a separate distribution
  [here](https://www.apache.org/dist/cordova/platforms/).
  The Cordova distribution contains separate archives for each platform.
  Be sure to expand the appropriate archive, `cordova-windows` in
  this case, within an empty directory.  The relevant batch utilities
  are available in `package/bin` directory. (Consult the
  __README__ file if necessary for more detailed directions.)

These shell tools allow you to create, build, and run Windows apps. Each cordova command corresponds to one of these shell tool scripts.

For example, the lower-level shell-tool approach corresponding to `cordova create HelloWorld` is:

```
C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello HelloWorld
```

Similarly for `cordova build --debug`:

```
C:\path\to\project\cordova\build.bat --debug
```

## Upgrading

Refer to [this](upgrade.html) article for instructions to upgrade your `cordova-windows` version.

## Supporting Toasts

Windows requires an app manifest capability declaration in order to support
toast notifications.  When using the `cordova-plugin-local-notifications`
plugin, or any other plugin that is attempting to use toast notifications,
add the following preference to your config.xml to enable it to publish
toast notifications, unless the plugin makes that change on it's own:

```xml
<preference name="WindowsToastCapable" value="true" />
```

This preference sets the corresponding flag in your app manifest. Plugins
should do the work necessary to configure the appearance of the
displayed notifications.

## Understanding Remote Mode vs Local Mode

Windows 10 introduces a new feature called "Remote mode" for HTML applications. Prior to it, Windows 8.1 apps
worked on what is now termed as "Local Mode" in Windows 10, in which HTML Applications have full access to the native
Windows API surface and capabilities. Local Mode disallows inline script in order to prevent script injection attacks,
which could result in leaking personally-identifiable information due to malicious code. It also requires developers who
perform DOM manipulation to do so within an explicit context
(`MSApp.execUnsafeLocalFunction`).

Remote Mode eliminates those requirements, which makes it possible to use unmodified libraries like jQuery
or AngularJS directly in your code, without any changes.  To do so, it removes your ability to declare certain
capabilities when certifying your app in the Windows Store.  The removal of these capabilities usually doesn't
prevent accessing certain functionality, but it might require the use of a different combination of APIs or tactics.

### Effect of Remote Mode on capabilities

The following capabilities are unavailable when deploying your Remote Mode application to the Windows Store:

- Enterprise Authentication (`enterpriseAuthentication`)
- Shared User Certificates (`sharedUserCertificates`)
- Documents Library (`documentsLibrary`)
- Music Library (`musicLibrary`)
- Pictures Library (`picturesLibrary`)
- Videos Library (`videosLibrary`)
- Removable [Storage](../../../cordova/storage/storage.html) (`removableStorage`)
- Internet client/server (`internetClientServer`) - note that `internetClient` is still permitted
- Private network client/server (`privateNetworkClientServer`)

Each of the library restrictions may be worked around by requesting that the user interact with the file system via a [File Picker](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx).  This prevents malicious injected code from arbitrarily accessing the file system.

The network-related restrictions must be worked around by either using an API that doesn't use capability checks or by brokering communication via standard internet communication channels, such as `XMLHttpRequest` or Web Sockets.

The Enterprise Authentication and Shared User Certificates capabilities are specifically targeted at Enterprise scenarios.  These capabilities are supported for private/enterprise-enabled App Stores, so if you are building apps which are going to be deployed to an internal deployment mechanism, you can still support these.  However, they are not supported for Remote Mode apps in the public Windows Store.  When you build targeting Windows 10, if one of these capabilities is detected in your app manifest, a warning will be displayed.

### Scrolling in Local Mode

While scrolling of the WebView is enabled by default in "Remote mode" and on the other platforms, in "Local Mode" this is not the case. If scrolling is required in "Local Mode", it can be enabled using the CSS `overflow` property.


## Common Problems and Workarounds

### Visual Studio 2017 and `MSBuild v4.0 is not supported, aborting.`

The support for Visual Studio 2017 in Cordova Windows unfortunately is not very stable and Cordova Windows sometime can not find MSBuild, Visual Studio's command line build tools. If this affects you, when trying to build a Cordova Windows project you will get an error message simlar to this:

```
MSBuild v4.0 is not supported, aborting.
```

To work around this problem, we implemented two environment variables that you can set to tell Cordova Windows where to look. 
- The first is `VSINSTALLDIR `and should be set to the installation directory of your Visual Studio (e.g. `C:\Program Files (x86)\Microsoft Visual Studio\2017\Community`). 
- If this doesn't work, the second one is called `MSBUILDDIR` and describes the path of your MSBuild `bin` directory (which is most often found at `C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin`).

You can either set the environment variable on demand manually by executing `set KEY=VALUE` (e.g. `set MSBUILDDIR=C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin`) or [set it permanently via the "System Properties"](https://www.computerhope.com/issues/ch000549.htm).

[1]: https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx
[2]: https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx
[Visual Studio]: https://visualstudio.microsoft.com/vs/older-downloads/
[Windows]: https://www.microsoft.com/windows

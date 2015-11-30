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

title: Cordova for Windows 10 #
---

# Cordova for Windows 10 #
Maybe you could instead call it "Windows 10 for Cordova."  Windows 10 has had its HTML and
JavaScript Apps platform re-engineered to bring Cordova support to the web, and to get
platform security restrictions out of your way.

## Getting Started with Windows 10 ##
Adding Windows 10 support to your app is as easy as setting your Windows target platform
version to 10.0:

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />

When you build with these preferences both set, only a single .appx (and .appxupload) will
be built.  They will require Windows 10 at a minimum.

### Understanding Remote Mode vs. Local Mode ###
Remote Mode is a new feature of the HTML Applications for Windows platform in Windows 10.  In
Windows 8 and 8.1, HTML Applications worked in what is called "Local Mode" in Windows 10.  In
Local Mode, HTML Applications have full access to the native Windows API surface and
capabilities.  In order to prevent script injection attacks which could result in leaking
personally-identifiable information due to malicious code, Local Mode disallows inline script,
and requires developers who perform DOM manipulation to do so within an explicit context
(`MSApp.execUnsafeLocalFunction`).

Remote Mode eliminates those requirements, which makes it possible to use unmodified libraries like jQuery or AngularJS directly in your code, without any changes.  To do so, it removes your ability to declare certain capabilities when certifying your app in the Windows Store.  The removal of these capabilities usually doesn't prevent getting to certain functionality, but it might require to use a different combination of APIs or tactics.

### Effect of Remote Mode on capabilities ###
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

## Reference ##

### config.xml Preferences ###

#### windows-target-version, windows-phone-target-version ####
    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />

*At least one is required.*

These preferences identify the version of Windows or Windows Phone you would like your
app package to target.

**Valid Values**

- `10.0`, `UAP`: Builds for Windows 10 Universal App Platform
- `8.1`: Builds for Windows 8.1 or Windows Phone 8.1
- `8.0`: Build for Windows 8.0.  Not valid for Windows Phone (use the **wp8** Cordova
platform instead)

**Scenarios**

If you are targeting Windows 10 only, you only need to have a single `windows-target-version`
setting in your config.xml file.

#### WindowsDefaultUriPrefix ####
    <preference name="WindowsDefaultUriPrefix" value="ms-appx://|ms-appx-web://" />

This preference identifies whether you want your app to target the **local context** or **remote
context** as its startup URI.  When building for Windows 10, the default is the remote
context (`ms-appx-web://`).

In order to have a local-mode application that is not impacted by Remote Mode capability
restrictions, you must set this preference to `ms-appx://` and not declare any `<access>`
elements with remote URIs.

**Valid Values**

- `ms-appx://` (Default for Windows 8.0, 8.1): The start page runs in the local context
- `ms-appx-web://` (Default for Windows 10): The start page runs in the remote context

#### {SDK}-MinVersion, {SDK}-MaxVersionTested ####
*Optional*

    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
    <preference name="Windows.Mobile-MinVersion" value="10.0.9927.0" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Microsoft.Band-MinVersion" value="10.0.11.0" />

These preferences identify which ecosystems (including but not limited to Windows Universal, Windows Mobile, or Xbox) and their min/max versions they are compatible with.  They still require that the platforms have support for the Universal App Platform (so Windows 10 as the base OS).  However, these may indicate that the application is aware of particular functionality that may only be available on certain devices (such as game streaming on Xbox).

**Valid Values**

There are three parts to each value: the **SDK**, the **version restriction**, and the **version value**.  These preferences are detected by beginning with `Windows` or `Microsoft` and ending in `-MinVersion` or `-MaxVersionTested`:

- The **SDK** defines what specialized platform you want to target.  The default is `Windows.Universal`.  Valid values for these are defined in the AppxManifest schema, in the `Package/Depednencies/TargetPlatform` elements.
- The **version restriction** defines application compatibility rules.  For example, if the `-MinVersion` is set to 10.1.0.0, then OS versions which don't support at least 10.1.0.0 of the corresponding SDK won't be able to load it.
	- `-MinVersion` specifies the minimum version of the SDK required
	- `-MaxVersionTested` specifies the highest-tested version of the SDK.  If a new version of the corresponding SDK is released, it will run in compatibility mode for the specified version.
- The **version value** is a 4-integer tuple in the form of *major.minor.build.qfe*.

If no preferences of these types are specified in your config.xml file, then Windows.Universal version 10.0.0.0 will be chosen by default.

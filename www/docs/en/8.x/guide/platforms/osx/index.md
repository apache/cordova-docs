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

title: OS X Platform Guide
toc_title: OS X
---

# OS X Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps for OS X computers. See the
following for more detailed platform-specific information:

* [OS X Configuration](config.html)
* [OS X Plugins](plugin.html)

The command-line tools above refer to versions prior to Cordova 3.0.
See [The Command-Line Interface](../../cli/index.html) for information about the
current interface.

## Requirements and Support

Apple® tools required to build OS X applications run only on the OS X
operating system on Intel-based Macs. Xcode® 6.0 (the minimum required
version) runs only on OS X version 10.9 (Mavericks) or greater, and
includes the OS X SDK (Software Development Kit). To submit apps to
the Apple App Store℠ requires the latest versions of the Apple tools.

You can test all of the Cordova features using the XCode or any other
IDE such as [JetBrain's AppCode](https://www.jetbrains.com/objc/), but
you need to use XCode to sign before submitting to the
App Store. To sign the apps, you must also be a member of Apple's
[OS X Developer Program](https://developer.apple.com/osx/).

## Install the SDK

There are two ways to download Xcode:

* from the [App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12),
  available by searching for "Xcode" in the __App Store__ application.

* from [Apple Developer Downloads](https://developer.apple.com/downloads/index.action),
  which requires registration as an Apple Developer.

Once Xcode is installed, several command-line tools need to be enabled
for Cordova to run. From the __Xcode__ menu, select __Preferences__,
then the __Downloads__ tab. From the __Components__ panel, press the
__Install__ button next to the __Command Line Tools__ listing.

## Create a New Project

Use the `cordova` utility to set up a new project, as described in The
Cordova [The Command-Line Interface](../../cli/index.html). For example, in a source-code directory:

```bash
$ cordova create hello com.example.hello "HelloWorld"
$ cd hello
$ cordova platform add osx
$ cordova prepare              # or "cordova build"
```

## Run the app

To run the app on your desktop:

```bash
$ cordova run
```

And you should see a bordered window with the example app:

![]({{ site.baseurl }}/static/img/guide/platforms/osx/helloworld_run.png)

You can also use __cordova run --help__ to see additional build and run
options.

## Open a Project in the SDK

Once osx platform is added to your project, you can open it from
within Xcode. Double-click to open the `hello/platforms/osx/HelloWorld.xcodeproj`
file. The screen should look like this:

![]({{ site.baseurl }}/static/img/guide/platforms/osx/helloworld_project.png)

> **TIP**
> You can also use the `open` command to open the XCode project directly
> from the command line:
> ```
> $ open platforms/osx/HelloWorld.xcodeproj
> ```

## Common Problems

__Deprecation Warnings__: When an application programming interface
(API) is changed or replaced by another API, it is marked as
_deprecated_.  The API still works in the near term, but is eventually
removed.  Some of these deprecated interfaces are reflected in Apache
Cordova, and Xcode issues warnings about them when you build and
deploy an application.

__Missing Headers__: Compilation errors relating to missing headers
result from problems with the build location, and can be fixed
via Xcode preferences:

1. Select __Xcode &rarr; Preferences &rarr; Locations__.

2. In the __Derived Data__ section, press the __Advanced__ button and
   select __Unique__ as the __Build Location__ as shown here:

   ![]({{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png)

This is the default setting for a new Xcode install, but it may be set
differently following an upgrade from an older version of Xcode.

For further information, consult Apple's documentation:

* [Member Center home page](https://developer.apple.com/membercenter/index.action)
   provides links to several OS X technical resources including
   technical resources, the provisioning portal, distribution guides
   and community forums.

* [Xcode User Guide](http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215)

* The [xcode-select command](http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html),
  which helps specify the correct version of Xcode if more than one is installed.

(Mac®, OS X®, Apple®, Xcode®, App Store℠, iPad®, iPhone®, iPod® and  Finder® are Trademarks of Apple Inc.)


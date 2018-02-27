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

title: Ubuntu Platform Guide
toc_title: Ubuntu
---

# Ubuntu Platform Guide

This guide shows how to set up a development environment for creating Cordova applications for Ubuntu.

You will need an Ubuntu system for building applications, either running natively or in a virtual machine. You will also need an Ubuntu phone for testing your application, though an emulator can be used for basic verifications.

## Development Platform Requirements

### Minimum and Recommended Versions

Developing Cordova apps requires a system running Ubuntu.

The recommended environment is Ubuntu 16.04 LTS, running NodeJS 4.2.x and NPM 2.15.x. 

Packages are still available for systems running the previous LTS release (14.04) but some components like NodeJS or phablet-shell may not support all of the latest options.

The target environment is an Ubuntu phone, supporting at least the ubuntu-sdk-api-15.04 framework. All phones on the market, or development images, support that framework by default.

The cordova-ubuntu platform support code requires at least cordova-cli 4.3.1. This is the minimum and recommended version at the time of this writing. cordova-ubuntu 4.3.x releases are all compatible with that tool release.

For the latest information on Cordova app support for Ubuntu runtime platforms,
see [wiki.ubuntu.com/Cordova](http://wiki.ubuntu.com/Cordova).

## Installing the Development Environment

### Install Ubuntu

Installation images of Ubuntu 16.04 LTS are available at http://www.ubuntu.com/download

The simplest option is to download an Ubuntu Desktop image.

In any case, the Debian packaging system will ensure that all underlying dependencies for the development environment will be installed. This lets you also install a build environment from an Ubuntu server installation as well.

### Ubuntu Virtual Machine (optional)

Ubuntu can also be used in a virtual machine.

You can get an Ubuntu instance on all of the leading public clouds. In fact, Ubuntu is the most popular cloud operating system (http://www.ubuntu.com/cloud/public-cloud). Running in the cloud will let you build your Cordova application. However you will still need to connect a local instance to a phone via USB for testing your app.

You can also install Ubuntu in local VM, with Virtualbox, VMWare or Parallels on either Windows or Mac OS. That configuration lets you re-direct a USB port inside the virtual machine, to let the Ubuntu build system access the Ubuntu phone hardware and install the app for testing.

Refer to the documentation for either your public cloud of choice, or the local virtual machine for the details of the installation procedure.

Once you have a basic Ubuntu VM set up, you can install the rest of the required elements below.

### Node and NPM

Ubuntu 16.04 LTS comes with the required versions of both NodeJS and NPM. To install simlpy do:

```bash
$ sudo apt-get install nodejs npm
$ node -v
v.4.2.6
$ npm -v
2.15.6
```

### Cordova CLI

The Cordova command line interface can be installed either via npm, or you can use a pre-packaged version available specifically for Ubuntu.

The recommended installation path is to use the pre-packaged version for Ubuntu, as it generally contains Ubuntu specific fixes which may not all have been merged upstream.

Installing the cordova-cli deb package requires to:
1. Add the Ubuntu Cordova
[Personal Package Archive](https://launchpad.net/~cordova-ubuntu/+archive/ppa)
to your Ubuntu system
1. Install the cordova-cli package (and its dependencies)

```bash
$ sudo apt-add-repository ppa:cordova-ubuntu/ppa
$ sudo apt-get update
$ sudo apt-get install cordova-cli
```

### Add an Ubuntu "click chroot"

The build environment needs to be separated from the developer's environment, to prevent unwanted side effects and provide a clean, repeatable process.

Ubuntu devices currently use the click packaging system.

To produce click packages, a "click chroot" is required. It is a separate build environment designed to produce binaries, by having a build tools and dependencies contained inside a chroot.

Generally, a click chroot hosts cross-compilation tools which can produce binaries for a different architecture (like armhf) than the one of the developer's system (generally x86).

Last, the click chroot will need to be provisionned with libraries, or more generally "frameworks", corresponding to the target environment.

Ubuntu devices will support the ubuntu-sdk-15.04 framework or later versions.

### Create a click chroot environment

```bash
$ sudo apt-add-repository ppa:ubuntu-sdk-team/ppa
$ sudo apt-get update
# this will create a clean click chroot build environment
sudo apt-get install click-dev phablet-tools ubuntu-sdk-api-15.04
```

### Add build dependencies for Cordova

```bash
# add build dependencies inside the click chroot
sudo click chroot -a armhf -f ubuntu-sdk-15.04 install cmake libicu-dev:armhf pkg-config qtbase5-dev:armhf qtchooser qtdeclarative5-dev:armhf qtfeedback5-dev:armhf qtlocation5-dev:armhf qtmultimedia5-dev:armhf qtpim5-dev:armhf libqt5sensors5-dev:armhf qtsystems5-dev:armhf
```

### Ubuntu IDE (optional)

You may also want to install the Ubuntu QtCreator development environment. See
[developer.ubuntu.com](http://developer.ubuntu.com) for more info. (The
QtCreator SDK is not required to add Ubuntu platform support to your Cordova
app.)


## Project Workflow

To test your installation, or simply to start developing an application, you can follow the steps below.

### Create a project

Creates an app in a `hello` directory whose display name is
`HelloWorld`:

```bash
$ cordova create helloworld helloworld.ubuntudeveloper HelloWorld
$ cd hello
$ cordova platform add ubuntu
```

Note that Ubuntu applications use a pair <appname>.<username> as a naming convention.

### Add a Plugin

```bash
$ cordova plugin add cordova-plugin-camera
```

### Build for Ubuntu devices

```bash
$ cordova build --device
```

You can see detailed build logs with the following options:
```bash
$ cordova -d build --device -- --verbose
```

You can build your app for a different target framework by specifying the option below:
```bash
$ cordova -d build --device -- --framework=ubuntu-sdk-16.04
```

Note that for the latter to work, you will need to have a corresponding click chroot installed on your build system.

### Run the App on an Ubuntu device

```bash
$ cordova run --device
```

This will:
1. build the app for the device target
1. package it using the click packaging system
1. transfer the app on the device
1. stop the app if it was already running
1. install the app
1. start the app


## Debugging

You can enable chrome devtools support to debug your app, by adding the --debug flag:

```bash
$ cordova run --device --debug
```

Then simply connect to the URL mentioned in the logs.

## Publishing your app

Once you have finished developing and testing your app, you can publish it on the Ubuntu App Store.

### Generate and verify the package

Your app is already packaged in a format compatible with the app store. Just find the .click package generate by the cordova-ubuntu build system:

```bash
$ cordova build --device
$ find -name "*.click"
```

You can manually verify that the package passes all verification steps enforced by the Ubuntu App Store system, by using the click-reviewer-tools:

```bash
$ click review -v <click file>
```

Note: this step is done automatically by the build system as well.

### Sign up and upload to the app store

You need to first create a free developer account on the Ubuntu App Store.

Then you will be able to upload your package to the store and make it available to all users of Ubuntu devices.

The full process is documented online at https://developer.ubuntu.com/en/publish/



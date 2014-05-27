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

# Ubuntu Platform Guide

## Initial Release

Welcome to the initial release of Ubuntu platform support in
Cordova. With this release, the focus is developing on an Ubuntu
system and using the cross-platform workflow discussed in the
Overview.  This includes adding the Ubuntu platform to your project,
adding standard Cordova plugins, and building and running apps for the
Ubuntu platform.

### Ubuntu SDK

You may also want to install the Ubuntu QtCreator development environment. See
[developer.ubuntu.com](http://developer.ubuntu.com) for more info. (The
QtCreator SDK is not required to add Ubuntu platform support to your Cordova
app.)

### Ubuntu Runtime Platforms

Ubuntu is well known for its Desktop environment (for laptops, PCs and such).
Ubuntu Touch extends the Ubuntu OS onto phones and tablets. Ubuntu runtime
platforms have varying CPU architectures (x86, armhf, etc.). App and plugin
code must be compiled appropriately. Support for this broad area is rapidly
evolving in Ubuntu.

### Latest Information

For the latest information on Cordova app support for Ubuntu runtime platforms,
see [wiki.ubuntu.com/Cordova](http://wiki.ubuntu.com/Cordova).

## Development Platform Requirements

For this initial release, the development platform should be an Ubuntu Desktop.
Ubuntu 13.10 (codename ‘saucy’) or later is required to enjoy the full set of
supported capabilities.

You can install Cordova on non-Ubuntu systems (using npm), but important
capabilities are only provided through Ubuntu debian packages at this time.

## Cordova Installation

Add the Ubuntu Cordova
[Personal Package Archive](https://launchpad.net/~cordova-ubuntu/+archive/ppa)
to your Ubuntu system:

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update

Install cordova-cli package (and its dependencies):

    $ sudo apt-get install cordova-cli

## Project Workflow

### Create a project

Creates an app in a `hello` directory whose display name is
`HelloWorld`:

    $ cordova create hello com.example.hello HelloWorld

### Move into the Project Directory

    $ cd hello

### Add the Ubuntu Platform

    $ cordova platform add ubuntu

### Build for Ubuntu

    $ cordova build ubuntu

### Run the App

    $ cordova run ubuntu

### Add the Battery Status Plugin

    $ cordova plugin add org.apache.cordova.battery-status


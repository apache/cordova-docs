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

Cordova Command Primer
======================

## Prerequisites

* Install [Node.js](http://nodejs.org/).

* Install platform SDKs

  * [BlackBerry](http://developer.blackberry.com/)

  * [iOS](http://developer.apple.com/)

  * [Android](http://developer.android.com/)

        Also you will need the SDK's tools and platform-tools directories
        on your system path otherwise Android support will fail

* Install cordova

        $ sudo npm install -g cordova

## create a project

* Create a `HelloWorld` project directory:

        $ cordova create HelloWorld com.example.hello "Hello World"

## add a platform


## ios


ulothrix:HelloWorld sierra$ cordova platform add ios

ulothrix:HelloWorld sierra$ cordova platform ls
[ 'ios' ]

ulothrix:HelloWorld sierra$ cordova emulate
[Error: An error occurred while emulating/deploying the ios project.Error: ios-sim was not found. Please download, build and install version 1.4 or greater from https://github.com/phonegap/ios-sim into your path. Or "brew install ios-sim" using homebrew: http://mxcl.github.com/homebrew/

## Android

ulothrix:HelloWorld sierra$ cordova platform add android
[Error: Your system does not meet the requirements to create android projects: undefined]
ulothrix:HelloWorld sierra$ 

## Blackberry

ulothrix:HelloWorld sierra$ cordova platform add blackberry
Looks like we need some of your BlackBerry development environment information. We'll just ask you a few questions and we'll be on our way to building.
prompt: Enter the full path to your BB10 bbwp executable:  
error:   Invalid input for Enter the full path to your BB10 bbwp executable
prompt: Enter the full path to your BB10 bbwp executable:  

## Windows

fish around for platforms?



## Synopsis

    cordova command [options]

Global Commands

    create [path] [id] [name] ......... creates a cordova project in the specified directory optional name and id (package name, reverse-domain style)
    -v ................................ prints out this utility's version

Project-Level Commands

    platform(s) [add|remove|ls [name]] ... adds or removes a platform, or lists all currently-added platforms
    plugin(s) [add|remove|ls [path]] ..... adds or removes a plugin (from the specified path), or lists all currently-added plugins
    prepare [platform...] ............. copies files into the specified platforms, or all platforms.
                                        it is then ready for building by Eclipse/Xcode/etc.
    compile [platform...] ............. builds the app for the specified (or all) platforms
    build ............................. alias for prepare and then compile
    emulate ........................... starts emulator for cordova project
    serve <platform> [port] ........... runs a local web server for the www/ directory of the given platform
                                        the default port is 8000
                                        note that you must edit the native code to point at the server!
    ripple <platform> [port] .......... uses the serve command as a base and then wraps the server
                                        with ripple to test your app in your desktop browser.
    help .............................. shows this!

Example usage

    $ cordova create Baz
    $ cd Baz
    $ cordova platform add android
    $ cordova build
    $ cordova serve android


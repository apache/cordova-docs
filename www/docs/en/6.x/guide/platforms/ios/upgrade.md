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

title: Upgrading iOS
---

# Upgrading iOS

This guide shows how to modify iOS projects to upgrade from older
versions of Cordova.  Most of these instructions apply to projects
created with an older set of command-line tools that precede the
`cordova` CLI utility. See [The Command-Line Interface](../../cli/index.html) for information
how to update the version of the CLI.

__NOTE__: Xcode 6 is required. Currently, to submit to the
Apple App Store, you should use the latest shipped version of the iOS SDK, which is iOS 8 and this is included only with Xcode 6.

## Upgrading 3.6.0 Projects to 4.0.0

For non-CLI projects, run:

```
bin/update path/to/project
```

For CLI projects:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update ios` in your existing projects.


## Upgrading 3.3.0 Projects to 3.4.0

For non-CLI projects, run:

```
bin/update path/to/project
```

For CLI projects:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update ios`

## Upgrading 3.2.0 Projects to 3.3.0

For non-CLI projects, run:

```
bin/update path/to/project
```

For CLI projects:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update ios`

## Upgrading 3.1.0 Projects to 3.2.0

For non-CLI projects, run:

```
bin/update path/to/project
```

For CLI projects:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update ios`


## Upgrading 3.0.0 Projects to 3.1.0

For non-CLI projects, run:

```
bin/update path/to/project
```

For CLI projects:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update ios`

iOS 7 Issues:

1. Remove `width=device-width, height=device-height` from the
   `index.html` file's `viewport` `meta` tag. (See [the relevant
   bug](https://issues.apache.org/jira/browse/CB-4323).)

2. Update your media, media-capture and splashscreen core plugins for
   iOS 7 support.

Xcode 5 Issues:

1. Update your Project Settings if Xcode 5 prompts you to do so (in the Issues Navigator).

2. Update your __Compiler for C/C++/Objective-C__ setting, under the
   __Build Settings__ tab, __Build Options__ section. Choose __Default
   compiler (Apple LLVM 5.0)__.

## Upgrade to the CLI (3.0.0) from 2.9.0

1. Create a new Apache Cordova 3.0.0 project using the cordova CLI, as
   described in [The Command-Line Interface](../../cli/index.html).

2. Add your platforms to the cordova project, for example: `cordova
   platform add ios`.

3. Copy the contents of the project's `www` directory to the `www` directory
   at the root of the cordova project you just created.

4. Copy or overwrite any native assets from your original project
   (`Resources`, etc.), making sure to add any
   new files to the `.xcodeproj` project. The iOS project builds
   inside the `platforms\ios` directory.

5. Copy the `config.xml` into the `www` directory, and remove any plugin
   definitions. Modify settings here instead of the platform directory.

6. Use the cordova CLI tool to install any plugins you need. Note that
   the CLI handles all core APIs as plugins, so they may need to be
   added. Only 3.0.0 plugins are compatible with the CLI.

7. Build and test.

## Upgrading 2.9.0 Projects to 3.0.0

1. Download and extract the Cordova 3.0.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-3.0.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

5. Copy the `www/cordova.js` (note that it does not have a version suffix anymore, the version is in the file itself in the header) file from the new project into the `www` directory, and delete the `www/cordova.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova.js` file.

7. Delete the `CordovaLib` directory, and copy the `CordovaLib` directory from the new project into your project's root directory.

__NOTE__: Starting with Cordova 3.0.0, plugins are not pre-installed,
and you need to use the `plugman` command-line utility to install them
yourself. See [Using Plugman to Manage Plugins](../../../plugin_ref/plugman.html).

## Upgrading 2.8.0 Projects to 2.9.0

1. Download and extract the Cordova 2.9.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-2.9.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

5. Copy the `www/cordova.js` (note that it does not have a version suffix anymore, the version is in the file itself in the header) file from the new project into the `www` directory, and delete the `www/cordova.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova.js` file.

7. Delete the `CordovaLib` directory, and copy the `CordovaLib` directory from the new project into your project's root directory.

## Upgrading 2.7.0 Projects to 2.8.0

1. Download and extract the Cordova 2.8.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-2.8.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

5. Copy the `www/cordova.js` (note that it does not have a version suffix anymore, the version is in the file itself in the header) file from the new project into the `www` directory, and delete the `www/cordova-2.7.0.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova.js` file.

7. Update any `<plugin>` tags in the `config.xml` file to `<feature>`
   tags. Note that existing `<plugin>` tags still work, but are
   deprecated. You can copy this information in the `config.xml` file
   for a new project. For example:

    ```xml
    <plugins>
        <plugin name="LocalStorage" value="CDVLocalStorage" />
        <!-- other plugins -->
    </plugins>

    <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>
    <!-- other <feature> tags -->
    ```

8. Delete the `CordovaLib` directory, and copy the `CordovaLib` directory from the new project into your project's root directory.

9. Add these two frameworks to your project:

    ```
    OpenAL
    ImageIO
    ```

10. Update your project's target __Build Settings__. Under __Linking &rarr; Other Linker Flags__, edit __"-Obj-C"__ to be __"-ObjC"__.

11. Update your project's target __Build Settings__. Under __Linking &rarr; Other Linker Flags__, change __"-all\_load"__ to be `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a`. You would only need to do this if you have the problem defined in [this issue.](https://issues.apache.org/jira/browse/CB-3458).

## Upgrading 2.6.0 Projects to 2.7.0

1. Download and extract the Cordova 2.7.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-2.7.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Create a new project, as described in [iOS Shell Tool Guide](tools.html). you need the assets from this new project.

5. Copy the `www/cordova-2.7.0.js` file from the new project into the `www` directory, and delete the `www/cordova-2.6.0.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-2.7.0.js` file.

7. Update (or replace, if you never changed the file) the `AppDelegate.m` file according to the one from the new project (see [this diff](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23)).

8. In the `config.xml` file, [remove this line](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc).

9. Delete the `CordovaLib` directory, and copy the `CordovaLib` directory from the new project into your project's root directory.

## Upgrading 2.5.0 Projects to 2.6.0

1. Download and extract the Cordova 2.6.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-2.6.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

5. Copy the project's `www/cordova-2.6.0.js` file into the `www` directory, and delete the `www/cordova-2.5.0.js` file.

6. Update the Cordova script reference in the `www/index.html` file (along with any other files that reference the script) to refer to the new `cordova-2.6.0.js` file.

7. Update (or replace, if you never changed the file) the `AppDelegate.m` file according to the one from the new project (see [this diff](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9)).

8. In the `config.xml` file, [add this new line](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d).

9. In the `config.xml` file, [add this new line](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f).

10. In the `config.xml` file, [UIWebViewBounce has been changed to DisallowOverscroll, and default values are different](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5).

10. In the `config.xml` file, the `EnableLocation` preference has been deprecated.

11. Delete the `CordovaLib` directory, and copy the `CordovaLib` directory from the new project into your project's root directory.

## Upgrading 2.4.0 Projects to 2.5.0

1. Download and extract the Cordova 2.5.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-2.5.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

5. Copy the `www/cordova-2.5.0.js` file from the new project into the `www` directory and delete the `www/cordova-2.4.0.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-2.5.0.js` file.

7. Update (or replace, if you never changed the file) the `AppDelegate.m` file according to the one from the new project (see [this diff](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09)).

8. In the `config.xml` file, [add these new lines](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb).

9. In the `config.xml` file, [edit the root element, change it from cordova to widget](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c).

10. In the `config.xml` file, [remove the OpenAllWhitelistURLsInWebView preference](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4).

11. Delete the `cordova` directory, and copy the `cordova` directory from the new project into your project's root directory. In 2.5.0, this has updated scripts.

12. Delete the `CordovaLib` directory, and copy the `CordovaLib` directory from the new project into your project's root directory.

## Upgrading 2.3.0 Projects to 2.4.0

1. Download and extract the Cordova 2.4.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-2.4.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

5. Copy the `www/cordova-2.4.0.js` file from the new project into the `www` directory, and delete the `www/cordova-2.3.0.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-2.4.0.js` file.

7. Update (or replace, if you never changed the files) the `MainViewController.m` file according to the one from the new project (see [this diff](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997)).

8. Update (or replace, if you never changed the file) the `AppDelegate.m` file according to the one from the new project (see [this diff](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d)).

9. In the `config.xml` file, [add this new line](https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d).

10. Delete the `cordova` directory, and copy the `cordova` directory from the new project into your project's root directory. In 2.4.0, this has fixed scripts.

11. Delete the `CordovaLib` directory, and copy the `CordovaLib` directory from the new project into your project's root directory.

12. Add AssetsLibrary.framework as a resource to your project.  (See [Apple's documentation](https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html) for instructions on how to do so.).

## Upgrading 2.2.0 Projects to 2.3.0

1. Download and extract the Cordova 2.3.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-2.3.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

5. Copy the `www/cordova-2.3.0.js` file from the new project into the `www` directory, and delete the `www/cordova-2.2.0.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-2.3.0.js` file.

7. Update (or replace, if you never changed the file) the `MainViewController.m` according to the one from the new project.

8. Delete the `cordova` directory, and copy the `cordova` directory from the new project into your project's root directory. In 2.3.0, this has new scripts.

9. Delete the `CordovaLib` directory, and copy the `CordovaLib` directory from the new project into your project's root directory.

10. Convert the `Cordova.plist` file to `config.xml`, by running the script `bin/cordova\_plist\_to\_config\_xml` on your project file.

11. Add the InAppBrowser plugin to the `config.xml`, by adding this tag under `<cordova><plugins>`:

    ```xml
    <plugin name="InAppBrowser" value="CDVInAppBrowser" />
    ```

12. Note that Objective-C plugins are _not_ whitelisted anymore. To whitelist your connections with the app whitelist, you need to set the `User-Agent` header of the connection to the same user-agent as the main Cordova WebView.
You can get this by accessing the `userAgent` property off the main view-controller. The main view-controller (`CDVViewController`) also has a `URLisAllowed` method for you to check whether a URL passes the whitelist.

13. Device API changes:
    - For iOS, device.platform used to return `iPhone`, `iPad` or `iPod Touch`; now it returns (correctly) `iOS`.
    - For iOS, device.name (now deprecated for all platforms) used to return the name of the user’s device (e.g. ‘Shazron’s iPhone 5′); now it returns what device.platform used to return: `iPhone`, `iPad` or `iPod Touch`.
    - For all platforms, there is a new property called device.model; this returns the specific device model, e.g. `iPad2,5` (for other platforms, this returns what device.name used to return).

## Upgrading 2.1.0 Projects to 2.2.0

1. Download and extract the Cordova 2.2.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-2.2.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

5. Copy the `www/cordova-2.2.0.js` file from the new project into the `www` directory, and delete the `www/cordova-2.1.0.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-2.2.0.js` file.

7. Update (or replace, if you never changed the file) the `MainViewController.m` according to the one from the new project:
    - Updated &rarr; viewWillAppear

8. Copy the `cordova` directory from the new project into your project's root directory. In 2.2.0, this has an updated 'emulate' script.

9. Next, update the `CordovaLib` sub-project reference. Beginning with Cordova 2.1.0, we are not using the CORDOVALIB Xcode variable anymore when referencing where `CordovaLib` resides, the reference is an absolute file reference now.
    1. Launch Terminal.app
    2. Go to the location where you installed Cordova (see Step 1), in the `bin` subdirectory
    3. Run the script below where the first parameter is the path to your project's `.xcodeproj` file:

        ```
        update_cordova_subproject path/to/your/project/xcodeproj
        ```

__NOTE__: In 2.2.0, the `bin/create` script copy in the `CordovaLib` sub-project into your project. To have the same kind of setup, just copy in the right `CordovaLib` into your project directory, and update the `CordovaLib` sub-project location (relative to the project) in the Xcode File Inspector.

## Upgrading 2.0.0 Projects to 2.1.0

With Cordova 2.1.0, `CordovaLib` has been upgraded to use __Automatic Reference Counting (ARC)__. You don't need to upgrade to __ARC__ to use CordovaLib, but if you want to upgrade your project to use __ARC__, please use the Xcode migration wizard from the menu: __Edit &rarr; Refactor &rarr; Convert to Objective-C ARC...__, de-select libCordova.a, then run the wizard to completion.

1. Download and extract the Cordova 2.1.0 source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova-2.1.0`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

5. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

6. Copy the `www/cordova-2.1.0.js` file from the new project into the `www` directory, and delete the `www/cordova-2.0.0.js` file.

7. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-2.1.0.js` file.

8. Update (or replace, if you never changed the file) the `AppDelegate.m` according to the one from the new project:
    - Edited &rarr; application:didFinishLaunchingWithOptions:
	- Added  &rarr; application:supportedInterfaceOrientationsForWindow:

9. Update (or replace, if you never changed the file) the `MainViewController.m` according to the one from the new project:
    - Added &rarr; viewWillAppear

10. Copy the `cordova` directory from the new project into your project's root directory. In 2.1.0, this has the updated scripts to support paths with spaces.

11. Remove the `VERSION` file reference from your project (_not_ the one in `CordovaLib`).

12. Next, update the `CordovaLib` sub-project reference. Beginning with Cordova 2.1.0, we are not using the CORDOVALIB Xcode variable anymore when referencing where `CordovaLib` resides, the reference is an absolute file reference now.
    1. Launch Terminal.app
    2. Go to the location where you installed Cordova (see Step 1), in the `bin` subdirectory
    3. Run the script below where the first parameter is the path to your project's `.xcodeproj` file:

        ```
        update_cordova_subproject path/to/your/project/xcodeproj
        ```

## Upgrading 1.9.0 Projects to 2.0.0

1. Install Cordova 2.0.0.

2. Create a new project, as described in [iOS Shell Tool Guide](tools.html). You need the assets from this new project.

3. Copy the `www/cordova-2.0.0.js` file from the new project into the `www` directory, and delete the `www/cordova-1.9.0.js` file.

4. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-2.0.0.js` file.

5. Copy the `cordova` directory from the new project into your project's root directory (if you want the project command-line tools).

6. Add a new entry under `Plugins` in the `Cordova.plist` file, under
   the __Supporting Files__ group. The key is `Device` and the value
   is `CDVDevice`.

7. Remove `Cordova.framework`.

8. Remove `verify.sh` from the __Supporting Files__ group.

9. Select the project icon in the Project Navigator, select your project __Target__, then select the __Build Settings__ tab.

10. Search for __Preprocessor Macros__, then remove all __CORDOVA_FRAMEWORK=1__ values.

11. Locate the `CordovaLib` directory that was installed in your hard-drive under your home folder's `Documents` subdirectory.

12. Locate the `CordovaLib.xcodeproj` file in the `CordovaLib` directory, then drag and drop the file into your project. It should appear as a sub-project.

13. Build your project, you should get some errors relating to `#import` directives.

14. For the `#import` errors, change any quote-based imports in this style:

    ```objective_c
    #import "CDV.h"
    ```

    to this brackets-based style:

    ```objective_c
    #import <Cordova/CDV.h>
    ```

    and remove any `#ifdef` wrappers around any Cordova imports, they are not needed anymore (the imports are now unified)

15. Build your project again, and it should not have any `#import` errors.

16. Select the __project icon__ in the Project Navigator, select your project __Target__, then select the __Build Phases__ tab.

17. Expand the __Target Dependencies__ phase, then select the __+__ button.

18. Select the `CordovaLib` target, then select the __Add__ button.

19. Expand the first __Link Binary with Libraries__ phase (it should already contain a bunch of frameworks), then select the __+__ button.

20. Select the `libCordova.a` static library, then select the __Add__ button.

21. Delete the __Run Script__ phase.

22. Select the __project icon__ in the Project Navigator, select your project __Target__, then select the __Build Settings__ tab.

23. Search for __Other Linker Flags__, and add the values __-force_load__ and __-Obj-C__.

24. Expand the `CordovaLib` sub-project.

25. Locate the `VERSION` file, drag it into your main project (we want to create a link to it, not a copy).

26. Select the __Create groups for any added folders__ radio button, then select the __Finish__ button.

27. Select the `VERSION` file that you just dragged in a previous step.

28. Type the __Option-Command-1__ key combination to show the __File Inspector__ (or menuitem __View &rarr; Utilities &rarr; Show File Inspector__).

29. Choose __Relative to CORDOVALIB__ in the __File Inspector__ for the drop-down menu for __Location__.

30. Set the Xcode preference __Xcode Preferences &rarr; Locations &rarr; Derived Data &rarr; Advanced...__ to __Unique__, so that the unified headers can be found.

31. Select the __project icon__ in the Project Navigator, select your __Target__, then select the __Build Settings__ tab.

32. Search for __Header Search Paths__. For that setting, append these three values, including quotes:

    ```bash
    "$(TARGET_BUILD_DIR)/usr/local/lib/include"

    "$(OBJROOT)/UninstalledProducts/include"

    "$(BUILT_PRODUCTS_DIR)"
    ```

33. Search for __Other Linker Flags__. For that setting, append this value:

    ```bash
    -weak_framework CoreFoundation
    ```

34. Build your project, it should compile and link with __no issues__.

35. Select your project from the __Scheme__ drop-down, and then select __iPhone 5.1 Simulator__.

36. Select the __Run__ button.

__NOTE__: If your project is not working as expected in the Simulator, please take a note of any errors in the console log in Xcode for clues.

## Upgrading 1.8.x Projects to 1.9.0

1. Install Cordova 1.9.0.

2. Create a new project. You will need some of the assets from this new project.

3. Copy the `www/cordova-1.9.0.js` file from the new project into the `www` directory, and delete the `www/cordova-1.8.x.js` file.

4. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-1.9.0.js` file.

__NOTE__: 1.9.0 supports the new `BackupWebStorage` boolean `Cordova.plist` setting. It's enabled by default, so set it to
`false` to disable it, especially on iOS 6. See [Release Notes: Safari and UIKit Section](https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html)

## Upgrading 1.7.0 Projects to 1.8.x

1. Install Cordova 1.8.0.

2. Create a new project. You will need some of the assets from this new project.

3. Copy the `www/cordova-1.8.0.js` file from the new project into the `www` directory, and delete the `www/cordova-1.7.x.js` file.

4. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-1.8.0.js` file.

If you intend on using the Capture API, you will need the new __iPad retina-display__ assets:

1.  Copy the `Resources/Capture.bundle` item from the new project into your project directory, over-writing your existing `Resources/Capture.bundle` item.

2.  In your project, select the `Capture.bundle` item into your Project Navigator in Xcode, type the __Delete__ key, then select __Remove Reference__ from the resulting dialog.

3.  Drag the new `Capture.bundle` from Step 1 above into your Project Navigator in Xcode, then select the __Create groups for any added folders__ radio button.

## Upgrading 1.6.x Projects to 1.7.0

1. Install Cordova 1.7.0.

2. Create a new project. You will need some of the assets from this new project.

3. Copy the `www/cordova-1.7.0.js` file from the new project into the `www` directory, and delete the `www/cordova-1.6.0.js` file.

4. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-1.7.0.js` file.

## Upgrading 1.5.0 Projects to 1.6.x

1. Install Cordova 1.6.1.

2. Make a backup of `AppDelegate.m`, `AppDelegate.h`, `MainViewController.m`, `MainViewController.h`, and `Cordova.plist` in your project.

3. Create a new project. You will need some of the assets from this new project.

4. Copy these files from the new project into your 1.5.0-based project directory on disk, replacing any old files (backup your files first from step 2 above):

    ```
    AppDelegate.h
    AppDelegate.m
    MainViewController.h
    MainViewController.m
    Cordova.plist
    ```

5. Add all the new `MainViewController` and `AppDelegate` files into your Xcode project.

6. Copy the `www/cordova-1.6.1.js` file from the new project into the `www` directory, and delete the `www/cordova-1.5.0.js` file.

7. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-1.6.1.js` file.

8. Add the new `Cordova.plist` file into your project. This is
   necessary because the core plugin service names must change to
   match the ones from Android and BlackBerry, for a unified Cordova
   JavaScript file (`cordova-js`).

9. Integrate any settings, __Plugins__ and __ExternalHosts__ entries that you had in your __backed-up Cordova.plist__ into the new `Cordova.plist`.

10. Integrate any project-specific code that you have in your backed-up `AppDelegate.h` and `AppDelegate.m` into the new `AppDelegate` files. Any `UIWebViewDelegate` or `CDVCommandDelegate` code in `AppDelegate.m` needs to go into `MainViewController.m` now (see commented-out sections in that file).

11. Integrate any project-specific code that you have in your backed-up `MainViewController.h` and `MainViewController.m` into the new MainViewController files.

12. Click on the project icon in the Project Navigator, select your __Project__, then select the __Build Settings__ tab.

13. Enter __Compiler for C/C++/Objective-C__ in the search field.

14. Select the __Apple LLVM Compiler 3.1__ value.

## Upgrading 1.4.x Projects to 1.5.0

1. Install Cordova 1.5.0.

2. Create a new project and run it once. You will need some of the assets from this new project.

3. Copy the `www/cordova-1.5.0.js` file from the new project into the `www` directory, and delete the `www/phonegap-1.4.x.js` file.

4. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new Cordova `cordova-1.5.0.js` file.

5. Find `PhoneGap.framework` in your Project Navigator, select it.

6. Type the __Delete__ key and delete the `PhoneGap.framework` reference in the Project Navigator.

7. Type the __Option-Command-A__ key combination, which should drop down a sheet to add files to your project (the __Add Files...__ sheet). Make sure the __Created groups for any added folders__ radio button is selected.

8. Type the __Shift-Command-G__ key combination, which should drop down another sheet for you to go to a folder (the __Go to the folder:__ sheet).

9. Enter `/Users/Shared/Cordova/Frameworks/Cordova.framework` in the __Go to the folder:__ sheet and then press the __Go__ button.

10. Press the __Add__ button in the __Add Files...__ sheet.

11. Select `Cordova.framework` in the Project Navigator.

12. Type the __Option-Command-1__ key combination to show the __File Inspector__.

13. Choose __Absolute Path__ in the __File Inspector__ for the drop-down menu for __Location__.

14. Type the __Option-Command-A__ key combination, which should drop down a sheet to add files to your project (the __Add Files...__ sheet). Make sure the __Created groups for any added folders__ radio button is selected.

15. Type the __Shift-Command-G__ key combination, which should drop down another sheet for you to go to a folder (the __Go to the folder:__ sheet).

16. Enter `~/Documents/CordovaLib/Classes/deprecated` in the __Go to the folder:__ sheet and then press the __Go__ button.

17. Press the __Add__ button in the __Add Files...__ sheet.

18. In the `AppDelegate.h`, `AppDelegate.m`, and `MainViewController.h` files, replace the whole `#ifdef PHONEGAP_FRAMEWORK` block with:

    ```objective_c
    #import "CDVDeprecated.h"
    ```

19. Click on the __project icon__ in the Project Navigator, select your __Target__, then select the __Build Settings__ tab.

20. Search for __Framework Search Paths__.

21. Replace the existing value with `/Users/Shared/Cordova/Frameworks`.

22. Search for __Preprocessor Macros__.

23. For the first (combined) value, replace the value with __CORDOVA_FRAMEWORK=YES__.

24. Select the __Build Phases__ tab.

25. Expand __Run Script__.

26. Replace any occurrences of __PhoneGap__ with __Cordova__.

27. Find the `PhoneGap.plist` file in the Project Navigator, and click on the filename once to enter name edit mode.

28. Rename `PhoneGap.plist` to `Cordova.plist`.

29. Right-click on `Cordova.plist` and choose __Open As &rarr; Source Code__.

30. Press __Option-Command-F__, choose __Replace__ from the drop-down on the top left of the Source window.

31. Enter `com.phonegap` for the Find string, and `org.apache.cordova`
    for the Replace string, then press the __Replace All__ button.

32. Enter __PG__ for the Find string, and __CDV__ for the Replace
    string, then press the __Replace All__ button.

33. Press __Command-B__ to build. You still have deprecations
    that you can get rid of in the future (see `CDVDeprecated.h`. For
    example, replace classes in your code that use PG* to CDV*).

## Upgrading 1.4.0 Projects to 1.4.1

1. Install Cordova 1.4.1.

2. Make a backup of `MainViewController.m`.

3. Create a new project. You will need some of the assets from this new project.

4. Copy the `MainViewController.m` file from the new project into your 1.4.0-based project directory on disk, replacing the old file (backup your files first from step 2 above).

5. Add the `MainViewController.m` file into your Xcode project.

6. Integrate any project-specific code that you have in your backed-up `MainViewController.m` into the new file.

7. Updating the `phonegap-1.4.0.js` file is optional, nothing has changed in the JavaScript between 1.4.0 and 1.4.1.

## Upgrading 1.3.0 Projects to 1.4.0

1. Install Cordova 1.4.0.

2. Make a backup of `AppDelegate.m` and `AppDelegate.h` in your project.

3. Create a new project. You will need some of the assets from this new project.

4. Copy these files from the new project into your 1.3.0-based project directory on disk, replacing any old files (backup your files first from step 2 above):

    ```
    AppDelegate.h
    AppDelegate.m
    MainViewController.h
    MainViewController.m
    MainViewController.xib
    ```

5. Add all the `MainViewController` files into your Xcode project.

6. Copy the `www/phonegap-1.4.0.js` file from the new project into the `www` directory, and delete the `www/phonegap-1.3.0.js` file.

7. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `phonegap-1.4.0.js` file.

8. Add a new entry under `Plugins` in the `PhoneGap.plist` file. The
   key is `com.phonegap.battery` and the value is `PGBattery`.

9. Integrate any project-specific code that you have in your backed-up `AppDelegate.h` and `AppDelegate.m` into the new AppDelegate files.

## Upgrading 1.2.0 Projects to 1.3.0

1. Install Cordova 1.3.0.

2. Make a backup of `AppDelegate.m` and `AppDelegate.h` in your project.

3. Create a new project. You will need some of the assets from this new project.

4. Copy these files from the new project into your 1.2.0-based project directory on disk, replacing any old files (backup your files first from step 2 above):

    ```
    AppDelegate.h
    AppDelegate.m
    MainViewController.h
    MainViewController.m
    MainViewController.xib
    ```

5. Add all the `MainViewController` files into your Xcode project.

6. Copy the `www/phonegap-1.3.0.js` file from the new project into the `www` directory, and delete the `www/phonegap-1.2.0.js` file.

7. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `phonegap-1.3.0.js` file.

8. Add a new entry under `Plugins` in the `PhoneGap.plist` file. The
   key is `com.phonegap.battery` and the value is `PGBattery`.

9. Integrate any project-specific code that you have in your backed-up `AppDelegate.h` and `AppDelegate.m` into the new AppDelegate files.

## Upgrading 1.1.0 Projects to 1.2.0

1. Install Cordova 1.2.0.

2. Make a backup of `AppDelegate.m` and `AppDelegate.h` in your project.

3. Create a new project. You will need some of the assets from this new project.

4. Copy these files from the new project into your 1.1.0-based project directory on disk, replacing any old files (backup your files first from step 2 above):

    ```
    AppDelegate.h
    AppDelegate.m
    MainViewController.h
    MainViewController.m
    MainViewController.xib
    ```

5. Add all the `MainViewController` files into your Xcode project.

6. Copy the `www/phonegap-1.2.0.js` file from the new project into the `www` directory, and delete the `www/phonegap-1.1.0.js` file.

7. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `phonegap-1.2.0.js` file.

8. Add a new entry under `Plugins` in the `PhoneGap.plist` file. The
   key is `com.phonegap.battery` and the value is `PGBattery`.

9. Integrate any project-specific code that you have in your backed-up `AppDelegate.h` and `AppDelegate.m` into the new AppDelegate files.

## Upgrading 1.0.0 Projects to 1.1.0

1. Install Cordova 1.1.0.

2. Make a backup of `AppDelegate.m` and `AppDelegate.h` in your project.

3. Create a new project. You will need some of the assets from this new project.

4. Copy these files from the new project into your 1.0.0-based project directory on disk, replacing any old files (backup your files first from step 2 above):

    ```
    AppDelegate.h
    AppDelegate.m
    MainViewController.h
    MainViewController.m
    MainViewController.xib
    ```

5. Add all the `MainViewController` files into your Xcode project.

6. Copy the `www/phonegap-1.1.0.js` file from the new project into the `www` directory, and delete the `www/phonegap-1.0.0.js` file.

7. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `phonegap-1.1.0.js` file.

8. Add a new entry under `Plugins` in the `PhoneGap.plist` file. The
   key is `com.phonegap.battery` and the value is `PGBattery`.

9. Integrate any project-specific code that you have in your backed-up `AppDelegate.h` and `AppDelegate.m` into the new AppDelegate files.

## Upgrading 0.9.6 Projects to 1.0.0

1. Install Cordova 1.0.0.

2. Make a backup of `AppDelegate.m` and `AppDelegate.h` in your project.

3. Create a new project. You will need some of the assets from this new project.

4. Copy these files from the new project into your 0.9.6-based project directory on disk, replacing any old files (backup your files first from step 2 above):

    ```
    AppDelegate.h
    AppDelegate.m
    MainViewController.h
    MainViewController.m
    MainViewController.xib
    ```

5. Add all the `MainViewController` files into your Xcode project.

6. Copy the `www/phonegap-1.0.0.js` file from the new project into the `www` directory, and delete the `www/phonegap-0.9.6.js` file.

7. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `phonegap-1.0.0.js` file.

8. Add a new entry under `Plugins` in the `PhoneGap.plist` file. The
   key is `com.phonegap.battery` and the value is `PGBattery`.

9. Integrate any project-specific code that you have in your backed-up `AppDelegate.h` and `AppDelegate.m` into the new AppDelegate files.
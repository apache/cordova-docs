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

# Upgrading Windows Phone

This guide shows how to modify Windows Phone projects, both versions 7
and 8, to upgrade from older versions of Cordova.  Most of these
instructions apply to projects created with an older set of
command-line tools that precede the `cordova` CLI utility. See The
Command-Line Interface for information how to update the version of
the CLI.  The following section shows how to upgrade from non-CLI
projects.

## Upgrade to 3.2.0 from 3.1.0

For projects that were created with the cordova CLI: 

1. Update the `cordova` CLI version. See The Command-Line Interface. 

2. Run `cordova platform update wp8` (or `wp7`, per the platforms you added to your project).
        
For projects not created with the cordova CLI, run:

        bin\update <project_path>

## Upgrade to 3.1.0 from 3.0.0

For projects that were created with the cordova CLI: 

1. Update the `cordova` CLI version. See The Command-Line Interface. 

2. Run `cordova platform update wp8` (or `wp7`, per the platforms you added to your project).
        
For projects not created with the cordova CLI, run:

        bin\update <project_path>

## Upgrade to the CLI (3.0.0) from 2.9.0

1. Create a new Apache Cordova 3.0.0 project using the cordova CLI, as
   described in The Command-Line Interface.

2. Add your platforms to the cordova project, for example: `cordova
   platform add wp7 wp8`.

3. Copy the contents of the project's `www` directory to the `www` directory
   at the root of the cordova project you just created.

4. Copy or overwrite any native assets from your original project
   (`SplashScreen`, `ApplicationIcon`, etc.), making sure to add any
   new files to the `.csproj` file. The windows phone project builds
   inside the `platforms\wp7` or `platforms\wp8` directory.

5. Use the cordova CLI tool to install any plugins you need. Note that
   the CLI handles all core APIs as plugins, so they may need to be
   added. Only 3.0.0 plugins are compatible with the CLI.

6. Build and test.

## Upgrade to 3.0.0 (non-CLI) from 2.9.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 or WP8 3.0.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Copy and overwrite any splash screen, or icon images.

4. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project. 

5. Build and test.

__NOTE__: all core APIs are removed from Cordova version 3.0, and must
be installed separately as plugins.  For more information on how to
re-enable these features in a non-CLI workflow, see Using Plugman to
Manage Plugins.

## Upgrade to 2.9.0 from 2.8.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 or WP8 2.9.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update the name of `cordova.js` in the HTML tag if it's still using cordova-VERSION.js (should be just `cordova.js`).

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the .csproj file.

6. Build and test.

## Upgrade to 2.8.0 from 2.7.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 or WP8 2.8.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update your HTML to use the new `cordova.js` file. (Note the lack of a version number in the filename.)

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project.

6. Build and test.

## Upgrade to 2.7.0 from 2.6.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 or WP8 2.7.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update your HTML to use the new `cordova-2.7.0.js` file.

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project.

6. Build and test.

## Upgrade to 2.6.0 from 2.5.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 or WP8 2.6.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update your HTML to use the new `cordova-2.6.0.js` file.

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project.

6. Build and test.

## Upgrade to 2.5.0 from 2.4.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 or WP8 2.5.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update your HTML to use the new `cordova-2.5.0.js` file.

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project.

6. Build and test.

## Upgrade to 2.4.0 from 2.3.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 or WP8 2.4.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update your HTML to use the new `cordova-2.4.0.js` file.

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project.

6. Build and test.

## Upgrade to 2.3.0 from 2.2.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 2.3.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update your HTML to use the new `cordova-2.3.0.js` file.

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project.

6. Build and test.

## Upgrade to 2.2.0 from 2.1.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 2.2.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update your HTML to use the new `cordova-2.2.0.js` file.

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project.

6. Build and test.

## Upgrade to 2.1.0 from 2.0.0

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 2.1.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update your HTML to use the new `cordova-2.1.0.js` file.

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project.

6. Build and test.

## Upgrade to 2.0.0 from 1.9.0

There have been considerable changes to the WP7 project structure in Apache Cordova 2.0.0 which make this upgrade a little more involved that the others. Essentially this is not an upgrade but creation of a new project and copy over of existing source files.

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP7 2.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Update your HTML to use the new `cordova-2.0.0.js` file.

4. Copy and overwrite any splash screen, or icon images.

5. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project.

6. Build and test.

## Upgrade to 1.9.0 from 1.8.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: You can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.9.0.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.9.0.js` file.

## Upgrade to 1.8.0 from 1.7.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: You can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.8.0.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.8.0.js` file.

## Upgrade to 1.7.0 from 1.6.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: You can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.7.0.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.7.0.js` file.

## Upgrade to 1.6.1 from 1.6.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: You can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.6.1.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.6.1.js` file.

## Upgrade to 1.6.0 from 1.5.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: You can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.6.0.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.6.0.js` file.

## Upgrade to 1.5.0 from 1.4.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: You can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.5.0.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.5.0.js` file.

## Upgrade to 1.4.0 from 1.3.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: You can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.4.0.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.4.0.js` file.

## Upgrade to 1.3.0 from 1.2.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: You can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.3.0.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.3.0.js` file.

## Upgrade to 1.2.0 from 1.1.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: You can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.2.0.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.2.0.js` file.

## Upgrade to 1.1.0 from 1.0.0

In Visual Studio's Solution Explorer window:

1. Delete `GapLib/WP7CordovaClassLib.dll` from your project.

2. Remove the reference to `WP7CordovaClassLib` in the __References__ directory.

3. Right-click on __References__ and select __Add Reference__.

4. Navigate to the new distribution and add the `WP7CordovaClassLib.dll` file.

    __NOTE__: you can view the DLL's version by right-clicking on the reference, and selecting __Properties__.

5. Copy the new `cordova-1.1.0.js` into your project. (Be sure it is marked as Content.)

6. Update your HTML to use the new `cordova-1.1.0.js` file.

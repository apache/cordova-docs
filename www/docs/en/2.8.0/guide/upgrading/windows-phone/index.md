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

title: Upgrading Cordova Windows Phone
---

Upgrading Cordova Windows Phone
===============================

This document is for people who need to upgrade their Cordova versions from an older version to a current version of Cordova. This applies to both WP7 and WP8.

## Upgrade to 2.8.0 from 2.7.0 ##

### In Visual Studio's Solution Explorer window:
1. Create a new Apache Cordova WP7 or WP8 2.8.0 Project
2. Copy the contents of your 'www' folder to the new project, and be sure these items are added to the VS project.
3. Update your HTML to use the new cordova.js file. ( note that there is no longer a version number in the name )
4. Copy and overwrite any splash screen, or icon images.
5. Copy over any plugins from the plugins folder to the new project and ensure that they are also added to the VS project.
6. Build and test.

## Upgrade to 2.7.0 from 2.6.0 ##

### In Visual Studio's Solution Explorer window:
1. Create a new Apache Cordova WP7 or WP8 2.7.0 Project
2. Copy the contents of your 'www' folder to the new project, and be sure these items are added to the VS project.
3. Update your HTML to use the new cordova-2.7.0.js file.
4. Copy and overwrite any splash screen, or icon images.
5. Copy over any plugins from the plugins folder to the new project and ensure that they are also added to the VS project.
6. Build and test.

## Upgrade to 2.6.0 from 2.5.0 ##

### In Visual Studio's Solution Explorer window:
1. Create a new Apache Cordova WP7 or WP8 2.6.0 Project
2. Copy the contents of your 'www' folder to the new project, and be sure these items are added to the VS project.
3. Update your HTML to use the new cordova-2.6.0.js file.
4. Copy and overwrite any splash screen, or icon images.
5. Copy over any plugins from the plugins folder to the new project and ensure that they are also added to the VS project.
6. Build and test.

## Upgrade to 2.5.0 from 2.4.0 ##

### In Visual Studio's Solution Explorer window:
1. Create a new Apache Cordova WP7 or WP8 2.5.0 Project
2. Copy the contents of your 'www' folder to the new project, and be sure these items are added to the VS project.
3. Update your HTML to use the new cordova-2.5.0.js file.
4. Copy and overwrite any splash screen, or icon images.
5. Copy over any plugins from the plugins folder to the new project and ensure that they are also added to the VS project.
6. Build and test.

## Upgrade to 2.4.0 from 2.3.0 ##

### In Visual Studio's Solution Explorer window:
1. Create a new Apache Cordova WP7 or WP8 2.4.0 Project
2. Copy the contents of your 'www' folder to the new project, and be sure these items are added to the VS project.
3. Update your HTML to use the new cordova-2.4.0.js file.
4. Copy and overwrite any splash screen, or icon images.
5. Copy over any plugins from the plugins folder to the new project and ensure that they are also added to the VS project.
6. Build and test.

## Upgrade to 2.3.0 from 2.2.0 ##

### In Visual Studio's Solution Explorer window:
1. Create a new Apache Cordova WP7 2.3.0 Project
2. Copy the contents of your 'www' folder to the new project, and be sure these items are added to the VS project.
3. Update your HTML to use the new cordova-2.3.0.js file.
4. Copy and overwrite any splash screen, or icon images.
5. Copy over any plugins from the plugins folder to the new project and ensure that they are also added to the VS project.
6. Build and test.

## Upgrade to 2.2.0 from 2.1.0 ##

### In Visual Studio's Solution Explorer window:
1. Create a new Apache Cordova WP7 2.2.0 Project
2. Copy the contents of your 'www' folder to the new project, and be sure these items are added to the VS project.
3. Update your HTML to use the new cordova-2.2.0.js file.
4. Copy and overwrite any splash screen, or icon images.
5. Copy over any plugins from the plugins folder to the new project and ensure that they are also added to the VS project.
6. Build and test.

## Upgrade to 2.1.0 from 2.0.0 ##

### In Visual Studio's Solution Explorer window:
1. Create a new Apache Cordova WP7 2.1.0 Project
2. Copy the contents of your 'www' folder to the new project, and be sure these items are added to the VS project.
3. Update your HTML to use the new cordova-2.1.0.js file.
4. Copy and overwrite any splash screen, or icon images.
5. Copy over any plugins from the plugins folder to the new project and ensure that they are also added to the VS project.
6. Build and test.


## Upgrade to 2.0.0 from 1.9.0 ##

There have been considerable changes to the WP7 project structure in Apache Cordova 2.0.0 which make this upgrade a little more involved that the others. Essentially this is not an upgrade but creation of a new project and copy over of existing source files.

### In Visual Studio's Solution Explorer window:
1. Create a new Apache Cordova WP7 2.0 Project
2. Copy the contents of your 'www' folder to the new project, and be sure these items are added to the VS project.
3. Update your HTML to use the new cordova-2.0.0.js file.
4. Copy and overwrite any splash screen, or icon images.
5. Copy over any plugins from the plugins folder to the new project and ensure that they are also added to the VS project.
6. Build and test.


## Upgrade to 1.9.0 from 1.8.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.9.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.9.0.js file.


## Upgrade to 1.8.0 from 1.7.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.8.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.8.0.js file.

## Upgrade to 1.7.0 from 1.6.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.7.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.7.0.js file.

## Upgrade to 1.6.1 from 1.6.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.6.1.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.6.1.js file.

## Upgrade to 1.6.0 from 1.5.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.6.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.6.0.js file.

## Upgrade to 1.5.0 from 1.4.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.5.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.5.0.js file.

## Upgrade to 1.4.0 from 1.3.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.4.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.4.0.js file.

## Upgrade to 1.3.0 from 1.2.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.3.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.3.0.js file.

## Upgrade to 1.2.0 from 1.1.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.2.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.2.0.js file.

## Upgrade to 1.1.0 from 1.0.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.1.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.1.0.js file.

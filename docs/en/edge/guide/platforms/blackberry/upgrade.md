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

# Upgrading BlackBerry

This guide shows how to modify BlackBerry projects to upgrade from
older versions of Cordova.  These instructions apply to projects
created with an older set of command-line tools that precede the
`cordova` CLI utility. See The Command-line Interface for information
how to update the version of the CLI.

## Upgrading 2.8.0 projects to 2.9.0 ##

BlackBerry 10:

1. Download and extract the Cordova 2.9.0 source to a permanent location on your hard drive, for example to `~/Cordova-2.9.0`.

2. Quit any running SDK tools: Eclipse, Momentics and the like.

3. Navigate to the directory where you put the downloaded source above, using a unix like terminal: Terminal.app, Bash, Cygwin, etc.

4. Create a new project, as described in BlackBerry Shell Tool Guide. This becomes the home of your updated project.

5. Copy your project's source from the old project's `/www` directory to the new project's `/www` directory.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova.js` file.

### BlackBerryOS/Playbook ###

1. Download and extract the Cordova 2.9.0 source to a permanent location on your hard drive, for example to `~/Cordova-2.9.0`.

2. Quit any running SDK tools: Eclipse, Momentics and the like.

3. Navigate to the directory where you put the downloaded source above, using a unix like terminal: Terminal.app, Bash, Cygwin, etc.

4. Create a new project, as described in iOS Shell Tool Guide. You need the assets from this new project.

5. Copy the `www/cordova.js` file from the new project into the `www` directory, and delete the `www/cordova.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova.js` file.

7. Copy the `native` directory from the new project into the existing project, overwriting the old `native` directory.

8. Copy the `lib` directory from the new project into the existing project, overwriting the old `lib` directory.

9. Copy the `cordova` directory from the new project into the existing project, overwriting the old `cordova` directory.

## Upgrading 2.7.0 projects to 2.8.0 ##

BlackBerry 10:

BlackBerry 10 uses the new CLI tooling and manages core APIs as plugins. The instructions migrate your project to a new project, rather than updating an existing project, due to the complexity of updating an old project.
Also note that the cordova js script file is now called 'cordova.js' and no longer contains a version string.

1. Download and extract the Cordova 2.8.0 source to a permanent location on your hard drive, for example to `~/Cordova-2.8.0`.

2. Quit any running SDK tools: Eclipse, Momentics and the like.

3. Navigate to the directory where you put the downloaded source above, using a unix like terminal: Terminal.app, Bash, Cygwin, etc.

4. Create a new project, as described in BlackBerry Shell Tool Guide. This becomes the home of your updated project.

5. Copy your project's source from the old project's `/www` directory to the new project's `/www` directory.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova.js` file.

BlackBerryOS/Playbook:

1. Download and extract the Cordova 2.8.0 source to a permanent location on your hard drive, for example to `~/Cordova-2.8.0`.

2. Quit any running SDK tools: Eclipse, Momentics and the like.

3. Navigate to the directory where you put the downloaded source above, using a unix like terminal: Terminal.app, Bash, Cygwin, etc.

4. Create a new project, as described in iOS Shell Tool Guide. You need the assets from this new project.

5. Copy the `www/cordova.js` file from the new project into the `www` directory, and delete the `www/cordova.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova.js` file.

7. Copy the `native` directory from the new project into the existing project, overwriting the old `native` directory.

8. Copy the `lib` directory from the new project into the existing project, overwriting the old `lib` directory.

9. Copy the `cordova` directory from the new project into the existing project, overwriting the old `cordova` directory.

## Upgrading 2.6.0 projects to 2.7.0 ##

1. Download and extract the Cordova 2.7.0 source to a permanent location on your hard drive, for example to `~/Cordova-2.7.0`.

2. Quit any running SDK tools: Eclipse, Momentics and the like.

3. Navigate to the directory where you put the downloaded source above, using a unix like terminal: Terminal.app, Bash, Cygwin, etc.

4. Create a new project, as described in BlackBerry Shell Tool Guide. You need the assets from this new project.

5. Copy the `www/cordova-2.7.0.js` file from the new project into the `www` directory, and delete the `www/cordova-2.6.0.js` file.

6. Update the Cordova script reference in the `www/index.html` file (and any other files that contain the script reference) to point to the new `cordova-2.7.0.js` file.

7. Copy the `native` directory from the new project into the existing project, overwriting the old `native` directory.

8. Copy the `lib` directory from the new project into the existing project, overwriting the old `lib` directory.

9. Copy the `cordova` directory from the new project into the existing project, overwriting the old `cordova` directory.

## Upgrade to 2.6.0 from 2.5.0 ##

Updating the PhoneGap download directory:

It is recommended that you download a fresh copy of the entire directory.

However, here are the new parts needed for the piecemeal update:

1. Update the cordova.blackberry.js file in the `Phonegap-2.6.0/lib/blackberry/javascript` directory.

2. Update the `ext`, `ext-air`, and `ext-qnx` in the `Phonegap-2.6.0/lib/blackberry/framework` directory.

3. Update the `build.xml` file in the `Phonegap-2.6.0/lib/blackberry` directory.

4. Update the `Phonegap-2.6.0/lib/blackberry/bin` directory.

5. Update the `VERSION` file in the `Phonegap-2.6.0/lib/blackberry` directory.

Updating the `example/` directory or migrating an existing project:

1. Open the `www` directory, which contains the app.

2. Remove and update the .jar file in the `ext/` directory.

3. Update the contents of the `ext-air/` directory.

4. Update the contents of the `ext-qnx/` directory.

4. Copy the new `cordova-2.6.0.js` into your project.

5. Update your HTML to use the new `cordova-2.6.0.js` file.

## Upgrade to 2.5.0 from 2.4.0 ##

Updating the PhoneGap download directory:

It is recommended that you download a fresh copy of the entire directory.

However, here are the new parts needed for the piecemeal update:

1. Update the cordova.blackberry.js file in the `Phonegap-2.5.0/lib/blackberry/javascript` directory.

2. Update the `ext`, `ext-air`, and `ext-qnx` in the `Phonegap-2.5.0/lib/blackberry/framework` directory.

3. Update the `build.xml` file in the `Phonegap-2.5.0/lib/blackberry` directory.

4. Update the `Phonegap-2.5.0/lib/blackberry/bin` directory.

5. Update the `VERSION` file in the `Phonegap-2.5.0/lib/blackberry` directory.

Updating the example/ directory or migrating an existing project:

1. Open the `www` directory, which contains the app.

2. Remove and update the .jar file in the `ext/` directory.

3. Update the contents of the `ext-air/` directory.

4. Update the contents of the `ext-qnx/` directory.

4. Copy the new `cordova-2.5.0.js` into your project.

5. Update your HTML to use the new `cordova-2.5.0.js` file.

## Upgrade to 2.4.0 from 2.3.0 ##

Updating just the `www` directory:

1. Open the `www` directory, which contains the app.

2. Remove and update the .jar file in the `ext/` directory.

3. Update the contents of the `ext-air/` directory.

4. Copy the new `cordova-2.4.0.js` into your project.
    - If playbook, then update the .js file in the `playbook/` directory.
    - If BlackBerry 10, then update the .js file in the `qnx/` directory.

5. Update your HTML to use the new `cordova-2.4.0.js` file.

Updating the sample directory (ie, updating using the ant tools):

1. Open the `sample/lib/` directory.

2. Update the .jar file in the `cordova.2.3.0/ext/` directory.

3. Update the contents of the `cordova.2.3.0/ext-air/` directory.

4. Update the contents of the `cordova.2.3.0/ext-qnx/` directory.

5. Update the .js file in the `cordova.2.3.0/javascript/` directory.

6. Open the `sample/lib/` directory and rename the `cordova.2.3.0/` directory to `cordova.2.4.0/`.

7. Type `ant blackberry build` or `ant playbook build` to update the `www` directory with updated Cordova.

8. Open the `www` directory and update your HTML to use the new `cordova-2.4.0.js` file.

## Upgrade to 2.3.0 from 2.2.0 ##

Updating just the `www` directory:

1. Open the `www` directory, which contains the app.

2. Remove and update the .jar file in the `ext/` directory.

3. Update the contents of the `ext-air/` directory.

4. Copy the new `cordova-2.3.0.js` into your project.
    - If playbook, then update the .js file in the `playbook/` directory.
    - If BlackBerry 10, then update the .js file in the `qnx/` directory.

5. Update your HTML to use the new `cordova-2.3.0.js` file.

Updating the sample directory (ie, updating using the ant tools):

1. Open the `sample/lib/` directory.

2. Update the .jar file in the `cordova.2.2.0/ext/` directory.

3. Update the contents of the `cordova.2.2.0/ext-air/` directory.

4. Update the contents of the `cordova.2.2.0/ext-qnx/` directory.

5. Update the .js file in the `cordova.2.2.0/javascript/` directory.

6. Open the `sample/lib/` directory and rename the `cordova.2.2.0/` directory to `cordova.2.3.0/`.

7. Type `ant blackberry build` or `ant playbook build` to update the `www` directory with updated Cordova.

8. Open the `www` directory and update your HTML to use the new `cordova-2.3.0.js` file.

## Upgrade to 2.2.0 from 2.1.0 ##

Updating just the www directory:

1. Open the `www` directory, which contains the app.

2. Remove and update the .jar file in the `ext/` directory.

3. Update the contents of the `ext-air/` directory.

4. Copy the new `cordova-2.2.0.js` into your project.
    - If playbook, then update the .js file in the `playbook/` directory.
    - If BlackBerry 10, then update the .js file in the `qnx/` directory.

5. Update your HTML to use the new `cordova-2.2.0.js` file.

Updating the sample directory (ie, updating using the ant tools):

1. Open the `sample/lib/` directory.

2. Update the .jar file in the `cordova.2.1.0/ext/` directory.

3. Update the contents of the `cordova.2.1.0/ext-air/` directory.

4. Update the contents of the `cordova.2.1.0/ext-qnx/` directory.

5. Update the .js file in the `cordova.2.1.0/javascript/` directory.

6. Open the `sample/lib/` directory and rename the `cordova.2.1.0/` directory to `cordova.2.2.0/`.

7. Type `ant blackberry build` or `ant playbook build` to update the `www` directory with updated Cordova.

8. Open the `www` directory and update your HTML to use the new `cordova-2.2.0.js` file.

## Upgrade to 2.1.0 from 2.0.0 ##

Updating just the `www` directory:

1. Open the `www` directory, which contains the app.

2. Remove and update the .jar file in the `ext/` directory.

3. Update the contents of the `ext-air/` directory.

4. Copy the new `cordova-2.1.0.js` into your project.
    - If playbook, then update the .js file in the `playbook/` directory.

5. Update your HTML to use the new `cordova-2.1.0.js` file.

Updating the sample directory (ie, updating using the ant tools):

1. Open the `sample/lib/` directory.

2. Update the .jar file in the `cordova.2.0.0/ext/` directory.

3. Update the contents of the `cordova.2.0.0/ext-air/` directory.

4. Update the .js file in the `cordova.2.0.0/javascript/` directory.

5. Open the `sample/lib/` directory and rename the `cordova.2.0.0/` directory to `cordova.2.1.0/`.

6. Type `ant blackberry build` or `ant playbook build` to update the `www` directory with updated Cordova.

7. Open the `www` directory and update your HTML to use the new `cordova-2.1.0.js` file.

## Upgrade to 2.0.0 from 1.9.0 ##

Updating just the `www` directory:

1. Open the `www` directory, which contains the app.

2. Remove and update the .jar file in the `ext/` directory.

3. Update the contents of the `ext-air/` directory.

4. Copy the new `cordova-2.0.0.js` into your project.
    - If playbook, then update the .js file in the `playbook/` directory.

5. Update your HTML to use the new `cordova-2.0.0.js` file.

6. Update the `www/plugins.xml` file. Two plugins changed their
   namespace/service label. Change the old entries for the Capture and
   Contact plugins from:

        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   To:

        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>

Updating the sample directory (ie, updating using the ant tools):

1. Open the `sample/lib/` directory.

2. Update the .jar file in the `cordova.1.9.0/ext/` directory.

3. Update the contents of the `cordova.1.9.0/ext-air/` directory.

4. Update the .js file in the `cordova.1.9.0/javascript/` directory.

5. Open the `sample/lib/` directory and rename the `cordova.1.9.0/` directory to `cordova.2.0.0/`.

6. Type `ant blackberry build` or `ant playbook build` to update the `www` directory with updated Cordova.

7. Open the `www` directory and update your HTML to use the new `cordova-2.0.0.js` file.

8. Open the `www` directory and update the `plugins.xml` file. Two plugins
   changed their namespace/service label. Change the old entries for the
   Capture and Contact plugins from:

         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   To:

         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>

- To upgrade to 1.8.0, please go from 1.7.0

## Upgrade to 1.8.0 from 1.7.0 ##

Updating just the `www` directory:

1. Open the `www` directory, which contains the app.

2. Remove and update the .jar file in the `ext/` directory.

3. Update the contents of the `ext-air/` directory.

4. Copy the new `cordova-1.8.0.js` into your project.
    - If playbook, then update the .js file in the `playbook/` directory.

5. Update your HTML to use the new `cordova-1.8.0.js` file.

6. Update the `www/plugins.xml` file. Two plugins changed their
   namespace/service label. Change the old entries for the Capture and
   Contact plugins from:

        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   To:

        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>

Updating the sample directory (ie, updating using the ant tools):

1. Open the `sample/lib/` directory.

2. Update the .jar file in the `cordova.1.7.0/ext/` directory.

3. Update the contents of the `cordova.1.7.0/ext-air/` directory.

4. Update the .js file in the `cordova.1.7.0/javascript/` directory.

5. Open the `sample/lib/` directory and rename the `cordova.1.7.0/` directory to `cordova.1.8.0/`.

6. Type `ant blackberry build` or `ant playbook build` to update the `www` directory with updated Cordova.

7. Open the `www` directory and update your HTML to use the new `cordova-1.8.0.js` file.

8. Open the `www` directory and update the `plugins.xml` file. Two plugins
   changed their namespace/service label. Change the old entries for the
   Capture and Contact plugins from:

         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   To:

         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>


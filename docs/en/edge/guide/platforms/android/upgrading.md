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

# Upgrading Android

This guide shows how to modify Android projects to upgrade from older versions of Cordova.
Most of these instructions apply to projects created with an older set
of command-line tools that precede the `cordova` CLI utility. See The Command-line Interface for information how to update the
version of the CLI.

## Upgrade to the CLI (3.0.0) from 2.9.0 ##

1. Create a new Apache Cordova 3.0.0 project using the cordova CLI, as
   described in The Command-line Interface.

2. Add your platforms the the cordova project, for example: `cordova
   platform add android`.

3. Copy the contents of your project's `www` directory to the `www` directory
   at the root of the cordova project you just created.

4. Copy any native assets from your old project into the appropriate
   directories under `platforms/android`: this directory is where your
   native cordova-android project exists.

5. Use the cordova CLI tool to install any plugins you need. Note that
   the CLI handles all core APIs as plugins, so they may need to be
   added. Only 3.0.0 plugins are compatible with the CLI.

## Upgrade to 3.0.0 from 2.9.0 ##

1. Create a new Apache Cordova Android project.

2. Copy the contents of your `www` directory to the new project.

3. Copy any native Android assets from your `res` directory to the new project.

4. Copy over any plugins you installed from the `src` subdirectories into the new project.

5. Make sure to upgrade any deprecated `<plugin>` references from your old `config.xml` file to the new `<feature>` specification.

- __NOTE:__ all core APIs have been removed and must be installed as plugins. Please see the Using Plugman to Manage Plugins Guide for details.

## Upgrade to 2.9.0 from 2.8.0

1. Run `bin/update <project_path>`.

## Upgrade to 2.8.0 from 2.7.0 ##

1. Remove `cordova-2.7.0.jar` from the project's `libs` directory.

2. Add `cordova-2.8.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova.js` into your project.

5. Update your HTML to use the new `cordova.js` file.

6. Copy the `res/xml/config.xml` file to match `framework/res/xml/config.xml`.

7. Update `framework/res/xml/config.xml` to have similar settings as it did previously.

8. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.7.0 from 2.6.0 ##

1. Remove `cordova-2.6.0.jar` from the project's `libs` directory.

2. Add `cordova-2.7.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-2.7.0.js` into your project.

5. Update your HTML to use the new `cordova-2.7.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Update `framework/res/xml/config.xml` to have similar settings as it did previously.

8. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.6.0 from 2.5.0 ##

1. Remove `cordova-2.5.0.jar` from the project's `libs` directory.

2. Add `cordova-2.6.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-2.6.0.js` into your project.

5. Update your HTML to use the new `cordova-2.6.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Update `framework/res/xml/config.xml` to have similar settings as it did previously.

8. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

Run `bin/update <project>` with the project path listed in the Cordova Source directory.

## Upgrade to 2.5.0 from 2.4.0 ##

1. Remove `cordova-2.4.0.jar` from the project's `libs` directory.

2. Add `cordova-2.5.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-2.5.0.js` into your project.

5. Update your HTML to use the new `cordova-2.5.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Update `framework/res/xml/config.xml` to have similar settings as it did previously.

8. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.4.0 from 2.3.0 ##

1. Remove `cordova-2.3.0.jar` from the project's `libs` directory.

2. Add `cordova-2.4.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-2.4.0.js` into your project.

5. Update your HTML to use the new `cordova-2.4.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.3.0 from 2.2.0 ##

1. Remove `cordova-2.2.0.jar` from the project's `libs` directory.

2. Add `cordova-2.3.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-2.3.0.js` into your project.

5. Update your HTML to use the new `cordova-2.3.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.2.0 from 2.1.0 ##

1. Remove `cordova-2.1.0.jar` from the project's `libs` directory.

2. Add `cordova-2.2.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-2.2.0.js` into your project.

5. Update your HTML to use the new `cordova-2.2.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.1.0 from 2.0.0 ##

1. Remove `cordova-2.0.0.jar` from the project's `libs` directory.

2. Add `cordova-2.1.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-2.1.0.js` into your project.

5. Update your HTML to use the new `cordova-2.1.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.0.0 from 1.9.0 ##

1. Remove `cordova-1.9.0.jar` from the project's `libs` directory.

2. Add `cordova-2.0.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-2.0.0.js` into your project.

5. Update your HTML to use the new `cordova-2.0.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

### Notes about 2.0.0 release

`config.xml` will be replacing `cordova.xml` and `plugins.xml`.  This
new file is a combination of the previous two.  However, the old files
are deprecated, and while currently still work, will cease working in
a future release.

## Upgrade to 1.9.0 from 1.8.1 ##

1. Remove `cordova-1.8.0.jar` from the project's `libs` directory.

2. Add `cordova-1.9.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-1.9.0.js` into your project.

5. Update your HTML to use the new `cordova-1.9.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

### Notes about 1.9.0 release

Due to the introduction of the `CordovaWebView`, third-Party plugins
may not work.  These plugins need to get a context from the
`CordovaInterface` using `getContext()` or `getActivity()`.  If you
are not an experienced Android developer, please contact the plugin
maintainer and add this task to their bug tracker.

## Upgrade to 1.8.0 from 1.8.0 ##

1. Remove `cordova-1.8.0.jar` from the project's `libs` directory.

2. Add `cordova-1.8.1.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-1.8.1.js` into your project.

5. Update your HTML to use the new `cordova-1.8.1.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.8.0 from 1.7.0 ##

1. Remove `cordova-1.7.0.jar` from the project's `libs` directory.

2. Add `cordova-1.8.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-1.8.0.js` into your project.

5. Update your HTML to use the new `cordova-1.8.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.8.0 from 1.7.0 ##

1. Remove `cordova-1.7.0.jar` from the project's `libs` directory.

2. Add `cordova-1.8.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-1.8.0.js` into your project.

5. Update your HTML to use the new `cordova-1.8.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.7.0 from 1.6.1 ##

1. Remove `cordova-1.6.1.jar` from the project's `libs` directory.

2. Add `cordova-1.7.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-1.7.0.js` into your project.

5. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.6.1 from 1.6.0 ##

1. Remove `cordova-1.6.0.jar` from the project's `libs` directory.

2. Add `cordova-1.6.1.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-1.6.1.js` into your project.

5. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.6.0 from 1.5.0 ##

1. Remove `cordova-1.5.0.jar` from the project's `libs` directory.

2. Add `cordova-1.6.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-1.6.0.js` into your project.

5. Update your HTML to use the new `cordova-1.6.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Replace `res/xml/phonegap.xml` with `res/xml/cordova.xml` to match `framework/res/xml/cordova.xml`.

## Upgrade to 1.5.0 from 1.4.0##

1. Remove `phonegap-1.4.0.jar` from the project's `libs` directory.

2. Add `cordova-1.5.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `cordova-1.5.0.js` into your project.

5. Update your HTML to use the new `cordova-1.5.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Replace `res/xml/phonegap.xml` with `res/xml/cordova.xml` to match `framework/res/xml/cordova.xml`.

## Upgrade to 1.4.0 from 1.3.0 ##

1. Remove `phonegap-1.3.0.jar` from the project's `libs` directory.

2. Add `phonegap-1.4.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `phonegap-1.4.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.4.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Update `res/xml/phonegap.xml` to match `framework/res/xml/phonegap.xml`.

## Upgrade to 1.3.0 from 1.2.0 ##

1. Remove `phonegap-1.2.0.jar` from the project's `libs` directory.

2. Add `phonegap-1.3.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `phonegap-1.3.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.2.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Update `res/xml/phonegap.xml` to match `framework/res/xml/phonegap.xml`.

## Upgrade to 1.2.0 from 1.1.0 ##

1. Remove `phonegap-1.1.0.jar` from the project's `libs` directory.

2. Add `phonegap-1.2.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `phonegap-1.2.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.2.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Update `res/xml/phonegap.xml` to match `framework/res/xml/phonegap.xml`.

## Upgrade to 1.1.0 from 1.0.0 ##

1. Remove `phonegap-1.0.0.jar` from the project's `libs` directory.

2. Add `phonegap-1.1.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `phonegap-1.1.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.1.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.0.0 from 0.9.6 ##

1. Remove `phonegap-0.9.6.jar` from the project's `libs` directory.

2. Add `phonegap-1.0.0.jar` to the project's `libs` directory.

3. If you are using Eclipse, please refresh your eclipse project and do a clean.

4. Copy the new `phonegap-1.0.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.0.0.js` file.

6. Add the `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.


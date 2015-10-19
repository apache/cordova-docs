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

title: Upgrading Windows Phone 8
---

# Upgrading Windows Phone 8

This guide shows how to modify Windows Phone 8 projects, to upgrade from older versions of Cordova. Some of these
instructions apply to projects created with an older set of
command-line tools that precede the `cordova` CLI utility. See The
Command-Line Interface for information how to update the version of
the CLI.  The following section shows how to upgrade from non-CLI and
CLI projects.

## Upgrading 3.6.0 Projects to 4.0.0

For non-CLI projects, run:

        bin/update path/to/project
        
For CLI projects:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update wp8` in your existing projects.


## Upgrade to 3.2.0 from 3.1.0

For projects that were created with the cordova CLI: 

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html). 

2. Run `cordova platform update wp8`
        
For projects not created with the cordova CLI, run:

        bin\update <project_path>

## Upgrade to 3.1.0 from 3.0.0

For projects that were created with the cordova CLI: 

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html). 

2. Run `cordova platform update wp8`
        
For projects not created with the cordova CLI, run:

        bin\update <project_path>

## Upgrade to the CLI (3.0.0) from 2.9.0

1. Create a new Apache Cordova 3.0.0 project using the cordova CLI, as
   described in [The Command-Line Interface](../../cli/index.html).

2. Add your platforms to the cordova project, for example: `cordova
   platform add wp8`.

3. Copy the contents of the project's `www` directory to the `www` directory
   at the root of the cordova project you just created.

4. Copy or overwrite any native assets from your original project
   (`SplashScreen`, `ApplicationIcon`, etc.), making sure to add any
   new files to the `.csproj` file. The windows phone project builds
   inside the `platforms\wp8` directory.

5. Use the cordova CLI tool to install any plugins you need. Note that
   the CLI handles all core APIs as plugins, so they may need to be
   added. Only 3.0.0 plugins are compatible with the CLI.

6. Build and test.

## Upgrade to 3.0.0 (non-CLI) from 2.x

In Visual Studio's Solution Explorer window:

1. Create a new Apache Cordova WP8 3.0.0 Project.

2. Copy the contents of the `www` directory to the new project, and be sure these items are added to the VS project.

3. Copy and overwrite any splash screen, or icon images.

4. Copy over any plugins from the `plugins` directory to the new project and ensure that they are also added to the VS project. 

5. Build and test.

__NOTE__: all core APIs are removed from Cordova version 3.0, and must
be installed separately as plugins.  For more information on how to
re-enable these features in a non-CLI workflow, see Using Plugman to
Manage Plugins.

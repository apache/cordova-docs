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

title: Platform Pinning
toc_title: Platform Pinning
description: Cordova CLI pinned platform versions.
---

## Platform Pinning

### Cordova CLI 12.x & Higher

Starting from Cordova CLI 12.0.0, the CLI no longer maintains a list of pinned Apache Cordova platforms.

When you run the `cordova platform add <PLATFORM>` command, it will always fetch the latest available platform from the npm registry. This ensures immediate access to newly released platforms.

If you want to consistently fetch a specific version, you need to modify the command and include the version pinning. For example, use `cordova platform add <PLATFORM>@<VERSION>`.

The `cordova platform list` command displays the list of platforms without their versions. However, it will continue to show the versions of the installed platforms.

**Example Output:**

```bash
$ cordova platform list
Installed platforms:
  android 12.0.0
Available platforms:
  browser
  electron
  ios
```

### Cordova CLI 11.x & Lower

Cordova CLI 11.x and lower versions still use platform pinning but won't receive further updates since Cordova CLI 12.0.0 has been released. Platforms are pinned with a `^` symbol, allowing the CLI to fetch new minor and patch releases for the pinned platforms.

To view the pinned platforms for your CLI version, run the command `cordova platform list` in a new project directory.

**Example Output:**

```bash
$ cordova platform list
Installed platforms:

Available platforms:
  android ^10.1.1
  browser ^6.0.0
  electron ^3.0.0
  ios ^6.2.0
  osx ^6.0.0 (deprecated)
```

Based on the above information, executing `cordova platform add android` will fetch the latest minor/patch release version starting from 10.1.1 or higher. If you specify a version, it will fetch the specified version. For example, `cordova platform add ios@5.0.1` will fetch Cordova iOS 5.0.1.

_Note: After installing a platform, the "**Installed platforms:**" section will display the actual installed platform version. The installed platform will no longer appear in the "**Available platforms:**" section until it is removed from the project._

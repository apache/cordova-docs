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
toc_title: Platform pinning
description: Cordova CLI pinned platform versions.
---

## Platform Pinning

Cordova CLI pins the supported platform version in conjunction with the version of CLI that is being used.

To see the pinned platforms for your CLI version, execute the command `cordova platform list`  in a brand new project directory.

**Example (Cordova CLI 9.x):**

```bash
$ cordova platform list
Installed platforms:

Available platforms:
  android ^8.0.0
  browser ^6.0.0
  electron ^1.0.0
  ios ^5.0.0
  osx ^5.0.0
  windows ^7.0.0
```

_Note: When a platform is installed, the "**Installed platforms:**" section will display the actual installed platform version. The installed platform will no longer display in the "**Available platforms:**" section until it is removed from the project._

Starting from **Cordova CLI 9** and up, all platforms are pinned with an caret (`^`). It means that by installing a platform without a specified version, Cordova will fetch the latest version up to a minor release.

In **Cordova CLI 8** and below, all platforms are pinned with a tilde (`~`). It means that by installing a platform without a specified version, Cordova will fetch the latest version up to a patch release.

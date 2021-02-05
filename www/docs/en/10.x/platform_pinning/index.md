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

Cordova CLI manages a list of pinned Apache Cordova maintained platforms. When there is a major release of Cordova CLI, the platform's pinned version is updated to the latest released version. Typically, the updating of this pin is made only on a major release of CLI. This is because the pinned versions are pinned with a caret `^` allowing CLI to continue to fetch new minor and patch releases of any given pinned platform.

To see the pinned platforms for your CLI version, execute the command `cordova platform list`  in a brand new project directory.

**Cordova CLI 9.x:**

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

Using the above information, when `cordova platform add android` is executed, the latest minor/patch release version starting from 8.0.0 or after (8.x.x) will be fetched. If a version is provided, it will fetch the given version. E.g `cordova platform add ios@5.0.1` will fetch Cordova iOS 5.0.1.

_Note: When a platform is installed, the "**Installed platforms:**" section will display the actual installed platform version. The installed platform will no longer display in the "**Available platforms:**" section until it is removed from the project._

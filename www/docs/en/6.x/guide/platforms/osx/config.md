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

title: OS X Configuration
---

# OS X Configuration

The `config.xml` file controls an app's basic settings that apply
across each application and CordovaWebView instance. This section
details preferences that only apply to OS X builds. See [The config.xml
File](config_ref_index.md.html#The%20config.xml%20File) for information on global configuration options.

## Overview

| Name | Default | Version |  Comment |
|------|---------|---------|---------|
| `HideMousePointer` |  _disabled_ |  4.0.0 | Sets the timeout for hiding the mouse pointer |
| `OSXLocalStoragePath` |  `~/Library/Application Support/{bundle.id}`|  4.0.0 | Sets the local storage path |
| `WindowSize` |  `auto`|  4.0.0 | Sets the size of the application window. |
| `EnableWebGL` |  `false`|  4.0.0 | Enables WebGL on the web view. |


## Details

### HideMousePointer
(integer, defaults to _disabled_)
Idle duration in seconds after which the mouse pointer should be hidden.
Set it to `0` for immediate.

Example: hide mouse pointer after 5 seconds:

```xml
<preference name="HideMousePointer" value="5"/>
```

### OSXLocalStoragePath
(string, defaults to `~/Library/Application Support/{bundle.id}`)
Sets the directory for the local storage path.

Example: use custom path:

```xml
<preference name="OSXLocalStoragePath" value="~/.myapp/database"/>
```

### WindowSize
(string, defaults to `auto`)
Defines the size of the application window in the format `WxH` or the special values `auto` and
`fullscreen`. The latter will open a borderless window spanning the entire desktop area. Please note,
that this is different from the _normal_ OS X fullscreen mode, which would never span multiple displays.

Example: set the window size to 800 x 400:

```xml
<preference name="WindowSize" value="800x400"/>
```

> **Note**: The global cordova `fullscreen` preference is not supported.

### EnableWebGL
(boolean, defaults to `false`)
If set to `true` it enables WebGL on the webview.

Example: enable WebGL

```xml
<preference name="EnableWebGL" value="true" />
```



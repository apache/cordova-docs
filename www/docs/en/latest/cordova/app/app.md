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

title: App Control
description: Android-only functions for controlling the app, such as exiting it.
---

# navigator.app

The `navigator.app` object is available on Android only. It gives your app a
few functions to control the app itself, such as closing it, clearing its cache, or taking over the behavior of the device buttons.

## exitApp

Closes the application. This is Android only.

### Quick Example

```javascript
navigator.app.exitApp();
```

## clearCache

Clears the app's cached resources. This is Android only.

### Quick Example

```javascript
navigator.app.clearCache();
```

## overrideBackbutton

Overrides the default behavior of the Android back button. When it is
overridden, pressing the back button fires the
[backbutton](../events/events.html#backbutton) event in JavaScript instead.
Pass `true` to override the button, or `false` to cancel the override. This is
Android only.

You should not need to call this function yourself. Registering a listener for
the `backbutton` event does it automatically.

### Quick Example

```javascript
navigator.app.overrideBackbutton(true);
```

## overrideButton

Overrides the default behavior of an Android volume button. When it is
overridden, pressing the button fires the `volumeupbutton` or
`volumedownbutton` event in JavaScript instead. This is Android only.

The first argument is the button, either `volumeup` or `volumedown`. The second
argument is `true` to override the button, or `false` to cancel the override.

You should not need to call this function yourself. Registering a listener for
the `volumeupbutton` or `volumedownbutton` event does it automatically.

### Quick Example

```javascript
navigator.app.overrideButton("volumeup", true);
```

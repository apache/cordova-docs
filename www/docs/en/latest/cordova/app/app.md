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
few functions to control the app itself, such as closing it or going back
through the page history.

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

## clearHistory

Clears the web history of the app's webview. After this, pressing the back
button exits the app instead of loading the previous page. This is Android only.

### Quick Example

```javascript
navigator.app.clearHistory();
```

## backHistory

Goes back to the previous page, the same as pressing the back button on an
Android device. This is Android only.

### Quick Example

```javascript
navigator.app.backHistory();
```

## loadUrl

Loads a URL into the app's webview, or into a new browser instance. This is
Android only.

The second argument, `props`, is optional. It is an object that can contain:

- `wait`: number of milliseconds to wait before loading the URL.
- `loadingDialog`: a string in the form `"Title,Message"`. Shows a native
  loading dialog.
- `loadUrlTimeoutValue`: number of milliseconds to wait before a timeout error
  is triggered.
- `clearHistory`: boolean. Clears the webview history. The default is `false`.
- `openExternal`: boolean. Opens the URL in a new browser. The default is
  `false`.

### Quick Example

```javascript
navigator.app.loadUrl("http://server/myapp/index.html", {
    wait: 2000,
    loadingDialog: "Wait,Loading App",
    loadUrlTimeoutValue: 60000
});
```

## cancelLoadUrl

Cancels a `loadUrl` call that is still waiting to be loaded. This is Android
only.

### Quick Example

```javascript
navigator.app.cancelLoadUrl();
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

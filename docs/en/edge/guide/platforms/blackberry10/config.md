---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements. See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership. The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
         under the License.
---

# BlackBerry 10 Configuration

The `config.xml` file controls an app's basic settings that apply
across each application and CordovaWebView instance. This section
details preferences that only apply to BlackBerry 10 builds. See The
config.xml File for information on global configuration options.

- `ChildBrowser` (`disable` or the default `enable`): Disables child
  browser windows. By default, apps launch a secondary browser window
  to display resources accessed via `window.open()` or by specifying a
  `_blank` anchor target. Specify `disable` to override this default
  behavior.

        <preference name="ChildBrowser" value="disable"/>

- `PopupBlocker` (`enable` or the default `disable`): Enables the
  popup blocker, which prevents calls to `window.open()`. By default,
  popups display in a child browser window. Setting the preference to
  `enable` prevents it from displaying at all.

        <preference name="PopupBlocker" value="enable"/>

- `WebSecurity` (`disable` or the default `enable`): Set to `disable`
  to override web security settings, allowing access to remote content
  from unknown sources. This preference is intended as a development
  convenience only, so remove it before packaging the app for
  distribution.  For the released app, all URIs should be known and
  whitelisted using the `<access>` element, described in the Domain
  Whitelist Guide.

        <preference name="WebSecurity" value="disable"/>


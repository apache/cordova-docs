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

The `config.xml` file controls various Cordova settings. These apply across the application.
The `config.xml` file is is located in `<project folder>/<www>` directory.

## `<preference>`

Various preferences (as `<preference>` tags) default on not breaking existing apps.
The available preferences are:

* `autoHideSplashScreen`: (`true` or `false`) Set to `false` to control when the splashscreen
  is hidden through a JavaScript API. This preference defaults to true.

* `backgroundColor`: Specifies the background color of your app. The value must specify
  a color value in the ARGB pixel format using 8 hexadecimal digits.

* `childBrowser`: Disables child browser windows. By default, when the content attempts
  to open a resource in a new window or tab (by using window.open(), or by specifying `_blank`
  as the target of an anchor), the WebWorks app will open a secondary browser window
  to display the resource. This feature is enabled by default. The value must specify
  `disable` to prevent the above actions from occuring.

* `hideKeyboardFormAccessoryBar`: (`enable` or `disable`) Disables the keyboard form
  accessory bar in an HTML form. The keyboard form accessory bar is a row of
  buttons (Previous, Next, and Submit) that the user can use to navigate through a form.
  By default, when a WebWorks app contains an HTML form and an `<input>` element gets
  focus, WebWorks displays this form accessory bar. This feature allows you to prevent your
  app from displaying the form accessory bar by specifying value as `enable`.

* `orientation`: (`auto`, `portrait`, or `landscape`) Specifies the persistent orientation
  for screens in your app. By default, if you do not specify a screen orientation,
  the orientation is set to auto.

* `popupBlocker`: Enables the popup blocker. By default, all popups are displayed by
  BlackBerry WebWorks apps in a child browser window. You can prevent popups from displaying
  without user intervention by enabling the popup blocker. This is done by specifying
  value as `enable`.

* `theme`: (`bright`, `dark`, `inherit`, or `default`) Specifies the UI theme for your app.

* `webSecurity`: Disables web security. Disabling web security allows you to access
  remote content from unknown sources during development. Before packaging your app for
  distribution, you should remove this setting. This feature is intended as a
  development convenience only. In production, all URIs should be known and should be
  whitelisted using the `<access>` element. To disable, specify value as `disable`.

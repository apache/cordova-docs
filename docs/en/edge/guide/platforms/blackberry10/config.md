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
config.xml File for information about global configuration options.

* `autoHideSplashScreen`: (`true` or `false`): Set to `false` to
  control when the splashscreen is hidden through a JavaScript
  API. This preference defaults to true.

        <preference name="autoHideSplashScreen" value="false"/>

* `backgroundColor`: Specifies the background color of your app. The
  value must specify a color value in the ARGB pixel format using 8
  hexadecimal digits.

        <preference name="backgroundColor" value="0x00000000"/>

<!-- QUERY: remove "0x" from above? Varies from Android -->

* `childBrowser`: Disables child browser windows. By default, when the
  content attempts to open a resource in a new window or tab (by using
  window.open(), or by specifying `_blank` as the target of an
  anchor), the WebWorks app will open a secondary browser window to
  display the resource. This feature is enabled by default. The value
  must specify `disable` to prevent the above actions from occuring.

        <preference name="childBrowser" value="disable"/>

* `hideKeyboardFormAccessoryBar`: (`enable` or `disable`) Disables the
  keyboard form accessory bar in an HTML form. The keyboard form
  accessory bar is a row of buttons (__Previous__, __Next__, and
  __Submit__) that the user can use to navigate through a form.  By
  default, when a WebWorks app contains an HTML form and an `<input>`
  element gets focus, WebWorks displays this form accessory bar. This
  feature allows you to prevent your app from displaying the form
  accessory bar by specifying value as `enable`.

        <preference name="hideKeyboardFormAccessoryBar" value="enable"/>

<!-- QUERY: appears for >1 input? -->

* `orientation`: (`auto`, `portrait`, or `landscape`) Specifies the
  persistent orientation for screens in your app. By default, if you
  do not specify a screen orientation, the orientation is set to auto.

        <preference name="orientation" value="landscape"/>

<!-- QUERY: different from default? -->

* `popupBlocker`: Enables the popup blocker. By default, all popups
  are displayed by BlackBerry WebWorks apps in a child browser
  window. You can prevent popups from displaying without user
  intervention by enabling the popup blocker. This is done by
  specifying value as `enable`.

        <preference name="popupBlocker" value="enable"/>

* `webSecurity`: Disables web security. Disabling web security allows
  you to access remote content from unknown sources during
  development.  Before packaging your app for distribution, you should
  remove this setting. This feature is intended as a development
  convenience only. In production, all URIs should be known and should
  be whitelisted using the `<access>` element. To disable, specify
  value as `disable`.

        <preference name="webSecurity" value="disable"/>

<!--

 #### Disable Cursor

* `disable-cursor` with values `true` or `false`

  * example: `<preference name="disable-cursor" value="true" />`

  * prevents a mouse-icon/cursor from being displayed on the app -
    desugars to `<rim:navigation />`. See [the BlackBerry
    documentation](https://bdsc.webapps.blackberry.com/html5/documentation/ww_developing/rim_navigation_element_1582456_11.html)
    for more details

  * default is _false_

-->

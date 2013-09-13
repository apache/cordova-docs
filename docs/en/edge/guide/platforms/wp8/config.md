---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Windows Phone Configuration

The `config.xml` file controls an app's basic settings that apply
across each application and CordovaWebView instance. This section
lists image-related settings that only apply to Windows Phone builds.
See The config.xml File for information on global configuration
options.

Cordova supports two kinds of Windows Phone icons, a regular icon and
a background tile image:

        <icon src="icons/winphone/icon.png"     gap:platform="winphone" />
        <icon src="icons/winphone/tileicon.png" gap:platform="winphone" gap:role="background" />

Windows Phone supports a single splash screen image as shown below.
Unlike other platforms, the image should be in _jpg_ format:

        <gap:splash src="splash/winphone/splash.jpg" gap:platform="winphone" />


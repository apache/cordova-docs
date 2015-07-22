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

title: Upgrading Cordova iOS
---

Upgrading Cordova iOS
=====================

## Upgrading Cordova 1.7.0 projects to 1.8.0 ##

1. **Install** Cordova 1.8.0
2. **Create a new project** - you will have to grab assets from this new project
3. **Copy** the **www/cordova-1.8.0.js** file from the new project into your **www** folder, and delete your **www/cordova-1.7.x.js** file
4. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **cordova-1.8.0.js** file

If you intend on using the **Capture API**, you will need the new **iPad retina-display** assets:

1.  **Copy** the **Resources/Capture.bundle** item from the new project into your project folder, over-writing your existing **Resources/Capture.bundle** item
2.  In your project, select the **Capture.bundle** item into Xcode into your Project Navigator, and press the **Delete** key, then select **Remove Reference** from the dialog that pops up.
3.  Drag the new **Capture.bundle** from Step 1. above into Xcode into your Project Navigator, and select the **Create groups for any added folders** radio-button

<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

Project Settings for Android
===================================

The **config.xml settings file** controls various settings of Cordova. This is application wide, and not set per CordovaWebView Instance.  For example:

        <cordova>
            <preference name="MySetting" value="true" />
            <plugins>
                <plugin name="MyPlugin" value="MyPluginClass" />
            </plugins>
            <access origin="*" />
        </cordova>

1. A list of **plugins** allowed to be used in a CordovaWebView.
2. A **white-list** of hosts that Cordova is allowed to connect to (add an **&lt;access&gt;** tag, and set the origin attribute - wildcards allowed)
3. Various **other** preferences (as **&lt;preference&gt;** tags) defaults err on not breaking existing apps)

a. **useBrowserHistory (boolean, defaults to true)** - set to false if you want to use the history shim that was used to work around the hashtag error present in Android 3.x prior to the history fix.  (Note: This setting will be deprecated in April 2013)
b. **loadingDialog** - Display a native loading dialog when loading the app.  Format for the value is "Title, Message"
c. **loadingPageDialog** - Display a native loading dialog when loading sub-pages. Format for the value is "Title, Message"
d. **errorUrl** - Set the error page for your application. Should be located in your Android project in file://android_asset/www/

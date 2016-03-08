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

title: Android WebViews
---

# Android WebViews

This guide shows how to embed a Cordova-enabled WebView component
within a larger Android application. For details on how these
components can communicate with each other, see Application Plugins.

If you're unfamiliar with Android, you should first familiarize
yourself with the [Android Platform Guide](index.html) and have the latest Android
SDK installed before you attempt the more unusual development option
of embedding a WebView.  Starting with Cordova 4.0, the Android
platform relies on a `SystemWebView` component.

1. To follow these instructions, make sure you have the latest Cordova
   distribution. Download it from
   [cordova.apache.org](http://cordova.apache.org) and unzip its
   Android package.

1. Create a project in Android Studio

1. Copy the framework directory into your project's root directory and name it
CordovaLib

1. Add CordovaLib in your settings.gradle file

include ':app', ':CordovaLib'

1. Add that project as a library project to your main project.  This can be done in your application's build.gradle file found in
app/build.gradle:

        dependencies {
              compile fileTree(dir: 'libs', include: ['*.jar'])
              compile 'com.android.support:appcompat-v7:21.0.3'
              //Add Cordova below
              debugCompile project(path: ":CordovaLib", configuration: "debug")
              releaseCompile project(path: ":CordovaLib", configuration: "release")
        }

1. Add the following to the application's `/res/xml/main.xml` file,
   with the `layout_height`, `layout_width` and `id` modified to suit
   the application:

        <org.apache.cordova.engine.SystemWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />

1. Add the following code to setup your Activity so that you have an interface

        private CordovaInterfaceImpl iface = new CordovaInterfaceImpl(this);

1. Add the following to intialize the WebView

        //Set up the webview
        ConfigXmlParser parser = new ConfigXmlParser();
        parser.parse(this);

        SystemWebView webView = (SystemWebView) findViewById(R.id.tutorialView);
        webInterface = new CordovaWebViewImpl(new SystemWebViewEngine(webView));
        webInterface.init(iface, parser.getPluginEntries(), parser.getPreferences());

        webView.loadUrl(parser.getLaunchUrl());


1. Copy the application's HTML and JavaScript files to the Android
   project's `app/src/main/assets/www` directory.

1. Copy the `config.xml` file from `/framework/res/xml` to the
   project's `app/src/main/res/xml` directory.

1. Plugins have to be manually installed since the CLI tools do not support Android Studio projects.

1. The following two callback methods have to be added to the main activity for plugins that use permissions and plugins that use callbacks to work correctly.

        @Override
        protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
            super.onActivityResult(requestCode, resultCode, intent);
            iface.onActivityResult(requestCode, resultCode, intent);
        }

        public void onRequestPermissionsResult(int requestCode, String permissions[],
                                           int[] grantResults) {
            try
            {
                iface.onRequestPermissionResult(requestCode, permissions, grantResults);
            }
            catch (JSONException e)
            {
                Log.d(TAG, "JSONException: Parameters fed into the method are not valid");
                e.printStackTrace();
            }
        }


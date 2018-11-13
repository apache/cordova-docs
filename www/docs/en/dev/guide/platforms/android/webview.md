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
of embedding a WebView.  Starting with Cordova 1.9, the Android
platform relies on a `CordovaWebView` component, which builds on a
legacy `CordovaActivity` component that pre-dates the 1.9 release.

1. To follow these instructions, make sure you have the latest Cordova
   distribution. Download it from
   [cordova.apache.org](http://cordova.apache.org) and unzip its
   Android package.

1. Follow [these instructions](https://cordova.apache.org/docs/en/latest/guide/cli/index.html) to build your first Cordova app

1. Copy Cordova framework files

* `platforms/android/CordovaLib/src/.*` to `<AndroidAppRoot>/app/main/java/`
* `platforms/android/src/*` to `<AndroidAppRoot>/app/main/java/`

1. Modify the layout file of the activity that shall host the Cordova view e.g.
```
<LinearLayout android:layout_width="fill_parent"
              android:layout_height="fill_parent"
              android:orientation="vertical"
              xmlns:android="http://schemas.android.com/apk/res/android">
    <org.apache.cordova.engine.SystemWebView
                android:id="@+id/cordovaWebView"
                android:layout_width="match_parent"
                android:layout_height="match_parent" />
</LinearLayout
```
1. Modify your activity so that the class extends `CordovaActivity` (found at `app/main/java/org/apache/cordova/CordovaActivity.java`)
```
public class TestActivity extends CordovaActivity {
    
}
```
   
1. Override `onCreate`, `makeWebView` and `createViews` to use your defined layout
```
@Override
public void onCreate(Bundle savedInstanceState) {
     super.onCreate(savedInstanceState);
     setContentView(R.layout.activity_test); // layout file for your activity
     super.init();
     loadUrl(launchUrl);
}

@Override
protected CordovaWebView makeWebView() {
    SystemWebView appView = (SystemWebView) findViewById(R.id.cordovaWebView);  //this is the id for the SystemWebView in step 4
    return new CordovaWebViewImpl(new SystemWebViewEngine(appView));
}

@Override
protected void createViews() {
    // leave empty so the layout is used
}
```

1. Copy the application's HTML and JavaScript files to the Android
   project's `/assets/www` directory.

1. Copy the `config.xml` file from `/res/xml` to the
   project's `/res/xml` directory.

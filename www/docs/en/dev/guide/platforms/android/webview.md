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

1. Navigate to the Android package's `/framework` directory and run
   `ant jar`. It creates the Cordova `.jar` file, formed as
   `/framework/cordova-x.x.x.jar`.

1. Copy the `.jar` file into the Android project's `/libs` directory.

1. Add the following to the application's `/res/xml/main.xml` file,
   with the `layout_height`, `layout_width` and `id` modified to suit
   the application:

        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />

1. Modify the activity so that it implements the `CordovaInterface`.
   It should implement the included methods.  You may wish to copy
   them from `/framework/src/org/apache/cordova/CordovaActivity.java`,
   or else implement them on your own.  The following code fragment
   shows a basic application that relies on the interface. Note how
   the referenced view id matches the `id` attribute specified in the
   XML fragment shown above:

        public class CordovaViewTestActivity extends Activity implements CordovaInterface {
            CordovaWebView cwv;
            /* Called when the activity is first created. */
            @Override
            public void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.main);
                cwv = (CordovaWebView) findViewById(R.id.tutorialView);
                Config.init(this);
                cwv.loadUrl(Config.getStartUrl());
            }

1. If the application needs to use the camera, implement the
   following:

        @Override
        public void setActivityResultCallback(CordovaPlugin plugin) {
            this.activityResultCallback = plugin;
        }
        /**
         * Launch an activity for which you would like a result when it finished. When this activity exits,
         * your onActivityResult() method is called.
         *
         * @param command           The command object
         * @param intent            The intent to start
         * @param requestCode       The request code that is passed to callback to identify the activity
         */
        public void startActivityForResult(CordovaPlugin command, Intent intent, int requestCode) {
            this.activityResultCallback = command;
            this.activityResultKeepRunning = this.keepRunning;

            // If multitasking turned on, then disable it for activities that return results
            if (command != null) {
                this.keepRunning = false;
            }

            // Start activity
            super.startActivityForResult(intent, requestCode);
        }

        @Override
        /**
         * Called when an activity you launched exits, giving you the requestCode you started it with,
         * the resultCode it returned, and any additional data from it.
         *
         * @param requestCode       The request code originally supplied to startActivityForResult(),
         *                          allowing you to identify who this result came from.
         * @param resultCode        The integer result code returned by the child activity through its setResult().
         * @param data              An Intent, which can return result data to the caller (various data can be attached to Intent "extras").
         */
        protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
            super.onActivityResult(requestCode, resultCode, intent);
            CordovaPlugin callback = this.activityResultCallback;
            if (callback != null) {
                callback.onActivityResult(requestCode, resultCode, intent);
            }
        }

1. Finally, remember to add the thread pool, otherwise plugins
   have no threads on which to run:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }

1. Copy the application's HTML and JavaScript files to the Android
   project's `/assets/www` directory.

1. Copy the `config.xml` file from `/framework/res/xml` to the
   project's `/res/xml` directory.

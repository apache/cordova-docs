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

Beginning in Cordova 1.9, with the assistance of the
`CordovaActivity`, you can use Cordova as a component in a larger
native Android application. Android refers to this component as the
`CordovaWebView`. New Cordova-based applications from 1.9 onwards use
the `CordovaWebView` as its main view, regardless of whether the
legacy `CordovaActivity` approach is used.

If you're unfamiliar with Android application development, please read
the [Android Platform Guide](../getting-started/android/index.html) to developing a Cordova Application before
attempting to include a WebView. It's not the main way to author
Android Cordova applications. These instructions are currently manual,
but may be eventually be automated.

## Prerequisites

* Cordova 1.9 or greater

* Android SDK updated to the latest SDK

## Guide to using CordovaWebView in an Android Project

1. `cd` into `/framework` and run `ant jar` to build the cordova jar. It creates the .jar file formed as `cordova-x.x.x.jar` in the `/framework` directory.

2. Copy the cordova jar into your Android project's `/libs` directory.

3. Edit your application's `main.xml` file (under `/res/xml`) to look like the following, with the `layout_height`, `layout_width` and `id` modified to suit your application:

        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />

4. Modify your activity so that it implements the `CordovaInterface`.  You should implement the included methods.  You may wish to copy them from `/framework/src/org/apache/cordova/CordovaActivity.java`, or implement them on your own.  The code fragment below shows a basic application that uses the interface. Note how the referenced view id matches the `id` attribute specified in the XML fragment shown above:

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

If you use the camera, you should also implement this:

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

Finally, remember to add the thread pool, otherwise the plugins have no threads to run on:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }

6. Copy your application's HTML and JavaScript files to your Android project's `/assets/www` directory.

7. Copy `config.xml` from `/framework/res/xml` to your project's `/res/xml` directory.

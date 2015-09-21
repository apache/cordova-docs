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

title: Amazon Fire OS WebViews
---

# Amazon Fire OS WebViews

Beginning with 3.0.0, you can use Cordova as a component in Amazon Fire OS applications. Amazon Fire OS refers to this component as `CordovaWebView`. `CordovaWebView` extends Amazon WebView that is built on the open source Chromium Project. By leveraging this feature, your web apps can utilize the latest HTML5 web standards running in a modern web runtime engine.

## Prerequisites

* Cordova 3.0.0 or greater

* Android SDK updated to the latest SDK

* Amazon WebView SDK

## Guide to using CordovaWebView in a Amazon Fire OS Project

1. Download and expand the [Amazon WebView SDK](https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv) , then copy the awv_interface.jar into `/framework/libs` directory. Create a libs/ folder if it doesn't exist.

2. `cd` into `/framework` and run `ant jar` to build the cordova jar. It creates the .jar file formed as `cordova-3.3.0.jar` in the `/framework` directory.

3. Edit your application's `main.xml` file (under `/res/layout`) to look like the following, with the `layout_height`, `layout_width` and `id` modified to suit your application:

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

6. Copy your application's HTML and JavaScript files to your Amazon Fire OS project's `/assets/www` directory.

7. Copy `config.xml` from `/framework/res/xml` to your project's `/res/xml` directory.

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

title: Embedding Cordova WebView on Android
---

Embedding Cordova WebView on Android
====================================

Beginning in Cordova 1.9, with the assistance of the `CordovaActivity`, you can use Cordova as a component in a larger native Android application. This component is known in Android
as the `CordovaWebView`. New Cordova-based applications from 1.9 onwards will be using the `CordovaWebView` as its main view, whether the legacy `DroidGap` approach is 
used or not.

The prerequisites are the same as the prerequisites for Android application development. It is assumed that you are familiar with Android development. If not, please
look at the Getting Started guide to developing a Cordova Application and start there before continuing with this approach. This is not the main approach used
to author Android Cordova applications. Thus the instructions are currently manual.  In the future, we may try to further automate project generation via this method.

Prerequisites
-------------

1. **Cordova 1.9** or greater
2. Android SDK updated with 15

Guide to using CordovaWebView in an Android Project
---------------------------------------------------

1. Use `bin/create` to fetch the commons-codec-1.6.jar
2. `cd` into `/framework` and run `ant jar` to build the cordova jar (it
   will create the .jar file in the form `cordova-x.x.x.jar` in the
   `/framework` folder)
3. Copy the cordova jar into your Android project's `/libs` directory
4. Edit your application's `main.xml` file (under `/res/xml`) to look similar the following. The `layout_height`, `layout_width` and `id` can be modified to suit your application

        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />

5. Modify your activity so that it implements the `CordovaInterface`.  It is recommended that you implement the methods that are included.  You may wish to copy the methods from `/framework/src/org/apache/cordova/DroidGap.java`, or you may wish to implement your own methods.  Below is a fragment of code from a basic application that uses the interface (note how the view id referenced matches the `id` attribute specified in the above XML fragment from step 4):

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

In addition to this, if you are using camera, you will want to implement this as well:

    @Override
    public void setActivityResultCallback(CordovaPlugin plugin) {
        this.activityResultCallback = plugin;        
    }
    /**
     * Launch an activity for which you would like a result when it finished. When this activity exits, 
     * your onActivityResult() method will be called.
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

Finally, remember to add the thread pool, otherwise the plugins will have no threads to run on.


    @Override
    public ExecutorService getThreadPool() {
        return threadPool;
    }

6. Copy your application's HTML and JavaScript used to the `/assets/www` directory of your Android project
7. Copy `cordova.xml` and `plugins.xml` from `/framework/res/xml` to the `/res/xml` folder in your project

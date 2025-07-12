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

1. Create a new or open an exisiting native application.

2. Add the Cordova-Android framework dependency to your app module's build configuration.

    If your build configuration uses Groovy DSL, update `app/build.gradle` with the following:

    ```groovy
    dependencies {
        implementation 'org.apache.cordova:framework:14.0.1'
    }
    ```

    If your build configuration uses Kotlin DSL, update `app/build.gradle.kts` with the following:

    ```kotlin
    dependencies {
        implementation("org.apache.cordova:framework:14.0.1")
    }
    ```

    After making any changes to your build configuration file, make sure to "**Sync Project with Gradle Files**" so it will checkout the framework.

    **Note:** Your build configuration may already includes a `dependencies` block, so simply add the `implementation` line within the existing block.

    **Note:** You can find a list of available versions of released Cordova-Android framework on [Sonatype Maven Central Repository](https://central.sonatype.com/artifact/org.apache.cordova/framework/versions) or any other mirror of the Maven Central Repository.

 3. Modify the layout file of the activity that shall host the Cordova view e.g.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:orientation="vertical"
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <org.apache.cordova.engine.SystemWebView
            android:id="@+id/cordovaWebView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
    </LinearLayout>
    ```

 4. Modify your activity to extend `CordovaActivity` and override the `onCreate`, `makeWebView` and `createViews` to use your defined layout:

    **Kotlin Example:**

    ```kotlin
    package org.apache.cordova.testapp

    import android.os.Bundle
    import android.view.View
    import androidx.activity.enableEdgeToEdge
    import org.apache.cordova.CordovaActivity
    import org.apache.cordova.CordovaWebView
    import org.apache.cordova.CordovaWebViewImpl
    import org.apache.cordova.engine.SystemWebView
    import org.apache.cordova.engine.SystemWebViewEngine

    class TestActivity : CordovaActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            enableEdgeToEdge()
            setContentView(R.layout.activity_test)
        }

        override fun makeWebView(): CordovaWebView {
            val appView = findViewById<View>(R.id.cordovaWebView) as SystemWebView
            return CordovaWebViewImpl(SystemWebViewEngine(appView))
        }

        override fun createViews() {
            // leave empty so the layout is used
        }
    }
    ```

    **Java Example:**

    ```java
    package org.apache.cordova.testapp;

    import android.os.Bundle;
    import android.view.View;
    import androidx.activity.enableEdgeToEdge;
    import org.apache.cordova.CordovaActivity;
    import org.apache.cordova.CordovaWebView;
    import org.apache.cordova.CordovaWebViewImpl;
    import org.apache.cordova.engine.SystemWebView;
    import org.apache.cordova.engine.SystemWebViewEngine;

    public class TestActivity extends CordovaActivity {
        @Override
        public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_test); // layout file for your activity
            super.init();
            loadUrl(launchUrl);
        }

        @Override
        protected CordovaWebView makeWebView() {
            SystemWebView appView = (SystemWebView) findViewById(R.id.cordovaWebView);  // id for the SystemWebView in previous step
            return new CordovaWebViewImpl(new SystemWebViewEngine(appView));
        }

        @Override
        protected void createViews() {
            // leave empty so the layout is used
        }
    }
    ```

3. Setup up the theming for your activity to comply with Cordova.

    As Cordova-Android framework displays a SplashScreen, we will need to update the native app's `themes.xml` to include a SplashScreen theme and `postSplashScreenTheme` for our Cordova activity.

    **Note:** Since `CordovaActivity` extends `AppCompatActivity`, the `postSplashScreenTheme` that the activity will transition to must inherit from a `Theme.AppCompat.*` style. For example, you can use `Theme.AppCompat.DayNight.NoActionBar` or a custom theme based on it.

    Below is an example and the theme names can be changed to your perfered naming.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <resources xmlns:tools="http://schemas.android.com/tools">
        <!-- The theme that will be used for the activity that displays Cordova -->
        <style name="Theme.MyCordovaAppSplashScreen" parent="Theme.SplashScreen.IconBackground">
            <item name="windowSplashScreenBackground">@color/black</item>
            <item name="windowSplashScreenAnimatedIcon">@drawable/ic_launcher_foreground</item>
            <item name="windowSplashScreenAnimationDuration">200</item>
            <item name="postSplashScreenTheme">@style/Theme.MyCordovaApp</item>
        </style>

        <!-- The Post SplashScreen Theme -->
        <style name="Theme.MyCordovaApp" parent="Theme.AppCompat.DayNight.NoActionBar" />
    </resources>
    ```
    Next, update the `android:theme` attribute for your Cordova `<activity>` to `@style/Theme.MyCordovaAppSplashScreen` .

4. Copy your application's web assets (HTML, CSS, JavaScript) to the Android project's `<app-root-directory>/app/src/main/assets/www/` directory.

5. Copy your `config.xml` file to your Android project's `<app-root-directory>/app/src/main/res/xml/` directory.

## Bonus: Jetpack Compose

If your native Android application uses Jetpack Compose instead of XML layouts, you can still integrate the Cordova WebView by writing your Activity like this:

```kotlin
package org.apache.cordova.testapp

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView
import org.apache.cordova.testapp.ui.theme.TestAppTheme
import org.apache.cordova.CordovaActivity
import org.apache.cordova.CordovaWebView
import org.apache.cordova.CordovaWebViewImpl
import org.apache.cordova.engine.SystemWebView
import org.apache.cordova.engine.SystemWebViewEngine

class TestActivity : CordovaActivity() {
    private lateinit var cordovaWebView: CordovaWebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        // Set up the Cordova WebView manually
        val systemWebView = SystemWebView(this)
        cordovaWebView = CordovaWebViewImpl(SystemWebViewEngine(systemWebView))

        setContent {
            // Make sure to change "TestAppTheme" with your app's custom Jetpack Compose theme function.
            TestAppTheme {
                CordovaWebViewContainer(systemWebView = systemWebView)
            }
        }

        loadUrl(launchUrl)
    }

    override fun makeWebView(): CordovaWebView {
        return cordovaWebView
    }

    override fun createViews() {
        // leave empty so the layout is used
    }
}

@Composable
fun CordovaWebViewContainer(systemWebView: SystemWebView) {
    AndroidView(
        factory = { systemWebView },
        modifier = Modifier.fillMaxSize()
    )
}
```

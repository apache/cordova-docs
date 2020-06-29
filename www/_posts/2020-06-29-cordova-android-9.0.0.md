---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 9.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 9.0.0`!  This is one of Cordova's supported platforms for building Android mobile applications.

* [cordova-android@9.0.0](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@9.0.0
```

## Release Highlights

* **Added Kotlin Support**

    Kotlin is one of the newest statically typed languages for developing Android apps. It is designed to work fully with the existing language, Java.

    By default, Cordova has Kotlin disabled but it can be enabled with [the `GradlePluginKotlinEnabled` preference][prefs] in `config.xml`.

    Additionally, Kotlin’s coding style and version are configurable. By default, Cordova sets the coding style as `official` and uses version `1.3.50`.

    Below is an example `config.xml` for enabling and configuring Kotlin.

    ```xml
    <preference name="GradlePluginKotlinEnabled" value="true" />
    <preference name="GradlePluginKotlinCodeStyle" value="official" />
    <preference name="GradlePluginKotlinVersion" value="1.3.50" />
    ```

    For plugin developers, it is recommended to ensure that the Kotlin files are placed into the platforms `src/main/kotlin` directory.

* **Added AndroidX Support**

    AndroidX is the new and improved namespace for the Android Support Libraries. The original support libraries are no longer maintained.

    It is recommended to use AndroidX so that your app is running the latest support libraries but, by default, Cordova has AndroidX support disabled for compatibility with existing plugins.

    A lot of the Android supported plugins are still using the old support libraries which can not build when using the AndroidX support libraries. It is recommended to research each plugin to see if they support AndroidX before enabling this feature.

    It is recommended for plugin developers to start migrating to support AndroidX. App developers could also use Jetifier to automatically migrates their existing third-party libraries to use AndroidX.

    You can enable this feature by setting [the `AndroidXEnabled` preference][prefs] to `true` in `config.xml`.

    ```xml
    <preference name="AndroidXEnabled" value="true" />
    ```

    If you were previously using the [cordova-plugin-androidx](https://www.npmjs.com/package/cordova-plugin-androidx) plugin to enable AndroidX support, this plugin is no longer needed with this preference flag.

    The [cordova-plugin-androidx-adapter](https://www.npmjs.com/package/cordova-plugin-androidx-adapter) plugin can be used to migrate the legacy references to the new AndroidX references.

* **Added Google Services Support**

    To use Google APIs or Firebase services, the Gradle plugin [Google Services](https://developers.google.com/android/guides/google-services-plugin) is required to be enabled when building your Android application.

    For plugin developers, this can be enabled by setting to the app's `config.xml` the `GradlePluginGoogleServicesEnabled` `preference` flag. From the `plugin.xml` file, you can do this by adding the following lines:

    ```xml
    <config-file target="config.xml" parent="/*">
        <preference name="GradlePluginGoogleServicesEnabled" value="true" />
        <preference name="GradlePluginGoogleServicesVersion" value="4.2.0" />
    </config-file>
    ```

* **Android Version Support Update**

    * The default target SDK version is set to 29.
    * The minimum SDK version is set to 22.
    * The minimum supported Android version is 5.1.

    **NOTE:** because Cordova has increased the minimum SDK version to 22, we **no longer support or test** with Android 5.0 or lower.

* **Gradle and Gradle Plugin Version Support Update**

    * Cordova has increased the default Gradle version to 6.5.
    * Cordova has increased the Gradle Plugin to version 4.0.0

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
## Full Changelog

* [GH-1005](https://github.com/apache/cordova-android/pull/1005) chore: set AndroidX off by default
* [GH-971](https://github.com/apache/cordova-android/pull/971) fix: Accept multiple mime types on file input
* [GH-1001](https://github.com/apache/cordova-android/pull/1001) fix: support both adaptive and standard icons at the same time
* [GH-985](https://github.com/apache/cordova-android/pull/985) fix: Plugin install fails when preview sdk is installed
* [GH-994](https://github.com/apache/cordova-android/pull/994) chore: cleanup yaml files
* [GH-999](https://github.com/apache/cordova-android/pull/999) chore: remove trailing spaces from Java sources
* [GH-992](https://github.com/apache/cordova-android/pull/992) chore: update some dependencies
* [GH-998](https://github.com/apache/cordova-android/pull/998) chore: remove trailing spaces from framework build files
* [GH-997](https://github.com/apache/cordova-android/pull/997) chore: remove trailing spaces from project template
* [GH-996](https://github.com/apache/cordova-android/pull/996) chore: remove trailing spaces from bat files
* [GH-995](https://github.com/apache/cordova-android/pull/995) remove trailing spaces from markdown files
* [GH-993](https://github.com/apache/cordova-android/pull/993) chore: update `devDependencies`
* [GH-987](https://github.com/apache/cordova-android/pull/987) breaking: reduce combined response cutoff to 16 MB
* [GH-988](https://github.com/apache/cordova-android/pull/988) major: Gradle 6.5 & **Android** Gradle plugin 4.0.0 updates
* [GH-990](https://github.com/apache/cordova-android/pull/990) chore: remove trailing spaces from `app/build.gradle`
* [GH-989](https://github.com/apache/cordova-android/pull/989) breaking: remove `legacy/build.gradle` from template
* [GH-978](https://github.com/apache/cordova-android/pull/978) fix: `wait_for_boot` waiting forever
* [GH-965](https://github.com/apache/cordova-android/pull/965) fix: Increased `detectArchitecture()` timeout
* [GH-962](https://github.com/apache/cordova-android/pull/962) breaking: Bump **Android** gradle plugin to 3.6.0
* [GH-948](https://github.com/apache/cordova-android/pull/948) feature: JVM Args flag
* [GH-951](https://github.com/apache/cordova-android/pull/951) fix: `ANDROID_SDK_ROOT` variable
* [GH-959](https://github.com/apache/cordova-android/pull/959) test: synced AndroidX gradle versions to the same version as the **Android** test
* [GH-960](https://github.com/apache/cordova-android/pull/960) feat: `com.android.tools.build:gradle:3.5.3`
* [GH-956](https://github.com/apache/cordova-android/pull/956) chore(npm): add `package-lock.json`
* [GH-958](https://github.com/apache/cordova-android/pull/958) chore(npm): add ignore list
* [GH-957](https://github.com/apache/cordova-android/pull/957) chore: various cleanup
* [GH-955](https://github.com/apache/cordova-android/pull/955) chore(eslint): bump package & apply eslint fix
* [GH-954](https://github.com/apache/cordova-android/pull/954) breaking(npm): bump packages
* [GH-953](https://github.com/apache/cordova-android/pull/953) chore(npm): use short notation in `package.json`
* [GH-823](https://github.com/apache/cordova-android/pull/823) fix: prevent exit fullscreen mode from closing application
* [GH-950](https://github.com/apache/cordova-android/pull/950) fix: removed redundent logcat print
* [GH-915](https://github.com/apache/cordova-android/pull/915) breaking: bump minSdkVersion to 22 and drop pre-Lollipop specific code
* [GH-941](https://github.com/apache/cordova-android/pull/941) fix: GH-873 App bundle builds to obey command-line arguments
* [GH-940](https://github.com/apache/cordova-android/pull/940) ci: drop travis & move codecov to gh-actions
* [GH-929](https://github.com/apache/cordova-android/pull/929) chore: updated `README` to reflect what **Android** requires more accurately, which is Java 8, not anything less, not anything greater. Java 1.8.x is required.
* [GH-937](https://github.com/apache/cordova-android/pull/937) fix: GH-935 replaced `compare-func` with native sort method
* [GH-939](https://github.com/apache/cordova-android/pull/939) fix: test failure with shebang interpreter in `rewired` files
* [GH-911](https://github.com/apache/cordova-android/pull/911) refactor: use es6 class
* [GH-910](https://github.com/apache/cordova-android/pull/910) refactor (eslint): use `cordova-eslint`
* [GH-909](https://github.com/apache/cordova-android/pull/909) chore: remove appveyor residual
* [GH-895](https://github.com/apache/cordova-android/pull/895) feat: add github actions
* [GH-842](https://github.com/apache/cordova-android/pull/842) refactor: remove `shelljs` dependency
* [GH-896](https://github.com/apache/cordova-android/pull/896) feat: add Kotlin support
* [GH-901](https://github.com/apache/cordova-android/pull/901) feat: add AndroidX support
* [GH-849](https://github.com/apache/cordova-android/pull/849) fix: cordova requirements consider the `android-targetSdkVersion`
* [GH-904](https://github.com/apache/cordova-android/pull/904) fix (adb): shell to return expected stdout
* [GH-792](https://github.com/apache/cordova-android/pull/792) feat: upgrade `gradle` to 6.1 & gradle build tools to 3.5.3
* [GH-902](https://github.com/apache/cordova-android/pull/902) chore: remove `.project` file & add `.settings` to `gitignore`
* [GH-900](https://github.com/apache/cordova-android/pull/900) refactor: simplify `doFindLatestInstalledBuildTools`
* [GH-751](https://github.com/apache/cordova-android/pull/751) feat: use Java package name for loading `BuildConfig`
* [GH-898](https://github.com/apache/cordova-android/pull/898) chore: rename gradle plugin google services `preference` options
* [GH-893](https://github.com/apache/cordova-android/pull/893) feat: add Google Services support
* [GH-709](https://github.com/apache/cordova-android/pull/709) feat: add `version-compare` library to compare `build-tools` versions properly.
* [GH-831](https://github.com/apache/cordova-android/pull/831) chore: ignore auto-generated eclipse buildship files
* [GH-848](https://github.com/apache/cordova-android/pull/848) breaking: increased default target sdk to 29
* [GH-859](https://github.com/apache/cordova-android/pull/859) breaking: removed unnecessary project name restriction
* [GH-833](https://github.com/apache/cordova-android/pull/833) chore: drop `q` module
* [GH-862](https://github.com/apache/cordova-android/pull/862) chore: replace `superspawn` & `child_process` with `execa`
* [GH-860](https://github.com/apache/cordova-android/pull/860) feat: don't filter gradle's stderr anymore
* [GH-832](https://github.com/apache/cordova-android/pull/832) chore: drop node 6 and 8 support
* [GH-890](https://github.com/apache/cordova-android/pull/890) chore: bump version to 9.0.0-dev
* [GH-697](https://github.com/apache/cordova-android/pull/697) chore: optimization code
* [GH-863](https://github.com/apache/cordova-android/pull/863) chore: removed comment that serves no purpose
* [GH-861](https://github.com/apache/cordova-android/pull/861) chore: update `jasmine` to 3.5.0
* [GH-858](https://github.com/apache/cordova-android/pull/858) chore: modernize our one E2E test
* [GH-854](https://github.com/apache/cordova-android/pull/854) chore: ensure to lint as many files as possible

[prefs]: https://cordova.apache.org/docs/en/latest/config_ref/index.html#preference

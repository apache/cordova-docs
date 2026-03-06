---
layout: post
author:
    name: Bryan Ellis
title:  "Cordova Android 15.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released `Cordova Android 15.0.0`! This is one of Cordova's supported platforms for building Android applications.

* [cordova-android@15.0.0](https://www.npmjs.com/package/cordova-android)

**To upgrade:**

```bash
cordova platform remove android
cordova platform add android@15.0.0
```

**To install:**

```bash
cordova platform add android@15.0.0
```

## Release Highlights

### BREAKING CHANGES

* **Increased Target SDK**

    This release has increased the target SDK to 36 (Android 15).

* **Project Dependencies**

    The following Gradle dependencies were bumpped:

    * Gradle: `8.14.2`
    * Android Gradle Plugin (AGP): `8.10.1`

    Additionally, the following libraries have been upgraded:

    * AndroidX App Compat - `1.7.1`
    * AndroidX WebKit - `1.14.0`

    If you or a plugin has made changes to any of the following configuration preferences, the build results might not match the expected outcomes with this release:

    |Preference|Default Value|
    |---|---|
    |`android-minSdkVersion`|24|
    |`android-maxSdkVersion`|_Not set_|
    |`android-targetSdkVersion`|36|
    |`android-compileSdkVersion`|_android-targetSdkVersion configured value_|
    |`android-buildToolsVersion`|36.0.0|
    |`GradleVersion`|8.14.2|
    |`AndroidGradlePluginVersion`|8.10.1|
    |`GradlePluginKotlinVersion`|2.1.21|
    |`AndroidXAppCompatVersion`|1.7.1|
    |`AndroidXWebKitVersion`|1.14.0|
    |`GradlePluginGoogleServicesVersion`|4.4.2|

    Please take note of the versions that have been updated in this release. If you have manually modified any of these values, it is recommended to review and update the preference values accordingly.

* **Increased Android Studio Requirement**

    With the increase of Android Gradle Plugin, "**Android Studio Meerkat Feature Drop**" is the minimum required version for building and running projects in Android Studio. This aligns with the [Android Gradle plugin and Android Studio compatibility](https://developer.android.com/build/releases/about-agp#android_gradle_plugin_and_android_studio_compatibility) documentation.

    Newer version of Android Studio are available but comes with untested version of Gradle. It is recommended to run `cordova build android` after adding the platform and before opening the project in Android Studio to ensure that the project sets up a supported version of Gradle.

* **Required Build Tools**

    To use `cordova-android@15.0.0`, SDK Platform `36` and SDK Build Tools `36.0.0` must be installed. Older build tools version can be uninstalled if older versions of cordova-android is no longer used in any of your projects.

    **Upgrade with Command-line tools:**

    The recommended way to install SDK Platform 36 and SDK Build Tools 36.0.0 is by using `sdkmanager`, which is part of Android's [Command-line tools](https://developer.android.com/tools/) package. The command-line tools is useful as it does not require Android Studio.

    At the time of writing, **version 20** of the Command-line tools was downloaded from Android Studio's SDK Manager and used. It can also be downloaded from the [Android Developers](https://developer.android.com/studio#command-line-tools-only) website.

    ```bash
    sdkmanager 'build-tools;36.0.0' 'platforms;android-36'
    ```

    You may need to run the `update` flag first:

    ```bash
    sdkmanager --update
    ```

    **Upgrade with Android Studio:**

    To install SDK Platform 36:

    1. Open Android Studio's **SDK Manager**:
    2. Click on `SDK Platforms` tab
    3. Check `Android 16.0 ("Baklava")` which has the `API Level` of `36`
    4. Click `Apply`

    <img src="{{ site.baseurl }}/static/img/blog/2026/cordova-android-16-platform-sdk-36.png" style="width: 100%;" alt="Android SDK Platform" />

    To install SDK Build Tools 36.0.0:

    5. Open Android Studio's **SDK Manager**:
    6. Click on `SDK Tools` tab
    7. Check `Show Package Details`
    8. Expand `Android SDK Build-Tools`
    9. Check `36.0.0`
    10. Click `Apply`

    <img src="{{ site.baseurl }}/static/img/blog/2026/cordova-android-16-sdk-build-tools-3600.png" style="width: 100%;" alt="Android SDK Build Tools" />

* **Increased Node.js Engine Requirement**

    The Node.js engine requirement in this release has been increased to version 20.17.0 or later.

* **Support Previous Non-Edge-to-Edge Functionality**

    By default, Android 16 enforces Edge-to-Edge with no way to disable it.

    In this major release, Apache Cordova has improved the system bar functionality to mimic the previous non-Edge-to-Edge behavior, allowing app developers to continue supporting a status bar.

    Users can still opt in to the Edge-to-Edge feature by using the `AndroidEdgeToEdge` preference flag introduced in Cordova-Android 14.

* **Support Night & Day Theme**

    Added partial support for automatically switching between night and day themes based on system settings when SplashScreen, StatusBar, or background-related preferences are not set.

### Fixes

* **Back button override on API 36+**

    Resolved an issue where Android API 36 crashes when the hardware back button is pressed.

* **Apply `repositories.gradle` for `cordova.gradle` dependencies**

    Resolved an issue where users were unable to override repository settings for build-related Gradle dependencies.

* **Handle uninstalling multiple plugin assets**

    Resolved an issue where plugins with multiple defined `<assets>` were not removed properly during uninstall.

<!--more-->
# Changes include:

**Breaking Changes:**

* feat!: support previous non-E2E ([#1817](https://github.com/apache/cordova-android/pull/1817)) [[76aa9380](https://github.com/apache/cordova-android/commit/76aa9380)]
* feat!: add partial night & day theme support ([#1818](https://github.com/apache/cordova-android/pull/1818)) [[60d28420](https://github.com/apache/cordova-android/commit/60d28420)]
* feat!: bump kotlin@2.1.21 ([#1814](https://github.com/apache/cordova-android/pull/1814)) [[72e71488](https://github.com/apache/cordova-android/commit/72e71488)]
* feat!: bump Gradle@8.14.2 & AGP@8.10.1 ([#1811](https://github.com/apache/cordova-android/pull/1811)) [[c25ed278](https://github.com/apache/cordova-android/commit/c25ed278)]
* feat!: bump sdk & build tools to 36 ([#1810](https://github.com/apache/cordova-android/pull/1810)) [[d8f6f377](https://github.com/apache/cordova-android/commit/d8f6f377)]
* feat!: remove unused getASPath.bat file ([#1808](https://github.com/apache/cordova-android/pull/1808)) [[7a47fe01](https://github.com/apache/cordova-android/commit/7a47fe01)]
* chore!: bump dependencies & update node engine requirement ([#1887](https://github.com/apache/cordova-android/pull/1887)) [[b4eadcce](https://github.com/apache/cordova-android/commit/b4eadcce)]
* chore!: update dependencies ([#1843](https://github.com/apache/cordova-android/pull/1843)) [[488c4987](https://github.com/apache/cordova-android/commit/488c4987)]
* chore!: update template defaults ([#1837](https://github.com/apache/cordova-android/pull/1837)) [[e4457f7f](https://github.com/apache/cordova-android/commit/e4457f7f)]
* chore(npm)!: bump cordova-common@6.0.0 w/ rebuilt package-lock.json ([#1835](https://github.com/apache/cordova-android/pull/1835)) [[8742cfe4](https://github.com/apache/cordova-android/commit/8742cfe4)]

**Features:**

* feat: Allows additional settings to be included on settings.gradle ([#1819](https://github.com/apache/cordova-android/pull/1819)) [[5bca218e](https://github.com/apache/cordova-android/commit/5bca218e)]
* feat: replace nyc with c8 ([#1844](https://github.com/apache/cordova-android/pull/1844)) [[7d7f5110](https://github.com/apache/cordova-android/commit/7d7f5110)]
* feat: allow disabling splash screen for embedded Cordova ([#1824](https://github.com/apache/cordova-android/pull/1824)) [[c2cf589d](https://github.com/apache/cordova-android/commit/c2cf589d)]
* feat: AndroidShowDeprecations preference flag ([#1822](https://github.com/apache/cordova-android/pull/1822)) [[0190d2e3](https://github.com/apache/cordova-android/commit/0190d2e3)]
* feat: androidx.appcompat:appcompat@1.7.1 ([#1813](https://github.com/apache/cordova-android/pull/1813)) [[36bee664](https://github.com/apache/cordova-android/commit/36bee664)]
* feat: androidx.webkit:webkit@1.14.0 ([#1812](https://github.com/apache/cordova-android/pull/1812)) [[4dcfc361](https://github.com/apache/cordova-android/commit/4dcfc361)]
* feat(CallbackContext): add success method for boolean ([#1864](https://github.com/apache/cordova-android/pull/1864)) [[6b76757c](https://github.com/apache/cordova-android/commit/6b76757c)]

**Fixes:**

* fix: Potential NPE when handling generic exceptions ([#1878](https://github.com/apache/cordova-android/pull/1878)) [[7a353fe8](https://github.com/apache/cordova-android/commit/7a353fe8)]
* fix: opaque navigation bar in edge to edge ([#1867](https://github.com/apache/cordova-android/pull/1867)) [[eaca570c](https://github.com/apache/cordova-android/commit/eaca570c)]
* fix: cordova requirements command and SDK lookup based on tools ([#1877](https://github.com/apache/cordova-android/pull/1877)) [[76bac55f](https://github.com/apache/cordova-android/commit/76bac55f)]
* fix: re-expose and support pollOnce ([#1854](https://github.com/apache/cordova-android/pull/1854)) [[655aa0a5](https://github.com/apache/cordova-android/commit/655aa0a5)]
* fix: edge to edge/fullscreen margins ([#1847](https://github.com/apache/cordova-android/pull/1847)) [[360be21e](https://github.com/apache/cordova-android/commit/360be21e)]
* fix: Deprecation warning in PluginManager for using Class.newInstance ([#1823](https://github.com/apache/cordova-android/pull/1823)) [[eb5fe4fb](https://github.com/apache/cordova-android/commit/eb5fe4fb)]
* fix: Back button override on API 36+ ([#1831](https://github.com/apache/cordova-android/pull/1831)) [[46af3114](https://github.com/apache/cordova-android/commit/46af3114)]
* fix: gradle deprecation warnings about property assignment ([#1821](https://github.com/apache/cordova-android/pull/1821)) [[df36c7a2](https://github.com/apache/cordova-android/commit/df36c7a2)]
* fix: replace deprecated fs.F_OK with fs.constants.F_OK ([#1820](https://github.com/apache/cordova-android/pull/1820)) [[b7923261](https://github.com/apache/cordova-android/commit/b7923261)]
* fix: apply repositories.gradle for cordova.gradle dependencies ([#1816](https://github.com/apache/cordova-android/pull/1816)) [[cab5c5b7](https://github.com/apache/cordova-android/commit/cab5c5b7)]
* fix(plugins): remove from platformWWW by default ([#1807](https://github.com/apache/cordova-android/pull/1807)) [[f0e88856](https://github.com/apache/cordova-android/commit/f0e88856)]
* fix(plugins): rename & match removeFileF logic with other platforms ([#1806](https://github.com/apache/cordova-android/pull/1806)) [[5dc9c728](https://github.com/apache/cordova-android/commit/5dc9c728)]
* fix(plugins): handle uninstalling multiple plugin assets ([#1805](https://github.com/apache/cordova-android/pull/1805)) [[08b8a954](https://github.com/apache/cordova-android/commit/08b8a954)]
* fix(statusbar): inject script block to compute color & replace padStart w/ logic supported on SDK 24 ([#1853](https://github.com/apache/cordova-android/pull/1853)) [[52578ae7](https://github.com/apache/cordova-android/commit/52578ae7)]
* fix(windows): Escape back-slashes for gradle config jdk path ([#1876](https://github.com/apache/cordova-android/pull/1876)) [[fb562f4e](https://github.com/apache/cordova-android/commit/fb562f4e)]

**Chores:**

* chore: add license header to template gitignore ([#1893](https://github.com/apache/cordova-android/pull/1893)) [[ffa77cad](https://github.com/apache/cordova-android/commit/ffa77cad)]
* chore: update RELEASENOTES.md ([#1892](https://github.com/apache/cordova-android/pull/1892)) [[5003275b](https://github.com/apache/cordova-android/commit/5003275b)]
* chore: license, license headers & CI & draft workflow improvements ([#1891](https://github.com/apache/cordova-android/pull/1891)) [[d426e0ff](https://github.com/apache/cordova-android/commit/d426e0ff)]
* chore: update changelog ([#1890](https://github.com/apache/cordova-android/pull/1890)) [[aaf46bb2](https://github.com/apache/cordova-android/commit/aaf46bb2)]
* chore(ci): get npm package filename from json output ([#1889](https://github.com/apache/cordova-android/pull/1889)) [[7fbdee1e](https://github.com/apache/cordova-android/commit/7fbdee1e)]
* chore: minor changes to DEVELOPMENT.md ([#1884](https://github.com/apache/cordova-android/pull/1884)) [[edf34400](https://github.com/apache/cordova-android/commit/edf34400)]
* chore: add DEVELOPMENT.md & cleanup README.md ([#1883](https://github.com/apache/cordova-android/pull/1883)) [[31364a97](https://github.com/apache/cordova-android/commit/31364a97)]
* chore: update release audit workflow & license headers ([#1870](https://github.com/apache/cordova-android/pull/1870)) [[d7afba0a](https://github.com/apache/cordova-android/commit/d7afba0a)]
* chore: bump 15.0.0-dev ([#1803](https://github.com/apache/cordova-android/pull/1803)) [[00744c4f](https://github.com/apache/cordova-android/commit/00744c4f)]
* chore: bump version 14.0.2-dev [[872d9887](https://github.com/apache/cordova-android/commit/872d9887)]
* chore(ci): draft release ([#1882](https://github.com/apache/cordova-android/pull/1882)) [[347e2add](https://github.com/apache/cordova-android/commit/347e2add)]
* chore(deps-dev): bump js-yaml from 4.1.0 to 4.1.1 ([#1869](https://github.com/apache/cordova-android/pull/1869)) [[ebe6890d](https://github.com/apache/cordova-android/commit/ebe6890d)]
* chore(deps-dev): bump tmp from 0.2.3 to 0.2.4 ([#1834](https://github.com/apache/cordova-android/pull/1834)) [[af1ae68a](https://github.com/apache/cordova-android/commit/af1ae68a)]
* chore(deps): bump lodash from 4.17.21 to 4.17.23 ([#1879](https://github.com/apache/cordova-android/pull/1879)) [[2ea3a731](https://github.com/apache/cordova-android/commit/2ea3a731)]
* chore(deps): bump glob from 10.4.5 to 10.5.0 ([#1868](https://github.com/apache/cordova-android/pull/1868)) [[172b8448](https://github.com/apache/cordova-android/commit/172b8448)]
* chore(readme): added nightly build section ([#1873](https://github.com/apache/cordova-android/pull/1873)) [[eaf875b0](https://github.com/apache/cordova-android/commit/eaf875b0)]

**Other:**

* ci: use macos-15 ([#1829](https://github.com/apache/cordova-android/pull/1829)) [[1204a793](https://github.com/apache/cordova-android/commit/1204a793)]
* ci: update workflow - added node 24, permission scoping & codecov pinning ([#1804](https://github.com/apache/cordova-android/pull/1804)) [[60244658](https://github.com/apache/cordova-android/commit/60244658)]
* ci(release-audit): use latest apache-rat-action ([#1809](https://github.com/apache/cordova-android/pull/1809)) [[6b8e819f](https://github.com/apache/cordova-android/commit/6b8e819f)]
* ci(workflow): update release-audit & license config ([#1828](https://github.com/apache/cordova-android/pull/1828)) [[bf0ba3dd](https://github.com/apache/cordova-android/commit/bf0ba3dd)]
* dep(npm): bump @cordova/eslint-config@6.0.0 ([#1830](https://github.com/apache/cordova-android/pull/1830)) [[56afb708](https://github.com/apache/cordova-android/commit/56afb708)]
* doc(readme): update github and npm version badges ([#1872](https://github.com/apache/cordova-android/pull/1872)) [[8c8fbc9a](https://github.com/apache/cordova-android/commit/8c8fbc9a)]
* test(plugins): remove old deprecated android_studio option ([#1815](https://github.com/apache/cordova-android/pull/1815)) [[484c60e4](https://github.com/apache/cordova-android/commit/484c60e4)]

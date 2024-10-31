---
layout: post
author:
    name: Norman Breau
    url: https://breautek.com
title:  "Camera Plugin 8.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that we have just released a major update for `cordova-plugin-camera`!

* [cordova-plugin-camera@8.0.0](https://www.npmjs.com/package/cordova-plugin-camera)

**To upgrade:**

```bash
cordova plugin remove cordova-plugin-camera
cordova plugin add cordova-plugin-camera@8.0.0
```

## Release Highlights

This is a major update as it includes some breaking public API mechanisms, for the better!

The breaking changes includes:
- [getPicture](#getpicture)
- [URI Persistence](#uri-persistence)
- [Optional WRITE_EXTERNAL_STORAGE](#optional-write_external_storage-permission)

Additionally the `allowEdit` feature is now deprecated. [See more details](#deprecation-allowedit).


### getPicture

The Camera plugin previously was very inconsistent with the return paths when using `getPicture` API. Sometimes it was `file://` uri, sometimes it was a raw file path. Applications would have to check and usually prefix the path themselves to make any use of them. So we've streamlined the returned data as URIs.

All platforms consistently return a `<scheme>:...` now.

For all platforms, when using the `DATA_URL` option, the returned base64 encoed image used to return just the base64 encoded part. As of v8.0.0, the returned string now includes the `data:` uri header, including the MIME type that the base64 data represents.

For iOS, `file://` uris were previously returned consistently. So no changes were made here.

For Android, the API behaved consistently depending on the underlying source of the content. Most of the time a raw file path was returned. It will now always return a URI of some sort, though unlike iOS, it is unsafe to assume it will be a `file://` uri.

If you were testing and prefixing your file paths, you no longer required to. All URIs returned when using `FILE_URI` option is resolvable by `cordova-plugin-file@8.1.2` and later.

For examples on how to use the results, see the [Camera Plugin Documentation](https://github.com/apache/cordova-plugin-camera?tab=readme-ov-file#take-a-picture-and-get-a-fileentry-object-)

### URI Persistence

For all platforms using `FILE_URI` option, the returned URI is **temporarily access** only.

When sourcing content from the camera, the file is stored in the app's temporary directory, which the OS may clear out at any time when disk space is sparse.

<!-- For iOS, this might not be completely accurate, but for the sake of making the blog brief/simple, I'm omitting this fact -->
When sourcing content from the user's gallery, the returned URI has a temporarily read permission provided by the OS which expires once the application exits.

This means that the URI returned by `getPicture` should not be stored. The application should decide what to do with it depending on their needs and requirements.

**Example 1:** The application is receiving an image for the user's profile picture and it will require persistent access to that content.

Solution: The application should copy the content to the app's data directory and store and use the copied URI instead.

**Example 2:** The application is receiving an image to edit or make manipulations. It just needs one-time read to load into memory to put the data in an image editor.

Solution: The application can safely use the temporarily URI to read and display the content and save the manipulated data later.

### Optional WRITE_EXTERNAL_STORAGE Permission

For Android 7 - 12, this plugin used to always include the `WRITE_EXTERNAL_STORAGE` permission, and for implementation reasons it was required to operate.

As of v8.0.0, the Camera plugin no longer automatically includes the permission declaration, as in most cases it is no longer required.

If your application enables the `saveToPhotoAlbum` option, then you'll need to add the following to the `config.xml` file:

```xml
<platform name="android">
    <config-file target="AndroidManifest.xml" parent="/*" xmlns:android="http://schemas.android.com/apk/res/android">
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="28" />
    </config-file>
</platform>
```

If your application does not use `saveToPhotoAlbum`, then your application does not require any permissions to operate both the camera, or picking from the user's gallery.

Attempting to use `saveToPhotoAlbum` without declaring the `WRITE_EXTERNAL_STORAGE` will result in an error being returned on Android 7, Android 8, and Android 9 devices.

### Deprecation: allowEdit

The `allowEdit` feature when capturing images from the camera, or selecting images from the gallery
is now deprecated. Behaviour of this feature was inconsistent across platforms, and often times is
unreliable as it was dependent on support of the underlying Camera application which
was not standard.

The feature still exists for the time being and should work as-is given it's documented caveats,
but Apache Cordova will no longer provide support for issues arising from using
the feature. The `allowEdit` option is scheduled to be completely removed at a later date with
no direct replacement.

Users using the `allowEdit` feature should move to a dedicated image manipulation library.

### Known Issues

#### iOS 

The `FileEntry.toURL` method on iOS does not produce a DOM-usable uri while
the application is configured to use schemes. A [fix](https://github.com/apache/cordova-plugin-file/pull/642)
for this will be available at an later date. In the meantime, the following can
be used as a workaround:

```javascript
// TODO: Remove when https://github.com/apache/cordova-plugin-file/pull/642 is released
function toDomURL(fileEntry) {
    if (cordova.platform === "ios") {
        return window.WkWebView.convertFilePath(fileEntry.nativeUrl);
    }
    else {
        return fileEntry.toURL();
    }
}
```

If your app is still hosted on the `file://` protocol on iOS, then the
workaround is not necessary.

#### Android

Android will start returning `content://` instead of `file://` URIs when
selecting images from the user's gallery in order to make use of the underlying
MediaStore APIs. In order for these paths to be resolvable to a DOM-usable URL,
the `AndroidInsecureFileModeEnabled` preference must be `"false"` (the default value).

Please report any issues you find by following the
[How to File a Bug](https://github.com/apache/cordova#filing-a-bug) guide!

<!--more-->
# Changes include:

**Breaking:**
* [GH-902](https://github.com/apache/cordova-plugin-camera/pull/902) fix(android): always return uris (#902)
* [GH-909](https://github.com/apache/cordova-plugin-camera/pull/909) refactor(android): Make WRITE_EXTERNAL_STORAGE optional (#909)
* [GH-910](https://github.com/apache/cordova-plugin-camera/pull/910) fix(android): Return data uris as an URI (#910)
* [GH-911](https://github.com/apache/cordova-plugin-camera/pull/911) fix(ios): Sync camera API return to match Android changes (#911)
* [GH-912](https://github.com/apache/cordova-plugin-camera/pull/912) fix(browser): Make data uri be returned as actual URI strings (#912)
* [GH-915](https://github.com/apache/cordova-plugin-camera/pull/915) fix(android): remove WRITE_EXTERNAL_PERMISSION (#915)

**Improvements:**
* [GH-901](https://github.com/apache/cordova-plugin-camera/pull/901) fix(android): Isolate provider access to a subdirectory (#901)
* [GH-904](https://github.com/apache/cordova-plugin-camera/pull/904) fix(android): Use VERSION_CODES instead of hard-coded API literals (#904)
* [GH-906](https://github.com/apache/cordova-plugin-camera/pull/906) refactor(android): replace image path usage with image uris
* [GH-907](https://github.com/apache/cordova-plugin-camera/pull/907) refactor(android): remove query img usage (#907)

**Fixes:**
* [GH-903](https://github.com/apache/cordova-plugin-camera/pull/903) fix(android): Improper serialization of image uri in save instance state (#903)
* [GH-905](https://github.com/apache/cordova-plugin-camera/pull/905) fix(android): improper cache path construction during image manipulation (#905)

**Deprecations:**
* [GH-914](https://github.com/apache/cordova-plugin-camera/pull/914) deprecation: allowEdit (#914)

**Documentation:**
* [GH-913](https://github.com/apache/cordova-plugin-camera/pull/913) docs: Revisions for v8 public API changes with the return string formats of getPicture (#913)

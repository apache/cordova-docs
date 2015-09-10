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
---

# <a href="fileobj/fileobj.html">File</a>

> An API to read, write and navigate file system hierarchies, based on the [w3c file api](http://www.w3.org/TR/<a href="fileobj/fileobj.html">File</a>API).

## Objects

- <a href="directoryentry/directoryentry.html">DirectoryEntry</a>
- <a href="directoryreader/directoryreader.html">DirectoryReader</a>
- <a href="fileobj/fileobj.html">File</a>
- <a href="fileentry/fileentry.html"><a href="fileobj/fileobj.html">File</a>Entry</a>
- <a href="fileerror/fileerror.html"><a href="fileobj/fileobj.html">File</a>Error</a>
- <a href="filereader/filereader.html"><a href="fileobj/fileobj.html">File</a>Reader</a>
- <a href="filesystem/filesystem.html"><a href="fileobj/fileobj.html">File</a>System</a>
- <a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>
- <a href="filetransfererror/filetransfererror.html"><a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>Error</a>
- <a href="fileuploadoptions/fileuploadoptions.html"><a href="fileobj/fileobj.html">File</a>UploadOptions</a>
- <a href="fileuploadresult/fileuploadresult.html"><a href="fileobj/fileobj.html">File</a>UploadResult</a>
- <a href="filewriter/filewriter.html"><a href="fileobj/fileobj.html">File</a>Writer</a>
- <a href="flags/flags.html">Flags</a>
- Local<a href="filesystem/filesystem.html"><a href="fileobj/fileobj.html">File</a>System</a>
- <a href="metadata/metadata.html">Metadata</a>

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
        
To use the file-transfer plugin you must add that separately. Do not add the file plugin manually because it will be automatically added as a dependency plugin by the CLI. 
        
        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file',
          'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

        (after adding just the file plugin)
        (in app/res/xml/config.xml)
        <feature name="<a href="fileobj/fileobj.html">File</a>">
            <param name="android-package" value="org.apache.cordova.<a href="fileobj/fileobj.html">File</a>Utils" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

        (after adding just the file-transfer plugin)
        (in app/res/xml/config.xml)
        <feature name="<a href="fileobj/fileobj.html">File</a>">
            <param name="android-package" value="org.apache.cordova.<a href="fileobj/fileobj.html">File</a>Utils" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>">
            <param name="android-package" value="org.apache.cordova.filetransfer.<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="<a href="fileobj/fileobj.html">File</a>">
            <param name="blackberry-package" value="org.apache.cordova.file.<a href="fileobj/fileobj.html">File</a>Manager" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>">
            <param name="blackberry-package" value="org.apache.cordova.http.<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>

* iOS (in `config.xml`)

        <feature name="<a href="fileobj/fileobj.html">File</a>">
            <param name="ios-package" value="CDV<a href="fileobj/fileobj.html">File</a>" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>">
            <param name="ios-package" value="CDV<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>" />
        </feature>

Some platforms may support this feature without requiring any special
configuration.  See _Platform Support_ in the <a href="../../guide/overview/index.html">Overview</a> section.

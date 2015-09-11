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

<a href="fileobj/fileobj.html">File</a>
==========

>  This API is based on the W3C [<a href="fileobj/fileobj.html">File</a> API](http://www.w3.org/TR/<a href="fileobj/fileobj.html">File</a>API). An API to read, write and navigate file system hierarchies.

Objects
-------

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

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="<a href="fileobj/fileobj.html">File</a>" value="org.apache.cordova.<a href="fileobj/fileobj.html">File</a>Utils" />
    <plugin name="<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>" value="org.apache.cordova.<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### Bada

    No permissions are required.

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="<a href="fileobj/fileobj.html">File</a>" value="org.apache.cordova.file.<a href="fileobj/fileobj.html">File</a>Manager" />
    <plugin name="<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>" value="org.apache.cordova.http.<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a>" />

#### www/config.xml

    <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
    <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
    <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
    <rim:permissions>
        <rim:permit>access_shared</rim:permit>
    </rim:permissions>

### iOS

#### App/Supporting <a href="fileobj/fileobj.html">File</a>s/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key><a href="fileobj/fileobj.html">File</a></key>
        <string>CDV<a href="fileobj/fileobj.html">File</a></string>
    </dict>

    <key>Plugins</key>
    <dict>
        <key><a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a></key>
        <string>CDV<a href="filetransfer/filetransfer.html"><a href="fileobj/fileobj.html">File</a>Transfer</a></string>
    </dict>

### webOS

    No permissions are required.

### Windows Phone

    No permissions are required.

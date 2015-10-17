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

title: File
---

[File](fileobj/fileobj.html)
==========

> An API to read, write and navigate file system hierarchies, based on the [W3C [File](fileobj/fileobj.html) API](http://www.w3.org/TR/FileAPI).

Objects
-------

- [DirectoryEntry](directoryentry/directoryentry.html)
- [DirectoryReader](directoryreader/directoryreader.html)
- [File](fileobj/fileobj.html)
- [FileEntry](fileentry/fileentry.html)
- [FileError](fileerror/fileerror.html)
- [FileReader](filereader/filereader.html)
- [FileSystem](filesystem/filesystem.html)
- [FileTransfer](filetransfer/filetransfer.html)
- [FileTransferError](filetransfererror/filetransfererror.html)
- [FileUploadOptions](fileuploadoptions/fileuploadoptions.html)
- [FileUploadResult](fileuploadresult/fileuploadresult.html)
- [FileWriter](filewriter/filewriter.html)
- [Flags](flags/flags.html)
- [LocalFileSystem](localfilesystem/localfilesystem.html)
- [Metadata](metadata/metadata.html)


## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git
        $ cordova plugin rm org.apache.cordova.core.file
        
To use the file-transfer plugin you must add that separately.
        
        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
        $ cordova plugin rm org.apache.cordova.core.file-transfer

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="FileTransfer">
            <param name="blackberry-package" value="org.apache.cordova.http.FileTransfer" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>

* iOS (in `config.xml`)

        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.

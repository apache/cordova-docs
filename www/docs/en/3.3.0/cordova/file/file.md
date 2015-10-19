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

# File

> An API to read, write and navigate file system hierarchies, based on the [w3c file api](http://www.w3.org/TR/FileAPI).

## Objects

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
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
        
You must add the `file-transfer` plugin separately. The CLI
automatically adds the `file` plugin as a dependency, so there is no
need to add it separately:

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file',
          'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS

        (after adding just the file plugin)
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.file.FileUtils" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

        (after adding just the file-transfer plugin)
        (in app/res/xml/config.xml)
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.filetransfer.FileTransfer" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* Android

        (after adding just the file plugin)
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.file.FileUtils" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

        (after adding just the file-transfer plugin)
        (in app/res/xml/config.xml)
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.filetransfer.FileTransfer" />
        </feature>

        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

* BlackBerry 10

        (in www/config.xml)
        <feature name="File" value="File" />

* iOS (in the named application directory's `config.xml`)

        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>

Some platforms may support this feature without requiring any special
configuration.  See [Platform Support](../../guide/support/index.html) for an overview.

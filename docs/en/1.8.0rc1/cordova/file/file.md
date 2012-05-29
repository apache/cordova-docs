---
license: Licensed to the Apache Software Foundation (ASF) under one
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

File
==========

>  This API is based on the W3C [File API](http://www.w3.org/TR/FileAPI). An API to read, write and navigate file system hierarchies.

Objects
-------

- DirectoryEntry
- DirectoryReader
- File
- FileEntry
- FileError
- FileReader
- FileSystem
- FileTransfer
- FileTransferError
- FileUploadOptions
- FileUploadResult
- FileWriter
- Flags
- LocalFileSystem
- Metadata

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="File" value="org.apache.cordova.FileUtils"/>
    <plugin name="FileTransfer" value="org.apache.cordova.FileTransfer"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />   

### Bada

    @TODO

### BlackBerry WebWorks

#### www/plugins.xml

   <plugin name="File" value="org.apache.cordova.file.FileManager"/>
   <plugin name="FileTransfer"   value="org.apache.cordova.http.FileTransfer"/>

#### www/config.xml
   <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
   <feature id="blackberry.utils" required="true" version="1.0.0.0" />
   <feature id="blackberry.io.dir" required="true" version="1.0.0.0" />
   <rim:permissions>
       <rim:permit>access_shared</rim:permit>
   </rim:permissions>
### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>File</key>
        <string>CDVFile</string>
    </dict>
    
    <key>Plugins</key>
    <dict>
        <key>FileTransfer</key>
        <string>CDVFileTransfer</string>
    </dict>

### webOS

    @TODO

### Windows Phone

    No additional permissions required.

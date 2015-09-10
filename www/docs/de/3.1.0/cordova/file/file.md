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

# <a href="fileobj/fileobj.html">Datei</a>

> Eine API zum Lesen, schreiben und navigieren Sie <a href="fileobj/fileobj.html">Datei</a>-System-Hierarchien, basierend auf der [w3c <a href="fileobj/fileobj.html">Datei</a> api][1].

 [1]: http://www.w3.org/TR/FileAPI

## Objekte

*   <a href="directoryentry/directoryentry.html">DirectoryEntry</a>
*   <a href="directoryreader/directoryreader.html">DirectoryReader</a>
*   <a href="fileobj/fileobj.html">Datei</a>
*   <a href="fileentry/fileentry.html">FileEntries</a>
*   <a href="fileerror/fileerror.html">FileError</a>
*   <a href="filereader/filereader.html">FileReader</a>
*   <a href="filesystem/filesystem.html"><a href="fileobj/fileobj.html">Datei</a>system</a>
*   <a href="filetransfer/filetransfer.html">FileTransfer</a>
*   <a href="filetransfererror/filetransfererror.html"><a href="filetransfer/filetransfer.html">FileTransfer</a>Error</a>
*   <a href="fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>
*   <a href="fileuploadresult/fileuploadresult.html">FileUploadResult</a>
*   <a href="filewriter/filewriter.html">FileWriter</a>
*   Flaggen
*   <a href="localfilesystem/localfilesystem.html">LocalFileSystem</a>
*   <a href="metadata/metadata.html">Metadaten</a>

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova <a href="../device/device.html">Gerät</a>eebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

Um die <a href="fileobj/fileobj.html">Datei</a>übertragung-Plugin zu verwenden, müssen Sie, die separat hinzufügen.

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html">FileTransfer</a>">
            <param name="android-package" value="org.apache.cordova.<a href="filetransfer/filetransfer.html">FileTransfer</a>" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html">FileTransfer</a>">
            <param name="blackberry-package" value="org.apache.cordova.http.<a href="filetransfer/filetransfer.html">FileTransfer</a>" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>
        

*   iOS (in`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html">FileTransfer</a>">
            <param name="ios-package" value="CDV<a href="filetransfer/filetransfer.html">FileTransfer</a>" />
        </feature>
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der <a href="../../guide/overview/index.html">Übersicht</a>.
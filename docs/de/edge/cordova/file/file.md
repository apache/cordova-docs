---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Datei

> Eine API zum Lesen, schreiben und navigieren Sie Datei-System-Hierarchien, basierend auf der [w3c Datei api][1].

 [1]: http://www.w3.org/TR/FileAPI

## Objekte

*   DirectoryEntry
*   DirectoryReader
*   Datei
*   FileEntries
*   FileError
*   FileReader
*   Dateisystem
*   FileTransfer
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   Flaggen
*   LocalFileSystem
*   Metadaten

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

Um die Dateiübertragung-Plugin zu verwenden, müssen Sie, die separat hinzufügen.

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
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
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
        

*   iOS (in`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.
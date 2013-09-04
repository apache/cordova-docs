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

# File

> Un'API per leggere, scrivere e navigare gerarchie file di sistema, basati su [File API di W3C][1].

 [1]: http://www.w3.org/TR/FileAPI

## Oggetti

*   DirectoryEntry
*   DirectoryReader
*   File
*   FileEntry
*   FileError
*   FileReader
*   FileSystem
*   FileTransfer
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   Bandiere
*   LocalFileSystem
*   Metadati

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git
        $ cordova plugin rm org.apache.cordova.core.file
    

Per utilizzare il plugin di trasferimento file è necessario aggiungere che separatamente.

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
        $ cordova plugin rm org.apache.cordova.core.file-transfer
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/XML/config.Xml) < nome funzione = "File" >< param nome = "android-pacchetto" value="org.apache.cordova.FileUtils" / >< / caratteristica >< nome funzione = "FileTransfer" >< nome param = "android-pacchetto" value="org.apache.cordova.FileTransfer" / >< / caratteristica > (in app/AndroidManifest.xml) < android:name="android.permission.WRITE_EXTERNAL_STORAGE usi-autorizzazione" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nome funzione = "File" >< param nome = "blackberry-pacchetto" value="org.apache.cordova.file.FileManager" / >< / caratteristica >< nome funzionalità = "FileTransfer" >< param nome = "blackberry-pacchetto" value="org.apache.cordova.http.FileTransfer" / >< / caratteristica > (in www/config.xml) < presentano id="blackberry.io.file" richiesto = "true" versione = "1.0.0.0" / >< presentano id="blackberry.utils" richiesto = "true" versione = "1.0.0.0" / >< presentano id="blackberry.io.dir" richiesto = "true" versione = "1.0.0.0" / >< rim: autorizzazioni >< access_shared rim: permesso > < / orlo: permesso >< / orlo: autorizzazioni >
        

*   iOS (in`config.xml`)
    
        < nome funzione = "File" >< param nome = valore "ios-pacchetto" = "CDVFile" / >< / caratteristica >< nome della feature = "FileTransfer" >< param nome = valore "ios-pacchetto" = "CDVFileTransfer" / >< / caratteristica >
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Per una panoramica, vedere supporto della piattaforma.
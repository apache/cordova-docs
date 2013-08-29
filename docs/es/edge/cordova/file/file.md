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

# Archivo

> Una API para leer, escribir y navegar por las jerarquías de sistema de archivo, basadas en la [API de archivo W3C][1].

 [1]: http://www.w3.org/TR/FileAPI

## Objetos

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
*   Flags
*   LocalFileSystem
*   Metadata

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git
        $ cordova plugin rm org.apache.cordova.core.file
    

Para usar el plugin de transferencia de archivos es necesario agregar por separado.

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
        $ cordova plugin rm org.apache.cordova.core.file-transfer
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml) < nombre de la función = "File" >< nombre param = "android-paquete" value="org.apache.cordova.FileUtils" / >< / característica de >< nombre de la función = "File Transfer" >< nombre param = "android-paquete" value="org.apache.cordova.FileTransfer" / >< / característica > (en app/AndroidManifest.xml) < usos-permiso android:name="android.permission.WRITE_EXTERNAL_STORAGE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml) < nombre de la función = "File" >< nombre param = "blackberry-paquete" value="org.apache.cordova.file.FileManager" / >< / característica de >< nombre de la función = "File Transfer" >< nombre param = "blackberry-paquete" value="org.apache.cordova.http.FileTransfer" / >< / característica > (en www/config.xml) < cuentan con id="blackberry.io.file" requiere = "true" versión = "1.0.0.0" / >< cuentan con id="blackberry.utils" requiere = "true" versión = "1.0.0.0" / >< cuentan con id="blackberry.io.dir" requiere = "true" versión = "1.0.0.0" / >< borde: permisos >< access_shared rim: permiso > < / borde: permiso >< / borde: permisos >
        

*   (en iOS`config.xml`)
    
        < nombre de la función = "File" >< param nombre = valor "ios-paquete" = "CDVFile" / >< / característica de >< nombre de la función = "File Transfer" >< param nombre = valor "ios-paquete" = "CDVFileTransfer" / >< / característica >
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Ver soporte de plataforma para tener una visión general.
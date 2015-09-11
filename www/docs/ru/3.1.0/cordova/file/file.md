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

# <a href="fileobj/fileobj.html">Файл</a>

> Интерфейс API, чтобы читать, писать и навигации по иерархиям файловой системы, основанные на [w3c файла api][1].

 [1]: http://www.w3.org/TR/FileAPI

## Объекты

*   <a href="directoryentry/directoryentry.html">DirectoryEntry</a>
*   <a href="directoryreader/directoryreader.html">DirectoryReader</a>
*   <a href="fileobj/fileobj.html">Файл</a>
*   <a href="fileentry/fileentry.html">FileEntry</a>
*   <a href="fileerror/fileerror.html">FileError</a>
*   <a href="filereader/filereader.html">FileReader</a>
*   <a href="fileobj/fileobj.html">Файл</a>овая система
*   <a href="filetransfer/filetransfer.html">FileTransfer</a>
*   <a href="filetransfererror/filetransfererror.html"><a href="filetransfer/filetransfer.html">FileTransfer</a>Error</a>
*   <a href="fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>
*   <a href="fileuploadresult/fileuploadresult.html">FileUploadResult</a>
*   <a href="filewriter/filewriter.html">Уничтожал</a>
*   <a href="flags/flags.html">Флаги</a>
*   <a href="localfilesystem/localfilesystem.html">LocalFileSystem</a>
*   <a href="metadata/metadata.html">Метаданные</a>

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

Чтобы использовать плагин передачи файлов необходимо добавить что отдельно.

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html">FileTransfer</a>">
            <param name="android-package" value="org.apache.cordova.<a href="filetransfer/filetransfer.html">FileTransfer</a>" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   Ежевика WebWorks
    
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
        

*   iOS (в`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="<a href="filetransfer/filetransfer.html">FileTransfer</a>">
            <param name="ios-package" value="CDV<a href="filetransfer/filetransfer.html">FileTransfer</a>" />
        </feature>
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.
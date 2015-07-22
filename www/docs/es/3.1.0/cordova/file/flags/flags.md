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

# Banderas

Proporciona argumentos para la `DirectoryEntry` del objeto `getFile()` y `getDirectory()` los métodos, que buscar o crean archivos y directorios, respectivamente.

## Propiedades

*   **crear**: indica que el archivo o directorio debe ser creado si no existe ya. *(booleano)*

*   **exclusivo**: ha no tiene ningún efecto por sí mismo, pero cuando se utiliza con `create` provoca la creación de archivo o directorio a fracasar si la ruta de destino ya existe. *(booleano)*

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    / / Obtener el directorio de datos, creándola si no existe.
    dataDir = fileSystem.root.getDirectory ("datos", {crear: true});
    
    / / Crear el archivo de bloqueo, si y sólo si no existe.
    lockFile = dataDir.getFile ("lockfile.txt", {crear: verdadero, exclusivo: true});
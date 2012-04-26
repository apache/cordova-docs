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

Flags
=====

Este objeto se usa para pasarle argumentos a los métodos __getFile__ y __getDirectory__ de `DirectoryEntry`, que busca o crea ficheros y directorios.

Atributos
---------

- __create:__ Usado para indicar que el fichero o el directorio deberá ser creado, si no existiera. Por defecto se usara `false`. _(boolean)_ 
- __exclusive:__ Por si mismo, `exclusive` no tiene ningún efecto. Usado junto a `create`, causa que la creación del fichero o del directorio falle si la ruta ya esta usada. Se usara `false` por defecto. _(boolean)_ 

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------

    // Obtiene el directorio, creándolo si no existiera.
    dataDir = fileSystem.root.getDirectory("data", {create: true});

    // Crea el fichero (Si no existiera).
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});

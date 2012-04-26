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

Metadata
==========

Esta interfaz proporciona información acerca de los estados de un fichero o directorio.

Atributos
----------

- __modificationTime:__ La ultima vez que fue modificado este directorio o fichero. _(Date)_

Detalles
--------

El objeto `Metadata` proporciona toda la información sobre el estado de un fichero o directorio. Puedes obtener una instancia del objeto Metadata llamando a los métodos `DirectoryEntry.getMetadata` y `FileEntry.getMetadata`.

Plataforma Soportadas
---------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------

	function win(metadata) {
		console.log("Ultima modificación: " + metadata.modificationTime);
	}
	
	// Solicita el objeto metadata de esta entrada
	entry.getMetadata(win, null);

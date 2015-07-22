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

# FileError

A `FileError` objeto se establece cuando se produce un error en cualquiera de los métodos de archivo API.

## Propiedades

*   **código**: uno de los códigos de error predefinido enumerados a continuación.

## Constantes

*   `FileError.NOT_FOUND_ERR`
*   `FileError.SECURITY_ERR`
*   `FileError.ABORT_ERR`
*   `FileError.NOT_READABLE_ERR`
*   `FileError.ENCODING_ERR`
*   `FileError.NO_MODIFICATION_ALLOWED_ERR`
*   `FileError.INVALID_STATE_ERR`
*   `FileError.SYNTAX_ERR`
*   `FileError.INVALID_MODIFICATION_ERR`
*   `FileError.QUOTA_EXCEEDED_ERR`
*   `FileError.TYPE_MISMATCH_ERR`
*   `FileError.PATH_EXISTS_ERR`

## Descripción

El `FileError` objeto es el único parámetro proporcionado a cualquiera de los callbacks de error de la API archivo. Para determinar el tipo de error, comparar su `code` propiedad a cualquiera de los listados arriba.
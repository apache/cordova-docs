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

# SQLError

Un objeto `SQLError` se produce cuando se produce un error.

## Propiedades

*   **code**: uno de los códigos de error predefinido enumerados a continuación.

*   **message**: una descripción del error.

## Constantes

*   `SQLError.UNKNOWN_ERR`
*   `SQLError.DATABASE_ERR`
*   `SQLError.VERSION_ERR`
*   `SQLError.TOO_LARGE_ERR`
*   `SQLError.QUOTA_ERR`
*   `SQLError.SYNTAX_ERR`
*   `SQLError.CONSTRAINT_ERR`
*   `SQLError.TIMEOUT_ERR`

## Descripción

El objeto `SQLError` se produce cuando se produce un error al manipular una base de datos.
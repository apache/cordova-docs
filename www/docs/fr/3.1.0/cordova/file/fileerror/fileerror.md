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

Un objet `FileError` est défini lorsqu'une erreur se produit dans l'une des méthodes de l'API File.

## Propriétés

*   **code**: l'un des codes d'erreur prédéfinis énumérés ci-dessous.

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

## Description

L'objet `FileError` est le seul paramètre fourni à l'un des callbacks d'erreur de l'API File. Pour déterminer le type d'erreur, comparer sa propriété `code` à l'une des propriétés listées ci-dessus.
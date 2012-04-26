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

FileUploadResult
========

Un objet `FileUploadResult` est retourné comme argument de la fonction de callback de succès lorsqu'un appel à la méthode upload de FileTransfer s'est bien passé.

Propriétés
----------

- __bytesSent:__ Le nombre d'octets envoyés au serveur distant lors du transfert. (long)
- __responseCode:__ Le code de réponse HTTP retourné par le serveur. (long)
- __response:__ La réponse HTTP retournée par le serveur. (DOMString)

Description
-----------

L'objet `FileUploadResult` est retourné comme argument de la fonction de callback de succès lorsqu'un appel à la méthode upload de FileTransfer s'est bien passé.

Singularités iOS
----------------
- iOS ne remplit ni la propriété responseCode ni la propriété bytesSent de l'objet FileUploadResult. 


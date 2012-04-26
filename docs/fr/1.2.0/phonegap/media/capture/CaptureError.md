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

CaptureError
============

> Contient le code d'erreur retourné en cas d'échec d'une opération de capture audio, image ou vidéo.

Propriétés
----------

- __code:__ Un des codes d'erreur prédéfinis ci-dessous.

Constantes
----------

- CaptureError.`CAPTURE_INTERNAL_ERR`: L'appareil photo ou le microphone n'ont pas réussi à capturer une image ou un son. 
- CaptureError.`CAPTURE_APPLICATION_BUSY`: L'application de capture est en cours d'utilisation par un autre processus.
- CaptureError.`CAPTURE_INVALID_ARGUMENT`: Usage illégal de l'API (par exemple si le paramètre limit est inférieur à 1).
- CaptureError.`CAPTURE_NO_MEDIA_FILES`: L'utilisateur a quitté l'application de capture avant qu'une seule capture n'ait eu lieu.
- CaptureError.`CAPTURE_NOT_SUPPORTED`: L'opération de capture demandée n'est pas supportée.

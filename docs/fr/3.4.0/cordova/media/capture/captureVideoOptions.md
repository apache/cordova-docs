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

# CaptureVideoOptions

> Encapsule les options de configuration de capture vidéo.

## Propriétés

*   **limite**: le nombre maximal de clips vidéo, utilisateur de l'appareil peut capturer dans une opération de capture unique. La valeur doit être supérieure ou égale à 1 (1 par défaut).

*   **durée**: la durée maximale d'un clip vidéo, en quelques secondes.

## Petit exemple

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## BlackBerry WebWorks Quirks

*   Le paramètre de **durée** n'est pas supporté, donc la longueur des enregistrements ne peut pas être limitée par programme.

## iOS Quirks

*   Le paramètre **limit** n'est pas pris en charge. Qu'une vidéo est enregistrée par l'invocation.
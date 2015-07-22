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

# CaptureAudioOptions

> Encapsule les options de configuration de capture audio.

## Propriétés

*   **limite**: le nombre maximal de clips audio, l'utilisateur de l'appareil permet d'enregistrer dans une opération de capture unique. La valeur doit être supérieure ou égale à 1 (1 par défaut).

*   **durée**: la durée maximale d'un clip sonore audio, en quelques secondes.

## Petit exemple

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Quirks Android

*   Le `duration` paramètre n'est pas pris en charge. Longueurs d'enregistrement ne peut être limitée par programme.

## BlackBerry WebWorks Quirks

*   Le `duration` paramètre n'est pas pris en charge. Longueurs d'enregistrement ne peut être limitée par programme.

## iOS Quirks

*   Le `limit` paramètre n'est pas pris en charge, ainsi qu'un enregistrement peut être créée pour chaque appel.
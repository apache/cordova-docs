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

*   **limit** : le nombre maximal de clips audio que l'utilisateur peut enregistrer en une opération unique de capture. La valeur doit être supérieure ou égale à 1 (1 par défaut).

*   **duration** : la durée maximale d'un clip audio, en secondes.

## Exemple court

    // limite l'operation de capture à 3 fichiers dont la durée ne dépasse pas 10 secondes chaque
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Particularités d'Android

*   Le `duration` paramètre n'est pas pris en charge. Longueurs d'enregistrement ne peut être limitée par programme.

## Particularités de BlackBerry WebWorks

*   Le `duration` paramètre n'est pas pris en charge. Longueurs d'enregistrement ne peut être limitée par programme.

## Particularités d'iOS

*   Le paramètre `limit` n'est pas pris en charge, par conséquent un seul fichier audio peut être enregistré pour chaque appel.
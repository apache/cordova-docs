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

# CaptureError

> Encapsule le code d'erreur résultant d'une opération de capture de médias ayant échoué.

## Propriétés

*   **code** : un des codes d'erreur prédéfinis énumérés ci-dessous.

## Constantes

*   `CaptureError.CAPTURE_INTERNAL_ERR` : la caméra ou le microphone n'a pas pu capturer d'image ou de son.

*   `CaptureError.CAPTURE_APPLICATION_BUSY` : l'application de capture vidéo ou audio est actuellement occupée à traiter une autre requête.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT` : utilisation incorrecte de l'API (par exemple, la valeur donnée pour `limit` est inférieure à 1).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES` : l'utilisateur a quitté l'application de capture audio ou vidéo avant de capturer quoi que ce soit.

*   `CaptureError.CAPTURE_NOT_SUPPORTED` : l'opération de capture demandée n'est pas prise en charge.
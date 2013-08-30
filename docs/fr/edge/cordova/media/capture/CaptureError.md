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

*   **code**: un des codes d'erreur prédéfinis énumérés ci-dessous.

## Constantes

*   `CaptureError.CAPTURE_INTERNAL_ERR`: La caméra ou un microphone a échoué à capturer l'image ou le son.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: L'application de capture caméra / audio est actuellement une autre demande de capture.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Utilisation incorrecte de l'API (par exemple, la valeur de `limit` est inférieur à 1).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: L'utilisateur quitte l'application capture audio ou de la caméra avant de capturer n'importe quoi.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: L'opération de capture demandée n'est pas pris en charge.
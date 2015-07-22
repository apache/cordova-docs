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

# CaptureImageOptions

> Encapsule les options de configuration de capture image.

## Propriétés

*   **limite**: le nombre maximum d'images, l'utilisateur peut saisir dans une opération de capture unique. La valeur doit être supérieure ou égale à 1 (1 par défaut).

## Petit exemple

    // limit capture operation to 3 images
    var options = { limit: 3 };
    
    navigator.device.capture.captureImage(captureSuccess, captureError, options);
    

## iOS Quirks

*   Le paramètre **limit** n'est pas pris en charge, et qu'une image est prise par l'invocation.
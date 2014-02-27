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

# CaptureErrorCB

> Appelée si une erreur se produit pendant une opération de capture de médias.

    function captureError( CaptureError error ) { ... };
    

## Description

Cette fonction s'exécute si une erreur se produit lorsque vous essayez de lancer un média opération de capture. Scénarios de défaillance incluent lors de l'application capture est occupée, une opération de capture est déjà en cours, ou l'utilisateur annule l'opération avant que tous les fichiers multimédias sont capturés.

Cette fonction s'exécute avec un `CaptureError` objet contenant une erreur appropriée`code`.

## Petit exemple

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
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

> Fonction callback appelée si une erreur se produit pendant une opération de capture de médias.

    function captureError( CaptureError error ) { ... };
    

## Description

Cette fonction est exécutée si une erreur se produit lors d'une tentative de lancement d'une opération de capture de médias. Une telle erreur peut survenir lorsque l'application de capture est occupée, quand une opération de capture est déjà en cours, ou encore si l'utilisateur annule l'opération avant qu'un fichier média ait pu être capturé.

Un objet `CaptureError` contenant un `code` d'erreur approprié est transmis à cette fonction callback lors de son exécution.

## Exemple court

    // fonction callback d'erreur de capture
    var captureError = function(error) {
        navigator.notification.alert('Code d\'erreur : ' + error.code, null, 'Erreur de capture');
    };
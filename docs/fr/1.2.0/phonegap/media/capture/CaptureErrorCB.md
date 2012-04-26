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

CaptureErrorCB
==============

> Appelé lorsqu'une erreur survient pendant une opération de capture.

    function captureError( CaptureError error ) { ... };

Description
-----------

Cette fonction de callback est appelée si l'on tente de lancer une opération de capture alors que l'application de capture est déjà utilisée, si une erreur survient aucours de la capture, ou si l'opération à été arrêtée par l'utilisateur avant qu'une capture n'ait eu lieu.

Cette fonction de callback est appelée avec en argument un objet CaptureError contenant le code d'erreur approprié.

Exemple rapide
--------------

    // Fonction de callback en erreur
    var captureError = function(error) {
        navigator.notification.alert("Code d'erreur : " + error.code, null, 'Capture Error');
    };

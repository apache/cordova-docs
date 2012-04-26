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

cameraSuccess
=============

Fonction de callback en cas de succès, fournit les données de l'image.

    function(imageData) {
        // Faire quelque chose avec l'image
    }

Paramètres
----------

- __imageData:__ Flux encodé en Base64 de l'image, OU une URI de fichier image, selon `cameraOptions`. (`String`)

Exemple
-------

    // Afficher l'image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('monImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
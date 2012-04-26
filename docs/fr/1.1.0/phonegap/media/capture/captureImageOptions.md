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

CaptureImageOptions
===================

> Regroupe un ensemble d'options de configuration pour la capture d'image.

Propriétés
----------

- __limit:__ Le nombre maximum de photos que l'utilisateur peut prendre par opération.  La valeur doit être supérieure ou égale à 1 (vaut 1 par défaut).
- __mode:__ Le mode de capture photo choisi.  La valeur doit être l'un des éléments de `capture.supportedImageModes`.

Exemple rapide
--------------

    // Limiter l'opération à 3 fichiers
    var options = { limit: 3 };

    navigator.device.capture.captureImage(captureSuccess, captureError, options);

Singularités Android
--------------------

- Le paramètre __mode__ n'est pas supporté.  La taille et le format des images ne peuvent pas être changés depuis le code de l'application; en revanche, ces paramètres peuvent être modifiés par l'utilisateur du mobile.  Par défaut, les images sont enregistrées au format JPEG (image/jpeg).

Singularités BlackBerry WebWorks
--------------------------------

- Le paramètre __mode__ n'est pas supporté.  La taille et le format des images ne peuvent pas être changés depuis le code de l'application; en revanche, ces paramètres peuvent être modifiés par l'utilisateur du mobile.  Par défaut, les images sont enregistrées au format JPEG (image/jpeg).

Singularités iOS
----------------

- Le paramètre __limit__ n'est pas supporté. Une seule photo peut être prise par appel.
- Le paramètre __mode__ n'est pas supporté.  La taille et le format des images ne peuvent pas être changés depuis le code de l'application.  Les images sont enregistrées au format JPEG (image/jpeg).

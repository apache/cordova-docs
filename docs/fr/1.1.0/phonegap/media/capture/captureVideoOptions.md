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

CaptureVideoOptions
===================

> Regroupe un ensemble d'options de configuration pour la capture vidéo.

Propriétés
----------

- __limit:__ Le nombre maximum de clips vidéos que l'utilisateur peut enregistrer par opération.  La valeur doit être supérieure ou égale à 1 (vaut 1 par défaut).
- __duration:__ La durée maximale d'un clip vidéo, en secondes.
- __mode:__ Le mode de capture vidéo choisi.  La valeur doit être l'un des éléments de `capture.supportedVideoModes`.

Exemple rapide
--------------

    // Limiter l'opération à 3 fichiers
    var options = { limit: 3 };

    navigator.device.capture.captureVideo(captureSuccess, captureError, options);

Singularités Android
--------------------

- Le paramètre __duration__ n'est pas supporté.  La longueur d'enregistrement ne peut pas être limitée depuis le code de l'application.
- Le paramètre __mode__ n'est pas supporté.  La taille et le format d'enregistrement vidéo ne peuvent pas être changés depuis le code de l'application; en revanche, ces paramètres peuvent être modifiés par l'utilisateur du mobile. Par défaut, les vidéos sont enregistrées au format 3GPP (video/3gpp).


Singularités BlackBerry WebWorks
--------------------------------

- Le paramètre __duration__ n'est pas supporté.  La longueur d'enregistrement ne peut pas être limitée depuis le code de l'application.
- Le paramètre __mode__ n'est pas supporté.  La taille et le format d'enregistrement vidéo ne peuvent pas être changés depuis le code de l'application; en revanche, ces paramètres peuvent être modifiés par l'utilisateur du mobile. Par défaut, les vidéos sont enregistrées au format 3GPP (video/3gpp).

Singularités iOS
----------------

- Le paramètre __limit__ n'est pas supporté. Un seul clip vidéo peut être enregistré par appel.
- Le paramètre __duration__ n'est pas supporté.  La longueur d'enregistrement ne peut pas être limitée depuis le code de l'application.
- Le paramètre __mode__ n'est pas supporté.  La taille et le format d'enregistrement vidéo ne peuvent pas être changés depuis le code de l'application. Par défaut, les vidéos sont enregistrées au format MOV (video/quicktime).


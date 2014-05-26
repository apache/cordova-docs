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

# CaptureCB

> Appelé lors d'une opération de capture de médias réussie.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };
    

## Description

Cette fonction s'exécute après qu'une opération de capture réussie est terminée. À ce point qu'un fichier multimédia a été capturé et soit l'utilisateur a quitté l'application capture de média, ou la limite de capture a été atteinte.

Chaque `MediaFile` objet décrit un fichier multimédia capturés.

## Petit exemple

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
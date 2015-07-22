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

# CompassError

Un objet `CompassError` est retourné à la fonction de callback `compassError` lorsqu'une erreur survient.

## Propriétés

*   **code**: l'un des codes d'erreur prédéfinis énumérés ci-dessous.

## Constantes

*   `CompassError.COMPASS_INTERNAL_ERR`
*   `CompassError.COMPASS_NOT_SUPPORTED`

## Description

Lorsqu'une erreur se produit, l'objet `CompassError` est passé en paramètre de la fonction de callback `compassError`.
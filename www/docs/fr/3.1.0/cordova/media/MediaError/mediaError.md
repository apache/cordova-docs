---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

# <a href="../media.html">Media</a>Error

A `<a href="../media.html">Media</a>Error` objet est retourné à la `<a href="../Parameters/mediaError.html">mediaError</a>` fonction de rappel lorsqu'une erreur survient.

## Propriétés

*   **code**: l'un des codes d'erreur prédéfinis énumérés ci-dessous.

*   **message**: un message d'erreur décrivant les détails de l'erreur.

## Constantes

*   `<a href="../media.html">Media</a>Error.MEDIA_ERR_ABORTED`
*   `<a href="../media.html">Media</a>Error.MEDIA_ERR_NETWORK`
*   `<a href="../media.html">Media</a>Error.MEDIA_ERR_DECODE`
*   `<a href="../media.html">Media</a>Error.MEDIA_ERR_NONE_SUPPORTED`

## Description

Le `<a href="../media.html">Media</a>Error` objet est passé à une `<a href="../Parameters/mediaError.html">mediaError</a>` fonction de rappel lorsqu'une erreur survient.
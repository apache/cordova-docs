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

Geolocation
===========

> L'objet `geolocation` donne accès à la cellule GPS du mobile. 

Geolocation fournit des informations sur la localisation géographique du mobile, telles que la latitude et la longitude. Parmi les sources d'information de positionnement, on peut trouver le Global Positioning System (GPS) et la positionnement déduit du réseau comme par exemple les adresses IP, le RFID, les adresses MAC WiFi et Bluetooth, ou encore les identifiants de mobiles GSM/CDMA. Il n'y a aucune garantie que la positon retournée par l'API soit exacte. 

Cette API est basée sur la spécification [W3C Geolocation API Specification](http://dev.w3.org/geo/api/spec-source.html).  Certaines plateformes fournissent déjà une implémentation de cette spécification.  Pour ces mobiles, c'est cette implémentation qui est utilisée, elle n'est pas remplacée par celle de PhoneGap.  Pour les autres mobiles, l'implémentation fournie par PhoneGap devrait être conforme à la spécification du W3C.

Méthodes
--------

- geolocation.getCurrentPosition
- geolocation.watchPosition
- geolocation.clearWatch

Arguments
---------

- geolocationSuccess
- geolocationError
- geolocationOptions

Objects (Lecture seule)
-----------------------

- Position
- PositionError
- Coordinates

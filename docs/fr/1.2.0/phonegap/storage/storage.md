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

Storage
=======

> Fournit l'accès aux options de stockage du mobile.  

Cette API est basée sur les spécifications [W3C Web SQL Database](http://dev.w3.org/html5/webdatabase/) et [W3C Web Storage API](http://dev.w3.org/html5/webstorage/). Certaines plateformes fournissent déjà une implémentation de cette spécification.  Pour ces mobiles, c'est cette implémentation qui est utilisée, elle n'est pas remplacée par celle de PhoneGap.  Pour les autres mobiles, l'implémentation fournie par PhoneGap devrait être conforme à la spécification du W3C.

Méthodes
--------

- openDatabase

Arguments
---------

- name
- version
- display_name
- size

Objets
------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage
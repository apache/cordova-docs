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

# Shranjevanje

> Pregled možnosti za shranjevanje za Cordova.

Shranjevanje več API-jev so na voljo za Cordova aplikacije. Glej [html5rocks][1]. za popolnejši pregled in primeri.

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

Znana tudi kot *spletno shranjevanje*, *enostavno skladiščenje*, ali njegov nadomestni *session shranjevanje* vmesnik, ta API zagotavlja sinhrono ključ/vrednost shranjevanje par, in je na voljo v osnovni spletni pogled izvedb. Nanašajo na [W3C spec][2] za podrobnosti.

 [2]: http://www.w3.org/TR/webstorage/

**Windows Phone 7 ovinka**: s pikami je *ni* na voljo, zato se prepričajte, da uporabite `setItem` ali `getItem` namesto dostop ključe, neposredno iz shranjevanje predmeta, kot v`window.localStorage.someKey`.

## WebSQL

Ta API je na voljo v osnovni spletni pogled. [Spletne zbirke podatkov SQL specifikaciji][3] ponuja več poln-izrazit časovno določljiv normalna žlička dostopate preko SQL poizvedb.

 [3]: http://dev.w3.org/html5/webdatabase/

Tem platformam podpira WebSQL:

*   Android
*   BlackBerry 10
*   iOS
*   Tizen

## IndexedDB

Ta API je na voljo v osnovni spletni pogled. [Indeksirane DB][4] ponuja več funkcij, kot LocalStorage, vendar manj kot WebSQL.

 [4]: http://www.w3.org/TR/IndexedDB/

Tem platformam podporo IndexedDB:

*   Windows Phone 8
*   BlackBerry 10

## Plugin, ki temelji opcije

Poleg shranjevanje zgoraj naštetih API [Datoteko API][5] omogoča predpomnilnika podatke o lokalnem datotečnem sistemu. Drugih [Cordova plugins][6] zagotoviti podobne možnosti skladiščenja.

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/
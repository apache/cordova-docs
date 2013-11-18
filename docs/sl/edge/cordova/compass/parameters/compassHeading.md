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

# compassHeading

Objekt `CompassHeading` je vrnjen povratnemu klicu `compassSuccess`.

## Lastnosti

*   **magneticHeading**: Smer v stopinjah od 0 do 359.99 v trenutku v času. *(Število)*

*   **trueHeading**: Smer glede na geografski severni tečaj v stopinjah 0-359.99 v enem trenuteku v času. Negativna vrednost kaže, da ni mogoče določiti prave naslovom. *(Število)*

*   **headingAccuracy**: Razhajanje v stopinjah med poročano in pravo smerjo. *(Število)*

*   **timestamp**: Čas ob katerem je bila smer določena. *(milisekunde)*

## Opis

Objekt `CompassHeading` je vrnjen povratnemu klicu `compassSuccess`.

## Posebnosti za Android

*   Je `trueHeading` lastnost ni podprta, vendar poročila enako vrednost kot`magneticHeading`.

*   Je `headingAccuracy` lastnost je vedno 0 zato, ker ni nobene razlike med na `magneticHeading` in`trueHeading`.

## Posebnosti iOS

*   Je `trueHeading` lastnost je vrnjena le za lokacijske storitve, omogočene prek`navigator.geolocation.watchLocation()`.

*   Za naprave z iOS 4 zgoraj, naslovom dejavnikov v trenutni usmerjenosti naprave in ne reference svoje absoluten položaj, za aplikacije, ki podpira to usmeritev.
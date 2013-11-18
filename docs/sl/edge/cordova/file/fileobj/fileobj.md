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

# File

Ta objekt vsebuje atribute ene same datoteke.

## Lastnosti

*   **name**: Ime datoteke. *(DOMString)*

*   **fullPath**: Polna pot do datoteke, vključno z imenom datoteke. *(DOMString)*

*   **type**: Tip mime za datoteko. *(DOMString)*

*   **lastModifiedDate**: Čas, ko je bila datoteka zadnjič spremenjena. *(Date)*

*   **size**: Velikost datoteke v bajtih. *(long)*

## Metode

*   **slice**: Za branje izbere le del datoteke.

## Podrobnosti

Objekt `File` vsebuje atribute za eno samo datoteko. Izvod objekta `File` lahko dobite s klicem metode `file()` objekta `FileEntry`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## slice

Vrne nov objekt `File`, za katerega `FileReader` vrne le določen del datoteke. Negativne vrednosti za `start` ali `end` se merijo od konca datoteke. Indeksi so postavljeni relativno glede na trenutno rezino. (Glejte celovit primer spodaj.)

**Parametri**:

*   **start**: Indeks prvega bajta, ki ga želimo prebrati, vključujoče.

*   **end**: Indeks bajta po zadnjem, ki ga želimo prebrati.

**Preprost primer**

    var slicedFile = file.slice(10, 30);
    

**Celovit primer**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Podprte platforme**

*   Android
*   iOS
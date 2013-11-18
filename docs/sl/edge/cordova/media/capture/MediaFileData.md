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

# MediaFileData

> Povzema obliko informacij o predstavnostno datoteko.

## Lastnosti

*   **kodeki**: dejanski format avdio in video vsebine. (DOMString)

*   **bitrate**: povprečna bitrate vsebine. Vrednost je nič za slike. (Število)

*   **višina**: višina slike ali video v slikovnih pikah. Vrednost je nič za avdio posnetke. (Število)

*   **Širina**: širina slike ali video v slikovnih pikah. Vrednost je nič za avdio posnetke. (Število)

*   **trajanje**: dolžina video ali zvočni posnetek v sekundah. Vrednost je nič za slike. (Število)

## BlackBerry WebWorks Quirks

Ni API zagotavlja informacije o formatu za predstavnostne datoteke, tako da `MediaFileData` predmet, ki ga vrne `MediaFile.getFormatData` vsebuje naslednje privzete vrednosti:

*   **kodeki**: ne podpira, in vrne`null`.

*   **bitrate**: ne podpira, in vrne nič.

*   **višina**: ne podpira, in vrne nič.

*   **Širina**: ne podpira, in vrne nič.

*   **trajanje**: ni podprt, in vrne nič.

## Android Quirks

Podpira naslednje `MediaFileData` lastnosti:

*   **kodeki**: ne podpira, in vrne`null`.

*   **bitrate**: ne podpira, in vrne nič.

*   **višina**: podpira: slike in video datoteke.

*   **Širina**: podpira: slike in video datoteke.

*   **trajanje**: podpira: avdio in video datoteke samo.

## iOS Quirks

Podpira naslednje `MediaFileData` lastnosti:

*   **kodeki**: ne podpira, in vrne`null`.

*   **bitrate**: podpira iOS4 naprave za samo zvok. Vrne nič slik in video posnetkov.

*   **višina**: podpira: slike in video datoteke.

*   **Širina**: podpira: slike in video datoteke.

*   **trajanje**: podpira: avdio in video datoteke samo.
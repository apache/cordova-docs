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

# MediaFile.getFormatData

> Pridobi format informacij o predstavnostno datoteko za zajem.

    mediaFile.getFormatData(
        MediaFileDataSuccessCB successCallback,
        [MediaFileDataErrorCB errorCallback]
    );
    

## Opis

Ta funkcija asinhrono poskuša pridobiti informacije o formatu za predstavnostno datoteko. Če uspešen, se sklicuje na `MediaFileDataSuccessCB` povratni klic z a `MediaFileData` predmeta. Če poskus ne uspe, je ta funkcija sklicuje na `MediaFileDataErrorCB` povratni klic.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## BlackBerry WebWorks Quirks

Ne predvideva API informacije o medijskih datotek, tako da so vsi `MediaFileData` predmetov vrniti s privzetimi vrednostmi.

## Android Quirks

API za dostop do medijev datoteko format informacij je omejeno, zato ne vse `MediaFileData` lastnosti so podprti.

## iOS Quirks

API za dostop do medijev datoteko format informacij je omejeno, zato ne vse `MediaFileData` lastnosti so podprti.
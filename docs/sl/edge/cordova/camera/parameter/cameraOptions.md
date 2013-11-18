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

# cameraOptions

Izbirne parametre prilagodite nastavitve fotoaparata.

    {kakovosti: 75, destinationType: Camera.DestinationType.DATA_URL, vrste vira: Camera.PictureSourceType.CAMERA, allowEdit: res, encodingType: Camera.EncodingType.JPEG, targetWidth: 100, targetHeight: 100, popoverOptions: CameraPopoverOptions, saveToPhotoAlbum: lažno};
    

## Možnosti

*   **kakovost**: kakovost shranjene slike, izražena kot razpon 0-100, kjer 100 je navadno polni ločljivosti brez izgube iz stiskanje datotek. *(Število)* (Upoštevajte, da informacije o ločljivost fotoaparata ni na voljo.)

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0, / / Vrni sliko kot base64 encoded string FILE_URI: 1, / / vrnitev slikovne datoteke URI NATIVE_URI: 2 / / vrnitev image native URI (npr., knjižnica sredstev: / / na iOS ali vsebine: / / na Android)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {PHOTOLIBRARY: 0, kamera: 1, SAVEDPHOTOALBUM: 2};
        

*   **allowEdit**: omogoča enostavno urejanje slike pred izbiro. *(Boolean)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0, / / vrnitev JPEG kodirana podoba PNG: 1 / / vrnitev PNG kodirana podoba};
        

*   **targetWidth**: širino v slikovnih pikah na Pomanj¹aj sliko. Je treba uporabljati z **targetHeight**. Razmerje ostane konstantna. *(Število)*

*   **targetHeight**: višina v slikovnih pikah na Pomanj¹aj sliko. Je treba uporabljati z **targetWidth**. Razmerje ostane konstantna. *(Število)*

*   **mediaType**: nastavite vrsto medija, da izberete iz. Deluje samo, ko `PictureSourceType` je `PHOTOLIBRARY` ali `SAVEDPHOTOALBUM` . Opredeljeno v `nagivator.camera.MediaType` *(število)* 
    
        Camera.MediaType = {slika: 0, / / dovoli izbor še vedno samo slike. PRIVZETO. Bo vrnil določena preko DestinationType VIDEO format: 1, / / dovoli izbor video samo, bo vedno VRNETE FILE_URI ALLMEDIA: 2 / / Dovoli izbor iz vseh vrst predstavnosti
        
    
    };

*   **correctOrientation**: zavrtite sliko, če želite popraviti usmerjenost naprave med zajemanjem. *(Boolean)*

*   **saveToPhotoAlbum**: shranite sliko v foto album na napravi po zajem. *(Boolean)*

*   **popoverOptions**: samo za iOS možnosti, da določite mesto popover v iPad. Opredeljena v`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {nazaj: 0 / / uporabi nazaj obrnjene kamero spredaj: 1 / / uporaba pročelje-sprednja stran velblod};
        

## Android Quirks

*   Vse `cameraDirection` vrednost rezultati pri nazaj obrnjenih fotografijo.

*   Prezre je `allowEdit` parameter.

*   `Camera.PictureSourceType.PHOTOLIBRARY`in `Camera.PictureSourceType.SAVEDPHOTOALBUM` tako prikazati istega foto albuma.

## BlackBerry Quirks

*   Prezre je `quality` parameter.

*   Prezre je `sourceType` parameter.

*   Prezre je `allowEdit` parameter.

*   Aplikacija mora imeti ključ injekcijo dovoljenja zapreti rojsten kamero uporabo, ko uporabnik pripne fotografijo.

*   Uporabo velike slike velikosti lahko imelo za posledico nezmožnost za kodiranje slike na novejši model naprave (npr., Torch 9800) to zunanja oblika visoke ločljivosti kamere.

*   `Camera.MediaType`ni podprto.

*   Prezre je `correctOrientation` parameter.

*   Prezre je `cameraDirection` parameter.

## iOS Quirks

*   Set `quality` pod 50, da se preprečijo napake pomnilnika na nekatere naprave.

*   Pri uporabi `destinationType.FILE_URI` , fotografije so shranjene v začasnem imeniku aplikacije. Lahko izbrišete vsebino tega imenika z na `navigator.fileMgr` API-jev, če prostora je skrb.

## Tizen Quirks

*   možnosti ni podprta

*   vedno vrne datoteko URI

## Windows Phone 7 in 8 Quirks

*   Prezre je `allowEdit` parameter.

*   Prezre je `correctOrientation` parameter.

*   Prezre je `cameraDirection` parameter.
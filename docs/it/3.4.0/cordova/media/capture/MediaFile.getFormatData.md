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

> Recupera il formato informazioni su cattura file multimediale.

    mediaFile.getFormatData (MediaFileDataSuccessCB successCallback, [MediaFileDataErrorCB errorCallback]);
    

## Descrizione

Questa funzione in modo asincrono tenta di recuperare le informazioni sul formato del file multimediale. Se riuscito, richiama il `MediaFileDataSuccessCB` callback con un `MediaFileData` oggetto. Se il tentativo fallisce, questa funzione richiama il `MediaFileDataErrorCB` callback.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## BlackBerry WebWorks stranezze

Non fornisce un'API per informazioni sui file multimediali, quindi tutti `MediaFileData` oggetti restituiscono con valori predefiniti.

## Stranezze Android

L'API per informazioni sul formato dei file multimediali accesso è limitato, quindi non tutti `MediaFileData` proprietà supportate.

## iOS stranezze

L'API per informazioni sul formato dei file multimediali accesso è limitato, quindi non tutti `MediaFileData` proprietà supportate.
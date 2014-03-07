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

> Incapsula le informazioni sul formato di un file multimediale.

## Proprietà

*   **codec**: il formato reale del contenuto audio e video. (DOMString)

*   **bitrate**: il bitrate medio del contenuto. Il valore è zero per le immagini. (Numero)

*   **altezza**: l'altezza dell'immagine o del video in pixel. Il valore è zero per clip audio. (Numero)

*   **larghezza**: la larghezza dell'immagine o del video in pixel. Il valore è zero per clip audio. (Numero)

*   **durata**: la lunghezza del clip video o audio in secondi. Il valore è zero per le immagini. (Numero)

## BlackBerry WebWorks stranezze

Nessuna API fornisce informazioni sul formato dei file multimediali, quindi il `MediaFileData` oggetto restituito da `MediaFile.getFormatData` presenta i seguenti valori predefiniti:

*   **codec**: non supportato e restituisce`null`.

*   **bitrate**: non supportato e restituisce zero.

*   **altezza**: non supportato e restituisce zero.

*   **larghezza**: non supportato e restituisce zero.

*   **durata**: non supportato e restituisce zero.

## Stranezze Android

Supporta i seguenti `MediaFileData` proprietà:

*   **codec**: non supportato e restituisce`null`.

*   **bitrate**: non supportato e restituisce zero.

*   **altezza**: supportati: solo i file immagine e video.

*   **larghezza**: supportati: solo i file immagine e video.

*   **durata**: supportati: audio e video file solo.

## iOS stranezze

Supporta i seguenti `MediaFileData` proprietà:

*   **codec**: non supportato e restituisce`null`.

*   **bitrate**: supportato sui dispositivi iOS4 per solo audio. Restituisce zero per immagini e video.

*   **altezza**: supportati: solo i file immagine e video.

*   **larghezza**: supportati: solo i file immagine e video.

*   **durata**: supportati: audio e video file solo.
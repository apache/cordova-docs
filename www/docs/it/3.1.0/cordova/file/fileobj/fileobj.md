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

Questo oggetto contiene gli attributi di un singolo file.

## Proprietà

*   **nome**: il nome del file. *(DOMString)*

*   **fullPath**: il percorso completo del file compreso il nome del file. *(DOMString)*

*   **tipo**: il tipo mime del file. *(DOMString)*

*   **lastModifiedDate**: l'ultima volta che il file è stato modificato. *(Data)*

*   **dimensioni**: le dimensioni del file in byte. *(lungo)*

## Metodi

*   **fetta**: selezionare solo una porzione del file da leggere.

## Dettagli

Il `File` oggetto contiene gli attributi di un singolo file. È possibile ottenere un'istanza di un `File` oggetto chiamando un `FileEntry` dell'oggetto `file()` metodo.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## fetta

Restituire un nuovo `File` oggetto, per cui `FileReader` restituisce solo la parte specificata del file. Negativi i valori per `start` o `end` sono misurati dalla fine del file. Gli indici sono posizionati rispetto alla sezione corrente. (Vedere l'esempio completo sotto.)

**Parametri:**

*   **iniziare**: l'indice del primo byte da leggere, inclusiva.

*   **conclusione**: l'indice del byte dopo l'ultima lettura.

**Esempio rapido**

    var slicedFile = file.slice(10, 30);
    

**Esempio completo**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Piattaforme supportate**

*   Android
*   iOS
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

# MediaFile

> Incapsula le proprietà di un file di acquisizione di mezzi di comunicazione.

## Proprietà

*   **nome**: il nome del file, senza informazioni sul percorso. (DOMString)

*   **fullPath**: il percorso completo del file, tra cui il nome. (DOMString)

*   **tipo**: tipo mime del file (DOMString)

*   **lastModifiedDate**: la data e l'ora quando il file è stato modificato. (Data)

*   **dimensioni**: le dimensioni del file in byte. (Numero)

## Metodi

*   **MediaFile.getFormatData**: recupera le informazioni sul formato del file multimediale.
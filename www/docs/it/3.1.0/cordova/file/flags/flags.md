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

# Bandiere

Fornisce argomenti per la `DirectoryEntry` dell'oggetto `getFile()` e `getDirectory()` metodi, che cercare o creano file e directory, rispettivamente.

## Proprietà

*   **creare**: indica che il file o la directory dovrebbe essere creata se non esiste già. *(booleano)*

*   **esclusivo**: ha non ha alcun effetto di per sé, ma quando viene utilizzato con `create` provoca la creazione di file o directory a fallire se il percorso di destinazione esiste già. *(booleano)*

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    / / Ottenere la directory di dati, creandola se non esiste.
    dataDir = fileSystem.root.getDirectory ("dati", {creare: true});
    
    / / Creare il file di blocco, se e solo se esso non esiste.
    lockFile = dataDir.getFile ("lockfile.txt", {creare: vero, esclusivo: true});
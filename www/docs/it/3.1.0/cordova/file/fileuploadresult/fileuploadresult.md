---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---

# <a href="../fileobj/fileobj.html">File</a>UploadResult

A `<a href="../fileobj/fileobj.html">File</a>UploadResult` oggetto viene passato al metodo di callback di successo il `<a href="../filetransfer/filetransfer.html"><a href="../fileobj/fileobj.html">File</a>Transfer</a>` dell'oggetto `upload()` metodo.

## Proprietà

*   **bytesSent**: il numero di byte inviati al server come parte dell'upload. (lungo)

*   **responseCode**: codice di risposta HTTP restituito dal server. (lungo)

*   **risposta**: risposta HTTP restituito dal server. (DOMString)

## Descrizione

Il `<a href="../fileobj/fileobj.html">File</a>UploadResult` viene restituito l'oggetto tramite il callback di successo del `<a href="../filetransfer/filetransfer.html"><a href="../fileobj/fileobj.html">File</a>Transfer</a>` dell'oggetto `upload()` metodo.

## iOS stranezze

*   Non supporta `responseCode` o`bytesSent`.
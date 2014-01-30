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

# Zastavice

Dobave argumente, da je `DirectoryEntry` predmeta `getFile()` in `getDirectory()` metode, ki poiskati ali ustvariti datoteke in imenike, oziroma.

## Lastnosti

*   **Ustvarjanje**: označuje, da datoteka ali imenik naj ustvari če že obstaja. *(boolean)*

*   **Exclusive**: je ne učinkuje sama, ampak s `create` povzroča datoteko ali imenik ustvarjanje odpovedovati če ciljna pot že obstaja. *(boolean)*

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    // Get the data directory, creating it if it doesn't exist.
    dataDir = fileSystem.root.getDirectory("data", {create: true});
    
    // Create the lock file, if and only if it doesn't exist.
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});
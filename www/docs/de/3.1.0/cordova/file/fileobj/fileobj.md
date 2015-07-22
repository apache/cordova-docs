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

# Datei

Dieses Objekt enthält Attribute einer einzelnen Datei.

## Eigenschaften

*   **Name**: der Name der Datei. *(DOM-String und enthält)*

*   **FullPath**: der vollständige Pfad der Datei, einschließlich des Dateinamens. *(DOM-String und enthält)*

*   **Typ**: den Mime-Typ der Datei. *(DOM-String und enthält)*

*   **LastModifiedDate**: das letzte Mal die Datei geändert wurde. *(Datum)*

*   **Größe**: die Größe der Datei in Bytes. *(lange)*

## Methoden

*   **Segment**: Wählen Sie nur einen Teil der Datei gelesen werden.

## Informationen

Das `File` -Objekt enthält Attribute einer einzelnen Datei. Erhalten Sie eine Instanz ein `File` Objekt durch Aufruf einer `FileEntry` des Objekts `file()` Methode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Scheibe

Zurück ein neues `File` Objekt, für die `FileReader` gibt nur den angegebenen Teil der Datei. Negative Werte für `start` oder `end` sind, gemessen vom Ende der Datei. Indizes sind relativ das aktuelle Segment positioniert. (Siehe das vollständige Beispiel weiter unten.)

**Parameter:**

*   **Start**: der Index des ersten Bytes zu lesen, inklusive.

*   **Ende**: der Index des Bytes nach dem letzten zu lesen.

**Kleines Beispiel**

    var slicedFile = file.slice(10, 30);
    

**Vollständiges Beispiel**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Unterstützte Plattformen**

*   Android
*   iOS
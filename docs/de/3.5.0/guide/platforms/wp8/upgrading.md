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

# Aktualisieren von Windows Phone

Diese Anleitung zeigt wie zum Ändern von Windows Phone-Projekten, beide Versionen 7 und 8, Upgrade von älteren Versionen von Cordova. Die meisten diese Anweisungen gelten für Projekte, die mit einer älteren Befehlszeilentools, die vorangehen erstellt die `cordova` CLI-Hilfsprogramm. Die Command-Line Interface Informationen finden Sie unter Gewusst wie: Aktualisieren Sie die Version der CLI. Der folgende Abschnitt zeigt wie von nicht-CLI Projekte aktualisiert.

## Ein Upgrade auf 3.2.0 von 3.1.0

Für Projekte, die mit Cordova CLI erstellt wurden:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Führen Sie `cordova platform update wp8` (oder `wp7` , pro die Plattformen, die Sie dem Projekt hinzugefügt).

Für Projekte, die nicht mit der Cordova CLI erstellt ausgeführt:

        bin\update <project_path>
    

## Ein Upgrade auf 3.1.0 von 3.0.0

Für Projekte, die mit Cordova CLI erstellt wurden:

1.  Update der `cordova` CLI-Version. Finden Sie die Befehlszeilenschnittstelle.

2.  Führen Sie `cordova platform update wp8` (oder `wp7` , pro die Plattformen, die Sie dem Projekt hinzugefügt).

Für Projekte, die nicht mit der Cordova CLI erstellt ausgeführt:

        bin\update <project_path>
    

## Upgrade auf die CLI (3.0.0) von 2.9.0

1.  Erstellen Sie ein neues Apache Cordova 3.0.0-Projekt mit Cordova CLI, wie in der Command-Line Interface beschrieben.

2.  Die Plattformen der Cordova Projekt fügen Sie hinzu, zum Beispiel:`cordova
platform add wp7 wp8`.

3.  Kopieren Sie den Inhalt des Projekts `www` Verzeichnis in das `www` Verzeichnis im Stammverzeichnis des Projektes Cordova, die Sie gerade erstellt haben.

4.  Kopieren oder nativen Vermögen aus dem ursprünglichen Projekt zu überschreiben ( `SplashScreen` , `ApplicationIcon` , etc.), die sicher um jede neuen Dateien auf die `.csproj` Datei. Die Windows phone Projektbuilds innerhalb der `platforms\wp7` oder `platforms\wp8` Verzeichnis.

5.  Verwenden Sie Cordova-CLI-Tool, um alle Plugins zu installieren, die Sie brauchen. Beachten Sie, dass die CLI behandelt alle Kern-APIs als Plugins, so müssen sie möglicherweise hinzugefügt werden. Nur 3.0.0 Plugins sind kompatibel mit CLI.

6.  Erstellen und testen.

## Ein Upgrade auf 3.0.0 (CLI) von 2.9.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 oder WP8 3.0.0-Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

4.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

5.  Erstellen und testen.

**Hinweis**: alle zentralen APIs aus Cordova Version 3.0 entfernt werden und müssen separat als Plugins installiert werden. Weitere Informationen zum Aktivieren dieser Features in einem nicht-CLI-Workflow neu finden Sie unter Verwendung von Plugman zu Plugins verwalten.

## Ein Upgrade auf 2.9.0 von 2.8.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 oder WP8 2.9.0 Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den Namen des `cordova.js` in das HTML-Tag, wenn es noch Cordova-VERSION.js verwendet wird (sollte nur`cordova.js`).

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch die CSPROJ-Datei hinzugefügt werden.

6.  Erstellen und testen.

## Ein Upgrade auf 2.8.0 von 2.7.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 oder WP8 2.8.0-Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den HTML-Code um das neue `cordova.js` Datei. (Beachten Sie das Fehlen einer Versionsnummer im Dateinamen).

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

6.  Erstellen und testen.

## Ein Upgrade auf 2.7.0 von 2.6.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 oder WP8 2.7.0-Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.7.0.js` Datei.

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

6.  Erstellen und testen.

## Ein Upgrade auf 2.6.0 von 2.5.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 oder WP8 2.6.0-Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.6.0.js` Datei.

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

6.  Erstellen und testen.

## Ein Upgrade auf 2.5.0 von 2.4.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 oder WP8 2.5.0-Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.5.0.js` Datei.

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

6.  Erstellen und testen.

## Ein Upgrade auf 2.4.0 von 2.3.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 oder WP8 2.4.0-Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.4.0.js` Datei.

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

6.  Erstellen und testen.

## Ein Upgrade auf 2.3.0 von 2.2.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 2.3.0-Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.3.0.js` Datei.

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

6.  Erstellen und testen.

## Ein Upgrade auf 2.2.0 von 2.1.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 2.2.0-Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.2.0.js` Datei.

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

6.  Erstellen und testen.

## Upgrade auf 2.1.0 von 2.0.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie eine neue Apache Cordova WP7 2.1.0-Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.1.0.js` Datei.

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

6.  Erstellen und testen.

## Ein Upgrade auf 2.0.0 von 1.9.0

Es gab erhebliche Änderungen an der WP7-Projektstruktur im Apache Cordova 2.0.0 welche machen dieses Aufsteigen ein wenig mehr, die eingebunden die anderen. Im Wesentlichen ist dies kein Upgrade sondern schaffen ein neues Projekt und Kopie über der vorhandenen Quelldateien.

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Erstellen Sie ein neues Apache Cordova WP7 2.0 Projekt.

2.  Kopieren Sie den Inhalt Ihrer `www` Verzeichnis in das neue Projekt und achten, dass diese Elemente werden dem VS-Projekt hinzugefügt.

3.  Aktualisieren Sie den HTML-Code um das neue `cordova-2.0.0.js` Datei.

4.  Kopieren Sie und überschreiben Sie alle Splash-Screen oder Symbolbilder.

5.  Kopie über alle Plugins aus dem `plugins` Verzeichnis in das neue Projekt und stellen Sie sicher, dass sie auch das VS-Projekt hinzugefügt werden.

6.  Erstellen und testen.

## Ein Upgrade auf 1.9.0 von 1.8.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.9.0.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.9.0.js` Datei.

## Ein Upgrade auf 1.8.0 von 1.7.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.8.0.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.8.0.js` Datei.

## Ein Upgrade auf 1.7.0 von 1.6.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.7.0.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.7.0.js` Datei.

## Ein Upgrade auf 1.6.1 von 1.6.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.6.1.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.6.1.js` Datei.

## Ein Upgrade auf 1.6.0 von 1.5.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.6.0.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.6.0.js` Datei.

## Ein Upgrade auf 1.5.0 von 1.4.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.5.0.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.5.0.js` Datei.

## Ein Upgrade auf 1.4.0 von 1.3.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.4.0.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.4.0.js` Datei.

## Ein Upgrade auf 1.3.0 von 1.2.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.3.0.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.3.0.js` Datei.

## Ein Upgrade auf 1.2.0 von 1.1.0

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.2.0.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.2.0.js` Datei.

## Von 1.0.0 auf 1.1.0 aktualisieren

Im Projektmappen-Explorer-Fenster von Visual Studio:

1.  Löschen von `GapLib/WP7CordovaClassLib.dll` aus dem Projekt.

2.  Entfernen Sie den Verweis auf `WP7CordovaClassLib` im Verzeichnis **verweisen** .

3.  Mit der rechten Maustaste auf **Verweise** , und wählen Sie **Verweis hinzufügen**.

4.  Navigieren Sie zu der neuen Distribution und fügen Sie die `WP7CordovaClassLib.dll` Datei.
    
    **Hinweis**: Sie können die DLL-Version anzeigen, indem mit der rechten Maustaste auf den Verweis und **Eigenschaften** auswählen.

5.  Kopieren Sie die neue `cordova-1.1.0.js` in Ihr Projekt. (Sein Sie sicher, dass er als Inhalt markiert wird.)

6.  Aktualisieren Sie den HTML-Code um das neue `cordova-1.1.0.js` Datei.
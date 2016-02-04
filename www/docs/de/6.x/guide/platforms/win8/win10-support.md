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

title: Cordova für Windows 10
---

# Cordova für Windows 10

Vielleicht könnten Sie stattdessen "Windows 10 für Cordova" nennen es Windows 10 hatte seine HTML- und JavaScript-Apps-Plattform re-engineered Cordova Unterstützung ins Web bringen und Plattform Sicherheitseinschränkungen aus dem Weg zu bekommen.

## Erste Schritte mit Windows 10

Hinzufügen von Windows 10 ist Unterstützung zu Ihrer app so einfach wie das Festlegen Ihrer Windows-Plattform-Zielversion auf 10.0:

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


Wenn Sie mit diesen Einstellungen festgelegt erstellen, werden nur ein einzelnes .appx (und .appxupload) gebaut werden. Sie benötigen Windows 10 auf ein Minimum.

### Grundlegendes zu entfernten Modus vs. Local Mode

Remote-Modus ist ein neues Feature der HTML-Anwendungen für Windows-Plattform Windows 10. In Windows 8 und 8.1 arbeitete HTML-Anwendungen im so genannten "Local Mode" in Windows 10. Im lokalen Modus haben HTML-Anwendungen vollen Zugriff auf die native Windows API-Oberfläche und Funktionen. Um Skript-Injection-Angriffe zu verhindern, wodurch konnten in den austretenden persönlich identifizierbare Informationen durch bösartigen Code, lokalen Modus verbietet Inlineskript und Entwickler, die DOM-Manipulation innerhalb eines expliziten Kontexts (`MSApp.execUnsafeLocalFunction` dazu führen erfordert).

Remote-Modus beseitigt diese Anforderungen, wodurch es möglich, unveränderte-Bibliotheken wie jQuery oder AngularJS direkt im Code, ohne Änderungen zu verwenden. Hierzu wird Ihre Fähigkeit, bestimmte Funktionen zu deklarieren, wenn Sie Ihre Anwendung in der Windows-Store zertifizieren lassen entfernt. Die Beseitigung dieser Funktionen in der Regel nicht verhindern, um bestimmte Funktionen abrufen, aber es möglicherweise erforderlich, um eine andere Kombination von APIs oder Taktiken zu verwenden.

### Wirkung von Remote-Modus auf die Funktionen

Die folgenden Funktionen sind nicht verfügbar, beim Bereitstellen der Anwendung Remote-Modus in der Windows-Speicher:

  * Unternehmensauthentifizierung (`enterpriseAuthentication`)
  * Freigegebene Benutzerzertifikate (`sharedUserCertificates`)
  * Dokumentbibliothek (`documentsLibrary`)
  * Musikbibliothek (`musicLibrary`)
  * Bildbibliothek (`picturesLibrary`)
  * Videobibliothek (`videosLibrary`)
  * Wechselmedien (`removableStorage`)
  * Internet Client/Server (`internetClientServer`) - beachten Sie, dass `InternetClient` ist noch erlaubt
  * Privates Netzwerk Client/Server (`privateNetworkClientServer`)

Jede Bibliothek Beschränkungen kann verlangen, dass der Benutzer interagieren mit dem Dateisystem über eine [Dateiauswahl](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx)herum gearbeitet werden. Dadurch wird verhindert, dass böswilligen eingefügten Code beliebig Zugriff auf das Dateisystem.

Die netzwerkbezogene Einschränkungen müssen um gearbeitet, entweder über eine API, die Fähigkeit Kontrollen nicht verwendet oder durch Vermittlung Kommunikation über standard-Internet-Kommunikation-Kanäle wie `XMLHttpRequest` oder Web Sockets.

Die Unternehmensauthentifizierung und Benutzerzertifikaten freigegebene Funktionen richten sich speziell an Enterprise-Szenarien. Diese Funktionen werden unterstützt für Private/Unternehmen-fähige App Stores, also wenn Sie apps erstellen die werden, auf einen internen Bereitstellungsmechanismus bereitgestellt werden, Sie noch dies unterstützen können. Sie werden jedoch nicht für Remote Mode apps im öffentlichen Windows-Speicher unterstützt. Wenn Sie Windows 10, Zielen erstellen, wenn man diese Funktionen in Ihrem app-Manifest erkannt wird, wird eine Warnung angezeigt.

## Referenz

### "config.xml" "Einstellungen"

#### windows-target-version, windows-phone-target-version

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


*Mindestens eine Angabe erforderlich.*

Diese Einstellungen bestimmen die Version von Windows oder Windows Phone, die Sie möchten, dass Ihre app-Paket zum Ziel.

**Gültige Werte**

  * `10.0`, `UAP`: baut für Windows 10 Universal App-Plattform
  * `8.1`: Builds für Windows 8.1 bzw. Windows Phone 8.1
  * `8.0`: bauen für Windows 8.0. Dies gilt nicht für Windows Phone (verwenden Sie stattdessen die **wp8** -Cordova-Plattform)

**Szenarien**

Wenn Sie nur Windows 10 abzielen, müssen Sie nur eine einzelne `windows-target-version` -Einstellung in der Datei "config.xml" haben.

#### WindowsDefaultUriPrefix

    <preference name="WindowsDefaultUriPrefix" value="ms-appx://|ms-appx-web://" />


Diese Einstellung gibt an, ob Sie Ihre Anwendung im **lokalen Kontext** oder **entfernten Kontext** als seine Start-URI als Ziel soll. Beim Erstellen von für Windows 10 ist der Standardwert entfernten Zusammenhang (`ms-appx-web://`).

Um eine Anwendung im lokalen Modus haben, die von Remote-Modus Funktion Einschränkungen nicht betroffen ist, müssen Sie diese Voreinstellung auf setzen `ms-appx://` und `<access>` Elemente mit entfernten URIs nicht zu erklären.

**Gültige Werte**

  * `ms-appx://` (Standardeinstellung für Windows 8.0, 8.1): die Startseite wird im lokalen Kontext
  * `ms-appx-web://` (Standardeinstellung für Windows 10): die Startseite wird im entfernten Kontext

#### {SDK}-MinVersion, {SDK}-MaxVersionTested

*Optional*

    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
    <preference name="Windows.Mobile-MinVersion" value="10.0.9927.0" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Microsoft.Band-MinVersion" value="10.0.11.0" />


Diese Präferenzen ermitteln welche Ökosysteme (einschließlich aber nicht beschränkt auf Universal Windows, Windows Mobile oder Xbox) und ihre min/Max-Versionen sind kompatibel mit. Sie benötigen noch die Plattformen unterstützt die Universal App-Plattform (also Windows 10 als Basis Betriebssystem). Jedoch können dies bedeuten, dass die Anwendung bestimmte Funktionen kennt, die nur auf bestimmten Geräten (z. B. Spiel streaming auf Xbox) vorliegen müssen.

**Gültige Werte**

Es gibt drei Teile mit jedem Wert: das **SDK**, **Version Beschränkung**und den **Versionswert**. Diese Einstellungen werden von `Windows` oder `Microsoft` beginnt und endet `- MinVersion` oder `-MaxVersionTested`erkannt:

  * Das **SDK** wird definiert, welche spezialisierte Plattform, die Sie ansprechen möchten. Der Standardwert ist `Windows.Universal`. Gültige Werte für diese werden in das AppxManifest-Schema, in dem `Paket/Depednencies/TargetPlatform` -Elementen definiert.
  * Die **Version-Beschränkung** Regeln für die Kompatibilität von Anwendungen definiert. Zum Beispiel, wenn die `-MinVersion` wird auf 10.1.0.0, festgelegt, dann OS-Versionen, die nicht mindestens 10.1.0.0 des entsprechenden SDK unterstützen nicht laden können.
      * `-MinVersion` gibt die minimale Version des SDK erforderlich
      * `-MaxVersionTested` gibt die höchste getestete Version des SDK. Wenn eine neue Version des entsprechenden SDK freigegeben wird, wird es im Kompatibilitätsmodus für die angegebene Version ausgeführt.
  * Der **Versionswert** ist ein 4-Ganzzahl-Tupel in Form von *major.minor.build.qfe*.

Wenn keine Vorgaben dieser Typen in der Datei config.xml angegeben sind, werden Windows.Universal Version 10.0.0.0 standardmäßig ausgewählt.

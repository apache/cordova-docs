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

title: Sicherheitshandbuch
---

# Sicherheitshandbuch

Die folgende Anleitung beinhaltet einige bewährte Sicherheitsmethoden, die Sie, beim Entwickeln einer Anwendung von Cordova beachten sollten. Bitte beachten Sie, dass die Sicherheit ist ein sehr kompliziertes Thema und deshalb dieses Handbuch ist nicht erschöpfend. Wenn Sie, dass Sie zu diesem Leitfaden dazu beitragen können glauben, wenden Sie sich bitte ein Thema in Cordova's Bug-Tracker unter ["Dokumentation"][1]abzulegen. Dieser Leitfaden soll auf allgemeine Cordova Entwicklung (alle Plattformen) anwendbar, aber Plattform-spezifischen Besonderheiten zu beachten.

 [1]: https://issues.apache.org/jira/browse/CB/component/12316407

## Dieses Handbuch behandelt die folgenden Themen:

*   Whitelist
*   Iframes und die Id Rückrufmechanismus
*   Zertifikat fixieren
*   Selbstsignierte Zertifikate
*   Verschlüsselte Speicherung
*   Allgemeine Tipps
*   Empfohlene Artikel und andere Ressourcen

## Whitelist

*   Lesen und verstehen der [Whitelist-Guide](../whitelist/index.html)

*   Domain-Whitelist funktioniert nicht auf Android API 10 und unten und WP8 für Iframes und XMLHttpRequest. Dies bedeutet ein Angreifer kann einer beliebigen Domäne in einem Iframe laden und jedes Skript auf dieser Seite in Iframe direkt auf Cordova JavaScript-Objekte und die entsprechenden native Java-Objekte zugreifen kann. Sie sollten dies in Betracht ziehen, beim Erstellen von Anwendungen für diese Plattformen. In der Praxis bedeutet dies, um sicherzustellen, dass Sie Ziel einer höher als 10 Android API und, wenn möglich nicht Iframe zu verwenden, um externe Inhalte - laden das InAppBrowser-Plugin oder andere Drittanbieter Plug-ins verwenden.

## Iframes und die Id Rückrufmechanismus

Wenn Inhalte in einem Iframe aus einer Whitelist-Domäne bereitgestellt werden, haben diese Domäne Zugriff auf die native Cordova-Brücke. Dies bedeutet, dass Sie ein Drittanbieter-Werbe-Netzwerk Whitelist und dienen diese anzeigen über ein Iframe, ist es möglich, dass eine böswillige Anzeige ist aus Iframe ausbrechen und bösartige Aktionen ausführen können. Aus diesem Grund sollten Sie in der Regel nicht Iframes verwenden, wenn Sie den Server steuern, der den Iframe-Inhalt hostet. Beachten Sie, dass es Drittanbieter Plug-ins zur Verfügung gibt, um Werbe-Netzwerke zu unterstützen. Beachten Sie, dass diese Aussage nicht für iOS, nämlich alles gilt, einschließlich der Iframe Verbindungen abfängt.

## Zertifikat fixieren

Cordova unterstützt keine wahre Zertifikat zu fixieren. Das größte Hindernis für das ist ein Mangel an systemeigenen APIs in Android zum Abfangen des SSL-Verbindungen um die Überprüfung des Zertifikats des Servers ausführen. (Obwohl es fixieren auf Android in Java mit JSSE Zertifikat kann, die Webview auf Android in C++ geschrieben ist und Server-Verbindungen für Sie, indem die Webview verarbeitet werden, ist also es nicht möglich, Java und JSSE es zu verwenden.) Da Apache Cordova über mehrere Plattformen hinweg konsistent APIs bieten soll, bricht nicht mit einer Funktion in eine größere Plattform die Konsistenz.

Es gibt Möglichkeiten zur Angleichung Zertifikat fixieren, z. B. Überprüfung, dass die öffentlichen Schlüssel des Servers (Fingerabdruck) der erwartete Wert ist, wenn die Anwendung gestartet wird oder zu anderen verschiedenen Zeiten während der Lebensdauer der Anwendung. Es gibt Drittanbieter Plug-ins zur Cordova, die das tun kann. Jedoch ist dies nicht dasselbe wie wahre Zertifikat fixieren, die automatisch den erwarteten Wert auf jede Verbindung zu dem Server überprüft.

## Selbstsignierte Zertifikate

Verwendung selbstsignierter Zertifikate auf dem Server wird nicht empfohlen. Wenn Sie SSL wünschen, ist dann es dringend empfohlen, dass Ihr Server über ein Zertifikat verfügen, die von einer bekannten Zertifizierungsstelle (Certificate Authority) richtig signiert wurde. Die Unfähigkeit auf true Zertifikat festhalten, ist dies wichtiger.

Der Grund ist, dass selbstsignierte Zertifikate zu akzeptieren umgeht die Überprüfung der Zertifikatkette, wodurch jedes Serverzertifikat vom Gerät als gültig betrachtet werden. Dies eröffnet die Kommunikation für Man-in-the-Middle-Angriffe. Es wird sehr leicht für einen Hacker nicht nur abfangen und lesen die gesamte Kommunikation zwischen dem Gerät und dem Server, sondern auch um die Mitteilung zu ändern. Das Gerät wird nie erfahren, dass dies geschieht, weil es nicht überprüfen, ob der Server-Zertifikat von einer vertrauenswürdigen Zertifizierungsstelle signiert ist. Das Gerät hat keinen Beweis, dass der Server, der sie erwartet. Wegen der Leichtigkeit einen Man-in-the-Middle-Angriff zu tun ist es nur geringfügig besser als nur http anstelle von Https auf einem nicht vertrauenswürdigen Netzwerk ausgeführt, selbstsignierte Zertifikate zu akzeptieren. Ja, der Datenverkehr verschlüsselt werden würde, aber es könnte mit dem Schlüssel aus einem Man-in-the-Middle, verschlüsselt werden, so dass die Man-in-the-Middle alles, zugreifen kann, so dass Verschlüsselung nutzlos außer für passive Beobachter ist. Nutzer vertrauen SSL um sicher zu sein, und dies absichtlich verdiene es unsicher, so wird die SSL-Verwendung irreführend. Wenn dies auf einem vertrauenswürdigen Netzwerk verwendet wird (d. h., Sie sind völlig innerhalb eines kontrollierten Unternehmen), selbstsignierte Zertifikate noch nicht empfohlen werden. Die beiden Empfehlungen in einem vertrauenswürdigen Netzwerk sind nur http verwenden, da das Netzwerk selbst vertrauenswürdig ist oder ein Zertifikat von einer vertrauenswürdigen Zertifizierungsstelle (nicht selbstsigniert) unterzeichnet. Das Netzwerk vertrauenswürdig ist oder nicht.

Die hier beschriebenen Prinzipien beziehen sich nicht auf Apache Cordova, sie gelten für alle Client-Server-Kommunikation.

Beim Ausführen von Cordova auf Android verwenden `android:debuggable="true"` in der Anwendung Manifest erlauben SSL-Fehler, z. B. Zertifikat Kette Validierungsfehler auf selbstsignierte Zertifikate. So Sie selbstsignierte Zertifikate in dieser Konfiguration können, aber dies keine Konfiguration, die verwendet werden soll ist, wenn die Anwendung in der Produktion ist. Es soll nur während der Anwendungsentwicklung verwendet werden.

## Verschlüsselte Speicherung

(TBD)

## Allgemeine Tipps

### Verwenden Sie keine Android Gingerbread!

*   Legen Sie Ihr höher als 10 min-Ziel-Sdk-Niveau. API 10 ist Lebkuchen und Lebkuchen wird nicht mehr von Google oder Geräte-Herstellern unterstützt und wird daher nicht empfohlen von Cordova-Team. 
*   Lebkuchen nachweislich unsicher und einer der wichtigsten gezielte mobile OSs [http://www.mobilemag.com/2012/11/06/andriod-2-3-gingerbread-security/][2]. 
*   Die Whitelist auf Android funktioniert nicht mit Lebkuchen oder niedriger. Dies bedeutet, dass ein Angreifer schädlichen Code in einem Iframe geladen werden kann, das müsste dann Zugriff auf alle von Cordova-APIs und können, dass der Zugang zu persönliche Daten stehlen, SMS-Nachrichten an Premium-Rate-Nummern zu schicken und andere böswillige Aktionen durchzuführen. 

 [2]: http://bgr.com/2012/11/06/android-security-gingerbread-malware/

### InAppBrowser für externe Links verwenden

*   Verwenden Sie die InAppBrowser beim Öffnen von Links zu externen Websites. Das ist viel sicherer als Whitelisting eines Domain-namens und einschließlich der Inhalte direkt in der Anwendung, da die InAppBrowser der native Browser-Sicherheits-Features verwenden und nicht die Website geben auf Ihre Cordova-Umgebung Zugriff. Selbst wenn Sie der Website Dritter Vertrauen und direkt in Ihre Anwendung aufnehmen, kann diese Websites Dritter schädlichen Webinhalten verknüpfen. 

### Validieren Sie alle Benutzereingaben

*   Überprüfen Sie immer alle Eingaben, die die Anwendung akzeptiert. Dazu gehören Benutzernamen, Kennwörter, Termine, hochgeladen Medien usw.. Da ein Angreifer Ihr HTML und JS Vermögen (entweder durch Dekompilierung der Anwendung oder mithilfe von debugging-Tools wie Chrome://inspect) manipulieren könnte, sollten diese Validierung auch auf Ihrem Server durchgeführt werden, insbesondere vor der Übergabe der Daten an einen Back-End-Dienst. 
*   Andere Quellen, wo die Daten überprüft werden sollten: Benutzerdokumente, Kontakte, push-Benachrichtigungen

### Sensible Daten nicht zwischenspeichern

*   Wenn Benutzernamen, Kennwort, Geolocation-Informationen und andere sensiblen Daten werden zwischengespeichert, konnte dann es möglicherweise später durch ein nicht autorisierter Benutzer oder eine Anwendung abgerufen werden.

### Verwenden Sie keine eval(), es sei denn, Sie wissen was Sie tun

*   Die JavaScript-Funktion eval() hat eine lange Geschichte, die missbraucht werden. Benutze es falsch kann Ihren Code für Injection-Angriffen, Debuggen von Schwierigkeiten und langsamer Ausführung von Code öffnen. 

### Nicht davon ausgehen Sie, dass der Quellcode sicher ist

*   Da eine Anwendung von Cordova aus HTML und JavaScript basiert, die in einem einheitlichen Container gepackt bekommen, sollten Sie nicht Ihr Code sicher sein. Es ist möglich, reverse Engineering eine Cordova-Anwendung. 

## Empfohlene Artikel und andere Ressourcen

*   [HTML5-Sicherheit-Spickzettel, Detaillierung die HTML5-Anwendung sichern][3]
*   [PhoneGap's Artikel auf Gerätesicherheit, wie die Verwendung von verschlüsselten Daten][4]
*   [Whitepaper über bekannte Sicherheitslücken in Webview basierte Hybridanwendungen][5]

 [3]: https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet
 [4]: https://github.com/phonegap/phonegap/wiki/Platform-Security
 [5]: http://www.cis.syr.edu/~wedu/Research/paper/webview_acsac2011.pdf
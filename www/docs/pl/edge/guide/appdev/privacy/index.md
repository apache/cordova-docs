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

title: Prywatności Przewodnik
---

# Prywatności Przewodnik

Mobilne prywatności jest że każdy deweloper aplikacji musi zająć się problemem. Użytkownicy oczekują, że ich prywatne informacje będą gromadzone i zagospodarowywane przez aplikację. Również istnieje coraz większa liczba jurysdykcji, które teraz mają wymagania prawne dotyczące prywatności mobilnych.

Ten przewodnik na mobilnych aplikacji prywatności należy uznać za *podkład* kilka najbardziej istotnych kwestii. Przedstawia niektóre powszechnie akceptowanym najlepszych praktyk i zawiera odniesienia do innych bardziej szczegółowych przewodników i referencje.

*   **Polityka prywatności**: ci aplikacja powinna zawierać Polityka prywatności, który usuwa tematy jakie informacje aplikacja zbiera od lub o użytkowników, jak te informacje jest używany, z którymi jest wspólne i jak użytkownicy mogą dokonywać wyborów prywatnością w aplikacji. Aby ułatwić zrozumienie, należy użyć prostym językiem, a uniknąć technicznego żargonu. Należy udostępnić politykę prywatności dla użytkowników do przeglądu przed pobrania, takie jak w opisie aplikacji w marketplace aplikacji. Ponadto należy politykę prywatności dostępne w samej aplikacji. Ograniczony rozmiar urządzenia wyświetla tworzy wyzwania dla wyświetlania polityki prywatności użytkowników. Należy wziąć pod uwagę rozwój *w skrócie* zasadę, która zawiera najważniejsze informacje, a następnie podać link do polityki "długi formularz" dla osób zainteresowanych w więcej szczegółów. Kilka grup są próby opracowania ikona oparty standardów ochrony prywatności, które warto rozważyć po starsze standardy komunikacji.

*   **Zbiór informacji wrażliwych**: kolekcja aplikacji wrażliwych danych osobowych podnosi ważne prywatności. Przykłady poufnych informacji osobistych informacji finansowych, zdrowia oraz informacji od lub o dzieci. Zawiera również informacje zebrane z niektórych baz danych, zwykle znajduje się na urządzeń przenośnych i tabletów, geolokalizacja informacje, Kontakty/Książka telefoniczna, mikrofon/kamery i zdjęć przechowywanych i czujników. Zobacz następujące dokumentacja strony aby uzyskać więcej informacji: [aparat][1], [uchwycić][2], [kontakty][3]i [geolokalizacji][4]. Ogólnie rzecz biorąc należy uzyskać zgody użytkownika przed gromadzenia poufnych informacji i, jeśli to możliwe, podać mechanizm kontroli, który pozwala użytkownik wobec łatwo zmienić uprawnienia. Systemy operacyjne aplikacji może pomóc w niektórych przypadkach poprzez przedstawienie just-in czas oknach dialogowych, które zapytać o zgodę użytkownika przed kolekcja. W takich przypadkach należy skorzystać z wszelkich możliwości, aby dostosować okno dialogowe pole tekst do wyjaśnienia, jak aplikacja używa i, w stosownych przypadkach, informacje takie akcje.

*   **Unikanie użytkownika niespodzianka**: Jeśli aplikacja zbiera i wykorzystuje informacje w sposób, który może być zaskakujące dla użytkowników w świetle podstawowym celem aplikacji (na przykład, odtwarzacz muzyczny uzyskuje dostęp do przechowywanych obrazów), należy podjąć podobne kroki, podobnie jak w przypadku zbierania poufnych informacji osobistych. Oznacza to, że zdecydowanie zaleca się stosowanie tylko w czas okna dialogowe informuje użytkownika o kolekcji lub korzystania z informacji i, w stosownych przypadkach, zapewnienia odpowiedniej kontroli prywatności.

*   **Kolekcja danych stron trzecich lub udostępnianie**: Jeśli ci aplikacja zbiera informacje, które jest dostarczone do innej firmy - platforma sieci społecznej lub sieci reklamowej (na przykład, jeśli Twoja aplikacja wyświetla reklamy) - należy poinformować użytkowników o tej kolekcji i dzielenie. Co najmniej, politykę prywatności należy opisać na gromadzenie informacji i udostępniania i, w stosownych przypadkach, oferują użytkownikom możliwość kontroli lub zrezygnować z takiej kolekcji lub udostępnianie.

*   **Kolekcja ograniczenia i bezpieczeństwa**: użytkownicy powierzają swoją aplikację z ich informacje i oczekują, że będzie podjąć odpowiednie środki ostrożności w celu ochrony. Jednym z najlepszych sposobów, aby uniknąć kompromisów bezpieczeństwa danych osobowych nie jest na pierwszym miejscu gromadzenia informacji, chyba że aplikacja ma szczególnych i uzasadnionych powodów kolekcja. Dla informacji, które muszą być zebrane upewnij się, aby zapewnić kontrole bezpieczeństwa do ochrony informacji, czy jest on przechowywany w urządzeniu lub na serwerach zaplecza. Należy również opracować zasady przechowywania danych, który jest realizowany w ramach aplikacji i na serwerach zaplecza.

 [1]: cordova_camera_camera.md.html
 [2]: cordova_media_capture_capture.md.html
 [3]: cordova_contacts_contacts.md.html
 [4]: cordova_geolocation_geolocation.md.html

Oto niektóre dodatkowe pomocne prywatności mobilnych przewodników dla programistów:

*   California prokurator generalny, [prywatności w podróży: zalecenia dla ekosystemu mobilnych][5]

*   Centrum dla demokracji i technologii, przyszłości prywatności Forum, [najlepszych praktyk dla programistów aplikacji mobilnych][6]

*   CTIA Stowarzyszenie bezprzewodowej, [najlepszych praktyk i wytyczne dla lokalizacji usług opartych][7]

*   Federalną Komisję handlu, [mobilnych prywatności informacji: budowanie zaufania dzięki przejrzystości][8]

*   Przyszłości prywatności Forum, [aplikacji prywatności][9] strony internetowej

 [5]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
 [6]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
 [7]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
 [8]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
 [9]: http://www.applicationprivacy.org
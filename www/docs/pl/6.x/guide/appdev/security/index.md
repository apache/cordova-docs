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

title: Przewodnik bezpieczeństwa
---

# Przewodnik bezpieczeństwa

Niniejszy Przewodnik obejmuje kilka zabezpieczeń najlepszych praktyk, które należy wziąć pod uwagę podczas opracowywania aplikacji Cordova. Należy pamiętać, że bezpieczeństwo jest bardzo skomplikowany temat i dlatego ten przewodnik nie jest wyczerpująca. Jeśli uważasz, że możesz przyczynić się do tego poradnika, uprzejmie prosimy o plik problemu Cordova w śledzenia błędów pod ["Dokumentacja"][1]. Ten przewodnik ma na celu zastosowanie do ogólnego rozwoju Cordova (wszystkie platformy), ale zauważyć, specyfika poszczególnych platform.

 [1]: https://issues.apache.org/jira/browse/CB/component/12316407

## Ten przewodnik omawia następujące tematy:

*   Biała
*   Ramek i mechanizmu zwrotnego Id
*   Przypinanie certyfikat
*   Certyfikaty z podpisem własnym
*   Przechowywanie zaszyfrowanych
*   Wskazówki ogólne
*   Polecamy artykuły i inne zasoby

## Biała

*   Przeczytać i zrozumieć [Przewodnik białej listy](../whitelist/index.html)

*   Białą domeny nie działa na Android API 10 i poniżej i WP8 dla ramek i XMLHttpRequest. Oznacza to, osoba atakująca może załadować dowolnej domeny w iframe i dowolny skrypt na tej stronie w iframe bezpośrednio dostęp do obiektów Cordova JavaScript i odpowiadających im obiektów Java native. Należy wziąć to pod uwagę podczas tworzenia aplikacji dla tych platform. W praktyce oznacza to, upewniając się, że cel Android API wyższe niż 10, i że jeśli to możliwe nie używasz iframe załadować zawartość zewnętrzna - inAppBrowser plugin lub inne pluginy trzeciej.

## Ramek i mechanizmu zwrotnego Id

Jeśli zawartość jest dostarczana w ramce z domeny Białej liście, że domeny będą mieli dostęp do mostu rodzimych Cordova. Oznacza to, że jeśli whitelist sieci reklamy firm i te reklamy poprzez iframe, to jest możliwe, że złośliwe reklamy będą mogli zerwać z iframe i wykonania szkodliwego działania. W związku z tym ogólnie nie należy używać ramek chyba kontrola serwera obsługującego zawartości iframe. Należy również pamiętać, że istnieją pluginy trzeciej dostępne do obsługi sieci reklamowych. Należy pamiętać, że to stwierdzenie nie jest prawdziwe dla iOS, który przechwytuje wszystko łącznie z połączeniami iframe.

## Przypinanie certyfikat

Cordova obsługuje prawdziwe świadectwo Przypinanie. Główną przeszkodą jest brak native API Androida na przechwytywanie połączeń SSL do wykonać sprawdzenie certyfikatu serwera. (Choć jest możliwe do certyfikatu, przypinanie na Android w Java przy użyciu JSSE, Widok sieci Web na Androida jest napisany w C++ i połączenia z serwerem są obsługiwane dla Ciebie przez webview, więc to nie możliwe do wykorzystania Java i JSSE tam.) Ponieważ Apache Cordova ma do zaoferowania spójne API na wielu platformach, nie mając możliwości w głównych platform przerwy tej spójności.

Istnieją sposoby na zbliżenie, certyfikat przypinanie, takich jak sprawdzanie, że klucz publiczny serwera (odcisk palca) jest wartością oczekiwaną podczas uruchamiania aplikacji lub w innych różnych momentach życia aplikacji. Ma innej wtyczki dla Cordova, który może to zrobić. Jednak to nie jest taki sam jak prawdziwe świadectwo przypinanie, który automatycznie sprawdza wartość oczekiwana na każde połączenie z serwerem.

## Certyfikaty z podpisem własnym

Za pomocą certyfikatów z podpisem własnym na serwerze nie jest zalecane. Jeśli pragniesz SSL, a następnie zaleca że twój serwer ma certyfikat, który został prawidłowo podpisany przez znany urząd certyfikacji (urząd certyfikacji). Niezdolność do true certyfikat Przypinanie sprawia, że jest to ważne.

Powodem jest to, że przyjmując certyfikatów z podpisem własnym pomija sprawdzanie poprawności łańcucha certyfikatu, który pozwala każdego certyfikatu serwera być uznawane przez urządzenie. To otwiera się komunikatu na ataki man-in--middle. To staje się bardzo łatwe dla hakerów nie tylko przechwycić i przeczytać wszystkie komunikacji między urządzeniem i serwerem, ale także modyfikować komunikacji. Urządzenie nigdy nie będzie wiedział, że to się dzieje, bo to nie sprawdza, czy certyfikat serwera jest podpisany przez zaufany urząd certyfikacji. Urządzenie ma żadnego dowodu, że serwer jest kto oczekuje. Ze względu na łatwość prowadzenia ataku man-in--middle przyjmowania certyfikatów z podpisem własnym jest tylko nieznacznie lepszy niż tylko z protokołu http zamiast https sieci niezaufanej. Tak, chcieliby być zaszyfrowany ruch, ale to może być szyfrowane za pomocą klucz z man-in--middle, więc man-in--middle można dostęp do wszystkiego, więc szyfrowanie jest bezużyteczny wyjątkiem biernymi obserwatorami. Użytkownicy zaufania protokołu SSL do zabezpieczania i to celowo co to niebezpieczne, więc użycie SSL staje się mylące. Jeśli to będzie używany w sieci zaufanych (tj, jesteś całkowicie wewnątrz kontrolowanych przedsiębiorstw), a następnie certyfikatów z podpisem własnym nie są nadal zalecane. Zalecenia w zaufanej sieci są po prostu za pomocą protokołu http bo samej sieci jest zaufany, lub aby uzyskać zaświadczenie podpisane przez zaufanego urzędu certyfikacji (nie podpisany). Sieć jest zaufany, albo nie jest.

Zasad opisanych tutaj nie są specyficzne dla Apache Cordova, stosują się do wszystkich komunikacji klient serwer.

Po uruchomieniu Cordova na Android, za pomocą `android:debuggable="true"` w aplikacji manifestu pozwolą SSL błędy takie jak świadectwo błędy sprawdzania poprawności łańcucha na certyfikatów z podpisem własnym. Tak można używać certyfikatów z podpisem własnym w tej konfiguracji, ale nie jest to konfiguracja, która powinna być używana, gdy aplikacja jest w produkcji. To ma być używana tylko podczas tworzenia aplikacji.

## Przechowywanie zaszyfrowanych

(TBD)

## Wskazówki ogólne

### Nie należy używać Android Gingerbread!

*   Ustaw poziom wyższy niż 10 min cel sdk. API 10 jest Piernik, i Gingerbread jest już obsługiwany przez Google lub urządzenia producentów i dlatego nie polecam zespołu Cordova. 
*   Piernik okazały się być niepewny i jednym z najbardziej ukierunkowane mobilnych OSs [http://www.mobilemag.com/2012/11/06/andriod-2-3-gingerbread-security/][2]. 
*   Biała na Androida nie działa z piernika lub niższym. Oznacza to, że osoba atakująca może załadować złośliwego kodu w iframe następnie mieć dostęp do wszystkich interfejsów API Cordova i przydałby się dostęp do kradzieży danych osobowych, wysyłanie wiadomości SMS do numerów premium rate i wykonać inne szkodliwe działania. 

 [2]: http://bgr.com/2012/11/06/android-security-gingerbread-malware/

### Użyj InAppBrowser do linków zewnętrznych

*   Przy otwieraniu linków na każdej zewnętrznej stronie, należy użyć InAppBrowser. To jest o wiele bezpieczniejsze niż białą nazwę domeny i tym treści bezpośrednio w aplikacji, ponieważ InAppBrowser będzie korzystać z funkcji zabezpieczeń wbudowana przeglądarka i nie daje stronie dostęp do środowiska Cordova. Nawet jeśli ufasz na trzeciej stronie internetowej i umieścić go bezpośrednio w aplikacji, że witryny osób trzecich może link do zrobiony w złej intencji tkanina treść. 

### Sprawdzanie poprawności wszystkie dane wejściowe użytkownika

*   Zawsze sprawdzić wszelkie dane wejściowe, że aplikacja akceptuje. Dotyczy to nazw użytkowników, haseł, daty, przesłane mediów, itp. Ponieważ osoba atakująca może manipulować HTML i JS aktywów (zarówno przez dekompilacji aplikacji lub przy użyciu narzędzia debugowania, takie jak chrome://inspect), ten uprawomocnienie powinny także wykonywane na serwerze, zwłaszcza przed przekazaniem danych do dowolnej usługi zaplecza. 
*   Inne źródła, gdzie dane powinny zostać zatwierdzone: użytkownik dokumenty, kontakty, popychać notyfikacja

### Nie Buforuj dane poufne

*   Jeśli nazwy użytkowników, hasła, geolokalizacja informacji i innych poufnych danych jest buforowany, wtedy to może potencjalnie być Źródło później przez nieautoryzowanego użytkownika lub aplikacji.

### Nie używaj eval(), chyba że wiesz co robisz

*   JavaScript funkcja eval() ma długą historię nadużywane. Niepoprawne użycie można otworzyć kod na ataki, debugowanie trudności i wolniejsze wykonywanie kodu. 

### Nie zakładaj, że kod źródłowy jest bezpieczne

*   Ponieważ aplikacja Cordova składa się z aktywów HTML i JavaScript, które dostać zapakowane w zbiornik ojczystym, nie warto swój kod aby być bezpieczne. Jest to możliwe do odtworzenia aplikacja Cordova. 

## Polecamy artykuły i inne zasoby

*   [HTML5 bezpieczeństwa ściągawki, szczegółowo jak zabezpieczyć aplikacji HTML5][3]
*   [Telefon jest artykuł na temat bezpieczeństwa urządzenia, takie jak przy użyciu zaszyfrowanych danych][4]
*   [Hybrydowych aplikacji opartych na oficjalny dokument o dobrze znanych luk w zabezpieczeniach w widoku sieci Web][5]

 [3]: https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet
 [4]: https://github.com/phonegap/phonegap/wiki/Platform-Security
 [5]: http://www.cis.syr.edu/~wedu/Research/paper/webview_acsac2011.pdf
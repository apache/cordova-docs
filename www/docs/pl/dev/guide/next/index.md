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

title: Kolejne kroki
---

# Kolejne kroki

Dla programistów, którzy mają zrozumienie tego, jak za pomocą Cordova CLI i korzystać z wtyczek, istnieje kilka rzeczy, może warto rozważyć badania obok budować lepsze, bardziej wydajnych aplikacji Cordova. Następujący dokument oferuje porady na różne tematy dotyczące najlepszych praktyk, badania, aktualizacje i inne tematy, ale nie jest to bezwzględnie. Należy rozważyć uruchomienie punktu na twój rozwój jako deweloper Cordova. Również jeśli widzisz coś, co można poprawić, proszę [przyczynić się][1]!

 [1]: http://cordova.apache.org/#contribute

Ten przewodnik zawiera następujące tematy:

*   Najlepsze praktyki
*   Obsługa uaktualnień
*   Testowanie aplikacji Cordova
*   Debugowanie aplikacji Cordova
*   Interfejs użytkownika
*   Uwagi specjalne
*   Na bieżąco
*   Uzyskiwanie pomocy 

# Najlepsze praktyki Cordova app rozwoju

## 1) SPA jest twoim przyjacielem

Po pierwsze i najważniejsze - aplikacji Cordova powinna przyjąć projekt SPA (pojedynczej strony aplikacji). Luźno zdefiniowane, SPA jest klient aplikacji, która jest uruchamiane jeden wniosek strony sieci web. Użytkownik wczytuje początkowy zbiór zasobów (HTML, CSS i JavaScript) i dalsze aktualizacje (wykazujących Nowy widok, ładowanie danych) odbywa się za pomocą AJAX. Uzdrowiska są często używane do bardziej złożonych aplikacji klient. GMail jest tego doskonałym przykładem. Po załadowaniu GMail, widoki poczty, edycji i organizacji wykonywane są przez aktualizacji DOM zamiast opuszczania bieżącej strony załadować zupełnie nowe.

Przy użyciu SPA może pomóc zorganizować aplikację w bardziej efektywny sposób, ale również ma konkretne korzyści dla aplikacji Cordova. Aplikacja Cordova musi czekać na turnieju [deviceready](../../cordova/events/events.deviceready.html) do ognia przed żadnych pluginów, które mogą być używane. Jeśli nie używasz SPA, i twój użytkownik klika, aby przejść z jednej strony na drugą, trzeba będzie czekać na [deviceready](../../cordova/events/events.deviceready.html) na ogień ponownie przed korzystać z wtyczki. To jest łatwo zapomnieć, jak aplikacja staje się większy.

Nawet, jeśli nie chcesz używać Cordova, tworzenie aplikacji mobilnych bez korzystania z jednej strony architektura będzie mieć wpływ na wydajność poważne. To jest ponieważ nawigowania między stronami będzie wymagać skrypty, aktywów, itp., do załadowania. Nawet, jeżeli te aktywa są buforowane, nadal będą problemy z wydajnością.

Przykłady SPA bibliotek, które można używać w aplikacji Cordova:

*   [AngularJS][2]
*   [EmberJS][3]
*   [Kręgosłup][4]
*   [Kendo UI][5]
*   [Monaca][6]
*   [ReactJS][7]
*   [Sencha Touch][8]
*   [jQuery Mobile][9]

 [2]: http://angularjs.org
 [3]: http://emberjs.com
 [4]: http://backbonejs.org
 [5]: http://www.telerik.com/kendo-ui
 [6]: http://monaca.mobi/en/
 [7]: http://facebook.github.io/react/
 [8]: http://www.sencha.com/products/touch/
 [9]: http://jquerymobile.com

I wiele, wiele więcej.

## 2) zagadnienia wydajności

Jest jednym z największych błędów, nowy developer Cordova można zrobić założenie, że wydajność, którą otrzyma na komputer stacjonarny jest to samo, co pojawi się w telefonie komórkowym. Choć nasze urządzenia mobilne zdobyć silniejszy każdego roku, nadal brak moc i wydajność komputerów stacjonarnych. Urządzenia przenośne zazwyczaj mają znacznie mniej pamięci RAM i GPU, to dalekie od ich pulpit (lub nawet laptopa) braci. Pełna lista porad tutaj byłby być zbyt wiele, ale Oto kilka rzeczy należy pamiętać (z listy zasobów już w końcu do dalszych badań).

**Kliknij opcję kontra Touch** - największy i najprostszy błąd, możesz to kliknij zdarzenia. A te "działają" na telefon komórkowy, większość urządzeń nałożyć 300ms opóźnienia na nich w celu odróżnienia dotyk i touch zdarzenia "trzymać". Za pomocą `touchstart` , lub `touchend` , spowoduje w dramatycznej poprawy - 300ms nie brzmi jak wiele, ale może spowodować gwałtowne aktualizacje interfejsu użytkownika i zachowanie. Należy również rozważyć fakt, że "dotknąć" zdarzenia nie są obsługiwane w przeglądarkach-webkit, zobacz [CanIUse][10]. Aby poradzić sobie z tych ograniczeń, można kasie różnych bibliotek jak HandJS i Fastouch.

 [10]: http://caniuse.com/#search=touch

**CSS Transitions kontra manipulacji DOM** - przy pomocy towary żelazne Przyspieszony CSS przejścia będzie znacznie lepiej niż przy użyciu JavaScript do tworzenia animacji. Zobacz listę zasobów na końcu tej sekcji przykłady.

**Sieci Suck** - Ok, sieci nie zawsze ssać, ale opóźnienie sieci telefonii komórkowej, nawet dobrej sieci telefonii komórkowej, jest znacznie gorsza, niż prawdopodobnie myślisz. Aplikacji pulpitu, który slurps w dół 500 wierszy danych JSON, co 30 sekund, będzie zarówno wolniej na urządzeniu mobilnym, a także wieprz baterii. Należy pamiętać, że aplikacje Cordova mają wiele sposobów, aby utrwalić dane w aplikacji (LocalStorage i systemu plików, na przykład). Pamięci podręcznej danych lokalnych i być świadoma, ilość danych, które wysyłasz i z powrotem. To szczególnie ważne, gdy aplikacja jest podłączony przez sieć komórkową.

**Dodatkowe artykuły i zasobów**

*   ["Ci pół dupą to"][11]
*   ["Top 10 wskazówki wydajność PhoneGap i hybrydowych aplikacji"][12]
*   ["Szybki aplikacji i witryn z JavaScript"][13]

 [11]: http://sintaxi.com/you-half-assed-it
 [12]: http://coenraets.org/blog/2013/10/top-10-performance-techniques-for-phonegap-and-hybrid-apps-slides-available/
 [13]: https://channel9.msdn.com/Events/Build/2013/4-313

## 3) rozpoznać i obsłużyć Offline Status

Zobacz poprzednie wskazówka na temat sieci. Nie tylko można w powolnej sieci, jest to całkowicie możliwe do aplikacji jest całkowicie niedostępny. Aplikacja powinna obsługiwać to w sposób inteligentny. Jeśli aplikacja nie jest, ludzie będą myśleć, że aplikacja jest uszkodzony. Biorąc pod uwagę, jak łatwo jest radzić (Cordova obsługuje offline i online zdarzenie) nie ma absolutnie żadnego powodu, aby aplikacja nie odpowiada również po uruchomieniu trybu offline. Upewnij się, że badania (patrz poniżej sekcja badanie) aplikacji i pamiętaj sprawdzić, jak aplikacja obsługuje po uruchomieniu w jednym państwie i następnie przełączyć się do innego.

Należy zauważyć, że zdarzenia online i offline, a także sieci połączenia API nie jest doskonały. Może trzeba polegać na użyciu żądanie XHR, aby sprawdzić, czy urządzenie jest naprawdę offline lub online. Na koniec dnia można oczywiście dodać jakąś formą wsparcia dla sieci problemy - w rzeczywistości, Apple store (i prawdopodobnie innych sklepach) spowoduje odrzucenie aplikacji, które nie poprawnie obsłużyć Państwa trybu offline i online. Więcej dyskusji na ten temat zobacz ["Jest to coś na?"][14]

 [14]: http://blogs.telerik.com/appbuilder/posts/13-04-23/is-this-thing-on-%28part-1%29

# Obsługa uaktualnień

## Ulepszanie projektów Cordova

Jeśli twój istniejący projekt został utworzony za pomocą Cordova 3.x, można uaktualnić projektu wydając następujące:

    Cordova platformy aktualizacji platformy nazwa ios, android, itp.
    

Jeśli twój istniejący projekt został utworzony w wersji przed Cordova 3.x, prawdopodobnie byłoby najlepiej, aby utworzyć nowy projekt 3.x Cordova, a następnie skopiuj istniejącego projektu kod i zasoby do nowego projektu. Typowe kroki:

*   Tworzenie nowego projektu Cordova 3.x (cordova tworzenie...)
*   Skopiować folder www od starego projektu nowego projektu
*   Skopiować wszystkie ustawienia konfiguracji od starego projektu do nowego projektu
*   Dodaj jakieś pluginy użyte w projekcie starego do nowego projektu
*   Budowania projektu
*   Test, test, test!

Niezależnie od wcześniejszej wersji projektu jest to absolutnie konieczne, że możesz poczytać o co zmieniono w zaktualizowanej wersji, jak aktualizacja może złamać kod. Najlepsze miejsce, aby znaleźć te informacje będą w wydaniu opublikowano w repozytoriach i na blogu Cordova. Będziemy chcieli, aby dokładnie przetestować aplikacji w celu sprawdzenia, że to jest działanie poprawnie po wykonaniu aktualizacji.

Uwaga: niektóre wtyczki mogą nie być zgodne z nową wersją Cordova. Jeśli wtyczka nie jest zgodny, może być w stanie znaleźć pluginu zamiennik, który robi to, czego potrzebujesz, czy może trzeba opóźnienie projektu modernizacji. Alternatywnie zmienić plugin tak, że praca w nowej wersji i przyczynić się do Wspólnoty.

## Szpunt ulepsza

3.4 Cordova tam jest mechanizm dla modernizacji zmieniona wtyczek za pomocą jednego polecenia. Zamiast tego usunąć wtyczkę i dodać go z powrotem do swojego projektu i zostanie zainstalowana nowa wersja:

    Cordova plugin rm com.some.plugin cordova plugin dodać com.some.plugin
    

Należy sprawdzić, czy plugin [Aktualizacja](../platforms/android/upgrade.html) dokumentacji, jak może trzeba dostosować swój kod aby działał w nowej wersji. Ponadto dwukrotnie Sprawdź, czy nowa wersja pluginu działa z wersją projektu Cordova.

Zawsze przetestować aplikacje do zapewnienia, że rata nowy plugin nie zepsuł coś, że nie.

Jeśli twój projekt ma wiele wtyczek, które trzeba zaktualizować, to zaoszczędzić czas, aby utworzyć skrypt powłoki lub partii, który usuwa i dodaje wtyczek za pomocą jednego polecenia.

# Testowanie aplikacji Cordova

Bardzo ważne jest testowanie aplikacji. Zespół Cordova używa Jasmine, ale wszelkie rozwiązania internetowe sojusznicza jednostka badania zrobi.

## Badania na symulatorze vs na prawdziwe urządzenie

Nie jest rzadkością, aby użyć przeglądarki pulpicie i symulatory/emulatory urządzeń przy opracowywaniu aplikacji Cordova. Jednak jest to niezwykle ważne, aby przetestować aplikacji na tyle urządzeń fizycznych, jak ewentualnie można:

*   Symulatory są właśnie: symulatory. Na przykład aplikacja może działać w symulator iOS bez problemu, ale to może nie działać na prawdziwe urządzenie (zwłaszcza w pewnych okolicznościach, takich jak stan niskiego pamięci). Lub aplikacji może rzeczywiście nie w symulatorze, a to działa dobrze na prawdziwe urządzenie. 
*   Emulatory są właśnie: emulatory. Nie stanowią one, jak Twoja aplikacja będzie działać na fizyczne urządzenie. Na przykład niektóre emulatory może spowodować aplikacji z wyświetlaczem zniekształcone, podczas gdy rzeczywiste urządzenie ma bez problemu. (Jeśli wystąpi ten problem, wyłącz hosta GPU w emulatorze).
*   Symulatory są zazwyczaj szybciej niż fizyczne urządzenie. Emulatory, z drugiej strony, są wolniejsze. Nie sędzia wydajność aplikacji jak wykonuje w symulator lub emulator. Sędzia wydajność aplikacji, jak to działa na spektrum urządzeń prawdziwe.
*   To niemożliwe uzyskać dobrze czują się jak Twoja aplikacja reaguje na dotyk przy użyciu symulatora lub emulator. Zamiast tego uruchamianie aplikacji na prawdziwe urządzenie można wskazać problemy z rozmiarów elementów interfejs użytkownika, szybkość reakcji, itp.
*   Choć byłoby miło móc testować tylko na jedno urządzenie na platformie, to najlepiej sprawdzić na wielu urządzeniach sportowych wiele różnych wersji systemu operacyjnego. Na przykład co działa w szczególności Android smartphone może nie działać na innego urządzenia z systemem Android. Co działa na iOS 7 urządzenie może nie działać na urządzenia iOS 6.

Jest to, oczywiście, niemożliwe do testów na każdego dostępnego urządzenia na rynku. Z tego powodu to mądry, aby zatrudnić wielu testerów, którzy mają różne urządzenia. Chociaż ich nie złapie każdego problemu, szanse są dobre, że oni odkryć dziwactw i kwestii, które nigdy nie okaże się sam.

Wskazówka: To jest możliwe na Android Nexus urządzenia łatwo Flash różnych wersji systemu Android na urządzenia. Ten prosty proces pozwoli Ci łatwo testowania aplikacji na różnych poziomach Android z pojedynczym urządzeniem, bez anulowania gwarancji lub wymagające "jailbreak" i "głównego" urządzenia. Google Android fabryka obrazów i instrukcje znajdują się na: https://developers.google.com/android/nexus/images#instructions

# Debugowanie aplikacji Cordova

Debugowanie Cordova wymaga konfiguracji. W przeciwieństwie do aplikacji pulpitu nie można po prostu otworzyć dev narzędzi na telefonie komórkowym i rozpocząć debugowanie, na szczęście istnieje kilka alternatyw.

## iOS debugowania

### Xcode

Z Xcode można debugować strony rodzimych iOS aplikacji Cordova. Upewnij się, że obszar Debug jest wyświetlana (widok-> Debug obszaru). Gdy aplikacja jest uruchomiona na urządzenie (lub symulator), można przeglądać logów w obszarze debugowania. To jest, gdy występują błędy lub ostrzeżenia zostaną wydrukowane. Można również ustawić punkty przerwania w plikach źródłowych. To pozwoli Ci krok za pośrednictwem jednej linii kodu w czasie i wyświetlić stan zmiennych w tym czasie. Stanu zmiennych jest wyświetlany w obszarze debugowania, gdy przerwania. Gdy aplikacja jest uruchomiony na urządzeniu, możesz przywołać Safari web inspektor (opisanych poniżej) do debugowania po stronie widoku sieci Web i js aplikacji. Aby uzyskać więcej informacji i pomocy, zobacz przewodnik Xcode: [Xcode debugowania Przewodnik][15]

 [15]: https://developer.apple.com/library/mac/documentation/ToolsLanguages/Conceptual/Xcode_Overview/DebugYourApp/DebugYourApp.html#//apple_ref/doc/uid/TP40010215-CH18-SW1

### Safari zdalnego debugowania sieci Web inspektor

Z Safari web inspektor można debugować webview i js kod w aplikacji Cordova. To działa tylko na OSX i tylko z iOS 6 (i wyższe). Używa Safari połączyć się z urządzeniem (lub symulator) i połączy przeglądarki dev narzędzi aplikacji Cordova. Ci, co można oczekiwać od dev narzędzi - DOM kontroli/manipulacji, debuger JavaScript, Sieć kontroli, konsoli i więcej. Jak Xcode z Safari web inspektor może ustawić punkty przerwania w kodzie JavaScript i wyświetlić stan zmiennych w tym czasie. Można przeglądać wszelkie błędy, ostrzeżenia lub komunikaty, które są drukowane na konsoli. Można również uruchomić poleceń JavaScript bezpośrednio z konsoli jak Twoja aplikacja jest uruchomiona. Można uzyskać więcej informacji na temat jak skonfigurować go i co można zrobić, to doskonałe blogu: <http://moduscreate.com/enable-remote-web-inspector-in-ios-6/> i ten poradnik: [Safari Web inspektor Przewodnik][16]

 [16]: https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html

## Chrom zdalnego debugowania

Praktycznie taki sam jak w wersji Safari, to działa tylko z Androidem ale może być używany z każdego pulpitu systemu operacyjnego. To wymaga minimum Android 4.4 (KitKat), minimalnego poziomu API 19 i chrom 30 + (na pulpicie). Skoro połączony, masz takie same doświadczenia Chrome Dev narzędzi dla aplikacji mobilnych jak z aplikacji pulpitu. Nawet lepiej Chrome Dev narzędzi masz lustro opcja, która pokazuje swoją aplikację na urządzeniu mobilnym. To więcej niż tylko widok - można przewijać i klikać z narzędzia programistyczne i aktualizuje na urządzeniu mobilnym. Więcej informacji na temat Chrome zdalnego debugowania można znaleźć tutaj: <https://developers.google.com/chrome/mobile/docs/debugging>

Jest możliwość używania Chrome Dev narzędzi do wglądu aplikacje iOS, poprzez serwer proxy WebKit: <https://github.com/google/ios-webkit-debug-proxy/>

## Tętnienia

Marszczyć jest emulatorem oparty pulpit dla projektów Cordova. Przede wszystkim pozwala uruchomić aplikację Cordova w aplikacji pulpitu i fałszywe różne funkcje Cordova. Na przykład pozwala symulować akcelerometr do badania drgań wydarzenia. To podróbki aparat API pozwala wybrać zdjęcie z dysku twardego. Marszczyć pozwala skupić się bardziej na niestandardowy kod, a nie martwić się o pluginach Cordova. Możesz dowiedzieć się więcej na temat marszczyć tutaj: <http://ripple.incubator.apache.org/>

## Weinre

Weinre tworzy lokalny serwer, który może obsługiwać klienta zdalnego debugowania aplikacji Cordova. Po zainstalowaniu i zaczęło, możesz skopiować wiersz kodu w aplikacji Cordova i uruchom go. Następnie można otworzyć panel narzędzia dev na pulpicie do pracy z aplikacją. Weinre nie jest całkiem jak wyobraźnia jak Chrome i Safari zdalnego debugowania ale ma możliwość pracy z znacznie większy zakres systemy operacyjne i platformy. Więcej informacji można znaleźć tutaj: <http://people.apache.org/~pmuellr/weinre/docs/latest/>

## Inne opcje

*   Jeżyna 10 obsługuje debugowania, jak również: [Dokumentacja][17]
*   Można debugowania, jak również przy użyciu menedżer aplikacji Firefox, zobacz [ten post na blogu][18] i tym [artykule MDN][19].
*   Aby uzyskać więcej przykładów i wyjaśnienie powyższych wskazówek debugowania, zobacz: <http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/>

 [17]: https://developer.blackberry.com/html5/documentation/v2_0/debugging_using_web_inspector.html
 [18]: https://hacks.mozilla.org/2014/02/building-cordova-apps-for-firefox-os/
 [19]: https://developer.mozilla.org/en-US/Apps/Tools_and_frameworks/Cordova_support_for_Firefox_OS#Testing_and_debugging

# Interfejs użytkownika

Tworzenie aplikacji Cordova, że wygląda ładnie na mobilnych może być wyzwaniem, zwłaszcza dla programistów. Wielu ludzi zdecydował się użyć ramy UI to ułatwić. Oto krótka lista opcji, które warto wziąć pod uwagę.

*   [jQuery Mobile][9] - jQuery Mobile automatycznie poprawia układ dla mobilnych optymalizacji. Również obsługuje tworzenie SPA dla Ciebie automatycznie.
*   [joński][20] -ten potężny ram UI rzeczywiście ma własną CLI do obsługi tworzenia projektu. 
*   [Z grzechotką][21] - wysyłany przez ludzi, którzy stworzyli Bootstrap. 
*   [Kendo UI][5] - otwartego interfejsu użytkownika i aplikacji ramy z Telerik.
*   [Nawierzchnia][22]
*   [ReactJS][7]

 [20]: http://ionicframework.com/
 [21]: http://goratchet.com/
 [22]: http://topcoat.io

Podczas tworzenia interfejsu użytkownika, warto pomyśleć o wszystkich platform, które są kierowane i różnice między oczekiwaniami użytkownika. Na przykład aplikacja Android, że ma iOS styl interfejsu użytkownika będzie prawdopodobnie nie przejść z użytkowników. To czasem jest nawet egzekwowane przez różnych sklepach. W związku z tym ważne jest, że przestrzegania Konwencji Każda platforma i dlatego są zaznajomieni z różnych ludzi wytycznych interfejs:

*   [iOS][23]
*   [Androida][24]
*   [Windows Phone][25]

 [23]: https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/index.html
 [24]: https://developer.android.com/designWP8
 [25]: http://dev.windowsphone.com/en-us/design/library

## UI dodatkowe artykuły i zasobów

Chociaż przeglądarki silniki stają się coraz więcej skarg norm, nadal żyjemy w świecie, przedrostek (-webkit i - Pani) następujący artykuł jest cenne, podczas tworzenia UI w na krzyż aplikacje przeglądarki: <http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx>

# Uwagi specjalne

Chociaż Cordova ułatwia rozwój przekreślać platforma, po prostu nie jest możliwe zapewnienie 100% izolacji podstawowej platformy macierzystego. Tak więc należy pamiętać o ograniczeniach.

## Platforma dziwactwa

Podczas czytania dokumentacji, poszukaj sekcji, które zawiera zarys różnych zachowań lub wymagania na wielu platformach. Jeśli jest obecny, to byłoby w sekcji zatytułowanej "Android dziwactw", "iOS dziwactw", itp. Przeczytaj te Dziwactwa i zdawać sobie sprawę z ich pracy z Cordova.

## Ładowanie zdalnej zawartości

Wywoływanie funkcji Cordova JavaScript zdalnie ładowane strony HTML (strony HTML nie przechowywane lokalnie na urządzeniu) jest nieobsługiwana konfiguracja. To jest ponieważ Cordova nie został zaprojektowany do tego, i wspólnotowym Apache Cordova czy nie testowanie tej konfiguracji. A może pracować w pewnych okolicznościach, jest nie zaleca ani obsługiwane. Istnieją wyzwania, z tych samych zasad pochodzenia, utrzymanie JavaScript i macierzystego części Cordova synchronizowane w tej samej wersji (ponieważ są one połączone za pomocą prywatnych interfejsów API, które mogą ulec zmianie), wiarygodność zawartości zdalnego wywoływania macierzystego funkcje lokalnych i potencjalnych app store odrzucenia.

Wyświetlanie zdalnie załadować zawartość HTML w widoku sieci Web powinno odbywać się przy użyciu Cordova w InAppBrowser. InAppBrowser jest zaprojektowany tak, że JavaScript działa nie ma dostępu do API JavaScript Cordova z powodów wymienionych powyżej. Zajrzyj do poradnika zabezpieczeń.

# Na bieżąco

Oto kilka sposobów, aby być na bieżąco z Cordova.

*   Zapisać się na [blogu Cordova][26].
*   Zapisz się na [listę deweloperów][27]. Uwaga - to nie jest Grupa wsparcia! Raczej jest to miejsce, gdzie omówiono rozwój Cordova.

 [26]: http://cordova.apache.org/#news
 [27]: http://cordova.apache.org/#mailing-list

# Uzyskiwanie pomocy

Poniższe linki są najlepsze miejsca, aby uzyskać pomoc dotyczącą Cordova:

*   StackOverflow: <http://stackoverflow.com/questions/tagged/cordova> przy użyciu tagu Cordova, można wyświetlać i przeglądać wszystkie pytania Cordova. Należy zauważyć, że StackOverflow automatycznie konwertuje "Telefon" tag "Cordova", więc w ten sposób będziesz mógł uzyskać dostęp do historycznych pytań, jak również
*   Grupa Google telefon: [https://groups.google.com/forum/#! forum/telefon][28] to grupa Google był starym forum wsparcia, gdy Cordova nadal był nazywany architekturą PhoneGap. Chociaż nadal istnieją wiele użytkowników Cordova, że częste tej grupy, Wspólnoty Cordova wyraził zainteresowanie koncentruje się mniej na tej grupie i zamiast korzystania z StackOverflow wsparcia
*   Zlotu: <http://phonegap.meetup.com> - rozważyć znalezienie lokalnej grupy meetup Cordova/PhoneGap

 [28]: https://groups.google.com/forum/#!forum/phonegap
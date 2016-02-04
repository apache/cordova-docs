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

title: Cordova dla Windows 10
---

# Cordova dla Windows 10

Być może można zamiast nazwać to "Windows 10 dla Cordova." 10 okna miał jego HTML i JavaScript aplikacje platformy ponownie zaprojektowane do obsługi Cordova do sieci i aby uzyskać ograniczeń zabezpieczeń platformy na swój sposób.

## Rozpoczynanie pracy z oknami 10

Dodanie Windows 10 wsparcie do Twojej aplikacji jest tak łatwe, jak ustawienie twój Windows docelowej platformy wersja 10.0:

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


Gdy budujesz z tych preferencji, które ustawione, zostanie zbudowany tylko jeden .appx (i .appxupload). Wymagają one Windows 10 co najmniej.

### Zrozumienie tryb zdalny tryb vs lokalnych

Trybie zdalnym jest nową funkcję platformy HTML aplikacji dla systemu Windows w systemie Windows. W Windows 8 i 8.1 aplikacji HTML pracował w tzw "Tryb lokalny" w Windows 10. W trybie lokalnym HTML Applications mają pełny dostęp do macierzystego Windows API powierzchni i możliwości. W celu zapobieżenia skryptu ataki, które może spowodować wyciek informacji umożliwiających identyfikację ze względu na szkodliwy kod, tryb lokalny nie zezwala na wbudowanych skryptów i wymaga deweloperów, którzy wykonują manipulacji DOM w kontekście jawne (`MSApp.execUnsafeLocalFunction`).

Trybie zdalnym eliminuje te wymagania, co sprawia, że można używać niezmodyfikowany biblioteki jQuery lub AngularJS bezpośrednio w kodzie, bez żadnych zmian. Aby to zrobić, to usuwa zdolność przenosząc pewne możliwości certyfikacji aplikacji w systemie Windows Store. Usunięcie tych możliwości zwykle nie uniemożliwia dotarcie do niektórych funkcji, ale to może wymagać, aby używać różnych kombinacji API lub taktyki.

### Wpływ na możliwości zdalnego trybu

Następujące funkcje są niedostępne podczas wdrażania aplikacji zdalnego trybu magazynu systemu Windows:

  * Przedsiębiorstwo uwierzytelniania (`enterpriseAuthentication`)
  * Udostępnionych certyfikatów użytkownika (`sharedUserCertificates`)
  * Biblioteki dokumentów (`documentsLibrary`)
  * Biblioteki muzycznej (`musicLibrary`)
  * Biblioteka obrazy (`picturesLibrary`)
  * Biblioteka filmów (`videosLibrary`)
  * [Magazyn](../../../cordova/storage/storage.html) wymienny (`removableStorage`)
  * Klient/serwer internetowy (`internetClientServer`) - należy pamiętać, że `internetClient` jest nadal dozwolone
  * Prywatne sieci klient serwer (`privateNetworkClientServer`)

Każdy z ograniczenia biblioteki może obejść prosząc że użytkownik współdziała z systemu plików za pośrednictwem [Wyboru plików](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx). Zapobiega to złośliwy kod wstrzykuje arbitralnie dostępu do systemu plików.

Ograniczenia związane z siecią musi obejść za pomocą interfejsu API, który nie korzysta z możliwości kontroli lub przez pośrednictwo komunikacji za pośrednictwem standardowych kanałów komunikacyjnych internet, `XMLHttpRequest` lub gniazda sieci Web.

Przedsiębiorstwo uwierzytelniania i udostępnionych certyfikatów użytkownika możliwości są skierowane szczególnie na Enterprise scenariuszy. Te funkcje są obsługiwane dla prywatnych/obsługiwał App Store, więc jeśli tworzysz aplikacje, które są gonna być wdrożony mechanizm rozmieszczania wewnętrznego, nadal można wspierać te. Jednak nie są obsługiwane dla zdalnego trybu aplikacji w magazynie Windows publicznych. Podczas tworzenia kierowania Windows 10, jeśli jeden z tych możliwości jest wykrywany w manifeście aplikacji, pojawi się ostrzeżenie.

## Odniesienia

### plik config.XML preferencje

#### windows-target-version, windows-phone-target-version

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


*Przynajmniej taki jest wymagany.*

Te preferencje identyfikowania wersji systemu Windows lub Windows Phone ma pakiet aplikacji miejsce docelowe.

**Prawidłowe wartości**

  * `10.0`, `UAP`: buduje dla uniwersalnej platformy aplikacji Windows 10
  * `8.1`: buduje dla Windows 8.1 lub Windows Phone 8.1
  * `8.0`: budować dla Windows 8.0. Nie jest prawidłowe dla Windows Phone (Użyj platformie Cordova **wp8** )

**Scenariusze**

Jeśli kierujesz Windows 10 tylko, tylko trzeba mieć jeden `windows-target-version` ustawienie w pliku config.xml.

#### WindowsDefaultUriPrefix

    <preference name="WindowsDefaultUriPrefix" value="ms-appx://|ms-appx-web://" />


Preferencja ta określa, czy chcesz Twojej aplikacji do **kontekstu lokalnego** lub **zdalnego kontekście** jako jego starcie URI. Przy budowie Windows 10, domyślnie jest kontekst zdalnego (`ms ApX web: / /`).

Aby mieć lokalne tryb aplikacji, która nie ma wpływu na zdalny tryb możliwości ograniczenia, należy ustawić tę preferencję `ms-appx: / /` i nie uzna żadnych elementów `< access >` z zdalnego identyfikatory URI.

**Prawidłowe wartości**

  * `ms-appx: / /` (Domyślna dla systemu Windows 8.0, 8.1): strony startowej działa w kontekście lokalnego
  * `ms-appx-web: / /` (Domyślna dla systemu Windows 10): strony startowej jest uruchamiany w kontekście zdalnego

#### {SDK}-MinVersion, {SDK}-MaxVersionTested

*Opcjonalne*

    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
    <preference name="Windows.Mobile-MinVersion" value="10.0.9927.0" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Microsoft.Band-MinVersion" value="10.0.11.0" />


Preferencje te zidentyfikować który ekosystemów (włączając ale nie ograniczając się do powszechnego systemu Windows, Windows Mobile lub Xbox) i ich wersje min/max są kompatybilne z. Wymagają one jeszcze, że platformy mają wsparcie dla uniwersalnej platformy aplikacji (tak Windows 10 jako podstawowy system operacyjny). Jednak te mogą wskazywać, że aplikacja jest świadomy danej funkcjonalności, które mogą być dostępne na niektóre urządzenia (takie jak gry płynący na Xbox).

**Prawidłowe wartości**

Istnieją trzy części każdej wartości: **SDK**, **ograniczenie wersji**oraz **wersji wartość**. Te preferencje są wykrywane przez począwszy od `systemu Windows` lub `Microsoft` i kończące się na `- MinVersion` lub `- MaxVersionTested`:

  * **SDK** definiuje co specjalistyczne platformy chce kierować reklamy. Wartością domyślną jest `Windows.Universal`. Prawidłowe wartości dla tych są zdefiniowane w schemacie AppxManifest, w `Opakowaniu/Depednencies/TargetPlatform` elementów.
  * The **ograniczenia wersji** określa zasady zgodności aplikacji. Na przykład jeśli `-MinVersion` jest zestaw do 10.1.0.0, a następnie wersje systemu operacyjnego, które nie obsługują co najmniej 10.1.0.0 odpowiedniego zestawu SDK nie będzie mógł załadować go.
      * `-MinVersion` określa minimalna wersja SDK wymagane
      * `-MaxVersionTested` określa najwyższe badane wersję zestawu SDK. Jeśli nowy wersja od odpowiedni SDK jest zwolniony, to będzie działać w trybie zgodności dla określonej wersji.
  * **Wartość wersji** jest spójna kolekcja 4-Liczba całkowita w postaci *major.minor.build.qfe*.

Jeśli nie ma preferencji te typy są określone w pliku config.xml, Windows.Universal wersja 10.0.0.0 zostanie wybrany domyślnie.

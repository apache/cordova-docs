# Apache Cordova API Documentation

Dokumentacja JavaScript API dla [Apache Cordova](http://cordova.io/).

Dokumentacja jest dostępna na [docs.cordova.io](http://docs.cordova.io/).

## Format dokumentacji

Całą dokumentację, [Apache Cordova](http://cordova.io/) jest napisany z [promocji cenowych](http://daringfireball.net/projects/markdown/syntax), język znaczników, które mogą być składane do HTML. Markdown zapewnia prosty i elastyczny sposób do dokumentu rdzeń Cordova w API i API platformy.

## Struktura pliku

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/cordova/
    docs/LANGUAGE/VERSION/guide/platforms/PLATFORMNAME/


## Przyczyniając się do dokumentacji

### Raport lub rozwiązać problem

Używamy [Apache JIRA](https://issues.apache.org/jira/browse/CB)

Mimochodem ty skała! Dzięki za pomoc nam poprawić dokumentację!

### Za pomocą Git

Czy jesteś nowym Git lub przyczyniających się na GitHub?

Mamy [napisane kilka tutoriali Git](http://wiki.apache.org/cordova/ContributorWorkflow) , które pomogą Ci rozpocząć pracę z przyczyniając się do dokumentacji.

### Wysyłanie żądań Pull

Wyciągnąć wnioski są mile widziane!

Dziękujemy za korzystanie z gałęzi tematycznych.

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master


### Dodanie języka

Czy chcesz, aby Apache Cordova dokumentacji w innym języku? Robimy też! Przy wsparciu [Crowdin](http://crowdin.net/project/cordova), tłumaczenie i lokalizacja platformy zarządzania tłumaczy można zalogować się łatwy wobec używać narzędzi i zapewnić jak dużo lub za mało tłumaczenie pomocy, jak chcą. Jeśli znasz inny język, prosimy o wsparcie Cordova i przyczynić się. http://crowdin.net/project/cordova. Niektóre najważniejsze wskazówki dotyczące korzystania z narzędzia Crowdin Zobacz nasze wiki http://wiki.apache.org/cordova/CordovaTranslations.

Cordova język Administratorzy, nie zapomnij następujące kroki:

**1. config.json**

Dla każdego języka i wersji jest `config.json` , która określa nazwę języka oraz jak scalić pliki.

**2. dostosowywanie szablonu HTML**

Każdy język można zastąpić domyślny szablon w `Język szablonu/dokumenty`.

### Wskazówkami redakcyjnymi

Zobacz plik `STYLEGUIDE.md` do wytycznych na język i sposób użycia.

## Generowanie dokumentacji z Node.js

Już teraz dokumentacji mogą być uruchamiane za pomocą Node.js na Windows, albo na linux'ie.

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en dev    # compile English Dev docs
    $ ./bin/genjs ru dev    # compile Russian Dev docs
    $ ./bin/genjs es 3.5.0  # compile Spanish 3.5.0 docs


### Definiowanie Node.js

  1. Przejdź do Node.JS, [pliki do pobrania strony](http://nodejs.org/download/)
  2. Pobierz i zainstaluj pakiet dla systemu pracy.
  3. Zamówienie to repozytorium za pomocą Git

        git clone https://github.com/apache/cordova-docs


  4. Zainstalować zależności. W głównym folderze sklonowany cordova dokumenty uruchomić

        npm install


  5. Teraz jesteś w stanie budować dokumentacji lokalnie.

### Szybki podgląd

Podczas dokonywania drobnych zmian, to zazwyczaj po prostu uczynić edytowane z Markdown do HTML. Wiele edytorów kodu masz pluginy do renderowania Markdown do HTML i istnieje kilka [dobrych](http://dillinger.io/) redaktorów online.

Obecnie skrypt Node.JS i [joDoc-js](https://github.com/kant2002/jodoc-js) są używane do generowania dokumentacji HTML.

## Generowanie wersji

Jest zadaniem Rake przyrost wersji, wersji katalogu, i aktualizacji dokumentacji krawędzi.

    # generate version 4.1.0 for english.
    .\bin\incrementversion en 4.1.0

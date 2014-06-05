---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. ASF licencje tego pliku do ci Apache License, w wersji 2.0 ("Licencja"); nie można używać tego pliku z wyjątkiem zgodnie z licencją. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Aktualizacja Windows Phone

Ten poradnik pokazuje jak zmienić Windows Phone projektów, zarówno w wersji 7 i 8, do uaktualnienia ze starszych wersji Cordova. Większość tych instrukcji ma zastosowanie do projektów utworzonych w starszych zestaw narzędzi wiersza polecenia, które poprzedzają `cordova` Narzędzia CLI. Zobacz interfejs wiersza poleceń do informacji jak zaktualizować do wersji CLI. Poniższa sekcja pokazuje jak uaktualnić z projektów-CLI.

## Uaktualnienie do 3.2.0 od 3.1.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Biegać `cordova platform update wp8` (lub `wp7` , na platformach dodany do projektu).

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin\update < project_path >
    

## Uaktualnić do 3.1.0 3.0.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Biegać `cordova platform update wp8` (lub `wp7` , na platformach dodany do projektu).

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin\update < project_path >
    

## Uaktualnienie do consoli (3.0.0) z 2.9.0

1.  Tworzenie nowego projektu Apache Cordova 3.0.0 za pomocą CLI, cordova, zgodnie z opisem w interfejs wiersza poleceń.

2.  Dodać swojej platformy do projektu cordova, na przykład:`cordova
platform add wp7 wp8`.

3.  Skopiuj zawartość projektu `www` katalogu `www` katalog w katalogu głównym projektu cordova właśnie utworzyłeś.

4.  Skopiuj lub zastąpić rodzimych aktywów z oryginalnego projektu ( `SplashScreen` , `ApplicationIcon` , itp.), wykonaniem pewny na dodać wszelki nowy akta do `.csproj` pliku. Projekt opiera się wewnątrz telefon windows `platforms\wp7` lub `platforms\wp8` katalogu.

5.  Narzędzia CLI cordova instalowac pluginy, czego potrzebujesz. Należy zauważyć, że CLI obsługuje wszystkie podstawowe API jako wtyczki, więc mogą one potrzebować do dodania. Tylko 3.0.0 wtyczki są kompatybilne z CLI.

6.  Tworzenie i testowanie.

## Uaktualnienie do 3.0.0 (non-CLI) z 2.9.0

W oknie Solution Explorer Visual Studio:

1.  Utworzyć nowy Apache Cordova WP7 lub WP8 3.0.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

4.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

5.  Tworzenie i testowanie.

**Uwaga**: wszystkie podstawowe API są usuwane z Cordova wersja 3.0 i muszą być zainstalowane oddzielnie jako wtyczki. Więcej informacji na temat ponownego włączania tych funkcji w pracy-CLI Zobacz za pomocą Plugman do zarządzania wtyczki.

## Uaktualnienie do 2.9.0 z 2.8.0

W oknie Solution Explorer Visual Studio:

1.  Utworzyć nowy Apache Cordova WP7 lub WP8 2.9.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Zaktualizować nazwę `cordova.js` w tagu HTML, jeśli to jest jeszcze za pomocą cordova-VERSION.js (powinna być tylko`cordova.js`).

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do pliku .csproj.

6.  Tworzenie i testowanie.

## Uaktualnić do 2.8.0 2.7.0

W oknie Solution Explorer Visual Studio:

1.  Utworzyć nowy Apache Cordova WP7 lub WP8 2.8.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova.js` pliku. (Uwaga: Brak numeru wersji w nazwie pliku.)

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

6.  Tworzenie i testowanie.

## Uaktualnić do 2.7.0 2.6.0

W oknie Solution Explorer Visual Studio:

1.  Utworzyć nowy Apache Cordova WP7 lub WP8 2.7.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.7.0.js` pliku.

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

6.  Tworzenie i testowanie.

## Uaktualnienie do 2.6.0 z 2.5.0

W oknie Solution Explorer Visual Studio:

1.  Utworzyć nowy Apache Cordova WP7 lub WP8 2.6.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.6.0.js` pliku.

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

6.  Tworzenie i testowanie.

## Uaktualnić do 2.5.0 2.4.0

W oknie Solution Explorer Visual Studio:

1.  Utworzyć nowy Apache Cordova WP7 lub WP8 2.5.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.5.0.js` pliku.

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

6.  Tworzenie i testowanie.

## Uaktualnić do 2.4.0 2.3.0

W oknie Solution Explorer Visual Studio:

1.  Utworzyć nowy Apache Cordova WP7 lub WP8 2.4.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.4.0.js` pliku.

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

6.  Tworzenie i testowanie.

## Uaktualnić do 2.3.0 2.2.0

W oknie Solution Explorer Visual Studio:

1.  Utwórz nowy Apache Cordova WP7 2.3.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.3.0.js` pliku.

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

6.  Tworzenie i testowanie.

## Uaktualnienie do 2.2.0 z 2.1.0

W oknie Solution Explorer Visual Studio:

1.  Utwórz nowy Apache Cordova WP7 2.2.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.2.0.js` pliku.

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

6.  Tworzenie i testowanie.

## Uaktualnienie do 2.1.0 z 2.0.0

W oknie Solution Explorer Visual Studio:

1.  Utwórz nowy Apache Cordova WP7 2.1.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.1.0.js` pliku.

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

6.  Tworzenie i testowanie.

## Uaktualnić do 2.0.0 1.9.0

Było znaczne zmiany struktury projektu WP7 w Apache Cordova 2.0.0 który zrobić ten uaktualnić nieco bardziej zaangażowani które inni. Zasadniczo nie jest uaktualnienie, ale stworzenie nowego projektu i skopiować istniejących plików źródłowych.

W oknie Solution Explorer Visual Studio:

1.  Tworzenie nowego projektu Apache Cordova WP7 2.0.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.0.0.js` pliku.

4.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

5.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

6.  Tworzenie i testowanie.

## Uaktualnić do 1.9.0 1.8.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.9.0.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.9.0.js` pliku.

## Uaktualnienie do 1.8.0 z 1.7.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.8.0.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.8.0.js` pliku.

## Uaktualnić do 1.7.0 1.6.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.7.0.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.7.0.js` pliku.

## Uaktualnić do 1.6.1 1.6.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.6.1.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.6.1.js` pliku.

## Uaktualnić do 1.6.0 1.5.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.6.0.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.6.0.js` pliku.

## Uaktualnienie do 1.5.0 od 1.4.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.5.0.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.5.0.js` pliku.

## Uaktualnić do 1.4.0 1.3.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.4.0.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.4.0.js` pliku.

## Uaktualnienie do wersji 1.3.0 z 1.2.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.3.0.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.3.0.js` pliku.

## Uaktualnienie do 1.2.0 z 1.1.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.2.0.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.2.0.js` pliku.

## Uaktualnić do 1.1.0 1.0.0

W oknie Solution Explorer Visual Studio:

1.  Usuń `GapLib/WP7CordovaClassLib.dll` z projektu.

2.  Usuń odwołanie do `WP7CordovaClassLib` w katalogu **odniesienia** .

3.  Kliknij prawym przyciskiem myszy na **odwołania** i wybierz opcję **Dodaj odwołanie**.

4.  Przejdź do nowego rozkładu i dodać `WP7CordovaClassLib.dll` pliku.
    
    **Uwaga**: wersja biblioteki DLL można wyświetlić, klikając prawym przyciskiem myszy na odwołanie i wybierając **Właściwości**.

5.  Skopiuj nowe `cordova-1.1.0.js` do projektu. (Upewnij się, że jest ona oznaczona jako treści.)

6.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.1.0.js` pliku.
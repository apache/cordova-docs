* * *

Licencja: na licencji Apache Software Foundation (ASF) jedną lub więcej umów licencyjnych współautorów. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Aktualizacja Android

Ten poradnik pokazuje jak zmodyfikować Android projektów do uaktualnienia ze starszych wersji Cordova. Większość tych instrukcji ma zastosowanie do projektów utworzonych w starszych zestaw narzędzi wiersza polecenia, które poprzedzają `cordova` Narzędzia CLI. Zobacz interfejs wiersza poleceń do informacji jak zaktualizować do wersji CLI.

## Uaktualnienie do 3.3.0 od 3.2.0

Wykonaj te same instrukcje co do`3.2.0`.

Począwszy od 3.3.0, Cordova runtime jest teraz skompilowany jako bibliotekę Android w miejsce przepisów Jar. Będzie to miało żadnego wpływu na sposób użycia wiersza polecenia, ale IDE użytkownicy będą musieli importować nowo dodane `MyProject-CordovaLib` projektu do ich obszaru roboczego.

## Uaktualnienie do 3.2.0 od 3.1.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update android`

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin/Aktualizuj < project_path >
    

**Ostrzeżenie:** Na Android 4.4 - Android 4.4.3, tworząc plik wprowadzania elementu typu = "plik" nie zostanie otwarte okno wyboru pliku. To jest regresja z chromu na Android i problem może być odtworzone w standalone Chrom przeglądarka na Androidzie (patrz http://code.google.com/p/android/issues/detail?id=62220) sugeruje workaround jest wobec używać FileTransfer i plik wtyczki dla Android 4.4. Można posłuchać na zdarzenie onClick, z typem danych wejściowych = "plik" a następnie pojawiają się wyboru plików interfejsu użytkownika. Aby powiązać z przesyłanie danych formularza, można użyć JavaScript aby dołączyć wartości formularza do wieloczęściowego żądanie POST, który sprawia, że FileTransfer.

## Uaktualnienie do 3.1.0 od 3.0.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update android`

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin/Aktualizuj < project_path >
    

## Uaktualnienie do consoli (3.0.0) z 2.9.0

1.  Tworzenie nowego projektu Apache Cordova 3.0.0 za pomocą CLI, cordova, zgodnie z opisem w interfejs wiersza poleceń.

2.  Dodać platform cordova projektu, na przykład:`cordova
platform add android`.

3.  Skopiuj zawartość projektu `www` katalogu `www` katalog w katalogu głównym projektu cordova właśnie utworzyłeś.

4.  Skopiuj rodzimych aktywów od starego projektu do odpowiednich katalogów pod `platforms/android` : jest to katalog, gdzie istnieje projektu cordova-android rodzimych.

5.  Narzędzia CLI cordova instalowac pluginy, czego potrzebujesz. Należy zauważyć, że CLI obsługuje wszystkie podstawowe API jako wtyczki, więc mogą one potrzebować do dodania. Tylko 3.0.0 wtyczki są kompatybilne z CLI.

## Uaktualnienie do 3.0.0 z 2.9.0

1.  Tworzenie nowego projektu Apache Cordova Android.

2.  Skopiuj zawartość `www` do nowego projektu.

3.  Skopiuj rodzimych aktywów Android z `res` do nowego projektu.

4.  Skopiować jakieś pluginy zainstalowane z `src` podkatalogi do nowego projektu.

5.  Upewnij się, że wszelkie niezalecane uaktualnić `<plugin>` referencje od twój stary `config.xml` pliku do nowego `<feature>` specyfikacji.

6.  Wszelkie odniesienia do aktualizacji `org.apache.cordova.api` pakietu do`org.apache.cordova`.
    
    **Uwaga**: wszystkie podstawowe API zostały usunięte i musi być zainstalowany jako wtyczki. Aby uzyskać szczegółowe informacje, zapoznaj się z za pomocą Plugman do zarządzania Plugins przewodnik.

## Uaktualnienie do 2.9.0 z 2.8.0

1.  Uruchom`bin/update <project_path>`.

## Uaktualnić do 2.8.0 2.7.0

1.  Usuń `cordova-2.7.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-2.8.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

<!-- SS Eclipse -->

1.  Skopiuj nowe `cordova.js` do projektu.

2.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova.js` pliku.

3.  Kopia `res/xml/config.xml` plik, aby dopasować`framework/res/xml/config.xml`.

4.  Aktualizacja `framework/res/xml/config.xml` mają podobne ustawienia, jak to miało miejsce wcześniej.

5.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnić do 2.7.0 2.6.0

1.  Usuń `cordova-2.6.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-2.7.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.7.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.7.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Aktualizacja `framework/res/xml/config.xml` mają podobne ustawienia, jak to miało miejsce wcześniej.

8.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnienie do 2.6.0 z 2.5.0

1.  Usuń `cordova-2.5.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-2.6.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.6.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.6.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Aktualizacja `framework/res/xml/config.xml` mają podobne ustawienia, jak to miało miejsce wcześniej.

8.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

Uruchom `bin/update <project>` z ścieżce projektu wymienione w katalogu źródłowym Cordova.

## Uaktualnić do 2.5.0 2.4.0

1.  Usuń `cordova-2.4.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-2.5.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.5.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.5.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Aktualizacja `framework/res/xml/config.xml` mają podobne ustawienia, jak to miało miejsce wcześniej.

8.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnić do 2.4.0 2.3.0

1.  Usuń `cordova-2.3.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-2.4.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.4.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.4.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnić do 2.3.0 2.2.0

1.  Usuń `cordova-2.2.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-2.3.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.3.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.3.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnienie do 2.2.0 z 2.1.0

1.  Usuń `cordova-2.1.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-2.2.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.2.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.2.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnienie do 2.1.0 z 2.0.0

1.  Usuń `cordova-2.0.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-2.1.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.1.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.1.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

7.  Skopiuj pliki z `bin/templates/cordova` do projektu `cordova` katalogu.

## Uaktualnić do 2.0.0 1.9.0

1.  Usuń `cordova-1.9.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-2.0.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-2.0.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-2.0.0.js` pliku.

6.  Kopiowanie `res/xml/config.xml` do meczu`framework/res/xml/config.xml`.

W 2.0.0 wydania, `config.xml` plik łączy i zastępuje `cordova.xml` i `plugins.xml` . Stare pliki są przestarzałe i chociaż nadal pracują w 2.0.0, przestanie działać w przyszłym wydaniu.

## Uaktualnić do 1.9.0 1.8.1

1.  Usuń `cordova-1.8.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-1.9.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.9.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.9.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

Ze względu na wprowadzenie `CordovaWebView` w 1.9.0 wersji wtyczki innych firm mogą nie działać. Te pluginy musiał uzyskać kontekstu z `CordovaInterface` za pomocą `getContext()` lub `getActivity()` . Jeśli nie jesteś doświadczony programista Android, prosimy o kontakt z opiekunem plugin i dodać ten zadanie do ich zgłaszania błędów.

## Uaktualnienie do 1.8.0 z 1.8.0

1.  Usuń `cordova-1.8.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-1.8.1.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.8.1.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.8.1.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnienie do 1.8.0 z 1.7.0

1.  Usuń `cordova-1.7.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-1.8.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.8.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.8.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnienie do 1.8.0 z 1.7.0

1.  Usuń `cordova-1.7.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-1.8.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.8.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.8.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnić do 1.7.0 1.6.1

1.  Usuń `cordova-1.6.1.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-1.7.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.7.0.js` do projektu.

5.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnić do 1.6.1 1.6.0

1.  Usuń `cordova-1.6.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-1.6.1.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.6.1.js` do projektu.

5.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnić do 1.6.0 1.5.0

1.  Usuń `cordova-1.5.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-1.6.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.6.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.6.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Zastąpić `res/xml/phonegap.xml` z `res/xml/cordova.xml` na mecz`framework/res/xml/cordova.xml`.

## Uaktualnienie do 1.5.0 od 1.4.0

1.  Usuń `phonegap-1.4.0.jar` z projektu `libs` katalogu.

2.  Dodaj `cordova-1.5.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `cordova-1.5.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `cordova-1.5.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Zastąpić `res/xml/phonegap.xml` z `res/xml/cordova.xml` na mecz`framework/res/xml/cordova.xml`.

## Uaktualnić do 1.4.0 1.3.0

1.  Usuń `phonegap-1.3.0.jar` z projektu `libs` katalogu.

2.  Dodaj `phonegap-1.4.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `phonegap-1.4.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `phonegap-1.4.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Aktualizacja `res/xml/phonegap.xml` do meczu`framework/res/xml/phonegap.xml`.

## Uaktualnienie do wersji 1.3.0 z 1.2.0

1.  Usuń `phonegap-1.2.0.jar` z projektu `libs` katalogu.

2.  Dodaj `phonegap-1.3.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `phonegap-1.3.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `phonegap-1.2.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Aktualizacja `res/xml/phonegap.xml` do meczu`framework/res/xml/phonegap.xml`.

## Uaktualnienie do 1.2.0 z 1.1.0

1.  Usuń `phonegap-1.1.0.jar` z projektu `libs` katalogu.

2.  Dodaj `phonegap-1.2.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `phonegap-1.2.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `phonegap-1.2.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

7.  Aktualizacja `res/xml/phonegap.xml` do meczu`framework/res/xml/phonegap.xml`.

## Uaktualnić do 1.1.0 1.0.0

1.  Usuń `phonegap-1.0.0.jar` z projektu `libs` katalogu.

2.  Dodaj `phonegap-1.1.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `phonegap-1.1.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `phonegap-1.1.0.js` pliku.

6.  Aktualizacja `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.

## Uaktualnić do 1.0.0 0.9.6

1.  Usuń `phonegap-0.9.6.jar` z projektu `libs` katalogu.

2.  Dodaj `phonegap-1.0.0.jar` do projektu `libs` katalogu.

3.  Jeśli możesz użyć Eclipse, proszę odświeżyć projektu Eclipse i czynić pewien czysty.

4.  Skopiuj nowe `phonegap-1.0.0.js` do projektu.

5.  Uaktualnić twój HTML, aby skorzystać z nowego `phonegap-1.0.0.js` pliku.

6.  Dodaj `res/xml/plugins.xml` do meczu`framework/res/xml/plugins.xml`.
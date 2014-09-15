* * *

Licencja: na licencji Apache Software Foundation (ASF) jedną lub więcej umów licencyjnych współautorów. See the NOTICE file distributed with this work for additional information regarding copyright ownership. ASF licencje tego pliku do ci Apache License, w wersji 2.0 ("Licencja"); nie można używać tego pliku z wyjątkiem zgodnie z licencją. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Aktualizacja Windows Phone 8

Ten poradnik pokazuje jak zmienić Windows Phone 8 projektów, do uaktualnienia ze starszych wersji Cordova. Niektóre z tych instrukcji dotyczą projektów utworzonych w starszych zestaw narzędzi wiersza polecenia, które poprzedzają `cordova` Narzędzia CLI. Zobacz interfejs wiersza poleceń do informacji jak zaktualizować do wersji CLI. Poniższa sekcja pokazuje jak uaktualnić z projektów-CLI.

## Uaktualnienie do 3.2.0 od 3.1.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update wp8`

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin\update < project_path >
    

## Uaktualnić do 3.1.0 3.0.0

Dla projektów, które zostały utworzone z cordova CLI:

1.  Aktualizacja `cordova` wersji CLI. Zobacz interfejs wiersza poleceń.

2.  Uruchom`cordova platform update wp8`

Dla projektów nie stworzony z cordova CLI Uruchom:

        bin\update < project_path >
    

## Uaktualnienie do consoli (3.0.0) z 2.9.0

1.  Tworzenie nowego projektu Apache Cordova 3.0.0 za pomocą CLI, cordova, zgodnie z opisem w interfejs wiersza poleceń.

2.  Dodać swojej platformy do projektu cordova, na przykład:`cordova
platform add wp8`.

3.  Skopiuj zawartość projektu `www` katalogu `www` katalog w katalogu głównym projektu cordova właśnie utworzyłeś.

4.  Skopiuj lub zastąpić rodzimych aktywów z oryginalnego projektu ( `SplashScreen` , `ApplicationIcon` , itp.), wykonaniem pewny na dodać wszelki nowy akta do `.csproj` pliku. Windows telefon projekt opiera się wewnątrz `platforms\wp8` katalogu.

5.  Narzędzia CLI cordova instalowac pluginy, czego potrzebujesz. Należy zauważyć, że CLI obsługuje wszystkie podstawowe API jako wtyczki, więc mogą one potrzebować do dodania. Tylko 3.0.0 wtyczki są kompatybilne z CLI.

6.  Tworzenie i testowanie.

## Uaktualnienie do 3.0.0 (non-CLI) z 2.x

W oknie Solution Explorer Visual Studio:

1.  Utwórz nowy Cordova WP8 Apache 3.0.0 projektu.

2.  Skopiuj zawartość `www` do nowego projektu i upewnij się, że te elementy są dodane do projektu VS.

3.  Skopiować i nadpisać żadnych ekran powitalny, lub ikonę zdjęcia.

4.  Skopiować żadnych pluginów z `plugins` katalogu do nowego projektu i zapewnienia, że są one również dodawane do projektu VS.

5.  Tworzenie i testowanie.

**Uwaga**: wszystkie podstawowe API są usuwane z Cordova wersja 3.0 i muszą być zainstalowane oddzielnie jako wtyczki. Więcej informacji na temat ponownego włączania tych funkcji w pracy-CLI Zobacz za pomocą Plugman do zarządzania wtyczki.
* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Android Shell narzędzia Przewodnik

Ten przewodnik pokazuje jak użyć zestawu Cordova w skoncentrowanych na platformie powłoka narzędzia do opracowania aplikacji Android. Ta ścieżka rozwoju, omówione w przeglądzie, może zaoferować większy wachlarz możliwości rozwoju niż opisane w interfejs wiersza polecenia narzędzia CLI przekreślać platforma. Na przykład trzeba użyć narzędzia powłoki podczas wdrażania niestandardowego widoku sieci Web Cordova obok rodzimych komponentów. Przed użyciem albo ścieżki rozwoju, należy najpierw skonfigurować Android SDK środowiska zgodnie z opisem w podręczniku platformy Android.

Aby włączyć narzędzia powłoki dla systemu Android, Pobierz Cordova z [cordova.apache.org][1]. Pobierz za darmo zawiera osobne Archiwum dla każdej platformy. Rozwiń każdy chcesz kierować, `android` w tym przypadku. Odpowiednich narzędzi są zazwyczaj dostępne w najwyższego poziomu `bin` katalogu, inaczej skonsultować się w pliku **README** dla bardziej szczegółowe wskazówki.

 [1]: http://cordova.apache.org

Te narzędzia umożliwiają tworzenie, budować i uruchamiać aplikacje. O dodatkowy interfejs wiersza poleceń, który umożliwia funkcji plugin na wszystkich platformach Zobacz za pomocą Plugman do zarządzania wtyczki. Zobacz szczegóły jak rozwijać wtyczki wtyczki aplikacji.

## Tworzenie projektu

Uruchom `create` polecenie, określając ścieżkę istniejącego projektu, identyfikator odwrotnej domeny styl pakiet i nazwa wyświetlana aplikacji. Oto składnia dla Windows i Mac/Linux:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Budowanie

Ta komenda czyści a następnie buduje projekt.

Debugowania, na Mac/Linux czy Windows:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Wydanie, na Mac/Linux czy Windows:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Uruchamianie aplikacji

Komenda `run` akceptuje następujące *opcjonalne* parametry:

*   Wyszczególnienie celu. Zawiera `--emulator`, `--device`, lub `--target=<targetID>`.

*   Wyszczególnienie opcji budowania. Zawiera `--debug`, `--release`, lub `--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Upewnij się, że można utworzyć co najmniej jeden Android urządzenia wirtualnego, inaczej zostanie wyświetlony monit, aby zrobić z `android` polecenia. Jeśli więcej niż jeden AVD jest dostępny jako cel, zostanie wyświetlony monit o wybranie jednej. Domyślnie `run` polecenia wykrywa podłączone urządzenie, lub aktualnie uruchomionego emulatora, jeśli urządzenie nie znajduje.

## Rejestrowanie

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Czyszczenie

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Ręczne stosowanie Ant

Jeśli chcesz zadzwonić Ant bezpośrednio z wiersza polecenia, takich jak `ant debug install` , należy określić dodatkowe parametry do polecenia mrówki:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

To jest ponieważ katalogów używanych przez Cordova w Ant skrypty są innej niż domyślna. To zrobić, aby uniknąć konfliktów, gdy mrówka jest uruchamiany z linii poleceń, a wewnątrz Eclipse/ADT.

Te dodatkowe parametry są dodawane automatycznie dla Ciebie podczas korzystania z `cordova/build` i `cordova/run` skrypty opisane powyżej. Z tego powodu, to jest polecany wobec używać `cordova/build` i `cordova/run` skrypty zamiast wywoływania Ant bezpośrednio z linii poleceń.
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

## Budynek z Gradle (eksperymentalne)!

Cordova, Android obsługuje teraz budynek z [Gradle][2]. To jest opcjonalne w Cordova 3.x, ale będzie być domyślnie włączona w przyszłości, prawdopodobnie z Cordova 4.0. Budowania systemu jest włączona przez zmienną środowiskową, które można ustawić dla powłoki lub określonego w wierszu polecenia wraz z `cordova build` polecenia.

 [2]: http://www.gradle.org/

Należy pamiętać, że zasady budowania Gradle są jeszcze w fazie rozwoju i prawdopodobnie będzie dużych zmian przed Gradle staje się domyślny system budowania. Deweloperzy są zachęcani do spróbować i z tym eksperymentować, ale jeśli opierasz swój własny system produkcji budować na nim, prawdopodobnie będziesz doświadczenie kilku przełomowych zmianach w ciągu następnych kilku wersji, zanim stabilizuje.

### Odpowiednie zmienne środowiskowe

*   **ANDROID _ BUDOWAĆ**
    
    Ta zmienna określa, który budować system jest używany do tworzenia projektu. W może przybrać jedną z wartości `ant` lub`gradle`.
    
    Jeśli nie zestaw, obecnie domyślnie do `ant` , ale to ma się zmienić.

### Innych zmiennych środowiskowych (normalnie musisz ustawic te)

*   **ANDROID _ STRONA GŁÓWNA**
    
    To powinna być ustawiona w katalogu zawierającego Android SDK. Cordova wygląda na to, w domyślnej lokalizacji instalacji, a także patrząc na twój zmiennej PATH, więc zwykle nie wymaga ustawienia.

*   **JAVA _ STRONA GŁÓWNA**
    
    Na niektórych komputerach to trzeba ustawić tak, aby Gradle można znaleźć kompilator języka Java.

### Gradle właściwości

Te [Właściwości][3] można ustawić aby dostosować ten budować:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks**
    
    Jeśli ta opcja jest ustawiona, a następnie wiele plików APK zostanie wygenerowany: jeden na rodzimych platformy obsługiwane przez biblioteka projektów (x 86, ramię, itp). Może to być ważne, jeśli twój projekt używa dużych bibliotek rodzimych, które mogą znacznie zwiększyć rozmiar wygenerowanego APK.
    
    Jeśli nie zestaw, a następnie jeden APK zostanie wygenerowany które mogą być używane na wszystkich urządzeniach.

*   **cdvVersionCode**
    
    Zastępuje versionCode, w`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile**
    
    Ścieżka do pliku *.Properties, zawierający podpisywanie informacji do wydania buduje. Plik powinien wyglądać tak:
    
        storeFile=relative/path/to/keystore.p12 storePassword = SECRET1 storeType = pkcs12 keyAlias = DebugSigningKey keyPassword = SECRET2
        
    
    `storePassword`i `keyPassword` są opcjonalne, a zostaniesz poproszony o pominięcie.

*   **cdvDebugSigningPropertiesFile**
    
    Tak samo jak cdvReleaseSigningPropertiesFile, ale do debugowania buduje. Przydatne, gdy zachodzi potrzeba udostępnienia klucza podpisywania z innymi deweloperami.

*   **cdvMinSdkVersion**
    
    Zastępuje wartość `minSdkVersion` w `AndroidManifest.xml` . Przydatne podczas tworzenia wielu APKs oparte na wersja SDK.

*   **cdvBuildToolsVersion**
    
    Zastąpić automatycznie wykryć `android.buildToolsVersion` wartość.

*   **cdvCompileSdkVersion**
    
    Zastąpić automatycznie wykryć `android.compileSdkVersion` wartość.

### Rozszerzenie build.gradle

Jeśli chcesz dostosować `build.gradle` , raczej niż edytować bezpośrednio, należy utworzyć element członkowski równorzędny plik o nazwie `build-extras.gradle` . Ten plik zostaną uwzględnione przez głównego `build.gradle` kiedy obecny. Oto przykład:

    # Przykład budować extras.gradle # plik ten znajduje się na początku 'build.gradle' ext.cdvDebugSigningPropertiesFile = '.../../ android-debugowania-keys.properties' # gdy zestaw, ta funkcja pozwala na kod do uruchomienia na koniec ext.postBuildExtras 'build.gradle' = {android.buildTypes.debug.applicationIdSuffix = ".debug"}
    

### Przykład budowy

    Eksport ANDROID_BUILD = eksport gradle ORG_GRADLE_PROJECT_cdvMinSdkVersion = 14 cordova budować android----gradleArg = PcdvBuildMultipleApks = true
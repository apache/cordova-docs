---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

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

## Podpisywanie aplikacji

Można przejrzeć Android app podpisania wymagania tutaj: http://developer.android.com/tools/publishing/app-signing.html

Aby zarejestrować aplikację, należy następujące parametry: * kluczy (`--keystore`): ścieżka do pliku binarnego, który może zawierać zestaw kluczy. * Keystore hasła (`-storePassword`): hasło do kluczy * Alias (`--alias`): identyfikator określający klucza prywatnego do śpiewania. * Hasło (`--password`): hasło do klucza prywatnego określonego. * Rodzaj kluczy (`-keystoreType`): pkcs12, jks (domyślnie: automatyczne wykrywanie oparty na rozszerzenie pliku) te parametry mogą być określone za pomocą argumentów wiersza polecenia powyżej do `budowy` lub `uruchomić` skrypty.

Alternatywnie można je określić w pliku konfiguracyjnym budować (build.json) za pomocą argumentu (`-buildConfig`). Oto przykład pliku konfiguracyjnego budować:

    {
         "android": {
             "debug": {
                 "keystore": "..\android.keystore",
                 "storePassword": "android",
                 "alias": "mykey1",
                 "password" : "password",
                 "keystoreType": ""
             },
             "release": {
                 "keystore": "..\android.keystore",
                 "storePassword": "",
                 "alias": "mykey2",
                 "password" : "password",
                 "keystoreType": ""
             }
         }
     }
    

Dla wersji podpisanie, hasła mogą być wyłączone i budować system wyda się monit z prośbą o hasło.

Dostępna jest również obsługa mieszać i łączyć argumentów wiersza polecenia i parametry w pliku build.json. Wartości argumentów wiersza polecenia otrzyma pierwszeństwo. Może to być przydatne do określania haseł w wierszu polecenia.

## Rejestrowanie

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Czyszczenie

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Budynek z Gradle

Od cordova-android@4.0.0, projekt budowy przy użyciu [Gradle][2]. Aby uzyskać instrukcje dotyczące budynku z ANT odnoszą się do starszych wersji dokumentacji.

 [2]: http://www.gradle.org/

### Gradle właściwości

Te [Właściwości][3] można ustawić aby dostosować ten budować:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks** (domyślnie: false)
    
    Jeśli ta opcja jest ustawiona, a następnie wiele plików APK zostanie wygenerowany: jeden na rodzimych platformy obsługiwane przez biblioteka projektów (x 86, ramię, itp). Może to być ważne, jeśli twój projekt używa dużych bibliotek rodzimych, które mogą znacznie zwiększyć rozmiar wygenerowanego APK.
    
    Jeśli nie zestaw, a następnie jeden APK zostanie wygenerowany które mogą być używane na wszystkich urządzeniach.

*   **cdvVersionCode**
    
    Zastępuje versionCode w `AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile** (domyślnie: release-signing.properties)
    
    Ścieżka do pliku *.Properties, zawierający podpisywanie informacji do wydania buduje. Plik powinien wyglądać tak:
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
        
    
    `storePassword` i `keyPassword` są opcjonalne, a zostaniesz poproszony o pominięcie.

*   **cdvDebugSigningPropertiesFile** (domyślnie: debug-signing.properties)
    
    Tak samo jak cdvReleaseSigningPropertiesFile, ale do debugowania buduje. Przydatne, gdy zachodzi potrzeba udostępnienia klucza podpisywania z innymi deweloperami.

*   **cdvMinSdkVersion**
    
    Zastępuje wartość `minSdkVersion` w `AndroidManifest.xml`. Przydatne podczas tworzenia wielu APKs oparte na wersja SDK.

*   **cdvBuildToolsVersion**
    
    Zastąp wartość automatycznie wykryte `android.buildToolsVersion`.

*   **cdvCompileSdkVersion**
    
    Zastąp wartość automatycznie wykryte `android.compileSdkVersion`.

### Rozszerzenie build.gradle

Jeśli trzeba dostosować `build.gradle`, zamiast edytować bezpośrednio, należy utworzyć plik rodzeństwo o nazwie `build-extras.gradle`. Ten plik będzie zawarte przez główne `build.gradle` obecny. Oto przykład:

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

Należy zauważyć, że wtyczki można także `build-extras.gradle` plików za pośrednictwem:

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### Przykład budowy

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true
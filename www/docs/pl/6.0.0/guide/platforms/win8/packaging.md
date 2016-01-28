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

title: Opakowania systemu Windows
---

# Opakowania systemu Windows

Dowiedz się więcej o podpisanie i pakowania Windows Store Apps na [MSDN](https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx).

Aby móc poprawnie pakiet i podpisać Windows apps tam są kilka rzeczy wymagane:

  * Certyfikat podpisywania
  * Dane identyfikacyjne pasujące pod warunkiem podpisania certyfikatu

W projekcie systemu Windows dane identyfikacyjne są przechowywane w pliku o nazwie package.appxmanifest. Ten plik jest wypełniane automatycznie za każdym razem Cordova aplikacji jest wbudowana. Tożsamości posiada 3 ważne pola.

  * Name
  * Publisher
  * Version

*Name* i *Version* zestaw z **pliku config.xml**. *Publisher* mogą być dostarczone jako parametr budować lub można ustawić w pliku **build.json** .

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

Certyfikat podpisywania mogą być dostarczone z albo CLI lub poprzez plik build.json. Świadectwo dotyczące CLI flagi są:

  * `--packageCertificateKeyFile` : po utworzeniu pakiet certyfikat podpisywania, ten parametr można powiązać certyfikat z aplikacji. Ta flaga ma ścieżkę pliku jako argument. Np. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
  * `--packageThumbprint` : pakiet odcisk palca jest używany do uprawomocnić autentyczność certyfikatu klucz pliku pakietu. Podczas tworzenia pliku klucza certyfikatu, wartość ta będzie dostarczone użytkownikowi końcowemu. Np. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

Alternatywnie, tych wartości może być określona za pomocą zbudować plik konfiguracyjny (build.json) za pomocą CLI (-buildConfig). Przykładowy plik konfiguracyjny budować:

    {
        "windows": {
            "debug": {
                "packageCertificateKeyFile": "platforms\\windows\\CordovaApp_TemporaryKey.pfx"
            },
            "release": {
                "packageCertificateKeyFile": "c:\\path-to-key\\keycert.pfx",
                "packageThumbprint": "ABCABCABCABC123123123123",
                "publisherId": "CN=FakeCorp.com, L=Redmond, S=Washington, C=US"
            }
        }
    }
    

Dostępna jest również obsługa mieszać i łączyć argumentów wiersza polecenia i parametry w pliku build.json. Wartości od argumentów wiersza polecenia otrzyma pierwszeństwo.

# Jak utworzyć certyfikat klucz i znak Cordova windows Apps

Podpisywania jest wymagane dla dystrybucji i rata Windows Store apps. Ten proces jest normalnie obsługiwane przez program Visual Studio podczas możesz wdrożyć pakiet do wydania. Do tmhis bez Visual Studio musimy stworzyć własne certyfikaty.

Do tworzenia certyfikatów musimy użyć [makecert.exe](https://msdn.microsoft.com/en-us/library/ff548309(v=vs.85).aspx) util. "" To narzędzie jest dostarczany z Windows SDK i można znaleźć pod `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x64` lub `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x86`.

Pierwszą rzeczą, jaką musimy zrobić jest do utworzenia klucza głównego do podpisania Nasza aplikacja.

`makecert.exe -n "CN=FakeCorp.com" -r -eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" -e "01/01/2020" –h 0 -sv FakeCorp.com.pvk FakeCorp.com.cer`

Aby zrozumieć, co makecert czy, Oto krótkie wyjaśnienie tego, co parametry:

  * -n "CN=FakeCorp.com": jest to nazwa podmiotu certyfikatu [X.509](http://en.wikipedia.org/wiki/X.509) . W tym przykładzie jest to **C**typowe**N**ame=FakeCorp.com.
  * -r: tworzy [własny podpisany certyfikat](http://en.wikipedia.org/wiki/Self-signed_certificate).
  * -eku #EKU_VAL #: oddzielone przecinkami ulepszone użycie klucz identyfikatory OID. 
      * 1.3.6.1.5.5.7.3.3 wskazuje, że certyfikat jest ważny do podpisywania kodu. Zawsze należy określić tę wartość, aby ograniczyć z przeznaczeniem na świadectwie.
      * 1.3.6.1.4.1.311.10.3.13 wskazuje, że certyfikat szanuje życia podpisywania. Zazwyczaj jeśli podpis jest godzina, jak długo certyfikat był ważny w momencie gdy był sygnaturami czasowymi, podpis pozostaje prawidłowa nawet jeśli certyfikat wygasa. Ten EKU sił podpis wygaśnie bez względu na to, czy podpis jest sygnaturami czasowymi.
  * -e "01/01/2020": ustawia datę wygaśnięcia certyfikatu. 
  * -h 0: Ustawia maksymalna wysokość drzewa poniżej tego certyfikatu na 0, aby zapobiec certyfikat używany jako urząd certyfikacji że można wydać inne certyfikaty.
  * -sv FakeCorp.com.pvk: wyjście PVK pliku. System Windows wykorzystuje PVK plików do przechowywania kluczy prywatnych do podpisywania kodu.
  * FakeCorp.com.cer: Wyjście pliku certyfikatu. Plik CER jest używany do przechowywania certyfikatów X.509.

Po uruchomieniu makecert po raz pierwszy, wpisz hasło prywatnego na ekranie, który pojawia się:

![]({{ site.baseurl }}/static/img/guide/platforms/win8/createprivatekeywindow.png)

Gdy tworzony jest plik pvk i cer, musimy utworzyć plik pfx z tych świadectw. Plik pfx (Personal Exchange Format) zawiera szeroką gamę informacji kryptograficznych, świadectw, certyfikatów głównych władz, łańcuchów certyfikatów i kluczy prywatnych. Do pakietu certyfikatów, będziemy używać narzędzie o nazwie [pvk2pfx](https://msdn.microsoft.com/en-us/library/ff550672(v=vs.85).aspx). To narzędzie jest dostarczany z Windows SDK i można znaleźć pod `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` lub`%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

`pvk2pfx -pvk FakeCorp.com.pvk -pi pvkPassword -spc FakeCorp.com.cer -pfx FakeCorp.com.pfx -po pfxPassword`

Gdzie:

  * PVK: Nazwa pliku danych wejściowych pvk
  * Pi: pvk hasło
  * SPC: Nazwa pliku certyfikatu wejście
  * pfx: Nazwa pliku wyjściowego pfx
  * po: hasło pfx; tak samo jak hasło pvk jeśli nie

Jeśli mamy zapewnić ten plik pfx do pliku build.json, mamy następujący komunikat o błędzie: "plik klucza może być chroniony hasłem. Aby temu zaradzić, spróbuj ręcznie zaimportuj certyfikat do magazynu certyfikatów osobistych użytkownik bieżący. ". W celu zaimportowania go musimy użyć [polecenie certutil](https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx) w wierszu admina:

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

Gdzie:

  * Użytkownik: określa "bieżącego użytkownika" magazynu osobistego
  * p: hasło do pliku pfx
  * importPfx: Nazwa pliku pfx

Po zainstalowaniu, następnym krokiem jest dodanie packageThumbprint i packageCertificateKeyFile do build.json. Aby znaleźć packageThumbprint, Szukaj CommonName mamy już skojarzone z certyfikat:

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

Po tych końcowych wartości są dostarczane. Cordova należy pomyślnie pakietu i podpisywania aplikacji.

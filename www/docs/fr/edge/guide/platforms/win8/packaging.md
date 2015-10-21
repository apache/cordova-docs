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

title: Emballage de Windows
---

# Emballage de Windows

Vous pouvez en apprendre plus sur la signature et l'emballage des Apps Store Windows sur [MSDN](https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx).

Pour pouvoir correctement paquet et signer Windows apps il ya peu de choses nécessaires :

  * Un certificat de signature
  * Détails d'identité correspondant au certificat de signature fourni

Dans les projets Windows, détails d'identité sont conservées dans un fichier nommé package.appxmanifest. Ce fichier est automatiquement rempli chaque fois qu'une application de Cordova est générée. Identité détient 3 domaines importants.

  * Name
  * Publisher
  * Version

*Name* et *Version* peuvent être programmée de **config.xml**. *Publisher* peut être fourni comme paramètre de build ou peut être défini sur le fichier **build.json** .

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

Un certificat de signature peut être fourni soit CLI ou via le fichier de build.json. Le certificat associés est des drapeaux de la CLI :

  * `--packageCertificateKeyFile` : une fois qu'un paquet de certificat de signature est créé, ce paramètre peut être utilisé pour associer le certificat à l'app. Cet indicateur prend un chemin de fichier comme argument. Par exemple. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
  * `--packageThumbprint` : paquet empreinte est utilisée pour valider l'authenticité du fichier package de clé de certificat. Lorsque vous créez un fichier de clé de certificat, cette valeur va être fournie à l'utilisateur final. Par exemple. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

Par ailleurs, ces valeurs peuvent être spécifiées à l'aide d'un fichier de configuration de génération (build.json) à l'aide de la CLI (--buildConfig). Un fichier de configuration exemple build :

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
    

Il y a aussi des soutien à mélanger et assortir les arguments de ligne de commande et les paramètres dans le fichier build.json. Les valeurs de la ligne de commande arguments obtiendrez priorité.

# Comment créer un certificat de clé et signe Cordova windows Apps

Signature est requise pour la distribution et l'installation de Windows Store apps. Ce processus est normalement géré par Visual Studio lorsque vous déployez un package pour diffusion immédiate. Pour faire des tmhis sans Visual Studio, nous devons créer nos propres certificats.

Pour créer des certificats, il faut utiliser [makecert.exe](https://msdn.microsoft.com/en-us/library/ff548309(v=vs.85).aspx) util. Cet outil est fourni avec le SDK Windows et se trouve sous `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x64` ou `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x86`.

La première chose que nous devons faire est de créer une clé racine pour la signature de notre application.

`makecert.exe -n "CN=FakeCorp.com" -r -eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" -e "01/01/2020" –h 0 -sv FakeCorp.com.pvk FakeCorp.com.cer`

Pour mieux comprendre ce que makecert fait, voici une brève explication de ce que font les paramètres :

  * -n « CN=FakeCorp.com »: c'est le nom du sujet de certificat [X.509](http://en.wikipedia.org/wiki/X.509) . Dans cet exemple, c'est **C**ccomplis**N**ame=FakeCorp.com.
  * -r: crée un [certificat d'auto-signature](http://en.wikipedia.org/wiki/Self-signed_certificate).
  * -eku #EKU_VAL #: séparés par des virgules amélioré utilisation de clé OID. 
      * 1.3.6.1.5.5.7.3.3 indique que le certificat est valide pour la signature de code. Toujours spécifier cette valeur pour limiter l'utilisation prévue du certificat.
      * 1.3.6.1.4.1.311.10.3.13 indique que le certificat respecte signature de durée de vie. En règle générale, si une signature est horodatée, tant que le certificat n'était valide au point alors qu'il était temps tamponné, la signature reste valide même si le certificat expire. Cette EKU oblige la signature à échéance que la signature soit horodaté.
  * -e "01/01/2020": définit la date d'expiration du certificat. 
  * -h 0: définit la hauteur max de l'arbre ci-dessous ce cert à 0 pour éviter que le certificat soit utilisé comme une autorité de Certification (AC) qui peuvent émettre des autres certificats.
  * sv - FakeCorp.com.pvk : sortie PVK fichier. Windows utilise des fichiers de PVK pour stocker des clés privées pour la signature de code.
  * FakeCorp.com.cer : Fichier de certificat de sortie. Fichier CER est utilisé pour stocker le certificat X.509.

Après l'exécution de makecert pour la première fois, entrez le mot de passe privé sur l'écran qui apparaît :

![]({{ site.baseurl }}/static/img/guide/platforms/win8/createprivatekeywindow.png)

Une fois le fichier pvk et cer est créé, nous devons créer un fichier pfx de ces certificats. Un fichier pfx (Format d'échange de personnel) contient une variété d'informations cryptographiques, tels que les certificats, les certificats d'autorité racine, les chaînes de certificats et les clés privées. Pour empaqueter les certs, nous allons utiliser l'outil appelé [pvk2pfx](https://msdn.microsoft.com/en-us/library/ff550672(v=vs.85).aspx). Cet outil est fourni avec le SDK Windows et peut être trouvé sous `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` ou`%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

`pvk2pfx -pvk FakeCorp.com.pvk -pi pvkPassword -spc FakeCorp.com.cer -pfx FakeCorp.com.pfx -po pfxPassword`

Où :

  * pvk : nom du fichier d'entrée pvk
  * pi : pvk mot de passe
  * SPC : nom du fichier d'entrée cert
  * pfx : nom du fichier pfx sortie
  * po: pfx mot de passe ; même que pvk mot de passe si non fourni

Si nous apportons ce fichier pfx au fichier build.json, nous aurons l'erreur suivante: "le fichier de clé peut être protégé par mot. Pour corriger cela, essayez d'importer le certificat manuellement dans magasin de certificats personnels de l'utilisateur actuel. ". Afin de l'importer qu'il faut utiliser la [commande certutil](https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx) à partir d'une invite admin :

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

Où :

  * utilisateur : spécifie « utilisateur actuel » magasin personnel
  * p: mot de passe pour le fichier pfx
  * importPfx : nom du fichier pfx

Une fois installé, l'étape suivante consiste à ajouter packageThumbprint et packageCertificateKeyFile à build.json. Afin de trouver le packageThumbprint, recherchez le CommonName nous avons associée au certificat :

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

Une fois que ces valeurs finales sont fournis. Cordova devrait paquet et signer l'application avec succès.

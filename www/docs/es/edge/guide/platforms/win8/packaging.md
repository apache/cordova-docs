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

title: Empaquetado de Windows
---

# Empaquetado de Windows

Usted puede aprender más sobre firma y empaquetado de aplicaciones de la tienda de Windows en [MSDN](https://msdn.microsoft.com/en-us/library/hh446593(v=vs.85).aspx).

Para poder correctamente y firmar Windows aplicaciones allí son pocas cosas necesarias:

  * Un certificado de firma
  * Datos de identidad que empareja el certificado de firma suministrado

En proyecto de Windows, datos de identidad se mantienen en un archivo llamado package.appxmanifest. Este archivo se rellena automáticamente cada vez que se construye una aplicación de Córdoba. Identidad tiene 3 campos importantes.

  * Name
  * Publisher
  * Version

*Nombre* y la *versión* se pueden establecer desde **config.xml**. *Editor* puede ser proporcionado como un parámetro de compilación o pueden configurarse en el archivo **build.json** .

![]({{ site.baseurl }}/static/img/guide/platforms/win8/packaging.png)

Un certificado de firma puede proporcionar cualquier CLI o a través del archivo build.json. El certificado relacionado con CLI banderas son:

  * `--packageCertificateKeyFile` : una vez creado un paquete certificado de firma, este parámetro puede utilizarse para asociar el certificado de la aplicación. Este indicador toma una ruta de archivo como argumento. Por ejemplo. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx"`
  * `-packageThumbprint` : huella digital del paquete se utiliza para validar la autenticidad del archivo clave del paquete certificado. Al crear un archivo de clave de certificado, este valor será proporcionado al usuario final. Por ejemplo. `> cordova build -- --packageCertificateKeyFile="platforms\windows\CordovaApp_TemporaryKey.pfx" --packageThumbprint="ABCABCABCABC123123123123"`

Alternativamente, estos valores podrían especificarse utilizando un archivo de configuración de build (build.json) mediante CLI (--buildConfig). Un archivo de configuración de compilación de muestra:

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
    

También hay soporte para mezclar y combinar los argumentos de línea de comandos y parámetros en el archivo build.json. Valores de los argumentos de línea de comandos tendrá prioridad.

# Cómo crear un certificado de clave y signo Cordova windows aplicaciones

Firma se requiere para distribuir e instalar aplicaciones de Windows Store. Este proceso es manejado normalmente por Visual Studio al implementar un paquete de liberación. Para hacer tmhis sin Visual Studio necesitamos crear nuestros propios certificados.

Para la creación de certificados debemos utilizar [makecert.exe](https://msdn.microsoft.com/en-us/library/ff548309(v=vs.85).aspx) util. Esta herramienta viene con el SDK de Windows y puede encontrarse en `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x64` o `%ProgramFiles(x86) %\Windows Kits\8.1\bin\x86`.

Lo primero que debemos hacer es crear una clave de root para firmar nuestra aplicación.

`makecert.exe -n "CN=FakeCorp.com" -r -eku "1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13" -e "01/01/2020" –h 0 -sv FakeCorp.com.pvk FakeCorp.com.cer`

Para entender qué makecert hace, aquí está una breve explicación de lo que hacen los parámetros:

  * -n "CN=FakeCorp.com": este es el nombre [X.509](http://en.wikipedia.org/wiki/X.509) certificado sujeto. En este ejemplo es **C**Common**N**ame=FakeCorp.com.
  * -r: crea un [certificado auto firmado](http://en.wikipedia.org/wiki/Self-signed_certificate).
  * -eku #EKU_VAL #: separado por comas mejorado uso clave OID. 
      * 1.3.6.1.5.5.7.3.3 indica que el certificado es válido para firma de código. Siempre especificar este valor para limitar el uso del certificado.
      * 1.3.6.1.4.1.311.10.3.13 indica que el certificado de la respeta firma de toda la vida. Normalmente, si una firma es tiempo estampado, como el certificado era válido en el punto de la hora estampada, la firma sigue siendo válida incluso si el certificado caduca. Este EKU obliga la firma vencimiento independientemente de si la firma es tiempo de estampado.
  * -e "01/01/2020": establece la fecha de expiración del certificado. 
  * -h 0: altura máxima del árbol debajo de este certificado se establece en 0 para impedir que el certificado se utiliza como una autoridad de certificación (CA) que pueden emitir otros certificados.
  * sv - FakeCorp.com.pvk: salida PVK archivo. Windows utiliza PVK archivos para almacenar las claves privadas de firma de código.
  * FakeCorp.com.cer: Archivo de certificado de salida. Archivo CER se utiliza para almacenar el certificado X.509.

Después de ejecutar makecert por primera vez, introduzca la clave privada en la pantalla que aparece:

![]({{ site.baseurl }}/static/img/guide/platforms/win8/createprivatekeywindow.png)

Una vez creado el archivo cer y pvk, necesitamos crear un archivo pfx de estos certificados. Un archivo pfx (formato de intercambio de Personal) contiene una variedad de información criptográfica, como certificados, certificados de autoridad raíz, cadenas de certificados y claves privadas. Para paquete de los certs, utilizaremos la herramienta llamada [pvk2pfx](https://msdn.microsoft.com/en-us/library/ff550672(v=vs.85).aspx). Esta herramienta viene con el SDK de Windows y puede encontrarse en `%ProgramFiles(x86)%\Windows Kits\8.1\bin\x64` o`%ProgramFiles(x86)%\Windows Kits\8.1\bin\x86`.

`pvk2pfx -pvk FakeCorp.com.pvk -pi pvkPassword -spc FakeCorp.com.cer -pfx FakeCorp.com.pfx -po pfxPassword`

Donde:

  * PVK: nombre del archivo de entrada pvk
  * PI: pvk contraseña
  * SPC: nombre del archivo de entrada cert
  * pfx: nombre del archivo pfx de salida
  * po: contraseña pfx; igual pvk contraseña si no dispone de

Si ofrecemos este archivo pfx archivo de build.json, tenemos el siguiente error: "el archivo de llave puede ser protegido con contraseña. Para corregir esto, intente importar manualmente el certificado en el almacén de certificados personales del usuario actual. ". Para importar tenemos que utilizar [certutil](https://technet.microsoft.com/en-us/library/ee624045(v=ws.10).aspx) desde un símbolo del sistema de administración:

`certutil -user -p PASSWORD -importPFX FakeCorp.com.pfx`

Donde:

  * user: especifica "usuario actual" almacén personal
  * p: contraseña para el archivo pfx
  * importPfx: nombre de archivo pfx

Una vez instalado, el siguiente paso es agregar packageThumbprint y packageCertificateKeyFile a build.json. Para encontrar la packageThumbprint, buscar el CommonName nos hemos asociado con el certificado:

`powershell -Command " & {dir -path cert:\LocalMachine\My | where { $_.Subject -like \"*FakeCorp.com*\" }}"`

Una vez que estos últimos valores son proporcionados. Córdoba con éxito debe paquete y firmar la aplicación.

* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
    

* * *

# Plataformas y gestión de versiones de Plugins

De versión 4.3.0 en adelante, Córdoba ofrece la posibilidad de guardar y restaurar de plugins y plataformas.

Esta característica permite a los desarrolladores guardar y restaurar la aplicación a un estado conocido sin tener que comprobar en todo el código fuente de plataforma y plugin.

El comando 'save' almacena información sobre la plataforma de aplicación y versiones de plugin en el archivo config.xml. El paso de 'restauración' se produce automáticamente cuando una **'cordova prepare'** , haciendo uso de la información previamente guardada en el archivo config.xml.

Un escenario donde guardar/restaurar las capacidades vienen en prácticas es en grandes equipos que trabajan en una aplicación, con cada miembro del equipo centrado en una plataforma o plugin. Esta característica hace más fácil compartir el proyecto y reducir la cantidad de código redundante que se comprueba en el repositorio.

## Versiones de la plataforma

### Guardando plataformas

Para guardar una plataforma, ejecuta el siguiente comando:

    $ cordova platform add <platform[@<version>] | directory | git_url> --save
    

Después de ejecutar el comando anterior, el archivo config.xml resultante se parece:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="^4.0.0" />
        ...
    </ xml>
    

Algunos ejemplos: * **'cordova platform add android --save'** => recupera la versión fijada de la plataforma android, agrega al proyecto y luego actualiza el archivo config.xml. **'cordova platform add android@3.7.0 --save'** => recupera la plataforma android, versión 3.7.0 de NPM, agrega al proyecto y luego actualiza el archivo config.xml. **'ordova platform add android@https://github.com/apache/cordova-android.git​ --save'** => clones el repositorio especificado git cordova-android, agrega la plataforma android al proyecto, entonces actualiza el archivo config.xml y apunta su versión git-dirección url especificada. **'cordova platform add C:/path/to/android/platform --save'** => recupera la plataforma android en el directorio especificado, agrega al proyecto y luego actualiza el archivo config.xml y el directorio.

### Masa de ahorro plataformas sobre un proyecto existente

El '--guardar ' bandera descrita sólo es útil cuando Recuerdas a utilizar durante la adición de la plataforma. Si tienes un proyecto ya existente y desea guardar todas las plataformas actualmente agregadas en su proyecto, usted puede utilizar:

    $ cordova platform save
    

### Actualización / eliminación de plataformas

También es posible actualizar/eliminar del archivo config.xml durante los comandos 'cordova platform update' y 'cordova platform remove':

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
    

Algunos ejemplos: * **'cordova platform update android --save'** => además de actualizar la plataforma android a la versión anclada, actualización config.xml entrada * **'cordova platform update android@3.8.0 --save'** => además de actualizar la plataforma android a la versión 3.8.0, actualización config.xml entrada * **'cordova platform update /path/to/android/platform --save'** => además de actualizar la plataforma android a la versión en la carpeta, actualizar archivo config.xml entrada * **'cordova platform remove android --save'** => extrae el proyecto de la plataforma android y elimina su entrada del archivo config.xml.

### Restauración de plataformas

  * Plataformas se restauran automáticamente de config.xml cuando se ejecuta el comando **'cordova prepare'** .
  * Si agrega una plataforma sin especificar una versión/carpeta/git_url, la versión a instalar es tomada de config.xml, **Si encuentra**. 
      * Ejemplo: Supongamos que el archivo config.xml contiene la entrada siguiente: <? xml version = "1.0" encoding = 'utf-8'? >... <0></0>... < / xml > si ejecuta el comando 
        
        **'cordova platform add android'** (no versión/carpeta/git_url especificado), se instalará la plataforma 'android@3.7.0' (como Obtenido de config.xml).

* * *

## Versión del plugin

*(Los comandos de plugin son un espejo de los comandos de plugin)*

### Guardando plugins

Para guardar un plugin, ejecuta el siguiente comando:

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save
    

Después de ejecutar el comando anterior, el archivo config.xml resultante se parece:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="^1.0.0" />
        ...
    </ xml>
    

Algunos ejemplos: * **'cordova plugin add cordova-plugin-console --save'** => recupera la versión del plugin consola anclada, agrega al proyecto y luego actualiza el archivo config.xml. **'cordova plugin add cordova-plugin-console@0.2.13 --save'** => recupera el plugin de android, versión 0.2.13 del MNP, agrega al proyecto y luego actualiza el archivo config.xml. **'cordova plugin add https://github.com/apache/cordova-plugin-console.git --save'** => clones el CVS console especificado plugin, agrega el plugin de la consola para el proyecto, entonces actualiza el archivo config.xml y apunta su versión git-dirección url especificada. **'cordova plugin add C:/path/to/console/plugin --save'** => recupera el plugin de la consola en el directorio especificado, agrega al proyecto, entonces actualiza el archivo config.xml y el directorio.

### Masa de ahorro plugins en un proyecto existente

El '--save ' bandera descrita sólo es útil cuando Recuerdas a utilizar durante la adición del plugin. Si tienes un proyecto ya existente y desea guardar todos actualmente había añadido plugins en el proyecto, se puede utilizar:

    $ cordova plugin save
    

### Actualizar / eliminar plugins

También es posible actualizar/eliminar del archivo config.xml durante los comandos 'cordova plugin update' y 'quitar plugin de Córdoba':

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
    

Algunos ejemplos: * **'cordova plugin update cordova-plugin-console --save'** => además de actualizar el plugin de la consola a la versión anclada, actualización config.xml entrada * **'cordova plugin update cordova-plugin-console@0.2.13 --save'** => además de actualizar el plugin de android a la versión 3.8.0, actualización config.xml entrada * **'cordova plugin update /path/to/console/plugin --save'** => además de actualizar el plugin de la consola a la versión en la carpeta, actualizar archivo config.xml entrada * **'cordova plugin remove cordova-plugin-console --save' quitar** => quita el complemento de consola del proyecto y elimina su entrada del archivo config.xml.

### Restauración de plugins

  * Plugins se restauran automáticamente de config.xml cuando se ejecuta el comando **'cordova prepare'** .
  * Si añades un plugin sin especificar una versión/carpeta/git_url, la versión a instalarse se toma del archivo config.xml, **Si encuentra**. 
      * Ejemplo: Supongamos que el archivo config.xml contiene la entrada siguiente: <? xml version = "1.0" encoding = 'utf-8'? >... <0></0>... < / xml > si ejecuta el comando 
        
        **'cordova plugin add cordova-plugin-consola'** (no versión/carpeta/git_url especificado), se instalará el plugin 'cordova-plugin-console@0.2.11' (como Obtenido de config.xml).
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

title: Ganchos de guía
---

# Ganchos de guía

Cordova Hooks representan secuencias especiales que podrían agregarse por su aplicación y los desarrolladores del plugin o incluso por su propia construcción de sistema para personalizar comandos de Córdoba. Scripts gancho podrían definirse mediante la adición a la carpeta predefinida especial ( `/hooks` ) o a través de archivos de configuración ( `config.xml` y `plugin.xml` ) y en serie en el siguiente orden:

  * Aplicación de ganchos de `/hooks` ;
  * Aplicación de ganchos de `config.xml` ;
  * Ganchos de plugin de`plugins/.../plugin.xml`.

**Nota**: `/hooks` directorio se considera obsoleta en favor de los elementos de gancho en config.xml y plugin.xml.

## Tipos de gancho apoyado

Se admiten los siguientes tipos de gancho:

    after_build
    after_compile
    after_clean
    after_docs
    after_emulate
    after_platform_add
    after_platform_rm
    after_platform_ls
    after_plugin_add
    after_plugin_ls
    after_plugin_rm
    after_plugin_search
    after_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    after_prepare
    after_run
    after_serve
    before_build
    before_clean
    before_compile
    before_docs
    before_emulate
    before_platform_add
    before_platform_rm/
    before_platform_ls
    before_plugin_add
    before_plugin_ls
    before_plugin_rm
    before_plugin_search/
    before_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    before_plugin_uninstall // Plugin hooks in plugin.xml are executed for a plugin being uninstalled only
    before_prepare
    before_run
    before_serve
    pre_package // Windows and Windows Phone only
    

## Maneras de definir ganchos

### Via `/hooks` directorio

**Nota**: este método se considera obsoleta en favor de los elementos de gancho en config.xml y plugin.xml.

Para ejecutar la acción personalizada cuando se tipo gancho correspondiente, usar tipo gancho como un nombre para una subcarpeta dentro del directorio 'ganchos' y usted la escritura de archivo, por ejemplo:

    # script file will be automatically executed after each build
    hooks/after_build/after_build_custom_action.js
    

Al usar estos ganchos, siempre se ejecutará como archivos ejecutables, no como módulos JavaScript. **Recuerde**: hacer las secuencias de comandos ejecutable en este caso.

### Archivo config.XML

Ganchos pueden ser definidos en `archivo config.xml` mediante elementos `< hook >` , por ejemplo de proyecto:

    <hook type="before_build" src="scripts/appBeforeBuild.bat" />
    <hook type="before_build" src="scripts/appBeforeBuild.js" />
    <hook type="before_plugin_install" src="scripts/appBeforePluginInstall.js" />
    
    <platform name="wp8">
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/wp8/appWP8BeforePluginInstall.js" />
        ...
    </platform>
    
    <platform name="windows8">
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/windows8/appWin8BeforePluginInstall.js" />
        ...
    </platform>
    

### Ganchos de plugin (plugin.xml)

Como desarrollador del plugin que puede definir hook scripts usando elementos `< hook >` en un `plugin.xml` que:

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />
    
    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>
    

`before_plugin_install`, `after_plugin_install`, `before_plugin_uninstall` plugin ganchos despedirá exclusivamente para el plugin está instalado/desinstalado.

## Interfaz de comandos

### Javascript

Si vas a escribir ganchos usando Node.js debe utilizar la siguiente definición de módulo:

```javascript
module.exports = function(context) {
    ...
}
```

Usted puede hacer su async scipts con Q:

```javascript
module.exports = function(context) {
    var Q = context.requireCordovaModule('q');
    var deferral = new Q.defer();

    setTimeout(function(){
      console.log('hook.js>> end');
    deferral.resolve();
    }, 1000);

    return deferral.promise;
}
```

objeto de `context` contiene un gancho tipo, ruta completa del script ejecutado, opciones de gancho, argumentos de línea de comandos pasados a Córdova y el objeto de nivel superior "Córdoba":

```json
{
  "hook": "before_plugin_install",
  "scriptLocation": "c:\\script\\full\\path\\appBeforePluginInstall.js",
  "cmdLine": "The\\exact\\command\\cordova\\run\\with arguments",
  "opts": {
    "projectRoot":"C:\\path\\to\\the\\project",
    "cordova": {
      "platforms": ["wp8"],
      "plugins": ["com.plugin.withhooks"],
      "version": "0.21.7-dev"
    },
    "plugin": {
      "id": "com.plugin.withhooks",
      "pluginInfo": {
        ...
      },
      "platform": "wp8",
      "dir": "C:\\path\\to\\the\\project\\plugins\\com.plugin.withhooks"
    }
  },
  "cordova": {...}
}

```

`context.opts.plugin` objeto pasará sólo a scripts ganchos plugin.

También puede requerir módulos adicionales de Córdoba en su script usando `context.requireCordovaModule` de la siguiente manera:

```javascript
var Q = context.requireCordovaModule('q');
```

**Nota**: nueva interfaz de escritura del módulo cargador se utiliza para los archivos `.js` definidos mediante `config.xml` o `plugin.xml` solamente. Por razones de compatibilidad gancho archivos especificados mediante carpetas de `/hooks` se ejecutan vía nodo child_process spawn, vea 'Non-javascript' la sección de abajo.

### No-javascript

**Nota**: le recomendamos escribir sus ganchos usando Node.js para que sean multiplataforma, ver sección 'Javascript'.

Scripts de javascript no se ejecutan vía spawn child_process nodo del directorio raíz del proyecto y tengan el root directory pasa como primer argumento. Todas las demás opciones se pasan al script usando variables de entorno:

  * CORDOVA_VERSION - la versión de Cordova-CLI.
  * CORDOVA_PLATFORMS - lista de plataformas que el comando se aplica a separaron por comas (por ejemplo: android, ios).
  * CORDOVA_PLUGINS - lista de plugin ID que el comando se aplica a separaron por comas (por ejemplo: org.apache.cordova.file, org.apache.cordova.file-transferencia)
  * CORDOVA_HOOK - camino al gancho que está siendo ejecutado.
  * CORDOVA_CMDLINE - los argumentos de línea de comandos exactos pasados a Córdoba (p. ej.: cordova ejecutar ios--emular)

Si una secuencia de comandos devuelve un código de salida distinto de cero, el comando de padre Córdova se interrumpirá.

También, tenga en cuenta que incluso si trabajas en Windows, y en el caso de los scripts gancho no archivos bat (que se recomienda, si desea que las secuencias de comandos para trabajar en sistemas operativos no Windows) Cordova CLI esperarán una línea shebang como la primera línea para saber el intérprete debe utilizar para lanzar el script. La línea de asunto debe coincidir con el siguiente ejemplo:

    #!/usr/bin/env [name_of_interpreter_executable]
    

## Ejemplo de uso

Este ejemplo muestra el uso de ganchos Cordova al rastro a la salida de la consola el tamaño del archivo .apk generado para la plataforma Android.

Crear aplicación de Cordova en blanco y agregue la siguiente definición en `config.xml` a Córdoba para ejecutar el script de `afterBuild.js` después de cada construcción de plataforma.

    <hook type="after_build" src="scripts/afterBuild.js" />
    

Crear archivo `scripts/afterBuild.js` y agregar la siguiente aplicación. Utilizamos versión asincrónica del método `fs.stat` para demostrar cómo async funcionalidad podría hacerse a través de ganchos.

    module.exports = function(ctx) {
        // make sure android platform is part of build 
        if (ctx.opts.platforms.indexOf('android') < 0) {
            return;
        }
        var fs = ctx.requireCordovaModule('fs'),
            path = ctx.requireCordovaModule('path'),
            deferral = ctx.requireCordovaModule('q').defer();
    
        var platformRoot = path.join(ctx.opts.projectRoot, 'platforms/android');
        var apkFileLocation = path.join(platformRoot, 'build/outputs/apk/android-debug.apk');
    
        fs.stat(apkFileLocation, function(err,stats) {
            if (err) {
                 deferral.reject('Operation failed');
            } else {
                console.log('Size of ' + apkFileLocation + ' is ' + stats.size +' bytes');
                deferral.resolve();
            }
        });
    
        return deferral.promise;
    };
    

Parámetro `ctx` en ejemplo anterior se pasa por Córdoba y representa el contexto de ejecución como la ruta completa del script, plataforma de destino, argumentos de línea de comandos, etc. y también expone funcionalidad adicional ayudante. Vea la sección de `Interfaz de Script de` arriba para más detalles.

Ahora puede añadir la plataforma android y ejecutar build.

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
    

Aquí se encuentran más ejemplos de buen uso:

<http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>
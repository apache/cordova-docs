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
---


# Almacenamiento de información

> Proporciona acceso a las opciones de almacenamiento del dispositivo.

Esta API ofrece opciones de almacenamiento basadas en dos diferentes especificaciones de W3C:

*   La [Especificación del API almacenamiento Web][1] le permite acceder a datos a través de pares clave/valor simple. Consulte la sección sobre localStorage para obtener detalles completos sobre esta interfaz.

*   La [Especificación de base de datos de SQL Web][2] ofrece más tablas de base de datos completa accede a través de consultas SQL. Un Resumen de esta interfaz aparece inmediatamente debajo.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova proporciona acceso a ambas interfaces para la minoría de los dispositivos que ya no los apoyan. De lo contrario se aplican las implementaciones integradas.

## Métodos

*   openDatabase

## Argumentos

*   nombre\_base\_de_datos
*   database_version
*   database_displayname
*   database_size

## Objetos

*   Base de datos
*   SQLTransaction
*   SQLResultSet
*   SQLResultSetRowList
*   SQLError

## Acceso a la función

A partir de la versión 3.0, acceso a las API de almacenamiento está construido en Córdoba y no requiere usar la CLI para agregar plugins como se describe en la interfaz de línea de comandos.

Si usted está usando el mayor conjunto de herramientas de Córdoba que preceden a la CLI, los siguientes valores de configuración específicos de la plataforma están siendo necesarios:

*   Android (en`app/res/xml/config.xml`)
    
        < nombre de la función = "Almacenamiento" >< nombre param = "android-paquete" value="org.apache.cordova.Storage" / >< / característica >
        

*   BlackBerry WebWorks (en`www/config.xml`)
    
        < cuentan con id="blackberry.widgetcache" requerida = "true" version = "1.0.0.0" / >
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


# openDatabase

Devuelve un nuevo objeto de `base de datos`.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## Descripción

El método crea un nuevo SQL Database Lite y devuelve un objeto de `Database` que permite la manipulación de los datos.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 6.0 y superior)
*   iOS
*   Tizen

## Ejemplo rápido

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Open Database</p>
      </body>
    </html>


# database_name

El nombre de la base de datos.


# database_version

La versión de la base de datos.


# database_displayname

El nombre de la base de datos de visualización.


# database_size

El tamaño de la base de datos en bytes.


# Base de datos

Proporciona acceso a una base de datos SQL.

## Métodos

*   **transacciones**: una transacción de base de datos se ejecuta.

*   **changeVersion**: permite scripts para verificar el número de versión y cambiarlo al actualizar un esquema automáticamente.

## Detalles

El `window.openDatabase()` método devuelve un `Database` objeto.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 6.0 o superior)
*   iOS
*   Tizen

## Ejemplo rápida transacción

    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }
    
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }
    
    function successCB() {
        alert("success!");
    }
    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
    

## Ejemplo rápido cambio versión

    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.changeVersion("1.0", "1.1");
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
    
        // Populate the database
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }
    
        // Transaction error callback
        //
        function errorCB(tx, err) {
            alert("Error processing SQL: "+err);
        }
    
        // Transaction success callback
        //
        function successCB() {
            alert("success!");
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Database</p>
      </body>
    </html>


# SQLTransaction

Permite la ejecución de sentencias SQL contra la base de datos.

## Métodos

*   **executeSql**: ejecuta una instrucción SQL.

## Detalles

El método de devolución de llamada especificado llamar método de un objeto de `Database` transacción, pasa un objeto `SQLTransaction`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 6.0 o superior)
*   iOS
*   Tizen

## Ejecutar SQL ejemplo rápido

    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }
    
    function errorCB(err) {
        alert("Error processing SQL: "+err);
    }
    
    function successCB() {
        alert("success!");
    }
    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
    
        // Populate the database
        //
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
            tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        }
    
        // Transaction error callback
        //
        function errorCB(err) {
            alert("Error processing SQL: "+err);
        }
    
        // Transaction success callback
        //
        function successCB() {
            alert("success!");
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>SQLTransaction</p>
      </body>
    </html>


# SQLResultSet

Cuando se llama al método de un objeto `SQLTransaction` `executeSql` la devolución de llamada especificado se ejecuta con un parámetro `SQLResultSet`.

## Propiedades

*   **insertId**: el identificador de fila de la fila que instrucción SQL de la `SQLResultSet` del objeto insertado en la base de datos.

*   **rowsAffected**: cambió el número de filas en la sentencia SQL, cero si la declaración no afectó a ninguna fila.

*   **rows**: un `SQLResultSetRowList` que representan las filas devueltas, vacío si no hay filas son devueltos.

## Detalles

Cuando se llama al método de un objeto `SQLTransaction` `executeSql` la devolución de llamada especificado se ejecuta con un parámetro `SQLResultSet` que contiene tres propiedades:

*   El `insertId` devuelve el número de fila de una instrucción de inserción de SQL successly. Si el SQL no introduzca ninguna fila, el `insertId` no está establecida.

*   El `rowsAffected` siempre es `` para un SQL `select` declaración. Para `insert` o `update` devuelve el número de declaraciones las filas modificación.

*   La final `SQLResultSetList` contiene los datos devueltos de una instrucción select de SQL.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 6.0 o superior)
*   iOS
*   Tizen

## Ejecutar SQL ejemplo rápido

    function queryDB(tx) {tx.executeSql ('SELECT * de DEMO', [], querySuccess, errorCB);}
    
    function querySuccess (tx, resultados) {console.log ("devuelve filas =" + results.rows.length);
        / / Esto será cierto ya que fue una instrucción select y rowsAffected fue 0 si (! results.rowsAffected) {console.log ('no hay filas afectadas!');
            devolver false;
        } / / para una instrucción insert, esta propiedad devuelve el ID de la última fila insertada console.log ("última inserta fila ID =" + results.insertId);}
    
    function errorCB(err) {alert ("Error al procesar SQL:" + err.code);}
    
    var db = window.openDatabase ("Database", "1.0", "Demo Córdova", 200000);
    DB.Transaction (queryDB, errorCB);
    

## Ejemplo completo

    <!DOCTYPE html >< html >< cabeza >< título > almacenamiento ejemplo < / título >< de la escritura de tipo = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< de la escritura de tipo = "text/javascript" charset = "utf-8" > / / espera para que las bibliotecas del dispositivo API cargar / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / Rellenar la base de datos / / function populateDB(tx) {tx.executeSql ('DROP TABLE IF EXISTS DEMO');
            tx.executeSql ('crear tabla si no existe DEMO (id único, data)');
            tx.executeSql (' introduzca en DEMO (identificación, datos) valores (1, "primera fila")');
            tx.executeSql ('introduzca en DEMO (identificación, datos) VALUES (2, "Segunda fila")');
        } / / Consulta la base de datos / / function queryDB(tx) {tx.executeSql ('SELECT * de DEMO', [], querySuccess, errorCB);
        } / / Consulta el callback de éxito / / function querySuccess (tx, resultados) {console.log ("devuelve filas =" + results.rows.length);
            / / Esto será cierto ya que fue una instrucción select y rowsAffected fue 0 si (! results.rowsAffected) {console.log ('no hay filas afectadas!');
                devolver false;
            } / / para una instrucción insert, esta propiedad devuelve el ID de la última fila insertada console.log ("última inserta fila ID =" + results.insertId);
        } / / Callback de error de transacción / / function errorCB(err) {console.log ("Error al procesar SQL:" + err.code);
        } / / Callback éxito de transacción / / function successCB() {var db = window.openDatabase ("Database", "1.0", "Demo Córdova", 200000);
            DB.Transaction (queryDB, errorCB);
        } / / dispositivo APIs están disponibles / / function onDeviceReady() {var db = window.openDatabase ("Database", "1.0", "Demo Córdova", 200000);
            DB.Transaction (populateDB, errorCB, successCB);
        } < /script >< / cabeza >< cuerpo >< h1 > ejemplo < / h1 >< p > base de datos < /p >< cuerpo / >< / html >


# SQLResultSetRowList

Una de las propiedades de la `SQLResultSet` que contiene las filas devueltas desde una consulta SQL.

## Propiedades

*   **length**: el número de filas devueltas por la consulta SQL.

## Métodos

*   **item**: devuelve la fila en el índice especificado representado por un objeto JavaScript.

## Detalles

El `SQLResultSetRowList` contiene los datos devueltos de una instrucción SQL `select`. El objeto contiene una propiedad de `longitud` que indica cuántas filas devuelve la instrucción `select`. Para obtener una fila de datos, llame al método de `item` para especificar un índice. Devuelve un JavaScript `Object` cuyas propiedades son las columnas de la base de datos que la instrucción `select` fue ejecutada contra.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 6.0 o superior)
*   iOS
*   Tizen

## Ejecutar SQL ejemplo rápido

    function queryDB(tx) {tx.executeSql ('SELECT * de DEMO', [], querySuccess, errorCB);}
    
    function querySuccess (tx, resultados) {var len = results.rows.length;
            Console.log ("table DEMO:" len + "filas encontradas.");
            para (var i = 0; < len; i ++) {console.log ("fila =" + i + "ID =" + results.rows.item (i) .id + "datos =" + results.rows.item(i).data);
            errorCB(err) función}} {alert ("Error al procesar SQL:" + err.code);
        } var db = window.openDatabase ("Database", "1.0", "Demo Córdova", 200000);
        DB.Transaction (queryDB, errorCB);
    

## Ejemplo completo

    <!DOCTYPE html >< html >< cabeza >< título > almacenamiento ejemplo < / título >< de la escritura de tipo = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< de la escritura de tipo = "text/javascript" charset = "utf-8" > / / espera para que las bibliotecas del dispositivo API cargar / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / Rellenar la base de datos / / function populateDB(tx) {tx.executeSql ('DROP TABLE IF EXISTS DEMO');
            tx.executeSql ('crear tabla si no existe DEMO (id único, data)');
            tx.executeSql (' introduzca en DEMO (identificación, datos) valores (1, "primera fila")');
            tx.executeSql ('introduzca en DEMO (identificación, datos) VALUES (2, "Segunda fila")');
        } / / Consulta la base de datos / / function queryDB(tx) {tx.executeSql ('SELECT * de DEMO', [], querySuccess, errorCB);
        } / / Consulta el callback de éxito / / function querySuccess (tx, resultados) {var len = results.rows.length;
            Console.log ("table DEMO:" len + "filas encontradas.");
            para (var i = 0; < len; i ++) {console.log ("fila =" + i + "ID =" + results.rows.item (i) .id + "datos =" + results.rows.item(i).data);
            }} / / Callback de error de transacción / / function errorCB(err) {console.log ("Error al procesar SQL:" + err.code);
        } / / Callback éxito de transacción / / function successCB() {var db = window.openDatabase ("Database", "1.0", "Demo Córdova", 200000);
            DB.Transaction (queryDB, errorCB);
        } / / dispositivo APIs están disponibles / / function onDeviceReady() {var db = window.openDatabase ("Database", "1.0", "Demo Córdova", 200000);
            DB.Transaction (populateDB, errorCB, successCB);
        } < /script >< / cabeza >< cuerpo >< h1 > ejemplo < / h1 >< p > base de datos < /p >< cuerpo / >< / html >


# SQLError

Un objeto `SQLError` se produce cuando se produce un error.

## Propiedades

*   **code**: uno de los códigos de error predefinido enumerados a continuación.

*   **message**: una descripción del error.

## Constantes

*   `SQLError.UNKNOWN_ERR`
*   `SQLError.DATABASE_ERR`
*   `SQLError.VERSION_ERR`
*   `SQLError.TOO_LARGE_ERR`
*   `SQLError.QUOTA_ERR`
*   `SQLError.SYNTAX_ERR`
*   `SQLError.CONSTRAINT_ERR`
*   `SQLError.TIMEOUT_ERR`

## Descripción

El objeto `SQLError` se produce cuando se produce un error al manipular una base de datos.


# localStorage

Proporciona acceso a de la W3C [interfaz Web Storage][1]

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## Métodos

*   **clave**: devuelve el nombre de la llave en la posición especificada.

*   **getItem**: devuelve el elemento identificado por la clave especificada.

*   **setItem**: asigna el valor de un elemento con llave.

*   **removeItem**: quita el elemento identificado por la clave especificada.

*   **borrar**: elimina todos los pares clave/valor.

## Detalles

La `window.localStorage` interfaz implementa del W3C [interfaz Web Storage][2]. Una aplicación puede utilizar para guardar los datos persistentes usando pares de clave y valor. La `window.sessionStorage` interfaz funciona del mismo modo en todos los sentidos, excepto que todos los datos se borra cada vez que la aplicación se cierra. Cada base de datos proporciona un espacio de nombre separado.

 [2]: http://dev.w3.org/html5/webstorage/

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 6.0 o superior)
*   iOS
*   Tizen
*   Windows Phone 7 y 8

## Ejemplo rápido clave

    var keyName = window.localStorage.key(0);
    

## Ejemplo rápido Item set

    window.localStorage.setItem("key", "value");
    

## Conseguir Item ejemplo rápido

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## Quitar elemento ejemplo rápido

        window.localStorage.removeItem("key");
    

## Claro ejemplo rápido

        window.localStorage.clear();
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // keyname is now equal to "key"
            var value = window.localStorage.getItem("key");
            // value is now equal to "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage is now empty
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>
    

## Windows Phone 7 rarezas

Notación de puntos es *no* disponible en Windows Phone 7. Asegúrese de utilizar `setItem` o `getItem` , en lugar de acceder a las teclas directamente desde el objeto de almacenamiento, tales como`window.localStorage.someKey`.

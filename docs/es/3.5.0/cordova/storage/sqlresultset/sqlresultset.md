---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

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
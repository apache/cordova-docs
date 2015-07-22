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

# Contacto

Contiene propiedades que describen un contacto, como el contacto personal o del negocio del usuario.

## Propiedades

*   **ID**: un identificador único global. *(DOMString)*

*   **displayName**: el nombre de este contacto, conveniente para la exhibición a los usuarios finales. *(DOMString)*

*   **nombre**: un objeto que contiene todos los componentes de un nombre de las personas. *(ContactName)*

*   **apodo**: un nombre para abordar el contacto casual. *(DOMString)*

*   **números**: una matriz de números de teléfono de contacto. *(ContactField[])*

*   **correos electrónicos**: un conjunto de direcciones de correo electrónico del contacto. *(ContactField[])*

*   **direcciones**: un conjunto de direcciones de todos los contactos. *(ContactAddress[])*

*   **IMS**: un conjunto de direcciones de todos los contactos IM. *(ContactField[])*

*   **organizaciones**: un conjunto de organizaciones de todos los contactos. *(ContactOrganization[])*

*   **cumpleaños**: el cumpleaños del contacto. *(Fecha)*

*   **Nota**: una nota sobre el contacto. *(DOMString)*

*   **fotos**: una serie de fotos de los contactos. *(ContactField[])*

*   **categorías**: una matriz de todas las categorías definidas por el usuario asociado con el contacto. *(ContactField[])*

*   **URL**: un conjunto de páginas web asociadas con el contacto. *(ContactField[])*

## Métodos

*   **clon**: devuelve un nuevo `Contact` objeto que es una copia en profundidad del objeto de llamadas con el `id` propiedad establecida en`null`.

*   **eliminar**: elimina el contacto de la base de datos de contactos de dispositivo, si no se ejecuta un callback de error con un `ContactError` objeto.

*   **Guardar**: guarda un nuevo contacto en la base de datos de contactos de dispositivo o actualiza un contacto existente si ya existe un contacto con el mismo **id** .

## Detalles

El `Contact` objeto representa el contacto de un usuario. Contactos pueden ser creados, almacenados o eliminados de la base de datos de contactos de dispositivo. Contactos pueden también ser obtenidos (individualmente o a granel) de la base de datos invocando el `contacts.find` método.

**Nota:** No todos los campos de contacto mencionados son compatibles con la plataforma de cada dispositivo. Consulte sección *peculiaridades* de cada plataforma para más detalles.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Salvar ejemplo rápido

    function onSuccess(contact) {
        alert("Save Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices
    
    // populate some fields
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    
    // save to device
    contact.save(onSuccess,onError);
    

## Ejemplo rápido Clone

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## Remove rápido ejemplo

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // create
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new ContactName();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;
    
            // save
            contact.save(onSaveSuccess,onSaveError);
    
            // clone
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("Original contact name = " + contact.name.givenName);
            console.log("Cloned contact name = " + clone.name.givenName);
    
            // remove
            contact.remove(onRemoveSuccess,onRemoveError);
        }
    
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
            alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Rarezas Android 2.X

*   **categories**: no compatible con dispositivos Android 2.X, devolver `null`.

## Rarezas blackBerry WebWorks (OS 5.0 y superiores)

*   **id**: apoyado. Asignado por el dispositivo cuando se guarda el contacto.

*   **displayName**: apoyado. Almacena en campo **usuario1** BlackBerry.

*   **nickname**: no soportado, devolver `null`.

*   **phoneNumbers**: parcialmente soportado. Números de teléfono se almacenan en BlackBerry campos **homePhone1** y **homePhone2** si el *tipo* es 'casa', **workPhone1** y **workPhone2** si el *type* es 'trabajo', **teléfono móvil** si el *type* es 'móvil', **faxPhone** si el *type* es 'fax', **pagerPhone** si *type* es 'pager' y **otherPhone** si no *type* de ninguno de los anteriores.

*   **emails**: parcialmente soportado. Las primeras direcciones de correo tres electrónico se almacenan en el BlackBerry **email1** **email2** campos y **email3**, respectivamente.

*   **addresses**: parcialmente soportado. Las primeras y la segunda direcciones se almacenan en los campos BlackBerry **homeAddress** y **workAddress**, respectivamente.

*   **ims**: no soportado, devolver `null`.

*   **organizaciones**: parcialmente soportado. El **nombre** y el **título** de la primera organización se almacenan en los campos de la **empresa** y **título** de la BlackBerry, respectivamente.

*   **fotos**: parcialmente soportado. Se admite una sola foto miniatura. Para fijar la foto de un contacto, pasar una o un codificado en base64 imagen, o una dirección URL que apunta a la imagen. La imagen es reducida antes de guardar en la base de datos de contactos de BlackBerry. La foto de contacto se devuelve como una imagen codificada en base64.

*   **categorías**: parcialmente soportado. Se admiten únicamente las categorías de *negocios* y *Personal* .

*   **URL**: parcialmente soportado. La primera URL se almacena en el campo de la **página web** de BlackBerry.

## iOS rarezas

*   **displayName**: no compatible con iOS, regresando `null` si no hay ningún `ContactName` especifica, en cuyo caso devuelve el nombre del compuesto, **apodo** o `""` , respectivamente.

*   **cumpleaños**: debe ser de entrada como un JavaScript `Date` objeto, del mismo modo que se la devuelvan.

*   **fotos**: devuelve una dirección URL del archivo de la imagen, que se almacena en el directorio temporal de la aplicación. Contenidos del directorio temporal se eliminan cuando salga de la aplicación.

*   **categorías**: esta propiedad actualmente no es compatible, regresando`null`.

## Windows Phone 7 y 8 rarezas

*   **displayName**: cuando se crea un contacto, previsto para el parámetro de nombre pantalla difiere el nombre para mostrar el valor obtenido al encontrar el contacto.

*   **URL**: cuando crea un contacto, los usuarios pueden ingresar y salvar más de una dirección web, pero sólo uno está disponible está disponible al buscar el contacto.

*   **números**: no se admite la opción *pref* . El *tipo* no se admite en una operación de *encontrar* . Solamente un `phoneNumber` está permitido para cada *tipo*.

*   **correos electrónicos**: no se admite la opción *pref* . Home y referencias misma entrada de correo electrónico. Se permite solamente una entrada para cada *tipo*.

*   **direcciones**: soporta sólo trabajo y hogar/personal *tipo*. La casa y personales de *tipo* referencia la misma entrada de dirección. Se permite solamente una entrada para cada *tipo*.

*   **organizaciones**: sólo está permitido y no es compatible con los atributos *pref*, *tipo*y *Departamento* .

*   **Nota**: no compatible, regresando`null`.

*   **IMS**: no soportado, regresando`null`.

*   **cumpleaños**: no soportado, regresando`null`.

*   **categorías**: no soportado, regresando`null`.
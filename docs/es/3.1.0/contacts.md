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


# Contactos

> El objeto de `Contacts` proporciona acceso a la base de datos de contactos del dispositivo.

**Nota de privacidad importante:** Recopilación y uso de datos plantea cuestiones de privacidad importante. Política de privacidad de su aplicación debe discutir cómo la aplicación utiliza datos de contacto y si es compartida con terceros. Información de contacto se considera sensible porque revela la gente con quien se comunica una persona. Por lo tanto, además de política de privacidad de tu app, fuertemente considere dar un aviso de just-in-time antes de su aplicación acceder o utilizar los datos de contacto (si el sistema operativo del dispositivo ya no hacerlo). Que el aviso debe proporcionar la misma información mencionada, además de obtener un permiso del usuario (por ejemplo, presentando opciones para **Aceptar** y **No gracias**). Tenga en cuenta que algunos mercados de aplicación pueden requerir su aplicación para proporcionar aviso just-in-time y obtener permiso del usuario antes de acceder a los datos de contacto. Una experiencia de usuario clara y fácil de entender que rodean el uso de contacto datos ayudarán a evitar la confusión del usuario y percibe uso indebido de los datos de contacto. Para obtener más información, consulte a la guía de privacidad.

## Métodos

*   contacts.create
*   contacts.find

## Argumentos

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## Objetos

*   Contact
*   ContactName
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   (en iOS`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


# contacts.create

Devuelve un nuevo objeto de contacto.

    var contact = navigator.contacts.create(properties);
    

## Descripción

El método `contacts.create` es sincrónico y devuelve un nuevo objeto de `Contact`.

Este método no retener el objeto de contacto en la base de contactos de dispositivo, para lo cual necesitas invocar el método `Contact.save`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8

## Ejemplo rápido

    var myContact = navigator.contacts.create({"displayName": "Test User"});
    

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
            var myContact = navigator.contacts.create({"displayName": "Test User"});
            myContact.note = "This contact has a note.";
            console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>


# contacts.find

Consulta la base de datos de contactos del dispositivo y vuelve a uno o más objetos de `Contact`, cada una contiene los campos especificados.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Descripción

El método `contacts.find` se ejecuta asincrónicamente, consultando la base de datos de contactos del dispositivo y devolver una matriz de objetos de `Contact`. Los objetos resultantes son pasados a la función de callback `contactSuccess` especificada por el parámetro **contactSuccess**.

El parámetro **contactFields** especifica los campos para ser utilizado como un calificador de búsqueda, y sólo esos resultados son pasados a la función de devolución de llamada **contactSuccess**. Un parámetro de longitud cero **contactFields** no es válido y resultados en `ContactError.INVALID_ARGUMENT_ERROR`. Un valor de **contactFields** de `"*"` devuelve todo contacto con los campos.

La cadena de **contactFindOptions.filter** puede ser usada como un filtro de búsqueda al consultar la base de datos de contactos. Si proporciona, mayúsculas y minúsculas, coincidencia parcial valor se aplica a cada campo especificado en el parámetro **contactFields**. Si hay un partido para *cualquier* de los campos especificados, se devuelve el contacto.

## Parámetros

*   **contactFields**: póngase en contacto con campos para usar como un calificador de búsqueda. La resultante `Contact` objeto sólo cuenta con los valores de estos campos. *(DOMString[])* [Obligatorio]

*   **contactSuccess**: función callback éxito invocada con los contactos de regresar de la base de datos. [Obligatorio]

*   **contactError**: función de callback de Error, se invoca cuando se produce un error. [Opcional]

*   **contactFindOptions**: buscar opciones para filtrar contactos. [Opcional]

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact Example</title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.addEventListener("deviceready", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new ContactFindOptions();
                    options.filter = "Bob";
                    var fields = ["displayName", "name"];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }
    
                // onSuccess: Get a snapshot of the current contacts
    
                function onSuccess(contacts) {
                    for (var i = 0; i < contacts.length; i++) {
                        console.log("Display Name = " + contacts[i].displayName);
                    }
                }
    
                // onError: Failed to get the contacts
    
                function onError(contactError) {
                    alert('onError!');
                }
            </script>
        </head>
    
        <body>
            <h1>Example</h1>
            <p>Find Contacts</p>
        </body>
    </html>


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


# ContactAddress

Contiene las propiedades de la dirección de un objeto de `Contact`.

## Propiedades

*   **pref**: establecido en `true` si esta `ContactAddress` contiene el usuario preferido de valor. *(boolean)*

*   **type**: una cadena que indica qué tipo de campo es, *home* por ejemplo. *(DOMString)*

*   **formatted**: la dirección completa con formato de visualización. *(DOMString)*

*   **streetAddress**: la dirección completa. *(DOMString)*

*   **locality**: la ciudad o localidad. *(DOMString)*

*   **region**: el estado o la región. *(DOMString)*

*   **postalCode**: el código postal o código postal. *(DOMString)*

*   **country**: el nombre del país. *(DOMString)*

## Detalles

El objeto `ContactAddress` almacena las propiedades de una única dirección de un contacto. Un objeto de `Contact` puede incluir más de una dirección en un array `ContactAddress[]`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // display the address information for all contacts
    
    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            // find all contacts
            var options = new ContactFindOptions();
            options.filter = "";
            var filter = ["displayName", "addresses"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            // display the address information for all contacts
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].addresses.length; j++) {
                    alert("Pref: "           + contacts[i].addresses[j].pref          + "\n" +
                          "Type: "           + contacts[i].addresses[j].type          + "\n" +
                          "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                          "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                          "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                          "Region: "         + contacts[i].addresses[j].region        + "\n" +
                          "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                          "Country: "        + contacts[i].addresses[j].country);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Rarezas Android 2.X

*   **pref**: no soportado, devolviendo `false` en dispositivos Android 2.X.

## Rarezas blackBerry WebWorks (OS 5.0 y superiores)

*   **pref**: no compatible con dispositivos BlackBerry, devolviendo `false`.

*   **type**: parcialmente soportado. Sólo uno de cada *Work* y *Home* tipo direcciones puede ser almacenado por contacto.

*   **formatted**: parcialmente soportado. Devuelve una concatenación de todos los campos de dirección de BlackBerry.

*   **streetAddress**: soportado. Devuelve una concatenación de BlackBerry **address1** y **2** campos de dirección.

*   **locality**: apoyado. Almacenada en el campo de dirección de la **city** de BlackBerry.

*   **region**: apoyado. Almacenada en el campo de dirección de BlackBerry **stateProvince**.

*   **postalCode**: apoyado. Almacenada en el campo de dirección de BlackBerry **zipPostal**.

*   **country**: apoyado.

## iOS rarezas

*   **pref**: no se admite en dispositivos iOS, devolviendo `false`.

*   **formatted**: actualmente no se admite.


# ContactField

Soporta campos genéricos en un `Contact` objeto. Algunas propiedades guardan como `ContactField` los objetos incluyen direcciones de correo electrónico, números de teléfono y direcciones URL.

## Propiedades

*   **tipo**: una cadena que indica qué tipo de campo es, *casa* por ejemplo. *(DOMString)*

*   **valor**: el valor del campo, como un teléfono número o dirección de email. *(DOMString)*

*   **Pref**: A `true` si este `ContactField` contiene el valor del usuario preferido. *(booleano)*

## Detalles

El `ContactField` objeto es un componente reutilizable que representa en contacto con campos genéricamente. Cada `ContactField` objeto contiene un `value` , `type` , y `pref` propiedad. A `Contact` objeto almacena varias propiedades en `ContactField[]` arreglos de discos, como las direcciones de teléfono números y correo electrónico.

En la mayoría de los casos, no existen previamente determinados valores para un `ContactField` atributo **type** del objeto. Por ejemplo, un número de teléfono puede especificar valores de **tipo** de *casa*, *trabajo*, *móvil*, *iPhone*o cualquier otro valor que es apoyada por la base de datos contacto de la plataforma de un dispositivo en particular. Sin embargo, para el `Contact` **fotos de** campo, el campo **tipo** indica el formato de la imagen devuelta: **url** cuando el atributo de **valor** contiene una dirección URL de la imagen de la foto, o *base64* cuando el **valor** contiene una cadena codificada en base64 imagen. 

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

        // create a new contact
        var contact = navigator.contacts.create();
    
        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
    
        // save the contact
        contact.save();
    

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
            // create a new contact
            var contact = navigator.contacts.create();
    
            // store contact phone numbers in ContactField[]
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;
    
            // save the contact
            contact.save();
    
            // search contacts, returning display name and phone numbers
            var options = new ContactFindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                // display phone numbers
                for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                    alert("Type: "      + contacts[i].phoneNumbers[j].type  + "\n" +
                          "Value: "     + contacts[i].phoneNumbers[j].value + "\n" +
                          "Preferred: " + contacts[i].phoneNumbers[j].pref);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Rarezas Android

*   **Pref**: no soportado, regresando`false`.

## Rarezas blackBerry WebWorks (OS 5.0 y superiores)

*   **tipo**: parcialmente soportado. Utilizado para los números de teléfono.

*   **valor**: apoyado.

*   **Pref**: no soportado, regresando`false`.

## iOS rarezas

*   **Pref**: no soportado, regresando`false`.


# ContactFindOptions

Contiene propiedades que pueden utilizar para filtrar los resultados de una `contacts.find` operación.

## Propiedades

*   **filtro**: la cadena de búsqueda utilizada para encontrar contactos. *(DOMString)* (Por defecto:`""`)

*   **múltiples**: determina si la operación de búsqueda devuelve múltiples contactos. *(Booleano)* (Por defecto:`false`)

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // success callback
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert(contacts[i].displayName);
        }
    };
    
    // error callback
    function onError(contactError) {
        alert('onError!');
    };
    
    // specify contact search criteria
    var options = new ContactFindOptions();
        options.filter="";        // empty search string returns all contacts
        options.multiple=true;    // return multiple results
        filter = ["displayName"]; // return contact.displayName field
    
        // find contacts
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            // specify contact search criteria
            var options = new ContactFindOptions();
            options.filter = "";      // empty search string returns all contacts
            options.multiple = true;  // return multiple results
            filter = ["displayName"]; // return contact.displayName field
    
            // find contacts
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert(contacts[i].displayName);
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>


# ContactName

Contiene diferentes tipos de información sobre un `Contact` nombre del objeto.

## Propiedades

*   **formato**: el nombre completo del contacto. *(DOMString)*

*   **familia**: el nombre del contacto familiar. *(DOMString)*

*   **givenName**: nombre del contacto. *(DOMString)*

*   **middleName**: el nombre del contacto media. *(DOMString)*

*   **honorificPrefix**: prefijo del contacto (ejemplo *señor* o *doctor*) *(DOMString)*

*   **honorificSuffix**: sufijo de contacto (ejemplo *Esq.*). *(DOMString)*

## Detalles

El `ContactName` objeto almacena las propiedades de nombre de un contacto.

## Plataformas soportadas

*   Android 2.X
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","name"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i ++) {
                alert("Formatted: " + contacts[i].name.formatted       + "\n" +
                    "Family Name: " + contacts[i].name.familyName      + "\n" +
                    "Given Name: "  + contacts[i].name.givenName       + "\n" +
                    "Middle Name: " + contacts[i].name.middleName      + "\n" +
                    "Suffix: "      + contacts[i].name.honorificSuffix + "\n" +
                    "Prefix: "      + contacts[i].name.honorificPrefix);
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Rarezas Android

*   **formato**: parcialmente compatibles y de sólo lectura. Devuelve una concatenación de `honorificPrefix` , `givenName` , `middleName` , `familyName` , y`honorificSuffix`.

## Rarezas blackBerry WebWorks (OS 5.0 y superiores)

*   **formato**: parcialmente soportado. Devuelve una concatenación de campos **firstName** y **lastName** de BlackBerry.

*   **familia**: apoyo. Almacenada en el campo **lastName** BlackBerry.

*   **givenName**: apoyado. Almacenados en campo **firstName** BlackBerry.

*   **middleName**: no soportado, regresando`null`.

*   **honorificPrefix**: no soportado, regresando`null`.

*   **honorificSuffix**: no soportado, regresando`null`.

## iOS rarezas

*   **formato**: parcialmente soportado. Devuelve iOS nombre compuesto, pero es de sólo lectura.


# ContactOrganization

Contiene una `Contact` las propiedades de la organización del objeto.

## Propiedades

*   **Pref**: A `true` si este `ContactOrganization` contiene el valor del usuario preferido. *(booleano)*

*   **tipo**: una cadena que indica qué tipo de campo es, *casa* por ejemplo. _(DOMString)

*   **nombre**: el nombre de la organización. *(DOMString)*

*   **Departamento**: el contrato de obras para el departamento. *(DOMString)*

*   **título**: título del contacto de la organización. *(DOMString)*

## Detalles

El `ContactOrganization` objeto almacena las propiedades de organización de un contacto. A `Contact` objeto almacena uno o más `ContactOrganization` los objetos en una matriz.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","organizations"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].organizations.length; j++) {
                    alert("Pref: "     + contacts[i].organizations[j].pref       + "\n" +
                        "Type: "       + contacts[i].organizations[j].type       + "\n" +
                        "Name: "       + contacts[i].organizations[j].name       + "\n" +
                        "Department: " + contacts[i].organizations[j].department + "\n" +
                        "Title: "      + contacts[i].organizations[j].title);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Rarezas Android 2.X

*   **Pref**: no compatible con dispositivos Android 2.X, regresando`false`.

## Rarezas blackBerry WebWorks (OS 5.0 y superiores)

*   **Pref**: no compatible con dispositivos BlackBerry, regresando`false`.

*   **tipo**: no compatible con dispositivos BlackBerry, regresando`null`.

*   **nombre**: parcialmente soportado. El primer nombre de la organización se almacena en el campo de la **empresa** BlackBerry.

*   **Departamento**: no soportado, regresando`null`.

*   **título**: parcialmente soportado. El primer título de la organización se almacena en el campo de **jobTitle** BlackBerry.

## iOS rarezas

*   **Pref**: no se admite en dispositivos iOS, regresando`false`.

*   **tipo**: no se admite en dispositivos iOS, regresando`null`.

*   **nombre**: parcialmente soportado. El primer nombre de la organización se almacena en el campo de **kABPersonOrganizationProperty** de iOS.

*   **Departamento**: parcialmente soportado. El primer nombre de departamento se almacena en el campo de **kABPersonDepartmentProperty** de iOS.

*   **título**: parcialmente soportado. El primer título se almacena en el campo de **kABPersonJobTitleProperty** de iOS.


# ContactError

A `ContactError` objeto se pasa a la `contactError` devolución de llamada cuando se produce un error.

## Propiedades

*   **código**: uno de los códigos de error predefinido enumerados a continuación.

## Constantes

*   `ContactError.UNKNOWN_ERROR`
*   `ContactError.INVALID_ARGUMENT_ERROR`
*   `ContactError.TIMEOUT_ERROR`
*   `ContactError.PENDING_OPERATION_ERROR`
*   `ContactError.IO_ERROR`
*   `ContactError.NOT_SUPPORTED_ERROR`
*   `ContactError.PERMISSION_DENIED_ERROR`

## Descripción

El `ContactError` objeto se devuelve al usuario a través de la `contactError` función de devolución de llamada cuando se produce un error.


# contactSuccess

Función de devolución de llamada de éxito que proporciona la `Contact` matriz resultante de una `contacts.find` operación.

    function(contacts) {
        // Do something
    }
    

## Parámetros

*   **contactos**: la matriz contacto resultante de una operación de búsqueda. *(Contacto)*

## Ejemplo

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }


# contactError

Función de callback de error para las funciones de contacto.

    function(error) {
        // Handle the error
    }


# contactFields

Requiere el parámetro para el `contacts.find` método, se utiliza para especificar qué campos deben incluirse en el `Contact` resultante de una operación de búsqueda de objetos.

    ["nombre", "números", "email"]


# contactFindOptions

Parámetro opcional de la `contacts.find` método, utilizado para filtrar los contactos devueltos desde la base de datos de contactos.

    {filtro: "" múltiple: cierto,};
    

## Opciones

*   **filtro**: la cadena de búsqueda utilizada para filtrar contactos. *(DOMString)* (Por defecto:`""`)

*   **múltiples**: determina si la operación de búsqueda devuelve múltiples contactos. *(Booleano)* (Por defecto:`false`)

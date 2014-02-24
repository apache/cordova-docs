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
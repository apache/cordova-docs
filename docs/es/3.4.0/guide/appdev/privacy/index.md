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

# Guía de privacidad

Privacidad móvil es una cuestión fundamental que debe enfrentar cada desarrollador de la aplicación. Los usuarios esperan que su información privada sean recogido y tratado apropiadamente por su aplicación. También hay un creciente número de jurisdicciones que tienen ahora los requisitos legales sobre prácticas de privacidad móvil.

Esta guía de privacidad de aplicación móvil debe considerarse una *cartilla* cuestiones algunos el más significativo. Se esbozan algunas mejores prácticas ampliamente aceptadas y proporciona referencias a otras guías más detalladas y referencias.

*   **Política de privacidad**: la aplicación debe incluir una política de privacidad que se ocupa de temas tales como qué tipo de información recopila su aplicación de o acerca de sus usuarios, cómo se utiliza esa información, con quienes se comparte y cómo los usuarios pueden tomar decisiones relacionadas con la privacidad dentro de la aplicación. Para facilitar la comprensión, debe utilizar lenguaje claro y evitar la jerga técnica. Deberías hacer su política de privacidad disponible para los usuarios a revisar antes de descargar, como en la descripción de la aplicación en el mercado de la aplicación. Además, deberías hacer su política de privacidad disponible dentro de la propia aplicación. El tamaño limitado de dispositivo móvil muestra crea desafíos para la visualización de las políticas de privacidad a los usuarios. Considerar el desarrollo de una *forma corta* de la política que incluye la información más importante y luego proporciona un enlace a la política de "formulario largo" para aquellos interesados en más detalles. Varios grupos están intentando desarrollar estándares basados en iconos para la comunicación de prácticas de privacidad, que quizá quieras considerar una vez maduran de estas normas.

*   **Colección de información sensible**: colección de una aplicación de información personal sensitiva suscita preocupaciones de privacidad importante. Ejemplos de información personal delicada información financiera, salud información e información de o acerca de los niños. También incluye información recopilada de algunos sensores y bases de datos suelen encontradas en dispositivos móviles y tabletas, como información de geolocalización, contactos/agenda, cámara/micrófono y almacenados fotografías y vídeos. Consulte las siguientes páginas de documentación para obtener más información: [cámara][1], [captura][2], [contactos][3]y [geolocalización][4]. En general, debe obtener el consentimiento expreso del usuario antes de recoger información sensible y, si es posible, provee un mecanismo de control que permite al usuario cambiar fácilmente los permisos. Los sistemas operativos de la aplicación puede ayudar en algunos casos mediante la presentación de cuadros de diálogo de just-in-time que pedir permiso del usuario antes de colección. En estos casos, asegúrese de tomar ventaja de cualquier oportunidad para personalizar el texto de la caja de diálogo para aclarar cómo la aplicación usa y, si procede, comparte dicha información.

*   **Evitar la sorpresa de usuario**: Si su aplicación recopila o utiliza la información de una manera que puede ser sorprendente para los usuarios teniendo en cuenta el propósito principal de la aplicación (por ejemplo, un reproductor de música que tiene acceso a fotografías almacenadas), usted debe tomar medidas similares como con la colección de información personal confidencial. Es decir, deberías considerar fuertemente el uso de cuadros de diálogo de just-in-time para informar al usuario sobre la colección o el uso de esa información y, si procede, proporcionan un control de privacidad correspondiente.

*   **Recopilación de datos de terceros o compartir**: Si tu app recopila información que se proporciona a otra empresa, como una plataforma de red social o una red de anuncios (por ejemplo, si su aplicación muestra publicidad)--se deben informar a los usuarios de esa colección y compartir. Como mínimo, su política de privacidad debe describir la recopilación de información y compartir y, si procede, ofrecen a sus usuarios la capacidad de control o excluirse de dicha recogida o compartir.

*   **Seguridad y limitación de la colección**: sus usuarios confían su aplicación con su información y esperan que tome las precauciones de seguridad apropiadas para protegerla. Una de las mejores maneras de evitar compromisos de seguridad de la información personal no es recopilar la información en primer lugar a menos que su aplicación tiene una razón de negocios específicos y legítima para la colección. Para obtener información que necesita para ser recogidos, asegúrese de que usted proporciona controles de seguridad apropiadas para proteger esa información, si se almacena en el dispositivo o en sus servidores back-end. También debe desarrollar una política de retención de los datos pertinentes que se implementa dentro de la aplicación y en los servidores de back-end.

 [1]: cordova_camera_camera.md.html
 [2]: cordova_media_capture_capture.md.html
 [3]: cordova_contacts_contacts.md.html
 [4]: cordova_geolocation_geolocation.md.html

Las siguientes son algunas guías de privacidad móvil ayuda adicional para los desarrolladores:

*   Procurador General de California, [privacidad on the Go: recomendaciones para el ecosistema móvil][5]

*   Centro para la democracia y la tecnología, futuro del Privacy Forum, [las mejores prácticas para los desarrolladores de aplicaciones móviles][6]

*   CTIA-The Wireless Association, [servicios basados en las mejores prácticas y directrices para la ubicación][7]

*   Comisión Federal de comercio, [privacidad móvil divulgaciones: construyendo confianza a través de transparencia][8]

*   Futuro del Foro de privacidad, [privacidad de aplicación][9] Web

 [5]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
 [6]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
 [7]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
 [8]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
 [9]: http://www.applicationprivacy.org
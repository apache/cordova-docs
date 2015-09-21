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

title: Android WebViews
---

# Android WebViews

Desde Córdoba 1.9, con la asistencia de la `CordovaActivity`, puede utilizar Cordova como un componente en una aplicación Android nativa más grande. Android se refiere a este componente como el `CordovaWebView`. Nuevas aplicaciones basadas en Córdoba de 1,9 en adelante utilizar el `CordovaWebView` como su principal punto de vista, independientemente de si el legado `CordovaActivity` enfoque se utiliza.

Si no está familiarizado con el desarrollo de aplicaciones Android, por favor lea a la guía de plataforma Android para desarrollar una aplicación Cordova antes de intentar incluir un WebView. No es la forma principal de autor aplicaciones Android Cordova. Estas instrucciones están actualmente manuales, pero eventualmente se puede automatizarse.

## Prerequisitos

*   Córdoba 1.9 o mayor

*   SDK de Android actualizado al último SDK

## Guía de uso de CordovaWebView en un proyecto de Android

1.  `cd`en `/framework` y ejecutar `ant jar` para construir la jarra cordova. Se crea el archivo .jar formado como `cordova-x.x.x.jar` en el `/framework` Directorio.

2.  Copie la jarra cordova en su proyecto Android `/libs` Directorio.

3.  Editar de la aplicación `main.xml` archivo (bajo `/res/xml` ) para ver como el siguiente, con el `layout_height` , `layout_width` y `id` modificado para adaptarse a su aplicación:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Modificar su actividad para que implementa el `CordovaInterface` . Debe implementar los métodos incluidos. Puede que desee copiar desde `/framework/src/org/apache/cordova/CordovaActivity.java` , o implementarlas en tu propio. El fragmento de código siguiente muestra una aplicación básica que utiliza la interfaz. Observe cómo coincide con el id de referencia ver el `id` atributo especificado en el fragmento de XML se muestra arriba:
    
        public class CordovaViewTestActivity extends Activity implements CordovaInterface {
            CordovaWebView cwv;
            /* Called when the activity is first created. */
            @Override
            public void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.main);
                cwv = (CordovaWebView) findViewById(R.id.tutorialView);
                Config.init(this);
                cwv.loadUrl(Config.getStartUrl());
            }
        

Si se utiliza la cámara, también debe implementar esto:

        @Override
        public void setActivityResultCallback(CordovaPlugin plugin) {
            this.activityResultCallback = plugin;
        }
        /**
         * Launch an activity for which you would like a result when it finished. When this activity exits,
         * your onActivityResult() method is called.
         *
         * @param command           The command object
         * @param intent            The intent to start
         * @param requestCode       The request code that is passed to callback to identify the activity
         */
        public void startActivityForResult(CordovaPlugin command, Intent intent, int requestCode) {
            this.activityResultCallback = command;
            this.activityResultKeepRunning = this.keepRunning;
    
            // If multitasking turned on, then disable it for activities that return results
            if (command != null) {
                this.keepRunning = false;
            }
    
            // Start activity
            super.startActivityForResult(intent, requestCode);
        }   
    
        @Override
        /**
         * Called when an activity you launched exits, giving you the requestCode you started it with,
         * the resultCode it returned, and any additional data from it.
         *
         * @param requestCode       The request code originally supplied to startActivityForResult(),
         *                          allowing you to identify who this result came from.
         * @param resultCode        The integer result code returned by the child activity through its setResult().
         * @param data              An Intent, which can return result data to the caller (various data can be attached to Intent "extras").
         */
        protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
            super.onActivityResult(requestCode, resultCode, intent);
            CordovaPlugin callback = this.activityResultCallback;
            if (callback != null) {
                callback.onActivityResult(requestCode, resultCode, intent);
            }
        }
    

Finalmente, no olvide añadir el grupo de subprocesos, de lo contrario los plugins no tienen hilos para correr en:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Copia archivos HTML y JavaScript de la aplicación de su proyecto Android `/assets/www` Directorio.

2.  Copia `config.xml` de `/framework/res/xml` a de su proyecto `/res/xml` Directorio.
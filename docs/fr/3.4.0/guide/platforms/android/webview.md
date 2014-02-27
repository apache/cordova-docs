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

# Android WebViews

Cette section montre comment intégrer un composant WebView Cordova-activée dans une application Android plus grande. Pour plus d'informations sur la façon dont ces composants peuvent communiquer entre eux, voir Application Plugins.

Si vous n'êtes pas familier avec Android, vous devez tout d'abord vous familiariser avec le Guide de la plate-forme Android et avoir le dernier SDK Android installé avant d'essayer l'option de développement plus inhabituelle d'incorporation une WebView. À partir de 1,9 Cordova, la plateforme Android s'appuie sur un `CordovaWebView` composant, qui s'appuie sur un héritage `CordovaActivity` composant qui est antérieure à la version 1.9.

1.  Pour suivre ces instructions, vérifiez que vous avez la dernière distribution de Cordova. Téléchargez-le sur [cordova.apache.org][1] et décompressez son Android.

2.  Accédez à du package Android `/framework` répertoire et exécutez `ant jar` . Il crée le Cordova `.jar` fichier, formé comme`/framework/cordova-x.x.x.jar`.

3.  Copie le `.jar` fichier dans le projet Android `/libs` répertoire.

4.  Ajoutez le code suivant à l'application `/res/xml/main.xml` fichier, avec la `layout_height` , `layout_width` et `id` modifié en fonction de l'application :
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  Modifier l'activité de sorte qu'il met en œuvre le `CordovaInterface` . Il doit implémenter les méthodes inclus. Vous pouvez les copier de `/framework/src/org/apache/cordova/CordovaActivity.java` , ou bien leur mise en œuvre sur votre propre. Le fragment de code suivant montre une application de base qui s'appuie sur l'interface. Notez comment correspond à l'id de la vue référencée le `id` attribut spécifié dans le fragment XML indiqué ci-dessus :
    
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
        

6.  Si l'application doit utiliser l'appareil photo, mettre en œuvre ce qui suit :
    
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
        

7.  Enfin, n'oubliez pas d'ajouter le pool de threads, l'auraient aucun thread sur lequel exécuter des plugins :
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  Copiez les fichiers HTML et JavaScript de l'application sur du projet Android `/assets/www` répertoire.

9.  Copie le `config.xml` dossier de `/framework/res/xml` pour le projet `/res/xml` répertoire.

 [1]: http://cordova.apache.org
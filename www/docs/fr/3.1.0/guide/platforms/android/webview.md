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

Partir de Cordova 1,9, avec l'aide de la `CordovaActivity` , vous pouvez utiliser Cordova comme composant dans une application Android native plus grande. Android fait référence à cet élément comme le `CordovaWebView` . Nouvelles applications basées sur Cordova de 1,9 à partir servir la `CordovaWebView` sa vue principale, quel que soit l'approche héritée de `CordovaActivity` est utilisé.

Si vous n'êtes pas familier avec le développement d'applications Android, veuillez lire le [Guide de la plate-forme Android](index.html) au développement d'une Application de Cordova avant d'essayer d'inclure une WebView. Il n'est pas le principal moyen de créer des applications Android Cordova. Ces instructions sont actuellement manuelles, mais peut être éventuellement être automatisée.

## Conditions préalables

*   Cordova 1,9 ou supérieur

*   Android SDK mis à jour vers la dernière version du SDK

## Guide d'utilisation de CordovaWebView dans un projet Android

1.  `cd` en `/framework` et exécutez le `jar de fourmi` pour construire le bocal de cordova. Il crée le fichier .jar formé comme `cordova-x.x.x.jar` dans le `/framework` répertoire.

2.  Copiez-y le bocal de cordova de votre projet Android `/libs` répertoire.

3.  Modifiez le fichier `main.xml` de votre application (sous `/res/xml`) pour ressembler à ce qui suit, avec le `layout_height`, la `layout_width` et l' `id` modifié pour convenir à votre application :
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Modifier votre activité de sorte qu'il met en œuvre le `CordovaInterface`. Vous devez implémenter les méthodes inclus. Vous pouvez les copier de `/framework/src/org/apache/cordova/CordovaActivity.java`, ou leur mise en œuvre sur votre propre. Le fragment de code ci-dessous montre une application qui utilise l'interface de base. Notez comment la vue référencée l'id correspond à l'attribut `id` spécifié dans le fragment XML indiqué ci-dessus :
    
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
        

Si vous utilisez l'appareil photo, vous devez également implémenter ceci :

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
    

Enfin, n'oubliez pas d'ajouter le pool de threads, sinon les plugins n'ont aucun thread d'exécuter sur :

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Copiez les fichiers HTML et JavaScript de votre application dans le répertoire `` www/actifs/de votre projet Android.

2.  Copier `config.xml` `/framework/res/xml` dans le répertoire `/res/xml` de votre projet.
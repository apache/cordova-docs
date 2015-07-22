---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Amazon Fire OS плагины

Следуйте инструкциям, приведенным в справочнике Android плагины обзор разработки пользовательских плагинов.

## Эхо Amazon Fire OS плагин пример

Для сопоставления интерфейса JavaScript *эхо* функция, описанная в плагины приложения, используйте `plugin.xml` для вставки `feature` спецификации локальной платформы `config.xml` файл:

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
    </platform>
    

Затем добавить следующий `src/org/apache/cordova/plugin/Echo.java` файл:

    package org.apache.cordova.plugin;
    
    import org.apache.cordova.CordovaPlugin;
    import org.apache.cordova.CallbackContext;
    
    import org.json.JSONArray;
    import org.json.JSONException;
    import org.json.JSONObject;
    
    /**
     * This class echoes a string called from JavaScript.
     */
    public class Echo extends CordovaPlugin {
    
        @Override
        public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
            if (action.equals("echo")) {
                String message = args.getString(0);
                this.echo(message, callbackContext);
                return true;
            }
            return false;
        }
    
        private void echo(String message, CallbackContext callbackContext) {
            if (message != null && message.length() > 0) {
                callbackContext.success(message);
            } else {
                callbackContext.error("Expected one non-empty string argument.");
            }
        }
    }
    

Если вы хотите повторно использовать код Android плагин для платформы Amazon Fire ОС, а затем изменить plugin.xml на `android` конкретного исходного файла. Например,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

Если вы хотите написать заказной плагин для платформы Amazon Fire ОС, а затем создайте папку с именем `amazon` под ваш плагин src / папку и изменить plugin.xml на `amazon` конкретного исходного файла. Например,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## С помощью Amazon WebView в ваш плагин

Cordova для Amazon Fire OS использует пользовательские Amazon WebView, который построен на открытым исходным кодом проекта Chromium. Это GPU ускорение и оптимизированы для жидкости производительности на Kindle Fire.

Чтобы понять, как наилучшим образом использовать Amazon WebView в вашем проекте, посетите [Портал разработчиков Амазонки][1].

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html
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

# CaptureError

> Инкапсулирует код ошибки, в результате операции захвата неудачной СМИ.

## Свойства

*   **код**: один из предопределенных кодов, перечисленных ниже.

## Константы

*   `CaptureError.CAPTURE_INTERNAL_ERR`: Камеру или микрофон не удалось захватить изображение или звук.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: Приложение камеры или аудио захвата в настоящее время отбывает другой запрос захвата.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Недопустимое использование API (например, значение `limit` меньше, чем один).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: Пользователь выходит из камеры или аудио захвата приложений до захвата ничего.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: Запрошенный захвата операция не поддерживается.
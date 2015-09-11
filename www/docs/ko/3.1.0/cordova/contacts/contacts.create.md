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

# contacts.create

새 <a href="contacts.html">연락처</a> 개체를 반환합니다.

    var contact = navigator.contacts.create(properties);
    

## 설명

`contacts.create`메서드는 동기적, 및 새로운 반환 합니다 `Contact` 개체.

이 메서드를 호출 해야 <a href="../device/device.html">장치</a> <a href="contacts.html">연락처</a> <a href="../storage/database/database.html">데이터베이스</a>에 <a href="contacts.html">연락처</a> 개체를 유지 하지 않습니다는 `Contact.save` 방법.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8

## 빠른 예제

    var myContact = navigator.contacts.create({"displayName": "Test User"});
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
        <p>Create Contact</p>
      </body>
    </html>
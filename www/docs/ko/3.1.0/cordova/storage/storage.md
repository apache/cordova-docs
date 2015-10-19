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

title: 스토리지
---

# 스토리지

> 장치의 저장소 옵션에 대 한 액세스를 제공합니다.

이 API는 두 가지 다른 W3C 사양에 따라 스토리지 옵션을 제공 합니다.

*   [웹 저장소 API 규격][1] 을 사용 하면 단순한 키/값 쌍을 통해 데이터에 액세스할 수 있습니다. 이 인터페이스에 대 한 자세한 내용은 대 한 [localStorage](localstorage/localstorage.html) 섹션을 참조 하십시오.

*   [웹 SQL [데이터베이스](database/database.html) 사양][2] 더 완전 한 기능의 [데이터베이스](database/database.html) 테이블 액세스 SQL 쿼리를 통해 제공 합니다. 이 인터페이스의 요약 바로 아래에 나타납니다.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

코르 도우 바 두 인터페이스에 이미 그들을 지원 하지 않는 장치의 소수 민족에 대 한 액세스를 제공 합니다. 그렇지 않으면 기본 구현이 적용 됩니다.

## 메서드

*   [openDatabase](storage.opendatabase.html)

## 인수

*   [database_name](parameters/name.html)
*   [database_version](parameters/version.html)
*   [database_displayname](parameters/display_name.html)
*   [database_size](parameters/size.html)

## 개체

*   [데이터베이스](database/database.html)
*   [SQLTransaction](sqltransaction/sqltransaction.html)
*   [SQLResultSet](sqlresultset/sqlresultset.html)
*   [SQLResultSetRowList](sqlresultsetrowlist/sqlresultsetrowlist.html)
*   [SQLError](sqlerror/sqlerror.html)

## 기능 액세스

버전 3.0, 저장소 Api에 액세스 하도록 코르도바, 내장 및 명령줄 인터페이스에 설명 된 대로 플러그인을 추가 하는 CLI를 사용 하 여 필요 하지 않습니다.

앞에 CLI 코르도바 도구의 이전 세트를 사용 하는 경우 다음 플랫폼 관련 구성 설정을 여전히 필요 합니다.

*   (안 드 로이드`app/res/xml/config.xml`)
    
        < 기능 이름 "저장소" = >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.Storage =" / >< / 기능 >
        

*   (블랙베리 WebWorks`www/config.xml`)
    
        < id="blackberry.widgetcache 기능" 필수 = "진정한" 버전 "1.0.0.0" = / >
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* [개요](../../guide/overview/index.html) 섹션에서을 참조 하십시오.
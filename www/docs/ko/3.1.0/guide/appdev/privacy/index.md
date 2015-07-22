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

# 개인 정보 보호 가이드

모바일 개인정보 보호 모든 애플 리 케이 션 개발자를 해결 해야 합니다 중요 한 문제입니다. 사용자가 자신의 개인 정보가 수집 되며 귀하의 애플 리 케이 션에 의해 적절 하 게 처리를 기대 합니다. 또한, 이제 모바일 개인정보 보호 관행에 대 한 법적 요구 사항이 관할의 증가 수가 있다.

모바일 응용 프로그램 개인 정보 보호에이 가이드 *뇌관* 일부 가장 중요 한 문제를 해결 고려해 야 합니다. 그것은 광범위 하 게 허용된 몇 가지 모범 사례를 간략하게 설명 하 고 다른 더 상세한 가이드 및 참조에 대 한 참조를 제공 합니다.

*   **개인 정보 보호 정책**: 당신이 애플 리 케이 션 어떤 종류의 정보 응용 프로그램에서 또는 사용자에 대 한 수집, 정보 사용 방법 누구와 함께 공유, 및 어떻게 사용자가 수 있는 선택을 개인 정보 보호 관련 앱 등을 해결 하는 개인 정보 보호 정책을 포함 해야 합니다. 이해를 돕기 위해 일반 언어를 사용 하 고 기술적인 용어를 피하기 위해 해야. 당신은 당신의 개인 정보 보호 정책 사용자가 애플 리 케이 션 시장의 애플 리 케이 션 설명에서와 같은 다운로드, 사전 검토 해야 합니다. 또한, 만들어야 합니다 개인 정보 보호 정책 응용 프로그램 자체 내에서 사용할 수 있습니다. 휴대폰 디스플레이의 제한 된 크기 사용자에 게 개인 정보 보호 정책을 표시 하기 위한 과제를 만듭니다. *약식* 의 가장 중요 한 정보를 포함 하는 정책 개발을 고려 하 고 그 관심이 더 많은 세부 사항에 대 한 "긴 모양" 정책에 대 한 링크를 제공. 여러 그룹 통신 이러한 표준은 성숙 되 면 고려해 야 할 수 있습니다 개인 정보 보호 관행에 대 한 아이콘 기반 표준 개발 하려고 합니다.

*   **중요 한 정보 수집**: 응용 프로그램의 민감한 개인정보의 수집 중요 한 개인 정보 보호 문제를 발생 시킵니다. 민감한 개인 정보의 예로 금융 정보, 건강 정보 및 또는 아이 들에 대 한 정보. 그것은 또한 특정 센서와 모바일 장치 및 태블릿, 지리적 위치 정보, 연락처/전화 번호부, 마이크로폰/카메라, 저장 된 사진/동영상 등에서 일반적으로 발견 데이터베이스에서 수집 된 정보를 포함 한다. 자세한 내용은 다음 설명서 페이지를 참조 하십시오: [카메라][1], [캡처][2], [연락처][3]및 [지리적 위치][4]. 일반적으로, 중요 한 정보를 수집 하기 전에 사용자의 명시적 허가 받아야 고 해야, 만약에 가능 하다 면, 사용자가 쉽게 사용 권한을 변경할 수 있습니다 제어 메커니즘을 제공. 응용 프로그램 운영 체제에 따라서는 수집 하기 전에 사용자의 허가 요청 하는 저스트-인-타임 대화 상자를 제시 하 여 수 있습니다. 이러한 경우에 명확히 어떻게 app 사용 하 고, 해당 되는 경우 그러한 정보를 공유 대화 상자 텍스트를 사용자 지정 하려면 모든 기회를 활용 해야 합니다.

*   **사용자 놀람을 피하**: 앱 수집 하거나 귀하의 응용 프로그램 (예를 들어, 저장 된 사진에 액세스 하는 음악 플레이어)의 기본 목적에 비추어 사용자에 게 놀라운 일이 될 수 있는 방식으로 정보를 사용 하 여, 민감한 개인 정보 모음과 같이 비슷한 조치를 취해야 한다. 즉, 컬렉션에 대해 사용자에 게 알릴 또는 해당 정보의 사용 및, 해당 되는 경우 해당 개인 정보 보호 제어를 제공 그냥--시간 대화 상자를 사용 하 여 강력 하 게 고려해 야 합니다.

*   **제 3 자 데이터 수집 또는 공유**: 당신이 애플 리 케이 션-다른 회사에 게 제공 되는 정보를 수집 하는 경우 소셜 네트워킹 플랫폼 이나 (예를 들어 응용 프로그램 표시 광고)-광고 네트워크와 같은 알려 해당 컬렉션의 사용자 및 공유. 최소한, 당신의 개인 정보 보호 정책 정보 수집을 설명 해야 하 고 공유 하 고, 적절 한 경우 사용자가 제어 기능을 제공 또는 opt 밖으로 같은 컬렉션 또는 공유.

*   **컬렉션 제한 및 보안**: 사용자가 자신의 정보를 귀하의 응용 프로그램 위임 하 고 그들은 그것을 보호 하기 위해 적절 한 보안 조치를 취할 것을 기대 합니다. 개인 정보의 보안 타협을 피하기 위해 최선의 방법 중 하나는 응용 프로그램에 컬렉션에 대 한 구체적이 고 합법적인 비즈니스 이유 첫 번째 장소에서 정보를 수집 하지 않습니다. 수집 될 필요는 정보에 대 한 백 엔드 서버 또는 장치에 저장 되어 있는지 여부를 해당 정보를 보호 하기 위해 적절 한 보안 제어를 제공 하는 확인 합니다. 또한 앱 및 백 엔드 서버에서 구현 되는 적절 한 데이터 보존 정책을 개발 해야 합니다.

 [1]: cordova_camera_camera.md.html
 [2]: cordova_media_capture_capture.md.html
 [3]: cordova_contacts_contacts.md.html
 [4]: cordova_geolocation_geolocation.md.html

다음은 개발자에 대 한 몇 가지 추가적인 도움이 모바일 개인정보 보호 가이드입니다.

*   캘리포니아 법무 장관, [이동에 개인 정보 보호: 모바일 생태계에 대 한 권장 사항][5]

*   민주주의 & 기술, 개인 정보 보호 정책 포럼, [모바일 애플 리 케이 션 개발자를 위한 최상의 방법][6] 의 미래에 대 한 센터

*   CTIA-무선 협회, [모범 사례와 지침 위치 기반 서비스][7]

*   연방 무역 위원회, [모바일 개인 정보 공개: 투명성을 통해 신뢰 구축][8]

*   개인 정보 보호 정책 포럼, 웹 사이트 [응용 프로그램 개인 정보 보호][9] 의 미래

 [5]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
 [6]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
 [7]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
 [8]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
 [9]: http://www.applicationprivacy.org
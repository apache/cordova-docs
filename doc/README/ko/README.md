# 아파치 코르도바 API 설명서

[아파치 Cordova](http://cordova.io/) 에 대 한 JavaScript API 설명서.

설명서는 [docs.cordova.io](http://docs.cordova.io/) 에서 사용할 수.

## 문서 형식

모든 [아파치 코르도바](http://cordova.io/) 문서 [markdown](http://daringfireball.net/projects/markdown/syntax), HTML로 활자 수는 가벼운 마크업 언어와 함께 기록 됩니다. Markdown은 코르도바의 핵심 API 및 플랫폼 특정 Api를 문서화 하는 간단 하 고 유연한 방법을 제공 합니다.

## 파일 구조

    docs/
    docs/LANGUAGE
    docs/LANGUAGE/VERSION
    docs/LANGUAGE/VERSION/cordova/
    docs/LANGUAGE/VERSION/guide/platforms/PLATFORMNAME/


## 설명서에 기여

### 신고 또는 문제 해결

우리는 [아파치 JIRA](https://issues.apache.org/jira/browse/CB) 사용

그건 그렇고, 당신은 바위! 설명서를 개선 하는 데 도움을 주셔서 감사!

### Git를 사용 하 여

당신은 새로운 자식 또는 GitHub에 기여?

우리는 [몇 가지 Git 튜토리얼 작성](http://wiki.apache.org/cordova/ContributorWorkflow) 설명서에 기여와 함께 시작할 수 있도록.

### 끌어오기 요청을 보내는

끌어오기 요청은 환영 합니다!

항목 지점의 사용 부탁 드립니다.

    git checkout -b issue_23

    # code

    git commit -m "Issue 23: Fix a bad bug."

    git push origin issue_23

    # send pull request from branch issue_23 to cordova:master


### 언어 추가

다른 언어에서 아파치 코르도바 설명서 보기 우리는 너무 해! [Crowdin](http://crowdin.net/project/cordova), 번역 및 로컬라이제이션 관리 플랫폼의 지원, 번역 수 사용 하기 쉬운 툴에 로그인 하 고 그들이 했던 것 처럼 작은 번역 지원을 제공. 당신이 알고 있다면 다른 언어 코르도바를 지원 하 고 기여 하십시오. http://crowdin.net/project/cordova. Crowdin 도구를 사용 하 여에 대 한 몇 가지 모범 사례에 대 한 우리의 위 키 http://wiki.apache.org/cordova/CordovaTranslations를 참조 하십시오.

코르도바 언어 관리자는 다음이 단계를 잊지 마세요:

**1입니다. config.json**

각 언어 및 버전에 대 한 파일을 병합 하는 방법과 언어의 이름을 정의 하는 `config.json` 입니다.

**2. 사용자 지정 HTML 서식 파일**

각 언어 `서식 파일/문서/언어` 에서 기본 서식 파일을 재정의할 수 있습니다..

### 광고문 안 가이드

언어 및 사용에 대 한 `STYLEGUIDE.md` 파일을 참조 하십시오.

## Node.js 함께 문서 생성

지금 문서 Windows, 또는 리눅스 상자에 Node.js를 사용 하 여 실행할 수 있습니다.

    $ rm -r tmp public      # Clear out old docs
    $ ./bin/genjs           # compile all docs
    $ ./bin/genjs en dev    # compile English Dev docs
    $ ./bin/genjs ru dev    # compile Russian Dev docs
    $ ./bin/genjs es 3.5.0  # compile Spanish 3.5.0 docs


### Node.js를 설정

  1. Node.JS [다운로드 페이지](http://nodejs.org/download/) 이동
  2. 다운로드 및 운영 체제에 대 한 패키지를 설치 합니다.
  3. 체크 아웃 Git를 사용 하 여이 저장소

        git clone https://github.com/apache/cordova-docs


  4. 종속성을 설치 합니다. 실행 복제 코르도바-오피스 폴더의 루트에

        npm install


  5. 지금 당신은 로컬로 문서를 만들 수입니다.

### 빠른 미리 보기

사소한 편집 때, 그것은 일반적으로 간단 하 게 렌더링 하는 편집 Markdown에서 HTML로 안전입니다. 많은 코드 에디터는 Markdown HTML로 렌더링 하는 플러그인 그리고 [좋은](http://dillinger.io/) 온라인 편집자의 한 줌 있다.

현재, Node.JS 스크립트와 [joDoc js](https://github.com/kant2002/jodoc-js) HTML 문서를 생성 하 데 사용 됩니다.

## 생성 버전 출시

버전 디렉터리를 생성 하 버전 증가 가장자리 설명서를 업데이트 레이크 작업이입니다.

    # generate version 4.1.0 for english.
    .\bin\incrementversion en 4.1.0

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

# <a href="parameters/contactFields.html">連絡先</a>

> `contacts`オブジェクトは、<a href="../device/device.html">デバイス</a>の<a href="parameters/contactFields.html">連絡先</a><a href="../storage/database/database.html">データベース</a>へのアクセスを提供します。

**重要なプライバシーの注意：**<a href="parameters/contactFields.html">連絡先</a>データの収集と利用を重要なプライバシーの問題を発生させます。 アプリのプライバシー ポリシー アプリが<a href="parameters/contactFields.html">連絡先</a>データを使用する方法と、他の当事者では共有されているかどうかを話し合う必要があります。 人誰と通信する人々 を明らかにするために、<a href="parameters/contactFields.html">連絡先</a>情報が機密と見なされます。 したがって、アプリのプライバシー ポリシーに加えて、強くする必要がありますアプリへのアクセスまたはを使用して<a href="parameters/contactFields.html">連絡先</a>データを<a href="../device/device.html">デバイス</a> オペレーティング システムしないので既に) の前に - 時間の<a href="../notification/notification.html">通知</a>を行うこと。 その<a href="../notification/notification.html">通知</a>は、上記の (例えば、 **[ok]**を**おかげで**選択肢を提示する) によってユーザーのアクセス許可を取得するだけでなく、同じ情報を提供する必要があります。 いくつかのアプリのマーケットプ レース - 時間の<a href="../notification/notification.html">通知</a>を提供して、<a href="parameters/contactFields.html">連絡先</a>データにアクセスする前のユーザーのアクセス許可を取得するアプリをする必要がありますに注意してください。 データはユーザーの混乱を避けるために役立つ<a href="parameters/contactFields.html">連絡先</a>の使用および<a href="parameters/contactFields.html">連絡先</a>データの知覚の誤用を囲む明確でわかりやすいユーザー エクスペリエンス。 詳細については、プライバシーに関する<a href="../../index.html">ガイド</a>を参照してください。

## メソッド

*   <a href="contacts.create.html">contacts.create</a>
*   <a href="contacts.find.html">contacts.find</a>

## 引数

*   <a href="parameters/contactFields.html">連絡先</a>
*   <a href="parameters/contactSuccess.html">contactSuccess</a>
*   <a href="parameters/contactError.html">contactError</a>
*   <a href="parameters/contactFindOptions.html">contactFindOptions</a>

## オブジェクト

*   <a href="Contact/contact.html">お問い合わせ</a>
*   <a href="ContactName/contactname.html">得意先コード</a>
*   <a href="ContactField/contactfield.html">ContactField</a>
*   <a href="ContactAddress/contactaddress.html">ContactAddress</a>
*   <a href="ContactOrganization/contactorganization.html">ContactOrganization</a>
*   <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>
*   <a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*として<a href="../device/device.html">デバイス</a> レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   iOS （`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の<a href="../../guide/overview/index.html">概要</a>のセクションを参照してください。
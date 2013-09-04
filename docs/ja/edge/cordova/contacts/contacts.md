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

# 連絡先

> `contacts`オブジェクトは、デバイスの連絡先データベースへのアクセスを提供します。

**重要なプライバシーの注意：**連絡先データの収集と利用を重要なプライバシーの問題を発生させます。 アプリのプライバシー ポリシー アプリが連絡先データを使用する方法と、他の当事者では共有されているかどうかを話し合う必要があります。 人誰と通信する人々 を明らかにするために、連絡先情報が機密と見なされます。 したがって、アプリのプライバシー ポリシーに加えて、強くする必要がありますアプリへのアクセスまたはを使用して連絡先データをデバイス オペレーティング システムしないので既に) の前に - 時間の通知を行うこと。 その通知は、上記の (例えば、 **[ok]**を**おかげで**選択肢を提示する) によってユーザーのアクセス許可を取得するだけでなく、同じ情報を提供する必要があります。 いくつかのアプリのマーケットプ レース - 時間の通知を提供して、連絡先データにアクセスする前のユーザーのアクセス許可を取得するアプリをする必要がありますに注意してください。 データはユーザーの混乱を避けるために役立つ連絡先の使用および連絡先データの知覚の誤用を囲む明確でわかりやすいユーザー エクスペリエンス。 詳細については、プライバシーに関するガイドを参照してください。

## メソッド

*   contacts.create
*   contacts.find

## 引数

*   連絡先
*   contactSuccess
*   contactError
*   contactFindOptions

## オブジェクト

*   お問い合わせ
*   得意先コード
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git
        $ cordova plugin rm org.apache.cordova.core.contacts
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml) < 機能名 =「連絡先」>< param の名前 =「android パッケージ」value="org.apache.cordova.ContactManager"/></機能 > (app/AndroidManifest.xml) で < 使用許可 android:name="android.permission.GET_ACCOUNTS"/>< 使用許可 android:name="android.permission.READ_CONTACTS"/>< 使用許可 android:name="android.permission.WRITE_CONTACTS"/>
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml) < 機能名 =「お問い合わせ」>< param の名前「ブラックベリー パッケージ」value="org.apache.cordova.pim.Contact ="/></機能 > (www/config.xml) で < id="blackberry.find 機能"必要 ="true"のバージョン =「1.0.0.0」/>< id="blackberry.identity 機能"必要 ="true"のバージョン ="1.0.0.0 という"/>< id="blackberry.pim.Address 機能"必要 ="true"のバージョン ="1.0.0.0 という"/>< id="blackberry.pim.Contact 機能"必要 ="true"のバージョン =「1.0.0.0」/>
        

*   iOS （`config.xml`)
    
        < 機能名 =「連絡先」>< param の名前 = 値「ios パッケージ」="CDVContacts"/></機能 >
        

*   Windows Phone
    
        (Properties/WPAppManifest.xml) の < 機能 >< 機能名 ="ID_CAP_CONTACTS"/></機能 >
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。概要については、プラットフォームのサポートを参照してください。
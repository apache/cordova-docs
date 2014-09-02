---
license: Licensed to the Apache Software Foundation (ASF) under one
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

# プライバシーに関する注意点

携帯端末と個人情報に関わる事項は、アプリケーション開発者が検討しなければならない問題の 1 つです。
アプリが取り扱う個人情報に関して、適切に、処理・管理されていることを、ユーザーは期待しています。
また、携帯端末と個人情報の取り扱いに関する法的な制度も、近年では急速に整備されつつあります。

携帯端末と個人情報は、その取り扱いに関連して、さまざまな問題も生じさせる導火線になりかねません。ここでは、共通認識となりつつある、個人情報の収集・処理・管理に関する一般的な注意点、および、他のガイド・参考文献などを紹介しています。

* __プライバシー ポリシー__ : 収集を行うユーザー情報の内容、情報の利用目的、第三者への提供の有無、個人情報の取り扱いに関するユーザーの許諾などは、プライバシー ポリシー内で、記述を行うべき事項です。ユーザーの困惑を最小限にするため、わかりやすい言葉を使用して、技術的な詳細は避けるようにしましょう。また、アプリのダウンロード画面上で、アプリの概要を記述している項目内に、プライバシー ポリシーを記述するなどして、ユーザーがアプリのダウンロードを行う前に、その内容を確認できるようにしましょう。また、アプリ内においても、プライバシー ポリシーを確認できるようにしましょう。また、ユーザーが使用する端末の画面サイズを考慮にいれ、プライバシー ポリシーを適切・十分に表示できるようにもしましょう。プライバシー ポリシーの中でも、重要事項のみをまとめて _省略_ した内容を作成することも良いでしょう。併せて、その内容にリンクを貼り、リンク先に、改めて "詳細" な内容を掲載するなど、工夫も必要です。また、複数の団体においては、個人情報の取り扱いの標準化 ( アイコンの使用・作成・統一化 ) に取り組んでいます。これらの標準化が一般に浸透してきたときには、これらに準拠するのも良いかもしれません。

* __個人情報の収集__ : アプリによる個人情報の収集に関しては、プライバシー侵害の問題があります。個人情報の中でも、ユーザーが入力した、経済・健康・家族構成に関する情報は、その取り扱いに注意が必要です。併せて、携帯端末・タブレット上のセンサーとデータベースから収集する個人情報 ( 位置情報・連絡先・カメラ・写真・動画など ) の取り扱いにも注意が必要です。詳細に関しては、 [カメラ](cordova_camera_camera.md.html) 、 [メディアキャプチャー](cordova_media_capture_capture.md.html) 、 [連絡先](cordova_contacts_contacts.md.html) 、 [位置情報](cordova_geolocation_geolocation.md.html) をご確認ください。個人情報を収集する前に、ユーザーへの明示的な許諾を取るようにしましょう。また、可能であれば、使用許諾に関して、後から、ユーザー側で変更できるように、管理機能も提供するようにしましょう。いくつかのオペレーシングシステムでは、情報収集前に、ユーザーの許諾を要求するダイアログボックスを表示できます。そのようなオペレーティングシステムであれば、ダイアログをカスタマイズして、使用するのも良いでしょう。

* __ユーザー側の不安解消__ : アプリが提供している機能の一部において、ユーザーを不快にする方法で、収集した情報を使用している場合があります ( 保存されている写真にアクセス・表示する、ミュージック再生アプリなど )。アプリの機能の一部ではありますが、このような場合も、上述のような、ユーザーの許諾を先に取得する必要があります。ユーザーへの事前通知と許諾を得るため、上述のダイアログボックスを使用すること、併せて、許諾取得後も、許諾を取り消せるよう、管理機能を提供すると良いでしょう。

* __第三者への情報提供と共同利用__ : 第三者 ( ソーシャルネットワーク、広告配信ネットワークなど ) へ提供する情報を収集する機能がアプリに実装されている場合、その旨をユーザーに告知する必要があります。プリバシー ポリシー内で、第三者への情報提供と共同利用に関する記載をして、適当であれば、これについて、制御・拒絶などをユーザー側で行える必要があります。

* __収集の制限とセキュリティー__ : アプリで収集した情報は、適当なセキュリティー管理下にあるものと、ユーザーは期待しています。セキュリティーに不安がある場合、正当な目的がある場合を除き、個人情報の収集を行わないことが最善の策です。収集しなければならない情報がある場合、データの保存場所 ( アプリ上またはバックエンドサーバー上 ) に関わらず、セキュリティー管理が適切に行われている必要があります。また、データ保持の期間に関しても、ポリシーを策定する必要があります。

開発者向けに書かれた、携帯端末と個人情報の取り扱いに関する他のガイドを、以下に記します。

* カリフォルニア州司法長官、 [プライバシーの保護 : モバイル エコシステム ( Mobile Ecosystem ) 向けの勧告][1]

* 民主主義とテクノロジー センター ( Center for Democracy & Technology )、プライバシーの未来フォーラム ( Future of Privacy Forum )、[携帯アプリ開発者が検討すべき事項][2]

* CTIA 無線協会 ( CTIA-The Wireless Association )、 [位置情報を使用したサービスの取り扱いとガイドライン][3]

* 米連邦取引委員会 ( Federal Trade Commission )、 [携帯端末とプライバシーの暴露 : 透明性を通じた信頼性の構築][4]

* プライバシーの未来フォーラム、 [アプリケーションのプライバシー][5] ウェブサイト

[1]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
[2]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
[3]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
[4]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
[5]: http://www.applicationprivacy.org

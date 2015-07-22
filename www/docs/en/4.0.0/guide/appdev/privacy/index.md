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

# Privacy Guide

Mobile privacy is a critical issue that every app developer must
address. Your users expect that their private information will be
collected and treated appropriately by your app. Also, there are an
increasing number of jurisdictions that now have legal requirements
regarding mobile privacy practices.

This guide on mobile app privacy should be considered a _primer_
addressing some the most significant issues. It outlines some broadly
accepted best practices and provides references to other more detailed
guides and references.

* __Privacy Policy__: You app should include a privacy policy that
  addresses topics such as what kind of information the app collects
  from or about your users, how that information is used, with whom it
  is shared, and how users can make privacy-related choices within the
  app. To aid understanding, you should use plain language and avoid
  technical jargon. You should make your privacy policy available for
  users to review prior to download, such as in the app description in
  the app marketplace. In addition, you should make your privacy
  policy available within the app itself. The limited size of mobile
  device displays creates challenges for displaying privacy policies
  to users. Consider developing a _short form_ of the policy that
  includes the most important information, and then provide a link to
  the "long form" policy for those interested in more details. Several
  groups are attempting to develop icon-based standards for
  communicating privacy practices, which you may want to consider once
  these standards mature.

* __Collection of sensitive information__: An app's collection of
  sensitive personal information raises important privacy concerns.
  Examples of sensitive personal information include financial
  information, health information, and information from or about
  children. It also includes information gathered from certain sensors
  and databases typically found on mobile devices and tablets, such as
  geolocation information, contacts/phonebook, microphone/camera, and
  stored pictures/videos. See the following documentation pages for
  more information: [camera](cordova_camera_camera.md.html),
  [capture](cordova_media_capture_capture.md.html),
  [contacts](cordova_contacts_contacts.md.html), and
  [geolocation](cordova_geolocation_geolocation.md.html). Generally,
  you should obtain a user's express permission before collecting
  sensitive information and, if possible, provide a control mechanism
  that allows a user to easily change permissions. App operating
  systems can help in some instances by presenting just-in-time dialog
  boxes that ask for the user's permission before collection. In these
  cases, be sure to take advantage of any opportunity to customize the
  dialog box text to clarify how the app uses and, if applicable,
  shares such information.

* __Avoiding user surprise__: If the app collects or uses information
  in a way that may be surprising to users in light of the primary
  purpose of your app (for example, a music player that accesses
  stored pictures), you should take similar steps as with the
  collection of sensitive personal information. That is, you should
  strongly consider the use of just-in-time dialog boxes to inform the
  user about the collection or use of that information and, if
  appropriate, provide a corresponding privacy control.

* __Third party data collection or sharing__: If you app collects
  information that is provided to another company--such as a social
  networking platform or an ad network (for example, if your app
  displays advertising)--you should inform your users of that
  collection and sharing. At a minimum, your privacy policy should
  describe the information collection and sharing and, if appropriate,
  offer your users the ability to control or opt-out of such
  collection or sharing.

* __Collection limitation and security__: Your users entrust your app
  with their information and they expect that you will take
  appropriate security precautions to protect it. One of the best ways
  to avoid security compromises of personal information is not to
  collect the information in the first place unless your app has a
  specific and legitimate business reason for the collection. For
  information that does need to be collected, ensure that you provide
  appropriate security controls to protect that information, whether
  it is stored on the device or on your backend servers. You should
  also develop an appropriate data retention policy that is
  implemented within the app and on your backend servers.

Following are some additional helpful mobile privacy guides for developers:

* California Attorney General, [Privacy on the Go: Recommendations for the Mobile Ecosystem][1]

* Center for Democracy & Technology, Future of Privacy Forum, [Best Practices for Mobile App Developers][2]

* CTIA-The Wireless Association, [Best Practices and Guidelines for Location Based Services][3]

* Federal Trade Commission, [Mobile Privacy Disclosures: Building Trust Through Transparency][4]

* Future of Privacy Forum, [Application Privacy][5] Website

[1]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
[2]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
[3]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
[4]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
[5]: http://www.applicationprivacy.org

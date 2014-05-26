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

# Security Guide

The following guide includes some security best practices that you should consider when developing a Cordova application. Please be aware that security is a very complicated topic and therefore this guide is not exhaustive. If you believe you can contribute to this guide, please feel free to file an issue in Cordova's bug tracker under ["Documentation"](https://issues.apache.org/jira/browse/CB/component/12316407).  This guide is designed to be applicable to general Cordova development (all platforms) but special platform-specific considerations will be noted. 

## This guide discusses the following topics:
* Whitelist
* Iframes and the Callback Id Mechanism
* Certificate Pinning
* Self-signed Certificates
* Encrypted storage
* General Tips
* Recommended Articles and Other Resources

## Whitelist

* Read and understand the Whitelist Guide

* By default, the Whitelist on a newly created app will allow access to every domain through the `<access>` tag: 
     `<access origin="*">`
If you want network requests to be evaluated against the whitelist, then it is important to change this and only allow the domains to which you need access. This can be done by editing the application-level config file located at:
     `{project}/config.xml` (recent projects) or `{project}/www/config.xml` (older projects)

* Android's Whitelist on Cordova 2.9.x is considered secure, however, it was discovered that if foo.com is included in the whitelist, foo.com.evil.com would be able to pass the whitelist test. This was fixed in Cordova 3.x.  

* Domain whitelisting does not work on Android API 10 and below, and WP7/8 for iframes and XMLHttpRequest. This means an attacker can load any domain in an iframe and any script on that page within the iframe can directly access Cordova JavaScript objects and the corresponding native Java objects. You should take this into consideration when building applications for these platforms. In practice this means making sure you target an Android API higher than 10, and that if possible you do not use an iframe to load external content - use the inAppBrowser plugin or other third-party plugins. 


## Iframes and the Callback Id Mechanism

If content is served in an iframe from a whitelisted domain, that domain will have access to the native Cordova bridge. This means that if you whitelist a third-party advertising network and serve those ads through an iframe, it is possible that a malicious ad will be able to break out of the iframe and perform malicious actions. Because of this, you should generally not use iframes unless you control the server that hosts the iframe content.  Also note that there are third party plugins available to support advertising networks. Note that this statement is not true for iOS, which intercepts everything including iframe connections. 

## Certificate Pinning

Cordova does not support true certificate pinning. The main barrier to this is a lack of native APIs in Android for intercepting SSL connections to perform the check of the server's certificate. (Although it is possible to do certificate pinning on Android in Java using JSSE, the webview on Android is written in C++, and server connections are handled for you by the webview, so it is not possible to use Java and JSSE there.) Since Apache Cordova is meant to offer consistent APIs across multiple platforms, not having a capability in a major platform breaks that consistency.

There are ways to approximate certificate pinning, such as checking the server's public key (fingerprint) is the expected value when your application starts or at other various times during your application's lifetime. There are third-party plugins available for Cordova that can do that. However, this is not the same as true certificate pinning which automatically verifies the expected value on every connection to the server.

## Self-signed Certificates

Using self-signed certificates on your server is not recommended. If you desire SSL, then it is highly recommended that your server have a certificate that has been properly signed by a well-known CA (certificate authority). The inability to do true certificate pinning makes this important.

The reason is that accepting self-signed certificates bypasses the certificate chain validation, which allows any server certificate to be considered valid by the device. This opens up the communication to man-in-the-middle attacks. It becomes very easy for a hacker to not only intercept and read all communication between the device and the server, but also to modify the communication. The device will never know this is happening because it doesn't verify that the server's certificate is signed by a trusted CA. The device has no proof that the server is who it expects. Because of the ease of doing a man-in-the-middle attack, accepting self-signed certificates is only marginally better than just running http instead of https on an untrusted network. Yes, the traffic would be encrypted, but it could be encrypted with the key from a man-in-the-middle, so the man-in-the-middle can access everything, so encryption is useless except to passive observers. Users trust SSL to be secure, and this would be deliberately making it insecure, so the SSL use becomes misleading. If this will be used on a trusted network (i.e., you are entirely inside a controlled enterprise), then self-signed certs are still not recommended. The two recommendations in a trusted network are to just use http because the network itself is trusted, or to get a certificate signed by a trusted CA (not self-signed). Either the network is trusted or it is not.

The principles described here are not specific to Apache Cordova, they apply to all client-server communication.

When running Cordova on Android, using `android:debuggable="true"` in the application manifest will permit SSL errors such as certificate chain validation errors on self-signed certs. So you can use self-signed certs in this configuration, but this is not a configuration that should be used when your application is in production. It is meant to be used only during application development.


## Encrypted storage


## General Tips

### Do not use Android Gingerbread!
* Set your min-target-sdk level higher than 10. API 10 is Gingerbread, and Gingerbread is no longer supported by Google or device manufacturers, and is therefore not recommend by the Cordova team. 
* Gingerbread has been shown to be insecure and one of the most targeted mobile OSs [http://www.mobilemag.com/2012/11/06/andriod-2-3-gingerbread-security/](http://bgr.com/2012/11/06/android-security-gingerbread-malware/). 
* The Whitelist on Android does not work with Gingerbread or lower. This means an attacker can load malicious code in an iframe that would then have access to all of the Cordova APIs and could use that access to steal personal data, send SMS messages to premium-rate numbers, and perform other malicious acts. 

### Use InAppBrowser for outside links
* Use the InAppBrowser when opening links to any outside website. This is much safer than whitelisting a domain name and including the content directly in your application because the InAppBrowser will use the native browser's security features and will not give the website access to your Cordova environment. Even if you trust the third party website and include it directly in your application, that third party website could link to malicious web content. 

### Validate all user input
* Always validate any and all input that your application accepts. This includes usernames, passwords, dates, uploaded media, etc. Because an attacker could manipulate your HTML and JS assets (either by decompiling your application or using debugging tools like chrome://inspect), this validation should also be performed on your server, especially before handing the data off to any backend service. 
* Other sources where data should be validated: user documents, contacts, push notifications

### Do not cache sensitive data
* If usernames, password, geolocation information, and other sensitive data is cached, then it could potentially be retrieved later by an unauthorized user or application.

### Don't use eval() unless you know what you're doing
* The JavaScript function eval() has a long history of being abused. Using it incorrectly can open your code up for injection attacks, debugging difficulties, and slower code execution. 

### Do not assume that your source code is secure
* Since a Cordova application is built from HTML and JavaScript assets that get packaged in a native container, you should not consider your code to be secure. It is possible to reverse engineer a Cordova application. 

## Recommended Articles and Other Resources

* [HTML5 Security cheat sheet, detailing how to secure your HTML5 application](https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet)
* [Phonegap's article on device security, such as using encrypted data](https://github.com/phonegap/phonegap/wiki/Platform-Security)
* [Whitepaper about well known security flaws in Webview based hybrid applications](http://www.cis.syr.edu/~wedu/Research/paper/webview_acsac2011.pdf)

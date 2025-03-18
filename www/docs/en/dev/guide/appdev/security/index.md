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

title: Manage App's Security
toc_title: Security
description: Information and tips for building a secure application.
---

# Security

The following guide includes some security best practices that you should consider when developing a Cordova application. Please be aware that security is a very complicated topic and therefore this guide is not exhaustive. If you believe you can contribute to this guide, please feel free to create a pull request in Cordova's [cordova-docs](https://github.com/apache/cordova-docs/issues) repository. This guide is designed to be applicable to general Cordova development (all platforms) but special platform-specific considerations will be noted.

## This guide discusses the following topics:

* General Tips
* Plugins and Security
* Allow List
* Content Security Policy
* Certificate Pinning
* Using TLS/SSL
* Avoid Self-signed Certificates
* Wrapping external sites and hot code push
* Encrypted storage
* Recommended Articles and Other Resources

## General Tips

### Use InAppBrowser for outside links

Use the [InAppBrowser](https://www.npmjs.com/package/cordova-plugin-inappbrowser) when opening links to any outside website. This is much safer than allow listing a domain name and including the content directly in your application because the InAppBrowser will use the native browser's security features and will not give the website access to your Cordova environment. Even if you trust the third party website and include it directly in your application, that third party website could link to malicious web content.

### Validate all user input

Always validate any and all input that your application accepts. This includes usernames, passwords, dates, uploaded media, etc. Because an attacker could manipulate your HTML and JS assets (either by decompiling your application or using debugging tools like `chrome://inspect`), this validation should also be performed on your server, especially before handing the data off to any backend service.

> **Tip**: Other sources where data should be validated: user documents, contacts, push notifications

### Do not store sensitive data

If usernames, password, geolocation information, and other sensitive data is stored, then it could potentially be retrieved later by an unauthorized user or application.

### Don't use `eval()`

The JavaScript function `eval()` has a long history of being abused. Using it incorrectly can open your code up for injection attacks, debugging difficulties, and slower code execution.

### Do not assume that your source code is secure

Since a Cordova application is built from HTML and JavaScript assets that get packaged in a native container, you should not consider your code to be secure. It is possible for an iOS or Android application to be unpacked and unzipped to reveal its web assets such as HTML and JS.

A sampling of what you should not include in your code:

* Authentication information (usernames, passwords, keys, etc.)
* Encryption keys
* Trade secrets

### Do not assume storage containers are secure

Even if a device itself is encrypted, if someone has access to the device and can unlock it, you should not assume that data stored in various formats and containers is safe. Even SQLite databases are easily human readable once access is gained.

As long as you're storing non-sensitive information, this isn't a big deal. But if you were storing passwords, keys, and other sensitive information, the data could be easily extracted, and depending on what was stored, could be used against your app and remote servers.

For example, on iOS, if you store data in `localStorage`, the data itself is easily readable to anyone who has access to the device. This is because `localStorage` is backed by an unencrypted SQLite database. The underlying storage of the device may in fact be encrypted (and so it would be inaccessible while the device is locked), but once the device decrypts the file, the contents themselves are mostly in the clear. As such, the contents of `localStorage` can be easily read and even changed.

## Plugins and Security

Due to the way the native portion of Cordova communicates with your web code, it is possible for any code executing within the main webview context to communicate with any installed plugins. This means that you should _never_ permit untrusted content within the primary webview. This can include third-party advertisements, sites within an `iframe`, and even content injected via `innerHTML`.

If you must inject content into the primary webview, be certain that it has been properly sanitized so that no JavaScript can be executed. _Do not try to sanitize content on your own; use a vetted third-party library instead!_

> **Tip**: If you need to include advertising, use any of the many third-party plugins for Cordova. These are safer than executing arbitrary JavaScript from advertisers.

## Allow List

By default the app's navigation is unrestricted. It's recommended to restrict the navigation only to trusted domains. Learn more by reading the [Allow List Guide](../allowlist/index.html)

## Content Security Policy (CSP)

Cordova’s default template includes a basic Content Security Policy (CSP). It’s recommended to review and customize this CSP to fit your app's specific needs. For more information, refer to the [Allow List Guide - Content Security Policy (CSP)](../allowlist/index.html#content-security-policy-csp).

## Certificate Pinning

It is important to ensure that you trust any hosts with which there are communications. Typically, one would do this using certificate pinning. The app would double check any certificates and only communicate over channels where the certificate check passed. This helps mitigate man-in-the-middle attacks.

Unfortunately, Cordova does not support true certificate pinning. The main barrier to this is a lack of native APIs in Android for intercepting SSL connections to perform the check of the server's certificate. (Although it is possible to do certificate pinning on Android in Java using JSSE, the webview on Android is written in C++, and server connections are handled for you by the webview, so it is not possible to use Java and JSSE there.) Since Apache Cordova is meant to offer consistent APIs across multiple platforms, not having a capability in a major platform breaks that consistency.

There are ways to approximate certificate pinning, such as checking that the server's public key (fingerprint) is the expected value when your application starts or at other various times during your application's lifetime. There are third-party plugins available for Cordova that can do that. However, this is not the same as true certificate pinning which automatically verifies the expected value on every connection to the server.

There are also plugins that can do true certificate pinning for some platforms, assuming your app is able to do all of its network requests using the plugin (i.e.: no traditional XHR/AJAX requests, etc).

## Using TLS/SSL

If your app communicates to an external server, it should be communicating using modern encryption standards. Use `https` protocol whenever possible.

[Let's Encrypt](https://letsencrypt.org/) is a free, automated, and open certificate authority provided by the nonprofit [Internet Security Research Group](https://www.abetterinternet.org/). Let's Encrypt will offer free standard certificates, which will be sufficient for most developers. Enterprise organizations may still want to use a traditional certificate authority that offers more advanced features such as [Organization validation](https://en.wikipedia.org/wiki/Public_key_certificate#Organization_validation) certificates.

It is also important to keep up to date with security standards as they change over time. What might be acceptable SSL/TLS configuration today may not be acceptable years in the future. Using tools to test your certificate and SSL/TLS configuration should be done regularly. [SSL Labs](https://www.ssllabs.com/ssltest/) is a free online service provided by Qualys, Inc to test your server's SSL/TLS configuration and encryption strength, in addition to supported platforms.

## Avoid Self-signed Certificates

Using self-signed certificates on your server is not recommended. If you desire SSL, then it is highly recommended that your server have a certificate that has been properly signed by a well-known CA (certificate authority). The inability to do true certificate pinning makes this even more important.

The reason is that accepting self-signed certificates bypasses the certificate chain validation, which allows any server certificate to be considered valid by the device. This opens up the communication to man-in-the-middle attacks. It becomes very easy for a hacker to not only intercept and read all communication between the device and the server, but also to modify the communication. The device will never know this is happening because it doesn't verify that the server's certificate is signed by a trusted CA. The device has no proof that the server is who it expects.

Because of the ease of doing a man-in-the-middle attack, accepting self-signed certificates is only marginally better than just running `http` instead of `https` on an untrusted network. While the traffic would be encrypted, it could be encrypted with the key from a man-in-the-middle, so the man-in-the-middle would have access everything, making the encryption useless except to passive observers. Users trust SSL to be secure, and this would be deliberately making it insecure, so the SSL use becomes misleading.

If the app will be used on a trusted network (i.e., you are entirely inside a controlled enterprise), then self-signed certs are still not recommended. The two recommendations in a trusted network are to just use http because the network itself is trusted, or to get a certificate signed by a trusted CA (not self-signed). Either the network is trusted or it is not.

> **Note**: The principles described here are not specific to Apache Cordova, they apply to all client-server communication.

> **Android Tip**: When running Cordova on Android, using `android:debuggable="true"` in the application manifest will permit SSL errors such as certificate chain validation errors on self-signed certs. So you can use self-signed certs in this configuration, but this is not a configuration that should be used when your application is in production. It is meant to be used only during application development.

## Wrapping external sites and hot code push

Cordova's implementation allows you to redirect to an external site instead of using local content. This is **not** suggested for most apps, even though it might avoid a rewrite of the app or can make code updates faster. You should avoid this for any apps destined to any app store, but in general, it's risky regardless, for many reasons:

* No local code to detect no route to host. Apple _requires_ apps to detect no network connection (and other connectivity issues) and display a user-friendly error message. If there's no local code to detect this, the app will generally remain blank, and Apple will reject it.
* No local code to verify the downloaded content. The content could be incomplete or corrupted, especially if being downloaded over a poor network connection. Incomplete or corrupt content is not going to render particularly well, leaving your user frustrated.
* No local code to detect and remove malicious intent. Local code has a chance to sanitize content and verify that there are no spurious or unexpected `script` tags or event handlers. Without local code, the app is at the server's mercy.
* No local code to check certificates. See **Certificate Pinning** above.

Hot code push solutions improve matters a bit, since they will download code and store it locally on the device. This means that in the event of a network failure, the code still has a chance to run and display any appropriate messages, and that same code can verify any future downloads. You should, however, verify that any hot code push service you use does the following:

* Validate checksums to ensure complete and accurate downloads
* Certificate checking to ensure that the download is from a trusted server
* Falls back to last downloaded code in the event something goes wrong

## Encrypted Storage

Both **Android** and **iOS** offer various secure storage options. While **Apache Cordova** does not provide these mechanisms natively at the platform core or plugin level, third-party plugins may be available or can be created to implement such features.

**Android:**

* [**Encrypted Shared Preferences**](https://developer.android.com/reference/androidx/security/crypto/EncryptedSharedPreferences)

    **Encrypted SharedPreferences** is an encrypted version of SharedPreferences, where both the keys and values are encrypted. This is ideal for storing small amounts of data, such as user settings, preferences, or other sensitive information.

* [**Encrypted File Storage**](https://developer.android.com/reference/androidx/security/crypto/EncryptedFile)

    **Encrypted File Storage** is suitable for securely storing files, perfect for large data. By using the `EncryptedFile` class, you can create and read encrypted files, ensuring that the file contents remain protected.

**iOS:**

* **File Protection**

    Using [`NSFileManager`](https://developer.apple.com/documentation/foundation/nsfilemanager), which provides an interface for managing the file system, you can define a file's protection level with the [`NSFileProtectionType`](https://developer.apple.com/documentation/foundation/nsfileprotectiontype) attribute. This allows you to store files on disk with protection based on the device's lock state. Files are encrypted and accessible only when the device is unlocked.

* [**Keychain Services**](https://developer.apple.com/documentation/security/keychain-services?language=objc)

    **Keychain Services** is a secure method for storing small pieces of sensitive data, such as passwords or tokens. Data in the keychain is encrypted and protected by the device's security mechanisms.

## Recommended Articles and Other Resources

* [OWASP Cheat Sheet Series - HTML5 Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html)
* [Research Paper - Attacks on WebView in the Android System](https://www.cs.ucr.edu/~heng/pubs/webview_acsac2011.pdf)

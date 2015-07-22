---
layout: post
author:
    name: Ian Clelland
    url: https://twitter.com/iclelland
title:  "Plugins Release: July 8, 2014"
categories: news
tags: release plugins
---
The following plugins were updated today:

* cordova-plugin-contacts: 0.2.11
* cordova-plugin-network-information: 0.2.10

Notable changes include:

* The network-information plugin no longer crashes immediately if no network is available
* `navigator.contacts.pickContact` API has been added for **Android**, **iOS**, **Windows Phone 8** and **Windows 8** platforms
* `navigator.contacts.find` API on **Android**, **iOS** and **Windows Phone 8** now supports `desiredFields` which specifies contact fields to be returned
* Contacts on **Firefox OS** no longer requires manual change of the application permissions

The plugins have been updated on our registry at [plugins.cordova.io](http://plugins.cordova.io/).

----
You can update any plugin by removing it, and then re-adding it. E.g. To update your contacts plugin:

    cordova plugin rm org.apache.cordova.contacts
    cordova plugin add org.apache.cordova.contacts

Other changes include:
<!--more-->

`org.apache.cordova.contacts@0.2.11`

* [CB-5416](https://issues.apache.org/jira/browse/CB-5416) Adding support for auto-managing permissions
* [CB-6682](https://issues.apache.org/jira/browse/CB-6682) Move **Windows 8** command proxy into its missing platform tag
* [CB-5698](https://issues.apache.org/jira/browse/CB-5698) **iOS** Check to see if `photoData` exists before using
* [CB-7003](https://issues.apache.org/jira/browse/CB-7003) **Android** Make `pickContact` pick correct contact on Android 4.3 and 4.4.3
* Remove deprecated symbols for **iOS** < 6
* **Windows Phone 8** now populates contact photos
* Add `pickContact` functionality to Cordova contacts plugin
* Add `ContactError` codes to `index.md` doc
* Docs typo: `navigator.contacts.length` -> `contacts.length`
* [CB-6127](https://issues.apache.org/jira/browse/CB-6127) Spanish and French Translations added
* [CB-6797](https://issues.apache.org/jira/browse/CB-6797) Add license
* [CB-6491](https://issues.apache.org/jira/browse/CB-6491) Add CONTRIBUTING.md

`org.apache.cordova.network-information@0.2.10`

* [CB-6907](https://issues.apache.org/jira/browse/CB-6907): **Android** Don't crash on startup if no networks available

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

Upgrading Cordova Android
=========================


This document is for people who need to upgrade their Cordova versions from an older version to a current version of Cordova.

## Upgrade to 2.0.0 from 1.9.0 ##

1. Remove cordova-1.9.0.jar from the libs directory in your project
2. Add cordova-2.0.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-2.0.0.js into your project
5. Update your HTML to use the new cordova-2.0.0.js file
6. Update the res/xml/plugins.xml to be the same as the one found in framework/res/xml/plugins.xml

## Upgrade to 1.9.0 from 1.8.1 ##

1. Remove cordova-1.8.0.jar from the libs directory in your project
2. Add cordova-1.9.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.9.0.js into your project
5. Update your HTML to use the new cordova-1.9.0.js file
6. Update the res/xml/plugins.xml to be the same as the one found in framework/res/xml/plugins.xml

### Notes about 1.9.0 release

- Third-Party plugins may or may not work.  This is because of the introduction of the CordovaWebView.  These plugins need to get a context from the CordovaInterface using
getContext() or getActivity().  If you are not an experienced Android developer, please contact the plugin maintainer and add this task to their bug tracker.

## Upgrade to 1.8.0 from 1.8.0 ##

1. Remove cordova-1.8.0.jar from the libs directory in your project
2. Add cordova-1.8.1.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.8.1.js into your project
5. Update your HTML to use the new cordova-1.8.1.js file
6. Update the res/xml/plugins.xml to be the same as the one found in framework/res/xml/plugins.xml


## Upgrade to 1.8.0 from 1.7.0 ##

1. Remove cordova-1.7.0.jar from the libs directory in your project
2. Add cordova-1.8.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.8.0.js into your project
5. Update your HTML to use the new cordova-1.8.0.js file
6. Update the res/xml/plugins.xml to be the same as the one found in framework/res/xml/plugins.xml




## Upgrade to 1.8.0 from 1.7.0 ##

1. Remove cordova-1.7.0.jar from the libs directory in your project
2. Add cordova-1.8.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.8.0.js into your project
5. Update your HTML to use the new cordova-1.8.0.js file
6. Update the res/xml/plugins.xml to be the same as the one found in framework/res/xml/plugins.xml


## Upgrade to 1.7.0 from 1.6.1 ##

1. Remove cordova-1.6.1.jar from the libs directory in your project
2. Add cordova-1.7.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.7.0.js into your project
5. Update the res/xml/plugins.xml to be the same as the one found in framework/res/xml/plugins.xml


## Upgrade to 1.6.1 from 1.6.0 ##

1. Remove cordova-1.6.0.jar from the libs directory in your project
2. Add cordova-1.6.1.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.6.1.js into your project
5. Update the res/xml/plugins.xml to be the same as the one found in framework/res/xml/plugins.xml

## Upgrade to 1.6.0 from 1.5.0 ##
1. Remove cordova-1.5.0.jar from the libs directory in your project
2. Add cordova-1.6.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.6.0.js into your project
5. Update your HTML to use the new cordova-1.6.0.js file
6. Update the res/xml/plugins.xml so that it is the same as the one found in framework/res/xml/plugins.xml
7. Replace the res/xml/phonegap.xml with res/xml/cordova.xml so that it is the same as the one found in framework/res/xml/cordova.xml


## Upgrade to 1.5.0 from 1.4.0##
1. Remove phonegap-1.4.0.jar from the libs directory in your project
2. Add cordova-1.5.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.5.0.js into your project
5. Update your HTML to use the new cordova-1.5.0.js file
6. Update the res/xml/plugins.xml so that it is the same as the one found in framework/res/xml/plugins.xml
7. Replace the res/xml/phonegap.xml with res/xml/cordova.xml so that it is the same as the one found in framework/res/xml/cordova.xml

## Upgrade to 1.4.0 from 1.3.0 ##
1. Remove phonegap-1.3.0.jar from the libs directory in your project
2. Add phonegap-1.4.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new phonegap-1.4.0.js into your project
5. Update your HTML to use the new phonegap-1.4.0.js file
6. Update the res/xml/plugins.xml so that it is the same as the one found in framework/res/xml/plugins.xml
7. Update the res/xml/phonegap.xml so that it is the same as the one found in framework/res/xml/phonegap.xml


## Upgrade to 1.3.0 from 1.2.0 ##
1. Remove phonegap-1.2.0.jar from the libs directory in your project
2. Add phonegap-1.3.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new phonegap-1.3.0.js into your project
5. Update your HTML to use the new phonegap-1.2.0.js file
6. Update the res/xml/plugins.xml so that it is the same as the one found in framework/res/xml/plugins.xml
7. Update the res/xml/phonegap.xml so that it is the same as the one found in framework/res/xml/phonegap.xml


## Upgrade to 1.2.0 from 1.1.0 ##
1. Remove phonegap-1.1.0.jar from the libs directory in your project
2. Add phonegap-1.2.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new phonegap-1.2.0.js into your project
5. Update your HTML to use the new phonegap-1.2.0.js file
6. Update the res/xml/plugins.xml so that it is the same as the one found in framework/res/xml/plugins.xml
7. Update the res/xml/phonegap.xml so that it is the same as the one found in framework/res/xml/phonegap.xml


## Upgrade to 1.1.0 from 1.0.0 ##
1. Remove phonegap-1.0.0.jar from the libs directory in your project
2. Add phonegap-1.1.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new phonegap-1.1.0.js into your project
5. Update your HTML to use the new phonegap-1.1.0.js file
6. Update the res/xml/plugins.xml so that it is the same as the one found in framework/res/xml/plugins.xml


## Upgrade to 1.0.0 from 0.9.6 ##
1. Remove phonegap-0.9.6.jar from the libs directory in your project
2. Add phonegap-1.0.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new phonegap-1.0.0.js into your project
5. Update your HTML to use the new phonegap-1.0.0.js file
6. Add the res/xml/plugins.xml so that it is the same as the one found in framework/res/xml/plugins.xml



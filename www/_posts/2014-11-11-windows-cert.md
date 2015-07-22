---
layout: post
author:
    name: Parashuram
    url: https://twitter.com/nparashuram
title:  "Critical Update: Windows 3.7.1. Release"
categories: news
tags: news release 
---

A certificate in the **Windows** platform template has expired on 11/11/2014 and as a result, building **Windows** using the **Cordova CLI** currently fails. This affects all existing projects and any new projects created using the command line prior to **Cordova** versions <= `4.0.0`. 

> Note that this does not affect the **WP8** platform.  

## Error Message
When building Cordova for **Windows**, you may seen an error message that looks something like this 


    cordova run windows

    C:\Program Files (x86)\MSBuild\Microsoft\VisualStudio\v12.0\AppxPackage\Microsoft.AppXPackage.Targets(1772,9): error APPX0108: The certificate specified has expired. 
    
For more information about renewing certificates, see [http://go.microsoft.com/fwlink/?LinkID=241478](http://go.microsoft.com/fwlink/?LinkID=241478).


## Workaround

This issue will be fixed in the next release of the **Cordova CLI**

However, to ensure that you can continue building your existing **Cordova** projects for **Windows** till then, please replace the expired certificate located at `yourCordovaProject\platforms\windows\CordovaApp_TemporaryKey.pfx` with a new one from [here](https://git-wip-us.apache.org/repos/asf?p=cordova-windows.git;a=blob;f=template/CordovaApp_TemporaryKey.pfx;h=90d7ab2208ce170d176a2ac8a60eb22fbc1cbf7a;hb=refs/tags/3.7.1). Ensure that the downloaded file is renamed to `CordovaApp_TemporaryKey.pfx`
<!--more-->

You can also remove the **Windows** platform using `cordova platform remove windows` and add it again, specifiying a version like `cordova platform add windows@3.7.1`. This picks up the latest release of the **Windows** platform that has a newer certificate.  

## Long term fix
We are working on a long term fix to generate this certificate dynamically. This way, the certificates are not checked into **Cordova** repositories and will not expire. 

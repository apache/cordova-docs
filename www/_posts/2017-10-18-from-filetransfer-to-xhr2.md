---
layout: post
author:
    name: Fil Maj
    url: https://twitter.com/filmaj
title:  "Transition off of cordova-plugin-file-transfer"
categories: blog
tags: plugins
---

Early on in Cordova's existence, the [file-transfer plugin](https://github.com/apache/cordova-plugin-file-transfer)
was created to solve the [problem of downloading binary files](https://issues.apache.org/jira/browse/CB-22).
At the time, there weren't great options for solving this using standards-compliant
web APIs. The web took a twisty path to get to a solution (see
[Firefox's `sendAsBinary`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/sendAsBinary)
and the now-defunct [FileSystem API](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html)'s
[BlobBuilder](https://developer.mozilla.org/en-US/docs/Web/API/BlobBuilder),
among others), but today you can use our good friend [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)'s
newest features, combined with some newer JavaScript types and objects,
[to solve this problem](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data).
This is an exciting moment for Cordova as the dream for this project was always
to eventually reduce the surface area of APIs the project maintains, and instead
see regular web APIs be able to handle these use cases.

As a result,
[Cordova is sunsetting the file-transfer plugin](https://issues.apache.org/jira/browse/CB-13052).
What does "sunsetting" mean? In summary:

* No more work will be done on the file-transfer plugin by the Cordova development
  community.
* You can continue to use the file-transfer plugin if you wish - it should work
  fine as-is for the foreseeable future.
* We highly suggest Cordova users transition to using the
  [standards-compliant way of sending and receiving binary data](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data).

All of us at Apache Cordova don't want to leave y'all hanging, though, so we
thought it'd be a good idea to show you how to use these newer XHR features to do
what file-transfer lets you do, but in a way that will work in any modern web
browser to boot!

## Requirements

Based on how deeply you interact with the underlying device filesystem, and on
which platforms, you may still need to rely on the
[Cordova File plugin](https://github.com/apache/cordova-plugin-file). If you
still have references to `requestFileSystem` or `root.fs` in your application's
JavaScript, you will definitely need the File plugin because these are not
standards-compliant APIs. Take note and care!

## Platform Support

Binary types in JavaScript, as well as the extended XHR features, are available
on the following Cordova-supported platforms without requiring any additional
plugins:

* Android 4.4 or newer.
* iOS 10 or newer.
* Windows UWP (8.1, 10 or newer all work).
* Windows Phone 8 or newer.

As always, check [caniuse.com](https://caniuse.com) for detailed support for the
required bits, like [`Blob`](http://caniuse.com/#feat=blobbuilder),
[Typed Arrays](http://caniuse.com/#feat=typedarrays), and
[extended XHR features](http://caniuse.com/#feat=xhr2).

## TL;DR

Standards are great and all, but what do you actually have to copy-paste to replace
the previous FileTransfer examples? We have you covered:

Here's a replacement for
[FileTransfer's "Download a Binary File" example](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file-transfer/index.html#download-a-binary-file-to-the-application-cache):

```js
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
    console.log('file system open: ' + fs.name);
    fs.root.getFile('bot.png', { create: true, exclusive: false }, function (fileEntry) {
        console.log('fileEntry is file? ' + fileEntry.isFile.toString());
        var oReq = new XMLHttpRequest();
        // Make sure you add the domain name to the Content-Security-Policy <meta> element.
        oReq.open("GET", "http://cordova.apache.org/static/img/cordova_bot.png", true);
        // Define how you want the XHR data to come back
        oReq.responseType = "blob";
        oReq.onload = function (oEvent) {
            var blob = oReq.response; // Note: not oReq.responseText
            if (blob) {
                // Create a URL based on the blob, and set an <img> tag's src to it.
                var url = window.URL.createObjectURL(blob);
                document.getElementById('bot-img').src = url;
                // Or read the data with a FileReader
                var reader = new FileReader();
                reader.addEventListener("loadend", function() {
                   // reader.result contains the contents of blob as text
                });
                reader.readAsText(blob);
            } else console.error('we didnt get an XHR response!');
        };
        oReq.send(null);
    }, function (err) { console.error('error getting file! ' + err); });
}, function (err) { console.error('error getting persistent fs! ' + err); });
```

Here's a similar replacement for
[FileTransfer's "Upload a File" example](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file-transfer/index.html#uploadFile):

```js
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
    console.log('file system open: ' + fs.name);
    fs.root.getFile('bot.png', { create: true, exclusive: false }, function (fileEntry) {
        fileEntry.file(function (file) {
            var reader = new FileReader();
            reader.onloadend = function() {
                // Create a blob based on the FileReader "result", which we asked to be retrieved as an ArrayBuffer
                var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
                var oReq = new XMLHttpRequest();
                oReq.open("POST", "http://mysweeturl.com/upload_handler", true);
                oReq.onload = function (oEvent) {
                    // all done!
                };
                // Pass the blob in to XHR's send method
                oReq.send(blob);
            };
            // Read the file as an ArrayBuffer
            reader.readAsArrayBuffer(file);
        }, function (err) { console.error('error getting fileentry file!' + err); });
    }, function (err) { console.error('error getting file! ' + err); });
}, function (err) { console.error('error getting persistent fs! ' + err); });
```

Note that both the above examples rely on the File plugin, so if you remove the
FileTransfer plugin from your app, make sure to add the File plugin!

## The Long Version

If you want to understand some of the nuts and bolts enabling binary data transferring,
you'll need to grasp two (possibly three) concepts. MDN has an absolutely fantastic
[article](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
on the topic that is worth a quick read, but I'll provide a summary here, too.

### Binary Types in JavaScript

For the longest time, there was no way to directly represent binary data and
access the underlying bytes in memory within JavaScript. We could encode this data
in different formats ([base64](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding),
anyone?), and that was cool, but just let me play with the bytes already. For
our purposes, we are interested in two objects in particular:
[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
and [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
Why do we care about these two? Because we can have XHRs return downloaded data
as these types, or pass these types directly to XHRs' `send` method.

### XHR

There are two newer XHR features, originally as part of what was referred to as
"XHR2" during its [development](https://www.w3.org/TR/XMLHttpRequest2/), that we
need to leverage to tie this all together.

For downloading binary data, we need to set the
[`responseType`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)
property to either `arraybuffer` or `blob` - this tells XHR what type we want
the data we are retrieving back in. With `responseType` set, we can then access
the read-only `response` property to get either the `ArrayBuffer` or `Blob`
object representing the data retrieved by XHR.

For uploading binary data, it is simpler: pass a `Blob` or `ArrayBuffer` directly
to XHR's [`send`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Sending_binary_data)
method. That's it.

## Summary

Binary types and extended XHR features are well supported in modern desktop
browsers, and on recent-ish mobile browsers (and WebViews). For existing Cordova
users, as long as your app targets the platform and OS version combinations listed
above under Platform Support, you should be good to go! Remember that if you rely
on certain File plugin APIs like `requestFileSystem`, `root`, or `getFile`,
you'll need to ensure the File plugin is added to your app.

Happy standards-compliant coding!

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

# Omre

Z `FileTransfer` predmet omogučiti vi v upload ali travnato gričevje pila, in iz strežnika.

## Lastnosti

*   **onprogress**: oklic s a `ProgressEvent` kadarkoli se prenese nov kos podatkov. *(Funkcija)*

## Metode

*   **upload**: pošlje datoteko v strežnik.

*   **Download**: downloads datoteke iz strežnika.

*   **prekinitev**: prekine poteka prenos.

## Podrobnosti

Z `FileTransfer` predmet ponuja način za nalaganje datotek na oddaljeni strežnik z uporabo HTTP zahtevo za multi-del POST. Protokolov HTTP in HTTPS so podprte. Izbirne parametre lahko določi mimo a `FileUploadOptions` nasprotuje na `upload()` način. Na uspešno upload, a `FileUploadResult` predmet se prenese na povratni klic uspeha. Če pride do napake, a `FileTransferError` predmet se prenese na povratni klic napake. Prav tako je možno (le na iOS in Android) prenesete datoteko iz oddaljenega strežnika in jo shranite v napravi.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## upload

**Parametri**:

*   **filePath**: polno pot datoteke v napravi.

*   **strežnik**: URL strežnika prejem datoteke, kot je kodirana z`encodeURI()`.

*   **successCallback**: povratni klic, ki je prešla v `Metadata` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri pridobivanju na `Metadata` . Invoked s a `FileTransferError` predmeta. *(Funkcija)*

*   **možnosti**: izbirne parametre, kot so ime datoteke in mimetype.

*   **trustAllHosts**: program privzeto neobvezni parameter, `false` . Če nastavite na `true` , sprejme vse varnostne certifikate. To je uporabno, saj Android zavrača samopodpisano certifikate. Ni priporočljivo za uporabo proizvodnih. Podpira Android in iOS. *(boolean)*

**Quick primer**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**Celoten primer**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**Nastavitev Upload glave**

Podpira Android in iOS

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Android Quirks**

Nastavite na `chunkedMode` možnost, da `false` za preprečevanje težav, nalaganje na strežnik Nginx.

## Download

**Parametri**:

*   **vir**: URL strežnika za prenos datoteke, kodirane z`encodeURI()`.

*   **cilj**: polno pot datoteke v napravi.

*   **successCallback**: povratni klic, ki je prešla v `FileEntry` predmeta. *(Funkcija)*

*   **errorCallback**: povratni klic, ki se izvede, če pride do napake pri pridobivanju na `Metadata` . Invoked s a `FileTransferError` predmeta. *(Funkcija)*

*   **trustAllHosts**: program privzeto neobvezni parameter, `false` . Če nastavite na `true` , sprejme vse varnostne certifikate. To je uporabno, ker Android zavrača samopodpisano certifikate. Ni priporočljivo za uporabo proizvodnih. Podpira Android in iOS. *(boolean)*

*   **možnosti**: izbirne parametre, trenutno le podpira glave (npr. dovoljenja (osnovno preverjanje pristnosti), itd).

**Quick primer**

    // !! Assumes filePath is a valid path on the device
    
    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://some.server.com/download.php");
    
    fileTransfer.download(
        uri,
        filePath,
        function(entry) {
            console.log("download complete: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        false,
        {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
    );
    

## prekinitev

Prekine poteka prenos. Povratni klic NaNapaki je opravil FileTransferError predmet, ki ima kodo napake FileTransferError.ABORT_ERR.

**Podprte platforme**

*   Android
*   iOS

**Quick primer**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function(r) {
        console.log("Should not be called.");
    }
    
    var fail = function(error) {
        // error.code == FileTransferError.ABORT_ERR
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    ft.abort();
    

## onprogress

Oklic s a ProgressEvent vsakič, ko nov kos podatkov se prenese.

**Podprte platforme**

*   Android
*   iOS

**Primer**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Quirks** - na obeh Android na iOS, lengthComputable je `false` za downloads, ki uporabljajo gzip kodiranje.
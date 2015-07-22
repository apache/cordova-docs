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

# FileTransfer

Das `FileTransfer` -Objekt können Sie hoch-oder Herunterladen von Dateien zu und von einem Server.

## Eigenschaften

*   **OnProgress**: aufgerufen, wobei ein `ProgressEvent` wann wird eine neue Datenmenge übertragen. *(Funktion)*

## Methoden

*   **Upload**: sendet eine Datei an einen Server.

*   **Download**: lädt eine Datei vom Server.

*   **Abbrechen**: Abbruch eine Übertragung in Bearbeitung.

## Informationen

Das `FileTransfer` Objekt bietet eine Möglichkeit zum Hochladen von Dateien auf einem remote-Server mithilfe einer mehrteiligen HTTP-POST-Anforderung. HTTP- und HTTPS-Protokolle werden unterstützt. Optionale Parameter können angegeben werden, indem Sie übergeben ein `FileUploadOptions` gegen die `upload()` Methode. Auf erfolgreichen Upload ein `FileUploadResult` -Objekt wird an den Erfolg-Rückruf übergeben. Wenn ein Fehler auftritt, ein `FileTransferError` -Objekt wird an den Fehler-Rückruf übergeben. Es ist auch möglich (nur auf iOS und Android), eine Datei von einem remote-Server herunterladen und speichern Sie es auf dem Gerät.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Upload

**Parameter:**

*   **FilePath**: vollständigen Pfad der Datei auf das Gerät.

*   **Server**: URL des Servers, die Datei zu empfangen, wie kodiert`encodeURI()`.

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `Metadata` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Abrufen der `Metadata` . Aufgerufene mit einem `FileTransferError` Objekt. *(Funktion)*

*   **Optionen**: optionale Parameter wie z. B. Dateinamen und Mimetype.

*   **TrustAllHosts**: Optionaler Parameter, wird standardmäßig auf `false` . Wenn legen Sie auf `true` , es akzeptiert alle Sicherheitszertifikate. Dies ist nützlich, da Android selbstsignierte Zertifikate ablehnt. Nicht für den produktiven Einsatz empfohlen. Auf Android und iOS unterstützt. *(Boolean)*

**Kleines Beispiel**

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
    

**Vollständiges Beispiel**

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
    

**Einstellung-Upload-Header**

Auf Android und iOS unterstützt

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
    

**Android Macken**

Legen Sie die `chunkedMode` -option, um `false` Probleme beim Hochladen auf einen Nginx-Server zu verhindern.

## Download

**Parameter:**

*   **Quelle**: URL des Servers, um die Datei herunterzuladen, wie kodiert`encodeURI()`.

*   **Ziel**: vollständige Pfad der Datei auf das Gerät.

*   **SuccessCallback**: ein Rückruf, der übergeben wird ein `FileEntry` Objekt. *(Funktion)*

*   **ErrorCallback**: ein Rückruf, der ausgeführt wird, tritt ein Fehler beim Abrufen der `Metadata` . Aufgerufene mit einem `FileTransferError` Objekt. *(Funktion)*

*   **TrustAllHosts**: Optionaler Parameter, wird standardmäßig auf `false` . Wenn legen Sie auf `true` , dann es alle Sicherheitszertifikate akzeptieren wird. Dies ist nützlich, da Android selbst signierte Zertifikate ablehnt. Nicht für den produktiven Einsatz empfohlen. Auf Android und iOS unterstützt. *(Boolean)*

*   **Optionen**: optionale Parameter, derzeit nur unterstützt Kopfzeilen (z. B. Autorisierung (Standardauthentifizierung), etc.).

**Kleines Beispiel**

    // !! Übernimmt FilePath ist ein gültiger Pfad auf den Gerät-Var-FileTransfer = neue FileTransfer();
    Var Uri = EncodeURI ("http://some.server.com/download.php");
    
    fileTransfer.download (Uri, FilePath, function(entry) {console.log ("Download abgeschlossen:" + entry.fullPath);
        }, function(error) {console.log ("Download Fehlerquelle" + error.source);
            Console.log ("Download-Fehler-Ziel" + error.target);
            Console.log ("Upload Error Code" + error.code);
        }, falsche, {Header: {"Autorisierung": "grundlegende dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA =="}});
    

## Abbruch

Bricht einen in-Progress-Transfer. Der Onerror-Rückruf wird ein FileTransferError-Objekt übergeben, die einen Fehlercode FileTransferError.ABORT_ERR hat.

**Unterstützte Plattformen**

*   Android
*   iOS

**Kleines Beispiel**

    // !! Wird davon ausgegangen, Variable FileURI enthält einen gültigen URI in eine Textdatei auf dem Gerät Var gewinnen = function(r) {console.log ("sollte nicht aufgerufen werden.");}
    
    Var Fehler = function(error) {/ / error.code == FileTransferError.ABORT_ERR Alert ("Fehler: Code =" + error.code);
        Console.log ("Upload-Fehlerquelle" + error.source);
        Console.log ("Upload-Fehler-Ziel" + error.target);}
    
    Var Optionen = neue FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    Var ft = neue FileTransfer();
    ft.Upload (FileURI, EncodeURI ("http://some.server.com/upload.php"), Win, Fail, Optionen);
    ft.Abort();
    

## OnProgress

Mit einer ProgressEvent aufgerufen, wenn eine neue Datenmenge übertragen wird.

**Unterstützte Plattformen**

*   Android
*   iOS

**Beispiel**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Quirks** - auf beide Android ein iOS, LengthComputable ist `false` für Downloads, die Gzip-Codierung verwenden.
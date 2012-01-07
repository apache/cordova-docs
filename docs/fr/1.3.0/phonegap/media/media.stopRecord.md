media.stopRecord
================

Arrêter l'enregistrement du fichier audio.

    media.stopRecord();


Description
-----------

La fonction `media.stopRecord` est une fonction synchrone qui arrête l'enregistrement d'un fichier audio.

Plateformes supportées
----------------------

- Android
- iOS
- Windows Phone 7 ( Mango )
    
Exemple rapide
--------------

    // Lancer l'enregistrement audio
    // 
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // Callback en cas de succès
            function() {
                console.log("recordAudio() : Réussite");
            },
            
            // Callback en cas d'erreur
            function(err) {
                console.log("recordAudio() : Erreur : "+ err.code);
            });

        // Lancer l'enregistrement audio
        mediaRec.startRecord();

        // Arrêter l'enregistrement au bout de 10 secondes
        setTimeout(function() {
            mediaRec.stopRecord();
        }, 10000);
    }


Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Media</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Lancer l'enregistrement audio
        // 
        function recordAudio() {
            var src = "myrecording.mp3";
            var mediaRec = new Media(src, onSuccess, onError);

            // Lancer l'enregistrement audio
            mediaRec.startRecord();

            // Arrêter l'enregistrement au bout de 10 secondes
            var recTime = 0;
            var recInterval = setInterval(function() {
                recTime = recTime + 1;
                setAudioPosition(recTime + " sec");
                if (recTime >= 10) {
                    clearInterval(recInterval);
                    mediaRec.stopRecord();
                }
            }, 1000);
        }

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            recordAudio();
        }
    
        // Callback en cas de succès
        //
        function onSuccess() {
            console.log("recordAudio() : Réussite");
        }
    
        // Callback en cas d'erreur
        //
        function onError(error) {
            alert('code : '    + error.code    + '\n' + 
                  'message : ' + error.message + '\n');
        }

        // Ecrire la position
        // 
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }

        </script>
      </head>
      <body>
        <p id="media">Enregistrement audio...</p>
        <p id="audio_position"></p>
      </body>
    </html>




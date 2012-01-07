media.getDuration
=================

Récupérer la durée d'un fichier audio.

    media.getDuration();


Description
-----------

La fonction `media.getDuration` récupère de façon synchrone la durée en secondes d'un fichier audio, si elle est connue.  Si la durée est inconnue, la valeur retournée est -1.

Plateformes supportées
----------------------

- Android
- iOS
- Windows Phone 7 ( Mango )
    
Exemple rapide
--------------

        // Lecteur audio
        //
        var my_media = new Media(src, onSuccess, onError);

        // Récupérer la durée
        var counter = 0;
        var timerDur = setInterval(function() {
            counter = counter + 100;
            if (counter > 2000) {
                clearInterval(timerDur);
            }
            var dur = my_media.getDuration();
            if (dur > 0) {
                clearInterval(timerDur);
                document.getElementById('audio_duration').innerHTML = (dur) + " sec";
            }
       }, 100);


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
        
            // PhoneGap est prêt
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }
        
            // Lecteur audio
            //
            var my_media = null;
            var mediaTimer = null;
        
            // Lire le clip audio
            //
            function playAudio(src) {
                // Créer l'objet Media à partir de src
                my_media = new Media(src, onSuccess, onError);
        
                // Lire le clip audio
                my_media.play();
        
                // Récupérer la positon courante une fois par seconde
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // Récupérer la positon de my_media
                        my_media.getCurrentPosition(
                            // Callback en cas de succès
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position) + " sec");
                                }
                            },
                            // Callback en cas d'erreur
                            function(e) {
                                console.log("Erreur lors de la récupération de la position = " + e);
                                setAudioPosition("Erreur : " + e);
                            }
                        );
                    }, 1000);
                }
            }
        
            // Mettre en pause la lecture audio
            // 
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
            }
        
            // Arrêter la lecture audio
            // 
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
                }
                clearInterval(mediaTimer);
                mediaTimer = null;
            }
        
            // Callback en cas de succès
            //
            function onSuccess() {
                console.log("playAudio() : Réussite");
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
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">Lire le clip audio</a>
            <a href="#" class="btn large" onclick="pauseAudio();">Mettre en pause la lecture</a>
            <a href="#" class="btn large" onclick="stopAudio();">Arrêter la lecture</a>
            <p id="audio_position"></p>
          </body>
        </html>

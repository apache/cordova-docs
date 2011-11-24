CaptureCB
=========

> Appelé suite à une opération de capture réussie.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };

Description
-----------

Cette fonction est appelé lorsqu'une opération d'enregistrement de média a réussi.  Cela signifie qu'un fichier a été enregistré, et que soit l'utilisateur a quitté l'application d'enregistrement en question, soit la limite du nombre d'enregistrements autorisés a été atteinte.

Chaque objet MediaFile décrit un fichié media enregistré.  

Exemple rapide
--------------

    // Fonction de callback en succès
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // Faire quelque chose d'intéressant avec le fichier
        }
    };

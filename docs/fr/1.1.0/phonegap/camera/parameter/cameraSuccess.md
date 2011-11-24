cameraSuccess
=============

Fonction de callback en cas de succès, fournit les données de l'image.

    function(imageData) {
        // Faire quelque chose avec l'image
    }

Paramètres
----------

- __imageData:__ Flux encodé en Base64 de l'image, OU une URI de fichier image, selon `cameraOptions`. (`String`)

Exemple
-------

    // Afficher l'image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('monImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
ConfigurationData
=================

> Regroupe un ensemble de paramètres de capture qu'un mobile supporte.

Description
-----------

Cet objet est utilisé pour décrire les modes de capture supportés par le mobile.  Ceci inclut le type MIME et les dimensions des captures (pour les images et vidéos).  

Les types MIME doivent être conformes au [RFC2046](http://www.ietf.org/rfc/rfc2046.txt).  Exemples:

- video/3gpp
- video/quicktime
- image/jpeg
- audio/amr
- audio/wav 

Propriétés
----------

- __type:__ La chaîne ASCII en minuscule représentant le type du média. (DOMString)
- __height:__ La hauteur de l'image ou de la vidéo, en pixels.  Dans le cas d'un clip audio, cet attribut vaut 0. (Number)
- __width:__ La largeur de l'image ou de la vidéo, en pixels.  Dans le cas d'un clip audio, cet attribut vaut 0. (Number)

Exemple rapide
--------------

    // Récuperer les modes supportés pour les images
    var imageModes = navigator.device.capture.supportedImageModes;

    // Selectionner le mode qui définit la plus grande largeur
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }


N'est supporté sur aucune plateforme.  Les tableaux de ConfigurationData sont systématiquement vides.
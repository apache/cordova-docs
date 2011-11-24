compassSuccess
==============

Fonction de callback onSuccess qui fournit les information de direction de la boussole au travers d'un objet `compassHeading`.

    function(heading) {
        // Faire quelquechose
    }

Paramètres
----------


- __heading:__ Les données de direction. _(compassHeading)_

Exemple
-------

    function onSuccess(heading) {
        alert('Cap : ' + heading.magneticHeading);
    };

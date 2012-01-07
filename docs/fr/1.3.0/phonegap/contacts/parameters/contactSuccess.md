contactSuccess
==============

Fonction de callback onSuccess qui fournit un tableau de `Contact` résultant d'un appel à `contacts.find`.

    function(contacts) {
        // Faire quelquechose
    }

Paramètres
----------

- __contacts:__ Le tableau de `Contact` résultant d'une recherche. (`Contact`)

Exemple
-------

    function contactSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			console.log("Nom d'affichage du contact = " + contacts[i].displayName;
    }
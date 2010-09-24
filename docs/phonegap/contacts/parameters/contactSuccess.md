contactSuccess
==============

onSuccess callback function that provides the contacts array.

    function(contacts) {
        // Do something
    }

Parameters
----------

- __contacts:__ The contact arrary returned by the device. (`Contact`)

Example
-------

    function contactSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			console.log("Display Name = " + contacts[i].displayName;
    }
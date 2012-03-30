contactSuccess
==============

Success callback function that provides the `Contact` array resulting from a `contacts.find` operation.

    function(contacts) {
        // Do something
    }

Parameters
----------

- __contacts:__ The contact array resulting from a find operation. (`Contact`)

Example
-------

    function contactSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			console.log("Display Name = " + contacts[i].displayName;
    }
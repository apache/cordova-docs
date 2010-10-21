ContactFindOptions
==================

Contains properties that can be used to limit or filter the results of a `contacts.find` operation.

Properties
----------

- __filter:__ The search string used to find contacts. _(DOMString)_ (Default: "")
- __multiple:__ Determines if the find operation should return multiple contacts. _(Boolean)_ (Default: true)
- __limit:__ The maximum number of contacts to return. Only used if multiple is true. _(Number)_ (Default: MAXINT)
- __updatedSince:__ Only return contacts updated since the date specified. _(Date)_ (Default: "")

Supported Platforms
-------------------

- Android
- BlackBerry Widgets (OS 5.0 and higher)

Quick Example
-------------

	// success callback
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert(contacts[i].displayName);
		}
    };

	// error callback
    function onError() {
        alert('onError!');
    };

	// specify contact search criteria
    var options = new ContactFindOptions();
	options.filter="";			// empty search string returns all contacts
	options.multiple=true;		// return multiple results
	options.limit=10;			// limit results to 10 contacts
	filter = ["displayName"];	// return contact.displayName field
	
	// find contacts
    navigator.service.contacts.find(filter, onSuccess, onError, options);

Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
			// specify contact search criteria
		    var options = new ContactFindOptions();
			options.filter="";			// empty search string returns all contacts
			options.multiple=true;		// return multiple results
			options.limit=10;			// limit results to 10 contacts
			filter = ["displayName"];	// return contact.displayName field

			// find contacts
		    navigator.service.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				alert(contacts[i].displayName);
			}
		};
    
        // onError: Failed to get the contacts
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>

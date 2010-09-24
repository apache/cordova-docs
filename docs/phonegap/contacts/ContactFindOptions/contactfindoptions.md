ContactFindOptions
==================

Contains `ContactFindOptions` properties that are passed as an optional parameter to customize the retrieval of the contacts.


Properties
----------

- __filter:__ The search string used to find contacts. _(DOMString)_ (Default: "")
- __multiple:__ Determines if the find command should return multiple contacts. _(Boolean)_ (Default: true)
- __limit:__ The maximum number of contacts to return. Only used if multipe is true. _(Number)_ (Default: MAXINT)
- __updatedSince:__ Only return contacts updated since the date specified. _(Date)_ (Default: "")

Supported Platforms
-------------------

- Android

Quick Example
-------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert(contacts[i].displayName);
		}
    };

    function onError() {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	options.multiple=true;
	options.limit=10;
	options.updatedSince="";
	filter = ["displayName"];
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
			var options = new ContactFindOptions();
			options.filter="";
			options.multiple=true;
			options.limit=10;
			options.updatedSince="";
			filter = ["displayName"];
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

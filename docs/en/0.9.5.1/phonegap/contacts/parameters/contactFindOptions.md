contactFindOptions
==================

Optional parameter of the `contacts.find` method.  Use this parameter to filter the contacts returned from the contacts database.

    { 
		filter: "",
		multiple: true,
		updatedSince: ""
	};

Options
-------

- __filter:__ The search string used to filter contacts. _(DOMString)_ (Default: "")
- __multiple:__ Determines if the find operation should return multiple contacts. _(Boolean)_ (Default: true)
- __updatedSince:__ Only return contacts updated since the date specified. _(Date)_ (Default: "")

Android Quirks
----------
- __updatedSince:__ Not currently supported.

BlackBerry WebWorks (OS 5.0 and higher) Quirks
---------------------------------------------
- __updatedSince:__ Not currently supported.

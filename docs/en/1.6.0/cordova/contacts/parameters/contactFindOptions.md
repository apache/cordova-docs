contactFindOptions
==================

Optional parameter of the `contacts.find` method.  Use this parameter to filter the contacts returned from the contacts database.

    { 
		filter: "",
		multiple: true,
	};

Options
-------

- __filter:__ The search string used to filter contacts. _(DOMString)_ (Default: "")
- __multiple:__ Determines if the find operation should return multiple contacts. _(Boolean)_ (Default: false)


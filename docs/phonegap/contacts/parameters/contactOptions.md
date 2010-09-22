contactOptions
==============

An optional parameter to customize the retrieval of the contacts.

    { 
		filter: "",
		multiple: true,
		limit: 5,
		updatedSince: ""
	};

Options
-------

- __filter:__ The search string used to find contacts. _(DOMString)_ (Default: "")
- __multiple:__ Determines if the find command should return multiple contacts. _(Boolean)_ (Default: true)
- __limit:__ The maximum number of contacts to return. Only used if multipe is true. _(Number)_ (Default: MAXINT)
- __updatedSince:__ Only return contacts updated since the date specified. _(Date)_ (Default: "")

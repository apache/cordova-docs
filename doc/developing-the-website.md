## Developing

To work on the website and see changes live as you save, run:

    node_modules/.bin/gulp serve

That command will build the site and start a local server. To work on only the website without the docs, add the `--nodocs` flag, as follows:

    node_modules/.bin/gulp serve --nodocs

Alternatively, to dynamically rebuild the site and refresh the browser _when changes happen_ (again, optionally with the `--nodocs` flag), run:

    node_modules/.bin/gulp watch

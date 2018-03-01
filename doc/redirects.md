# Redirects

Sometimes (docs) pages get removed, renamed, and added. There is [a redirects file](../www/_data/redirects.yml) that contains redirects for such occasions. It has three sections:

- `general`: single-page redirects,
- `docs-global`: redirects across all docs versions and languages, and
- `docs`: version-specific docs redirects.

For non-docs URIs, there are no versioning considerations. Make redirects like so:

    general:
        - "old/uri/for/page.html": "its/new/uri.html"

**NOTE**: Review (and test, if possible) these redirects before making them live, since they're permanent (HTTP 301) redirects. Incorrect permanent redirects will make a URI almost impossible to bring back into browsers and search indices.

## Changing Docs URIs

There are five cases of changing URIs:

1. Adding a brand new (no past equivalent) URI starting at a version,
2. Removing an old URI (with no replacement) starting at a version,
3. Renaming (removing and adding) an existing URI starting at a version,
4. Renaming an existing URI across all versions,
5. Removing an existing URI across all versions.

### Case 1: Adding a URI starting at a version

Do nothing. Going back in time for new docs is unsupported.

### Cases 2 &amp; 3: Removing or renaming a URI starting at a version

If the URI is removed, mark it as deprecated in `latest/` like so:

    docs:
        - "latest/old/uri/for/page.html": "deprecated.html"

If the URI is moved, point it to its new location in `latest/` like so:

    docs:
        - "latest/old/uri/for/page.html": "latest/its/new/uri.html"

These will handle the case where the "this content is outdated" link is clicked. The case where a user jumps to a specific version is not yet supported.

### Case 4: Renaming a URI across all versions

Add the redirect (in the `docs-global` section this time) like so:

    docs-global:
        - "old/uri/for/page.html": "its/new/uri.html"

### Case 5: Removing a URI across all versions

Do nothing. It is now an un-URI. It never existed.

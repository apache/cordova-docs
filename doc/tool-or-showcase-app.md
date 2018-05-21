# Adding a Tool or a Showcase App

Items on the **Cordova Tools** or the **Cordova App Showcase** sections on the main page are modifiable by the public. Below are the guidelines and process to do so.

## Guidelines

The display _image_ shall:

1. be __less than 128KiB__ in size (NOTE: those are kibibytes, not kilobytes),
2. contain the __logo__ of the tool/app,
3. use __colors that don't compete__ with other elements on the page, and
4. have acceptable measurements, as follows:
    - __298px by 100px__ or smaller with a roughly rectangular aspect ratio for tools, and
    - __100px by 100px__ or smaller with a square aspect ratio for apps.

The _description_ shall:

1. contain __neutral__ and non-advertising language.

The _name_ shall:

1. be __at most 40__ characters long.

Showcase _apps_ shall:

1. be available for download on a __public app store__ or website.

Furthermore, descriptions are stripped of HTML and are truncated to fit as follows:

- down to 255 characters for tools and,
- down to 200 characters for showcase apps.

## Process

1. Change the section's YAML file:
    - [www/_data/tools.yml](../www/_data/tools.yml) for Cordova Tools, or
    - [www/_data/showcase-apps.yml](../www/_data/showcase-apps.yml) for Cordova App Showcase.
1. Optionally add an image:
    1. Place the image in the section's `img` directory:
        - [www/static/img/tools](../www/static/img/tools) for Cordova Tools, or
        - [www/static/img/showcase-apps](../www/static/img/showcase-apps) for Cordova App Showcase.
    1. In the YAML file, set the `image` field to the file's *name*.
1. Submit a [GitHub pull request][pr] with the changes.

[pr]: https://help.github.com/articles/using-pull-requests/

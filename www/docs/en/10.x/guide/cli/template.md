---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: Cordova App Templates
description: Learn how to find, use, and create templates in Cordova.
toc_title: Templates for apps

---

# Cordova App Templates

## Use a Template

Templates allow you to use preexisting code to jumpstart your project. 

![]({{ site.baseurl }}/static/img/guide/cli/template.png)

Find a template to create your app from by seaching for the keyword `cordova:template` on [npm](https://www.npmjs.com/search?q=cordova%3Atemplate). You can also use local templates on your computer, or a Git repository.

After locating a template you wish to use. Create your project using that template, by specifying the `--template` flag during the `create` command, followed by your template source.

Creating a cordova project from an NPM package, Git repository, or local path:
```
$ cordova create hello com.example.hello HelloWorld --template <npm-package-name>
$ cordova create hello com.example.hello HelloWorld --template <git-remote-url>
$ cordova create hello com.example.hello HelloWorld --template <path-to-template>
```

After succesfully using a template to create your project, you'll want to indicate the platforms that you intend to target with your app. Go into your project folder and [add platforms](http://cordova.apache.org/docs/en/latest/guide/cli/index.html#add-platforms).

## Create a Template

Begin by creating a cordova app that will become the basis for your template. Then you'll take the contents of your app and put them into the following structure. When your template is used, all of the contents within `template_src` will be used to create the new project, so be sure to include any necessary files in that folder. Reference [this example](https://github.com/apache/cordova-app-hello-world) for details.

```
template_package/
├── package.json   	(optional; needed to publish template on npm)
├── index.js 		(required)
└── template_src/ 	(required)
    └── CONTENTS OF APP TEMPLATE
```
> __NOTE__: `index.js` should export a reference to `template_src` and `package.json` should reference `index.js`. See [the example](https://github.com/apache/cordova-app-hello-world) for details on how that is done.

To finish off your template, edit `package.json` to contain the keyword `"cordova:template"`.
```javascript
{
  ...
  "keywords": [
    "ecosystem:cordova",
    "cordova:template"
  ]
  ...
}
```

Congrats! You've made a template for creating a Cordova project. Share your template on npm so that everyone can benefit from your hard work.

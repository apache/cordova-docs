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

title: contactFindOptions
---

contactFindOptions
==================

Optional parameter of the `[contacts.find](../contacts.find.html)` method, used to filter the
contacts returned from the contacts database.

    {
      filter: "",
      multiple: true,
    };

Options
-------

- __filter__: The search string used to filter contacts. _(DOMString)_ (Default: `""`)
- __multiple__: Determines if the find operation returns multiple contacts. _(Boolean)_ (Default: `false`)
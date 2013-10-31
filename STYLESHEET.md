---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Style Sheet

Before adding or editing documentation, please review these basic
editorial guidelines.

## In-line Font Formatting

* Use `monospace` for all-purpose nouns used in programming, e.g.: API
  interfaces, methods, properties, literal values, Unix commands,
  pathnames, filenames, etc.

* Use __bold__ for on-screen items, such as the names of menu items,
  buttons, and check boxes.

* Use _italics_ for emphasis, simple mathematical expressions, and
  variable items (e.g., _x_/_y_ coordinates).

* Do _not_ use ALL CAPS for emphasis. (Exception: in commented code)

* Do _not_ use "quote characters" to deliniate in-line text unless
  required as part of a value. E.g., not OK to refer to the
  "text-align" property. OK to set the CSS `text-align` property to
  `left`, and the `content` property to `"This is some text."`
  (Exception: within code comments)

* Do not combine in-line formatting such as _`monospace italic`_.

* Use italics for any in-line font changes within headings. This only
  applies to font _changes_, not e.g. to standalone API members that
  would ordinarily be monospaced within text.  Still, try to avoid any
  font changes within headings, especially top-level headings.

## Structure

* Flatten text wherever possible. Avoid nested lists. Avoid
  third-level subheadings.

* Only one top-level heading allowed: the page's title.

* Do not follow a heading with a subheading or a list with no
  intervening text.

* Avoid too many NOTEs, as it implies too many variable factors that
  can go wrong. Try to clarify variations on a procedure within the
  text.

* Use numbered lists for sequential procedures only, otherwise use
  bullet lists.

* Punctuation at the end of bullet/number list items that consist of
  full sentences.

* To improve readability, add vertical space around top-level
  bullet/numbered list items that consist of full sentences. OK to
  collapse lists of short, easily scannable items.

## Language and Tone

* Use present tense. "This happens," not "this will happen." (Future
  tense sounds like a tenuous prediction.)

* Passive voice is to be avoided. E.g., "the pause event fires
  when..."  rather than "the pause event is fired when..."

* Prefer action verbs over weak verbs like "is" or "has."

* Minimize verbs ending with "ing": "This is necessary to provide...",
  not "This is necessary for providing..."

* Do not drop articles: "In the Bada IDE", not "In Bada IDE"

* Possessives are OK: "the device's home screen" rather than clumsier:
  "the home screen of the device"

* 'The FOO file', not 'the file FOO', no matter how long FOO's
  filename is.

* Hyphenate adjective phrases: "command-line tools", but not when it's
  a noun, as in "the command line."

* Use serial comma: this, that, and the other.

* Do not start a sentence with a lowercase member name.

* Do not refer to "I," the author of the documentation, as in "What I
  am going to show you now." Likewise avoid "we" and "let's," so
  instead of "We see that..." try "Note that..."

* OK to refer to "you," the developer, but only if necessary, e.g., to
  avoid passive voice.

* Avoid unnecessarily imperative statements, especially using the word
  "must." E.g., instead of "Commands must be run from a cmd or
  powershell prompt," try "You can run commands either from a cmd or
  powershell prompt."

* Avoid em dash clauses--they unnecessarily break up the text--and
  parenthical statements (which can also be distracting). If you do
  include either, remove spaces around the dashes (punctuate fragments
  outside of paren's). (Punctuate full sentences inside of parens.)

* This Guide or section, not this document, page, or anything else

## Usage

* "User" may refer to the end user, not to the application's
  developer. Refer to plural "users" as "they" to avoid singular
  he/she pronoun problems.

* WebView, not Webview. (OK to use lowercase webview in code)

* "splash screen" unless specifically referring to API.

* 'Directory', not 'folder'; may be exceptions in some GUI contexts

* Subdirectory, not sub-directory

* 'Press' a button on the screen; 'type' a key; do not 'hit' either.

* 'Set up' as verb, 'setup' as noun.

* 'Handheld' not 'hand held'

* Filename, not file name

* 'JavaScript' (but lowercase when MIME type)

* Unix, not unix

* Mac "OS X", not "OSX"

* BlackBerry, not Blackberry

* "BlackBerry 10," not "BlackBerry10"

* Prefer "emulator" over "simulator"; clarify when interfaces refer to
  them differently.

* Prefer generic "SDK" over "IDE", or "SDK tools" when referring to
  dedicated GUI coding environments such as Eclipse. (OK to refer to
  specific tools as IDEs if that's how they self-identify.)

* Remove superfluous "navigate to" wherever possible, unless you need
  to `cd` to a particular directory to launch a command. Instead of
  "Navigate to the D directory and edit the F file," prefer: "Edit the
  _D/F_ file."

* An XML/HTML 'element' rather than 'tag'

* It's a "method" when called on an object. Refer to "function" only
  when unspecified, e.g. a "callback function" may also be implemented
  as an object method.

* Use parentheses when referring to `method()` and `function()` names.
  (Exception: when assigning a reference to the object rather than
  calling it as a method.)

* Spell out "and" and "or"; do not substitute with "&" or "/" in text

* "and/or" is unnecessary; "or" usually makes that implicit.

* Avoid unnecessary/gratuitous slash-delimited alternators in text, as
  in this example (but OK to refer to try/catch blocks).

* Avoid trailing (s) to denote optional plural. It's usually implicit.
  E.g., "return information about captured image files", not "file(s)"

## Punctuation

* Initial Cap Words in Headings, Except for Short Prepositions or
  Conjunctions

* Append colon to text that introduces a code snippet, image, or
  procedure listing.

* Use `&amp;rarr;` arrow entities (&rarr;) for hierarchical menus or
  sequences of nested dialog boxes.

* Add periods at end of bullet items when they consist of complete
  sentences. No periods when bullets are sentence fragments. However,
  bullet lists should be internally consistent.

## Common Grammatical Errors

* Do not use use apostrophes for plural, so "...manages core APIs,"
  not api's or API's. Only use apostrophes for possessives, e.g. "the
  API's members"

* "applications" not "app's" for plural

* Do not hyphenate adverbs, as it's implict they modify verbs.  So,
  "commonly seen problems," not "commonly-seen problems"

## Content-specific

* Refer to the default app as "Hello World", regardless of what it
  actually displays.

* Refer to the default plugin demo as "Echo"

## Miscellaneous

* For procedure lists, don't break out separate items for (1) do this,
  followed by (2) this describes what just happened. Prefer (1) Do
  this. It does so-and-so, which you might see in some result. (2) Do
  that...

* Bold & all-cap __NOTE:__, with colon inside, always at the start of
  a paragraph, never mid-paragraph. Do not incorporate font change
  into sentences as in "__Note__ that..." but OK to start a sentence:
  "Note that..." when the information is less consequential.

* As an alternative to __NOTE:__, use __WARNING:__ for serious
  matters, or __TIP:__ to pass along useful tricks or context.

* Use titles in link text, never 'click here'

* __Topic/comment lists__: For bullet lists that provide short topics
  followed by comments, bold the topic, then merge the comment on the
  same line, separated with a colon unless the topic features trailing
  punctuation. The text you are reading provides an example.

* In body text, no ( extra space inside parens ). OK to increase
  readability of code.


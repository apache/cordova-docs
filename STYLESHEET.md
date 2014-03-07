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

# Editorial Style Sheet

Developers contributing to Cordova are already familiar with coding
best practices.  What you'll find here are best practices when writing
tech doc addressed to Cordova developers. A consistent set of
standards helps tie together doc, and makes it seem like it's written
with one voice.

There are two basic kinds of tech doc: reference content and
expository "guide" content. Reference doc tends to be self-contained,
descriptive, and scoped without context: e.g., detailing an API
interface and its members.  Guide content is prescriptive, linear, and
part of a larger story. How do you typically use the API (or
whatever), what do you need to know first, what are the limits to what
you can use it for, etc. Guide content is oriented more around tasks,
common use cases, or especially now in Cordova's case, alternative
workflows.  It may not be obvious, but if you first ask yourself what
purpose the doc you're editing serves, it improves its quality
immensely.

These guidelines are not necessarily set in stone. If you think of
alternatives or exceptions, please note them here.  Some of the issues
identified below are listed along with recursive `grep` commands to
help identify them in Markdown.

## Structure and Flow

* __Provide Context__: Each page of expository doc should start with a
  short paragraph summarizing the subject matter, and serving as
  necessary connective tissue to other doc.  Link to other related &
  prerequisite topics, especially for likely workflow scenarios.
  E.g., Plugman doc is most appropriate for platform-specific
  shell-tool workflow, not for the CLI even though it underlies it
  invisibly.

* __Valid Heading Structure__: One title only (an A-head) at the top
  of the page.  No jumps to C-heads. Do not follow a heading with a
  subheading with no intervening introductory text.

        grep -hr '^#' *        # Lists all headings; use '#' prefixes rather than underlines

* __Flatten Content__: Use B-heads to divide each page's content. Please
  avoid C-heads. Readers tend to lose context once content gets that
  nested. Think: "blog post."

        grep -hr '^###' *      # Identifies C-heads

* __Consistent Headings__: Try to match verb tense in headings. That
  is, if one is task-based and reads "Adding a Platform," the other
  should be "Developing for Android" rather than "Android Development"

* __Heading Content__: In reference doc, preserve case in titles and
  headings.  In guide doc: Initial Cap Words in Headings, Except for
  Short Prepositions or Conjunctions. Also Init-Cap Around Hyphens. No
  punctuation at the end of a heading, and avoid punctuation within
  headings.  Do not prefix headings with numbers.

        grep -hr '^#' * | sed 's/^#*//g' | grep '[^A-Za-z0-9 ]'

* __Heading Fonts__: In reference doc, do not apply font formatting to
  standalone member names such as compass.getCurrentHeading. Minimize
  font changes within headings. If necessary, only apply italic.

* __Listings__: Use numbered lists for sequential procedures or ranked
  content only, otherwise use bullet lists.  Precede lists with text
  that introduces them, preferably ending with a colon (:).  Do not
  allow single-item lists.  Use bullet lists only to indicate a clear
  set of choices that you first introduce, not as a substitute for a
  series of regular paragraphs.  Avoid nested lists, for the same
  reason you avoid C-heads. Do not indent top-level lists.

* __Punctuating and Formatting Lists__: Append periods to bullet and
  number list items that consist of full sentences. No periods when
  bullet items are sentence fragments, except in bullet lists that
  need internal consistency. To improve readability, add vertical
  space around top-level bullet/numbered list items that consist of
  full sentences. OK to vertically collapse lists of short, easily
  scannable items.

* __Procedure Lists__: Don't break out separate procedure items for
  (1) do this, followed by (2) this describes what just happened, then
  (3) do that.  Prefer (1) Do this. It does so-and-so, which you might
  see in some result. (2) Do that...

* __Topic/Comment Lists__: For bullet lists that provide short topics
  followed by comments, bold the topic, then merge the comment on the
  same line, separated with a colon unless the topic features trailing
  punctuation. This list item provides an example. Bolded Topic Text
  Follows Same Init-Cap Rule as Headings.

* __Notes__: Bold and all-cap __NOTE__:, with colon outside, always at
  the start of a paragraph, never mid-paragraph. Do not incorporate
  this font change into a sentence as in "__Note__ that..." but OK to
  start a sentence: "Note that..." when the information is less
  consequential. Do not apply bullet/number list formatting.

        grep -hr ':__' *
        grep -hr ' __NOTE' *
        grep -hr 'Note:' *
* __Warnings/Tips__: As an alternative to __NOTE__:, use __WARNING__:
  for serious matters, or __TIP__: to pass along useful tricks or
  context.

        grep -hri 'Tip:' *
        grep -hri 'Warning:' *

* __Minimize Notes__: Avoid too many notes and warnings, as it implies
  a haphazard development environment with too many variable factors
  that divert the reader's attention. Try to clarify variations on a
  procedure within the text. Try to focus attention on information
  specific to Cordova, not on background knowledge.

## Language and Tone

* __Not So Imperative__: As a rule of thumb, avoid the word "must" and
  unnecessarily imperative statements in general.  E.g., instead of
  "Commands must be run from a cmd or powershell prompt," try "You can
  run commands either from a cmd or powershell prompt."

        grep -hri '\<must\>' *
        grep -r '\<requires*\>' *

* __Avoid the Willies__: Use present tense. "This happens," not "this
  will happen." Future tense comes off as a tenuous prediction. Rule
  of thumb: avoid the word "will."

        grep -hri '\<will\>' *

* __Avoid Passive Voice__: Past-tense passive voice is to be avoided.
  E.g., "the pause event fires when..."  rather than "the pause event
  is fired when..." Rule of thumb: banish verbs ending in "ed".
  Passive voice is more appropriate for reference doc, you should
  still avoid it when there's a better active-voice alternative.

        grep -hr '\<is [a-z]*ed\>' *
        grep -hr '\<be [a-z]*ed\>' *
        grep -hr '\<was [a-z]*ed\>' *

* __Not Kidding, Use Present Tense__: Minimize verbs ending with
  "ing": "This is necessary to provide...", not "This is necessary for
  providing..." <!-- are\s-+[a-z]+ing\b -->

        grep -hr '\<for [a-z]*ing\>' *
        grep -hr '\<by [a-z]*ing\>' *

* __Use Action Verbs__: Avoid weak verbs like "is" or "has." The
  sentence in the item above could stand improvement.

* __Noun Phrase Jargon__: Avoid noun modification concatenation
  somnambulation obfuscation.  Use your judgement and ask yourself if
  readers might not actually know what some noun phrase means. If so,
  explain the actual concept it represents, in this case: "Avoid
  stringing nouns together into long phrases that come off as
  impenetrable shop talk that puts everybody to sleep."

* __Use Possessives__: Possessives sound more familiar and colloquial:
  "the device's home screen" rather than clumsier: "the home screen of
  the device"

        grep -hr '\<of the\>' *

* __The Brothers Karmazov__: 'The FOO file', not 'the file FOO', no
  matter how long FOO's path is. Rule of thumb: would you say it when
  speaking out loud?

* __Serial comma__: This, that, and the other.

* Do not drop articles: "In the Bada IDE", not "In Bada IDE"

* Do not start a sentence with a lowercase member name. E.g., "Does
  not support `filter`" rather than "`filter` is not supported"

        grep -hr '\. `' *

* Do not refer to "I," the author of the documentation, as in "What I
  am going to show you now." Likewise avoid "we" and "let's," so
  instead of "We see that..." try "You see that" or "Note that..."
  Readers want to focus on whatever they're working on, not on you.

        grep -hr '\<I\>' *

* OK to refer to "you," the developer, but only sparingly, e.g., to
  avoid the passive voice. Also do not use "your" as a routine
  substitute for "the" or "a" when referring to a noun.

        grep -hri '\<your*\>' *

* Avoid em dash clauses--they unnecessarily break up the text--and
  parenthical statements (which can also be distracting). If you do
  include either, remove spaces around the dashes (punctuate fragments
  outside of paren's). (Punctuate full sentences inside of parens.)

* Refer to this Guide or section, not this document, page, or anything
  else.

## In-line Font Formatting

* Use `monospace` for all-purpose nouns used in programming, e.g.: API
  interfaces, methods, properties, literal values, Unix commands,
  pathnames, filenames, etc.

* Use __bold__ for on-screen items, such as the names of menu items,
  buttons, and check boxes.

* Use _italics_ for emphasis, simple mathematical expressions, and
  variable items (e.g., _x_/_y_ coordinates).

* Do _not_ use ALL CAPS for emphasis. (Exception: in code comments)

* Do _not_ use "quote characters" to deliniate in-line text unless
  required as part of a value. E.g., not OK to refer to the
  "text-align" property. OK to set the CSS `text-align` property to
  `left`, and the `content` property to `"This is some quoted text."`
  (Exception: within code comments)

* Do not combine in-line formatting such as _`monospace italic`_.

* Use the markup system's shorthand characters rather than embedded
  HTML `<em>...</em>` or `<code>...</code>`.

## Usage

* "User" may refer to the end user, not to an application's
  "developer" who is presumably reading the doc. Refer to plural
  "users" as "they" to avoid singular he/she pronoun problems. Also
  avoid "his" and "her".  <!--RE\bs?he\b--> <!--RE\b(his|her)\b-->

        grep -hri '\<s*he\>' *
        grep -hri '\<his\>' *
        grep -hri '\<her\>' *

* WebView, not Webview. (OK to use lowercase webview in code)

* "In-line" rather than "inline" in ordinary text, e.g., outside of
  technical terms.

* "Plugman" in generic references, `plugman` when referring to the
  actual utility as invoked on the command line.

* metadata.

* Xcode.

* "splash screen" unless specifically referring to the name of the API.

* 'Directory', not 'folder'; may be exceptions in some GUI contexts.

* Prefer "can't" over "cannot"; sounds more relaxed.

* Subdirectory, not sub-directory

* 'Press' a button on the screen; 'type' a key; do not 'hit' either.

* 'Set up' as verb, 'setup' as noun.

* 'handheld' not 'hand held' or 'hand-held'

* Filename, not file name

* 'JavaScript' (but lowercase when MIME type)

* Unix, not unix

* Mac "OS X", not "OSX"

* BlackBerry, not Blackberry

* "BlackBerry 10," not "BlackBerry10"

* Prefer "emulator" over "simulator"; clarify when interfaces refer to
  them differently.

* Use "app" for mobile apps, and "application" for presumably more
  complex desktop affairs. E.g., you may use the Xcode application to
  help you write an iOS Cordova app.  Consider "app" a valid word
  rather than a contraction, so use "apps" rather than "app's" as
  plural.

* Likewise, "repo" is OK to substitute for "repository"

* Prefer generic "SDK" over "IDE", or "SDK tools" when referring to
  dedicated GUI coding environments such as Eclipse. (OK to refer to
  specific tools as IDEs if that's how they self-identify.)

* Remove superfluous "navigate to" wherever possible, unless you need
  to `cd` to a particular directory to launch a command. Instead of
  "Navigate to the `D` directory and edit the `F` file," prefer: "Edit
  the `D/F` file." And don't tell people which text editor to use.
  That's fascist.

* An XML/HTML 'element' rather than 'tag'

* Without getting into any pointless arguments about object-oriented
  programming, it's a "method" when called on an object. Refer to
  "function" only when unspecified, e.g. you can implement a "callback
  function" as an object method, but not necessarily.

* Use parentheses when referring to `method()` and `function()` names.
  (Exception: when assigning a reference to the object rather than
  calling it as a method.)

* Spell out "and" and "or"; do not substitute with "&" or "/" within
  text.

* "and/or" is unnecessary; "or" usually makes that implicit.

* Avoid unnecessary/gratuitous slash-delimited alternators in text, as
  in this example (but OK to refer to try/catch blocks).

* Avoid trailing (s) to denote optional plural. It's usually implicit.
  E.g., "return information about any captured image files", not
  "file(s)"

* Avoid the word "multiple" wherever possible.  It's one of those
  unnecessary words up there with "myriad" or "plethora." What ever
  happened to "several"?

## Punctuation

* Append colon to text that introduces a code snippet or image.

* Use `&amp;rarr;` arrow entities (&rarr;) for hierarchical menus or
  sequences of nested dialog boxes.

## Common Grammatical Errors

* __Hyphenate Adjective Phrases__: E.g., "command-line tools", but not
  when it's a noun, as in "the command line."

* __It's a Crazy Language, but its Rules Eventually Make Sense__:
  Hyphenate "it's" only for "it is," not for possessive.

* __Plural Possessives__: E.g., Obtain a user's permission, but
  collectively, get users' permission.

* Do not use apostrophes for plural, so "...manages core APIs,"
  not api's or API's. Only use apostrophes for possessives, e.g. "the
  API's members"

* "applications" not "app's" for plural

* Do not hyphenate adverbs, as it's implict they modify verbs.  So,
  "commonly seen problems," not "commonly-seen problems"

* Use semicolons to separate short, closely related clauses that can
  stand alone grammatically as full sentences. Use commas to separate
  clauses where one is a sentence fragment. E.g., "This is a clause,
  along with this." vs.  "This can serve as a sentence; this can too."

* If a sentence with semicolons runs on too long, it's time to break
  it out into separate sentences. Rewrite this...  "This can serve as
  a sentence; this can too, along with related information."  ...as...
  "This can serve as a sentence. This can too, along with related
  information."

* This can serve as a sentence and this can also serve as a sentence
  but you need to use commas to separate this big mess.

## Content-specific

* Refer to the default app as "Hello World", regardless of what it
  actually displays.

* Refer to the default plugin demo as "Echo"

* Keep the term "hybrid" app confined to two scenarios: (1) an app
  whose developer has to supply components that bridge native &
  webview, e.g., custom plugins, or an embedded webview component. (2)
  An app with an InAppBrowser, that is a web-based app that itself
  opens a web page. Don't apply to a garden-variety "cross-platform"
  app that is Cordova's bread and butter.

## Links

* Use titles in link text, never 'click here'. Consider using the
  link's domain name as a substitute.

* Domain names are OK as a link's display text, but not full
  scheme-qualified URLs. No bare URLs in text outside of code.

        grep -hr '\[http' *

## Miscellaneous

* OK to use shorthand notation for version ranges, e.g. "5.0+" rather
  than "(OS 5.0 and higher)"

* Use space characters rather than tabs in code blocks.


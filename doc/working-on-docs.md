# Working on `www/docs`

## Pull in documentation from other repos

* Many files of the documentation come from other repos (mainly plugin READMEs) and are simply pulled together by a build script.
* `tools/bin/fetch_docs.js` (execute via `node ./tools/bin/fetch_docs.js`) has more details and `www/_data/fetched-files.yml` contains an informative list of src/dest pairs.
* This can also be executed via `gulpfile.js` task `fetch`, by running `gulp fetch` which pulls in the files to `dev/en/{file dest}`.
* Most auto-generated files have a comment tag at the top of the file to indicate that they come from elsewhere.

## Update current docs from `dev`

The following command can quickly sync the `dev` docs with the current latest docs:

```bash
npm run update-docs
```

Read more [here](https://github.com/apache/cordova-docs/blob/master/gulpfile.js#L212).

## Create new snapshot from `dev`

The following commands can be used to create a new snapshot of `dev` docs:

```bash
npx gulp newversion
npx gulp newversion --bumpCli
```

Please read the section, [Preparing Doc Release Scenarios](#Preparing-Doc-Release-Scenarios), below to understand which command fits your scenario.

## Preparing Doc Release Scenarios

When preparing to release docs, there are two things to be aware of, the version of Cordova CLI and if the changes warrants for a new doc version.

Here are a few scenarios that will help decide how if we are updating an existing snapshot of creating a new one.

1. Are we preparing to release new docs because there was a major release of Cordova CLI?

    If the answer is **yes**, then we will be creating a new version of docs with the following command:

    ```bash
    npx gulp newversion --bumpCli
    ```

    If the current released docs version is `12.x` and we are preparing for Cordova-CLI 13.x, the above command will create `13.x-2024.10`.

    > Notice: The year and month will be appended automatically.

2. Are we preparing to release new docs because there was a minor or patch release of Cordova CLI?

    If the answer is **yes**, then we do not need to make a new snapshot. In this case, we can update an existing snapshot with the following command:

    ```bash
    npm run update-docs
    ```

    > Notice: In this scenario we are expecting the version to already exist. If it was missing, then we would have to create a new snapshot but in most cases it should never be missing.

3. Are we preparing docs for a major release to one or more of Cordova's platforms while the CLI version was unchanged?

    If the answer is **yes**, then we need to make a new snapshot, but we do not need to bump the CLI major. We can do this with the following command:

    ```bash
    npx gulp newversion
    ```

    If the current doc snapshot is `12.x`, then the above command will create a new snapshot with the same CLI major version but the appended date will be different.

    E.g. `12.x-2024.10`

    > Notice:
    >
    > *`12.x` and older does not have date appended. Any newly created snapshots will append the date value.
    > * If we already have `12.x-2024.10` and the month is still the same, we should use senario 2. `npm run update-docs`.

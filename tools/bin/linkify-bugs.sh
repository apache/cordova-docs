#!/usr/bin/env bash

if [[ ! -z "$1" ]]; then
    cd $1
fi

for f in *.md; do
  echo Processing: $f
  perl -pi -e 's/ (CB-[0-9]+)/ [$1](https:\/\/issues.apache.org\/jira\/browse\/$1)/g' "$f"
  perl -pi -e 's/ \[(CB-[0-9]+)\] / [$1](https:\/\/issues.apache.org\/jira\/browse\/$1) /g' "$f"
done

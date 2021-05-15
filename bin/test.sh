#!/bin/bash

FILE="bin/folders.txt"

npm run build
DIRS=""
while read F  ; do
    DIRS="$DIRS $F"
done <$FILE
    npx eslint -c lib/index.js --resolve-plugins-relative-to ./  $DIRS



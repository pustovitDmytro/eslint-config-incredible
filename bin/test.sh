#!/bin/bash

FILE="bin/folders.txt"
rm -rf lib
npm run build
DIRS=""
ROOT=$(pwd)
while read F ; do
    cd $F
    npx eslint -c $ROOT/lib/index.js --resolve-plugins-relative-to $ROOT src bin tests
    DIRS="$DIRS $F"
done <$FILE
    echo "Checked $DIRS"

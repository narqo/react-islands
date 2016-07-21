#!/usr/bin/env sh

SRCDIR=src
MAIN=$SRCDIR/index.js

COMPONENTS=$(find ${SRCDIR}/* -mindepth 1 -maxdepth 1 -type f -name index.js | cut -f2 -d '/')

echo "/* eslint-disable */\n" > $MAIN

for component in ${COMPONENTS}; do
    echo "add $component to $MAIN"
    echo "export ${component} from './${component}';" >> $MAIN
done

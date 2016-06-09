#!/usr/bin/env sh

SRCDIR=src
MAIN=$SRCDIR/index.js

COMPONENTS=$(find ${SRCDIR}/* -type f -name index.js -depth 1 | cut -f2 -d '/')

echo "/* eslint-disable */\n" > $MAIN

for component in ${COMPONENTS}; do
    echo "add $component to $MAIN"
    echo "export ${component} from './${component}';" >> $MAIN
done

#!/bin/bash
EXPECT=671;
RESULT=$(./index.js test.css | wc -l);
if [ $EXPECT == $RESULT  ]; then
  exit 0;
else
  exit 1;
fi;

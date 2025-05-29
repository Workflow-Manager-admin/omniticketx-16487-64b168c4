#!/bin/bash
cd /home/kavia/workspace/code-generation/omniticketx-16487-64b168c4/omniticketx
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


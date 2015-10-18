#!/bin/bash
cd "$(dirname "$0")/.."
source ./bin/lib/strict_mode.sh

node-dev --debug=$(($(config3 port) + 1)) ./app/server.js | \
  tee -a ./log/app.log | \
  bistre

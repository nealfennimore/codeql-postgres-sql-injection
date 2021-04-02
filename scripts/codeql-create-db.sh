#! /usr/bin/env bash

echo "================================"
echo "Create CodeQL DB"
echo "================================"

docker run --rm -it -u $(id -u) \
    -v $PWD/codeql/db:/tmp/db \
    -v $PWD/src:/tmp/src \
    ghcr.io/nealfennimore/codeql:javascript \
    codeql database create --language=javascript --source-root /tmp/src /tmp/db
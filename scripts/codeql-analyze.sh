#! /usr/bin/env bash

echo "================================"
echo "Analyze Source Code"
echo "================================"

docker run --rm -it -u $(id -u) \
    -v $PWD/codeql/db:/tmp/db \
    -v $PWD/src:/tmp/src \
    -v $PWD/codeql/output:/tmp/output \
    -v $PWD/codeql/queries:/tmp/queries \
    ghcr.io/nealfennimore/codeql:javascript \
    codeql database analyze \
        --format=sarif-latest \
        --output=/tmp/output/results.sarif \
        /tmp/db /tmp/queries
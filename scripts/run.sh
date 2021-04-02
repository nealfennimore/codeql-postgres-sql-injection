#! /usr/bin/env bash

echo "================================"
echo "Start DB Container"
echo "================================"
docker run -d -it --rm -p 5432:5432 -e "POSTGRES_PASSWORD=password" isp

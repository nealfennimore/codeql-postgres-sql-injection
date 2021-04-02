#! /usr/bin/env bash

echo "================================"
echo "Build Docker"
echo "================================"

docker build -f docker/Dockerfile -t isp .
#!/bin/bash
git pull
docker build -t transit .
docker-compose up -d

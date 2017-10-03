#!/bin/bash
# Update and restart script

git pull
pm2 restart webserver
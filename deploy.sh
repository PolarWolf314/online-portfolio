#!/bin/bash

printf "\nRUNNING \"pm2 kill\"\n\n"
pm2 kill

printf "\nRUNNING \"git pull\"\n\n"
git pull

printf "\nRUNNING \"npm install\"\n"
npm install

printf "\nRUNNING \"npm run build\"\n"
npm run build

printf "\nRUNNING \"pm2 start \"npm run start\" --name \"online-portfolio\"\"\n\n"
pm2 start "npm run start" --name "online-portfolio"
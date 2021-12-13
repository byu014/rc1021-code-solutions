#!/bin/bash
npm init -y
npm i react react-dom
npm i --save-dev webpack webpack-cli babel-loader @babel/core @babel/plugin-transform-react-jsx
mkdir dist src
touch dist/index.html src/index.js

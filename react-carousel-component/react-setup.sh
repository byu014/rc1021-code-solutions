#!/bin/bash
npm init -y
npm i react react-dom
npm i --save-dev webpack webpack-cli babel-loader @babel/core @babel/plugin-transform-react-jsx
mkdir dist src
touch dist/index.html dist/styles.css src/index.jsx
cp ../webpack.config.js ./webpack.config.js
echo -e '<!DOCTYPE html>\n' \
'<html lang="en">\n' \
'<head>\n'\
'  <meta charset="UTF-8">\n '\
'  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' \
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' \
'  <link rel="stylesheet" href="styles.css">\n' \
'  <title>Document</title>\n '\
'</head>\n' \
'<body>\n' \
'  <div id="root"></div>\n' \
'  <script src="main.js"></script>\n '\
'</body>\n' \
'</html>' > dist/index.html \

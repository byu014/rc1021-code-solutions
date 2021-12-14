#!/bin/bash
npm init -y
npm i react react-dom
npm i --save-dev webpack webpack-cli babel-loader @babel/core @babel/plugin-transform-react-jsx
mkdir dist src
touch dist/index.html dist/styles.css src/index.jsx
cp ../webpack.config.js ./webpack.config.js
echo "<!DOCTYPE html> \
<html lang="en"> \
<head> \
  <meta charset="UTF-8"> \
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> \
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
  <title>Document</title> \
</head> \
<body> \
  <div id="root"></div> \
  <script src="main.js"></script> \
</body> \
</html> \
" > src/index.html \
/

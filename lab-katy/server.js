'use strict';

const http =  require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  console.log('full request obj:', req);
  console.log('req url:', req.url);
  console.log('req method:', req.method);
});

server.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});


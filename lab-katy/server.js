'use strict';

const http =  require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

// import { think, BONG } from 'cowsay';

const server = http.createServer(function(req, res) {
  // console.log('full request obj:', req);
  // console.log('req url:', req.url);
  // console.log('req method:', req.method);
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);
  // console.log('url parsed: ', req.url);
  // console.log('query string parsed:', req.url.query);

  if(req.method === 'GET' && req.url.pathname === '/cowsay'){
    let params = req.url.query;
    if(params.text){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    // http :3000/cowsay text=='blah' f=='dragon'
    res.write(cowsay.say({ text: params.text, f: params.f }));
  } else {
    if(!params.text) {
      res.writeHead(400);
      res.write(cowsay.say({ text: 'bad request' }));
    }
  }
    res.end();
  }

  // if(req.method === 'GET' && req.url.pathname === '/bong'){
  //   let params = req.url.query;
  //   res.writeHead(200);
  //   res.write(bong.say({ text: params.text }));
  // }

  if (req.method === 'GET'){
    res.write('haiiiiii from mah server!!');
    res.end();
  }

  if (req.method === 'POST' || req.method === 'PUT') {

    parseBody(req, function(err){
      if(req.body.text) {
        if(err) return console.error(err);
        // console.log('request body:', req.body);
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        // console.log('req body text:', req.body.text);
        res.write(cowsay.say({ text: req.body.text }));
    } else {
      if(!req.body.text){
        // console.log('got through to wrong parameters part of code', req.body);
        res.writeHead(400);
        res.write(cowsay.say({text: 'bad request'}))
      };
    }
      res.end();
    });
};
})


server.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
})
